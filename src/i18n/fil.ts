import type { TranslationShape } from './en';

export const fil: TranslationShape = {
  _meta: {
    locale: 'fil',
    htmlLang: 'fil',
    ogLocale: 'fil_PH',
    // TDK：sakop ang mga high-intent query (bayad / oras / viewing deck / 2026)
    siteTitle: 'Chocolate Hills Bohol: Bayad, Oras at Viewing Deck (2026)',
    siteTitleShort: 'Chocolate Hills',
    tagline: 'Ang Pinakamatamis na Likha ng Kalikasan sa Bohol, Pilipinas',
    siteDescription:
      'Chocolate Hills Complex sa Carmen, Bohol: ₱100 bayad sa pagpasok, bukas araw-araw 8:00 AM–5:30 PM, 214 na hakbang papuntang viewing deck, address, mapa at larawan. Gabay para sa 2026.',
    // OG 模板：{{ATTRACTION_FULL_NAME}} - {{CITY_NAME}} Travel Guide
    ogTitle: 'Chocolate Hills Complex, Carmen Bohol — Gabay sa Bisita 2026',
    ogDescription:
      'Bayad sa pagpasok, oras ng pagbubukas, 214 na hakbang papuntang viewing deck, mapa ng lokasyon, transportasyon at mga tip para sa Chocolate Hills Complex, Bohol.',
    ogImageAlt: 'Viewing deck ng Chocolate Hills Complex sa Carmen, Bohol',
  },
  breadcrumb: {
    ariaLabel: 'Breadcrumb',
    home: 'Home',
    attraction: 'Chocolate Hills Complex',
    city: 'Carmen',
    region: 'Bohol',
    country: 'Pilipinas',
  },
  nav: {
    about: 'Tungkol',
    gallery: 'Gallery',
    fees: 'Tiket at Bayad',
    transport: 'Transportasyon',
    map: 'Mapa',
    weather: 'Panahon',
    facilities: 'Pasilidad',
    faq: 'FAQ',
  },
  hero: {
    exploreCta: 'Galugarin ang mga Burol',
    mapsCta: 'Tingnan sa Google Maps',
    subTagline: 'hugis-kono na burol na sumasaklaw sa',
  },
  quickFacts: {
    adultEntry: 'Pagpasok ng Matanda',
    openDaily: 'Bukas Araw-araw',
    reviews: 'pagsusuri',
    stepsLabel: 'Patungo sa Deck ng Tanaw',
  },
  about: {
    eyebrow: 'Tungkol',
    // H2 模板：About {{ATTRACTION_FULL_NAME}}
    heading: 'Tungkol sa Chocolate Hills Complex',
    // 4.1 首段等位声明模板：将域名含义（短名）与官方全称在语义层面等同
    intro:
      'Maligayang pagdating sa <strong>Chocolate Hills Complex</strong>, na malawak na kinikilala bilang pangunahing <strong>Chocolate Hills</strong>. Matatagpuan sa puso ng <strong>Carmen</strong>, <strong>Bohol</strong>, <strong>Pilipinas</strong>, ang destinasyong ito ay nagsisilbing pangunahing sentro para sa mga manlalakbay sa rehiyon.',
    p1: 'Ang {name} ay isa sa mga pinakatanyag na likas na palatandaan sa Pilipinas — isang hindi kapani-paniwalang tanawin ng <strong>{hillCount} hugis-kono na burol</strong> na kumalat sa {hillArea} sa gitnang Bohol.',
    p2: 'May taas na {hillHeight} at hugis malalaking truffle, ang mga pormasyong ito ng apog ay natatakpan ng damo na nagiging lunti-berde tuwing tag-ulan at <strong>ginintuang-kulay tsokolate tuwing tagtuyot</strong> (Enero hanggang Mayo) — kung saan nakuha ang kanilang minamahal na pangalan.',
    p3: 'Naniniwala ang mga heologo na ang mga burol ay mga natirang anyo ng sinaunang bahura ng korales na tumaas mula sa sahig ng dagat milyun-milyong taon na ang nakalilipas, hinubog ng ulan at panahon. May mas malambing na alamat ang mga lokal: dalawang higante ang nagmahalan, at nang matuyo ang kanilang mga luha sa lupa, naiwan ang mga burol.',
    badgeConical: 'Hugis-kono na Burol',
  },
  gallery: {
    eyebrow: 'Gallery ng Larawan',
    heading: 'Ang Chocolate Hills sa mga Larawan',
    clickEnlarge: 'I-click ang anumang larawan para palakihin',
    altTemplate: 'Larawan {n} ng Chocolate Hills Complex — mga hugis-kono na limestone hill at viewing deck, Carmen Bohol, Pilipinas',
    // 主视觉图 Alt 模板：{{ATTRACTION_FULL_NAME}} - Main view in {{CITY_NAME}}, {{COUNTRY_NAME}}
    heroAlt: 'Tanawin mula sa itaas ng mga hugis-kono na Chocolate Hills at ng viewing deck sa Chocolate Hills Complex, Carmen Bohol',
  },
  history: {
    eyebrow: 'Kasaysayan',
    // H2 模板：History & Significance of {{ATTRACTION_FULL_NAME}}
    heading: 'Kasaysayan at Kahalagahan ng Chocolate Hills Complex',
    intro:
      'Higit pa sa kanilang magandang tanawin, ang mga burol ay may heolohikal, legal at kultural na kahalagahan para sa Bohol at sa Pilipinas.',
    p1: 'Ayon sa mga heologo, ang mga burol ay mga labi ng sinaunang bahura ng korales na tumaas mula sa sahig ng dagat at hinubog ng ulan sa loob ng milyun-milyong taon — isang bihira at tanyag na halimbawa ng conical karst topography.',
    p2: 'Inilagay ang mga burol sa ilalim ng pambansang proteksyon noong 1 Hulyo 1997, nang itatag ng Proclamation No. 1037 ang mga ito bilang pambansang geological monument. Magkaiba ang bilang ayon sa paraan ng pagsusuri: karaniwang binabanggit ng mga pagsusuri ng pamahalaan ang 1,268 na burol sa Carmen, samantalang tinatayang 1,776 na burol ang nakasaad sa proklamasyon sa Carmen, Batuan at Sagbayan.',
    p3: 'Ang Chocolate Hills Natural Monument ay idinagdag sa UNESCO World Heritage Tentative List noong 2006, at nananatili itong isa sa mga pinakakilalang likas na simbolo ng Pilipinas — makikita sa watawat at seal ng lalawigan ng Bohol.',
    timelineTitle: 'Mahahalagang Pangyayari',
    timeline: [
      { year: '1997', text: 'Itinatag ng Proclamation No. 1037 (1 Hulyo 1997) ang mga burol bilang pambansang geological monument.' },
      { year: '1997', text: 'Itinatag ng Proclamation No. 1037 ang Chocolate Hills Natural Monument bilang protektadong lugar.' },
      { year: '2006', text: 'Idinagdag sa UNESCO World Heritage Tentative List bilang Chocolate Hills Natural Monument (16 Mayo 2006).' },
      { year: 'Ngayon', text: 'Makikita ang mga burol sa watawat at seal ng lalawigan ng Bohol at nananatili sa tentative list habang hinihintay ang buong nominasyon.' },
    ],
    sourceNote:
      'Ang kasaysayan at katayuan ng proteksyon ay buod mula sa mga pampublikong talaan ng pamahalaan at UNESCO; tingnan ang Mga Pinagmulan sa ibaba.',

    // 民间传说与科学解释
    legendTitle: 'Mga Alamat ng Bohol',
    legendNote: 'Bahagi ng lokal na tradisyon at pasalaysay na pamana ng Bohol ang mga kwentong ito. Ang paliwanag na heolohikal sa ibaba ang siyentipikong paliwanag.',
    legend1Title: 'Ang pag-aaway ng dalawang higante',
    legend1Text:
      'Ayon sa isang kwento, nag-away ang dalawang higante sa lupa at nagbatuhan ng bato, buhangin at putikan nang maraming araw. Nang magkasundo sila, iniwan nila ang mga tambak na naging mga burol.',
    legend2Title: 'Ang mga luha ni Arogo',
    legend2Text:
      'Sa mas banayad na bersyon, umiyak nang labis ang higanteng si Arogo nang mamatay ang minamahal niyang si Aloya. Sa mga lugar na pinagbagsakan at natuyuan ng kanyang mga luha, nabuo ang mga bilog na burol.',
    scienceTitle: 'Ang nakikita ng mga heologo',
    scienceText:
      'Ang mga burol ay isang halimbawa ng cockpit karst: ang limestone mula sa sinaunang sahig ng dagat ay tumaas sa ibabaw ng dagat, pagkatapos ay natunaw ng bahagyang asidikong tubig-ulan sa mga siwang at bitak, kaya natira ang mga halos simetrikong kono na pinaghihiwalay ng mga hugis-bituin na depresyon. Ang tanyag na kulay tsokolate ay panahon lamang — natutuyo ang damo tuwing tagtuyot at muling luntian kapag bumalik ang ulan.',
  },
  lightbox: {
    close: 'Isara',
    previous: 'Nakaraan',
    next: 'Susunod',
  },
  fees: {
    eyebrow: 'Pagpasok',
    heading: 'Tiket at Bayad sa Pagpasok',
    subheading: 'Ang deck ng tanawin ng Chocolate Hills Complex ay bukas {hoursDays}, {hours}. Babayaran ang mga bayad sa pasukan.',
    adult: 'Matanda',
    nonResident: 'Hindi residente',
    child: 'Bata',
    senior: 'Senior / PWD / Wala pang 6 na taon',
    withId: 'May dalang wastong ID',
    notice: 'Ang mga residente ng Pilipinas ay may mas mababang halaga ng tiket na may dalang government-issued ID. Ang mga presyo ay maaaring magbago nang walang paunang abiso.',
  },
  bestTime: {
    eyebrow: 'Plano ang Iyong Pagbisita',
    heading: 'Pinakamahusay na Oras para Bumisita',
    season: 'Enero – Mayo (tagtuyot)',
    timeOfDay: '6:00 AM – 9:00 AM (mas malamig, mas kaunting tao)',
    duration: '1–2 oras',
    seasonTitle: 'Pinakamahusay na Panahon: {season}',
    seasonText: 'Ang mga burol ay nagiging ginintuang-kayumanggi tuwing mga buwan ng tagtuyot — ang tanyag na anyong "tsokolate". Ang malinaw na langit ay nagbibigay ng pinakamahusay na mga larawang panoramiko.',
    timeTitle: 'Pinakamahusay na Oras ng Araw: {time}',
    timeText: 'Ang madaling araw ay nagbibigay ng pinakamalambot na liwanag, pinakamalamig na temperatura, at pinakakaunting bisita. Ang pagbubukas ng 6 ng umaga ay mainam para sa mga photographer at naghahanap ng kapayapaan.',
    durationTitle: 'Inirerekomendang Tagal: {duration}',
    durationText: 'Maglaan ng 15 minuto para sa pag-akyat, hindi bababa sa 30 minuto sa deck ng tanawin, at dagdag na oras para sa kainan at tindahan ng regalo. Pagsamahin sa mga kalapit na atraksyon para sa buong araw na pagbisita.',
  },
  transport: {
    eyebrow: 'Pagpunta Rito',
    // H2 模板：Location & How to Visit {{ATTRACTION_SHORT_NAME}} in {{CITY_NAME}}
    heading: 'Lokasyon at Paano Bumisita sa Chocolate Hills sa Carmen',
    detailedHeading: 'Detalyadong Gabay sa Transportasyon',
    subheading: 'Pinakamalapit na paliparan: <strong>{name}</strong> ({distance}, {travelTime}).',
    modes: {
      air: 'Eroplano',
      ferry: 'Bapor (Ferry)',
      bus: 'Bus mula Tagbilaran',
      van: 'Van / Pribadong Sasakyan',
      motorcycle: 'Motor (Habal-Habal)',
      tricycle: 'Tricycle',
      scooter: 'Pag-upa ng Scooter',
    },
    modeDetails: {
      air: 'Lumipad patungong Bohol-Panglao International Airport (TAG) mula Manila, Cebu, Davao, o Clark. Ang Philippine Airlines, Cebu Pacific, at AirAsia ay may araw-araw na lipad.',
      ferry: 'Ang OceanJet, 2GO, at Lite Ferries ay naghahatid sa Tagbilaran mula Cebu (2 oras na mabilis na ferry), Dumaguete, at iba pang daungan sa Kabisayaan.',
      bus: 'Sumakay ng Ceres bus mula Dao Integrated Bus Terminal sa Tagbilaran patungong Carmen. Ang biyahe ay tumatagal ng 60–90 minuto. Pamasahe: ~₱80–120.',
      van: 'Ang mga van ay umaalis mula Lungsod ng Tagbilaran patungong Carmen. Ang pag-upa ng pribadong sasakyan o taxi mula Tagbilaran ay nagkakahalaga ng ₱2,000–3,000 isang biyahe.',
      motorcycle: 'Mula sa bayan ng Carmen, sumakay ng habal-habal (motorcycle taxi) patungong Chocolate Hills Complex (~10 minuto, ₱50–100). Available din mula Tagbilaran para sa mga mapangahas (~1.5 oras).',
      tricycle: 'Ang mga tricycle mula bayan ng Carmen patungo sa deck ng tanawin ay tumatagal ng humigit-kumulang 10–15 minuto, na nagkakahalaga ng ₱100–150 pabalik-balik.',
      scooter: 'Mag-upa ng scooter sa Panglao o Tagbilaran (₱350–600/araw). Ang magandang tanawin sa 1.5 oras na biyahe ay dadaan sa Bilar Man-Made Forest.',
    },
  },
  parking: {
    eyebrow: 'Paradahan',
    heading: 'Impormasyon sa Paradahan',
    available: 'May Paradahan sa Lugar',
    capacity: 'Maluwag na paradahan para sa mga bus, van, kotse, at motorsiklo',
    fee: '₱20–50 bawat sasakyan',
    feeLabel: 'Bayad:',
    tipsLabel: 'Mga Paalala:',
    tips: 'May mga paradero na nagbabantay. Dumating nang maaga (bago mag-9 ng umaga) para sa pinakamagandang puwesto, lalo na tuwing katapusan ng linggo at mga pista opisyal.',
  },
  map: {
    eyebrow: 'Lokasyon',
    heading: 'Hanapin Kami sa Mapa',
    iframeTitle: 'Google Map ng Chocolate Hills Complex',
    addressLabel: 'Address',
    coordsLabel: 'Coordinates',
    officialPortalLabel: 'Opisyal na Portal ng Turismo ng Pilipinas / Bohol',
    officialIntro: 'Para sa mga opisyal na update at impormasyon sa turismo ng rehiyon, bisitahin ang',
  },
  reviews: {
    eyebrow: 'Rating ng mga Bisita',
    heading: 'Mga Review sa Google Maps para sa Chocolate Hills Complex',
    ratingLabel: 'Rating sa Google Maps',
    // {count} = 评价数，{rating} = 评分
    countTemplate: '{rating} sa 5 · {count} na review',
    // 评价来源说明
    sourceLead: 'Mula sa mga review ng mga gumagamit ng Google Maps · Tingnan ang lahat ng review sa Google Maps',
    // 评分旁的小字（含同步时间与「点击查看谷歌地图全部评价」链接）
    syncLine:
      'Ang rating at bilang ng review ay naka-sync mula sa mga review ng mga gumagamit ng Google Maps · {syncedAt} ·',
    syncCta: 'Tingnan ang lahat ng review sa Google Maps ↗',
    sourceNote:
      'Naka-sync mula sa mga review ng mga gumagamit ng Google Maps, naka-sync noong {syncedAt}; ang copyright ay pagmamay-ari ng mga orihinal na may-akda at ng Google Maps.',
    cta: 'Tingnan ang lahat ng review sa Google Maps',
    quoteNote:
      'Ang pinagsama-samang rating at bilang ng review lamang ang ipinapakita dito. Ang mga teksto ng review ay nananatili sa Google Maps at hindi kinokopya sa pahinang ito.',
  },
  sources: {
    eyebrow: 'Mga Sanggunian',
    heading: 'Mga Pinagmulan at Sanggunian',
    intro:
      'Ang gabay na ito ay binuo mula sa mga pampubliko at awtoritatibong pinagmulan. Ang mga rating at review ay sinipi mula sa Google Maps at hindi isinumite sa pamamagitan ng website na ito.',
    // 资料来源区块：评价 · 同步时间
    reviewsLabel: 'Mga review · naka-sync noong {syncedAt}',
    reviewsSourceNote:
      'Naka-sync mula sa mga review ng mga gumagamit ng Google Maps, naka-sync noong {syncedAt}; ang copyright ay pagmamay-ari ng mga orihinal na may-akda at ng Google Maps.',
    viewAll: 'Tingnan ang lahat ng review sa Google Maps',
    officialLabel: 'Mga opisyal at pampamahalaang pinagmulan',
    updatedLabel: 'Huling naka-sync',
  },
  food: {
    eyebrow: 'Kainan',
    heading: 'Mga Kalapit na Kainan at Restawran',
    venue: {
      chocRestaurant: 'Chocolate Hills Restaurant & Café',
      lobocRiver: 'Loboc River Floating Restaurant',
      buzzCafe: 'Buzz Café Bohol',
      gerardas: "Gerarda's Restaurant",
      trudis: "Trudi's Place",
      jmj: 'JMJ Eatery',
    },
    venueType: {
      local: 'Lokal na Pilipino',
      buffet: 'Filipino Buffet',
      organic: 'Organikong Café',
      fine: 'Pribadong Kainan na Pilipino',
    },
    venueDetail: {
      chocRestaurant: 'Matatagpuan mismo sa complex. Naghahain ng komportableng pagkaing Pilipino at inumin na may tanawin.',
      lobocRiver: 'Mag-enjoy ng buffet na tanghalian habang naglalayag sa magandang Loboc River. Isang klasikong karanasan sa Bohol. ₱850/tao.',
      buzzCafe: 'Café na inspirasyon ng bee-farm na naghahain ng organikong ice cream, salad, at pastry na may tanawin ng dagat.',
      gerardas: 'Bahay na pamana na ginawang restawran. Sikat sa crispy pata, kinilaw, at seafood platter.',
      trudis: 'Lokal na kainan na paborito ng mga taga-roon. Naghahain ng abot-kayang pagkain tulad ng adobo, sinigang, at inihaw na isda.',
      jmj: 'Payak na istilong carinderia na kainan. Mainam para sa mabilis at murang pagkain pagkatapos bumisita sa mga burol.',
    },
    distanceOnSite: 'Sa loob ng lugar',
  },
  nearby: {
    eyebrow: 'Tuklasin Pa',
    // H2 模板：Landmarks & Attractions Around {{ATTRACTION_SHORT_NAME}}
    heading: 'Mga Palatandaan at Atraksyon sa Paligid ng Chocolate Hills',
    // 4.3 周边语义集群描述模板
    clusterIntro:
      'Kapag bumibisita sa <strong>Chocolate Hills Complex</strong>, madaling matuklasan ng mga bisita ang mga makasaysayang palatandaan at atraksyon sa paligid, kabilang ang <strong>{landmark1}</strong> at <strong>{landmark2}</strong>.',
    subheading: 'Sulitin ang iyong pakikipagsapalaran sa Bohol — ang mga atraksyong ito ay kayang marating ng sasakyan mula sa Chocolate Hills.',
    names: {
      adventurePark: 'Chocolate Hills Adventure Park',
      manMadeForest: 'Bilar Man-Made Forest',
      tarsier: 'Tarsier Conservation Area',
      lobocCruise: 'Loboc River Cruise',
      hangingBridge: 'Sipatan Twin Hanging Bridge',
      baclayon: 'Simbahan ng Baclayon',
      hinagdanan: 'Yungib ng Hinagdanan',
      panglao: 'Isla ng Panglao at Alona Beach',
    },
    details: {
      adventurePark: 'Zipline, bike zip, at mga kurdon na may tanawin ng mga burol. Ang biyaheng "Bike Zip" ang pangunahing atraksyon. Pagpasok mula ₱100.',
      manMadeForest: 'Isang 2-km na bahagi ng siksik na mga puno ng mahogany sa kahabaan ng highway. Magandang hinto para sa larawan at ekolohikal na palatandaan.',
      tarsier: 'Tingnan ang pinakamaliit na primata sa mundo — ang Philippine tarsier — sa isang protektadong santuwaryo. Pagpasok ₱60.',
      lobocCruise: 'Paglalayag sa lumulutang na restawran na may live na musika sa magandang Loboc River. Kasama ang buffet na tanghalian.',
      hangingBridge: 'Tulay na gawa sa kawayan na nakabitin sa ibabaw ng Loboc River. Mga tindahan ng souvenire at sariwang buko juice sa magkabilang dulo.',
      baclayon: 'Isa sa mga pinakalumang simbahang bato sa Pilipinas (1727). Isang Pambansang Kayamanang Kultural malapit sa Tagbilaran.',
      hinagdanan: 'Yungib ng apog na may likas na ilalim ng lupa na pool. Mainam para sa nakakapreskong paglangoy. Pagpasok ₱50.',
      panglao: 'Mga puting buhangin na dalampasigan, diving, paglilibot sa isla, at masiglang nightlife. Ang perpektong kapares na dalampasigan para sa mga burol.',
    },
  },
  itinerary: {
    eyebrow: 'Plano nang Maaga',
    heading: 'Iyong Listahan ng mga Dapat Gawin sa Bohol',
    subheading: 'Lagyan ng tsek ang mga lugar na nais mong bisitahin. Ang iyong mga pinili ay naka-save lamang sa device na ito — walang datos na umaalis sa iyong browser.',
    items: {
      climb: 'Umakyat ng 214 na hakbang patungo sa deck ng tanawin',
      sunrise: 'Kunin ang mga larawan ng pagsikat ng araw sa mga burol',
      treats: 'Tikman ang mga lokal na pagkain sa café',
      adventure: 'Maranasan ang Chocolate Hills Adventure Park',
      tarsiers: 'Bisitahin ang Tarsier Sanctuary sa Loboc',
      lobocRiver: 'Tanghalian habang naglalayag sa Loboc River',
      manMade: 'Huminto sa Bilar Man-Made Forest',
      alona: 'Magpahinga sa Alona Beach, Panglao',
      baclayonChurch: 'Galugarin ang makasaysayang Simbahan ng Baclayon',
      hinagdananCave: 'Lumangoy sa Yungib ng Hinagdanan',
    },
    ofSelected: 'sa {total} na napili',
    clearAll: 'Burahin lahat',
  },
  faq: {
    eyebrow: 'Tulong',
    heading: 'Mga Madalas Itanong',
    items: [
      {
        q: 'Ano ang oras ng pagbubukas ng Chocolate Hills Complex?',
        a: 'Bukas ito araw-araw, kabilang ang mga holiday, mula 8:00 AM hanggang 5:30 PM. Ang 214 na hakbang patungo sa viewing deck ay walang lilim, kaya pinakamalamig at pinakamalinaw ang tanawin sa madaling araw, pagkabukas pa lang.',
      },
      {
        q: 'Anong oras nagsasara ang Chocolate Hills Complex?',
        a: 'Nagsasara ito ng 5:30 PM. Dumating nang hindi lalampas ng 4:30 PM — aabutin ng 10–15 minuto ang pag-akyat at kakailanganin mo pa ng 30 minuto sa deck para sa mga larawan.',
      },
      {
        q: 'Magkano ang bayad sa pagpasok sa 2026?',
        a: 'Sa 2026: ₱100 para sa mga adult na hindi residente at ₱50 para sa mga bata. Libre ang mga senior citizen, PWD at batang wala pang 6 na taon, at mas mababa ang bayad ng mga residente ng Pilipinas na may dalang wastong ID. Ang paradahan ay ₱20–50 bawat sasakyan.',
      },
      {
        q: 'Saan matatagpuan ang Chocolate Hills Complex?',
        a: 'Ang address ay Q5X8+FX4, Loay Interior Road, Carmen, Bohol 6319, Pilipinas (9.7988° N, 124.1648° E). Ito ay nasa humigit-kumulang 55 km mula sa Lungsod ng Tagbilaran at 70 km mula sa Bohol-Panglao International Airport (TAG) — mga 1.5 oras na biyahe.',
      },
      {
        q: 'Paano pumunta sa Chocolate Hills mula sa Tagbilaran o Panglao?',
        a: 'Mula Tagbilaran, sumakay ng Ceres bus o van sa Dao Integrated Bus Terminal papuntang Carmen (60–90 minuto, ₱80–120), pagkatapos ay tricycle papuntang complex (10–15 minuto, ₱100–150 balikan). Mula Panglao, karamihan ng bisita ay sumasali sa countryside tour o nag-uupa ng van (₱2,000–3,000 isang biyahe).',
      },
      {
        q: 'Bakit tinawag na Chocolate Hills ang mga ito?',
        a: 'Tuwing tagtuyot (Enero–Mayo), ang damong tumatakip sa 1,268 hugis-kono na burol ay nagiging kayumanggi, na ginagawa silang mukhang malalaking chocolate truffle na nakakalat sa tanawin — kung saan nakuha ang pangalan.',
      },
      {
        q: 'Ilan ang mga burol?',
        a: 'Opisyal na binibilang ng pamahalaan ng Pilipinas ang 1,268 hugis-kono na burol na kumalat sa mahigit 50 km² sa Carmen, Batuan, at Sagbayan. May ilang pagsusuri na nag-uulat ng hanggang 1,776 na burol.',
      },
      {
        q: 'Paano nabuo ang Chocolate Hills?',
        a: 'Naniniwala ang mga heologo na ang mga burol ay mga anyong apog mula sa mga deposito ng korales na tumaas mula sa dagat milyun-milyong taon na ang nakalilipas, hinubog ng libu-libong taon ng ulan at pagguho.',
      },
      {
        q: 'Ilang hakbang patungo sa deck ng tanawin?',
        a: 'Mayroong 214 na hakbang patungo sa pangunahing deck ng tanawin sa Chocolate Hills Complex sa Carmen. Ang pag-akyat ay tumatagal ng humigit-kumulang 10–15 minuto sa katamtamang bilis.',
      },
      {
        q: 'Anong oras dapat pumunta para maiwasan ang maraming tao?',
        a: 'Dumating nang kasing aga ng 6:00–7:00 ng umaga. Maa-enjoy mo ang mas malamig na temperatura, mas malambot na liwanag para sa mga larawan, at mas kaunting turista. Ang mga araw ng linggo ay mas kaunti ang tao kaysa tuwing katapusan ng linggo.',
      },
      {
        q: 'Mayroon bang paradahan?',
        a: 'Oo — ang complex ay may malawak na paradahan na kayang tumanggap ng mga sasakyan, van, motor, at bus ng tour. Ang bayad sa paradahan ay ₱20–50.',
      },
      {
        q: 'Maaari bang bumisita tuwing tag-ulan?',
        a: 'Oo — ang mga burol ay lunti-berde tuwing tag-ulan (Hunyo–Disyembre). Bagaman hindi sila magmumukhang "kulay tsokolate," ang luntiang tanawin ay kasing ganda rin sa sarili nitong paraan.',
      },
      {
        q: 'Ang deck ng tanawin ba ay kayang pasukin ng naka-wheelchair?',
        a: 'Sa kasamaang palad, ang 214 na hakbang na hagdan patungo sa deck ng tanawin ay hindi kayang pasukin ng naka-wheelchair. Gayunpaman, ang mas mababang bahagi ng complex at paradahan ay maaaring pasukin.',
      },
      {
        q: 'Ano ang dapat kong dalhin?',
        a: 'Magsuot ng komportableng sapatos para sa mga hakbang, magdala ng tubig, sumbrero o payong para sa proteksyon sa araw, at camera. Ang mga magagaan na meryenda ay mabibili sa complex.',
      },
    ],
  },
  weather: {
    eyebrow: 'Panahon',
    heading: 'Panahon sa Chocolate Hills Complex',
    subheading: 'Kasalukuyang lagay ng panahon sa mga burol at ang darating na linggo — para malaman kung ano ang dapat dalhin.',
    nowLabel: 'Ngayon',
    feelsLike: 'Pakiramdam',
    humidity: 'Halumigmig',
    wind: 'Hangin',
    rainChance: 'Tsansa ng ulan',
    rainfall: 'Inaasahang ulan',
    highLow: 'Mataas / Mababa',
    sunrise: 'Bukang-liwayway',
    sunset: 'Paglubog ng araw',
    uv: 'UV index',
    todayLabel: 'Ngayong araw',
    forecastTitle: 'Susunod na 7 araw',
    adviceTitle: 'Ano ang ibig sabihin nito para sa iyong pagbisita',
    adviceEmpty: 'Simple lang ang lagay ng panahon ngayon — sapat na ang karaniwang pag-iingat.',
    sceneNote:
      'Ang mga mungkahing ito ay nakabatay sa anyo ng lugar: isang bukas na viewing deck sa tuktok na aabutin ng 214 na hakbang, mga kalsada sa loob ng isla, at mga biyaheng bangka.',
    levels: {
      wind: {
        light: 'Mahinang hangin',
        moderate: 'Katamtamang hangin',
        strong: 'Malakas na hangin',
        gale: 'Napakalakas na hangin',
      },
      uv: {
        low: 'Mahinang UV',
        moderate: 'Katamtamang UV',
        strong: 'Matinding UV',
        veryStrong: 'Napakatinding UV',
        extreme: 'Sobrang tindi ng UV',
      },
      rain: {
        none: 'Malamang hindi uulan',
        low: 'Posibleng may buhos',
        moderate: 'Malamang na may buhos',
        high: 'Malamang uulan',
      },
    },
    groups: {
      risk: 'Mga babala',
      outfit: 'Angkop na damit',
      plan: 'Paglalaan ng oras',
      items: 'Dapat dalhin',
      none: 'Walang weather alert na may bisa sa mga burol sa ngayon.',
    },
    risk: {
      storm: 'May inaasahang pagkulog at pagkidlat. Huwag manatili sa bukas na deck kapag naririnig ang kulog, iwasang sumilong sa ilalim ng puno, at asahan na suspendido ang mga biyaheng bangka at outdoor ride.',
      heavyRain:
        'May inaasahang malakas na ulan. Nagiging madulas ang mga kalsada sa loob ng isla, maaaring bumaha sa mabababang bahagi, at mabilis na mawawala ang tanawin mula sa deck.',
      rainAlert:
        'May inaasahang ulan sa halos buong araw. I-angkla ang itinerary sa mga pagitan ng ulan, asahan ang madulas na hagdanan at mahinang tanawin, at panatilihing flexible ang pagbisita.',
      stormAhead:
        'May inaasahang pagkulog at pagkidlat sa mga susunod na araw ng linggong ito. Kung maluwag ang iyong iskedyul, piliin ang maaliwalas na umaga at suriin muli ang lagay ng panahon bago pumunta sa loob ng isla.',
      wind: 'May inaasahang malakas na hangin. Lumayo sa mga bukas na gilid, maluwag na istruktura at mga bato sa tabing-dagat — madalas na kinakansela ang biyaheng bangka at mga open-air ride.',
      fog: 'Babawasan ng mababang ulap o hamog ang visibility. Maaaring tuluyang mawala ang panorama, at maaaring maantala ang ferry at flight.',
      heat: 'May inaasahang matinding init. Panatilihing maikli ang oras sa bukas na hagdanan sa tanghaling tapat at uminom ng tubig nang regular.',
      uvExtreme:
        'Sobrang tindi ng UV — maaari kang mapaso sa loob ng ilang minuto. Magtakip, gumamit ng mataas na proteksyong sunscreen, at manatili sa lilim sa tanghaling tapat.',
    },
    outfit: {
      rain: 'Malamang uulan — magdala ng magaan na raincoat o payong at asahan ang basa at madulas na lupa.',
      wind: 'Mahangin — pumili ng sombrerong mahigpit, iwasan ang maluwag na damit at mahabang palda, at magdala ng panlaban sa hangin.',
      hot: 'Maiinit — pinakamainam ang magaan at preskong damit na maliwanag ang kulay.',
      cold: 'Malamig — magdala ng makapal na damit.',
      uv: 'Matindi ang sikat ng araw at UV — sulit ang mahabang manggas, sombrero at sunscreen.',
      uvExtreme: 'Sobrang tindi ng UV — takpan ang katawan hangga’t maaari at maglagay muli ng sunscreen nang madalas.',
      diurnal: 'Malaki ang pagkakaiba ng temperatura sa araw at gabi — magdala ng dagdag na layer na maaaring tanggalin o isuot.',
      clear: 'Maaliwalas ang langit — sapat na ang magaan at preskong damit.',
      mild: 'Katamtaman ang lagay ng panahon — sapat na ang karaniwang kumportableng damit.',
    },
    plan: {
      storm: 'Kapag naririnig ang kulog, bumaba mula sa deck at maghintay sa ibabang bahagi ng complex o sa café.',
      heavyRain:
        'Unahin ang mga indoor o mababang bahagi — tarsier sanctuary, simbahan, museo ng bayan — at gawing opsyonal ang pag-akyat.',
      rain: 'Asahan ang mga buhos: panatilihing flexible ang pagbisita at gamitin ang mga pagitan ng ulan para sa hagdanan.',
      wind: 'Naaapektuhan ng hangin ang mga bukas na deck at bangka sa isla — kumpirmahin muna kung may biyahe at zipline bago umalis.',
      heat: 'Unahin ang umaga: umakyat nang maaga o hapon na, at ilaan ang tanghaling tapat sa may lilim o indoor na lugar.',
      muggy: 'Mas mainit ang pakiramdam kaysa sa ipinapakita ng thermometer — dahan-dahan sa hagdanan at uminom ng mas maraming tubig kaysa sa inaakala mo.',
      fog: 'Maaaring mawala ang tanawin — isaalang-alang ang pag-akyat sa mas maaliwalas na oras o sa ibang araw.',
      clear: 'Bagay ang maaliwalas na langit sa panorama — mainam para sa liwanag ng madaling araw o hapon sa mga kono.',
      cloudy: 'Ang malambot at pantay na liwanag ay maganda para sa larawan at malamig ang pag-akyat — komportable para sa mas mahabang pagbisita.',
      wetStairs: 'Madulas ang 214 na hakbang at mga rehas kapag umuulan — umakyat nang dahan-dahan at hawakan ang rehas.',
      morning: 'Karaniwang mas maaliwalas at mas malamig ang umaga kaysa hapon — pinakamagandang oras para sa viewing deck.',
    },
    items: {
      umbrella: 'Natitiklop na payong',
      raincoat: 'Raincoat (mas mainam kaysa mahabang payong kapag mahangin)',
      sunscreen: 'Sunscreen',
      sunglasses: 'Sunglasses',
      hat: 'Sombrero',
      water: 'Inuming tubig',
      jacket: 'Magaan na jacket',
      gripShoes: 'Sapatos na may kapit',
      mask: 'Mask',
      repellent: 'Pang-iwas sa insekto',
    },
    updatedAt: 'Na-update {time}',
    unavailable:
      'Hindi pansamantalang available ang kasalukuyang lagay ng panahon. Nalalapat pa rin ang pangkalahatang gabay sa mga panahon sa ibaba.',
    codes: {
      clear: 'Maaliwalas',
      mainlyClear: 'Halos maaliwalas',
      partly: 'Bahagyang maulap',
      overcast: 'Makapal na ulap',
      fog: 'Hamog o mababang ulap',
      drizzle: 'Amat',
      rain: 'Ulan',
      showers: 'Buhos ng ulan',
      thunder: 'Pagkulog at pagkidlat',
      storm: 'Malakas na bagyo na may kulog',
    },
  },

  season: {
    eyebrow: 'Gabay sa Panahon',
    heading: 'Estratehiya sa Pagbisita Bawat Quarter',
    intro:
      'May malinaw na tagtuyot (humigit-kumulang Disyembre hanggang Mayo) at tag-ulan (Hunyo hanggang Nobyembre) sa Bohol. Pinagsasama ng talahanayang ito ang pattern ng klima at ang epekto nito sa lugar: kulay ng mga burol, tanawin, tubig at wildlife, at dami ng tao.',
    caption:
      'Ang mga pattern ng panahon ay buod mula sa climate normals ng PAGASA para sa Visayas at mula sa mga alituntunin ng protektadong lugar. Nag-iiba ang panahon bawat taon — tingnan ang forecast sa itaas bago maglakbay.',
    columns: {
      quarter: 'Quarter',
      months: 'Mga buwan',
      weather: 'Panahon at tanawin',
      hills: 'Kulay ng mga burol',
      nature: 'Tubig at wildlife',
      crowd: 'Dami ng tao',
      strategy: 'Mungkahing estratehiya',
    },
    rows: [
      {
        quarter: 'Q1',
        months: 'Enero – Marso',
        weather: 'Tuyo, 24–31 °C, pinakakaunting araw ng ulan; pinakamalinaw ang umaga',
        hills: 'Gintong kayumanggi — ang klasikong itsurang tsokolate',
        nature: 'Mababa at malinaw ang mga ilog; aktibo ang mga ibon sa madaling araw',
        crowd: 'Marami (bakasyon Pebrero–Abril)',
        strategy:
          'Pinakamagandang panahon sa pangkalahatan. Simulan ang araw ng 6–8 AM para sa malamig na hangin at malinaw na liwanag, at mag-book nang maaga ng matutuluyan.',
      },
      {
        quarter: 'Q2',
        months: 'Abril – Mayo',
        weather: 'Pinakamainit na buwan, 26–34 °C, mahalumigmig na may paminsang buhos sa hapon',
        hills: 'Pinakamadilim na kayumanggi; tuluyang tuyo ang damo',
        nature: 'Nagsisilong ang mga hayop sa lilim sa tanghali; pinakamababa ang mga ilog',
        crowd: 'Katamtaman hanggang marami (bakasyon ng mga estudyante)',
        strategy:
          'Umakyat nang napakaaga o hapon na, magdala ng 1–2 litro ng tubig bawat tao, at asahan ang matinding init sa hagdanan.',
      },
      {
        quarter: 'Q3',
        months: 'Hunyo – Agosto',
        weather: 'Simula ng tag-ulan; madalas na ulan sa hapon at gabi, 25–31 °C',
        hills: 'Luntian — esmeralda sa halip na tsokolate',
        nature: 'Mataas ang tubig sa mga ilog at river cruise sa Loboc; maraming palaka at insekto',
        crowd: 'Kaunti hanggang katamtaman',
        strategy:
          'I-angkla ang itinerary sa umaga, magbaon ng rain shell, at tanggapin ang luntiang panahon bilang kakaiba ngunit kasing-gandang tanawin.',
      },
      {
        quarter: 'Q4',
        months: 'Setyembre – Disyembre',
        weather: 'Pinakamaulan at panahon ng bagyo sa simula ng quarter; tuyo at kaaya-aya pagsapit ng Disyembre',
        hills: 'Luntian, nagiging bahagyang kayumanggi pagsapit ng Disyembre',
        nature: 'Maaaring itago ng mababang ulap ang malalayong burol; maganda ang birdwatching pagkatapos ng ulan',
        crowd: 'Kaunti (maliban sa linggo ng Pasko)',
        strategy:
          'Suriin ang mga bulletin ng panahon bago maglakbay. Kadalasang pinagsasama ng Disyembre ang luntiang burol at mas kaunting tao.',
      },
    ],
    note: 'Maaaring maapektuhan ng bagyo ang Bohol mula Hunyo hanggang Disyembre. Laging suriin ang mga opisyal na bulletin ng PAGASA at mga lokal na abiso bago magtungo sa loob ng isla.',
  },

  facilities: {
    eyebrow: 'Mga Serbisyo',
    heading: 'Mga Serbisyo at Pasilidad para sa Bisita',
    intro:
      'Isang pangkalahatang-ideya ayon sa uri ng serbisyo sa loob ng complex at sa bayan ng Carmen. Isang independiyente at hindi pangkalakal na sanggunian ang site na ito: inilalarawan namin ang mga kategorya ng serbisyo, hindi ang mga partikular na negosyo.',
    note: 'Nagbabago ang mga pasilidad ayon sa panahon at sa mga holiday; ituring na indikasyon lamang ang mga distansya at presyo.',
    items: [
      {
        title: 'Mga banyo at hugasan',
        text: 'May mga pampublikong banyo sa complex malapit sa pasukan at parking area, at karagdagang pasilidad sa café.',
        tip: 'Pangunahing pasilidad lamang at pinakamatao sa tanghali — magdala ng tissue at hand sanitiser.',
      },
      {
        title: 'Paradahan',
        text: 'Malaking paradahan sa lugar para sa mga kotse, van, motorsiklo at tour bus, may mga attendant na nagtuturo ng trapiko.',
        tip: 'Asahan ang ₱20–50 bawat sasakyan at dumating bago mag-9 AM tuwing weekend at holiday.',
      },
      {
        title: 'Pagkain at inumin',
        text: 'May café sa lugar na naghahain ng simpleng pagkaing Pilipino, meryenda at malamig na inumin; sa bayan ng Carmen (5–6 km) ay may maliliit na karinderya.',
        tip: 'Limitado ang vegetarian, halal at mga opsyon para sa allergy sa loob ng isla — kumain muna kung mahigpit ang iyong pangangailangan.',
      },
      {
        title: 'Inuming tubig at lilim',
        text: 'May binebentang bottled water sa complex; limitado ang refill point, at karamihan ng lilim ay nasa ibabang bahagi at café.',
        tip: 'Magdala ng refillable na bote — walang lilim ang hagdanan patungo sa viewing deck.',
      },
      {
        title: 'Matutuluyan',
        text: 'Karamihan ng bisita ay nananatili sa Tagbilaran o Panglao (70–80 km). Mayroon ding maliliit na inn, guesthouse at homestay sa Carmen at mga kalapit na bayan.',
        tip: 'Mag-reserba nang maaga para sa Disyembre hanggang Mayo; kakaunti ang kuwarto sa loob ng isla at karaniwang pinapatakbo ng pamilya.',
      },
      {
        title: 'Groceries at convenience',
        text: 'Ang maliliit na tindahan sa bayan ng Carmen ay nagbebenta ng tubig, meryenda, pangunahing toiletries at load; ang malalaking supermarket ay nasa Tagbilaran.',
        tip: 'Bumili na sa Tagbilaran kung kailangan mo ng partikular na gamit gaya ng pang-baby o sports drink.',
      },
      {
        title: 'Gasolina at pag-charge',
        text: 'May mga gasolinahan sa kalsadang Tagbilaran–Carmen at sa bayan ng Carmen. Napakalimitado pa rin ng pampublikong charging para sa mga de-kuryenteng sasakyan sa loob ng Bohol.',
        tip: 'Magpakarga bago pumunta sa loob ng isla, at iplano ang pag-charge sa paligid ng Tagbilaran o Panglao.',
      },
      {
        title: 'Pera, ATM at koneksyon',
        text: 'Ang bayad sa pagpasok, paradahan at pamasahe sa tricycle ay cash. Ang mga ATM at bangko ay nasa Tagbilaran at mas malalaking bayan.',
        tip: 'Magdala ng maliliit na pera; magagamit ang signal sa complex ngunit nag-iiba ang bilis ng data.',
      },
      {
        title: 'First aid at medikal',
        text: 'May pangunahing first-aid sa complex; ang mga parmasya ay nasa bayan ng Carmen at ang mga ospital ay nasa Tagbilaran.',
        tip: 'Magdala ng sariling gamot at maliit na kit — mahigit isang oras ang layo ng pinakamalapit na ospital.',
      },
      {
        title: 'Accessibility',
        text: 'Ang ibabang bahagi ng complex, parking area at café ay walang hagdan; ang 214 na hakbang patungo sa viewing deck ay hindi accessible para sa wheelchair.',
        tip: 'Mae-enjoy pa rin ng mga bisitang may limitadong galaw ang mga tanawin sa ground level — itanong sa staff ang pinakapatag na daan at mga pahingahan.',
      },
      {
        title: 'Pasalubong at lokal na produkto',
        text: 'Ang mga stall malapit sa pasukan ay nagbebenta ng handicraft, T-shirt at mga espesyalidad ng Bohol gaya ng calamay at peanut kisses.',
        tip: 'Karaniwang mas mura sa palengke ng bayan kaysa sa mga stall sa tabi ng atraksyon.',
      },
    ],
  },

  transportRoutes: {
    eyebrow: 'Plano ng Biyahe',
    heading: 'Paano Pumunta Rito: Airport, Pier, Bus, Taxi at Pagmamaneho',
    intro:
      'Hakbang-hakbang na ruta patungong Chocolate Hills Complex sa Carmen, kasama ang tinatayang oras ng biyahe at pamasahe para sa bawat opsyon.',
    fareNote:
      'Indikasyon lamang ang mga pamasahe at iskedyul at maaaring magbago — kumpirmahin sa lugar o sa inyong matutuluyan bago umalis.',
    columns: {
      from: 'Simula ng biyahe',
      duration: 'Oras ng biyahe',
      fare: 'Tinatayang pamasahe',
      steps: 'Paano gawin',
    },
    routes: [
      {
        from: 'Bohol-Panglao International Airport (TAG)',
        distance: '~70 km',
        duration: '1.5 – 2 oras',
        fare: '₱2,500–3,500 bawat sasakyan (charter)',
        steps: [
          'Door to door: sumakay sa naka-book nang van o taxi ng airport nang diretso sa complex — pinakasimple kung may bagahe.',
          'Mas murang ruta: airport shuttle o tricycle papuntang Tagbilaran, bus papuntang Carmen, saka tricycle papuntang mga burol.',
        ],
        tip: 'Kung gabi ang dating, magpalipas muna ng gabi sa Panglao o Tagbilaran at bumiyahe kinabukasan — kakaunti ang sasakyan sa huling bahagi ng biyahe pagkatapos ng paglubog ng araw.',
      },
      {
        from: 'Pantalan ng Tagbilaran (ferry mula Cebu, Dumaguete, Siquijor)',
        distance: '~55 km',
        duration: '1.25 – 1.75 oras',
        fare: '₱80–120 bus + ₱100–150 tricycle',
        steps: [
          'Tricycle mula sa pantalan papuntang Dao Integrated Bus Terminal (mga 10 minuto).',
          'Bus o pampublikong van papuntang bayan ng Carmen (60–90 minuto).',
          'Tricycle mula bayan ng Carmen papuntang complex (10–15 minuto).',
        ],
        tip: 'Maaga ang dating ng mga fast ferry mula Cebu — kung magaan ang dala, kadalasang nakakarating ka sa mga burol bago dumami ang tao sa tanghali.',
      },
      {
        from: 'Lungsod ng Tagbilaran o mga hotel sa Panglao (pampublikong transportasyon)',
        distance: '~55–75 km',
        duration: '1.5 – 2 oras',
        fare: '₱80–120 bawat tao, isang biyahe',
        steps: [
          'Tricycle o jeepney papuntang Dao Integrated Bus Terminal sa Tagbilaran.',
          'Bus na papuntang Carmen, Sagbayan o Batuan; sabihin sa konduktor na bababa ka sa bayan ng Carmen.',
          'Tricycle mula bayan ng Carmen paakyat sa pasukan ng viewing deck.',
        ],
        tip: 'Kumakaunti ang biyahe sa hapon — itanong ang huling byahe pabalik bago simulan ang araw.',
      },
      {
        from: 'Taxi, ride-hailing o chartered na van',
        distance: 'Mula Panglao o Tagbilaran',
        duration: '1.5 oras bawat biyahe',
        fare: '₱2,000–3,000 isang biyahe; mas mahal kung may waiting time',
        steps: [
          'Magkasundo muna ng round-trip na presyo (kasama ang oras ng paghihintay) bago umalis.',
          'Ang pag-charter ng van na may driver ay karaniwang pinakasulit para sa grupo ng apat o higit pa.',
        ],
        tip: 'Nakapokus ang ride-hailing sa paligid ng Tagbilaran at Panglao; sa Carmen ay tricycle at charter ang aasahan.',
      },
      {
        from: 'Habal-habal at tricycle',
        distance: 'Huling bahagi mula bayan ng Carmen',
        duration: '10 – 15 minuto',
        fare: '₱50–100 habal-habal; ₱100–150 tricycle na round trip',
        steps: [
          'Mula bayan ng Carmen, umarkila ng tricycle o habal-habal papuntang pasukan ng complex.',
          'Kasunduan muna ang round trip at oras ng paghihintay — walang nakapilang sasakyan sa itaas.',
        ],
        tip: 'Tamang-tama kung dumating ka ng bus: ayusin muna ang pabalik na pamasahe upang hindi ka maiwan pagkatapos bumisita.',
      },
      {
        from: 'Pagmamaneho o rental na motorsiklo',
        distance: '~55–75 km mula Panglao',
        duration: '1.5 oras',
        fare: '₱350–600 bawat araw (motorsiklo) dagdag ang gasolina',
        steps: [
          'Mag-renta sa Panglao o Tagbilaran at dumaan sa kalsadang Tagbilaran–Carmen via Bilar at man-made forest.',
          'Iparada sa paradahan ng complex; isama ang helmet at mga mahahalagang gamit.',
        ],
        tip: 'Magdala ng lisensya at helmet, mag-ingat sa traktor, aso at baka sa mga kalsada sa loob ng isla, at bumagal sa madulas na kurbada kapag umuulan.',
      },
      {
        from: 'Organisadong countryside tour',
        distance: 'Kasama ang pick-up sa hotel',
        duration: 'Buong araw, 8–10 oras',
        fare: 'Nag-iiba ayon sa laki ng grupo at mga kasama',
        steps: [
          'Sumali sa countryside circuit ng Bohol na karaniwang pinagsasama ang mga burol, tarsier sanctuary, river cruise at man-made forest.',
          'Kumpirmahin kung kasama sa presyo ang entrance fee, tanghalian at Loboc cruise.',
        ],
        tip: 'Maginhawa at episyente, ngunit nakapirmi ang iskedyul — pumili ng maliit na grupo kung gusto mo ng oras para maglarawan.',
      },
    ],
  },

  audiences: {
    eyebrow: 'Mga Angkop na Plano',
    heading: 'Tatlong Plano Ayon sa Uri ng Manlalakbay',
    intro: 'Piliin ang planong tugma sa kasama mo sa biyahe at sa dami ng oras na nais mong gugulin.',
    items: [
      {
        title: 'Pamilyang may mga bata',
        who: 'Kasama ang mga batang wala pang 12 taon',
        duration: 'Kalahating araw, 3–4 na oras',
        highlights: [
          'Dumating sa oras ng pagbubukas at umakyat nang dahan-dahan sa 214 na hakbang, gamit ang mga landing bilang pahingahan.',
          'Isama ang maikling paghinto sa man-made forest at maagang tanghalian nang walang minamadali.',
          'Panatilihing maikli ang biyahe: mas nasisiyahan ang mga bata sa viewing deck kaysa sa mahabang byahe.',
        ],
        tips: [
          'Hindi praktikal ang stroller sa hagdanan — mas angkop ang child carrier para sa mga sanggol.',
          'Mas mahalaga ang sombrero, tubig at meryenda kaysa sa dagdag na damit.',
        ],
      },
      {
        title: 'Potograpiya at kalikasan',
        who: 'Mga photographer, birdwatcher at mahilig sa heolohiya',
        duration: 'Kalahati hanggang buong araw',
        highlights: [
          'Ang liwanag ng madaling araw at hapon ay nagbibigay-diin sa hugis ng mga kono; pinapatag ng tanghaling tapat ang mga ito.',
          'Ang maikling telephoto ay nagpapalapit sa mga patong ng burol, habang ang wide lens ay bagay sa panorama mula sa deck.',
          'Ang mga weekday at ang panahong luntian ay nagbibigay ng pinakabakanteng kuha.',
        ],
        tips: [
          'Itanong muna sa staff ang kasalukuyang patakaran sa drone — may mga paghihigpit sa mga protektadong lugar at sa ibabaw ng maraming tao.',
          'Magdala ng pamunas ng lens: karaniwan ang usok mula sa dagat at biglaang buhos ng ulan.',
        ],
      },
      {
        title: 'Mga bisitang may limitadong galaw at mga nakatatanda',
        who: 'Gumagamit ng wheelchair, mga nakatatanda, sinumang umiiwas sa hagdan',
        duration: '1–2 oras sa ground level',
        highlights: [
          'Ang parking area, ibabang bahagi ng complex, café at mga hardin ay walang hagdan at nakabukas sa tanawin ng mga burol.',
          'Mas kaaya-aya ang temperatura sa madaling araw o hapon.',
          'Maaaring magpalitan ang mga kasama sa pag-akyat habang ang iba ay nagpapahinga sa lilim.',
        ],
        tips: [
          'Hindi accessible para sa wheelchair ang 214 na hakbang — iplano ang pagbisita sa mga tanawin sa ground level.',
          'Humiling na ibaba malapit sa pasukan; matigas ang mga daanan ngunit hindi pantay kapag umuulan.',
        ],
      },
    ],
  },

  routes: {
    eyebrow: 'Mungkahing Ruta',
    heading: 'Mga Ruta para sa Kalahati at Buong Araw',
    intro: 'Dalawang handa nang ruta mula Tagbilaran o Panglao, na nakabase sa oras ng pagbubukas, liwanag ng araw at kalagayan ng mga kalsada sa loob ng isla.',
    halfDay: {
      title: 'Kalahating araw (mga 6 na oras)',
      best: 'Tamang-tama kung nasa Panglao o Tagbilaran ka at gusto pang mag-beach sa hapon',
      stops: [
        { time: '06:30', text: 'Umalis mula Tagbilaran o Panglao gamit ang kotse, van o tour.' },
        { time: '08:00', text: 'Dumating sa Chocolate Hills Complex at umakyat sa viewing deck bago tumindi ang init.' },
        { time: '10:00', text: 'Malamig na inumin at magaan na meryenda sa complex; pagmasdan ang mga stall ng pasalubong.' },
        { time: '10:45', text: 'Paghinto sa Bilar Man-Made Forest para sa larawan sa pagbalik.' },
        { time: '12:30', text: 'Tanghalian sa Loboc o pabalik sa Tagbilaran.' },
      ],
    },
    fullDay: {
      title: 'Buong araw na countryside loop (mga 9–10 oras)',
      best: 'Tamang-tama kung ang mga burol ang pangunahing dahilan ng iyong araw sa Bohol',
      stops: [
        { time: '06:00', text: 'Umalis mula Panglao o Tagbilaran.' },
        { time: '07:30', text: 'Chocolate Hills Complex — umakyat nang maaga para sa malamig na hangin at malambot na liwanag.' },
        { time: '09:30', text: 'Adventure park sa tabi para sa zipline o bike-zip.' },
        { time: '11:00', text: 'Maikling paghinto sa Bilar Man-Made Forest.' },
        { time: '11:30', text: 'Pagbisita sa tarsier sanctuary (mahinahong boses, walang flash).' },
        { time: '12:30', text: 'Tanghalian, mainam kung may Loboc river cruise.' },
        { time: '14:30', text: 'Twin hanging bridge at mga tindahan sa tabi ng ilog.' },
        { time: '15:30', text: 'Makasaysayang Baclayon Church malapit sa Tagbilaran.' },
        { time: '17:30', text: 'Pagbalik sa inyong hotel.' },
      ],
    },
    note: 'Walang ilaw ang mga kalsada sa loob ng isla at nagsasara ang complex nang 5:30 PM — iplano ang pagbalik sa pangunahing highway bago dumilim.',
  },

  responsibility: {
    eyebrow: 'Agham at Pangangalaga',
    heading: 'Agham ng mga Burol at Pananagutan ng Bisita',
    intro: 'Isang protektadong tanawin, hindi palaruan. Ang pagkaunawa kung paano nabuo ang mga burol ay nagpapaliwanag kung bakit mahalaga ang ilang simpleng patakaran.',
    scienceTitle: 'Paano nabuo ang mga burol',
    scienceText:
      'Ang mga burol ay halimbawa ng cockpit karst: ang limestone mula sa sinaunang sahig ng dagat ay tumaas sa ibabaw ng dagat, pagkatapos ay natunaw ng bahagyang asidikong tubig-ulan sa mga siwang at bitak. Ang natira ay isang hanay ng halos simetrikong kono na pinaghihiwalay ng mga hugis-bituin na depresyon. Ang tanyag na kulay tsokolate ay panahon lamang — natutuyo ang damo tuwing tagtuyot at muling luntian kapag bumalik ang ulan.',
    whyProtectedTitle: 'Bakit ito protektado',
    whyProtectedText:
      'Itinatag ng Proclamation No. 1037 (1997) ang mga burol bilang pambansang geological monument, at ang Chocolate Hills Natural Monument ay nasa UNESCO World Heritage Tentative List mula noong 2006. Sakop ng proteksyon ang anyo ng lupa: ang pagkuha ng bato, paghukay, pagtatayo at pag-akyat sa mga kono ay sumisira sa mga ibabaw na nabuo sa loob ng libu-libong taon.',
    doTitle: 'Dapat gawin',
    doItems: [
      'Manatili sa mga markadong daanan at viewing area — marupok ang mga dalisdis at mabilis na gumuho.',
      'Uuwiin ang sariling basura: limitado ang mga basurahan at itinatangay ng hangin ang basura papunta sa mga dalisdis.',
      'Panatilihing mahina ang boses at musika; tirahan din ito ng mga ibon at ibang wildlife.',
      'Magbayad ng opisyal na bayarin at pumili ng akreditadong sanctuary upang pondohan ang pangangalaga.',
      'Humingi ng pahintulot bago kuhanan ng larawan ang mga tao, at huwag gumamit ng flash sa mga hayop na gabi-gumiya gaya ng tarsier.',
    ],
    avoidTitle: 'Dapat iwasan',
    avoidItems: [
      'Pag-akyat sa mga burol o paglakad sa labas ng daanan — nasisira ang damo at maluwag na limestone.',
      'Pangongolekta ng bato, halaman o pasalubong mula sa mga dalisdis; ipinagbabawal ang pagkuha ng materyal sa mga protektadong lugar.',
      'Pagpapalipad ng drone nang hindi sinusuri ang kasalukuyang patakaran ng lugar at lokal na ordinansa; ipinagbabawal ang paglipad sa maraming protektadong lugar.',
      'Pagsisiga, paninigarilyo sa labas ng itinakdang lugar, o pag-iiwan ng pagkaing nakakaakit ng hayop.',
      'Pagtapak o pagputol ng halaman para lang sa magandang kuha — ang isang nasirang bahagi ay maaaring mag-iwan ng peklat nang maraming panahon.',
    ],
    closingNote:
      'Isang independiyente at hindi pangkalakal na sanggunian ang site na ito. Hindi kami nagbebenta ng ticket o tour at hindi kami kaanib ng operator ng lugar o ng anumang ahensya ng pamahalaan.',
  },

  location: {
    country: 'Pilipinas',
  },
  footer: {
    quickLinks: 'Mga Mabilis na Link',
    findUs: 'Hanapin Kami',
    viewOnMaps: 'Tingnan sa Google Maps',
    disclaimer: 'Independiyenteng gabay sa paglalakbay. Hindi kaanib o kinikilala ng Chocolate Hills Complex o ng pamahalaan ng Pilipinas.',
    reviewNote:
      'Ang mga rating at review ay naka-sync mula sa mga review ng mga gumagamit ng Google Maps; ang copyright ay pagmamay-ari ng mga orihinal na may-akda at ng Google Maps.',
    copyright: '© {year} Lahat ng karapatan ay nakalaan.',
  },
  freeLabel: 'Libre',
};
