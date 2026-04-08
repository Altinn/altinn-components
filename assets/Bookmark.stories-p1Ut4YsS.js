import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./Heading-CJB15i5Q.js";import{n,t as r}from"./useBookmarks-gW1R2TrA.js";import{t as i}from"./BookmarkModal-AfOEB1sy.js";import{t as a}from"./Layout-oRerHG_B.js";import{t as o}from"./Toolbar-CmziBAS7.js";import{t as s}from"./PageBase-C-dLvRYT.js";import{t as c}from"./useAccountMenu-DXrbjGkx.js";import{t as l}from"./useInboxLayout-BXrO6Xmb.js";import{t as u}from"./useProfileLayout-DFvgXfly.js";var d=e(),f={title:`Bookmarks/Demo`,tags:[`beta`],parameters:{layout:`fullscreen`}},p=()=>{let e=l({pageId:`bookmarks`}),{items:u,groups:f,currentAccount:p}=c({includeGroups:!0}),{expandedId:m,onClose:h,groups:g,items:_,search:v}=r({grouped:!1}),y=m&&_.find(e=>e.id===m);return(0,d.jsx)(a,{...e,children:(0,d.jsxs)(s,{children:[(0,d.jsx)(t,{size:`xl`,children:`Lagrede søk`}),(0,d.jsx)(o,{accountMenu:{label:p?.title,items:u,groups:f,searchable:!0},search:v}),(0,d.jsx)(n,{items:_,groups:g}),(0,d.jsx)(t,{size:`xs`,weight:`normal`,children:`Sist oppdatert 14. april 2025`}),m&&(0,d.jsx)(i,{...y,title:`Rediger lagret søk`,open:m!==``,onClose:h,buttons:[{label:`Lagre`,onClick:()=>h()},{label:`Slett`,variant:`outline`,onClick:()=>h()}]})]})})},m=()=>{let e=l({pageId:`bookmarks`}),{expandedId:c,onClose:u,items:f,search:p,groups:m}=r({grouped:!0}),h=c&&f.find(e=>e.id===c);return(0,d.jsx)(a,{...e,children:(0,d.jsxs)(s,{children:[(0,d.jsx)(t,{size:`xl`,children:`Lagrede søk`}),(0,d.jsx)(o,{search:p}),(0,d.jsx)(n,{items:f,groups:m}),(0,d.jsx)(t,{size:`xs`,weight:`normal`,children:`Sist oppdatert 14. april 2025`}),c&&(0,d.jsx)(i,{...h,title:`Rediger lagret søk`,open:c!==``,onClose:u,buttons:[{label:`Lagre`,onClick:()=>u()},{label:`Slett`,variant:`outline`,onClick:()=>u()}]})]})})},h=()=>{let e=u({pageId:`bookmarks`}),{expandedId:c,onClose:l,items:f,search:p,groups:m}=r({grouped:!0}),h=c&&f.find(e=>e.id===c);return(0,d.jsx)(a,{...e,children:(0,d.jsxs)(s,{children:[(0,d.jsx)(t,{size:`xl`,children:`Bokmerker`}),(0,d.jsx)(o,{search:p}),(0,d.jsx)(n,{items:f,groups:m}),(0,d.jsx)(t,{size:`xs`,weight:`normal`,children:`Sist oppdatert 14. april 2025`}),c&&(0,d.jsx)(i,{...h,title:`Rediger lagret søk`,open:c!==``,onClose:l,buttons:[{label:`Lagre`,onClick:()=>l()},{label:`Slett`,variant:`outline`,onClick:()=>l()}]})]})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    items: accountItems,
    groups: accountGroups,
    currentAccount
  } = useAccountMenu({
    includeGroups: true
  });
  const {
    expandedId,
    onClose,
    groups,
    items,
    search
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar accountMenu={{
        label: currentAccount?.title,
        items: accountItems,
        groups: accountGroups,
        searchable: true
      }} search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const layout = useProfileLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Bokmerker</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...h.parameters?.docs?.source}}};var g=[`InboxSingleAccount`,`InboxAllAccounts`,`BookmarkSettings`];export{h as BookmarkSettings,m as InboxAllAccounts,p as InboxSingleAccount,g as __namedExportsOrder,f as default};