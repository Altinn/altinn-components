import{j as o}from"./iframe-Dip44woq.js";import{a as A}from"./accountMenu-D55xwLeW.js";import{A as c}from"./AccountMenu-BiUerS57.js";import{u}from"./useAccountMenu-CKpET3M9.js";import{d as i}from"./getAccount-nlIneB7c.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-B2BM1-WP.js";import"./index-B24kaf2B.js";import"./MagnifyingGlass-B4ceu0rd.js";import"./useId-CMLjH0Fx.js";import"./XMark-CynTM0oO.js";import"./FieldBase-BLO6-Mjz.js";import"./Typography-9n0VU0yu.js";import"./useHighlightedText-DVvgBsxZ.js";import"./Skeleton-CxN7sZWy.js";import"./Label-BJSes-CJ.js";import"./index-kI5T7Faz.js";import"./use-merge-refs-BdW2KKDT.js";import"./lite-DaUVFjkg.js";import"./Input-BEs0_VSa.js";import"./input-BsOq1nZd.js";import"./Button-afp2Zwog.js";import"./button-CZ5tfceY.js";import"./MenuListItem-miXGiz4v.js";import"./MenuListHeading-BQZIqP1w.js";import"./MenuItem-BJUggRUL.js";import"./ItemMedia-5XSAaYKs.js";import"./Avatar-kiiFl4Mz.js";import"./AvatarGroup-sgYryoRH.js";import"./Icon-B7B4bUSp.js";import"./Checkmark-DnUC-Av1.js";import"./Heading-BGLknJpX.js";import"./ItemControls-CIGgXmTN.js";import"./ChevronRight-DRGzZC3s.js";import"./Badge-Bm1FFy1R.js";import"./Tooltip-D3ALbI7V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BX85xV5m.js";import"./InformationSquare-Cyt3NFHk.js";import"./useAccountsToolbar-B4qT5Jhh.js";import"./HeartFill-BtcNLVtx.js";const ot={title:"Account/AccountMenu",component:c,tags:["autodocs"],parameters:{},args:A},m=()=>{const{items:t,groups:e,search:s}=u({accounts:i?.map(n=>({...n,favourite:!1}))});return o.jsx(c,{search:s,groups:e,items:t})},p=()=>{const{items:t,groups:e,search:s}=u({accounts:i?.filter(n=>n.type!=="group")});return o.jsx(c,{search:s,groups:e,items:t})},d=()=>{const{items:t,groups:e,search:s}=u({accounts:i,includeGroups:!0});return o.jsx(c,{search:s,groups:e,items:t})},l=()=>{const{items:t,groups:e,search:s}=u({accounts:i,includeGroups:!0}),n=t?.filter(r=>r.id==="user"||r.id.startsWith("diaspora"))?.map(r=>({...r,controls:void 0})),a=n.find(r=>r.role==="company");return o.jsx(c,{search:s,groups:{...e,[a?.groupId||"company"]:{title:"Virksomheter"}},items:n})},f=()=>{const{items:t,groups:e,search:s}=u({accounts:i,includeGroups:!0}),n=t?.filter(r=>r.id==="user"||r.id.startsWith("diaspora")||r.id.startsWith("sogndal"))?.map(r=>({...r,controls:void 0})),a=n.find(r=>r.role==="company");return o.jsx(c,{search:s,groups:{...e,[a?.groupId||"company"]:{title:"Virksomheter"}},items:n})},g=()=>{const{items:t,groups:e,search:s}=u({accounts:i});return o.jsx(o.Fragment,{children:t&&o.jsx(c,{search:s,groups:e,items:t,virtualized:!0})})},h=()=>{const{items:t,groups:e}=u({accounts:i}),s=(n,a)=>!!n?.name?.toLowerCase().includes(a);return o.jsx(o.Fragment,{children:o.jsx(c,{search:{name:"s",placeholder:"cusoasd"},groups:e,filterAccount:s,items:t,virtualized:!0})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
