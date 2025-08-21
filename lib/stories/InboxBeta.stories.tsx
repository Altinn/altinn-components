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
          variant="content"
        >
          <Typography>
            <h1>Prøv den nye innboksen</h1>
            <p>
              Vi pusser opp innboksen og du får sniktitte! Den er ikke helt
              ferdig ennå, så noen meldinger kan mangle. Vi håper likevel du vil
              prøve. <a href="#">Les mer om Innboks Beta</a>.
            </p>
          </Typography>
          <ButtonGroup>
            <Button onClick={onToggle}>Prøv Innboks Beta</Button>
            <Button variant="outline">Hva er nytt?</Button>
            <Button variant="outline">Gå tilbake</Button>
          </ButtonGroup>
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
      <PageBase>
        <Breadcrumbs
          items={[
            {
              href: "#",
              label: "Innboks beta",
            },
            {
              label: "Om Innboks beta",
            },
          ]}
        />
        <Heading size="xl">Om Innboks Beta</Heading>
        <Typography>
          <p>
            Du ser nå på et nytt brukergrensesnitt for å vise dialoger,
            tjenester, data og post som er delt med deg fra det offentlige. På
            sikt skal løsningen erstatter dagens innboks i Altinn, men foreløpig
            ser du ikke alt her.
          </p>

          <h2>Hva finner du her?</h2>
          <ul>
            <li>Dialoger fra Skatteteten som gjelder bla bla bla.</li>
          </ul>

          <h2>Hva finner du ikke her?</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Dolere est nonummy.</li>
          </ul>

          <p>
            For å se disse meldingene må du gå til{" "}
            <a href="#">dagens innboks</a>.
          </p>

          <h2>Lanseringsplan</h2>
          <ul>
            <li>1. september 2025: Sniktitt på ny innboks (beta).</li>
            <li>1. januar 2026: Ny innboks erstatter dagens innboks.</li>
            <li>15. mai 2027: Vi skrur av gamle Altinn.</li>
          </ul>

          <h2>Gi tilbakemelding</h2>

          <p>Hva synes du om Innboks Beta? Gi oss tilbakemelding.</p>
        </Typography>
      </PageBase>
      <BetaModal open={false} />
    </Layout>
  );
};
