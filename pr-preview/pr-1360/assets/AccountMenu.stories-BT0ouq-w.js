import{a7 as o}from"./iframe-C9sF4CIH.js";import{A as c}from"./AccountMenu-KMM-WYh2.js";import{a as A}from"./accountMenu-igEcHo93.js";import{u}from"./useAccountMenu-wzAJjP43.js";import{d as a}from"./getAccount-CV-w7tgU.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-C_Ji_EMe.js";import"./MagnifyingGlass-BaBs8vmN.js";import"./FieldBase-BZH1Lr7P.js";import"./Typography-BQsARAdQ.js";import"./useHighlightedText-kH4xSFNx.js";import"./Field-D40vPUUg.js";import"./Label-BQs4ZavD.js";import"./Input-DZS0C5P8.js";import"./useMenu-BFGedA5y.js";import"./MenuListItem-C9rtWM2n.js";import"./MenuListDivider-D0Dk3XM8.js";import"./MenuListHeading-CQYtGjFy.js";import"./MenuItem-DU1kbbfo.js";import"./ItemMedia-Ck6acBMI.js";import"./Avatar-DJ-M8TRd.js";import"./AvatarGroup-SMrP0suq.js";import"./Checkmark-CL2jgLCm.js";import"./ItemLabel-Cb55IGYj.js";import"./Heading-CN6nglwQ.js";import"./ItemControls-BU12ltKZ.js";import"./Badge-dpJAfWyX.js";import"./Tooltip-hEd8MeM6.js";import"./ChevronRight-BzqVHEpk.js";import"./InformationSquare-BmRwhtkQ.js";import"./HeartFill-Cb3oVF8z.js";const U={title:"Account/AccountMenu",component:c,tags:["autodocs"],parameters:{},args:A},m=()=>{const{items:e,groups:r,search:s}=u({accounts:a?.map(n=>({...n,favourite:!1}))});return o.jsx(c,{search:s,groups:r,items:e})},p=()=>{const{items:e,groups:r,search:s}=u({accounts:a?.filter(n=>n.type!=="group")});return o.jsx(c,{search:s,groups:r,items:e})},d=()=>{const{items:e,groups:r,search:s}=u({accounts:a,includeGroups:!0});return o.jsx(c,{search:s,groups:r,items:e})},l=()=>{const{items:e,groups:r,search:s}=u({accounts:a,includeGroups:!0}),n=e?.filter(t=>t.id==="user"||t.id.startsWith("diaspora"))?.map(t=>({...t,controls:void 0})),i=n.find(t=>t.role==="company");return o.jsx(c,{search:s,groups:{...r,[i?.groupId||"company"]:{title:"Virksomheter"}},items:n})},f=()=>{const{items:e,groups:r,search:s}=u({accounts:a,includeGroups:!0}),n=e?.filter(t=>t.id==="user"||t.id.startsWith("diaspora")||t.id.startsWith("sogndal"))?.map(t=>({...t,controls:void 0})),i=n.find(t=>t.role==="company");return o.jsx(c,{search:s,groups:{...r,[i?.groupId||"company"]:{title:"Virksomheter"}},items:n})},g=()=>{const{items:e,groups:r,search:s}=u({accounts:a});return o.jsx(o.Fragment,{children:e&&o.jsx(c,{search:s,groups:r,items:e,virtualized:!0})})},h=()=>{const{items:e,groups:r}=u({accounts:a}),s=(n,i)=>!!n?.name?.toLowerCase().includes(i);return o.jsx(o.Fragment,{children:o.jsx(c,{search:{name:"s",placeholder:"cusoasd"},groups:r,filterAccount:s,items:e,virtualized:!0})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};const X=["Default","WithFavourites","WithGroups","SingleCompany","TwoCompanies","VirtualizedMenu","CustomFilter"];export{h as CustomFilter,m as Default,l as SingleCompany,f as TwoCompanies,g as VirtualizedMenu,p as WithFavourites,d as WithGroups,X as __namedExportsOrder,U as default};
