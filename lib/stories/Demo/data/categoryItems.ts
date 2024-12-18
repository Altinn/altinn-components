import type { MenuItemProps } from '../../../components';

export const categoryItems: MenuItemProps[] = [
  {
    id: 'skatt',
    groupId: '2',
    icon: 'pie-chart',
    title: 'Skatt, regnskap og toll',
    items: [
      {
        id: 'mva',
        title: 'Skatt og merverdiavgift',
      },
      {
        id: 'regnskap',
        title: 'Regnskap og økonomirapportering',
      },
      {
        id: 'revisor',
        title: 'Revisorattester',
      },
      {
        id: 'toll',
        title: 'Toll',
      },
    ],
  },
  {
    id: 'personale',
    groupId: '2',
    icon: 'receipt',
    title: 'Personale',
    items: [
      {
        id: 'ansatte',
        title: 'Ansettelsesforhold',
      },
      {
        id: 'lonn',
        title: 'Lønn',
      },
      {
        id: 'pensjon',
        title: 'Pensjon',
      },
      {
        id: 'permisjon',
        title: 'Permisjon og sykefravær',
      },
    ],
  },
  {
    id: 'miljo',
    groupId: '2',
    icon: 'head-heart',
    title: 'Miljø og sikkerhet',
    items: [
      {
        id: 'rapportering',
        title: 'Miljø og klimarapportering',
      },
      {
        id: 'renovasjon',
        title: 'Renovasjon',
      },
      {
        id: 'rydding',
        title: 'Miljørydding, miljørensing og lignende',
      },
      {
        id: 'barekraft',
        title: 'Bærekraft',
      },
      {
        id: 'ulykke',
        title: 'Ulykke og yrkesskade',
      },
    ],
  },
  /*
    {
      id: "post-arkiv",
      groupId: '2',
      icon: "envelope",
      backgroundColor: "#F3ABB6",
      title: "Post og arkiv",
    },*/
  {
    id: 'forhold',
    groupId: '2',
    icon: 'reception',
    title: 'Forhold ved virksomheten',
    items: [
      {
        id: 'helfo',
        title: 'Helfotjenester',
      },
      {
        id: 'starte-drive',
        title: 'Starte, drive, endre og avvikle virksomhet',
      },
      {
        id: 'aksje-og-eier',
        title: 'Aksjer og eierforhold',
      },
      {
        id: 'attester',
        title: 'Attester',
      },
      {
        id: 'tilsyn',
        title: 'Dokumentbasert tilsyn',
      },
      {
        id: 'infrastruktur',
        title: 'Infrastruktur',
      },
      {
        id: 'patent',
        title: 'Patent, varemerke og design',
      },
      {
        id: 'tilskudd',
        title: 'Tilskudd, støtte og erstatning',
      },
      {
        id: 'kommune',
        title: 'Mine sider hos kommunen',
      },
      {
        id: 'politi',
        title: 'Politi og domstol',
      },
      {
        id: 'statistikk',
        title: 'Rapportering av statistikk',
      },
      {
        id: 'forskning',
        title: 'Forskning',
      },
    ],
  },
  {
    id: 'jorbruk-hav',
    groupId: '2',
    icon: 'tray-food',
    title: 'Jordbruk og hav',
    items: [
      {
        id: 'jordbruk',
        title: 'Jordbruk, dyrehold og reindrift',
      },
      {
        id: 'jakt',
        title: 'Jakt og viltstell',
      },
      {
        id: 'skog',
        title: 'Skogbruk',
      },
      {
        id: 'fiske',
        title: 'Fiske',
      },
      {
        id: 'akva',
        title: 'Akvakultur',
      },
    ],
  },
  {
    id: 'eiendom',
    groupId: '2',
    icon: 'hard-hat',
    title: 'Bygg, anlegg og eiendom',
    items: [
      {
        id: 'plan-og-bygg',
        title: 'Plan og byggesaker',
      },
      {
        id: 'oppforing',
        title: 'Oppføring av bygg og anlegg',
      },
      {
        id: 'omsetning',
        title: 'Omsetning og drift av eiendom',
      },
    ],
  },
  {
    id: 'transport',
    groupId: '2',
    icon: 'truck',
    title: 'Transport og lagring',
    items: [
      {
        id: 'vei',
        title: 'Veitransport',
      },
      {
        id: 'ror',
        title: 'Transport i rør',
      },
      {
        id: 'sjo',
        title: 'Sjøfart',
      },
      {
        id: 'luft',
        title: 'Lufttransport',
      },
      {
        id: 'jernbane',
        title: 'Jernbanetransport',
      },

      {
        id: 'andre',
        title: 'Lagring og andre tjenester tilknyttet transport',
      },
    ],
  },
  {
    id: 'helse',
    groupId: '2',
    icon: 'hospital',
    title: 'Helse, pleie og omsorg',
    items: [
      {
        id: 'kommuneoverlege',
        title: 'Kommuneoverlege',
      },
      {
        id: 'sarlig-kategori',
        title: 'Helsetjenester med personopplysninger av særlig kategori',
      },
      {
        id: 'helsetjenester',
        title: 'Helsetjenester',
      },
      {
        id: 'pleie-omsorg',
        title: 'Pleie- og omsorgstjenester i institusjon',
      },
      {
        id: 'uten-botilbud',
        title: 'Sosiale omsorgstjenester uten botilbud og flyktningemottak',
      },
      {
        id: 'barn-familie',
        title: 'Barnevern og familievern',
      },
    ],
  },
  {
    id: 'utdanning',
    groupId: '2',
    icon: 'teddy-bear',
    title: 'Oppvekst og utdanning',
    items: [
      {
        id: 'barnehage',
        title: 'Barnehage',
      },
      {
        id: 'skole',
        title: 'Skole og opplæring',
      },
      {
        id: 'opplaringskontor',
        title: 'Opplæringskontorleder',
      },
      {
        id: 'ppt-leder',
        title: 'PPT-leder',
      },
      {
        id: 'sfo-leder',
        title: 'SFO-leder',
      },
      {
        id: 'barnevern-familievern',
        title: 'Barnevern og familievern',
      },
      {
        id: 'hoyere-utdanning',
        title: 'Høyere utdanning og høyere yrkesfaglig utdanning',
      },
      {
        id: 'godkjenning',
        title: 'Godkjenning av utdanning',
      },
    ],
  },
  {
    id: 'energi',
    groupId: '2',
    icon: 'tap-water',
    title: 'Energi, vann, avløp, avfall',
    items: [
      {
        id: 'elektrisitet',
        title: 'Elektrisitet: produsere, overføre og distribuere',
      },
      {
        id: 'damp',
        title: 'Damp- og varmtvann',
      },
      {
        id: 'vann',
        title: 'Vann: ta ut av kilde, rense og distribuere',
      },
      {
        id: 'avlopsvann',
        title: 'Samle opp og behandle avløpsvann',
      },
      {
        id: 'avfall',
        title: 'Avfall: samle inn, behandle bruke og gjenvinne',
      },
      {
        id: 'rydding',
        title: 'Miljørydding, -rensing og lignende virksomhet',
      },
      {
        id: 'utvinning',
        title: 'Utvinning av råolje, naturgass og kull',
      },
    ],
  },
  {
    id: 'industrier',
    groupId: '2',
    icon: 'buildings2',
    title: 'Industrier',
    items: [
      {
        id: '1',
        title: 'Lorem ipsum',
      },
      {
        id: '2',
        title: 'Dolor sit amet',
      },
      {
        id: '3',
        title: 'Sit mattis magna',
      },
    ],
  },
  {
    id: 'kultur',
    groupId: '2',
    icon: 'hand-shake-heart',
    title: 'Kultur og frivillighet',
    items: [
      {
        id: '1',
        title: 'Lorem ipsum',
      },
      {
        id: '2',
        title: 'Dolor sit amet',
      },
      {
        id: '3',
        title: 'Sit mattis magna',
      },
    ],
  },
  {
    id: 'handel',
    groupId: '2',
    icon: 'bed',
    title: 'Handel og overnatting',
    items: [
      {
        id: '1',
        title: 'Lorem ipsum',
      },
      {
        id: '2',
        title: 'Dolor sit amet',
      },
      {
        id: '3',
        title: 'Sit mattis magna',
      },
    ],
  },
  {
    id: 'dodsfall',
    groupId: '2',
    icon: 'flower-petal-falling',
    title: 'Dødsfall og arv',
    items: [
      {
        id: '1',
        title: 'Lorem ipsum',
      },
      {
        id: '2',
        title: 'Dolor sit amet',
      },
      {
        id: '3',
        title: 'Sit mattis magna',
      },
    ],
  },
];
