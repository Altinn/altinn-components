import{a7 as o}from"./iframe-B7zm1HIO.js";import{A as c}from"./AccountMenu-Hj1w0XqH.js";import{a as A}from"./accountMenu-igEcHo93.js";import{u}from"./useAccountMenu-D7fZnHGH.js";import{d as a}from"./getAccount-CV-w7tgU.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-DukYslSD.js";import"./MagnifyingGlass-CVQmLynz.js";import"./FieldBase-gSBe5vO6.js";import"./Typography-DnprxIFo.js";import"./useHighlightedText-DWzAFf8R.js";import"./Field-09k_Fgnw.js";import"./Label-DrdmFEDz.js";import"./Input-w1DANTSA.js";import"./useMenu-BJG43rHp.js";import"./MenuListItem-6z1MFl70.js";import"./MenuListDivider-Bbe3EvM4.js";import"./MenuListHeading-Y6BZZd_3.js";import"./MenuItem-B-gSoajH.js";import"./ItemMedia-DpKMg9GF.js";import"./Avatar-moSMPGHi.js";import"./AvatarGroup-BaLNA_5N.js";import"./Checkmark-BLhcN1Ai.js";import"./ItemLabel-CWIv-i-M.js";import"./Heading-C4G9hOYj.js";import"./ItemControls-Cwe9s8QR.js";import"./Badge-C4nIiofZ.js";import"./Tooltip-Cey7ITFK.js";import"./ChevronRight-BItcH0VL.js";import"./InformationSquare-ZkZeHusi.js";import"./HeartFill-C8fhVq4A.js";const U={title:"Account/AccountMenu",component:c,tags:["autodocs"],parameters:{},args:A},m=()=>{const{items:e,groups:r,search:s}=u({accounts:a?.map(n=>({...n,favourite:!1}))});return o.jsx(c,{search:s,groups:r,items:e})},p=()=>{const{items:e,groups:r,search:s}=u({accounts:a?.filter(n=>n.type!=="group")});return o.jsx(c,{search:s,groups:r,items:e})},d=()=>{const{items:e,groups:r,search:s}=u({accounts:a,includeGroups:!0});return o.jsx(c,{search:s,groups:r,items:e})},l=()=>{const{items:e,groups:r,search:s}=u({accounts:a,includeGroups:!0}),n=e?.filter(t=>t.id==="user"||t.id.startsWith("diaspora"))?.map(t=>({...t,controls:void 0})),i=n.find(t=>t.role==="company");return o.jsx(c,{search:s,groups:{...r,[i?.groupId||"company"]:{title:"Virksomheter"}},items:n})},f=()=>{const{items:e,groups:r,search:s}=u({accounts:a,includeGroups:!0}),n=e?.filter(t=>t.id==="user"||t.id.startsWith("diaspora")||t.id.startsWith("sogndal"))?.map(t=>({...t,controls:void 0})),i=n.find(t=>t.role==="company");return o.jsx(c,{search:s,groups:{...r,[i?.groupId||"company"]:{title:"Virksomheter"}},items:n})},g=()=>{const{items:e,groups:r,search:s}=u({accounts:a});return o.jsx(o.Fragment,{children:e&&o.jsx(c,{search:s,groups:r,items:e,virtualized:!0})})},h=()=>{const{items:e,groups:r}=u({accounts:a}),s=(n,i)=>!!n?.name?.toLowerCase().includes(i);return o.jsx(o.Fragment,{children:o.jsx(c,{search:{name:"s",placeholder:"cusoasd"},groups:r,filterAccount:s,items:e,virtualized:!0})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
