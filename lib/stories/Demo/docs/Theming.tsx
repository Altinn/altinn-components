import { useNavigation } from '../';
import { PageBase, PageNav, Typography } from '../../../components';
import { Colors } from './Colors';

export const Theming = () => {
  const { breadcrumbs } = useNavigation();

  return (
    <PageBase spacing={3}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Typography>
        <h1>Layout, theming and colors</h1>
        <p>The Altinn color system is built using tokens from Designsystemet.</p>
        <h2>Primary colors</h2>
        <ul>
          <li>Accent: </li>
          <li>Company:</li>
          <li>Person: </li>
        </ul>
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
