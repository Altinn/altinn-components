"use client";import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./useId-HrPGyhy9.js";import{t as i}from"./Bell-Dy1Lu3cE.js";import{t as a}from"./useSettings-DhtL7S3O.js";import{n as o,t as s}from"./useAdmin-DJliUQJ1.js";import{t as c}from"./Globe-D3cOb7IL.js";import{t as l}from"./Handshake-ClUnDHAI.js";import{n as u,r as d}from"./Paperplane-C3RPDSTC.js";import{t as f}from"./Heading-CJB15i5Q.js";import{c as p,d as m,i as h,l as g,o as _,r as v,t as y}from"./SettingsModal.stories-NVgEGaww.js";import{t as b}from"./Toolbar-CmziBAS7.js";import{t as x}from"./PageBase-C-dLvRYT.js";import{a as S}from"./getAccount-NMMj7IgC.js";var C=e(t()),w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},T=(0,C.forwardRef)((e,t)=>{var{title:n,titleId:i}=e,a=w(e,[`title`,`titleId`]);let o=r();return o=n?i||`title-`+o:void 0,C.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,width:`1em`,height:`1em`,fill:`none`,viewBox:`0 0 24 24`,focusable:!1,role:`img`,ref:t,"aria-labelledby":o},a),n?C.createElement(`title`,{id:o},n):null,C.createElement(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M12 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75M4.752 4.752a.75.75 0 0 1 1.061 0l1.414 1.414a.75.75 0 0 1-1.06 1.061L4.752 5.813a.75.75 0 0 1 0-1.06M1.75 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m17.75-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm-2.727 5.523a.75.75 0 0 1 1.06 0l1.415 1.414a.75.75 0 0 1-1.06 1.06l-1.415-1.413a.75.75 0 0 1 0-1.061M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m7.248-.937a.75.75 0 0 0-1.061-1.06l-1.414 1.413a.75.75 0 1 0 1.06 1.061zM12 18.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-4.773-.916a.75.75 0 0 0-1.06-1.061l-1.415 1.414a.75.75 0 0 0 1.06 1.06z`,clipRule:`evenodd`}))}),E=({accountMenu:e})=>{let[t,n]=(0,C.useState)(``),r=e=>{n(e.target.value)};return e?{accountMenu:{...e,variant:`solid`,items:e?.items?.filter(e=>e.id!==`user`),virtualized:!0},search:{name:`search`,placeholder:`Søk i innstillinger`,value:t,onChange:r}}:{search:{name:`search`,placeholder:`Søk i innstillinger`,value:t,onChange:r}}},D=n(),O={title:`Settings/SettingsList`,component:o,tags:[`beta`,`autodocs`],parameters:{},args:{items:[{id:`1`,icon:l,title:`Din rolle`,value:`Daglig leder`,badge:{label:`4 rettigheter`},linkIcon:!0},{id:`2`,icon:u,title:`Mobiltelefon`,value:`+47 900 00 000`,linkIcon:!0},{id:`3`,icon:d,title:`Adresse`,badge:{variant:`text`,label:`Legg til`},linkIcon:!0},{id:`4`,icon:T,title:`Modus`,value:`Auto`,badge:{variant:`text`,label:`Endre`},linkIcon:!0},{id:`5`,icon:i,title:`Varslinger`,value:`Alle`,badge:{label:`SMS og e-post`},linkIcon:!0},{id:`6`,icon:c,title:`Språk`,badge:{variant:`text`,label:`Legg til`},linkIcon:!0}]}},k={args:{}},A={args:{groups:{1:{title:`Gruppe 1`},2:{title:`Gruppe 2`}},items:[{id:`1`,groupId:`1`,icon:l,title:`Din rolle`,value:`Daglig leder`,badge:{label:`4 rettigheter`},linkIcon:!0},{id:`2`,groupId:`1`,icon:u,title:`Mobiltelefon`,value:`+47 900 00 000`,linkIcon:!0},{id:`3`,groupId:`1`,icon:d,title:`Adresse`,badge:{variant:`text`,label:`Legg til`},linkIcon:!0},{id:`4`,groupId:`2`,icon:T,title:`Modus`,value:`Auto`,badge:{variant:`text`,label:`Endre`},linkIcon:!0},{id:`5`,groupId:`2`,icon:i,title:`Varslinger`,value:`Alle`,badge:{label:`SMS og e-post`},linkIcon:!0},{id:`6`,groupId:`2`,icon:c,title:`Språk`,badge:{variant:`text`,label:`Legg til`},linkIcon:!0}]}},j={args:{groups:{1:{title:`Virksomheter`}},items:[{id:`1`,icon:{name:`Bergen Bar & Cafe`,type:`company`},title:`Bergen Bar & Cafe`,value:`Daglig leder`,badge:{label:`4 rettigheter`},linkIcon:!0,groupId:`1`},{id:`2`,icon:{name:`Bergen Bar & Cafe`,type:`company`,variant:`outline`},title:`Bergen Bar & Cafe`,value:`Ingen spesiell rolle`,badge:{label:`4 rettigheter`},linkIcon:!0,groupId:`1`},{id:`3`,icon:{name:`Tre kokker og en pizza`,type:`company`},title:`Tre kokker og en pizza`,value:`Daglig leder`,badge:{label:`4 rettigheter`},linkIcon:!0,groupId:`3`},{id:`4`,icon:{name:`Tre kokker og en pizza`,type:`company`,variant:`outline`},title:`Tre kokker og en pizza`,value:`Ingen spesiell rolle`,badge:{label:`4 rettigheter`},linkIcon:!0,groupId:`3`},{id:`5`,icon:{name:`Stavangerkameratene`,type:`company`},title:`Stavangerkameratene`,value:`Styremedlem`,badge:{label:`1 rettigheter`},linkIcon:!0,groupId:`2`},{id:`6`,icon:{name:`Børs cafe`,type:`company`,variant:`outline`},title:`Børs cafe`,value:`Daglig leder`,badge:{label:`4 rettigheter`},linkIcon:!0,groupId:`2`},{id:`7`,icon:{name:`Stavanger Brekk`,type:`company`,variant:`outline`},title:`Stavanger Børs`,value:`Daglig leder`,badge:{label:`12 rettigheter`},linkIcon:!0,groupId:`2`},{id:`8`,icon:{name:`Utestedet Stavanger AS`,type:`company`,variant:`outline`},title:`Utestedet Stavanger AS`,value:`Ingen spesiell rolle`,badge:{label:`2 rettigheter`},linkIcon:!0,groupId:`2`}]}},M={args:{groups:{search:{title:`1 treff`}},items:[{id:`1`,icon:l,title:`Din rolle`,highlightWords:[`rolle`],value:`Daglig leder`,badge:{label:`4 rettigheter`},linkIcon:!0,groupId:`search`},{id:`2`,icon:{name:`Bergen Bar & Cafe`,type:`company`},title:`Bergen Bar & Cafe`,highlightWords:[`rolle`],value:`Ingen roller`,badge:{label:`1 rettighet`},linkIcon:!0,groupId:`search`},{id:`3`,icon:{name:`Bergen Barnehage`,type:`company`},title:`Bergen Barnehage`,highlightWords:[`rolle`],value:`Ingen roller`,badge:{label:`2 rettigheter`},linkIcon:!0,groupId:`search`}]}},N=({id:e,icon:t,groupId:n,open:r,onClose:i,...a})=>{if(e?.startsWith(`accountAlerts`))return(0,D.jsx)(y,{...a,icon:t,open:r,onClose:i});switch(n){case`profile`:return(0,D.jsx)(p,{...a,open:r,onClose:i});case`alerts`:return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(p,{...a,readOnly:!0,open:r&&e===`smsAlerts`,onClose:i}),(0,D.jsx)(p,{...a,readOnly:!0,open:r&&e===`emailAlerts`,onClose:i})]});case`contact`:return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(m,{...a,open:r&&e===`phone`,onClose:i}),(0,D.jsx)(g,{...a,open:r&&e===`email`,onClose:i}),(0,D.jsx)(v,{...a,open:r&&e===`address`,onClose:i})]});case`companyInfo`:return(0,D.jsx)(_,{...a,open:r,onClose:i});case`companyAlerts`:return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(h,{...a,type:`phone`,open:r&&e===`companyPhone`,onClose:i}),(0,D.jsx)(h,{...a,type:`email`,open:r&&e===`companyEmail`,onClose:i})]});default:return}},P=({query:e={},groups:t,includeGroups:n,excludeGroups:r})=>{let{onSettingsChange:i,results:s,...c}=a({accounts:S,query:e,includeGroups:n,excludeGroups:r}),[l,u]=(0,C.useState)(``),d=()=>{u(``)},f=c?.items.map(e=>{let{id:t,variant:n}=e;return!n||n===`default`?{...e,description:void 0,as:`button`,onClick:()=>t&&u(t)}:e}),p=l&&f.find(e=>e.id===l)||{title:``,description:``},m={...c?.groups,...t};return(0,D.jsxs)(D.Fragment,{children:[e?.q?(0,D.jsx)(o,{groups:s?.groups,items:s?.items}):(0,D.jsx)(o,{groups:m,items:f}),(0,D.jsx)(N,{...p,title:p?.title,description:p?.description,open:!!l,onClose:d})]})},F=()=>{let e=E({});return(0,D.jsxs)(x,{children:[(0,D.jsx)(f,{size:`xl`,children:`Alle innstillinger`}),(0,D.jsx)(b,{...e}),(0,D.jsx)(P,{query:{q:e?.search?.value}})]})},I=()=>{let e=E({});return(0,D.jsxs)(x,{children:[(0,D.jsx)(f,{size:`xl`,children:`Mine varslinger`}),(0,D.jsx)(b,{...e}),(0,D.jsx)(P,{query:{q:e?.search?.value},includeGroups:[`alerts`,`profile`,`person`,`company`]})]})},L=()=>{let e=E({});return(0,D.jsxs)(x,{children:[(0,D.jsx)(f,{size:`xl`,children:`Innstillinger`}),(0,D.jsx)(b,{...e}),(0,D.jsx)(P,{query:{q:e?.search?.value},includeGroups:[`contact`,`accountSettings`,`other`]})]})},R=()=>{let{accountMenu:e,currentAccount:t}=s({defaultAccountId:`person`}),n=E({accountMenu:e});return(0,D.jsxs)(x,{color:`person`,children:[(0,D.jsxs)(f,{size:`xl`,children:[`Innstillinger for `,t?.name]}),(0,D.jsx)(b,{...n}),(0,D.jsx)(P,{query:{q:n?.search?.value},includeGroups:[`contact`],groups:{contact:{title:`Kontaktinformasjon`}}})]})},z=()=>{let{accountMenu:e,currentAccount:t}=s({defaultAccountId:`diaspora`}),n=E({accountMenu:e});return(0,D.jsxs)(x,{color:`company`,children:[(0,D.jsxs)(f,{size:`xl`,children:[`Innstillinger for `,t?.name]}),(0,D.jsx)(b,{...n}),(0,D.jsx)(P,{includeGroups:[`companyAlerts`,`companyInfo`],query:{q:n?.search?.value},groups:{companyAlerts:{title:`Varslingsadresser for virksomheten`},companyInfo:{title:`Opplysninger om virksomheten`}}})]})},B=()=>{let{currentAccount:e}=s({defaultAccountId:`diaspora`});return e?.type===`person`?(0,D.jsx)(R,{}):(0,D.jsx)(z,{})},V=()=>(0,D.jsx)(P,{includeGroups:[`contact`],groups:{contact:{title:``}}});k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    groups: {
      1: {
        title: 'Gruppe 1'
      },
      2: {
        title: 'Gruppe 2'
      }
    },
    items: [{
      id: '1',
      groupId: '1',
      icon: HandshakeIcon,
      title: 'Din rolle',
      value: 'Daglig leder',
      badge: {
        label: '4 rettigheter'
      },
      linkIcon: true
    }, {
      id: '2',
      groupId: '1',
      icon: MobileIcon,
      title: 'Mobiltelefon',
      value: '+47 900 00 000',
      linkIcon: true
    }, {
      id: '3',
      groupId: '1',
      icon: HouseHeartIcon,
      title: 'Adresse',
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      linkIcon: true
    }, {
      id: '4',
      groupId: '2',
      icon: SunIcon,
      title: 'Modus',
      value: 'Auto',
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      linkIcon: true
    }, {
      id: '5',
      groupId: '2',
      icon: BellIcon,
      title: 'Varslinger',
      value: 'Alle',
      badge: {
        label: 'SMS og e-post'
      },
      linkIcon: true
    }, {
      id: '6',
      groupId: '2',
      icon: GlobeIcon,
      title: 'Språk',
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      linkIcon: true
    }]
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    groups: {
      1: {
        title: 'Virksomheter'
      }
    },
    items: [{
      id: '1',
      icon: {
        name: 'Bergen Bar & Cafe',
        type: 'company'
      },
      title: 'Bergen Bar & Cafe',
      value: 'Daglig leder',
      badge: {
        label: '4 rettigheter'
      },
      linkIcon: true,
      groupId: '1'
    }, {
      id: '2',
      icon: {
        name: 'Bergen Bar & Cafe',
        type: 'company',
        variant: 'outline'
      },
      title: 'Bergen Bar & Cafe',
      value: 'Ingen spesiell rolle',
      badge: {
        label: '4 rettigheter'
      },
      linkIcon: true,
      groupId: '1'
    }, {
      id: '3',
      icon: {
        name: 'Tre kokker og en pizza',
        type: 'company'
      },
      title: 'Tre kokker og en pizza',
      value: 'Daglig leder',
      badge: {
        label: '4 rettigheter'
      },
      linkIcon: true,
      groupId: '3'
    }, {
      id: '4',
      icon: {
        name: 'Tre kokker og en pizza',
        type: 'company',
        variant: 'outline'
      },
      title: 'Tre kokker og en pizza',
      value: 'Ingen spesiell rolle',
      badge: {
        label: '4 rettigheter'
      },
      linkIcon: true,
      groupId: '3'
    }, {
      id: '5',
      icon: {
        name: 'Stavangerkameratene',
        type: 'company'
      },
      title: 'Stavangerkameratene',
      value: 'Styremedlem',
      badge: {
        label: '1 rettigheter'
      },
      linkIcon: true,
      groupId: '2'
    }, {
      id: '6',
      icon: {
        name: 'Børs cafe',
        type: 'company',
        variant: 'outline'
      },
      title: 'Børs cafe',
      value: 'Daglig leder',
      badge: {
        label: '4 rettigheter'
      },
      linkIcon: true,
      groupId: '2'
    }, {
      id: '7',
      icon: {
        name: 'Stavanger Brekk',
        type: 'company',
        variant: 'outline'
      },
      title: 'Stavanger Børs',
      value: 'Daglig leder',
      badge: {
        label: '12 rettigheter'
      },
      linkIcon: true,
      groupId: '2'
    }, {
      id: '8',
      icon: {
        name: 'Utestedet Stavanger AS',
        type: 'company',
        variant: 'outline'
      },
      title: 'Utestedet Stavanger AS',
      value: 'Ingen spesiell rolle',
      badge: {
        label: '2 rettigheter'
      },
      linkIcon: true,
      groupId: '2'
    }]
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    groups: {
      search: {
        title: '1 treff'
      }
    },
    items: [{
      id: '1',
      icon: HandshakeIcon,
      title: 'Din rolle',
      highlightWords: ['rolle'],
      value: 'Daglig leder',
      badge: {
        label: '4 rettigheter'
      },
      linkIcon: true,
      groupId: 'search'
    }, {
      id: '2',
      icon: {
        name: 'Bergen Bar & Cafe',
        type: 'company'
      },
      title: 'Bergen Bar & Cafe',
      highlightWords: ['rolle'],
      value: 'Ingen roller',
      badge: {
        label: '1 rettighet'
      },
      linkIcon: true,
      groupId: 'search'
    }, {
      id: '3',
      icon: {
        name: 'Bergen Barnehage',
        type: 'company'
      },
      title: 'Bergen Barnehage',
      highlightWords: ['rolle'],
      value: 'Ingen roller',
      badge: {
        label: '2 rettigheter'
      },
      linkIcon: true,
      groupId: 'search'
    }]
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`({
  query = {},
  groups,
  includeGroups,
  excludeGroups
}: UseSettingsProps) => {
  const {
    onSettingsChange,
    results,
    ...settings
  } = useSettings({
    accounts: defaultAccounts,
    query,
    includeGroups,
    excludeGroups
  });
  const [id, setId] = useState<string>('');
  const onClose = () => {
    setId('');
  };
  const items = settings?.items.map(item => {
    const {
      id,
      variant
    } = item;
    if (!variant || variant === 'default') {
      return {
        ...item,
        description: undefined,
        as: 'button',
        onClick: () => id && setId(id)
      };
    }
    return item;
  });
  const item = id && items.find(item => item.id === id) || {
    title: '',
    description: ''
  };
  const allGroups = {
    ...settings?.groups,
    ...groups
  };
  return <>
      {query?.q ? <SettingsList groups={results?.groups} items={results?.items as SettingsListProps['items']} /> : <SettingsList groups={allGroups} items={items as SettingsListProps['items']} />}
      <ControlledSettingsModal {...item as ControlledSettingsModalProps} title={item?.title as string} description={item?.description as string} open={!!id} onClose={onClose} />
    </>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const toolbar = useSettingsToolbar({});
  return <PageBase>
      <Heading size="xl">Alle innstillinger</Heading>
      <Toolbar {...toolbar} />
      <ControlledSettings query={{
      q: toolbar?.search?.value
    }} />
    </PageBase>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const toolbar = useSettingsToolbar({});
  return <PageBase>
      <Heading size="xl">Mine varslinger</Heading>
      <Toolbar {...toolbar} />
      <ControlledSettings query={{
      q: toolbar?.search?.value
    }} includeGroups={['alerts', 'profile', 'person', 'company']} />
    </PageBase>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const toolbar = useSettingsToolbar({});
  return <PageBase>
      <Heading size="xl">Innstillinger</Heading>
      <Toolbar {...toolbar} />
      <ControlledSettings query={{
      q: toolbar?.search?.value
    }} includeGroups={['contact', 'accountSettings', 'other']} />
    </PageBase>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const {
    accountMenu,
    currentAccount
  } = useAdmin({
    defaultAccountId: 'person'
  });
  const toolbar = useSettingsToolbar({
    accountMenu: accountMenu as ToolbarMenuProps
  });
  return <PageBase color="person">
      <Heading size="xl">Innstillinger for {currentAccount?.name}</Heading>
      <Toolbar {...toolbar} />
      <ControlledSettings query={{
      q: toolbar?.search?.value
    }} includeGroups={['contact']} groups={{
      contact: {
        title: 'Kontaktinformasjon'
      }
    }} />
    </PageBase>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const {
    accountMenu,
    currentAccount
  } = useAdmin({
    defaultAccountId: 'diaspora'
  });
  const toolbar = useSettingsToolbar({
    accountMenu: accountMenu as ToolbarMenuProps
  });
  return <PageBase color="company">
      <Heading size="xl">Innstillinger for {currentAccount?.name}</Heading>
      <Toolbar {...toolbar} />
      <ControlledSettings includeGroups={['companyAlerts', 'companyInfo']} query={{
      q: toolbar?.search?.value
    }} groups={{
      companyAlerts: {
        title: 'Varslingsadresser for virksomheten'
      },
      companyInfo: {
        title: 'Opplysninger om virksomheten'
      }
    }} />
    </PageBase>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAdmin({
    defaultAccountId: 'diaspora'
  });
  if (currentAccount?.type === 'person') {
    return <PersonSettings />;
  }
  return <CompanySettings />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <ControlledSettings includeGroups={['contact']} groups={{
    contact: {
      title: ''
    }
  }} />;
}`,...V.parameters?.docs?.source}}};var H=[`Default`,`Grouped`,`Companies`,`SearchResult`,`ControlledSettings`,`SearchSettings`,`AlertSettings`,`AccountSettings`,`PersonSettings`,`CompanySettings`,`AdminSettings`,`DashboardSettings`];export{z as a,k as c,M as d,F as f,j as i,A as l,O as m,B as n,P as o,H as p,I as r,V as s,L as t,R as u};