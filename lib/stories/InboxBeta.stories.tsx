import {
  Heading,
  Layout,
  PageBase,
  Breadcrumbs,
  Typography,
  DialogList,
  Toolbar,
  Modal,
  ButtonGroup,
  Button,
  Checkbox,
  FloatingActionButton,
} from "../components";
import { InformationSquareIcon } from "@navikt/aksel-icons";
import { useState } from "react";
import { useInboxBeta } from "../../examples";

const meta = {
  title: "Demo/InboxBeta",
  tags: ["beta"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

export const BetaModal = ({ open = false }: { open?: boolean }) => {
  const [modal, setModal] = useState(open);

  const onToggle = () => {
    setModal((prevState) => !prevState);
  };

  return (
    <>
      {modal ? (
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          closedBy="none"
          variant="default"
        >
          <Typography>
            <h1>Prøv den nye innboksen</h1>
            <p>
              Vi pusser opp innboksen og du får sniktitte på en tidlig versjon!
              Den er fortsatt under utvikling, så noen meldinger kan mangle. Vi
              håper likevel du vil prøve.
            </p>
          </Typography>
          <Checkbox checked label="Vis meg hva som er nytt" />
          <ButtonGroup>
            <Button onClick={onToggle}>Prøv ny innboks</Button>
            <Button variant="outline">Tilbake til vanlig innboks</Button>
          </ButtonGroup>
          <Typography size="sm">
            <p>
              <a href="#">Hvorfor oppdaterer vi Altinn?</a>
            </p>
          </Typography>
        </Modal>
      ) : (
        <FloatingActionButton
          color="company"
          onClick={onToggle}
          icon={InformationSquareIcon}
          iconAltText="Om Beta"
        />
      )}
    </>
  );
};

export const BetaText = () => {
  return (
    <PageBase>
      <Breadcrumbs
        items={[
          {
            href: "#",
            label: "Altinn.no",
          },
          {
            label: "Om nye Altinn",
          },
        ]}
      />
      <Heading size="xl">
        Om nye Altinn – enklere, tryggere og mer moderne
      </Heading>
      <Typography>
        <p>
          Altinn har vært en viktig digital portal for innbyggere og
          virksomheter i over 20 år. Teknologien begynner å bli utdatert. Derfor
          bygger vi nå om fra Altinn 2 til Altinn 3. Den nye plattformen gir
          bedre sikkerhet, mer moderne løsninger og enklere bruk for deg.
        </p>
        <h2>Hva blir bedre for deg som bruker Altinn?</h2>
        <ul>
          <li>
            <strong>Enklere å bruke:</strong> Tydelig design, enklere språk og
            mobilvennlig løsning.
          </li>
          <li>
            <strong>Raskere oversikt over meldinger:</strong> Innboksen samler
            brev, varsler og kvitteringer, og viser hvem som har lest meldingene
            og om en sak er under arbeid.
          </li>
          <li>
            <strong>Tryggere og sikrere:</strong> Personopplysningene dine
            beskyttes på en moderne plattform som er bedre rustet mot digitale
            trusler.
          </li>
          <li>
            <strong>Systembrukere og integrasjon:</strong> Virksomheter kan
            koble egne systemer direkte til Altinn, noe som gir tryggere og mer
            stabile integrasjoner.
          </li>
          <li>
            <strong>Åpen kildekode og samskaping:</strong> Offentlige etater kan
            bygge løsninger som deles og gjenbrukes, og raskere utvikle nye
            tjenester som møter reelle behov.
          </li>
        </ul>
        <h2>Hvordan lanserer vi endringene?</h2>
        <p>
          <strong>
            Siden Altinn brukes av mange offentlige virksomheter og alt må
            fungere sammen, rulles endringene ut gradvis. Du kan derfor oppleve
            at noen funksjoner mangler eller ser annerledes ut i starten.
          </strong>
          Tenk på det som et puslespill: i begynnelsen ser man bare enkelte
          brikker, men bit for bit kommer helheten på plass.
        </p>
        <p>
          1. september lanserer vi første del av puslespillet: den nye innboksen
          og støtte for systembrukere. Du kan ta i bruk den nye innboksen
          allerede nå, men den gamle innboksen vil fortsatt være tilgjengelig i
          en overgangsperiode.
        </p>
        <p>
          Systembrukere blir tilgjengelig for regnskapsbyråer,
          revisjonsselskaper og andre virksomheter som ønsker å koble egne
          systemer direkte til Altinn.
        </p>
        <h2>Hva må jeg gjøre?</h2>
        <p>
          Du trenger ikke gjøre noe. Vi gir beskjed dersom det er noe du må
          gjøre.
        </p>
        <h2>Takk for tålmodigheten</h2>
        <p>
          Vi gleder oss til å vise deg det nye Altinn og setter stor pris på
          tålmodigheten din mens vi bygger om. Har du spørsmål eller
          tilbakemeldinger, kontakt oss på brukerservice@altinn.no
        </p>
      </Typography>
    </PageBase>
  );
};

export const Inbox = () => {
  const { layout, toolbar, results } = useInboxBeta({});

  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        {results && (
          <DialogList items={results.items} groups={results?.groups} />
        )}
      </PageBase>
      <BetaModal open={true} />
    </Layout>
  );
};

export const Information = () => {
  const { layout } = useInboxBeta({ pageId: "s1" });

  return (
    <Layout {...layout}>
      <BetaText />
      <BetaModal open={false} />
    </Layout>
  );
};
