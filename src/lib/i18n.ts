import type { Listing, Tag } from './types';

export const LOCALES = ['ka', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

/** Georgian is the default / main language */
export const DEFAULT_LOCALE: Locale = 'ka';
const COOKIE_NAME = 'reforma_lang';

// ─── Locale resolution ──────────────────────────────────────────────────────
export function getLocale(request: Request): Locale {
  const cookies = request.headers.get('cookie') ?? '';
  const match   = cookies.match(new RegExp(`${COOKIE_NAME}=([^;\\s]+)`));
  const val     = match?.[1] as Locale | undefined;
  return val && LOCALES.includes(val) ? val : DEFAULT_LOCALE;
}

export const localeCookie = (locale: Locale) =>
  `${COOKIE_NAME}=${locale}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;

// ─── Dictionary ─────────────────────────────────────────────────────────────
type Dict = Record<string, string>;

const en: Dict = {
  // Nav
  'nav.catalog':        'Catalog',
  'nav.process':        'Process',
  'nav.about':          'About',
  'nav.contact':        'Contact',
  'nav.viewProperties': 'View Properties',
  'nav.toggleMenu':     'Toggle menu',
  'nav.tbilisi':        'Tbilisi',
  'nav.switchTo':       'ქარ',
  'nav.switchToFull':   'Switch to Georgian',

  // Hero
  'hero.eyebrow':        'Tbilisi — Heritage Real Estate',
  'hero.title1':         'Old walls.',
  'hero.title2':         'New futures.',
  'hero.subtitle':       "We source Tbilisi's most characterful pre-Soviet and Stalinist apartments, and show you exactly what they can become with precision renovation.",
  'hero.exploreCatalog': 'Explore Catalog',
  'hero.howItWorks':     'How it works →',
  'hero.scroll':         'scroll',

  // Stats
  'stats.propertiesListed': 'Properties Listed',
  'stats.avgRoi':           'Avg. ROI Potential',
  'stats.avgRenovation':    'Avg. Renovation Period',
  'stats.avgRenovationVal': '4 mo',
  'stats.districts':        'Districts Covered',

  // Catalog
  'catalog.label':       'Catalog',
  'catalog.property':    'property',
  'catalog.properties':  'properties',
  'catalog.availableNow':'Available Now',
  'catalog.none':        'No properties available yet — check back soon.',

  // Filters
  'filters.label': 'Filter by character',
  'filters.all':   'All',

  // Process
  'process.label':  'How it works',
  'process.title':  'The ReForma Process',
  'process.s1t':    'Sourcing',
  'process.s1b':    'We identify and acquire pre-Soviet and Stalinist-era apartments with structural character and unrealised potential.',
  'process.s2t':    'Analysis',
  'process.s2b':    'Architects survey the existing layout and produce a 3D scan, identifying structural opportunities for reconfiguration.',
  'process.s3t':    'Vision',
  'process.s3b':    'Our team produces photorealistic 3D renders showing the transformed space after renovation to international standards.',
  'process.s4t':    'Acquisition',
  'process.s4b':    'You buy with full transparency: asking price, itemised renovation budget, and projected resale value all pre-calculated.',

  // Property card
  'card.askingPrice':     'Asking Price',
  'card.equityPotential': 'Equity Potential',
  'card.featured':        'Featured',
  'card.floor':           'Floor',
  'card.est':             'Est.',

  // Property detail
  'detail.home':            'Home',
  'detail.catalog':         'Catalog',
  'detail.floor':           'Floor',
  'detail.of':              'of',
  'detail.built':           'Built',
  'detail.dragToCompare':   'Drag to compare — black & white vs. full colour',
  'detail.layout':          'Layout',
  'detail.additionalViews': 'Additional Views',
  'detail.currentState':    'Current State',
  'detail.currentStateLabel': 'Photos of the property as it stands today',
  'detail.enquire':         'Enquire About This Property',
  'detail.renovationNote':  'Renovation estimates based on current contractor quotes.',
  'detail.view':            'view',

  // Slider
  'slider.bw':    'B&W',
  'slider.color': 'Color',

  // Floor plan
  'floorplan.existing':  'Existing Layout',
  'floorplan.optimized': 'ReForma Optimized',

  // Finance
  'finance.analysis':            'Financial Analysis',
  'finance.investmentPotential': 'Investment Potential',
  'finance.askingPrice':         'Asking Price',
  'finance.estRenovation':       'Est. Renovation',
  'finance.totalInvestment':     'Total Investment',
  'finance.postRenoValue':       'Post-Reno Market Value',
  'finance.netEquityGain':       'Potential Net Equity Gain',
  'finance.afterReno':           'after full renovation',
  'finance.return':              'return',
  'finance.perSqm':              '/ m²',

  // Units
  'unit.sqm': 'm²',

  // Footer
  'footer.tagline': 'reforma.ge · Tbilisi, Georgia',
  'footer.rights':  'All rights reserved.',

  // About
  'about.pageTitle':   'About — ReForma',
  'about.metaDesc':    "ReForma sources and transforms Tbilisi's most extraordinary historic apartments.",
  'about.label':       'About ReForma',
  'about.title1':      'Architecture as',
  'about.title2':      'investment',
  'about.p1':          "We believe Tbilisi's best apartments are the ones nobody has touched yet. The city carries a century of layered architectural history — Art Nouveau townhouses, heroic Stalinist blocks, raw Soviet Modernist slabs — and most of it sits hidden behind decades of bad renovation work.",
  'about.p2':          'ReForma finds those apartments, documents their hidden potential with precision 3D renders, and presents buyers with a complete, transparent investment case before a single nail is driven.',
  'about.principles':  'Our Principles',
  'about.v1t':         'Total Transparency',
  'about.v1b':         'Every listing shows the full cost picture: asking price, itemised renovation budget, and projected resale value. No hidden fees, no surprise costs.',
  'about.v2t':         'Architectural Integrity',
  'about.v2b':         "We never propose stripping a building's character. Original parquet, ornamental moulding, and exposed brick are preserved and celebrated, not plastered over.",
  'about.v3t':         'Proven Returns',
  'about.v3b':         'Our renovation estimates are based on current contractor quotes from our trusted network, not theoretical figures. We stand behind the numbers we publish.',
  'about.team':        'The Team',
  'about.role1':       'Founding Architect',
  'about.bio1':        '15 years restoring heritage buildings across the South Caucasus. Former lead at Studio Tbilisi.',
  'about.role2':       'Investment Director',
  'about.bio2':        'Former VP at TBC Capital. Structures deals for individual buyers and institutional clients.',
  'about.role3':       'Head of 3D Visualisation',
  'about.bio3':        'Architectural visualisation specialist. Renders every property before any offer is accepted.',
  'about.ctaTitle':    'Ready to find your apartment?',
  'about.ctaText':     'Browse our current catalog of available properties.',
  'about.ctaButton':   'View Catalog →',
  'about.name1':       'Nino Kvaratskhelia',
  'about.name2':       'Giorgi Beridze',
  'about.name3':       'Ana Jugheli',

  // Contact
  'contact.pageTitle':  'Contact — ReForma',
  'contact.metaDesc':   'Get in touch with the ReForma team in Tbilisi.',
  'contact.label':      'Contact',
  'contact.title':      "Let's talk.",
  'contact.intro':      "Whether you're enquiring about a specific listing, want to understand the renovation process, or are interested in bringing a property to us — we'd love to hear from you.",
  'contact.email':      'Email',
  'contact.phone':      'Phone',
  'contact.address':    'Address',
  'contact.addressVal': '14 Kostava St, Tbilisi 0108',
  'contact.hours':      'Hours',
  'contact.hoursVal':   'Mon–Fri, 10:00–18:00',
  'contact.sentLabel':  'Message Sent',
  'contact.sentTitle':  'Thank you.',
  'contact.sentBody':   "We'll respond within one business day.",
  'contact.sentAgain':  'Send another message →',
  'contact.errMissing': 'Please fill in all fields.',
  'contact.fName':      'Full Name',
  'contact.fNamePh':    'Your name',
  'contact.fEmail':     'Email Address',
  'contact.fEmailPh':   'you@example.com',
  'contact.fSubject':   'Subject',
  'contact.subListing': 'Enquiry about a listing',
  'contact.subProcess': 'Questions about the process',
  'contact.subSell':    'I want to list a property',
  'contact.subOther':   'Other',
  'contact.fMessage':   'Message',
  'contact.fMessagePh': "Tell us what you're looking for...",
  'contact.send':       'Send Message',
};

const ka: Dict = {
  // Nav
  'nav.catalog':        'კატალოგი',
  'nav.process':        'პროცესი',
  'nav.about':          'ჩვენს შესახებ',
  'nav.contact':        'კონტაქტი',
  'nav.viewProperties': 'ობიექტების ნახვა',
  'nav.toggleMenu':     'მენიუს ჩვენება',
  'nav.tbilisi':        'თბილისი',
  'nav.switchTo':       'ENG',
  'nav.switchToFull':   'Switch to English',

  // Hero
  'hero.eyebrow':        'თბილისი — ისტორიული უძრავი ქონება',
  'hero.title1':         'ძველი კედლები.',
  'hero.title2':         'ახალი მომავალი.',
  // გამორჩეულ (not ხასიათიან); გაგიჩვენებთ (dative -გი- infix); კვალიფიციური (not ზუსტი)
  'hero.subtitle':       'ჩვენ ვეძებთ თბილისის ყველაზე გამორჩეულ წინასაბჭოთა და სტალინური ეპოქის ბინებს და გაგიჩვენებთ, რად შეიძლება ისინი გარდაიქმნან კვალიფიციური რემონტით.',
  'hero.exploreCatalog': 'კატალოგის დათვალიერება',
  'hero.howItWorks':     'როგორ მუშაობს →',
  'hero.scroll':         'ქვემოთ',

  // Stats
  'stats.propertiesListed': 'განთავსებული ობიექტი',
  'stats.avgRoi':           'საშ. ROI პოტენციალი',
  'stats.avgRenovation':    'საშ. სარემონტო ვადა',
  'stats.avgRenovationVal': '4 თვე',
  'stats.districts':        'დაფარული უბანი',

  // Catalog
  'catalog.label':        'კატალოგი',
  'catalog.property':     'ობიექტი',
  'catalog.properties':   'ობიექტი',
  'catalog.availableNow': 'ხელმისაწვდომია ახლა',
  'catalog.none':         'ჯერჯერობით ობიექტები არ არის — მალე შემოგვიარეთ.',

  // Filters
  'filters.label': 'ფილტრი სტილის მიხედვით',
  'filters.all':   'ყველა',

  // Process
  'process.label':  'როგორ მუშაობს',
  'process.title':  'ReForma-ს პროცესი',
  'process.s1t':    'მოძიება',
  // ვპოულობთ (not ვადგენთ which means "determine/establish"); გამორჩეული added; გააჩნიათ for plural
  'process.s1b':    'ჩვენ ვპოულობთ და ვიძენთ წინასაბჭოთა და სტალინური ეპოქის ბინებს, რომლებსაც გამორჩეული სტრუქტურული ხასიათი და გამოუყენებელი პოტენციალი გააჩნიათ.',
  'process.s2t':    'ანალიზი',
  'process.s2b':    'არქიტექტორები სწავლობენ არსებულ გეგმარებას და ქმნიან 3D სკანს, ადგენენ სტრუქტურულ შესაძლებლობებს გადაგეგმარებისთვის.',
  'process.s3t':    'ხედვა',
  // გვიჩვენებენ (plural verb for plural subject რენდერები); clause reordered for clarity
  'process.s3b':    'ჩვენი გუნდი ქმნის ფოტორეალისტურ 3D რენდერებს, რომლებიც გვიჩვენებენ გარდაქმნილ სივრცეს საერთაშორისო სტანდარტების დონის რემონტის შემდეგ.',
  'process.s4t':    'შეძენა',
  'process.s4b':    'თქვენ ყიდულობთ სრული გამჭვირვალობით: საყიდელი ფასი, დეტალური სარემონტო ბიუჯეტი და პროგნოზირებული გასაყიდი ღირებულება — ყველაფერი წინასწარ გათვლილი.',

  // Property card
  'card.askingPrice':     'ფასი',
  'card.equityPotential': 'კაპიტალის პოტენციალი',
  'card.featured':        'გამორჩეული',
  'card.floor':           'სართ.',
  'card.est':             'აშ.',

  // Property detail
  'detail.home':            'მთავარი',
  'detail.catalog':         'კატალოგი',
  'detail.floor':           'სართული',
  'detail.of':              '/',
  'detail.built':           'აშენდა',
  'detail.dragToCompare':   'გადაათრიეთ შესადარებლად — შავ-თეთრი VS. ფერადი',
  'detail.layout':          'გეგმარება',
  'detail.additionalViews': 'დამატებითი ხედები',
  'detail.currentState':    'არსებული მდგომარეობა',
  'detail.currentStateLabel': 'ობიექტის ფოტოები დღევანდელ სახით',
  'detail.enquire':         'დაინტერესდით ამ ობიექტით',
  'detail.renovationNote':  'სარემონტო შეფასება ეფუძნება მიმდინარე კონტრაქტორების ფასებს.',
  'detail.view':            'ხედი',

  // Slider
  'slider.bw':    'შავ-თეთრი',
  'slider.color': 'ფერადი',

  // Floor plan
  'floorplan.existing':  'არსებული გეგმა',
  'floorplan.optimized': 'ReForma-ს ოპტიმიზაცია',

  // Finance
  'finance.analysis':            'ფინანსური ანალიზი',
  'finance.investmentPotential': 'საინვესტიციო პოტენციალი',
  'finance.askingPrice':         'საყიდელი ფასი',
  // სარემ. ხარჯი replaces unclear abbreviation სავ. რემონტი
  'finance.estRenovation':       'სარემ. ხარჯი',
  'finance.totalInvestment':     'ჯამური ინვესტიცია',
  'finance.postRenoValue':       'რემონტის შემდგომი ღირებულება',
  'finance.netEquityGain':       'პოტენციური წმინდა მოგება',
  'finance.afterReno':           'სრული რემონტის შემდეგ',
  'finance.return':              'უკუგება',
  'finance.perSqm':              '/ მ²',

  // Units
  'unit.sqm': 'მ²',

  // Footer
  'footer.tagline': 'reforma.ge · თბილისი, საქართველო',
  'footer.rights':  'ყველა უფლება დაცულია.',

  // About
  'about.pageTitle':   'ჩვენს შესახებ — ReForma',
  'about.metaDesc':    'ReForma ეძებს და გარდაქმნის თბილისის ყველაზე გამორჩეულ ისტორიულ ბინებს.',
  'about.label':       'ReForma-ს შესახებ',
  'about.title1':      'არქიტექტურა როგორც',
  'about.title2':      'ინვესტიცია',
  // ისეთებია (not ის არის); ფენოვან (not ფენებიან); მიღმა (not უკან)
  'about.p1':          'ჩვენ გვჯერა, რომ თბილისის საუკეთესო ბინები ისეთებია, რომელსაც ჯერ არავინ შეხებია. ქალაქი ატარებს საუკუნოვან, ფენოვან არქიტექტურულ ისტორიას — არ ნუვოს სახლები, სტალინური კორპუსები, საბჭოთა მოდერნისტული ბლოკები — და მათი უმეტესობა იმალება ათწლეულების ცუდი რემონტის მიღმა.',
  // ავლენს (not აფიქსირებს); დეტალური (not ზუსტი) for 3D renders
  'about.p2':          'ReForma პოულობს ამ ბინებს, ავლენს მათ ფარულ პოტენციალს დეტალური 3D რენდერებით და მყიდველებს სთავაზობს სრულ, გამჭვირვალე საინვესტიციო სურათს ერთი ლურსმნის ჩარტყმამდე.',
  'about.principles':  'ჩვენი პრინციპები',
  'about.v1t':         'სრული გამჭვირვალობა',
  // ფინანსურ სურათს (not ხარჯთაღრიცხვას which is too bureaucratic)
  'about.v1b':         'ყველა განცხადება გვიჩვენებს სრულ ფინანსურ სურათს: საყიდელი ფასი, დეტალური სარემონტო ბიუჯეტი და პროგნოზირებული გასაყიდი ღირებულება. დამალული საფასური — არასოდეს.',
  'about.v2t':         'არქიტექტურული მთლიანობა',
  // განადგურებას (not წაშლას); ლეპნინი (not ლეპნინა — incorrect form)
  'about.v2b':         'ჩვენ არასოდეს ვთავაზობთ შენობის ხასიათის განადგურებას. ორიგინალი პარკეტი, დეკორატიული ლეპნინი და ღია აგური — ყველაფერი შენარჩუნებული და ხაზგასმულია, და არა დაფარული.',
  'about.v3t':         'დადასტურებული უკუგება',
  // ვდგავართ (not ვუდგავართ — incorrect verb form)
  'about.v3b':         'ჩვენი სარემონტო შეფასებები ეფუძნება ჩვენი სანდო ქსელის კონტრაქტორების მიმდინარე ფასებს, და არა თეორიულ ციფრებს. ჩვენ ვდგავართ ჩვენ მიერ გამოქვეყნებული რიცხვების უკან.',
  'about.team':        'გუნდი',
  'about.role1':       'დამფუძნებელი არქიტექტორი',
  'about.bio1':        '15 წლის გამოცდილება ისტორიული შენობების რესტავრაციაში სამხრეთ კავკასიაში. ყოფილი წამყვანი არქიტექტორი Studio Tbilisi-ში.',
  'about.role2':       'საინვესტიციო დირექტორი',
  'about.bio2':        'TBC Capital-ის ყოფილი ვიცე-პრეზიდენტი. აწყობს გარიგებებს კერძო და ინსტიტუციური მყიდველებისთვის.',
  'about.role3':       '3D ვიზუალიზაციის ხელმძღვანელი',
  'about.bio3':        'არქიტექტურული ვიზუალიზაციის სპეციალისტი. ყველა ობიექტს რენდერს უკეთებს ნებისმიერი შეთავაზების მიღებამდე.',
  'about.ctaTitle':    'მზად ხართ, იპოვოთ თქვენი ბინა?',
  'about.ctaText':     'დაათვალიერეთ ჩვენი მიმდინარე კატალოგი ხელმისაწვდომი ობიექტებით.',
  'about.ctaButton':   'კატალოგის ნახვა →',
  'about.name1':       'ნინო კვარაცხელია',
  'about.name2':       'გიორგი ბერიძე',
  'about.name3':       'ანა ჯუღელი',

  // Contact
  'contact.pageTitle':  'კონტაქტი — ReForma',
  'contact.metaDesc':   'დაუკავშირდით ReForma-ს გუნდს თბილისში.',
  'contact.label':      'კონტაქტი',
  // მოდით (formal plural, not მოდი which is singular/informal)
  'contact.title':      'მოდით, ვისაუბროთ.',
  // განიხილოთ (not გესმოდეთ which means "hear/understand"); განთავსებაზე (not განთავსებას)
  'contact.intro':      'გინდათ კონკრეტული ობიექტის შესახებ გაიგოთ, განიხილოთ სარემონტო პროცესი, თუ ფიქრობთ ჩვენთან ობიექტის განთავსებაზე — სიამოვნებით მოგისმენთ.',
  'contact.email':      'ელ-ფოსტა',
  'contact.phone':      'ტელეფონი',
  'contact.address':    'მისამართი',
  'contact.addressVal': 'კოსტავას ქ. 14, თბილისი 0108',
  'contact.hours':      'სამუშაო საათები',
  'contact.hoursVal':   'ორშ–პარ, 10:00–18:00',
  'contact.sentLabel':  'შეტყობინება გაიგზავნა',
  'contact.sentTitle':  'გმადლობთ.',
  'contact.sentBody':   'ვუპასუხებთ ერთი სამუშაო დღის განმავლობაში.',
  'contact.sentAgain':  'ახალი შეტყობინების გაგზავნა →',
  'contact.errMissing': 'გთხოვთ, შეავსოთ ყველა ველი.',
  'contact.fName':      'სახელი და გვარი',
  'contact.fNamePh':    'თქვენი სახელი',
  'contact.fEmail':     'ელ-ფოსტის მისამართი',
  'contact.fEmailPh':   'you@example.com',
  'contact.fSubject':   'თემა',
  'contact.subListing': 'კითხვა ობიექტის შესახებ',
  'contact.subProcess': 'კითხვები პროცესთან დაკავშირებით',
  'contact.subSell':    'მსურს ობიექტის განთავსება',
  'contact.subOther':   'სხვა',
  'contact.fMessage':   'შეტყობინება',
  'contact.fMessagePh': 'მოგვწერეთ, რას ეძებთ...',
  'contact.send':       'შეტყობინების გაგზავნა',
};

const dicts: Record<Locale, Dict> = { en, ka };

/** Returns a translator function bound to a locale. Supports {count} interpolation. */
export function useTranslations(locale: Locale) {
  const dict = dicts[locale] ?? dicts[DEFAULT_LOCALE];
  return (key: string, params?: Record<string, string | number>): string => {
    let str = dict[key] ?? en[key] ?? key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      }
    }
    return str;
  };
}

// ─── Tag & district translation ─────────────────────────────────────────────
const tagKa: Record<Tag, string> = {
  'Stalin-era':        'სტალინური ეპოქა',
  'Historic Heritage': 'ისტორიული მემკვიდრეობა',
  'High Ceilings':     'მაღალი ჭერი',
  'Brick Industrial':  'აგურის ინდუსტრიული',
  'Art Nouveau':       'არ ნუვო',
  'Soviet Modernist':  'საბჭოთა მოდერნიზმი',
};

export function translateTag(tag: Tag, locale: Locale): string {
  return locale === 'ka' ? (tagKa[tag] ?? tag) : tag;
}

const districtKa: Record<string, string> = {
  'Vera':       'ვერა',
  'Sololaki':   'სოლოლაკი',
  'Saburtalo':  'საბურთალო',
  'Mtatsminda': 'მთაწმინდა',
  'Vake':       'ვაკე',
};

export function translateDistrict(district: string, locale: Locale): string {
  return locale === 'ka' ? (districtKa[district] ?? district) : district;
}

// ─── Listing content localization ───────────────────────────────────────────
/**
 * Returns a listing with title/address/description swapped for their Georgian
 * versions when locale is 'ka' and a translation exists in listing.ka.
 */
export function localizeListing(listing: Listing, locale: Locale): Listing {
  if (locale === 'ka' && listing.ka) {
    return {
      ...listing,
      title:       listing.ka.title       ?? listing.title,
      address:     listing.ka.address     ?? listing.address,
      description: listing.ka.description ?? listing.description,
    };
  }
  return listing;
}
