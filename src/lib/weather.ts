import { ENTITY } from '../consts';

/**
 * 服务器端天气数据获取（服务端渲染 + 缓存）。
 * 数据在服务端取得并缓存，页面只输出「天气怎么样、要不要带伞」的结论，
 * 不向访客暴露任何接口实现细节。
 */

export interface CurrentWeather {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  precipitation: number;
  windSpeed: number;
  code: number;
  isDay: boolean;
}

export interface DailyWeather {
  date: string;
  code: number;
  tempMax: number;
  tempMin: number;
  precipitation: number;
  precipitationProbability: number;
  windMax: number;
  uvIndexMax: number;
  sunrise: string;
  sunset: string;
}

export interface WeatherData {
  current: CurrentWeather;
  daily: DailyWeather[];
  fetchedAt: string;
}

const ENDPOINT = 'https://api.open-meteo.com/v1/forecast';
const TIMEZONE = 'Asia/Manila';
/** 缓存时长：15 分钟 */
const TTL_SECONDS = 15 * 60;
const TIMEOUT_MS = 4500;

interface CacheLike {
  match(req: Request): Promise<Response | undefined>;
  put(req: Request, res: Response): Promise<void>;
}

let memory: { at: number; data: WeatherData } | null = null;

function buildUrl(): string {
  const params = new URLSearchParams({
    latitude: String(ENTITY.latitude),
    longitude: String(ENTITY.longitude),
    current:
      'temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,is_day',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,uv_index_max,sunrise,sunset',
    timezone: TIMEZONE,
    forecast_days: '7',
  });
  return `${ENDPOINT}?${params.toString()}`;
}

/** WMO 天气代码 → 文案键 */
export function weatherCodeKey(code: number): string {
  if (code === 0) return 'clear';
  if (code === 1) return 'mainlyClear';
  if (code === 2) return 'partly';
  if (code === 3) return 'overcast';
  if (code === 45 || code === 48) return 'fog';
  if (code === 51 || code === 53 || code === 55 || code === 56 || code === 57) return 'drizzle';
  if (code === 61 || code === 63 || code === 65 || code === 66 || code === 67) return 'rain';
  if (code === 71 || code === 73 || code === 75 || code === 77) return 'snow';
  if (code === 80 || code === 81 || code === 82) return 'showers';
  if (code === 85 || code === 86) return 'snow';
  if (code === 95) return 'thunder';
  if (code === 96 || code === 99) return 'storm';
  return 'clear';
}

/** 湿度、风力等指标的「人话」分级 */
export type WindLevel = 'light' | 'moderate' | 'strong' | 'gale';
export type UvLevel = 'low' | 'moderate' | 'strong' | 'veryStrong' | 'extreme';
export type RainWord = 'none' | 'low' | 'moderate' | 'high';

export interface WeatherAdvice {
  /** 风险提醒（优先级最高，置顶展示） */
  risk: string[];
  /** 出行穿搭 */
  outfit: string[];
  /** 游玩安排 */
  plan: string[];
  /** 随身物品 */
  items: string[];
  /** 是否需要雨具，用于卡片强调色 */
  umbrella: boolean;
  windLevel: WindLevel;
  uvLevel: UvLevel;
  rainWord: RainWord;
}

function windLevel(speed: number): WindLevel {
  if (speed >= 50) return 'gale'; // 7 级以上
  if (speed >= 29) return 'strong'; // 5–6 级
  if (speed >= 12) return 'moderate';
  return 'light';
}

function uvLevel(uv: number): UvLevel {
  if (uv >= 11) return 'extreme';
  if (uv >= 8) return 'veryStrong';
  if (uv >= 5) return 'strong';
  if (uv >= 3) return 'moderate';
  return 'low';
}

function rainWord(prob: number, wetCode: boolean, rain: number): RainWord {
  if (rain >= 10 || prob >= 80) return 'high';
  if (prob >= 60 || wetCode) return 'moderate';
  if (prob >= 30) return 'low';
  return 'none';
}

