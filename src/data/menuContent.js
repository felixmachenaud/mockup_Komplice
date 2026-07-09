export const lunchMenu = {
  id: 'lunch',
  label: 'Menu du déjeuner',
  shortLabel: 'Déjeuner',
  pdf: '/CARTE-DEJEUNER-EN-FRANCAIS-26-11-25.pdf',
  subtitle: 'Du mardi au samedi · 12h00 — 14h30',
  sections: [
    {
      title: 'Les Entrées',
      items: [
        { name: 'Œufs durs, mayonnaise/wasabi/œufs de saumon', price: '13€' },
        { name: 'Ceviche de daurade, agrumes, guacamole, sauce ponzu', price: '21€' },
        { name: 'Cèleri rémoulade, pommes Granny Smith, poutargue', price: '15€' },
        { name: 'Velouté butternut & potimarron, crème d\'Isigny', price: '13€' },
      ],
    },
    {
      title: 'Les Plats',
      items: [
        { name: 'Tartare de bœuf Charolais au couteau, frites maison', price: '27€' },
        { name: 'Faux-filet de bœuf Charolais, sauce chimichurri, frites maison', price: '31€' },
        { name: 'Suprême de volaille, purée de maïs, trompettes DLM, jus de viande', price: '28€' },
        { name: 'Colin snacké, tombée de champignons taillés et en velouté', price: '28€' },
        { name: 'Pavé de cabillaud rôti, légumes façon wok, sauce teriyaki', price: '27€' },
      ],
    },
    {
      title: 'Finale salée / sucrée',
      items: [
        { name: 'Assiette de fromage', price: '18€' },
        { name: 'Cheesecake au citron vert', price: '12€' },
        { name: 'Glaces et sorbet — 3 boules', price: '13€' },
        { name: 'Moelleux chocolat, cœur coulant & glace vanille de Madagascar', price: '17€' },
        { name: 'Café gourmand', price: '14€' },
      ],
    },
  ],
  footer: 'Prix nets en euros, service et toutes taxes comprises.',
}

export const dinnerMenu = {
  id: 'dinner',
  label: 'Menu du soir',
  shortLabel: 'Soir',
  pdf: '/CARTE-DINER-EN-FRANCAIS-18-01-26.pdf',
  subtitle: 'Du mardi au samedi · 19h00 — 22h30',
  sections: [
    {
      title: 'Les Entrées',
      items: [
        { name: 'Œufs durs, mayonnaise/wasabi/œufs de saumon', price: '13€' },
        { name: 'Ceviche de daurade, agrumes, guacamole, sauce ponzu', price: '21€' },
        { name: 'Cèleri rémoulade, pommes Granny Smith, poutargue', price: '15€' },
        { name: 'Velouté butternut & potimarron, crème d\'Isigny', price: '13€' },
        { name: 'Terrine de foie de volaille maison & pickles', price: '16€' },
        { name: 'Assiette de charcuterie', price: '18€' },
      ],
    },
    {
      title: 'Les Plats',
      items: [
        { name: 'Tartare de bœuf Charolais au couteau, frites maison', price: '27€' },
        { name: 'Faux-filet de bœuf Charolais, sauce chimichurri, frites maison', price: '31€' },
        { name: 'Suprême de volaille, purée de maïs, trompettes DLM, jus de viande', price: '28€' },
        { name: 'Colin snacké, tombée de champignons taillés et en velouté', price: '28€' },
        { name: 'Pavé de cabillaud rôti, légumes façon wok, sauce teriyaki', price: '27€' },
      ],
    },
    {
      title: 'Finale salée / sucrée',
      items: [
        { name: 'Assiette de fromage', price: '18€' },
        { name: 'Cheesecake au citron vert', price: '12€' },
        { name: 'Glaces et sorbet — 3 boules', price: '13€' },
        { name: 'Moelleux chocolat, cœur coulant & glace vanille de Madagascar', price: '17€' },
      ],
    },
  ],
  footer: 'Prix nets en euros, service et toutes taxes comprises.',
}
