import{j as o}from"./iframe-DU0n7__8.js";import{a as A}from"./accountMenu-igEcHo93.js";import{A as c}from"./AccountMenu-CJHw-x1F.js";import{u}from"./useAccountMenu-B1Kjloif.js";import{d as i}from"./getAccount-CV-w7tgU.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-B4KuSSyF.js";import"./index-sAFX08uI.js";import"./MagnifyingGlass-COVfkIqf.js";import"./useId-DCXiBgwp.js";import"./XMark-DGVnrVrT.js";import"./FieldBase-BIV16XC5.js";import"./Typography-DOUoXZCv.js";import"./useHighlightedText-Wa_y882s.js";import"./Skeleton-etbnaSOo.js";import"./Label-DSFEyVbW.js";import"./tooltip-UENHGvJl.js";import"./Input-Cjh3ClWU.js";import"./Button-pXyw-iqn.js";import"./MenuListItem-C1_3DGyN.js";import"./MenuListHeading-iogtqFYg.js";import"./MenuItem--8QkhFJ4.js";import"./ItemMedia-yH6oBbwQ.js";import"./Avatar-Bsgd2iIp.js";import"./AvatarGroup-BpsuUsFp.js";import"./Icon-Dg7nJLrw.js";import"./Checkmark-CCpN8hs9.js";import"./Heading-BrrIdLRc.js";import"./ItemControls-BwQhe1K-.js";import"./ChevronRight-B4fDZY6k.js";import"./Badge-DWaei4kj.js";import"./Tooltip-DMnOwjPw.js";import"./useMenu-CrvHU43k.js";import"./index-Cyw62YTk.js";import"./InformationSquare-Bfq2NTGF.js";import"./HeartFill-CtZjD9gP.js";const tt={title:"Account/AccountMenu",component:c,tags:["autodocs"],parameters:{},args:A},m=()=>{const{items:t,groups:r,search:s}=u({accounts:i?.map(n=>({...n,favourite:!1}))});return o.jsx(c,{search:s,groups:r,items:t})},p=()=>{const{items:t,groups:r,search:s}=u({accounts:i?.filter(n=>n.type!=="group")});return o.jsx(c,{search:s,groups:r,items:t})},d=()=>{const{items:t,groups:r,search:s}=u({accounts:i,includeGroups:!0});return o.jsx(c,{search:s,groups:r,items:t})},l=()=>{const{items:t,groups:r,search:s}=u({accounts:i,includeGroups:!0}),n=t?.filter(e=>e.id==="user"||e.id.startsWith("diaspora"))?.map(e=>({...e,controls:void 0})),a=n.find(e=>e.role==="company");return o.jsx(c,{search:s,groups:{...r,[a?.groupId||"company"]:{title:"Virksomheter"}},items:n})},f=()=>{const{items:t,groups:r,search:s}=u({accounts:i,includeGroups:!0}),n=t?.filter(e=>e.id==="user"||e.id.startsWith("diaspora")||e.id.startsWith("sogndal"))?.map(e=>({...e,controls:void 0})),a=n.find(e=>e.role==="company");return o.jsx(c,{search:s,groups:{...r,[a?.groupId||"company"]:{title:"Virksomheter"}},items:n})},g=()=>{const{items:t,groups:r,search:s}=u({accounts:i});return o.jsx(o.Fragment,{children:t&&o.jsx(c,{search:s,groups:r,items:t,virtualized:!0})})},h=()=>{const{items:t,groups:r}=u({accounts:i}),s=(n,a)=>!!n?.name?.toLowerCase().includes(a);return o.jsx(o.Fragment,{children:o.jsx(c,{search:{name:"s",placeholder:"cusoasd"},groups:r,filterAccount:s,items:t,virtualized:!0})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};const et=["Default","WithFavourites","WithGroups","SingleCompany","TwoCompanies","VirtualizedMenu","CustomFilter"];export{h as CustomFilter,m as Default,l as SingleCompany,f as TwoCompanies,g as VirtualizedMenu,p as WithFavourites,d as WithGroups,et as __namedExportsOrder,tt as default};
