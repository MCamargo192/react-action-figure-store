const generateId = () => {
  const str = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  return str() + str() + '-' + str() + '-' + str() + '-' + str() + '-' + str() + str() + str();
}


const products = [
  {
    id: generateId(),
    images: ['ZR1', 'ZR2', 'ZR3'],
    name: 'Roronoa Zoro',
    description:
      'One Piece Roronoa Zoro Action Figure, Material: PVC, Condition: New, Size: Aprox. 18cm, Weight: 0.73Kg',
    category: 'animes',
    price: 37.8,
    tags: ['onepiece', 'zoro', 'animes']
  },
  {
    id: generateId(),
    images: ['BL1', 'BL2', 'BL3'],
    name: 'Ichigo vs. Ulquiorra',
    description:
      'Bleach Ichigo vs. Ulquiorra Action Figure, Material: PVC, Condition: New, Size: Aprox. 45cm, Weight: 1.50Kg',
    category: 'animes',
    price: 87.9,
    tags: ['bleach', 'ichigo', 'animes']
  },
  {
    id: generateId(),
    images: ['PA1', 'PA2', 'PA3'],
    name: 'Portgas D Ace',
    description:
      'Oce Piece Portgas D Ace Action Figure, Material: PVC, Condition: New, Size: Aprox. 30cm, Weight: 1.20Kg',
    category: 'animes',
    price: 26,
    tags: ['onepiece', 'ace', 'animes']
  },
  {
    id: generateId(),
    images: ['RK1', 'RK2', 'RK3'],
    name: 'Himura Kenshin',
    description:
      'Rurouni Kenshin Himura Kenshin Action Figure, Material: PVC, Condition: New, Size: Aprox. 19cm, Weight: 0.50Kg',
    category: 'animes',
    price: 43,
    tags: ['rurounikenshin', 'samuraix', 'animes']
  },
  {
    id: generateId(),
    images: ['LF1', 'LF2', 'LF3'],
    name: 'Luffy D. Monkey',
    description:
      'One Piece Luffy D. Monkey Action Figure, Material: PVC, Condition: New, Size: Aprox. 19cm, Weight: 0.80Kg',
    category: 'animes',
    price: 70.5,
    tags: ['onepiece', 'luffy', 'animes']
  },
  {
    id: generateId(),
    images: ['JR1', 'JR2', 'JR3'],
    name: 'Jiraya',
    description:
      'Naruto Sennin Jiraya Action Figure, Material: PVC, Condition: New, Size: Aprox. 19cm, Weight: 0.80Kg',
    category: 'animes',
    price: 34.8,
    tags: ['jiraya', 'naruto', 'animes']
  },
  {
    id: generateId(),
    images: ['UN1', 'UN2', 'UN3'],
    name: 'Uzumaki Naruto',
    description:
      'Naruto Uzumaki Naruto Action Figure, Material: PVC, Condition: New, Size: Aprox. 20cm, Weight: 0.80Kg',
    category: 'animes',
    price: 32,
    tags: ['naruto', 'animes']
  },
  {
    id: generateId(),
    images: ['US1', 'US2', 'US3'],
    name: 'Uchiha Sasuke',
    description:
      'Naruto Uchiha Sasuke Action Figure, Material: PVC, Condition: New, Size: Aprox. 23cm, Weight: 0.90Kg',
    category: 'animes',
    price: 37.9,
    tags: ['sasuke', 'naruto', 'animes']
  },
  {
    id: generateId(),
    images: ['DN1', 'DN2', 'DN3'],
    name: 'Light and Ryuk',
    description:
      'Death Note Yagami Light and Shinimagi Ryuk Action Figure, Material: PVC, Condition: New, Size: Aprox. 48cm, Weight: 1.50Kg',
    category: 'animes',
    price: 85,
    tags: ['deathnote', 'light', 'animes']
  },
  {
    id: generateId(),
    images: ['MG1', 'MG2', 'MG3'],
    name: 'Solid Snake',
    description:
      'Metal Gear Solid Snake Action Figure, Material: PVC, Condition: New, Size: Aprox. 18cm, Weight: 0.65Kg',
    category: 'games',
    price: 28.99,
    tags: ['metalgearsolid', 'solidsnake', 'games']
  },
  {
    id: generateId(),
    images: ['GK1', 'GK2', 'GK3'],
    name: 'Goku',
    description:
      'Dragon Ball Goku Super Sayian Blue Action Figure, Material: PVC, Condition: New, Size: Aprox. 23cm, Weight: 0.70Kg',
    category: 'animes',
    price: 23.99,
    tags: ['goku', 'dragonball', 'animes']
  },
  {
    id: generateId(),
    images: ['GW1', 'GW2', 'GW3'],
    name: 'Kratos and Atreus',
    description:
      'God of War 4 Kratos and Atreus Action Figure, Material: PVC, Condition: New, Size: Aprox. 30cm, Weight: 1.00Kg',
    category: 'games',
    price: 52,
    tags: ['godofwar', 'kratos', 'games']
  },
  {
    id: generateId(),
    images: ['CS1', 'CS2', 'CS3'],
    name: 'Cloud Strife',
    description:
      'Final Fantasy VII Cloud Strife Action Figure, Material: PVC, Condition: New, Size: 27cm , Weight: 1.00kg',
    category: 'games',
    price: 30,
    tags: [
      'finalfantasy7',
      'cloud',
      'games'
    ]
  },
  {
    id: generateId(),
    images: [
      'SE1',
      'SE2',
      'SE3'
    ],
    name: 'Sephiroth',
    description:
      'Final Fantasy VII Sephiroth Action Figure, Material: PVC, Condition: New, Size: 25cm , Weight: 0.90kg',
    category: 'games',
    price: 29.5,
    tags: [
      'finalfantasy7',
      'sephiroth',
      'games'
    ]
  },
  {
    id: generateId(),
    images: [
      'TR1',
      'TR2',
      'TR3'
    ],
    name: 'Lara Croft',
    description:
      'Tomb Raider Lara Croft Action Figure, Material: PVC, Condition: New, Size: 25cm , Weight: 0.90kg',
    category: 'games',
    price: 37.99,
    tags: [
      'tombraider',
      'laracroft',
      'games'
    ]
  },
  {
    id: generateId(),
    images: [
      'SF1',
      'SF2',
      'SF3'
    ],
    name: 'Ryu',
    description:
      'Street Fighter Ryu Action Figure, Material: PVC, Condition: New, Size: 23cm , Weight: 1.10kg',
    category: 'games',
    price: 60.9,
    tags: [
      'ryu',
      'streetfighter',
      'games'
    ]
  },
  {
    id: generateId(),
    images: [
      'LZ1',
      'LZ2',
      'LZ3'
    ],
    name: 'Zelda Link',
    description:
      'The Legend of Zelda, Zelda Link Action Figure, Material: PVC, Condition: New, Size: 20cm , Weight: 0.70kg',
    category: 'games',
    price: 32,
    tags: [
      'legendofzelda',
      'link',
      'games'
    ]
  },
  {
    id: generateId(),
    images: [
      'KM1',
      'KM2',
      'KM3'
    ],
    name: 'Ken Masters',
    description:
      'Street Fighter Ken Masters Action Figure, Material: PVC, Condition: New, Size: 23cm , Weight: 1.10kg',
    category: 'games',
    price: 51.9,
    tags: [
      'ken',
      'streetfighter',
      'games'
    ]
  },
  {
    id: generateId(),
    images: [
      'DP1',
      'DP2',
      'DP3'
    ],
    name: 'Dead Pool',
    description:
      'Marvel Dead Pool Action Figure, Material: PVC, Condition: New, Size: Aprox. 26cm, Weight: 1.00Kg',
    category: 'movies',
    price: 45.9,
    tags: [
      'deadpool',
      'x-men',
      'marvel'
    ]
  },
  {
    id: generateId(),
    images: [
      'WX1',
      'WX2',
      'WX3'
    ],
    name: 'Wolverine',
    description:
      'Marvel X-Men Wolverine Action Figure, Material: PVC, Condition: New, Size: Aprox. 26cm, Weight: 1.00Kg',
    category: 'movies',
    price: 51.9,
    tags: [
      'wolverine',
      'x-men',
      'marvel'
    ]
  },
  {
    id: generateId(),
    images: [
      'SP1',
      'SP2',
      'SP3'
    ],
    name: 'Spider-Man',
    description:
      'Marvel Spider-Man, Material: PVC, Condition: New, Size: Aprox. 27cm, Weight: 1.00Kg',
    category: 'movies',
    price: 31.9,
    tags: [
      'spider-man',
      'marvel',
      'movies'
    ]
  },
  {
    id: generateId(),
    images: [
      'TH1',
      'TH2',
      'TH3'
    ],
    name: 'Thor',
    description: 'Marvel Thor, Material: PVC, Condition: New, Size: Aprox. 27cm, Weight: 1.00Kg',
    category: 'movies',
    price: 29.99,
    tags: [
      'thor',
      'avengers',
      'movies'
    ]
  },
  {
    id: generateId(),
    images: [
      'DV1',
      'DV2',
      'DV3'
    ],
    name: 'Darth Vader',
    description:
      'Star Wars Darth Vader Action Figure, Material: PVC, Condition: New, Size: Aprox. 26cm, Weight: 1.00Kg',
    category: 'movies',
    price: 57.5,
    tags: [
      'darthvader',
      'starwars',
      'movies'
    ]
  },
  {
    id: generateId(),
    images: [
      'JK1',
      'JK2',
      'JK3'
    ],
    name: 'Joker',
    description: 'DC Joker, Material: PVC, Condition: New, Size: Aprox. 26cm, Weight: 1.00Kg',
    category: 'movies',
    price: 37.9,
    tags: [
      'joker',
      'batman',
      'movies'
    ]
  },
  {
    id: generateId(),
    images: [
      'BT1',
      'BT2',
      'BT3'
    ],
    name: 'Batman',
    description: 'DC Batman, Material: PVC, Condition: New, Size: Aprox. 27cm, Weight: 1.00Kg',
    category: 'movies',
    price: 28.99,
    tags: [
      'batman',
      'justiceleague',
      'movies'
    ]
  },
  {
    id: generateId(),
    images: [
      'BK1',
      'BK2',
      'BK3'
    ],
    name: 'Obi-Wan Kenobi',
    description:
      'Star Wars Obi-Wan Kenobi Action Figure, Material: PVC, Condition: New, Size: Aprox. 25cm, Weight: 0.90Kg',
    category: 'movies',
    price: 48.4,
    tags: [
      'obiwan',
      'starwars',
      'movies'
    ]
  },
  {
    id: generateId(),
    images: [
      'SM1',
      'SM2',
      'SM3'
    ],
    name: 'Superman',
    description: 'DC Superman, Material: PVC, Condition: New, Size: Aprox. 25cm, Weight: 0.90Kg',
    category: 'movies',
    price: 28,
    tags: [
      'superman',
      'justiceleague',
      'movies'
    ]
  }
];

export default products;