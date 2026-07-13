export const conversionContent = {
  heroImageAlt: {
    fr: 'Salle du restaurant Les Komplices, Paris 8e',
    en: 'Les Komplices dining room, Paris 8th arrondissement',
  },

  lunch: {
    image: '/image7.jpeg',
    imageAlt: {
      fr: 'Plat de saison au déjeuner chez Les Komplices',
      en: 'Seasonal lunch plate at Les Komplices',
    },
    detailImages: [
      { src: '/image1.jpeg', alt: { fr: 'Assiette du chef', en: 'Chef\'s plate' } },
      { src: '/image2.jpeg', alt: { fr: 'Produits de saison', en: 'Seasonal produce' } },
    ],
  },

  evening: {
    image: '/image5.jpeg',
    imageAlt: {
      fr: 'Ambiance bar à vin le soir chez Les Komplices',
      en: 'Wine bar atmosphere in the evening at Les Komplices',
    },
    detailImages: [
      { src: '/image4.jpeg', alt: { fr: 'Planches et partage', en: 'Sharing plates' } },
      { src: '/fond3.jpeg', alt: { fr: 'Sélection de bouteilles', en: 'Bottle selection' } },
    ],
  },

  team: {
    chef: {
      image: '/image7.jpeg',
      imageAlt: {
        fr: 'Benjamin, chef des Komplices',
        en: 'Benjamin, chef at Les Komplices',
      },
    },
    sommelier: {
      image: '/image5.jpeg',
      imageAlt: {
        fr: 'Franck-Emmanuel, sommelier des Komplices',
        en: 'Franck-Emmanuel, sommelier at Les Komplices',
      },
    },
  },

  bottles: [
    {
      id: 'bottle-1',
      image: '/fond3.jpeg',
      imageAlt: {
        fr: 'Bouteille du moment — sélection du sommelier',
        en: 'Bottle of the moment — sommelier\'s pick',
      },
    },
    {
      id: 'bottle-2',
      image: '/fond2.jpeg',
      imageAlt: {
        fr: 'Bouteille du moment — sélection du sommelier',
        en: 'Bottle of the moment — sommelier\'s pick',
      },
    },
    {
      id: 'bottle-3',
      image: '/image4.jpeg',
      imageAlt: {
        fr: 'Bouteille du moment — sélection du sommelier',
        en: 'Bottle of the moment — sommelier\'s pick',
      },
    },
  ],

  ratings: {
    verified: false,
    items: [
      { platform: 'Tripadvisor', score: null },
      { platform: 'OpenTable', score: null },
      { platform: 'ViaMichelin', score: null },
    ],
  },

  metro: ['Madeleine', 'Saint-Augustin', 'Saint-Lazare'],

  privateEvents: {
    capacity: 'Jusqu\'à 40 convives',
    formats: ['Déjeuner privé', 'Dîner de groupe', 'Dégustation de vins'],
  },

  geo: {
    latitude: 48.8729,
    longitude: 2.3245,
  },

  priceRange: '€€',
  servesCuisine: ['Française', 'Bistro', 'Bar à vin'],
}
