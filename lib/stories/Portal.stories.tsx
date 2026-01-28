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
  ItemMedia,
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
            <ItemMedia icon={TeddyBearIcon} />
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

export const ArticlePage = () => {
  const { layout, breadcrumbs } = useCategoryPage({
    accountId: undefined,
    pageId: "rf-1086",
  });

  return (
    <Layout {...layout}>
      <Article>
        <Breadcrumbs items={breadcrumbs} />
        <ArticleHeader>
          <Heading size="xl" as="h1">
            Advarsel: Altinn og ID-porten misbrukes i svindelforsøk
          </Heading>
          <Typography>
            <p>
              Folk opplever for tiden en bølge av svindelforsøk via e-poster som
              ser ut som de kommer fra Altinn. Mottakerne blir bedt om å klikke
              på en lenke som tilsynelatende fører til ID-porten. Hensikten med
              e-postene er sannsynligvis å lure til seg sensitiv informasjon
              eller penger.
            </p>
          </Typography>
          <Byline>Sist oppdatert: 09.10.2025</Byline>
          <Divider />
        </ArticleHeader>
        <Typography>
          <div className="rich-text">
            <p>
              Svindel-e-postene sier at du må logge inn via ID-porten for å
              «bekrefte personopplysninger i henhold til ny forskrift om digital
              identitetsbekreftelse». Dette stemmer ikke, e-postene er ikke fra
              Altinn, og du må ikke klikke på lenken.
            </p>
            <p>
              Det er alltid noen som prøver å svindle andre på nett, via e-post,
              tekstmeldinger eller over telefon. Det viktigste rådet for å unngå
              svindel er at du aldri må oppgi passord, koder eller annen
              hemmelig informasjon – ikke engang til politiet eller banken.
            </p>
            <p>
              <img
                src="https://inte.info.altinn.no/globalassets/bilder-til-artikler/idtyveri-bilde.jpg"
                alt="Illustrasjonsbilde av dame som holder mobil i ene hånden og bankkort i den andre. "
                width="1024"
                height="683"
              />
            </p>
            <p>
              Her får du noen flere, generelle råd for å unngå å bli svindlet.
            </p>
            <h2>Dette er vanlige svindelmetoder:</h2>
            <ul>
              <li>
                Misbruk av telefonnummer (spoofing): Det kan se ut som
                svindleren ringer fra vår brukerstøtte, fra politiet eller for
                eksempel banken – altså noen du vanligvis stoler på. Målet er å
                få deg til å gi fra deg privat informasjon som passord, koder og
                personopplysninger.
              </li>
              <li>
                Lenker i e-post eller SMS (phishing): Svindleren sender deg en
                lenke som ser ut som den kommer fra en virksomhet du stoler på.
                De gjør dette for å «fiske» etter informasjon. Målet er å få deg
                til å klikke på lenken og legge igjen personopplysninger,
                passord og lignende. Vær kritisk. En lenke som fører deg til en
                innlogging eller en nettbutikk kan være en falsk side, selv om
                den ser ekte ut. Søk heller opp virksomheten selv dersom du vil
                logge inn eller besøke en nettbutikk, bank eller offentlig etat.
              </li>
              <li>
                Svindel på internett og sosiale medier: Vær på vakt når du
                kommer over nettbutikker med uvanlig gode tilbud. Før du handler
                på en nettside du ikke kjenner fra før, er det lurt å gjøre et
                søk på internett for å sjekke andres erfaringer. Og husk at
                svindelforsøk også skjer på nettsteder for bruktmarked.
              </li>
            </ul>
            <h2>Tips og råd mot svindel: Stopp, tenk, sjekk!</h2>
            <ul>
              <li>
                Vern om passordene og kodene dine. Ikke del BankID, passord
                eller sensitive personopplysninger – uansett hvem som spør.
              </li>
              <li>
                Vær kritisk til å klikke på lenker du får på e-post og SMS. Søk
                heller opp nettstedet enn å bruke lenken.
              </li>
              <li>
                Mistanke om at du er i ferd med å bli utsatt for telefonsvindel?
                Spør etter navnet på den som kontakter deg og avslutt samtalen.
                Ta kontakt via virksomhetens offisielle kanaler. Svindlere som
                tar kontakt utgir seg ofte for å være fra banken din eller
                politiet, og kan forfalske telefonnummer, e-postadresser og SMS.
              </li>
              <li>
                Vær kritisk til personer som bruker kjærlighetsforhold,
                investeringer og penger for å komme i kontakt med deg. Hvis noe
                virker for godt til å være sant, så er det som regel det – og
                det kan være svindel.
              </li>
            </ul>
            <h2>Er du utsatt for svindel og ID-tyveri?</h2>
            <p>
              Du bør kontakte politiet, banken og forsikringsselskapet ditt
              dersom du er utsatt for svindel.
            </p>
            <p>
              <a
                title="https://www.politiet.no/tjenester/anmelde/anmelde-svindel-og-id-tyveri/"
                href="https://www.politiet.no/tjenester/anmelde/anmelde-svindel-og-id-tyveri/"
              >
                Kontakt Politiet
              </a>
            </p>
          </div>
        </Typography>
      </Article>
    </Layout>
  );
};
