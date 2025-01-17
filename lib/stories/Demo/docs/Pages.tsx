import { useNavigation } from '../';
import { PageBase, PageNav, Typography } from '../../../components';

export const Pages = () => {
  const { breadcrumbs } = useNavigation();

  return (
    <PageBase spacing={3}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Typography>
        <h1>Building pages</h1>
        <p>Lorem ipsum</p>
      </Typography>
    </PageBase>
  );
};
