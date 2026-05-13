import{j as o}from"./iframe-DkQPO9ro.js";import{a as A}from"./accountMenu-igEcHo93.js";import{A as c}from"./AccountMenu-DFEyY2mN.js";import{u}from"./useAccountMenu-VhGFIA2t.js";import{d as i}from"./getAccount-CV-w7tgU.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-BFSdJUV0.js";import"./index-BrTdOUlk.js";import"./MagnifyingGlass-DLwDZfMD.js";import"./useId-CwF4wxTL.js";import"./XMark-5G2rqhrX.js";import"./FieldBase-BPqKon2e.js";import"./Typography-cgJeIGtL.js";import"./useHighlightedText-BlkM7iRt.js";import"./Skeleton-8DklmnzK.js";import"./Label-DNmTNqvr.js";import"./index-BCCMT4X2.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./Button-OKMeorO5.js";import"./button-Byovksc3.js";import"./MenuListItem-BEjobN4X.js";import"./MenuListHeading-DNdWEvDL.js";import"./MenuItem-BCrg9AvC.js";import"./ItemMedia-CHWY5IG3.js";import"./Avatar-DlrsSRUv.js";import"./AvatarGroup-DkXzBnSr.js";import"./Icon-Dao4TSf9.js";import"./Checkmark-JWLDNW8H.js";import"./Heading-Otl-Ib-S.js";import"./ItemControls-Czqw_jtP.js";import"./ChevronRight-Ddmldm4v.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BKpTfeOo.js";import"./index-DaA-2TAn.js";import"./InformationSquare-DS3QJ89x.js";import"./HeartFill-B2O-pGHr.js";const ot={title:"Account/AccountMenu",component:c,tags:["autodocs"],parameters:{},args:A},m=()=>{const{items:t,groups:e,search:s}=u({accounts:i?.map(n=>({...n,favourite:!1}))});return o.jsx(c,{search:s,groups:e,items:t})},p=()=>{const{items:t,groups:e,search:s}=u({accounts:i?.filter(n=>n.type!=="group")});return o.jsx(c,{search:s,groups:e,items:t})},d=()=>{const{items:t,groups:e,search:s}=u({accounts:i,includeGroups:!0});return o.jsx(c,{search:s,groups:e,items:t})},l=()=>{const{items:t,groups:e,search:s}=u({accounts:i,includeGroups:!0}),n=t?.filter(r=>r.id==="user"||r.id.startsWith("diaspora"))?.map(r=>({...r,controls:void 0})),a=n.find(r=>r.role==="company");return o.jsx(c,{search:s,groups:{...e,[a?.groupId||"company"]:{title:"Virksomheter"}},items:n})},f=()=>{const{items:t,groups:e,search:s}=u({accounts:i,includeGroups:!0}),n=t?.filter(r=>r.id==="user"||r.id.startsWith("diaspora")||r.id.startsWith("sogndal"))?.map(r=>({...r,controls:void 0})),a=n.find(r=>r.role==="company");return o.jsx(c,{search:s,groups:{...e,[a?.groupId||"company"]:{title:"Virksomheter"}},items:n})},g=()=>{const{items:t,groups:e,search:s}=u({accounts:i});return o.jsx(o.Fragment,{children:t&&o.jsx(c,{search:s,groups:e,items:t,virtualized:!0})})},h=()=>{const{items:t,groups:e}=u({accounts:i}),s=(n,a)=>!!n?.name?.toLowerCase().includes(a);return o.jsx(o.Fragment,{children:o.jsx(c,{search:{name:"s",placeholder:"cusoasd"},groups:e,filterAccount:s,items:t,virtualized:!0})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};const ct=["Default","WithFavourites","WithGroups","SingleCompany","TwoCompanies","VirtualizedMenu","CustomFilter"];export{h as CustomFilter,m as Default,l as SingleCompany,f as TwoCompanies,g as VirtualizedMenu,p as WithFavourites,d as WithGroups,ct as __namedExportsOrder,ot as default};
