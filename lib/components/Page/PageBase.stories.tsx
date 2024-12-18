import type { Meta } from '@storybook/react';
import { Article, Button, Byline, PageBase, PageHeader, PageNav, Section, Typography } from '..';
import { nav } from '../../examples/avatar';

const meta = {
  title: 'Page/PageBase',
  component: PageBase,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof PageBase>;

export default meta;

export const DialogPage = () => {
  return (
    <PageBase color="subtle" shadow="xs">
      <PageNav padding="sm" />
      <Article padding="lg">
        <PageHeader title="Article">
          <Typography>
            <p>Some text</p>
          </Typography>
        </PageHeader>
      </Article>
    </PageBase>
  );
};

export const ProfilePage = () => {
  return (
    <PageBase spacing="lg">
      <Section color="subtle" shadow="xs">
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

export const ArticlePage = () => {
  return (
    <PageBase spacing="lg">
      <PageNav />
      <Article spacing="lg">
        <PageHeader icon="teddy-bear" title="Barneoppdragelse i hjemmet">
          <Typography size="lg">Når du har unger som ikke gjør som du sier kan du bruke dette skjemaet.</Typography>
          <Byline avatar={nav}>
            <strong>NAV, </strong> 14. oktober 2024
          </Byline>
          <div>
            <Button>Start skjema</Button>
          </div>
        </PageHeader>

        <Section>
          <Typography size="lg">
            <p>
              Barneoppdragelse i hjemmet handler om å skape en balanse mellom kjærlighet, grenser og respekt. Det er
              viktig å vise barna ubetinget kjærlighet og støtte, samtidig som man setter tydelige og konsistente
              grenser som hjelper dem å forstå hva som er akseptabel oppførsel.
            </p>
            <h2>Nøkkelen</h2>
            <p>
              Kommunikasjon er nøkkelen: lytte til barnas tanker og følelser, og gi dem mulighet til å uttrykke seg,
              samtidig som man forklarer hvorfor regler og forventninger finnes. Positiv forsterkning, som ros og
              anerkjennelse av gode handlinger, fremmer ønsket adferd, mens konstruktiv veiledning bør erstatte streng
              straff. Ved å være en god rollemodell og skape et trygt, strukturert og kjærlig miljø, gir man barna de
              beste forutsetninger for å utvikle seg til trygge, ansvarlige og empatiske individer.
            </p>
          </Typography>
        </Section>
      </Article>
    </PageBase>
  );
};
