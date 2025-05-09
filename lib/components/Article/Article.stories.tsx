import { CardIcon, ClockDashedIcon, HourglassIcon } from '@navikt/aksel-icons';
import {
  AccordionSection,
  Article,
  ArticleContact,
  ArticleHeader,
  Breadcrumbs,
  Button,
  Divider,
  Metadata,
  Section,
  Typography,
} from '..';
import { skatt } from '../../../examples/avatar';

const meta = {
  title: 'Page/Article',
  tags: ['beta'],
  parameters: {},
  args: {
    breadcrumbs: [
      {
        label: 'Forside',
      },
      {
        label: 'Seksjon',
      },
      {
        label: 'Side',
      },
    ],
    title: 'Sidetittel',
    owner: skatt,
    sections: [
      {
        id: '1',
        title: 'Section 1',
        children: 'Children 1',
      },
      {
        id: '2',
        title: 'Section 2',
        children: 'Children 2',
      },
      {
        id: '3',
        title: 'Section 3',
        children: 'Children 3',
      },
    ],
  },
};

export default meta;

export const Service = () => {
  const { breadcrumbs, title, sections } = meta.args;
  return (
    <Article>
      <Breadcrumbs items={breadcrumbs} />
      <ArticleHeader title={title}>
        <Typography>
          <p>
            Skjemaet brukes til å melde fra om at du tar ansvar for gravferden etter et dødsfall. Det skal fylles ut av
            en nær etterlatt, som ektefelle, barn eller foreldre. Ved kremasjon og askespredning må Statsforvalterens
            tillatelse vedlegges.
          </p>
        </Typography>
      </ArticleHeader>
      <Section align="start" spacing={4}>
        <Divider />
        <Metadata
          variant="list"
          size="sm"
          items={[
            {
              icon: ClockDashedIcon,
              label: 'Frist: 11. mai 2024',
            },
            {
              icon: HourglassIcon,
              label: 'Behandlingstid: 14 dager',
            },
            {
              icon: CardIcon,
              label: 'Gebyr: 500 kroner',
            },
          ]}
        />
        <Button>Endre og levere aksjonærregisteroppgaven</Button>
      </Section>
      <AccordionSection items={sections} />
      <ArticleContact
        title="Står du fast?"
        items={[{ label: 'Chat med en veileder' }, { label: 'Ring 75 00 60 00' }, { label: 'Skriv til Altinn' }]}
      >
        <p>
          Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg med å finne frem i det offentlige, bruke
          innboksen og gi fullmakter til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30. Hvis du
          skriver til oss svarer vi vanligvis innen en virkedag.
        </p>
      </ArticleContact>
    </Article>
  );
};
