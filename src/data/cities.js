// Rota Catarina -> Aquiraz, do sertão até o litoral do Ceará.
// x,y são coordenadas dentro de um viewBox de 400x900 no mapa estilizado
// (não são coordenadas geográficas reais, é um traçado ilustrativo).
//
// "description" é sempre uma lista de linhas (strings). Cada linha vira
// um parágrafo separado na tela. Pode ter quantas linhas quiser por cidade.

export const cities = [
  {
    slug: 'catarina',
    name: 'Catarina',
    x: 80,
    y: 60,
    description: [
      'Texto de exemplo sobre Catarina. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
    ],
  },
  {
    slug: 'acopiara',
    name: 'Acopiara',
    x: 300,
    y: 130,
    description: [
      '- Origem do Nome:',
      '· Vem do tupi e significa "aquele que cultiva a terra" ou "o lavrador".',
      '- População no último censo (2022)',
      '· 44.962 pessoas',
      '- Densidade demográfica (2022)',
      '· 19,95 habitante por quilômetro quadrado',
      '- Salário médio mensal dos trabalhadores formais (2023)',
      '· 1,4 salários mínimos',
      '- PIB per capita (2023)',
      '· R$ 15.424,91',
      '- Gentílico',
      '· acopiarense',
      '- História',
      'Primitivamente sua vinculação geográfica tinha como subordinante o distrito denominado de Vila Telha (Iguatu).',
      'Chamava-se Lages, designativo característico de sua formação geológica, envolvendo pedreiras, elevações irregulares e chãs ribeirinhas, compondo dessa forma pequenos nódulos de solos diversificados.',
      'A povoação de Lages, até então adormecida, recebeu como prêmio a sua Estação Ferroviária, mantendo o locativo inicial (10-07-1919).',
      'O seu desmembramento, na qualidade de distrito até então vinculado ao Iguatu, deu-se em 1921, instalando-se a Vila em data de 14 de janeiro de 1922. Em 1923, Lages passou à denominação de Afonso Pena, homenagem que se prestava a um dos presidentes brasileiros. Sua elevação à categoria de cidade ocorreu em 1938, tendo sido seu primeiro prefeito Celso de Oliveira Castro.',
      'Pelo Decreto-lei Estadual n.º 1.114, de 30-12-1943, o município de Afonso Pena teve seu topônimo alterado para Acopiara.',
      
    ],
  },
  {
    slug: 'piquet-carneiro',
    name: 'Piquet Carneiro',
    x: 100,
    y: 200,
    description: [
      'Texto de exemplo sobre Piquet Carneiro. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
    ],
  },
  {
    slug: 'senador-pompeu',
    name: 'Senador Pompeu',
    x: 300,
    y: 270,
    description: [
      'Texto de exemplo sobre Senador Pompeu. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
    ],
  },
  {
    slug: 'quixeramobim',
    name: 'Quixeramobim',
    x: 100,
    y: 340,
    description: [
      'Texto de exemplo sobre Quixeramobim. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
    ],
  },
  {
    slug: 'quixada',
    name: 'Quixadá',
    x: 300,
    y: 400,
    description: [
      'Texto de exemplo sobre Quixadá, famosa pela Serra dos Cariris (Serra do Frade e Freira). Aqui você pode expandir com mais detalhes.',
    ],
  },
  {
    slug: 'ibaretama',
    name: 'Ibaretama',
    x: 110,
    y: 465,
    description: [
      'Texto de exemplo sobre Ibaretama. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
    ],
  },
  {
    slug: 'ocara',
    name: 'Ocara',
    x: 300,
    y: 530,
    description: [
      'Texto de exemplo sobre Ocara. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
    ],
  },
  {
    slug: 'chorozinho',
    name: 'Chorozinho',
    x: 110,
    y: 595,
    description: [
      'Texto de exemplo sobre Chorozinho. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
    ],
  },
  {
    slug: 'pacajus',
    name: 'Pacajus',
    x: 300,
    y: 655,
    description: [
      'Texto de exemplo sobre Pacajus. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
    ],
  },
  {
    slug: 'horizonte',
    name: 'Horizonte',
    x: 130,
    y: 710,
    description: [
      'Texto de exemplo sobre Horizonte. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
    ],
  },
  {
    slug: 'itaitinga',
    name: 'Itaitinga',
    x: 300,
    y: 760,
    description: [
      'Texto de exemplo sobre Itaitinga. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
    ],
  },
  {
    slug: 'eusebio',
    name: 'Eusébio',
    x: 150,
    y: 810,
    description: [
      'Texto de exemplo sobre Eusébio. Aqui você pode falar da história, pontos turísticos, economia e curiosidades da cidade.',
    ],
  },
  {
    slug: 'aquiraz',
    name: 'Aquiraz',
    x: 320,
    y: 860,
    description: [
      'Texto de exemplo sobre Aquiraz, cidade histórica litorânea, uma das primeiras vilas do Ceará. Aqui você pode expandir com mais detalhes.',
    ],
  },
]

export function getCityBySlug(slug) {
  return cities.find((c) => c.slug === slug)
}