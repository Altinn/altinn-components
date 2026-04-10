import{j as o}from"./iframe-DRbAvM8B.js";import{a as A}from"./accountMenu-D55xwLeW.js";import{A as c}from"./AccountMenu-DK6t1yuC.js";import{u}from"./useAccountMenu-DkneCUY7.js";import{d as i}from"./getAccount-nlIneB7c.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-Q4hKdicz.js";import"./index-Dpt5RUeZ.js";import"./MagnifyingGlass-Byb6dLEO.js";import"./useId-p3Uu13R2.js";import"./XMark-BeNK6Eym.js";import"./FieldBase-_93TCpK5.js";import"./Typography-Da6zx1kt.js";import"./useHighlightedText-DaUYVTi5.js";import"./Skeleton-C6w0Fovi.js";import"./Label-Zr8dB_9-.js";import"./index-Vs8aUpKw.js";import"./use-merge-refs-BRHMCtFk.js";import"./lite-DaUVFjkg.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./Button-DXRH0CtL.js";import"./button-DB6SpB_q.js";import"./MenuListItem-CLLuPs6D.js";import"./MenuListHeading-DYidFrGe.js";import"./MenuItem-GZbX5NAK.js";import"./ItemMedia-DLqoeXZM.js";import"./Avatar-DHw0Umd5.js";import"./AvatarGroup-BZTkgKpW.js";import"./Icon-BB196-C1.js";import"./Checkmark-BwvmX3W_.js";import"./Heading-aiLobBhZ.js";import"./ChevronRight-BIwAZUpi.js";import"./Badge-B0bOgxTq.js";import"./useMenu-BNYBCPCQ.js";import"./InformationSquare-Lr6VUhuh.js";import"./useAccountsToolbar-DsXxsXAF.js";import"./HeartFill-Wk84ovd5.js";const rt={title:"Account/AccountMenu",component:c,tags:["autodocs"],parameters:{},args:A},m=()=>{const{items:t,groups:r,search:s}=u({accounts:i?.map(n=>({...n,favourite:!1}))});return o.jsx(c,{search:s,groups:r,items:t})},p=()=>{const{items:t,groups:r,search:s}=u({accounts:i?.filter(n=>n.type!=="group")});return o.jsx(c,{search:s,groups:r,items:t})},d=()=>{const{items:t,groups:r,search:s}=u({accounts:i,includeGroups:!0});return o.jsx(c,{search:s,groups:r,items:t})},l=()=>{const{items:t,groups:r,search:s}=u({accounts:i,includeGroups:!0}),n=t?.filter(e=>e.id==="user"||e.id.startsWith("diaspora"))?.map(e=>({...e,controls:void 0})),a=n.find(e=>e.role==="company");return o.jsx(c,{search:s,groups:{...r,[a?.groupId||"company"]:{title:"Virksomheter"}},items:n})},f=()=>{const{items:t,groups:r,search:s}=u({accounts:i,includeGroups:!0}),n=t?.filter(e=>e.id==="user"||e.id.startsWith("diaspora")||e.id.startsWith("sogndal"))?.map(e=>({...e,controls:void 0})),a=n.find(e=>e.role==="company");return o.jsx(c,{search:s,groups:{...r,[a?.groupId||"company"]:{title:"Virksomheter"}},items:n})},g=()=>{const{items:t,groups:r,search:s}=u({accounts:i});return o.jsx(o.Fragment,{children:t&&o.jsx(c,{search:s,groups:r,items:t,virtualized:!0})})},h=()=>{const{items:t,groups:r}=u({accounts:i}),s=(n,a)=>!!n?.name?.toLowerCase().includes(a);return o.jsx(o.Fragment,{children:o.jsx(c,{search:{name:"s",placeholder:"cusoasd"},groups:r,filterAccount:s,items:t,virtualized:!0})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups,
    search
  } = useAccountMenu({
    accounts: defaultAccounts?.filter(item => item.type !== 'group')
  });
  return <AccountMenu search={search} groups={groups} items={items} />;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups,
    search
  } = useAccountMenu({
    accounts: defaultAccounts,
    includeGroups: true
  });
  return <AccountMenu search={search} groups={groups} items={items} />;
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups,
    search
  } = useAccountMenu({
    accounts: defaultAccounts
  });
  return <>{items && <AccountMenu search={search} groups={groups} items={items} virtualized={true} />}</>;
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};const st=["Default","WithFavourites","WithGroups","SingleCompany","TwoCompanies","VirtualizedMenu","CustomFilter"];export{h as CustomFilter,m as Default,l as SingleCompany,f as TwoCompanies,g as VirtualizedMenu,p as WithFavourites,d as WithGroups,st as __namedExportsOrder,rt as default};
