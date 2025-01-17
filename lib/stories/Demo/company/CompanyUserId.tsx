import { useState } from "react" 
import { AccountHeader, useNavigation } from '..';
import { Heading, ListBase, PageBase, PageNav, PageHeader } from '../../../components';
import { AccessAreaItem, AccessPackageItem, companyAccessItems, categoryItems } from '..';

export const CompanyUserId = () => {
  const { breadcrumbs, article, parentId, sectionId, articleId, pageId, childId, setPageId } = useNavigation();
  const userAccessId = [parentId, sectionId, articleId].join("/")

  const user = article;

  const [accessIds, setAccessIds] = useState(user?.access || [])

  const onToggleAccess = (id) => {
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
      items: item?.items.map(child => {
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
        title: "Tab 1",
        selected: true
      },
      {
        title: "Tab 2"
      },
      {
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
        {hasAccess?.map((item) => {
          return <AccessAreaItem {...item}>
            <ListBase>
              {item?.items?.map(child => <AccessPackageItem {...child} variant="access" />)}
            </ListBase>
          </AccessAreaItem>;
        })}
      </ListBase>

      <Heading size="lg">Gi flere tilganger</Heading>
      <ListBase>
        {giveAccess?.map((item) => {
          return <AccessAreaItem {...item}>
            <ListBase>
              {item?.items?.map(child => <AccessPackageItem {...child} variant="access" />)}
            </ListBase>
          </AccessAreaItem>;
        })}
      </ListBase>

    </PageBase>
  );
};
