 const people = [
  {
    id: 'freyr',
    name: 'Freyr Alexandersson',
    role: "Hovedtrener",
    access: ["skatt/mva", "skatt/regnskap"]
  },
  {
    id: 'mathias',
    name: 'Mathias Dyngeland',
    role: "1. keeper",
    access: ["personale/lonn",]
  },
  {
    id: 'mathias',
    name: 'Martin Børsheim',
    role: "Reservekeeper",
    access: ["personale/lonn",]
  },
  {
    id: 'mathias',
    name: 'Mathias Klasuen',
    access: ["personale/lonn",]
  },
  {
    id: 'palle',
    name: 'Fredrik Pallesen Knudsen',
    access: ["skatt/mva", "skatt/regnskap"]
  },
  {
    id: 'huse',
    name: 'Erik Huseklepp',
    role: "Høyre arm",
    access: ["skatt/mva","personale/lonn","personale/permisjon","personale/pensjon","personale/ansatte","miljo/rapportering"]
  },
  {
    id: 'heggis',
    name: 'Aune Heggebø',
    role: "Bergens 7. fjell",
    access: ["skatt/mva","skatt/regnskap","forhold/helfo","forhold/starte-drive","forhold/aksje-og-eier","personale/lonn","personale/permisjon","personale/pensjon","personale/ansatte","miljo/rapportering"]
  },
  {
    id: 'japhet',
    name: 'Japhet Sery Larsen',
    role: "Dansk stopper",
    access: ["personale/lonn","personale/permisjon","personale/pensjon"]
  },
  {
    id: 'torsvik',
    name: 'Jonas Torsvik',
    role: "Skadeutsatt talent",
    access: ["personale/lonn",]
  },
  {
    id: 'felix',
    name: 'Felix Horn Myhre',
    role: "Playmaker",
    access: ["personale/lonn","personale/permisjon","personale/pensjon"]
  },
];

const companies = [
    {
      id: "tall",
        type: "company",
        name: "Talleksperten",
        role: "Regnskapsbyrå",
        access: ["skatt/mva", "skatt/regnskap"]
      }
]

const groups = [
    {
      id: "g1",
        type: "group",
        name: "Styremedlemmer",
        role: "Styremedlemmer og ansatte",
        access: ["skatt/mva", "skatt/regnskap"],
        items: [
            {
                name: "Synne samsung",
                description: "Styrets leder"
            },
            {
                name: "Mikael Donson",
                description: "Daglig leder"
            },
            {
                name: "Are Akebakke",
                description: "Styremedlem"
            },
        ]
    },
    {
        id: "r1",
        type: "group",
        name: "Regnskap",
        role: "De som driver med regnskap",
        access: ["skatt/mva", "skatt/regnskap"],
        items: [
            {
                name: "Mikael Donson",
                description: "Daglig leder"
            },
            {
                name: "Synne samsung",
                description: "Styrets leder"
            },
            ...companies,
        ]
    }
]

export const userAdminItems = [
    ...people,
    ...companies,
    ...groups,
].map(item => {
    return {
        ...item,
        type: item.type || "person"
    }
})

// order an array of objects with name
export const companyUsers = userAdminItems.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});