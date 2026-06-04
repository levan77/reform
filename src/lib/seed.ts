import type { Listing } from './types';

/**
 * Demo listings used to seed Cloudflare KV on first run (when the LISTINGS
 * namespace is still empty). After that, the KV store is the source of truth
 * and is managed entirely through the admin panel.
 */
export const SEED_LISTINGS: Listing[] = [
  {
    id: 'lst_001',
    slug: 'vera-stalinka-14',
    title: 'Vera Stalinka — Apt. 14',
    address: '14 Kostava St, Apt. 14, Vera',
    district: 'Vera',
    tags: ['Stalin-era', 'High Ceilings', 'Historic Heritage'],
    size_sqm: 84,
    floor: 3,
    total_floors: 5,
    year_built: 1954,
    images: {
      cover: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop',
      before: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80&auto=format&fit=crop',
      ],
      after: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80&auto=format&fit=crop',
      ],
      floor_plan_existing: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop',
      floor_plan_optimized: 'https://images.unsplash.com/photo-1558618047-f4e60b9fd029?w=800&q=80&auto=format&fit=crop',
    },
    financials: {
      asking_price_gel: 290000,
      renovation_estimate_gel: 95000,
      post_reno_market_value_gel: 520000,
    },
    featured: true,
    published: '2024-11-01',
    description:
      "A third-floor stalinka in the heart of Vera with original parquet floors, 3.4 m ceilings, and ornamental plaster moulding still intact. The existing layout wastes 14 sqm on a dark corridor — our optimised plan converts it into an open-plan living kitchen and adds a dedicated bathroom off the master bedroom. Walking distance to Rustaveli Avenue and the city's best café strip.",
    ka: {
      title: 'ვერას სტალინკა — ბინა 14',
      address: 'კოსტავას ქ. 14, ბინა 14, ვერა',
      description:
        'მესამე სართულის სტალინკა ვერას გულში, ორიგინალი პარკეტით, 3.4 მ ჭერითა და შემორჩენილი დეკორატიული ლეპნინით. არსებული გეგმარება 14 კვ.მ-ს კარგავს ბნელ დერეფანზე — ჩვენი ოპტიმიზებული გეგმა მას ღია სამზარეულო-მისაღებად აქცევს და ამატებს ცალკე სველ წერტილს მთავარ საძინებელთან. რუსთაველის გამზირამდე და ქალაქის საუკეთესო კაფეებამდე ფეხით სავალ მანძილზე.',
    },
  },
  {
    id: 'lst_002',
    slug: 'sololaki-art-nouveau-7',
    title: 'Sololaki Art Nouveau — Apt. 7',
    address: '7 Tabidze St, Apt. 7, Sololaki',
    district: 'Sololaki',
    tags: ['Art Nouveau', 'Historic Heritage', 'High Ceilings'],
    size_sqm: 102,
    floor: 2,
    total_floors: 4,
    year_built: 1912,
    images: {
      cover: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1200&q=80&auto=format&fit=crop',
      before: [
        'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80&auto=format&fit=crop',
      ],
      after: [
        'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80&auto=format&fit=crop',
      ],
      floor_plan_existing: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop',
      floor_plan_optimized: 'https://images.unsplash.com/photo-1558618047-f4e60b9fd029?w=800&q=80&auto=format&fit=crop',
    },
    financials: {
      asking_price_gel: 420000,
      renovation_estimate_gel: 140000,
      post_reno_market_value_gel: 780000,
    },
    featured: true,
    published: '2024-11-15',
    description:
      "One of Sololaki's finest surviving Art Nouveau apartments. Original cast-iron balcony railings, 4.1 m ceilings with decorative cornices, and large south-facing windows overlooking the Old Town. The building is under state heritage protection, limiting structural changes but preserving its extraordinary character. Our proposal retains every historic element while fully upgrading mechanical and electrical systems.",
    ka: {
      title: 'სოლოლაკის არ ნუვო — ბინა 7',
      address: 'ტაბიძის ქ. 7, ბინა 7, სოლოლაკი',
      description:
        'სოლოლაკის ერთ-ერთი საუკეთესო შემორჩენილი არ ნუვოს ბინა. ორიგინალი თუჯის აივნის მოაჯირები, 4.1 მ ჭერი დეკორატიული კარნიზებით და დიდი სამხრეთის ფანჯრები ძველი თბილისის ხედით. შენობა სახელმწიფო მემკვიდრეობის დაცვის ქვეშაა, რაც ზღუდავს სტრუქტურულ ცვლილებებს, მაგრამ ინარჩუნებს მის განსაკუთრებულ ხასიათს. ჩვენი წინადადება ინარჩუნებს ყველა ისტორიულ ელემენტს და სრულად აახლებს საინჟინრო და ელექტრო სისტემებს.',
    },
  },
  {
    id: 'lst_003',
    slug: 'saburtalo-brick-loft',
    title: 'Saburtalo Brick Loft',
    address: '3 Nutsubidze St, Floor 1, Saburtalo',
    district: 'Saburtalo',
    tags: ['Brick Industrial', 'High Ceilings', 'Soviet Modernist'],
    size_sqm: 130,
    floor: 1,
    total_floors: 6,
    year_built: 1968,
    images: {
      cover: 'https://images.unsplash.com/photo-1580041065738-e72023775cdc?w=1200&q=80&auto=format&fit=crop',
      before: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&q=80&auto=format&fit=crop',
      ],
      after: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&q=80&auto=format&fit=crop',
      ],
      floor_plan_existing: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop',
      floor_plan_optimized: 'https://images.unsplash.com/photo-1558618047-f4e60b9fd029?w=800&q=80&auto=format&fit=crop',
    },
    financials: {
      asking_price_gel: 195000,
      renovation_estimate_gel: 110000,
      post_reno_market_value_gel: 430000,
    },
    featured: false,
    published: '2024-12-01',
    description:
      'A former Soviet-era technical office on the ground floor of a 1968 brick block. Exposed structural brick walls on three sides, a 3.8 m slab ceiling, and generous 130 sqm footprint. Our design proposal strips back decades of plasterboard to reveal the raw brick and installs floor-to-ceiling glazing at the courtyard end, creating a dramatic live-work loft unlike anything else in the city.',
    ka: {
      title: 'საბურთალოს აგურის ლოფტი',
      address: 'ნუცუბიძის ქ. 3, სართ. 1, საბურთალო',
      description:
        'ყოფილი საბჭოთა ეპოქის ტექნიკური ოფისი 1968 წლის აგურის კორპუსის პირველ სართულზე. ღია სტრუქტურული აგურის კედლები სამი მხრიდან, 3.8 მ ჭერი და ფართო 130 კვ.მ. ჩვენი დიზაინის წინადადება აცლის ათწლეულების თაბაშირმუყაოს რომ გამოაჩინოს ნედლი აგური და აყენებს იატაკიდან ჭერამდე მინებს ეზოს მხარეს, ქმნის დრამატულ ცხოვრება-სამუშაო ლოფტს, რომელსაც ბადალი არ ჰყავს ქალაქში.',
    },
  },
  {
    id: 'lst_004',
    slug: 'mtatsminda-heritage-21',
    title: 'Mtatsminda Heritage — Apt. 21',
    address: '21 Chonkadze St, Apt. 21, Mtatsminda',
    district: 'Mtatsminda',
    tags: ['Historic Heritage', 'Stalin-era', 'High Ceilings'],
    size_sqm: 67,
    floor: 4,
    total_floors: 5,
    year_built: 1948,
    images: {
      cover: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&q=80&auto=format&fit=crop',
      before: [
        'https://images.unsplash.com/photo-1617104611869-1b1e100e31a4?w=1200&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop',
      ],
      after: [
        'https://images.unsplash.com/photo-1617104611869-1b1e100e31a4?w=1200&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop',
      ],
      floor_plan_existing: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop',
      floor_plan_optimized: 'https://images.unsplash.com/photo-1558618047-f4e60b9fd029?w=800&q=80&auto=format&fit=crop',
    },
    financials: {
      asking_price_gel: 210000,
      renovation_estimate_gel: 75000,
      post_reno_market_value_gel: 385000,
    },
    featured: false,
    published: '2024-12-10',
    description:
      'Top-floor Stalinka perched on the slopes of Mtatsminda with panoramic views across Tbilisi toward the Caucasus. At 67 sqm the footprint is compact, but the 3.2 m ceilings and generous windows make it feel far larger. Our optimised single-room layout maximises the view axis from entry door to balcony and adds a Japanese-inspired wet room to the north-facing bathroom.',
    ka: {
      title: 'მთაწმინდის მემკვიდრეობა — ბინა 21',
      address: 'ჭონქაძის ქ. 21, ბინა 21, მთაწმინდა',
      description:
        'ზედა სართულის სტალინკა მთაწმინდის ფერდობზე, თბილისისა და კავკასიონის პანორამული ხედით. 67 კვ.მ კომპაქტურია, თუმცა 3.2 მ ჭერი და ფართო ფანჯრები მას გაცილებით დიდს ხდის შეგრძნებით. ჩვენი ოპტიმიზებული ერთოთახიანი გეგმარება მაქსიმალურად იყენებს ხედის ღერძს შესასვლელი კარიდან აივნამდე და ამატებს იაპონური სტილის სველ წერტილს ჩრდილოეთის მხარეს.',
    },
  },
  {
    id: 'lst_005',
    slug: 'vake-soviet-modernist-5a',
    title: 'Vake Soviet Modernist — Block 5A',
    address: '5A Chavchavadze Ave, Apt. 3, Vake',
    district: 'Vake',
    tags: ['Soviet Modernist', 'High Ceilings'],
    size_sqm: 95,
    floor: 2,
    total_floors: 9,
    year_built: 1978,
    images: {
      cover: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80&auto=format&fit=crop',
      before: [
        'https://images.unsplash.com/photo-1600607687920-4e03c4eaf24b?w=1200&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&q=80&auto=format&fit=crop',
      ],
      after: [
        'https://images.unsplash.com/photo-1600607687920-4e03c4eaf24b?w=1200&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&q=80&auto=format&fit=crop',
      ],
      floor_plan_existing: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop',
      floor_plan_optimized: 'https://images.unsplash.com/photo-1558618047-f4e60b9fd029?w=800&q=80&auto=format&fit=crop',
    },
    financials: {
      asking_price_gel: 265000,
      renovation_estimate_gel: 88000,
      post_reno_market_value_gel: 470000,
    },
    featured: false,
    published: '2025-01-05',
    description:
      "A second-floor unit in one of Vake's most desirable Soviet Modernist blocks — concrete frame, generous room proportions, and large balcony overlooking the tree-lined Chavchavadze Avenue. The building's panel construction actually lends itself well to reconfiguration: we open up the kitchen-dining wall, extend the master suite into the former storage corridor, and add a Japanese soaking tub to the second bathroom.",
    ka: {
      title: 'ვაკის საბჭოთა მოდერნი — ბლოკი 5A',
      address: 'ჭავჭავაძის გამზ. 5A, ბინა 3, ვაკე',
      description:
        'მეორე სართულის ბინა ვაკის ერთ-ერთ ყველაზე მოთხოვნად საბჭოთა მოდერნისტულ კორპუსში — ბეტონის კარკასი, ფართო ოთახები და დიდი აივანი ხეებით მოფენილ ჭავჭავაძის გამზირზე. შენობის პანელური კონსტრუქცია კარგად ერგება გადაგეგმარებას: ვხსნით სამზარეულო-სასადილოს კედელს, ვაფართოებთ მთავარ საძინებელს ყოფილი სათავსოს დერეფანში და ვამატებთ იაპონურ აბაზანას მეორე სველ წერტილში.',
    },
  },
];
