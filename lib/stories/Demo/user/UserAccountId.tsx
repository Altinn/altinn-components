import { AccountHeader, useNavigation } from '..';
import { Heading, ListBase, ListItem, PageBase, PageNav } from '../../../components';
import { companies } from '../data';
import {categoryItems} from "../../../../examples";

export const UserAccountId = () => {
  const { currentAccount, breadcrumbs, articleId } = useNavigation();

  const company = companies.find((item) => item.id === articleId) || {
    name: 'User name',
  };

  const items = categoryItems.slice(0, 4);
  const title = items.length + ' tilganger';

  return (
    <PageBase color="person" spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />
      <AccountHeader {...company} type="company" currentAccount={currentAccount} />
      <Heading size="lg">{title}</Heading>
      <ListBase>
        {items.map((item) => {
          return <ListItem {...item} />;
        })}
      </ListBase>
    </PageBase>
  );
};
