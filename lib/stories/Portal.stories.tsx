import {
  CardIcon,
  ClockDashedIcon,
  HourglassIcon,
  TeddyBearIcon,
} from "@navikt/aksel-icons";
import {
  Article,
  ArticleContact,
  ArticleHeader,
  Breadcrumbs,
  Button,
  Byline,
  Divider,
  Grid,
  Layout,
  List,
  ListItem,
  Metadata,
  PageBase,
  SearchItem,
  Section,
  Toolbar,
  Heading,
  Typography,
  MenuItemIcon,
} from "../components";

import { Fragment } from "react";
import {
  categoryItems,
  useCategoryPage,
  useHomepage,
  useSearchResults,
} from "../../examples";

const meta = {
  title: "Demo/Portal",
  tags: ["beta"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

export const Home = () => {
  const { layout } = useHomepage({ accountId: undefined });
  return (
    <Layout {...layout}>
      <PageBase color="company">
        <Section>
          <Typography>
            Logg inn for oversikt over din dialog med det offentlige. Innboks,
            innstillinger, oversikt over brukere og historikk.
          </Typography>
        </Section>

        <Grid as="ul" cols={3} spacing={4} color="company">
          {categoryItems?.map((item) => (
            <ListItem
              {...item}
              title={{
                children: item.title as string,
                size: "md",
                weight: "bold",
              }}
              variant="subtle"
              size="lg"
              key={item?.href}
              linkIcon={true}
            />
          ))}
        </Grid>
      </PageBase>
    </Layout>
  );
};

export const Search = () => {
  const { results, toolbar, layout } = useSearchResults({
    query: { q: "Lønn" },
  });
  return (
    <Layout {...layout}>
      <PageBase color="company">
        <Breadcrumbs
          items={[{ label: "Forside", href: "#" }, { label: "Søk: Query" }]}
        />
        <Toolbar {...toolbar} />
        <List>
          {results?.items?.map((item, index) => {
            return (
              <Fragment key={index}>
                <Divider as="li" />
                <SearchItem {...item} />
              </Fragment>
            );
          })}
        </List>
        <ArticleContact
          title="Står du fortsatt fast fast?"
          items={[
            { label: "Chat med en veileder" },
            { label: "Ring 75 00 60 00" },
            { label: "Skriv til Altinn" },
          ]}
        >
          <p>
            Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg
            med å finne frem i det offentlige, bruke innboksen og gi fullmakter
            til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30.
            Hvis du skriver til oss svarer vi vanligvis innen en virkedag.{" "}
          </p>
        </ArticleContact>
      </PageBase>
    </Layout>
  );
};

export const Category = () => {
  const { category, layout, breadcrumbs } = useCategoryPage({
    accountId: undefined,
    categoryId: "skatt",
  });

  return (
    <Layout {...layout}>
      <Article>
        <Breadcrumbs items={breadcrumbs} />
        <ArticleHeader title={category?.title as string}>
          <Typography>
            <p>
              Skjemaet brukes til å melde fra om at du tar ansvar for gravferden
              etter et dødsfall. Det skal fylles ut av en nær etterlatt, som
              ektefelle, barn eller foreldre. Ved kremasjon og askespredning må
              Statsforvalterens tillatelse vedlegges.
            </p>
          </Typography>
        </ArticleHeader>

        {category?.items && (
          <List size="sm" color="neutral">
            {category.items.map((item) => (
              <ListItem
                key={item.id}
                title={item.title}
                icon={category?.icon}
                variant="subtle"
                linkIcon
                badge={<span data-size="xs">X tjenester</span>}
              />
            ))}
          </List>
        )}

        <ArticleContact
          title="Står du fast?"
          items={[
            { label: "Chat med en veileder" },
            { label: "Ring 75 00 60 00" },
            { label: "Skriv til Altinn" },
          ]}
        >
          <p>
            Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg
            med å finne frem i det offentlige, bruke innboksen og gi fullmakter
            til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30.
            Hvis du skriver til oss svarer vi vanligvis innen en virkedag.
          </p>
        </ArticleContact>
      </Article>
    </Layout>
  );
};

export const Topic = () => {
  const { category, layout, breadcrumbs } = useCategoryPage({
    accountId: undefined,
    categoryId: "skatt",
  });

  return (
    <Layout {...layout}>
      <Article>
        <Breadcrumbs items={breadcrumbs} />
        <ArticleHeader>
          <Heading
            size="xl"
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: ".5em",
            }}
          >
            <MenuItemIcon theme="tinted" size="md" icon={TeddyBearIcon} />
            Lønn
          </Heading>
        </ArticleHeader>
        <Typography>
          <p>
            Når du betaler ut lønn til ansatte, er det flere
            rapporteringsplikter du må oppfylle overfor offentlige myndigheter i
            Norge. De viktigste rapporteringspliktene inkluderer:
          </p>
        </Typography>

        {category?.items && (
          <List size="sm" color="neutral" spacing={0}>
            {category.items.map((item) => (
              <Fragment key={item.id}>
                <Divider as="li" />
                <SearchItem
                  key={item.id}
                  title={item.title as string}
                  summary="Lorem ipsum dolor sit amet"
                />
              </Fragment>
            ))}
          </List>
        )}

        <ArticleContact
          title="Står du fast?"
          items={[
            { label: "Chat med en veileder" },
            { label: "Ring 75 00 60 00" },
            { label: "Skriv til Altinn" },
          ]}
        >
          <p>
            Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg
            med å finne frem i det offentlige, bruke innboksen og gi fullmakter
            til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30.
            Hvis du skriver til oss svarer vi vanligvis innen en virkedag.
          </p>
        </ArticleContact>
      </Article>
    </Layout>
  );
};

export const Service = () => {
  const {
    layout,
    breadcrumbs,
    page = {},
  } = useCategoryPage({
    accountId: undefined,
    pageId: "rf-1086",
  });

  const { owner, title, summary } = page;

  return (
    <Layout {...layout}>
      <Article>
        <Breadcrumbs items={breadcrumbs} />
        <ArticleHeader title={title}>
          <Byline avatar={owner} size="md">
            <strong>{owner?.name}</strong>
          </Byline>
          <Typography>
            <p>{summary}</p>
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
                label: "Frist: 11. mai 2024",
              },
              {
                icon: HourglassIcon,
                label: "Behandlingstid: 14 dager",
              },
              {
                icon: CardIcon,
                label: "Gebyr: 500 kroner",
              },
            ]}
          />
          <Button>Endre og levere aksjonærregisteroppgaven</Button>
        </Section>
        <ArticleContact
          title="Står du fast?"
          items={[
            { label: "Chat med en veileder" },
            { label: "Ring 75 00 60 00" },
            { label: "Skriv til Altinn" },
          ]}
        >
          <p>
            Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg
            med å finne frem i det offentlige, bruke innboksen og gi fullmakter
            til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30.
            Hvis du skriver til oss svarer vi vanligvis innen en virkedag.
          </p>
        </ArticleContact>
      </Article>
    </Layout>
  );
};
