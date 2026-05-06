/**
 * Catálogo único; las secciones de Home filtran por `sectionIds`.
 * `id` actúa como slug en rutas (`/producto/:slug`).
 */
export const games = [
  {
    id: 'age-of-mythology',
    title: 'Age of Mythology',
    image: '/Assets/Paginas/Principal/AgeOfMytology.jpg',
    tags: ['Mundo abierto', 'Estrategia', 'Multijugador'],
    discount: '-25%',
    oldPrice: '$14.99',
    newPrice: '$11.24 USD',
    hoverGif: '/Assets/Paginas/Principal/ageofmytholofy.gif',
    imageVariant: 'default',
    sectionIds: ['tendencia', 'catalog'],
    description:
      'Estrategia en tiempo real mitológica: civilizaciones, dioses y batallas épicas.',
  },
  {
    id: 'god-of-war',
    title: 'God of War',
    image: '/Assets/Paginas/Principal/Godofwar.jpg',
    tags: ['Aventura', 'Acción', 'Un jugador'],
    discount: '-30%',
    oldPrice: '$19.99',
    newPrice: '$13.99 USD',
    hoverGif: '/Assets/Paginas/Principal/gif-godofwar.gif',
    imageVariant: 'default',
    sectionIds: ['tendencia', 'accion', 'catalog'],
    description:
      'Kratos y Atreus en un viaje nórdico brutal, narrativa cinematográfica y combate visceral.',
  },
  {
    id: 'call-of-duty',
    title: 'Call of Duty',
    image:
      '/Assets/Paginas/Principal/call-of-duty-modern-warfare-2-task-force-i149551.jpg',
    tags: ['Shooter', 'Acción', 'Multijugador'],
    discount: '-20%',
    oldPrice: '$29.99',
    newPrice: '$23.99 USD',
    hoverGif: '/Assets/Paginas/Principal/call-of-duty-black-ops-4-gif.gif',
    imageVariant: 'default',
    sectionIds: ['tendencia', 'catalog'],
    description:
      'Shooter multijugador de ritmo frenético, modos clásicos y progresión constante.',
  },
  {
    id: 'horizon',
    title: 'Horizon',
    image: '/Assets/Paginas/Principal/Horizon.png',
    tags: ['Mundo abierto', 'Acción', 'Aventura'],
    discount: '-40%',
    oldPrice: '$39.99',
    newPrice: '$23.99 USD',
    hoverGif: '/Assets/Paginas/Principal/horizon-zero-gif.gif',
    imageVariant: 'default',
    sectionIds: ['tendencia', 'catalog'],
    description:
      'Explora un mundo postapocalíptico vibrante y enfréntate a máquinas colosales.',
  },
  {
    id: 'bioshock-infinite',
    title: 'Bioshock Infinite',
    image: '/Assets/Paginas/Principal/bioshocinfinite.jpg',
    tags: ['Mundo abierto', 'Estrategia', 'Multijugador'],
    discount: '-25%',
    oldPrice: '$14.99',
    newPrice: '$11.24 USD',
    hoverGif: '/Assets/Paginas/Principal/bioshoc-gif.gif',
    imageVariant: 'default',
    sectionIds: ['accion', 'catalog'],
    description:
      'Columbia flotante, narrativa inmersiva y combate dinámico con vigores.',
  },
  {
    id: 'the-witcher-3',
    title: 'The Witcher 3',
    image: '/Assets/Paginas/Principal/TheWitcher3-2.jpg',
    tags: ['Aventura', 'Acción', 'Un jugador'],
    discount: '-30%',
    oldPrice: '$19.99',
    newPrice: '$13.99 USD',
    hoverGif: '/Assets/Paginas/Principal/thewitcher3-gif.gif',
    imageVariant: 'default',
    sectionIds: ['accion', 'catalog'],
    description:
      'RPG de mundo abierto: decisiones con peso, cacerías de monstruos y una historia inolvidable.',
  },
  {
    id: 'fortnite',
    title: 'Fortnite',
    image: '/Assets/Paginas/Principal/fornite5.jpg',
    tags: ['Shooter', 'Acción', 'Multijugador'],
    discount: '-20%',
    oldPrice: '$29.99',
    newPrice: '$23.99 USD',
    hoverGif: '/Assets/Paginas/Principal/fortnite-gif.gif',
    imageVariant: 'default',
    sectionIds: ['accion', 'catalog'],
    description:
      'Battle royale y modos creativos con estética única y temporadas siempre renovadas.',
  },
  {
    id: 'gta-v',
    title: 'Grand Theft Auto V',
    image: '/Assets/Paginas/Principal/gta5-2.jpg',
    tags: ['Mundo abierto', 'Acción', 'Aventura'],
    discount: '-40%',
    oldPrice: '$39.99',
    newPrice: '$23.99 USD',
    hoverGif: '/Assets/Paginas/Principal/gta5-gif.gif',
    imageVariant: 'default',
    sectionIds: ['accion', 'catalog'],
    description:
      'Los Santos en todo su esplendor: campaña triple y GTA Online sin límites.',
  },
  {
    id: 'hell-let-loose',
    title: 'Hell Let Loose',
    image:
      '/Assets/Paginas/Principal/hellloose.77caf06c-66b6-4ed8-ab29-73b2901b20d1',
    tags: ['Mundo abierto', 'Estrategia', 'Multijugador'],
    discount: '-25%',
    oldPrice: '$14.99',
    newPrice: '$11.24 USD',
    hoverGif: '/Assets/Paginas/Principal/hell-let-lose-gif.gif',
    imageVariant: 'tall',
    sectionIds: ['simulacion', 'catalog'],
    description:
      'FPS táctico de la Segunda Guerra Mundial a escala masiva, comunicación y equipo.',
  },
  {
    id: 'counter-strike-2',
    title: 'Counter-Strike 2',
    image: '/Assets/Paginas/Principal/csgo.avif',
    tags: ['Aventura', 'Acción', 'Un jugador'],
    discount: '-30%',
    oldPrice: '$19.99',
    newPrice: '$13.99 USD',
    hoverGif: '/Assets/Paginas/Principal/csgo-gif.gif',
    imageVariant: 'tall',
    sectionIds: ['simulacion', 'catalog'],
    description:
      'Competición táctica por rondas, precisión y trabajo en equipo definen cada partida.',
  },
  {
    id: 'bioshock',
    title: 'Bioshock',
    image: '/Assets/Paginas/Principal/bioshoc.jpg',
    tags: ['Shooter', 'Acción', 'Multijugador'],
    discount: '-20%',
    oldPrice: '$29.99',
    newPrice: '$23.99 USD',
    hoverGif: '/Assets/Paginas/Principal/bioshoc-gif.gif',
    imageVariant: 'tall',
    sectionIds: ['simulacion', 'catalog'],
    description:
      'Rapture bajo el mar: atmósfera única, filosofía y combate con plásmidos.',
  },
  {
    id: 'bioshock-2',
    title: 'Bioshock 2',
    image: '/Assets/Paginas/Principal/bioshoc2.jpg',
    tags: ['Mundo abierto', 'Acción', 'Aventura'],
    discount: '-40%',
    oldPrice: '$39.99',
    newPrice: '$23.99 USD',
    hoverGif: '/Assets/Paginas/Principal/bioshock2.gif',
    imageVariant: 'tall',
    sectionIds: ['simulacion', 'catalog'],
    description:
      'Regreso a Rapture con nuevas mecánicas y una historia que profundiza el mito.',
  },
]

export function gamesInSection(sectionId) {
  return games.filter((g) => g.sectionIds.includes(sectionId))
}

export function getGameBySlug(slug) {
  if (!slug) return null
  return games.find((g) => g.id === slug) ?? null
}
