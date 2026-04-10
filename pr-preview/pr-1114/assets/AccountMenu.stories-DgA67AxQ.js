import{j as o}from"./iframe-bdb8MxAl.js";import{a as A}from"./accountMenu-D55xwLeW.js";import{A as c}from"./AccountMenu-DtpSdk3c.js";import{u}from"./useAccountMenu-D9PFYEmS.js";import{d as i}from"./getAccount-nlIneB7c.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-Q9bTEqZH.js";import"./index-p3wA3m8m.js";import"./MagnifyingGlass-CUUYZIQ1.js";import"./useId-m2lwd_Ct.js";import"./XMark-ml8n1JcF.js";import"./FieldBase-DvRhg6xr.js";import"./Typography-BHyeW1q-.js";import"./useHighlightedText-BZip2xbp.js";import"./Skeleton-BMmeChMq.js";import"./Label-DBSC-MMD.js";import"./index-Bm_5QTlm.js";import"./use-merge-refs-Xyc_Uo3E.js";import"./lite-DaUVFjkg.js";import"./Input-ClF74fUz.js";import"./input-ATX54hdE.js";import"./Button-CmmCg_X2.js";import"./button-riuqcLff.js";import"./MenuListItem-CqjGn-MF.js";import"./MenuListHeading-DgV7uPAe.js";import"./MenuItem-CkSmk6Ko.js";import"./ItemMedia-Bzsndyr0.js";import"./Avatar-Di5f2hN1.js";import"./AvatarGroup-DeyVKu-1.js";import"./Icon-DDIx0qrc.js";import"./Checkmark-YAJv3o3m.js";import"./Heading-BV-bgYII.js";import"./ItemControls-CoqYqtfq.js";import"./ChevronRight-Cnln8IKV.js";import"./Badge-CZZ-T3gy.js";import"./useMenu-Dc6Nz6rI.js";import"./InformationSquare-nixk64HR.js";import"./useAccountsToolbar-DMW0Q_Nw.js";import"./HeartFill-BSyi9w23.js";const st={title:"Account/AccountMenu",component:c,tags:["autodocs"],parameters:{},args:A},m=()=>{const{items:t,groups:r,search:s}=u({accounts:i?.map(n=>({...n,favourite:!1}))});return o.jsx(c,{search:s,groups:r,items:t})},p=()=>{const{items:t,groups:r,search:s}=u({accounts:i?.filter(n=>n.type!=="group")});return o.jsx(c,{search:s,groups:r,items:t})},d=()=>{const{items:t,groups:r,search:s}=u({accounts:i,includeGroups:!0});return o.jsx(c,{search:s,groups:r,items:t})},l=()=>{const{items:t,groups:r,search:s}=u({accounts:i,includeGroups:!0}),n=t?.filter(e=>e.id==="user"||e.id.startsWith("diaspora"))?.map(e=>({...e,controls:void 0})),a=n.find(e=>e.role==="company");return o.jsx(c,{search:s,groups:{...r,[a?.groupId||"company"]:{title:"Virksomheter"}},items:n})},f=()=>{const{items:t,groups:r,search:s}=u({accounts:i,includeGroups:!0}),n=t?.filter(e=>e.id==="user"||e.id.startsWith("diaspora")||e.id.startsWith("sogndal"))?.map(e=>({...e,controls:void 0})),a=n.find(e=>e.role==="company");return o.jsx(c,{search:s,groups:{...r,[a?.groupId||"company"]:{title:"Virksomheter"}},items:n})},g=()=>{const{items:t,groups:r,search:s}=u({accounts:i});return o.jsx(o.Fragment,{children:t&&o.jsx(c,{search:s,groups:r,items:t,virtualized:!0})})},h=()=>{const{items:t,groups:r}=u({accounts:i}),s=(n,a)=>!!n?.name?.toLowerCase().includes(a);return o.jsx(o.Fragment,{children:o.jsx(c,{search:{name:"s",placeholder:"cusoasd"},groups:r,filterAccount:s,items:t,virtualized:!0})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};const nt=["Default","WithFavourites","WithGroups","SingleCompany","TwoCompanies","VirtualizedMenu","CustomFilter"];export{h as CustomFilter,m as Default,l as SingleCompany,f as TwoCompanies,g as VirtualizedMenu,p as WithFavourites,d as WithGroups,nt as __namedExportsOrder,st as default};
