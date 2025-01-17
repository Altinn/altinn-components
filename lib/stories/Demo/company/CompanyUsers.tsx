import { useNavigation } from '..';
import { Heading, PageBase, PageNav } from '../../../components';
import { companyUsers, UserAdminSection, CompanyUserId } from '../';

export const CompanyUsers = () => {
  const { currentAccount, articleId, breadcrumbs, breadcrumbsId, setPageId } = useNavigation();

  if (articleId) {
    return <CompanyUserId />;
  }


  const items = companyUsers?.map(item => {

    const accessCount = item?.access?.length;

    return {
      ...item,
      onClick: () => setPageId([breadcrumbsId, item?.id].join("/")),
      accessCount,
      badge: accessCount ? {
        color: "company",
        label: accessCount + " tilganger"
      } : {
        label: "Gi tilgang"
      }

    }
  })?.filter(item => item.accessCount)


  const title = 'Tilganger til ' + currentAccount?.name;

  return (
    <PageBase color="person" spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Heading size="xl">{title}</Heading>
      <UserAdminSection items={items} />
    </PageBase>
  );
};
