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

  heroImage: '/landing_page6.png',
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
    title: 'Le Lieu',
    lines: ['La salle le jour.', 'La cave le soir.', 'Une adresse qui se transforme.'],
    description:
      'Comptoir, tables, lumière du soir et bouteilles sélectionnées — chaque détail raconte ce que l\'on vit chez Les Komplices.',
    heroImage: '/image9.jpeg',
    heroImagePosition: 'center 38%',
    showcase: [
      {
        src: '/image7.jpeg',
        alt: 'Salle du restaurant Les Komplices',
        layout: 'lead',
        position: 'center 32%',
      },
      {
        src: '/image8.jpeg',
        alt: 'Ambiance et détails du restaurant',
        layout: 'portrait',
        position: 'center 40%',
      },
      {
        src: '/image9.jpeg',
        alt: 'Lumière et atmosphère du soir',
        layout: 'wide',
        position: 'center 35%',
      },
      {
        src: '/image10.jpeg',
        alt: 'Table dressée chez Les Komplices',
        layout: 'portrait',
        position: 'center 45%',
      },
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
