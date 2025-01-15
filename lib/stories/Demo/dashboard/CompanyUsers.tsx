import { useNavigation } from '..';
import { Heading, ListBase, ListItem, PageBase, PageNav, Toolbar } from '../../../components';
import { users } from '../data';

export const CompanyUsers = () => {
  const { breadcrumbs, breadcrumbsId, setPageId } = useNavigation();

  const title = users?.length + ' brukere';

  return (
    <PageBase color="person" spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Heading size="xl">{title}</Heading>

      <Toolbar search={{ placeholder: 'Søk etter bruker', name: 'search' }} filters={[]} />
      <ListBase>
        {users?.map((item, index) => {
          return (
            <ListItem
              key={item.id}
              {...item}
              size="md"
              avatar={{ name: item?.name, type: 'person' }}
              title={item.name}
              description="Fødselsnr. XXXXXXX XXXX"
              linkIcon="chevron-right"
              badge={
                index === 1
                  ? {
                      label: 'Admin',
                    }
                  : undefined
              }
              onClick={() => setPageId?.([breadcrumbsId, item.id].join('/'))}
            />
          );
        })}
      </ListBase>
    </PageBase>
  );
};
