import { ServiceItem, BarberProfile, ReviewItem, GalleryPhoto } from '../types';

export const BUSINESS_INFO = {
  name: 'Barber Shop J.M.',
  logo: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912847/hwegfdqywsuwu.jpg',
  tagline: 'Classic American Barbershop + Modern Premium',
  headline: 'LOOK SHARP. FEEL CONFIDENT.',
  subheadline: 'Professional cuts, clean fades, and classic barbering for everyone.',
  address: {
    street: '1808 76th St.',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11214',
    full: '1808 76th St., Brooklyn, NY 11214',
  },
  phone: {
    display: '929-592-0764',
    intl: '1 929-592-0764',
    tel: 'tel:19295920764',
  },
  facebook: 'https://www.facebook.com/Joseto032870',
  hours: {
    headline: 'OPEN 7 DAYS A WEEK',
    time: '9:00 AM – 10:00 PM',
    days: [
      { day: 'Monday', time: '9:00 AM – 10:00 PM' },
      { day: 'Tuesday', time: '9:00 AM – 10:00 PM' },
      { day: 'Wednesday', time: '9:00 AM – 10:00 PM' },
      { day: 'Thursday', time: '9:00 AM – 10:00 PM' },
      { day: 'Friday', time: '9:00 AM – 10:00 PM' },
      { day: 'Saturday', time: '9:00 AM – 10:00 PM' },
      { day: 'Sunday', time: '9:00 AM – 10:00 PM' },
    ],
  },
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=1808+76th+St,+Brooklyn,+NY+11214',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=1808+76th+St,+Brooklyn,+NY+11214&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'haircuts',
    title: 'Haircuts',
    description: 'Precision scissor and clipper cut tailored to your head shape, hair texture, and preferred style.',
    icon: 'scissors',
    duration: '30 mins',
  },
  {
    id: 'skin-fades',
    title: 'Skin Fades',
    description: 'Seamless low, mid, or high bald fades with crisp blending and smooth foil shaver finish.',
    icon: 'clippers',
    duration: '35 mins',
  },
  {
    id: 'beard-trims',
    title: 'Beard Trims',
    description: 'Sculpted beard grooming with length trimming, neckline cleanup, and sharp cheekline definition.',
    icon: 'beard',
    duration: '20 mins',
  },
  {
    id: 'hot-towel-shaves',
    title: 'Hot Towel Shaves',
    description: 'Traditional straight-razor shave with warm steaming lather, essential skin preparation, and smooth finish.',
    icon: 'razor',
    duration: '30 mins',
  },
  {
    id: 'kids-haircuts',
    title: 'Kids Haircuts',
    description: 'Patient, attentive haircut service for kids of all ages in a friendly and welcoming barbershop atmosphere.',
    icon: 'comb',
    duration: '25 mins',
  },
  {
    id: 'hair-styling',
    title: 'Hair Styling',
    description: 'Wash, blow-dry styling, and premium matte or high-shine pomade application for all occasions.',
    icon: 'styling',
    duration: '15 mins',
  },
  {
    id: 'beard-grooming',
    title: 'Beard Grooming',
    description: 'Comprehensive beard care treatment including conditioning oil, deep brushing, shaping, and precision outline.',
    icon: 'beard',
    duration: '25 mins',
  },
];

export const INITIAL_BARBERS: BarberProfile[] = [
  {
    id: 'barber-1',
    name: 'Barber 1',
    title: 'Professional Barber',
    specialty: 'Classic Cuts & Taper Fades',
    bio: 'Specialized in precision scissor cutting, clean blends, and tailored classic hairstyles.',
    photoUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912798/hdvagsdf.jpg',
    hasSuppliedPhoto: true,
  },
  {
    id: 'barber-2',
    name: 'Barber 2',
    title: 'Professional Barber',
    specialty: 'Skin Fades & Beard Sculpting',
    bio: 'Known for ultra-clean bald fades, sharp hairline lineup detailing, and full beard shaping.',
    photoUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912849/j_bojgwe_fdhugc.jpg',
    hasSuppliedPhoto: true,
  },
  {
    id: 'barber-3',
    name: 'Barber 3',
    title: 'Professional Barber',
    specialty: 'Hot Towel Shaves & Grooming',
    bio: 'Master of classic straight-razor wet shaves, hot steamed towel treatments, and modern styling.',
    photoUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912799/dhgsjsjjsuss.png',
    hasSuppliedPhoto: true,
  },
];

