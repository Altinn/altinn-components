import { useNavigation } from '..';
import { Heading, ListBase, ListItem, PageBase, PageNav, Toolbar } from '../../../components';
import { companies } from '../data';
import {ChevronRightIcon} from "@navikt/aksel-icons";

export const UserAccounts = () => {
  const { breadcrumbs, breadcrumbsId, setPageId } = useNavigation();

  const title = companies?.length + ' tilganger';

  return (
    <PageBase color="person" spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Heading size="xl">{title}</Heading>

      <Toolbar search={{ placeholder: 'Søk etter konto', name: 'account' }} filters={[]} />

      <ListBase>
        {companies?.map((item, index) => {
          return (
            <ListItem
              key={item.id}
              {...item}
              size="md"
              avatar={{ name: item?.name, type: 'company' }}
              title={item.name}
              description="Org. nr. 2341324134"
              badge={index === 2 ? { label: 'Admin' } : undefined}
              onClick={() => setPageId([breadcrumbsId, item.id].join('/'))}
              linkIcon
            />
          );
        })}
      </ListBase>
    </PageBase>
  );
};