/**
 * 智能建议引擎：由天气数据推导「游客该怎么做」。
 * 只返回命中的条目 key（本地化文案放在 i18n），未命中的条目不会出现在页面上。
 * 侧重点按景点自身地理环境定制：石灰岩丘陵、214 级露天台阶、内陆道路、离岛船程。
 */
export function buildAdvice(data: WeatherData): WeatherAdvice {
  const day = data.daily[0];
  const cur = data.current;
  const codeKey = weatherCodeKey(cur.code);
  // 当日天气码与实时码一起判断：热带地区常见「上午晴、午后雷雨」
  const dayCodeKey = day ? weatherCodeKey(day.code) : codeKey;
  const wetKey = (key: string) =>
    key === 'drizzle' || key === 'rain' || key === 'showers' || key === 'thunder' || key === 'storm';
  const wetCode = wetKey(codeKey) || wetKey(dayCodeKey);
  const stormy = codeKey === 'thunder' || codeKey === 'storm' || dayCodeKey === 'thunder' || dayCodeKey === 'storm';

  const wind = Math.max(cur.windSpeed, day?.windMax ?? 0);
  const uv = day?.uvIndexMax ?? 0;
  const prob = day?.precipitationProbability ?? 0;
  const rain = Math.max(day?.precipitation ?? 0, cur.precipitation);
  const tempMax = day?.tempMax ?? cur.temperature;
  const tempMin = day?.tempMin ?? cur.temperature;
  const diurnal = tempMax - tempMin;

  const wLevel = windLevel(wind);
  const uLevel = uvLevel(uv);
  const rWord = rainWord(prob, wetCode, rain);

  const risk: string[] = [];
  const outfit: string[] = [];
  const plan: string[] = [];
  const items: string[] = [];

  // 1) 风险提醒：预警优先级最高，不满足则整块降级为「无预警」
  if (stormy) risk.push('storm');
  if (rain >= 10) risk.push('heavyRain');
  else if (!stormy && (prob >= 80 || (wetCode && rain >= 3))) risk.push('rainAlert');
  if (!stormy && data.daily.slice(1, 4).some((d) => weatherCodeKey(d.code) === 'thunder' || weatherCodeKey(d.code) === 'storm')) {
    risk.push('stormAhead');
  }
  if (wLevel === 'gale') risk.push('wind');
  if (uLevel === 'extreme') risk.push('uvExtreme');
  if (tempMax >= 36) risk.push('heat');
  if (codeKey === 'fog') risk.push('fog');

  // 2) 出行穿搭
  if (rWord === 'high' || rWord === 'moderate') outfit.push('rain');
  if (wLevel === 'strong' || wLevel === 'gale') outfit.push('wind');
  if (tempMax >= 32) outfit.push('hot');
  else if (tempMax <= 10) outfit.push('cold');
  if (uLevel === 'extreme') outfit.push('uvExtreme');
  else if (uLevel === 'strong' || uLevel === 'veryStrong') outfit.push('uv');
  if (diurnal > 8) outfit.push('diurnal');
  if (outfit.length === 0) {
    outfit.push(codeKey === 'clear' || codeKey === 'mainlyClear' ? 'clear' : 'mild');
  }

  // 3) 游玩安排（丘陵 + 离岛场景，最多 4 条）
  if (stormy) plan.push('storm');
  else if (rWord === 'high') plan.push('heavyRain');
  else if (rWord === 'moderate') plan.push('rain');
  if (wLevel === 'strong' || wLevel === 'gale') plan.push('wind');
  if (tempMax >= 32) plan.push('heat');
  else if (cur.apparentTemperature >= 34 || cur.apparentTemperature - cur.temperature >= 4) plan.push('muggy');
  if (codeKey === 'fog') plan.push('fog');
  if (codeKey === 'clear' || codeKey === 'mainlyClear') plan.push('clear');
  else if (codeKey === 'partly' || codeKey === 'overcast') plan.push('cloudy');
  if (rWord !== 'none') plan.push('wetStairs');
  plan.push('morning');

  // 4) 随身物品（按需出现，最多 6 件）
  if (rWord === 'high' || rWord === 'moderate') {
    items.push(wLevel === 'gale' || wLevel === 'strong' ? 'raincoat' : 'umbrella');
  }
  if (uLevel === 'strong' || uLevel === 'veryStrong' || uLevel === 'extreme' || codeKey === 'clear' || codeKey === 'mainlyClear') {
    items.push('sunscreen', 'sunglasses', 'hat');
  }
  if (tempMax >= 30 || uLevel === 'strong' || uLevel === 'veryStrong' || uLevel === 'extreme') {
    items.push('water');
  }
  if (diurnal > 8) items.push('jacket');
  if (rWord !== 'none') items.push('gripShoes');
  if (codeKey === 'fog') items.push('mask');
  if (cur.humidity >= 80) items.push('repellent');

  return {
    risk,
    outfit,
    plan: plan.slice(0, 5),
    items: items.slice(0, 6),
    umbrella: items.includes('umbrella') || items.includes('raincoat'),
    windLevel: wLevel,
    uvLevel: uLevel,
    rainWord: rWord,
  };
}

