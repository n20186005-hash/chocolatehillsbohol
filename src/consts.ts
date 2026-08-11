/** Central site configuration — change domain here and only here. */
export const SITE = {
  /** Leave empty for local dev; set before deploy. */
  url: 'https://chocolatehillsbohol.com',
  title: 'Chocolate Hills Complex',
  titleShort: 'Chocolate Hills',
  tagline: 'Nature\'s Sweetest Masterpiece in Bohol, Philippines',
  description:
    'Discover the iconic Chocolate Hills Complex in Carmen, Bohol — 1,268 cone-shaped limestone hills that turn chocolate brown in the dry season. Complete visitor guide with fees, transport, gallery, and travel tips.',
  locale: 'fil',
  ogLocale: 'fil_PH',
  logoAlt: 'Chocolate Hills Logo',
};

export const ATTRACTION = {
  name: 'Chocolate Hills Complex',
  nameLocal: 'Chocolate Hills',
  addressStreet: 'Loay Interior Road, Q5X8+GW5',
  addressCity: 'Carmen',
  addressRegion: 'Bohol',
  addressPostal: '6319',
  addressCountry: 'Philippines',
  plusCode: 'Q5X8+GW5',
  lat: 9.7988,
  lng: 124.1648,
  phone: '+639175557257',
  rating: 4.5,
  reviewCount: 10349,
  reviewPlatform: 'Google Maps',
  hours: '8:00 AM – 5:30 PM',
  hoursDays: 'Daily (including holidays)',
  entranceFee: {
    adult: 100,
    child: 50,
    senior: 0,
    pwd: 0,
    underSix: 0,
    currency: 'PHP',
  },
  steps: 214,
  hillCount: 1268,
  hillHeight: '30–120 meters',
  hillArea: 'over 50 km²',
  visitDuration: '1–2 hours',
  bestSeason: 'January – May (dry season)',
  bestTimeOfDay: '6:00 AM – 9:00 AM (cooler, fewer crowds)',
  viewDeckHeight: 'approximately 64 meters above base',

  /** Four Google Maps links the page uses. */
  maps: {
    /** Short share link — Hero, Gallery, Footer anchors */
    share: 'https://maps.app.goo.gl/ZPm3g24TnAyJ9agYA',
    /** Coordinates link — structured data */
    coords: 'https://www.google.com/maps?q=9.7988,124.1648',
    /** Embed iframe src for Map section — include local language param */
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.613091566882!2d124.16476907697863!3d9.798767690296602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa16f89932b4ed%3A0xf893a780df0b83b0!2sChocolate%20Hills%20Complex!5e0!3m2!1sen!2sph!4v1786414261136!5m2!1sen!2sph',
  },

  /** Photo gallery — real photos in /public/gallery/ */
  photos: Array.from({ length: 12 }, (_, i) => ({
    src: `/gallery/chocolate-hills-${i + 1}.jpg`,
    alt: `Chocolate Hills view ${i + 1} — Carmen, Bohol, Philippines`,
    width: 1200,
    height: 800,
  })),

  /** Airport & transport */
  nearestAirport: {
    name: 'Bohol-Panglao International Airport (TAG)',
    distance: '~70 km',
    travelTime: '~1.5 hours by car',
  },
  transportOptions: [
    { mode: 'Air', detail: 'Fly into Bohol-Panglao International Airport (TAG) from Manila, Cebu, Davao, or Clark. Philippine Airlines, Cebu Pacific, and AirAsia operate daily flights.' },
    { mode: 'Ferry', detail: 'OceanJet, 2GO, and Lite Ferries serve Tagbilaran from Cebu (2 hr fast ferry), Dumaguete, and other Visayan ports.' },
    { mode: 'Bus from Tagbilaran', detail: 'Take a Ceres bus from Dao Integrated Bus Terminal in Tagbilaran bound for Carmen. Journey takes 60–90 minutes. Fare: ~₱80–120.' },
    { mode: 'Van / Private Car', detail: 'Vans depart from Tagbilaran City to Carmen. Private car hire or taxi from Tagbilaran costs ₱2,000–3,000 one-way.' },
    { mode: 'Motorcycle (Habal-Habal)', detail: 'From Carmen town proper, take a habal-habal (motorcycle taxi) to the Chocolate Hills Complex (~10 min, ₱50–100). Also available from Tagbilaran for the adventurous (~1.5 hrs).' },
    { mode: 'Tricycle', detail: 'Tricycles from Carmen town to the viewing deck take approximately 10–15 minutes, costing ₱100–150 round trip.' },
    { mode: 'Scooter Rental', detail: 'Rent a scooter in Panglao or Tagbilaran (₱350–600/day). The scenic 1.5-hour ride passes through Bilar Man-Made Forest.' },
  ],

  /** Parking */
  parking: {
    available: true,
    capacity: 'Spacious parking lot for buses, vans, cars, and motorcycles',
    fee: '₱20–50 per vehicle',
    tips: 'Parking attendants are available. Arrive early (before 9 AM) for the best spots, especially on weekends and holidays.',
  },

  /** Nearby food */
  nearbyFood: [
    { name: 'Chocolate Hills Restaurant & Café', type: 'Local Filipino', distance: 'On-site', detail: 'Located at the complex itself. Serves Filipino comfort food and refreshments with a view.' },
    { name: 'Loboc River Floating Restaurant', type: 'Filipino Buffet', distance: '~25 km', detail: 'Enjoy a buffet lunch while cruising the scenic Loboc River. A classic Bohol experience. ₱850/person.' },
    { name: 'Buzz Café Bohol', type: 'Organic Café', distance: '~40 km (in Baclayon)', detail: 'Bee-farm inspired café serving organic ice cream, salads, and pastries with sea views.' },
    { name: 'Gerarda\'s Restaurant', type: 'Filipino Fine Dining', distance: '~50 km (in Tagbilaran)', detail: 'Heritage house turned restaurant. Famous for crispy pata, kinilaw, and seafood platters.' },
    { name: 'Trudis Place', type: 'Local Filipino', distance: '~6 km (in Carmen town)', detail: 'A homegrown eatery popular with locals. Serves affordable meals like adobo, sinigang, and grilled fish.' },
    { name: 'JMJ Eatery', type: 'Filipino', distance: '~5 km (in Carmen town)', detail: 'Simple carinderia-style dining. Great for a quick, budget-friendly meal after visiting the hills.' },
  ],

  /** Nearby attractions */
  nearbyAttractions: [
    { name: 'Chocolate Hills Adventure Park', distance: '~1 km', detail: 'Zipline, bike zip, and rope courses with hills views. The "Bike Zip" ride is a highlight. Entrance from ₱100.' },
    { name: 'Bilar Man-Made Forest', distance: '~15 km', detail: 'A 2-km stretch of dense mahogany trees along the highway. Beautiful photo stop and ecological landmark.' },
    { name: 'Tarsier Conservation Area', distance: '~30 km (in Loboc)', detail: 'See the world\'s smallest primates — Philippine tarsiers — in a protected sanctuary. Entry ₱60.' },
    { name: 'Loboc River Cruise', distance: '~25 km', detail: 'Floating restaurant cruise with live music through the scenic Loboc River. Includes buffet lunch.' },
    { name: 'Sipatan Twin Hanging Bridge', distance: '~20 km', detail: 'Bamboo suspension bridge across the Loboc River. Souvenir shops and fresh buko (coconut) juice at both ends.' },
    { name: 'Baclayon Church', distance: '~45 km', detail: 'One of the oldest stone churches in the Philippines (1727). A National Cultural Treasure near Tagbilaran.' },
    { name: 'Hinagdanan Cave', distance: '~75 km (in Dauis)', detail: 'Limestone cave with a natural underground pool. Great for a refreshing swim. Entrance ₱50.' },
    { name: 'Panglao Island & Alona Beach', distance: '~80 km', detail: 'White-sand beaches, diving, island hopping, and vibrant nightlife. The perfect beach complement to the hills.' },
  ],

  /** FAQ */
  faqs: [
    { q: 'Why are they called Chocolate Hills?', a: 'During the dry season (January–May), the grass covering the 1,268 conical hills turns brown, making them look like giant chocolate truffles scattered across the landscape — hence the name.' },
    { q: 'How many hills are there?', a: 'The Philippine government officially counts 1,268 cone-shaped hills spread over 50 km² across Carmen, Batuan, and Sagbayan. Some surveys report up to 1,776 hills.' },
    { q: 'How were the Chocolate Hills formed?', a: 'Geologists believe the hills are weathered limestone formations from coral deposits that uplifted from the sea millions of years ago, shaped by millennia of rainfall and erosion.' },
    { q: 'What is the entrance fee?', a: 'Adult non-residents pay ₱100; children ₱50. Senior citizens, PWDs, and children under 6 enter free. Philippine residents pay lower rates with valid ID.' },
    { q: 'How many steps to the viewing deck?', a: 'There are 214 steps leading to the main viewing deck at the Chocolate Hills Complex in Carmen. The climb takes about 10–15 minutes at a moderate pace.' },
    { q: 'What time should I visit to avoid crowds?', a: 'Arrive as early as 6:00–7:00 AM. You\'ll enjoy cooler temperatures, softer light for photos, and fewer tourists. Weekdays are significantly less crowded than weekends.' },
    { q: 'Is there parking available?', a: 'Yes, the complex has a large parking area that accommodates cars, vans, motorcycles, and tour buses. Parking fee is ₱20–50.' },
    { q: 'Can I visit during the rainy season?', a: 'Yes — the hills are lush green in the rainy season (June–December). While they won\'t look "chocolatey," the green landscape is equally stunning in its own way.' },
    { q: 'Is the viewing deck wheelchair accessible?', a: 'Unfortunately, the 214-step staircase to the viewing deck is not wheelchair accessible. However, the lower complex area and parking lot are accessible.' },
    { q: 'What should I bring?', a: 'Wear comfortable shoes for the steps, bring water, a hat or umbrella for sun protection, and a camera. Light snacks are available at the complex.' },
  ],

  /** Itinerary checklist items */
  checklistItems: [
    { id: 'climb-view-deck', label: 'Climb 214 steps to the viewing deck' },
    { id: 'photo-sunrise', label: 'Capture sunrise photos of the hills' },
    { id: 'taste-treats', label: 'Try local treats at the café' },
    { id: 'visit-adventure-park', label: 'Experience the Chocolate Hills Adventure Park' },
    { id: 'see-tarsiers', label: 'Visit the Tarsier Sanctuary in Loboc' },
    { id: 'loboc-river', label: 'Lunch cruise on Loboc River' },
    { id: 'man-made-forest', label: 'Stop at Bilar Man-Made Forest' },
    { id: 'alona-beach', label: 'Relax at Alona Beach, Panglao' },
    { id: 'baclayon-church', label: 'Explore historic Baclayon Church' },
    { id: 'hinagdanan-cave', label: 'Swim at Hinagdanan Cave' },
  ],
};