export const WHY_US_PILLARS = [
  {
    id: 'classic-craft',
    title: 'CLASSIC CRAFT',
    description: 'Traditional barbering presented with a modern standard, respecting time-honored barber techniques.',
  },
  {
    id: 'clean-precise',
    title: 'CLEAN & PRECISE',
    description: 'Focus on clean lines, sterile professional stations, and polished presentation for every haircut.',
  },
  {
    id: 'professional-service',
    title: 'PROFESSIONAL SERVICE',
    description: 'A professional and welcoming barbershop experience where every customer receives genuine attention.',
  },
  {
    id: 'fresh-every-time',
    title: 'FRESH EVERY TIME',
    description: 'A brand-focused commitment to delivering sharp, confident results every single visit.',
  },
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'g-1',
    title: 'Clean Low Skin Fade',
    category: 'Fade',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912847/i_tfqdwqdsqdjdms.jpg',
    alt: 'Clean skin fade haircut performed at Barber Shop J.M.',
  },
  {
    id: 'g-2',
    title: 'Sculpted Beard & Taper Detailing',
    category: 'Beard',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912848/ii_cgdsafcqbhjgwddhiuwhwisish.jpg',
    alt: 'Beard sculpting and clean hairline edge detailing',
  },
  {
    id: 'g-3',
    title: 'Textured Crop & Mid Fade',
    category: 'Fade',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912850/qsujsq.jpg',
    alt: 'Textured crop with precise mid skin fade',
  },
  {
    id: 'g-4',
    title: 'Classic Scissor Cut & Natural Taper',
    category: 'Cut',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912855/tsw5652823bbjde_hjasgd_iusaydff.jpg',
    alt: 'Classic tailored scissor cut with tapered sides',
  },
  {
    id: 'g-5',
    title: 'Bald Fade & Razor Part',
    category: 'Fade',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912856/tybbhhjiuii_deths_du.jpg',
    alt: 'Bald fade with razor finish and crisp edge',
  },
  {
    id: 'g-6',
    title: 'Precision Beard Lineup & Grooming',
    category: 'Beard',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912797/bhcd_ugwcwoiehdqwn.jpg',
    alt: 'Sharp beard line definition and conditioning',
  },
  {
    id: 'g-7',
    title: 'Barber Shop J.M. Atmosphere',
    category: 'Shop',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912847/hgywg.png',
    alt: 'Traditional barber chair and clean station atmosphere',
  },
  {
    id: 'g-8',
    title: 'Master Barber Craftsmanship',
    category: 'Craft',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912799/dhgsjsjjsuss.png',
    alt: 'Dedicated barber detailing client hair with precision',
  },
  {
    id: 'g-9',
    title: 'Barber Shop J.M. Studio Banner',
    category: 'Shop',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912846/hgdhgdasas.jpg',
    alt: 'Barber Shop J.M. official studio presentation',
  },
  {
    id: 'g-10',
    title: 'Signature Grooming Presentation',
    category: 'Craft',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912800/hfwjhswsns_sjwswj.jpg',
    alt: 'Barber craft presentation artwork',
  },
  {
    id: 'g-11',
    title: 'Signature Haircut Styling',
    category: 'Cut',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912798/hdvagsdf.jpg',
    alt: 'Finished styled haircut with clean taper blend',
  },
  {
    id: 'g-12',
    title: 'Custom Skin Fade & Silhouette',
    category: 'Fade',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912849/j_bojgwe_fdhugc.jpg',
    alt: 'Custom skin fade and silhouette profile',
  },
];

export const FEATURED_ASSETS = {
  logo: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912847/hwegfdqywsuwu.jpg',
  heroMain: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912847/hgywg.png',
  heroBanner: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912800/hfwjhswsns_sjwswj.jpg',
  aboutBanner: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912846/hgdhgdasas.jpg',
  aboutCraft: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788912799/dhgsjsjjsuss.png',
  facebook: 'https://www.facebook.com/Joseto032870',
};

export const SAMPLE_REVIEWS: ReviewItem[] = [
  {
    id: 'sr-1',
    quote: 'Always walk out with a sharp taper fade and clean beard lineup. The barbers take their time and ensure every detail is on point.',
    rating: 5,
    isPreviewSample: true,
    label: 'SAMPLE REVIEW — PREVIEW CONTENT',
    clientContext: 'Regular haircut & beard grooming client',
  },
  {
    id: 'sr-2',
    quote: 'Great classic atmosphere right in Brooklyn. Open 7 days a week until 10 PM is incredibly convenient after a long workday.',
    rating: 5,
    isPreviewSample: true,
    label: 'SAMPLE REVIEW — PREVIEW CONTENT',
    clientContext: 'Evening haircut client',
  },
  {
    id: 'sr-3',
    quote: 'Best hot towel shave experience. Traditional barber craft with modern cleanliness. Highly recommend Barber Shop J.M.',
    rating: 5,
    isPreviewSample: true,
    label: 'SAMPLE REVIEW — PREVIEW CONTENT',
    clientContext: 'Hot towel shave client',
  },
  {
    id: 'sr-4',
    quote: 'Patient and skilled with kids haircuts too. My son was relaxed and his haircut turned out clean and crisp.',
    rating: 5,
    isPreviewSample: true,
    label: 'SAMPLE REVIEW — PREVIEW CONTENT',
    clientContext: 'Kids haircut client',
  },
];

export const TIME_SLOTS = [
  '9:00 AM',
  '9:45 AM',
  '10:30 AM',
  '11:15 AM',
  '12:00 PM',
  '12:45 PM',
  '1:30 PM',
  '2:15 PM',
  '3:00 PM',
  '3:45 PM',
  '4:30 PM',
  '5:15 PM',
  '6:00 PM',
  '6:45 PM',
  '7:30 PM',
  '8:15 PM',
  '9:00 PM',
  '9:30 PM',
];
