import { Heading, PageBase, PageNav } from '../../../components';
import { useNavigation, companyAccessItems, companyUsers, AccessAdminSection, CompanyAccessId } from '../';

export const CompanyAccess = () => {
  const { currentAccount, parentId, sectionId, childId, pageId, breadcrumbs, setPageId } = useNavigation();

  if (childId) {
    return <CompanyAccessId />;
  }

  const accessId = [parentId, sectionId].join("/")
  
  const accessAreas = companyAccessItems.map(item => {
    const areaId = accessId + "/" + item.id
    return {
      ...item,
      id: areaId,
      as: "button",
      onClick: () => setPageId(areaId === pageId ? accessId : areaId),
      expanded: areaId === pageId,
      items: item?.items?.map(child => {
        const accessId = [item.id, child.id].join("/")
        const users = companyUsers?.filter(user => user?.access?.includes(accessId))
        const userCount = users?.length

        const packageId = [areaId, child.id].join("/")
        return {
          ...child,
          as: "button",
          users,
          userCount,
          onClick: () => setPageId(packageId)
        }
      })
    }
  })

  const items = accessAreas?.map(item => {

    let users = [];

    item?.items.map(item => {
      if (item.users?.length) {
        users = [
          ...users,
          item.users
        ]
      }
    })

    const count = item?.items.length;
    const access = item?.items?.filter(item => item.userCount);
    const accessCount = access?.length


    const uniqueUsers = [...new Set(users)];
    const userCount = uniqueUsers?.length;

    return {
      ...item,
      badge: count && accessCount ? { color: "company", label: accessCount + " av " + count }
       : { color: "neutral",label: "Gi tilgang"},
      count,
      accessCount,
      userCount
    }
  })


  const title = 'Fullmakter for ' + currentAccount?.name;

  return (
    <PageBase color="company" spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Heading size="xl">{title}</Heading>
      <AccessAdminSection items={items} />
    </PageBase>
  );
};
