var M=Object.defineProperty;var c=(e,t)=>M(e,"name",{value:t,configurable:!0});import{a7 as o}from"./iframe-uBWg0zsp.js";import{A as u}from"./AccountMenu-N2jjgUvV.js";import{a as y}from"./accountMenu-Bkkwt1bO.js";import{u as a}from"./useAccountMenu-BWodzjgl.js";import{d as i}from"./getAccount-B6DocGW1.js";import"./preload-helper-Cc2_yIPf.js";import"./SearchField-CiFTLXk1.js";import"./MagnifyingGlass-BtelB3DZ.js";import"./FieldBase-Bze69qIO.js";import"./Typography-nYxE8-3g.js";import"./useHighlightedText-SyZl2q2q.js";import"./Field-CRhxlWe8.js";import"./Label-BasS1jKP.js";import"./Input-BX-kD412.js";import"./useMenu-CXJ-cLkO.js";import"./MenuListItem-CF8uHASG.js";import"./MenuListDivider-Dqpo6I2q.js";import"./MenuListHeading-BKTLR-s3.js";import"./MenuItem-SLuK_1Or.js";import"./ItemMedia-DYHGe3r3.js";import"./Avatar-B2zjqVbH.js";import"./AvatarGroup-X4pMTDtc.js";import"./Checkmark-BMATBI43.js";import"./ItemLabel-BpKks5h0.js";import"./Heading-B2wyz-tz.js";import"./ItemControls-D7ku9ps1.js";import"./Badge-DNaQuN8i.js";import"./Tooltip-wSNkhPxH.js";import"./ChevronRight-Ci7fQup2.js";import"./InformationSquare-D-wVMUGu.js";import"./HeartFill-BqDYZsQS.js";const Z={title:"Account/AccountMenu",component:u,tags:["autodocs"],parameters:{},args:y},p=c(()=>{const{items:e,groups:t,search:s}=a({accounts:i?.map(n=>({...n,favourite:!1}))});return o.jsx(u,{search:s,groups:t,items:e})},"Default"),d=c(()=>{const{items:e,groups:t,search:s}=a({accounts:i?.filter(n=>n.type!=="group")});return o.jsx(u,{search:s,groups:t,items:e})},"WithFavourites"),l=c(()=>{const{items:e,groups:t,search:s}=a({accounts:i,includeGroups:!0});return o.jsx(u,{search:s,groups:t,items:e})},"WithGroups"),f=c(()=>{const{items:e,groups:t,search:s}=a({accounts:i,includeGroups:!0}),n=e?.filter(r=>r.id==="user"||r.id.startsWith("diaspora"))?.map(r=>({...r,controls:void 0})),m=n.find(r=>r.role==="company");return o.jsx(u,{search:s,groups:{...t,[m?.groupId||"company"]:{title:"Virksomheter"}},items:n})},"SingleCompany"),g=c(()=>{const{items:e,groups:t,search:s}=a({accounts:i,includeGroups:!0}),n=e?.filter(r=>r.id==="user"||r.id.startsWith("diaspora")||r.id.startsWith("sogndal"))?.map(r=>({...r,controls:void 0})),m=n.find(r=>r.role==="company");return o.jsx(u,{search:s,groups:{...t,[m?.groupId||"company"]:{title:"Virksomheter"}},items:n})},"TwoCompanies"),h=c(()=>{const{items:e,groups:t,search:s}=a({accounts:i});return o.jsx(o.Fragment,{children:e&&o.jsx(u,{search:s,groups:t,items:e,virtualized:!0})})},"VirtualizedMenu"),A=c(()=>{const{items:e,groups:t}=a({accounts:i}),s=c((n,m)=>!!n?.name?.toLowerCase().includes(m),"filterAccount");return o.jsx(o.Fragment,{children:o.jsx(u,{search:{name:"s",placeholder:"cusoasd"},groups:t,filterAccount:s,items:e,virtualized:!0})})},"CustomFilter");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}};const $=["Default","WithFavourites","WithGroups","SingleCompany","TwoCompanies","VirtualizedMenu","CustomFilter"];export{A as CustomFilter,p as Default,f as SingleCompany,g as TwoCompanies,h as VirtualizedMenu,d as WithFavourites,l as WithGroups,$ as __namedExportsOrder,Z as default};
