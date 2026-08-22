// Rota Catarina -> Aquiraz, do sertão até o litoral do Ceará.
// x,y são coordenadas dentro de um viewBox de 400x900 no mapa estilizado
// (não são coordenadas geográficas reais, é um traçado ilustrativo).

export const cities = [
  {
    slug: 'catarina',
    name: 'Catarina',
    x: 80,
    y: 60,
    description:
      'Texto de exemplo sobre Catarina. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
  },
  {
    slug: 'acopiara',
    name: 'Acopiara',
    x: 300,
    y: 130,
    description:
      'Texto de exemplo sobre Acopiara. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
  },
  {
    slug: 'piquet-carneiro',
    name: 'Piquet Carneiro',
    x: 100,
    y: 200,
    description:
      'Texto de exemplo sobre Piquet Carneiro. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
  },
  {
    slug: 'senador-pompeu',
    name: 'Senador Pompeu',
    x: 300,
    y: 270,
    description:
      'Texto de exemplo sobre Senador Pompeu. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
  },
  {
    slug: 'quixeramobim',
    name: 'Quixeramobim',
    x: 100,
    y: 340,
    description:
      'Texto de exemplo sobre Quixeramobim. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
  },
  {
    slug: 'quixada',
    name: 'Quixadá',
    x: 300,
    y: 400,
    description:
      'Texto de exemplo sobre Quixadá, famosa pela Serra dos Cariris (Serra do Frade e Freira). Aqui você pode expandir com mais detalhes.',
  },
  {
    slug: 'ibaretama',
    name: 'Ibaretama',
    x: 110,
    y: 465,
    description:
      'Texto de exemplo sobre Ibaretama. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
  },
  {
    slug: 'ocara',
    name: 'Ocara',
    x: 300,
    y: 530,
    description:
      'Texto de exemplo sobre Ocara. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
  },
  {
    slug: 'chorozinho',
    name: 'Chorozinho',
    x: 110,
    y: 595,
    description:
      'Texto de exemplo sobre Chorozinho. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
  },
  {
    slug: 'pacajus',
    name: 'Pacajus',
    x: 300,
    y: 655,
    description:
      'Texto de exemplo sobre Pacajus. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
  },
  {
    slug: 'horizonte',
    name: 'Horizonte',
    x: 130,
    y: 710,
    description:
      'Texto de exemplo sobre Horizonte. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
  },
  {
    slug: 'itaitinga',
    name: 'Itaitinga',
    x: 300,
    y: 760,
    description:
      'Texto de exemplo sobre Itaitinga. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
  },
  {
    slug: 'eusebio',
    name: 'Eusébio',
    x: 150,
    y: 810,
    description:
      'Texto de exemplo sobre Eusébio. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
  },
  {
    slug: 'aquiraz',
    name: 'Aquiraz',
    x: 320,
    y: 860,
    description:
      'Texto de exemplo sobre Aquiraz, cidade histórica litorânea, uma das primeiras vilas do Ceará. Aqui você pode expandir com mais detalhes.',
  },
]

export function getCityBySlug(slug) {
  return cities.find((c) => c.slug === slug)
}
