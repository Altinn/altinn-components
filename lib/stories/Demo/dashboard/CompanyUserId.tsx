import { AccountHeader, useNavigation } from '..';
import { Heading, ListBase, ListItem, PageBase, PageNav, Section } from '../../../components';
import { categoryItems, users } from '../data';

export const CompanyUserId = () => {
  const { breadcrumbs, breadcrumbsId, section, articleId } = useNavigation();

  const user = users?.find((item) => item.id === articleId) || {
    name: 'User name',
  };

  const items = categoryItems;
  const title = items.length + ' tilganger';

  return (
    <PageBase color="person" spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />
      <AccountHeader {...user} type="person" />

      <Heading size="lg">{title}</Heading>
      <ListBase>
        {items?.map((item) => {
          return <ListItem {...item} />;
        })}
      </ListBase>
    </PageBase>
  );
};
