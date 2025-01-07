import type { Meta } from '@storybook/react';
import {
  Article,
  Flex,
  Footer,
  Grid,
  Header,
  Heading,
  Layout,
  LayoutBase,
  LayoutBody,
  LayoutContent,
  ListItem,
  PageBase,
  PageHeader,
  PageNav,
  Section,
  Typography,
} from '..';
import { drilldownMenu, footer, header, inboxMenu } from '../../../examples/';
import { brreg, nav, skatt } from '../../../examples/avatar';

const meta = {
  title: 'Page/Examples',
  component: PageBase,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof PageBase>;

export default meta;

export const Frontpage = () => {
  return (
    <LayoutBase theme="inherit">
      <Header {...header} />
      <LayoutBody>
        <LayoutContent>
          <PageBase>
            <Flex spacing="lg">
              <Section spacing="lg">
                <Heading size="lg">Alle tjenester</Heading>
                <Grid spacing="md" theme="company">
                  <ListItem size="xl" color="accent" icon="pie-chart" title="Skatt, regnskap og toll" />
                  <ListItem size="xl" color="accent" icon="receipt" title="Personale" />
                  <ListItem size="xl" color="accent" icon="head-heart" title="Miljø og sikkerhet" />
                  <ListItem size="xl" color="accent" icon="truck" title="Transport" />
                  <ListItem size="xl" color="accent" icon="hospital" title="Helse, pleie og omsorg" />
                  <ListItem size="xl" color="accent" icon="teddy-bear" title="Oppvekst og utdanning" />
                  <ListItem size="xl" color="accent" icon="shower" title="Energi, vann og avløp" />
                  <ListItem size="xl" color="accent" icon="hand-shake-heart" title="Kultur og frivillighet" />
                  <ListItem size="xl" color="accent" icon="flower" title="Dødsfall og arv" />
                </Grid>
              </Section>
              <Section spacing="lg">
                <Heading size="lg">Populære oppgaver</Heading>
                <Flex spacing="sm">
                  <ListItem
                    size="md"
                    avatar={nav}
                    title="Slik oppdrar du barna dine"
                    description="NAV"
                    linkIcon="chevron-right"
                  />
                  <ListItem
                    size="md"
                    avatar={skatt}
                    title="Skattemelding for personlige tjenesteytere"
                    description="Skattetaten"
                    linkIcon="chevron-right"
                  />
                  <ListItem
                    size="md"
                    avatar={brreg}
                    title="Miljø og sikkerhet"
                    description="Brønnøysundregistrene"
                    linkIcon="chevron-right"
                  />
                </Flex>
              </Section>
            </Flex>
          </PageBase>
        </LayoutContent>
      </LayoutBody>
      <Footer {...footer} />
    </LayoutBase>
  );
};

export const ArticlePage = () => {
  return (
    <Layout
      theme="inherit"
      header={header}
      sidebar={{ menu: { ...drilldownMenu, theme: 'company', defaultItemColor: 'surface' } }}
    >
      <PageBase>
        <PageNav
          margin="sm"
          breadcrumbs={[{ href: '#', label: 'Forside' }, { href: '#', label: 'Alle skjema' }, { label: 'Tema' }]}
        />
        <Article spacing="lg">
          <Heading weight="bold" size="xl">
            Barneoppdragelse i hjemmet
          </Heading>
          <Typography size="xl">
            Barneoppdragelse i hjemmet handler om å skape en balanse mellom kjærlighet, grenser og respekt. Det er
            viktig å vise barna ubetinget kjærlighet og støtte, samtidig som man setter tydelige og konsistente grenser
            som hjelper dem å forstå hva som er akseptabel oppførsel.
          </Typography>

          <Typography size="md">
            <p>
              Kommunikasjon er nøkkelen: lytte til barnas tanker og følelser, og gi dem mulighet til å uttrykke seg,
              samtidig som man forklarer hvorfor regler og forventninger finnes. Positiv forsterkning, som ros og
              anerkjennelse av gode handlinger, fremmer ønsket adferd, mens konstruktiv veiledning bør erstatte streng
              straff. Ved å være en god rollemodell og skape et trygt, strukturert og kjærlig miljø, gir man barna de
              beste forutsetninger for å utvikle seg til trygge, ansvarlige og empatiske individer.
            </p>
          </Typography>
        </Article>
      </PageBase>
    </Layout>
  );
};

export const DialogPage = () => {
  return (
    <Layout theme="inherit" header={header} footer={footer} sidebar={{ menu: inboxMenu }}>
      <PageBase color="neutral" shadow="xs">
        <PageNav padding="sm" />
        <Article padding="lg">
          <PageHeader title="Article">
            <Typography>
              <p>Some text</p>
            </Typography>
          </PageHeader>
        </Article>
      </PageBase>
    </Layout>
  );
};

export const ProfilePage = () => {
  return (
    <PageBase spacing="lg">
      <Section color="neutral" shadow="xs">
        <PageNav padding="sm" />
        <PageHeader avatar={{ name: 'Zulu Salamander' }} title="Zulu Salamander" padding="lg">
          Tabs?
        </PageHeader>
      </Section>
      <Section>
        <Typography>
          <p>Lorem ipsum dolor sit amet</p>
        </Typography>
      </Section>
    </PageBase>
  );
};
