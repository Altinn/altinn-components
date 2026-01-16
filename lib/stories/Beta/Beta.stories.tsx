import {
  Heading,
  PageBase,
  Breadcrumbs,
  Article,
  Typography,
  Modal,
  ButtonGroup,
  Button,
  Checkbox,
  FloatingActionButton,
} from "../../components";
import { InformationSquareIcon } from "@navikt/aksel-icons";
import { useState } from "react";

const meta = {
  title: "Demo/Inbox/Beta",
  tags: ["beta"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

export const BetaModal = ({
  checkbox = false,
  open = true,
}: {
  checkbox?: boolean;
  open?: boolean;
}) => {
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
          {checkbox && <Checkbox checked label="Vis meg hva som er nytt" />}
          <ButtonGroup>
            <Button onClick={onToggle}>Prøv ny innboks</Button>
            <Button variant="outline">Tilbake til vanlig innboks</Button>
          </ButtonGroup>
          <Typography size="sm">
            <p>
              <a href="#">Hvorfor oppdaterer vi innboksen?</a>
            </p>
          </Typography>
        </Modal>
      ) : (
        <FloatingActionButton
          color="company"
          onClick={onToggle}
          aria-label="Om Beta"
        >
          <InformationSquareIcon />
        </FloatingActionButton>
      )}
    </>
  );
};

export const About = () => {
  return (
    <PageBase>
      <Breadcrumbs
        items={[
          {
            href: "#",
            label: "Innboks Beta",
          },
          {
            label: "Om nye Altinn",
          },
        ]}
      />
      <Article>
        <Heading size="xl">
          Om nye Altinn – enklere, tryggere og mer moderne
        </Heading>
        <Typography maxWidth="65ch">
          <p>
            Altinn har vært en viktig digital portal for innbyggere og
            virksomheter i over 20 år. Teknologien begynner å bli utdatert.
            Derfor bygger vi nå om fra Altinn 2 til Altinn 3. Den nye
            plattformen gir bedre sikkerhet, mer moderne løsninger og enklere
            bruk for deg.
          </p>
          <h2>Hva blir bedre for deg som bruker Altinn?</h2>
          <ul>
            <li>
              <strong>Enklere å bruke:</strong> Tydelig design, enklere språk og
              mobilvennlig løsning.
            </li>
            <li>
              <strong>Raskere oversikt over meldinger:</strong> Innboksen samler
              brev, varsler og kvitteringer, og viser hvem som har lest
              meldingene og om en sak er under arbeid.
            </li>
            <li>
              <strong>Tryggere og sikrere:</strong> Personopplysningene dine
              beskyttes på en moderne plattform som er bedre rustet mot digitale
              trusler.
            </li>
            <li>
              <strong>Systembrukere og integrasjon:</strong> Virksomheter kan
              koble egne systemer direkte til Altinn, noe som gir tryggere og
              mer stabile integrasjoner.
            </li>
            <li>
              <strong>Åpen kildekode og samskaping:</strong> Offentlige etater
              kan bygge løsninger som deles og gjenbrukes, og raskere utvikle
              nye tjenester som møter reelle behov.
            </li>
          </ul>
          <h2>Hvordan lanserer vi endringene?</h2>
          <p>
            <strong>
              Siden Altinn brukes av mange offentlige virksomheter og alt må
              fungere sammen, rulles endringene ut gradvis. Du kan derfor
              oppleve at noen funksjoner mangler eller ser annerledes ut i
              starten.
            </strong>
            Tenk på det som et puslespill: i begynnelsen ser man bare enkelte
            brikker, men bit for bit kommer helheten på plass.
          </p>
          <p>
            1. september lanserer vi første del av puslespillet: den nye
            innboksen og støtte for systembrukere. Du kan ta i bruk den nye
            innboksen allerede nå, men den gamle innboksen vil fortsatt være
            tilgjengelig i en overgangsperiode.
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
      </Article>
    </PageBase>
  );
};

export const AboutInbox = () => {
  return (
    <PageBase>
      <Breadcrumbs
        items={[
          {
            href: "#",
            label: "Innboks Beta",
          },
          {
            label: "Om ny innboks",
          },
        ]}
      />
      <Article>
        <Heading size="xl">
          Ny innboks – bedre dialoger, enklere å finne frem
        </Heading>
        <Typography maxWidth="65ch">
          <p>
            Du ser nå på en tidlig versjon av den nye innboksen i Altinn. På
            sikt vil den erstatte dagens innboks og vi jobber med å overføre
            gamle meldinger.
          </p>
          <p>
            Den nye innboksen er en del av{" "}
            <a href="?id=demo-inbox--about-page">
              den nye plattformen til Altinn.
            </a>
          </p>
          <h2>Bedre dialoger</h2>
          <p>
            Ideen med Altinn er å samle all digital dialog med det offentlige,
            men det er ikke alltid enkelt å holde rede på alle meldingene du
            får. I den nye innboksen kan etatene samle meldinger som inngår i
            samme sakskompleks i én dialog. I tillegg får du mer informasjon som
            skal gjøre det enklere å holde oversikt
          </p>
          <ul>
            <li>
              <strong>Er saken ferdig eller krever den handling?</strong>{" "}
              Dialoger kan markeres med status som hjelper deg å forstå hva som
              er viktigst.
            </li>
            <li>
              <strong>Hva har skjedd?</strong> Hva er nytt, når ble dialogen
              oppdatert? Hvem har sett dialogen? Mer informasjon gjør det
              enklere å skille de ulike dialogene fra hverandre
            </li>
          </ul>
          <h2>Enklere å finne frem</h2>
          <p>
            Vi vet at mange har store, komplekse innbokser. Derfor jobber vi med
            å gjøre det lettere å finne frem til gamle dialoger.
          </p>
          <ul>
            <li>
              <strong>Bedre søk:</strong> Foreløpig kan du bare søke på
              enkeltord, men vi jobber med å forbedre søkeopplevelsen.
            </li>
            <li>
              <strong>Bedre filtreringsmuligheter:</strong> Leter du etter en
              dialog fra en bestemt etat eller med en spesiell status? Bruk
              filter for å begrense resultatet.
            </li>
            <li>
              <strong>Søk på tvers:</strong> Har du tilganger til mange
              innbokser kan du søke på flere av dem samtidig.
            </li>
          </ul>
          <h2>Finner jeg alt i den nye innboksen?</h2>
          <p>
            <strong>
              Siden Altinn brukes av mange offentlige virksomheter og alt må
              fungere sammen, rulles endringene ut gradvis.
            </strong>{" "}
            Du kan derfor oppleve at gamle meldinger mangler eller ser
            annerledes ut i den nye innboksen.
          </p>
          <p>
            Alt innhold er ikke overført ennå, og inntil alle tjenesteeiere har
            tatt i bruk den nye innboksen må du også forholde deg til{" "}
            <a href="#">innboksen du kjenner fra før</a>.
          </p>
          <h2>Gi oss tilbakemelding</h2>
          <p>
            Har du spørsmål eller tilbakemeldinger, kontakt oss på{" "}
            <a href="mailto:brukerservice@altinn.no">brukerservice@altinn.no</a>
          </p>
        </Typography>
      </Article>
    </PageBase>
  );
};
