export const BOOKING_URL = '#'

export const restaurant = {
  name: 'Les Komplices',
  address: '55 Rue des Mathurins',
  addressCity: '75008 Paris',
  phone: '06 76 41 09 39',
  phoneHref: 'tel:+33676410939',
  instagram: '#',
  bookingUrl: BOOKING_URL,

  mapEmbedUrl:
    'https://maps.google.com/maps?q=55+Rue+des+Mathurins,+75008+Paris,+France&hl=fr&z=17&output=embed',

  openingHours: [
    'Mardi — Samedi',
    '12h00 — 14h30',
    '19h00 — 22h30',
  ],

  menus: {
    lunch: {
      id: 'lunch',
      label: 'Menu du déjeuner',
      shortLabel: 'Déjeuner',
      pdf: '/CARTE-DEJEUNER-EN-FRANCAIS-26-11-25.pdf',
    },
    dinner: {
      id: 'dinner',
      label: 'Menu du soir',
      shortLabel: 'Soir',
      pdf: '/CARTE-DINER-EN-FRANCAIS-18-01-26.pdf',
    },
  },

  heroImage: '/landing_page.jpeg',
  transitionImage: '/image3.jpeg',

  intro: {
    lines: [
      'Une cuisine sincère.',
      'Des produits choisis.',
      'Une table à partager.',
    ],
    description:
      'Une cuisine vivante et généreuse, imaginée autour du produit, des saisons et du plaisir d\'être ensemble.',
  },

  marqueeItems: [
    'PARIS',
    'CUISINE DE SAISON',
    'PRODUITS FRAIS',
    'DÉJEUNER',
    'DÎNER',
    'RÉSERVATION CONSEILLÉE',
    'TERRASSE',
  ],

  dishes: [
    {
      id: 1,
      category: 'Poisson',
      name: 'Saint-Jacques',
      subtitle: 'de plongée',
      description:
        'Saint-Jacques rôties, beurre noisette, céleri-rave et agrumes.',
      ingredients: [
        'Saint-Jacques',
        'Céleri-rave',
        'Beurre noisette',
        'Agrumes',
      ],
      allergens: 'Lactose · Mollusques',
      price: '48€',
      image: '/image1.jpeg',
      imagePosition: '52% 58%',
    },
    {
      id: 2,
      category: 'Viande',
      name: 'Agneau',
      subtitle: 'de Sisteron',
      description:
        'Carré d\'agneau rôti, jus au thym citronné, légumes de saison.',
      ingredients: [
        'Agneau de Sisteron',
        'Thym citronné',
        'Légumes de saison',
        'Jus court',
      ],
      allergens: 'À compléter',
      price: '52€',
      image: '/image2.jpeg',
      imagePosition: '50% 52%',
    },
    {
      id: 3,
      category: 'Dessert',
      name: 'Tarte',
      subtitle: 'aux agrumes',
      description:
        'Pâte sablée croustillante, crème légère et zestes confits.',
      ingredients: [
        'Agrumes de Sicile',
        'Crème légère',
        'Pâte sablée',
        'Zestes confits',
      ],
      allergens: 'Gluten · Lactose · Œufs',
      price: '14€',
      image: '/image2.jpeg',
      imagePosition: '48% 55%',
    },
  ],

  menu: {
    title: 'La Carte',
    subtitle: 'Une cuisine qui évolue\nau fil des saisons.',
    cta: 'Découvrir le menu',
  },

  restaurant: {
    title: 'Le Restaurant',
    lines: [
      'Un lieu vivant.',
      'Une cuisine sincère.',
      'Des Komplices autour d\'une même table.',
    ],
    description:
      'Au cœur de Paris, Les Komplices accueille ses convives dans un cadre chaleureux où chaque détail a été pensé pour sublimer le moment partagé.',
    heroImage: '/image3.jpeg',
    gallery: [
      { src: '/landing_page.jpeg', alt: 'Salle du restaurant Les Komplices' },
      { src: '/image1.jpeg', alt: 'Plat signature' },
      { src: '/image2.jpeg', alt: 'Création du chef' },
      { src: '/image3.jpeg', alt: 'Ambiance du restaurant' },
      { src: '/image4.jpeg', alt: 'Les Komplices — détail' },
      { src: '/image5.jpeg', alt: 'Les Komplices — ambiance' },
      { src: '/image6.jpeg', alt: 'Les Komplices — cuisine' },
    ],
  },

  reservation: {
    title: ['Une table', 'vous attend.'],
    cta: 'Réserver maintenant',
  },

  nav: [
    { label: 'La Carte', href: '#carte', action: 'carte' },
    { label: 'Le Restaurant', href: '#restaurant' },
    { label: 'À propos', href: '#intro' },
  ],
}
