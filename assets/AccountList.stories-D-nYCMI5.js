"use client";import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./useId-HrPGyhy9.js";import{t as i}from"./Bell-Dy1Lu3cE.js";import{t as a}from"./useSettings-DhtL7S3O.js";import{t as o}from"./Handshake-ClUnDHAI.js";import{t as s}from"./Hashtag-DndtYdAm.js";import{n as c,t as l}from"./HeartFill-C1lqhZrU.js";import{n as u,r as d,t as f}from"./Paperplane-C3RPDSTC.js";import{t as p}from"./Plus-Cfutkgtq.js";import{t as m}from"./AccountListItemDetails-4s7AYF1N.js";import{n as h,t as g}from"./accountList-DcrPGsqG.js";import{t as _}from"./Switch-8Dpd7HT2.js";import{t as v}from"./Heading-CJB15i5Q.js";import{d as y,l as b,n as x,r as S,t as C}from"./SettingsModal.stories-NVgEGaww.js";import{t as w}from"./Toolbar-CmziBAS7.js";import{t as T}from"./PageBase-C-dLvRYT.js";import{a as E}from"./getAccount-NMMj7IgC.js";import{t as D}from"./useAccountsToolbar-B3xMUr3_.js";var O=e(t()),k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},A=(0,O.forwardRef)((e,t)=>{var{title:n,titleId:i}=e,a=k(e,[`title`,`titleId`]);let o=r();return o=n?i||`title-`+o:void 0,O.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,width:`1em`,height:`1em`,fill:`none`,viewBox:`0 0 24 24`,focusable:!1,role:`img`,ref:t,"aria-labelledby":o},a),n?O.createElement(`title`,{id:o},n):null,O.createElement(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M6 4.25a.75.75 0 0 0-.696.471L2.31 12.206a.74.74 0 0 0-.06.311V19c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-6.483a.75.75 0 0 0-.06-.311L18.696 4.72A.75.75 0 0 0 18 4.25zm13.892 7.5-2.4-6H6.508l-2.4 6h2.774a1.75 1.75 0 0 1 1.565.967l.947 1.895a.25.25 0 0 0 .224.138h4.764a.25.25 0 0 0 .224-.138l.947-1.895a1.75 1.75 0 0 1 1.565-.967zm-2.998 1.638a.25.25 0 0 1 .224-.138h3.132v5H3.75v-5h3.132a.25.25 0 0 1 .224.138l.947 1.895a1.75 1.75 0 0 0 1.565.967h4.764a1.75 1.75 0 0 0 1.565-.967z`,clipRule:`evenodd`}))}),j=({accountId:e,accounts:t,includeGroups:n=!1})=>{let{toolbar:r,groups:i,items:a,onToggleFavourite:o,onSettingsChange:s,expandedId:c,onToggle:l}=D({accountId:e,accounts:t,includeGroups:n});return{toolbar:r,items:a,groups:i,expandedId:c,onToggle:l,onToggleFavourite:o,onSettingsChange:s}},M=n(),N={title:`Account/AccountList`,component:h,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:g},P=({id:e,name:t,isCurrentEndUser:n,favourite:r=!1,onToggleFavourite:i,onModal:a})=>({id:e+`-menu`,items:[{id:`inbox`,groupId:`apps`,icon:A,title:`Gå til Innboks`},{id:`admin`,groupId:`apps`,icon:o,title:`Tilgangsstyring`},{id:`fav`,groupId:`context`,icon:r?l:c,title:r?`Fjern fra favoritter`:`Legg til favoritter`,onClick:()=>i?.(e)},{id:`new-group`,groupId:`new`,icon:p,title:`Ny gruppe`,onClick:()=>a?.(e,`groups`)}],groups:{apps:{title:t},context:{hidden:n},group:{hidden:n},new:{hidden:n}}}),F=({includeGroups:e=!1})=>{let{toolbar:t,items:n,groups:r,onToggle:i,onToggleFavourite:a}=j({accounts:E,includeGroups:e}),o=t?.search?.value?.toString().toLowerCase()||``,s=n?.map(e=>({...e,highlightWords:o?[o]:void 0,onClick:()=>i(e.id),onToggleFavourite:()=>a(e.id)}));return(0,M.jsx)(`div`,{style:{backgroundColor:`var(--ds-color-background-tinted)`,padding:`1em`},children:(0,M.jsx)(T,{children:n&&(0,M.jsx)(h,{groups:r,items:s})})})},I=()=>{let{items:e}=j({accounts:E}),t=e?.map(e=>({...e,groupId:`loading`,interactive:!1,loading:!0}))?.slice(0,3);return(0,M.jsx)(`div`,{style:{backgroundColor:`var(--ds-color-background-tinted)`,padding:`1em`},children:(0,M.jsx)(T,{children:(0,M.jsx)(h,{items:t,groups:{loading:{title:`Laster aktører ...`}}})})})},L=({includeGroups:e=!1,collapsible:t=!1,contextMenu:n=!1,variant:r=`default`,color:i,virtualized:a=!1})=>{let{toolbar:o,items:s,groups:c,expandedId:l,onToggle:u,onToggleFavourite:d,onSettingsChange:f}=j({accounts:E,includeGroups:e}),[p,m]=(0,O.useState)({}),g=(e,t)=>{m({id:e,type:t})},D=()=>m({}),k=p?.id,A=k&&s?.find(e=>e.id===p.id),N=e=>{let{type:t,checked:n,name:r,value:i}=e.target;t===`checkbox`?k&&f(k,{[r]:n}):k&&f(k,{[r]:i})},F=o?.search?.value?.toString().toLowerCase()||``,I=o?.results,L=o?.active?I?.groups:c,R=(o?.active?I?.items:s)?.map(e=>t&&l===e.id?{...e,collapsible:t,expanded:!0,as:`button`,onClick:()=>u(e.id),highlightWords:F?.split(` `),children:(0,M.jsx)(V,{...e,onToggleFavourite:d,onModal:g})}:{...e,as:`button`,variant:r,highlightWords:F?.split(` `),collapsible:t,onClick:()=>u(e.id),onToggleFavourite:()=>d(e.id),contextMenu:n&&P({...e,onModal:g})});return(0,M.jsx)(`div`,{style:{backgroundColor:r===`default`?`var(--ds-color-background-tinted)`:`var(--ds-color-background-default)`,padding:`1em`},color:i,children:(0,M.jsxs)(T,{children:[(0,M.jsx)(v,{size:`xl`,children:`Account list`}),(0,M.jsx)(w,{...o,children:(0,M.jsx)(_,{label:`Vis slettede`,size:`sm`})}),(0,M.jsx)(h,{virtualized:a,groups:L,items:R}),k&&p?.type===`phone`&&(0,M.jsx)(y,{open:!0,onClose:D}),k&&p?.type===`email`&&(0,M.jsx)(b,{open:!0,onClose:D}),k&&p?.type===`address`&&(0,M.jsx)(S,{open:!0,onClose:D}),A&&k&&p?.type===`groups`&&(0,M.jsx)(x,{open:!0,onClose:D,icon:A?.icon,title:A?.title,description:A?.description,items:s?.filter(e=>e.type===`group`)}),A&&k&&p?.type===`notifications`&&(0,M.jsx)(C,{open:!0,onClose:D,icon:A?.icon,title:A?.title,description:A?.description,phone:A?.phone,email:A?.email,smsAlerts:A?.smsAlerts,emailAlerts:A?.emailAlerts,onChange:N})]})})},R=()=>(0,M.jsx)(L,{color:`neutral`,variant:`subtle`}),z=()=>(0,M.jsx)(L,{collapsible:!0,contextMenu:!0}),B=()=>(0,M.jsx)(L,{includeGroups:!0,collapsible:!0,contextMenu:!0}),V=e=>{if(e.isCurrentEndUser)return(0,M.jsx)(G,{...e});switch(e.type){case`company`:return(0,M.jsx)(U,{...e});case`person`:return(0,M.jsx)(W,{...e});default:return(0,M.jsx)(W,{...e})}},H=({smsAlerts:e=!0,emailAlerts:t=!1,email:n=`dirk@digdir.no`,phone:r=`92020222`})=>{let i=e&&t?{label:`SMS og E-post`}:e?{label:`SMS`}:t?{label:`E-post`}:{variant:`text`,label:`Legg til`};return{id:`notifications`,title:e||t?`Varslinger er på`:`Ingen varslinger`,value:e&&t?[n,r].join(`, `):e?r:t&&n,badge:i}},U=({id:e,parentId:t,uniqueId:n=`XXXXXXXXX`,title:r,description:c,icon:l,onChange:u,onModal:d,...f})=>{let{items:p}=a({accounts:E}),h=H({id:e,...f}),g=[{id:`1`,icon:o,title:`Rolle og tilganger`,value:`Ektefelle`,badge:{label:`2 tilganger`},linkIcon:!0,as:`button`},{...h,id:`2`,icon:i,linkIcon:!0,onClick:()=>d?.(e,`notifications`),as:`button`},{id:`3`,icon:s,title:`Organisasjonsnummer`,value:`XXX YYY ZZZ`}],_=[{label:`Gå til innboks`},{label:`Tilgangsstyring`}],v=p?.find(e=>`id`in e&&e.id===t)||{id:e,icon:l,title:r,uniqueId:n},y=p?.filter(e=>`parentId`in e&&e.parentId===v.id)?.map(t=>({avatar:t?.icon,title:t?.title,description:`XXX XXX XXX`,selected:t.id===e,href:`#`}));return(0,M.jsx)(m,{color:`company`,organization:y&&[{avatar:v.icon,title:v.title,description:`YYY YYY YYY`,href:`#`,selected:v.id===e,items:y}],buttons:_,settings:g})},W=({id:e,uniqueId:t=`XXXXXX YYYYYY`,isCurrentEndUser:n,address:r,onModal:a,...c})=>{let l=H({id:e,...c});return(0,M.jsx)(m,{color:`person`,buttons:[{label:`Gå til innboks`},{label:`Tilgangsstyring`}],settings:[{id:`1`,icon:o,title:`Rolle og tilganger`,value:`Ektefelle`,badge:{label:`2 tilganger`},linkIcon:!0,as:`button`},{...l,id:`2`,icon:i,linkIcon:!0,onClick:()=>a?.(e,`notifications`),as:`button`},{id:`3`,icon:s,title:`Fødselsnummer`,value:t}]})},G=({id:e=`user`,phone:t=`99009900`,address:n=`Strømsveien 102, 0162 Oslo`,email:r=`dirk@digdir.no`,onModal:i})=>(0,M.jsx)(m,{color:`person`,buttons:[{label:`Gå til innboks`},{label:`Tilgangsstyring`}],settings:[{id:`1`,icon:u,title:`Mobiltelefon`,value:t,badge:{label:`Endre`,variant:`text`},onClick:()=>i?.(e,`phone`),linkIcon:!0,as:`button`},{id:`2`,icon:f,title:`E-postadresse`,value:r,badge:{label:`Endre e-post`,variant:`text`},onClick:()=>i?.(e,`email`),linkIcon:!0,as:`button`},{id:`3`,icon:d,title:`Adresse`,value:n,badge:{label:`Endre adresse`,variant:`text`},onClick:()=>i?.(e,`address`),linkIcon:!0,as:`button`}]}),K=()=>(0,M.jsx)(L,{virtualized:!0,includeGroups:!0,collapsible:!0,contextMenu:!0});F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`({
  includeGroups = false
}: UseAccountsProps) => {
  const {
    toolbar,
    items,
    groups,
    onToggle,
    onToggleFavourite
  } = useAccountList({
    accounts: defaultAccounts,
    includeGroups
  });
  const q = toolbar?.search?.value?.toString().toLowerCase() || '';
  const controlledItems = items?.map(item => {
    return {
      ...item,
      highlightWords: q ? [q] : undefined,
      onClick: () => onToggle(item.id),
      onToggleFavourite: () => onToggleFavourite(item.id)
    };
  });
  const style = {
    backgroundColor: 'var(--ds-color-background-tinted)',
    padding: '1em'
  };
  return <div style={style}>
      <PageBase>{items && <AccountList groups={groups} items={controlledItems as AccountListItemProps[]} />}</PageBase>
    </div>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useAccountList({
    accounts: defaultAccounts
  });
  const loadingItems = items?.map(item => ({
    ...item,
    groupId: 'loading',
    interactive: false,
    loading: true
  }))?.slice(0, 3);
  const loadingGroups = {
    loading: {
      title: 'Laster aktører ...'
    }
  };
  const style = {
    backgroundColor: 'var(--ds-color-background-tinted)',
    padding: '1em'
  };
  return <div style={style}>
      <PageBase>
        <AccountList items={loadingItems} groups={loadingGroups} />
      </PageBase>
    </div>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`({
  includeGroups = false,
  collapsible = false,
  contextMenu = false,
  variant = 'default',
  color,
  virtualized = false
}: ControlledProps) => {
  const {
    toolbar,
    items,
    groups,
    expandedId,
    onToggle,
    onToggleFavourite,
    onSettingsChange
  } = useAccountList({
    accounts: defaultAccounts,
    includeGroups
  });
  const [modal, setModal] = useState<ModalProps>({});
  const onModal = (id: string, type: string) => {
    setModal({
      id,
      type
    });
  };
  const onClose = () => setModal({});
  const modalId = modal?.id;
  const modalItem = modalId && items?.find(item => item.id === modal.id);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      type,
      checked,
      name,
      value
    } = e.target;
    if (type === 'checkbox') {
      modalId && onSettingsChange(modalId, {
        [name]: checked
      });
    } else {
      modalId && onSettingsChange(modalId, {
        [name]: value
      });
    }
  };
  const q = toolbar?.search?.value?.toString().toLowerCase() || '';
  const results = toolbar?.results;
  const listGroups = toolbar?.active ? results?.groups : groups;
  const listItems = toolbar?.active ? results?.items : items;
  const collapsibleItems = listItems?.map(item => {
    if (collapsible && expandedId === item.id) {
      return {
        ...item,
        collapsible,
        expanded: true,
        as: 'button',
        onClick: () => onToggle(item.id),
        highlightWords: q?.split(' '),
        children: <AccountDetails {...item as AccountListItemProps} onToggleFavourite={onToggleFavourite} onModal={onModal} />
      };
    }
    return {
      ...item,
      as: 'button',
      variant,
      highlightWords: q?.split(' '),
      collapsible,
      onClick: () => onToggle(item.id),
      onToggleFavourite: () => onToggleFavourite(item.id),
      contextMenu: contextMenu && getContextMenu({
        ...item,
        onModal
      })
    };
  });
  const style = {
    backgroundColor: variant === 'default' ? 'var(--ds-color-background-tinted)' : 'var(--ds-color-background-default)',
    padding: '1em'
  };
  return <div style={style} color={color}>
      <PageBase>
        <Heading size="xl">Account list</Heading>
        <Toolbar {...toolbar}>
          <Switch label="Vis slettede" size="sm" />
        </Toolbar>
        <AccountList virtualized={virtualized} groups={listGroups} items={collapsibleItems as AccountListItemProps[]} />
        {modalId && modal?.type === 'phone' && <PhoneSettingsModal open={true} onClose={onClose} />}
        {modalId && modal?.type === 'email' && <EmailSettingsModal open={true} onClose={onClose} />}
        {modalId && modal?.type === 'address' && <AddressSettingsModal open={true} onClose={onClose} />}
        {modalItem && modalId && modal?.type === 'groups' && <AccountGroupsModal open={true} onClose={onClose} icon={modalItem?.icon} title={modalItem?.title as string} description={modalItem?.description as string} items={items?.filter(item => item.type === 'group') as AccountListItemProps[]} />}
        {modalItem && modalId && modal?.type === 'notifications' && <AccountAlertsModal open={true} onClose={onClose} icon={modalItem?.icon} title={modalItem?.title as string} description={modalItem?.description as string} phone={modalItem?.phone} email={modalItem?.email} smsAlerts={modalItem?.smsAlerts} emailAlerts={modalItem?.emailAlerts} onChange={onChange} />}
      </PageBase>
    </div>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <Controlled color="neutral" variant="subtle" />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <Controlled collapsible={true} contextMenu={true} />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <Controlled includeGroups={true} collapsible={true} contextMenu={true} />;
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`({
  id,
  parentId,
  uniqueId = 'XXXXXXXXX',
  title,
  description,
  icon,
  onChange,
  onModal,
  ...props
}: AccountDetailsProps) => {
  const {
    items
  } = useSettings({
    accounts: defaultAccounts
  });
  const notificationSettings = getNotificationSettings({
    id,
    ...props
  });
  const settings = [{
    id: '1',
    icon: HandshakeIcon,
    title: 'Rolle og tilganger',
    value: 'Ektefelle',
    badge: {
      label: '2 tilganger'
    },
    linkIcon: true,
    as: 'button'
  }, {
    ...notificationSettings,
    id: '2',
    icon: BellIcon,
    linkIcon: true,
    onClick: () => onModal?.(id, 'notifications'),
    as: 'button'
  }, {
    id: '3',
    icon: HashtagIcon,
    title: 'Organisasjonsnummer',
    value: 'XXX YYY ZZZ'
  }];
  const buttons = [{
    label: 'Gå til innboks'
  }, {
    label: 'Tilgangsstyring'
  }];
  const parentAccount = items?.find(item => 'id' in item && item.id === parentId) || {
    id,
    icon,
    title,
    uniqueId
  };
  const childAcconts = items?.filter(item => 'parentId' in item && item.parentId === parentAccount.id)?.map(child => {
    return {
      avatar: child?.icon,
      title: child?.title,
      description: 'XXX XXX XXX',
      selected: child.id === id,
      href: '#'
    };
  });
  const organization = childAcconts && [{
    avatar: parentAccount.icon,
    title: parentAccount.title,
    description: 'YYY YYY YYY',
    href: '#',
    selected: parentAccount.id === id,
    items: childAcconts
  }];
  return <AccountListItemDetails color="company" organization={organization as AccountListItemDetailsProps['organization']} buttons={buttons as AccountListItemDetailsProps['buttons']} settings={settings as AccountListItemDetailsProps['settings']} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`({
  id,
  uniqueId = 'XXXXXX YYYYYY',
  isCurrentEndUser,
  address,
  onModal,
  ...props
}: AccountDetailsProps) => {
  const notificationSettings = getNotificationSettings({
    id,
    ...props
  });
  const settings = [{
    id: '1',
    icon: HandshakeIcon,
    title: 'Rolle og tilganger',
    value: 'Ektefelle',
    badge: {
      label: '2 tilganger'
    },
    linkIcon: true,
    as: 'button'
  }, {
    ...notificationSettings,
    id: '2',
    icon: BellIcon,
    linkIcon: true,
    onClick: () => onModal?.(id, 'notifications'),
    as: 'button'
  }, {
    id: '3',
    icon: HashtagIcon,
    title: 'Fødselsnummer',
    value: uniqueId
  }];
  const buttons = [{
    label: 'Gå til innboks'
  }, {
    label: 'Tilgangsstyring'
  }];
  return <AccountListItemDetails color="person" buttons={buttons as AccountListItemDetailsProps['buttons']} settings={settings as AccountListItemDetailsProps['settings']} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`({
  id = 'user',
  phone = '99009900',
  address = 'Strømsveien 102, 0162 Oslo',
  email = 'dirk@digdir.no',
  onModal
}: AccountDetailsProps) => {
  const settings = [{
    id: '1',
    icon: MobileIcon,
    title: 'Mobiltelefon',
    value: phone,
    badge: {
      label: 'Endre',
      variant: 'text'
    },
    onClick: () => onModal?.(id, 'phone'),
    linkIcon: true,
    as: 'button'
  }, {
    id: '2',
    icon: PaperplaneIcon,
    title: 'E-postadresse',
    value: email,
    badge: {
      label: 'Endre e-post',
      variant: 'text'
    },
    onClick: () => onModal?.(id, 'email'),
    linkIcon: true,
    as: 'button'
  }, {
    id: '3',
    icon: HouseHeartIcon,
    title: 'Adresse',
    value: address,
    badge: {
      label: 'Endre adresse',
      variant: 'text'
    },
    onClick: () => onModal?.(id, 'address'),
    linkIcon: true,
    as: 'button'
  }];
  const buttons = [{
    label: 'Gå til innboks'
  }, {
    label: 'Tilgangsstyring'
  }];
  return <AccountListItemDetails color="person" buttons={buttons as AccountListItemDetailsProps['buttons']} settings={settings as AccountListItemDetailsProps['settings']} />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <Controlled virtualized={true} includeGroups={true} collapsible={true} contextMenu={true} />;
}`,...K.parameters?.docs?.source}}};var q=[`Default`,`Loading`,`Controlled`,`ControlledTinted`,`Collapsible`,`CollapsibleWithGroups`,`CompanyDetails`,`PersonDetails`,`UserDetails`,`Virtualized`];export{R as a,W as c,q as d,N as f,L as i,G as l,B as n,F as o,U as r,I as s,z as t,K as u};