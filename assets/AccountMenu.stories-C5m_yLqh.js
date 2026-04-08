import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./AccountMenu-DybaOa4l.js";import{a as n}from"./getAccount-NMMj7IgC.js";import{t as r}from"./accountMenu-B8NaslXy.js";import{t as i}from"./useAccountMenu-DXrbjGkx.js";var a=e(),o={title:`Account/AccountMenu`,component:t,tags:[`autodocs`],parameters:{},args:r},s=()=>{let{items:e,groups:r,search:o}=i({accounts:n?.map(e=>({...e,favourite:!1}))});return(0,a.jsx)(t,{search:o,groups:r,items:e})},c=()=>{let{items:e,groups:r,search:o}=i({accounts:n?.filter(e=>e.type!==`group`)});return(0,a.jsx)(t,{search:o,groups:r,items:e})},l=()=>{let{items:e,groups:r,search:o}=i({accounts:n,includeGroups:!0});return(0,a.jsx)(t,{search:o,groups:r,items:e})},u=()=>{let{items:e,groups:r,search:o}=i({accounts:n,includeGroups:!0}),s=e?.filter(e=>e.id===`user`||e.id.startsWith(`diaspora`))?.map(e=>({...e,controls:void 0})),c=s.find(e=>e.role===`company`);return(0,a.jsx)(t,{search:o,groups:{...r,[c?.groupId||`company`]:{title:`Virksomheter`}},items:s})},d=()=>{let{items:e,groups:r,search:o}=i({accounts:n,includeGroups:!0}),s=e?.filter(e=>e.id===`user`||e.id.startsWith(`diaspora`)||e.id.startsWith(`sogndal`))?.map(e=>({...e,controls:void 0})),c=s.find(e=>e.role===`company`);return(0,a.jsx)(t,{search:o,groups:{...r,[c?.groupId||`company`]:{title:`Virksomheter`}},items:s})},f=()=>{let{items:e,groups:r,search:o}=i({accounts:n});return(0,a.jsx)(a.Fragment,{children:e&&(0,a.jsx)(t,{search:o,groups:r,items:e,virtualized:!0})})},p=()=>{let{items:e,groups:r}=i({accounts:n});return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t,{search:{name:`s`,placeholder:`cusoasd`},groups:r,filterAccount:(e,t)=>!!e?.name?.toLowerCase().includes(t),items:e,virtualized:!0})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups,
    search
  } = useAccountMenu({
    accounts: defaultAccounts?.map(item => {
      return {
        ...item,
        favourite: false
      };
    })
  });
  return <AccountMenu search={search} groups={groups} items={items} />;
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups,
    search
  } = useAccountMenu({
    accounts: defaultAccounts?.filter(item => item.type !== 'group')
  });
  return <AccountMenu search={search} groups={groups} items={items} />;
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups,
    search
  } = useAccountMenu({
    accounts: defaultAccounts,
    includeGroups: true
  });
  return <AccountMenu search={search} groups={groups} items={items} />;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups,
    search
  } = useAccountMenu({
    accounts: defaultAccounts,
    includeGroups: true
  });
  const filteredItems = items?.filter(item => item.id === 'user' || item.id.startsWith('diaspora'))?.map(item => {
    return {
      ...item,
      controls: undefined
    };
  });
  const firstCompany = filteredItems.find(item => item.role === 'company');
  return <AccountMenu search={search} groups={{
    ...groups,
    [firstCompany?.groupId || 'company']: {
      title: 'Virksomheter'
    }
  }} items={filteredItems} />;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups,
    search
  } = useAccountMenu({
    accounts: defaultAccounts,
    includeGroups: true
  });
  const filteredItems = items?.filter(item => item.id === 'user' || item.id.startsWith('diaspora') || item.id.startsWith('sogndal'))?.map(item => {
    return {
      ...item,
      controls: undefined
    };
  });
  const firstCompany = filteredItems.find(item => item.role === 'company');
  return <AccountMenu search={search} groups={{
    ...groups,
    [firstCompany?.groupId || 'company']: {
      title: 'Virksomheter'
    }
  }} items={filteredItems} />;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups,
    search
  } = useAccountMenu({
    accounts: defaultAccounts
  });
  return <>{items && <AccountMenu search={search} groups={groups} items={items} virtualized={true} />}</>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups
  } = useAccountMenu({
    accounts: defaultAccounts
  });
  const filterAccount = (item: AccountMenuItemProps, q: string) => {
    if (item?.name?.toLowerCase().includes(q)) {
      return true;
    }
    return false;
  };
  return <>
      <AccountMenu search={{
      name: 's',
      placeholder: 'cusoasd'
    }} groups={groups} filterAccount={filterAccount as AccountMenuProps['filterAccount']} items={items} virtualized={true} />
    </>;
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`WithFavourites`,`WithGroups`,`SingleCompany`,`TwoCompanies`,`VirtualizedMenu`,`CustomFilter`];export{p as CustomFilter,s as Default,u as SingleCompany,d as TwoCompanies,f as VirtualizedMenu,c as WithFavourites,l as WithGroups,m as __namedExportsOrder,o as default};