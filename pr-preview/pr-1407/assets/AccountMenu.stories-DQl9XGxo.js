var M=Object.defineProperty;var c=(e,t)=>M(e,"name",{value:t,configurable:!0});import{a5 as o}from"./iframe-CmcSEjvS.js";import{A as u}from"./AccountMenu-B1ePtIqN.js";import{a as y}from"./accountMenu-Bkkwt1bO.js";import{u as a}from"./useAccountMenu-CqdFGhFb.js";import{d as i}from"./getAccount-B6DocGW1.js";import"./preload-helper-Cc2_yIPf.js";import"./SearchField-DQeX1ZYV.js";import"./MagnifyingGlass-C2kDbxXn.js";import"./MenuListItem-BL-id_u-.js";import"./MenuListHeading-BKPqFrC5.js";import"./MenuItem-BJhn9r_O.js";import"./CheckboxUncheckedIcon-BBoJFSSq.js";import"./RadioUncheckedIcon-VgJlolIv.js";import"./ItemMedia-BefRyocx.js";import"./Avatar-e7KasoHp.js";import"./AvatarGroup-CK0XwNSh.js";import"./ItemLabel-s_xPF5R8.js";import"./Heading-vmMoflPs.js";import"./useHighlightedText-DJAL4JcK.js";import"./ItemControls-YGZP0Vjk.js";import"./Badge-DDzGMVSy.js";import"./Tooltip-BzKHjYiv.js";import"./ChevronRight-B5wtiA4y.js";import"./FieldBase-C-IkhlpM.js";import"./Typography-sASlV-kd.js";import"./Field-00i3_VLV.js";import"./Label-C2oW91xs.js";import"./Input-C0nOO2ZR.js";import"./useMenu-C4pen0si.js";import"./MenuListDivider-wZXMjqHS.js";import"./InformationSquare-6xY-3cyl.js";import"./HeartFill-vDdmUGil.js";const $={title:"Account/AccountMenu",component:u,tags:["autodocs"],parameters:{},args:y},p=c(()=>{const{items:e,groups:t,search:s}=a({accounts:i?.map(n=>({...n,favourite:!1}))});return o.jsx(u,{search:s,groups:t,items:e})},"Default"),d=c(()=>{const{items:e,groups:t,search:s}=a({accounts:i?.filter(n=>n.type!=="group")});return o.jsx(u,{search:s,groups:t,items:e})},"WithFavourites"),l=c(()=>{const{items:e,groups:t,search:s}=a({accounts:i,includeGroups:!0});return o.jsx(u,{search:s,groups:t,items:e})},"WithGroups"),f=c(()=>{const{items:e,groups:t,search:s}=a({accounts:i,includeGroups:!0}),n=e?.filter(r=>r.id==="user"||r.id.startsWith("diaspora"))?.map(r=>({...r,controls:void 0})),m=n.find(r=>r.role==="company");return o.jsx(u,{search:s,groups:{...t,[m?.groupId||"company"]:{title:"Virksomheter"}},items:n})},"SingleCompany"),g=c(()=>{const{items:e,groups:t,search:s}=a({accounts:i,includeGroups:!0}),n=e?.filter(r=>r.id==="user"||r.id.startsWith("diaspora")||r.id.startsWith("sogndal"))?.map(r=>({...r,controls:void 0})),m=n.find(r=>r.role==="company");return o.jsx(u,{search:s,groups:{...t,[m?.groupId||"company"]:{title:"Virksomheter"}},items:n})},"TwoCompanies"),h=c(()=>{const{items:e,groups:t,search:s}=a({accounts:i});return o.jsx(o.Fragment,{children:e&&o.jsx(u,{search:s,groups:t,items:e,virtualized:!0})})},"VirtualizedMenu"),A=c(()=>{const{items:e,groups:t}=a({accounts:i}),s=c((n,m)=>!!n?.name?.toLowerCase().includes(m),"filterAccount");return o.jsx(o.Fragment,{children:o.jsx(u,{search:{name:"s",placeholder:"cusoasd"},groups:t,filterAccount:s,items:e,virtualized:!0})})},"CustomFilter"),ee=["Default","WithFavourites","WithGroups","SingleCompany","TwoCompanies","VirtualizedMenu","CustomFilter"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups,
    search
  } = useAccountMenu({
    accounts: defaultAccounts?.filter(item => item.type !== 'group')
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
  return <AccountMenu search={search} groups={groups} items={items} />;
}`,...l.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups,
    search
  } = useAccountMenu({
    accounts: defaultAccounts
  });
  return <>{items && <AccountMenu search={search} groups={groups} items={items} virtualized={true} />}</>;
}`,...h.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}};export{A as CustomFilter,p as Default,f as SingleCompany,g as TwoCompanies,h as VirtualizedMenu,d as WithFavourites,l as WithGroups,ee as __namedExportsOrder,$ as default};
