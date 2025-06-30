import {
  Breadcrumbs,
  Article,
  ArticleHeader,
  ArticleContact,
  Typography,
  Layout,
  AccountList,
} from "../components";

import { useLayout, accountList } from "../../examples";

const meta = {
  title: "Demo/Error",
  tags: ["beta"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

export const Default = () => {
  const layout = useLayout({
    accountId: null,
  });
  return (
    <Layout {...layout} sidebar={{ hidden: true }}>
      <Article>
        <Breadcrumbs
          items={[{ label: "Forside", href: "#" }, { label: "Error" }]}
        />
        <ArticleHeader title="Title">
          <Typography>
            <p>A short explanation of what went wrong:</p>
            <ul>
              <li>
                <a href="#">Helpful link 1</a>
              </li>
              <li>
                <a href="#">Helpful link 2</a>
              </li>
              <li>
                <a href="#">Helpful link 3</a>
              </li>
            </ul>
          </Typography>
        </ArticleHeader>
      </Article>
    </Layout>
  );
};

export const WithContact = () => {
  const layout = useLayout({
    accountId: null,
  });
  return (
    <Layout {...layout} sidebar={{ hidden: true }}>
      <Article>
        <Breadcrumbs
          items={[{ label: "Forside", href: "#" }, { label: "Error" }]}
        />
        <ArticleHeader title="Title">
          <Typography>
            <p>A short explanation of what went wrong:</p>
            <ul>
              <li>
                <a href="#">Helpful link 1</a>
              </li>
              <li>
                <a href="#">Helpful link 2</a>
              </li>
              <li>
                <a href="#">Helpful link 3</a>
              </li>
            </ul>
          </Typography>
        </ArticleHeader>
        <ArticleContact
          title="Trenger du hjelp?"
          items={[
            { label: "Chat med en veileder" },
            { label: "Ring 75 00 60 00" },
            { label: "Skriv til Altinn" },
          ]}
        >
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
            ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec sed odio dui.
          </p>
        </ArticleContact>
      </Article>
    </Layout>
  );
};

export const PageNotFound = () => {
  const layout = useLayout({
    accountId: "user",
  });
  return (
    <Layout {...layout} sidebar={{ hidden: true }}>
      <Article>
        <Breadcrumbs
          items={[{ label: "Forside", href: "#" }, { label: "Feilmelding" }]}
        />
        <ArticleHeader title="Siden finnes ikke">
          <Typography>
            <p>Mange kommer til Altinn for å gjøre en av disse tingene:</p>
            <ul>
              <li>
                <a href="#">Se meldinger eller oppgaver i innboksen</a>
              </li>
              <li>
                <a href="#">Finne og sende inn et skjema</a>
              </li>
            </ul>
          </Typography>
        </ArticleHeader>

        <ArticleContact
          title="Trenger du hjelp?"
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

export const LoginError = () => {
  const layout = useLayout({
    accountId: null,
    color: "neutral",
    theme: "default",
  });
  return (
    <Layout {...layout} sidebar={{ hidden: true }}>
      <Article>
        <Breadcrumbs
          items={[{ label: "Forside", href: "#" }, { label: "Feilmelding" }]}
        />
        <ArticleHeader title="Du ble logget ut">
          <Typography>
            <p>Velg en konto for å fortsette:</p>
          </Typography>
        </ArticleHeader>

        <AccountList
          groups={accountList.groups}
          items={accountList?.items
            .filter((item) => item.type !== "group" && !item.isDeleted)
            ?.map((item) => {
              return {
                ...item,
                color: "neutral",
                variant: "subtle",
              };
            })}
        />
      </Article>
    </Layout>
  );
};