function num(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : 0;
}

function normalize(raw: any): WeatherData | null {
  const current = raw?.current;
  const daily = raw?.daily;
  if (!current || !daily || !Array.isArray(daily.time) || daily.time.length === 0) return null;

  const days: DailyWeather[] = daily.time.map((date: string, i: number) => ({
    date,
    code: num(daily.weather_code?.[i]),
    tempMax: num(daily.temperature_2m_max?.[i]),
    tempMin: num(daily.temperature_2m_min?.[i]),
    precipitation: num(daily.precipitation_sum?.[i]),
    precipitationProbability: num(daily.precipitation_probability_max?.[i]),
    windMax: num(daily.wind_speed_10m_max?.[i]),
    uvIndexMax: num(daily.uv_index_max?.[i]),
    sunrise: typeof daily.sunrise?.[i] === 'string' ? daily.sunrise[i].slice(11, 16) : '',
    sunset: typeof daily.sunset?.[i] === 'string' ? daily.sunset[i].slice(11, 16) : '',
  }));

  return {
    current: {
      temperature: num(current.temperature_2m),
      apparentTemperature: num(current.apparent_temperature),
      humidity: num(current.relative_humidity_2m),
      precipitation: num(current.precipitation),
      windSpeed: num(current.wind_speed_10m),
      code: num(current.weather_code),
      isDay: current.is_day !== 0,
    },
    daily: days,
    fetchedAt: new Date().toISOString(),
  };
}

function runtimeCache(): CacheLike | null {
  const g = globalThis as any;
  return g?.caches?.default ?? null;
}

/**
 * 取得天气数据：优先使用运行时缓存（Workers 缓存 API），其次使用进程内短缓存。
 * 任何异常都返回 null，页面会降级为季节概览，不影响整站渲染。
 */
export async function getWeather(): Promise<WeatherData | null> {
  const url = buildUrl();
  const now = Date.now();

  if (memory && now - memory.at < TTL_SECONDS * 1000) return memory.data;

  const cache = runtimeCache();

  try {
    const request = new Request(url);

    if (cache) {
      const hit = await cache.match(request);
      if (hit) {
        const data = normalize(await hit.clone().json());
        if (data) {
          memory = { at: now, data };
          return data;
        }
      }
    }

    const response = await fetch(url, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { accept: 'application/json' },
    });

    if (!response.ok) return null;

    const text = await response.text();
    const data = normalize(JSON.parse(text));
    if (!data) return null;

    memory = { at: now, data };

    if (cache) {
      await cache.put(
        request,
        new Response(text, {
          headers: {
            'content-type': 'application/json',
            'cache-control': `public, max-age=${TTL_SECONDS}`,
          },
        })
      );
    }

    return data;
  } catch {
    return null;
  }
}
