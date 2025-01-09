import { useNavigation } from '..';
import { Heading, PageBase, PageHeader, PageNav, Section, Typography } from '../../../components';
export const CompanySettings = () => {
  const { breadcrumbs } = useNavigation;
  return (
    <PageBase spacing={3}>
      <PageNav breadcrumbs={breadcrumbs} />
      <PageHeader>
        <h1>Bergen Bar</h1>
      </PageHeader>
    </PageBase>
  );
};
