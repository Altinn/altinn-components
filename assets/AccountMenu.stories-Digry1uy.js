import{a7 as o}from"./iframe-C2dzRmjh.js";import{A as c}from"./AccountMenu-hJwrNsx7.js";import{a as A}from"./accountMenu-igEcHo93.js";import{u}from"./useAccountMenu-BxjGamUx.js";import{d as a}from"./getAccount-CV-w7tgU.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-uOvA63Zf.js";import"./MagnifyingGlass-D4s7mQ1G.js";import"./FieldBase-Dvh5lIYF.js";import"./Typography-DJs4mnKu.js";import"./useHighlightedText-DV4hS6Cx.js";import"./Field-B-1S4h3H.js";import"./Label-_M2OAFvX.js";import"./Input-DA-lDvIm.js";import"./useMenu-BFtnvp_l.js";import"./MenuListItem-4Fso0lef.js";import"./MenuListDivider-F2YAa9H7.js";import"./MenuListHeading-C9cVAuQ-.js";import"./MenuItem-BNIi9g5E.js";import"./ItemMedia-BDW8lmrL.js";import"./Avatar-JufbU_Wx.js";import"./AvatarGroup-Dco4ceHR.js";import"./Checkmark-BherDihq.js";import"./ItemLabel-dXZ3Y_Gg.js";import"./Heading-CfKKA19E.js";import"./ItemControls-dnLa86IT.js";import"./Badge-BtitS9Rx.js";import"./Tooltip-yHxi1dML.js";import"./ChevronRight-DtjNYNu3.js";import"./InformationSquare-D0pKd-n8.js";import"./HeartFill-CKxTLM5T.js";const U={title:"Account/AccountMenu",component:c,tags:["autodocs"],parameters:{},args:A},m=()=>{const{items:e,groups:r,search:s}=u({accounts:a?.map(n=>({...n,favourite:!1}))});return o.jsx(c,{search:s,groups:r,items:e})},p=()=>{const{items:e,groups:r,search:s}=u({accounts:a?.filter(n=>n.type!=="group")});return o.jsx(c,{search:s,groups:r,items:e})},d=()=>{const{items:e,groups:r,search:s}=u({accounts:a,includeGroups:!0});return o.jsx(c,{search:s,groups:r,items:e})},l=()=>{const{items:e,groups:r,search:s}=u({accounts:a,includeGroups:!0}),n=e?.filter(t=>t.id==="user"||t.id.startsWith("diaspora"))?.map(t=>({...t,controls:void 0})),i=n.find(t=>t.role==="company");return o.jsx(c,{search:s,groups:{...r,[i?.groupId||"company"]:{title:"Virksomheter"}},items:n})},f=()=>{const{items:e,groups:r,search:s}=u({accounts:a,includeGroups:!0}),n=e?.filter(t=>t.id==="user"||t.id.startsWith("diaspora")||t.id.startsWith("sogndal"))?.map(t=>({...t,controls:void 0})),i=n.find(t=>t.role==="company");return o.jsx(c,{search:s,groups:{...r,[i?.groupId||"company"]:{title:"Virksomheter"}},items:n})},g=()=>{const{items:e,groups:r,search:s}=u({accounts:a});return o.jsx(o.Fragment,{children:e&&o.jsx(c,{search:s,groups:r,items:e,virtualized:!0})})},h=()=>{const{items:e,groups:r}=u({accounts:a}),s=(n,i)=>!!n?.name?.toLowerCase().includes(i);return o.jsx(o.Fragment,{children:o.jsx(c,{search:{name:"s",placeholder:"cusoasd"},groups:r,filterAccount:s,items:e,virtualized:!0})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
