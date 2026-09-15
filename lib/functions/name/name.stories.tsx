import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ReactNode, useState } from 'react';
import { Avatar, Badge, Flex, ListItem, TextField, Typography } from '../../components';
import { formatDisplayName } from './name';

const meta = {
  title: 'Functions/formatDisplayName',
} satisfies Meta;

export default meta;
type Story = StoryObj;

type NameType = 'person' | 'company';

interface NameCase {
  /** The name as it comes from the source, in capital letters */
  input: string;
  /** The display name we expect */
  expected: string;
  /** Why the name is displayed this way */
  note?: string;
}

interface NameCaseGroup {
  title: string;
  description: string;
  cases: NameCase[];
}

const personNameGroups: NameCaseGroup[] = [
  {
    title: 'Regular names',
    description: 'Every word gets a capital first letter.',
    cases: [
      { input: 'OLA NORDMANN', expected: 'Ola Nordmann' },
      { input: 'KARI MARIE NORDMANN', expected: 'Kari Marie Nordmann', note: 'With a middle name' },
      { input: 'ÅSE ØYVINDSDATTER SÆTHER', expected: 'Åse Øyvindsdatter Sæther', note: 'Æ, ø and å' },
      { input: 'MÁHTTE ÁNTE GAUP', expected: 'Máhtte Ánte Gaup', note: 'Sami letters' },
      { input: 'OLA', expected: 'Ola', note: 'Only one name' },
      { input: 'WEI NG', expected: 'Wei Ng', note: 'No vowels, but acronyms only apply to company names' },
    ],
  },
  {
    title: 'Hyphens',
    description: 'Each part of a hyphenated name gets a capital first letter.',
    cases: [
      { input: 'KARI NORDMANN-HANSEN', expected: 'Kari Nordmann-Hansen', note: 'Hyphenated surname' },
      { input: 'ANNE-MARIE NORDMANN', expected: 'Anne-Marie Nordmann', note: 'Hyphenated given name' },
    ],
  },
  {
    title: 'Initials',
    description: 'Initials with periods are written in capitals.',
    cases: [
      { input: 'OLA J. K. NORDMANN', expected: 'Ola J. K. Nordmann', note: 'Initials with spaces' },
      { input: 'KARI A.B. NORDMANN', expected: 'Kari A.B. Nordmann', note: 'Initials without spaces' },
      { input: 'OLA J NORDMANN', expected: 'Ola J Nordmann', note: 'Initial without a period' },
    ],
  },
  {
    title: 'Apostrophes and Mc',
    description:
      "The letter after a one-letter prefix with an apostrophe, like O' and D', and after Mc is capitalized.",
    cases: [
      { input: "CONAN O'BRIEN", expected: "Conan O'Brien", note: "Irish O'" },
      { input: "ANNA D'ANGELO", expected: "Anna D'Angelo", note: "Italian D'" },
      { input: 'RONALD MCDONALD', expected: 'Ronald McDonald', note: 'Scottish and Irish Mc' },
    ],
  },
  {
    title: 'Compound particles',
    description:
      'Two or more particles in a row in front of a name are always particles, and are written in lowercase.',
    cases: [
      { input: 'URSULA VON DER LEYEN', expected: 'Ursula von der Leyen', note: 'von der' },
      { input: 'JOHANNES VAN DEN BERG', expected: 'Johannes van den Berg', note: 'van den' },
      { input: 'ANNA VAN DE VELDE', expected: 'Anna van de Velde', note: 'van de' },
      { input: 'MARIA DE LA CRUZ', expected: 'Maria de la Cruz', note: 'de la' },
      { input: 'JUAN DE LOS SANTOS', expected: 'Juan de los Santos', note: 'de los' },
      { input: 'ANNE-MARIE VAN DER BERG', expected: 'Anne-Marie van der Berg', note: 'With a hyphenated given name' },
    ],
  },
  {
    title: 'von and dos',
    description: 'These are never given names, so they are written in lowercase in front of a name.',
    cases: [
      { input: 'OTTO VON BISMARCK', expected: 'Otto von Bismarck', note: 'von' },
      { input: 'MARIA DOS SANTOS', expected: 'Maria dos Santos', note: 'dos' },
    ],
  },
  {
    title: 'Van, De, Der and La on their own',
    description:
      'Van, De and Der are also given names. "Ludwig van Beethoven" and "Nguyen Van Nam" are the same word in the same position, so no word list can tell them apart. The policy is to never write a possible given name in lowercase.',
    cases: [
      { input: 'NGUYEN VAN NAM', expected: 'Nguyen Van Nam', note: 'Vietnamese middle name Văn, from the issue' },
      { input: 'NAM VAN NGUYEN', expected: 'Nam Van Nguyen', note: 'Vietnamese middle name Văn before the surname' },
      { input: 'LIU DE HUA', expected: 'Liu De Hua', note: 'Chinese given name De' },
      { input: 'ARAM DER HOVANESSIAN', expected: 'Aram Der Hovanessian', note: 'Armenian Der is capitalized' },
      { input: 'FIORELLO LA GUARDIA', expected: 'Fiorello La Guardia', note: 'Italian La is capitalized' },
      {
        input: 'LUDWIG VAN BEETHOVEN',
        expected: 'Ludwig Van Beethoven',
        note: 'Trade-off: Dutch van should be lowercase',
      },
      { input: 'CHARLES DE GAULLE', expected: 'Charles De Gaulle', note: 'Trade-off: French de should be lowercase' },
    ],
  },
  {
    title: 'First or last in the name',
    description:
      'A name always starts with a capital letter. A particle always comes before a name, so a particle at the end is a name.',
    cases: [
      { input: 'VAN NGUYEN', expected: 'Van Nguyen', note: 'Van as given name' },
      { input: 'OLA VAN', expected: 'Ola Van', note: 'Van last in the name' },
      { input: 'ANNA VAN DER', expected: 'Anna Van Der', note: 'Several particles last' },
      { input: 'OLA VON', expected: 'Ola Von', note: 'von last in the name' },
    ],
  },
  {
    title: "Company rules don't apply to persons",
    description: 'Legal forms, acronyms and words like "kommune" and "og" are only handled in company names.',
    cases: [
      { input: 'OLA KOMMUNE', expected: 'Ola Kommune', note: '"kommune" is only lowercase in company names' },
      { input: 'KARI AS', expected: 'Kari As', note: 'Legal forms only apply to company names' },
    ],
  },
  {
    title: 'Known limitations',
    description: "formatDisplayName doesn't handle these today.",
    cases: [
      {
        input: 'ALEXANDER MACDONALD',
        expected: 'Alexander Macdonald',
        note: 'Could be MacDonald, but Mac also starts ordinary names like Machado and Mack',
      },
      {
        input: "GIULIA DELL'ACQUA",
        expected: "Giulia Dell'acqua",
        note: "Should be Dell'Acqua. Only one-letter prefixes like O' are handled, so a possessive like McDonald's stays lowercase",
      },
    ],
  },
];

