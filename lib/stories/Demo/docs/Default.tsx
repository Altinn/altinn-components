import { useNavigation } from "../";
import {
  Badge,
  Flex,
  Heading,
  PageBase,
  PageNav,
  Section,
  Typography,
} from "../../../components";
import { Colors } from "./Colors";

export const Default = () => {
  const { breadcrumbs } = useNavigation();

  return (
    <PageBase spacing={3}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Typography>
        <h1>Altinn UI components</h1>
        <p>
          This package is a set of reusable components for building web
          applications for Altinn 3. It is not a general purpose library, but a
          library of components that are specifically designed for the Altinn
          platform, to ensure a consistent look and feel across all
          applications.
        </p>
        <p>
          <strong>Documentation and demos are work in progress.</strong>
        </p>
        <h2>About this demo</h2>
        <p>
          The purpose of this demo is primarily to show how navigating across
          multiple areas could work within Altinn, using the same layout and
          basic building blocks. Design and content is limited, and might not be
          representative of the final product.
        </p>
        <ul>
          <li>
            <a href="/?path=/story/demo--inbox&globals=theme:person">
              Jump to demo
            </a>
          </li>
        </ul>
        <h2>How to use</h2>
        <p>xxx</p>
        <h1>Layout and RootProvider</h1>
        <p>
          Use Layout and RootProvider to establish the Altinn interface. Layout
          provides a global header and footer, as well as an optional sidebar,
          while RootProvider takes care of handling global interaction patterns.
        </p>
        <h2>RootProvider</h2>
        <p>
          Handles common interaction tasks like showing/hiding menus, triggering
          Snackbars, etc.
        </p>
        <ul>
          <li>Snackbar</li>
        </ul>
        <h2>Header</h2>
        <p>
          The header provides ui for search and the global menu, including an
          account switcher.
        </p>
        <ul>
          <li>Search</li>
          <li>Global menu</li>
          <li>Account menu</li>
        </ul>
        <h2>Sidebar</h2>
        <ul>
          <li>Menu</li>
        </ul>
        <h2>Footer</h2>
        <p>The header provides a simple ui for search and the global menu.</p>

        <h1>Theming and colors</h1>
        <p>
          The Altinn color system is built using tokens from Designsystemet.
        </p>
        <h2>Primary colors</h2>
        <ul>
          <li>Accent: </li>
          <li>Company:</li>
          <li>Person: </li>
        </ul>
      </Typography>
      <Colors />
    </PageBase>
  );
};
