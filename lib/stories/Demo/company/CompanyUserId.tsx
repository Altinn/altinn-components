import { useState } from "react"
import { useNavigation } from '..';
import { Heading, ListBase, PageBase, PageNav, PageHeader } from '../../../components';
import { AccessAreaItem, AccessPackageItem, companyAccessItems } from '..';

export const CompanyUserId = () => {
  const { breadcrumbs, article: user, parentId, sectionId, articleId, pageId, childId, setPageId } = useNavigation();
  const [accessIds, setAccessIds] = useState<string[]>(user?.access || [])
  const userAccessId = [parentId, sectionId, articleId].join("/")

  const onToggleAccess = (id: string) => {
    setAccessIds(prevState => {
      if (prevState?.includes(id)) {
        return prevState?.filter(item => item !== id)
      }
      return [
        ...prevState,
        id
      ]
    })
  }

  const accessItems = companyAccessItems?.map(item => {
    const areaId = userAccessId + "/" + item.id
    const expanded = childId === item.id

    return {
      ...item,
      expanded,
      as: "button",
      onClick: () => setPageId(areaId === pageId ? userAccessId : areaId),
      items: (item?.items ?? []).map(child => {
        const accessId = [item.id, child.id].join("/")
        const access = accessIds?.filter(item => item === accessId)

        return {
          ...child,
          access: access?.length,
          onClick: () => onToggleAccess(accessId)
        }
      })
    }
  });

  let totalCount = 0;

  const items = accessItems?.map(item => {
    const count = item?.items.length;
    const access = item?.items?.filter(item => item.access);
    const accessCount = access?.length

    totalCount = totalCount + accessCount

    return {
      ...item,
      accessCount,
      count,
    }
  })

  const hasAccess = items?.filter(item => item.accessCount)
  const giveAccess = items?.filter(item => !item.accessCount)?.map(item => {
    return {
      ...item,
      color: "neutral"
    }
  })


  const title = totalCount + ' tilganger';

  const tabs = {
    items: [
      {
        id: "tab1",
        title: "Tab 1",
        selected: true
      },
      {
        id: "tab2",
        title: "Tab 2"
      },
      {
        id: "tab3",
        title: "Tab 3"
      }
    ]
  }

  const pageHeaderProps = {
    avatar: {
      type: user?.type,
      name: user?.name,
    },
    title: user?.name,
    description: "Fødselsnr. xx.xx.xxx",
    tabs
  }

  return (
    <PageBase color="company" spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />
      <PageHeader {...pageHeaderProps} variant="card" size="lg" />

      <Heading size="lg">{title}</Heading>
      <ListBase>
        {hasAccess.map((item) => {
          return <AccessAreaItem key={item.id} {...item}>
            <ListBase>
              {item.items.map(child => <AccessPackageItem key={child.id} {...child} variant="access" />)}
            </ListBase>
          </AccessAreaItem>;
        })}
      </ListBase>

      <Heading size="lg">Gi flere tilganger</Heading>
      <ListBase>
        {giveAccess?.map((item) => {
          return <AccessAreaItem key={item.id} {...item}>
            <ListBase>
              {item?.items?.map(child => <AccessPackageItem key={child.id} {...child} variant="access" />)}
            </ListBase>
          </AccessAreaItem>;
        })}
      </ListBase>

    </PageBase>
  );
};