const companyNameGroups: NameCaseGroup[] = [
  {
    title: 'Legal forms',
    description: 'The legal form is written in capitals when it is the last word.',
    cases: [
      { input: 'ACME CONSULTING AS', expected: 'Acme Consulting AS', note: 'Aksjeselskap (limited company)' },
      {
        input: 'NORDISK TEKNOLOGI ASA',
        expected: 'Nordisk Teknologi ASA',
        note: 'Allmennaksjeselskap (public limited company)',
      },
      { input: 'OLA NORDMANN ENK', expected: 'Ola Nordmann ENK', note: 'Enkeltpersonforetak (sole proprietorship)' },
      {
        input: 'NORDMANN OG SØNN DA',
        expected: 'Nordmann og Sønn DA',
        note: 'Selskap med delt ansvar (partnership with shared liability)',
      },
      {
        input: 'FJELLHEIM EIENDOM ANS',
        expected: 'Fjellheim Eiendom ANS',
        note: 'Ansvarlig selskap (general partnership)',
      },
      { input: 'BYGDEBUTIKKEN SA', expected: 'Bygdebutikken SA', note: 'Samvirkeforetak (cooperative)' },
      {
        input: 'BOLIGBYGGELAGET BA',
        expected: 'Boligbyggelaget BA',
        note: 'Selskap med begrenset ansvar (limited liability company)',
      },
      { input: 'KULTURFONDET STI', expected: 'Kulturfondet STI', note: 'Stiftelse (foundation)' },
      {
        input: 'ACME LIMITED NUF',
        expected: 'Acme Limited NUF',
        note: 'Norskregistrert utenlandsk foretak (foreign company registered in Norway)',
      },
      { input: 'NORDIC HOLDING SE', expected: 'Nordic Holding SE', note: 'Europeisk selskap (European company)' },
      {
        input: 'FYLKESBUSS FKF',
        expected: 'Fylkesbuss FKF',
        note: 'Fylkeskommunalt foretak (county municipal enterprise)',
      },
      { input: 'HAVNEVESENET KF', expected: 'Havnevesenet KF', note: 'Kommunalt foretak (municipal enterprise)' },
      { input: 'SKOGINVEST KS', expected: 'Skoginvest KS', note: 'Kommandittselskap (limited partnership)' },
      { input: 'RENOVASJON IKS', expected: 'Renovasjon IKS', note: 'Interkommunalt selskap (inter-municipal company)' },
      {
        input: 'BYGDEFORSIKRING GFS',
        expected: 'Bygdeforsikring GFS',
        note: 'Gjensidig forsikringsselskap (mutual insurance company)',
      },
      { input: 'STATSKOG SF', expected: 'Statskog SF', note: 'Statsforetak (state enterprise)' },
      { input: 'SYKEHUSET INNLANDET HF', expected: 'Sykehuset Innlandet HF', note: 'Helseforetak (health trust)' },
      { input: 'HELSE VEST RHF', expected: 'Helse Vest RHF', note: 'Regionalt helseforetak (regional health trust)' },
      { input: 'WORK AS FRIENDS AS', expected: 'Work As Friends AS', note: 'Only the last word is a legal form' },
    ],
  },
  {
    title: 'Municipalities and county municipalities',
    description: '"kommune", "fylkeskommune" and "og" are written in lowercase, except as the first word.',
    cases: [
      { input: 'OSLO KOMMUNE', expected: 'Oslo kommune' },
      { input: 'NORDRE LAND KOMMUNE', expected: 'Nordre Land kommune', note: 'Place name with several words' },
      { input: 'NORD-AURDAL KOMMUNE', expected: 'Nord-Aurdal kommune', note: 'Hyphenated place name' },
      { input: 'BÆRUM KOMMUNE', expected: 'Bærum kommune', note: 'Æ, ø and å' },
      { input: 'VESTLAND FYLKESKOMMUNE', expected: 'Vestland fylkeskommune' },
      { input: 'MØRE OG ROMSDAL FYLKESKOMMUNE', expected: 'Møre og Romsdal fylkeskommune', note: '"og" in lowercase' },
      {
        input: 'OSLO KOMMUNE UTDANNINGSETATEN',
        expected: 'Oslo kommune Utdanningsetaten',
        note: 'Sub-unit is capitalized',
      },
      { input: 'KOMMUNEREVISJON IKS', expected: 'Kommunerevisjon IKS', note: 'Compound words are not affected' },
    ],
  },
  {
    title: 'Initials and abbreviations',
    description: 'Initials with periods are written in capitals. Abbreviations of words, like "St.", are capitalized.',
    cases: [
      { input: 'A.B.C AS', expected: 'A.B.C AS' },
      { input: 'A.B.C X.Y.Z AS', expected: 'A.B.C X.Y.Z AS', note: 'Several initials' },
      { input: 'A.B. SERVICES AS', expected: 'A.B. Services AS', note: 'Two initials' },
      { input: 'ST. OLAVS HOSPITAL HF', expected: 'St. Olavs Hospital HF', note: 'Abbreviation of Sankt' },
      { input: 'TEST.COMPANY AS', expected: 'Test.company AS', note: 'Longer parts are not initials' },
    ],
  },
  {
    title: 'Acronyms',
    description: 'Words without vowels are acronyms, and are written in capitals.',
    cases: [
      { input: 'DNB BANK ASA', expected: 'DNB Bank ASA' },
      { input: 'TV 2 AS', expected: 'TV 2 AS' },
      { input: 'OSLO VVS AS', expected: 'Oslo VVS AS' },
      { input: 'KPMG AS', expected: 'KPMG AS' },
      { input: 'SPAREBANK 1 SMN', expected: 'Sparebank 1 SMN', note: 'Acronym last in the name' },
      { input: 'SR-BANK ASA', expected: 'SR-Bank ASA', note: 'Acronym in a hyphenated word' },
      { input: 'XXL SPORT OG VILLMARK AS', expected: 'XXL Sport og Villmark AS' },
    ],
  },
  {
    title: 'Apostrophes, Mc and slashes',
    description:
      'The letter after a one-letter prefix with an apostrophe and after Mc is capitalized, and so is each part around a slash.',
    cases: [
      { input: 'A/S NORSKE SHELL', expected: 'A/S Norske Shell', note: 'Old form of AS' },
      { input: "L'ORÉAL NORGE AS", expected: "L'Oréal Norge AS", note: "French L'" },
      {
        input: "MCDONALD'S NORGE AS",
        expected: "McDonald's Norge AS",
        note: "Mc, and a possessive 's that stays lowercase",
      },
    ],
  },
  {
    title: 'Person names in company names',
    description: 'The particle rules for person names also apply in company names.',
    cases: [
      {
        input: 'NGUYEN VAN NAM FRISØR',
        expected: 'Nguyen Van Nam Frisør',
        note: 'Middle name Van in a sole proprietorship',
      },
      { input: 'VAN DER LIPPE HOLDING AS', expected: 'Van der Lippe Holding AS', note: 'Compound particle first' },
      { input: 'CAFE DE LA PAIX AS', expected: 'Cafe de la Paix AS', note: 'de la' },
      { input: 'MARIA DOS SANTOS RENHOLD', expected: 'Maria dos Santos Renhold', note: 'dos' },
    ],
  },
  {
    title: 'Known limitations',
    description: "formatDisplayName doesn't handle these today.",
    cases: [
      { input: 'BDO AS', expected: 'Bdo AS', note: 'Should be BDO. Acronyms with vowels look like ordinary words' },
      {
        input: 'NORDIC IT AS',
        expected: 'Nordic It AS',
        note: 'Should be IT. Acronyms with vowels look like ordinary words',
      },
      {
        input: 'WEI NG FRISØR',
        expected: 'Wei NG Frisør',
        note: 'Trade-off: Ng is a surname, but in company names words without vowels are acronyms',
      },
    ],
  },
];

const personDescription = (
  <>
    <p>
      Type a name as it comes from Folkeregisteret (the National Population Register), in capital letters, to see how{' '}
      <code>formatDisplayName</code> displays it with avatar and name.
    </p>
    <ul>
      <li>
        Every word gets a capital first letter, also after a hyphen, after a one-letter prefix with an apostrophe (O',
        D') and after Mc. Initials like "J. K." are written in capitals.
      </li>
      <li>Compound particles in front of a name, like "van der", "von den" and "de la", are written in lowercase.</li>
      <li>"von" and "dos" in front of a name are written in lowercase, since they are never given names.</li>
      <li>
        "Van", "De", "Der" and "La" on their own are capitalized. Van, De and Der are also given names (Vietnamese Văn,
        Chinese De, Armenian Der), and we would rather capitalize a particle than write someone's given name in
        lowercase.
      </li>
      <li>A particle first or last in the name is always capitalized.</li>
    </ul>
  </>
);

const companyDescription = (
  <>
    <p>
      Type a name as it comes from Enhetsregisteret (the Central Coordinating Register for Legal Entities), in capital
      letters, to see how <code>formatDisplayName</code> displays it with avatar and name.
    </p>
    <ul>
      <li>
        Every word gets a capital first letter, also after a hyphen, a slash, a one-letter prefix with an apostrophe
        (L') and Mc.
      </li>
      <li>The legal form at the end of the name, like AS, ASA and ENK, is written in capitals.</li>
      <li>Words without vowels, like DNB, TV and VVS, are acronyms and are written in capitals.</li>
      <li>"kommune", "fylkeskommune" and "og" are written in lowercase, except as the first word.</li>
      <li>Initials like "A.B.C" are written in capitals. Abbreviations of words, like "St.", are capitalized.</li>
      <li>The particle rules for person names also apply, since many company names contain person names.</li>
    </ul>
  </>
);

const getMismatches = (groups: NameCaseGroup[], type: NameType) =>
  groups
    .flatMap((group) => group.cases)
    .map(({ input, expected }) => ({ input, expected, actual: formatDisplayName({ fullName: input, type }) }))
    .filter(({ actual, expected }) => actual !== expected);

const DisplayName = ({ name, type }: { name: string; type: NameType }) => (
  <Flex spacing={2} align="center">
    <Avatar name={name} type={type} size="sm" />
    <span>{name}</span>
  </Flex>
);

const NameCaseTable = ({ group, type }: { group: NameCaseGroup; type: NameType }) => (
  <>
    <h3>{group.title}</h3>
    <p>{group.description}</p>
    <table>
      <thead>
        <tr>
          <th scope="col">From the source</th>
          <th scope="col">Displayed as</th>
          <th scope="col">Why</th>
        </tr>
      </thead>
      <tbody>
        {group.cases.map(({ input, expected, note }) => {
          const name = formatDisplayName({ fullName: input, type });
          return (
            <tr key={input}>
              <td>
                <code style={{ whiteSpace: 'pre' }}>{input}</code>
              </td>
              <td>
                <DisplayName name={name} type={type} />
                {name !== expected && <Badge color="danger" label={`Expected: ${expected}`} />}
              </td>
              <td>{note}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
);

interface DisplayNamePlaygroundProps {
  type: NameType;
  title: string;
  /** Label for the text field, naming the register the name comes from */
  label: string;
  defaultName: string;
  description: ReactNode;
  groups: NameCaseGroup[];
}

const DisplayNamePlayground = ({
  type,
  title,
  label,
  defaultName,
  description,
  groups,
}: DisplayNamePlaygroundProps) => {
  const [fullName, setFullName] = useState(defaultName);
  const name = formatDisplayName({ fullName, type });

  return (
    <Flex direction="col" spacing={6}>
      <Typography>
        <h2>{title}</h2>
        {description}
      </Typography>
      <TextField label={label} value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <section aria-label="Preview">
        <ListItem icon={{ name, type }} title={name} interactive={false} containerAs="div" />
      </section>
      <Typography>
        <h2>All cases</h2>
        {groups.map((group) => (
          <NameCaseTable key={group.title} group={group} type={type} />
        ))}
      </Typography>
    </Flex>
  );
};

export const PersonNames: Story = {
  render: () => (
    <DisplayNamePlayground
      type="person"
      title="Person names"
      label="Name from Folkeregisteret"
      defaultName="TEST TESTESEN"
      description={personDescription}
      groups={personNameGroups}
    />
  ),
};

export const CompanyNames: Story = {
  render: () => (
    <DisplayNamePlayground
      type="company"
      title="Company names"
      label="Name from Enhetsregisteret"
      defaultName="MØRE OG ROMSDAL FYLKESKOMMUNE"
      description={companyDescription}
      groups={companyNameGroups}
    />
  ),
};
