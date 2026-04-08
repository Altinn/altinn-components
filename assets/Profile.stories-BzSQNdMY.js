import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./Bell-Dy1Lu3cE.js";import{t as n}from"./useSettings-DhtL7S3O.js";import{n as r}from"./useAdmin-DJliUQJ1.js";import{t as i}from"./Cog-flszozsV.js";import{n as a}from"./HeartFill-C1lqhZrU.js";import{t as o,u as s}from"./AccountList.stories-D-nYCMI5.js";import{r as c,t as l}from"./SettingsList.stories-BZgDec6_.js";import{t as u}from"./Heading-CJB15i5Q.js";import{t as d}from"./Layout-oRerHG_B.js";import{t as f}from"./PageBase-C-dLvRYT.js";import{t as p}from"./DashboardHeader-DLAors9B.js";import{t as m}from"./useAccountsToolbar-B3xMUr3_.js";import{t as h}from"./useProfile-DjEKJGkB.js";import{r as g}from"./ActivityLog.stories-C4SZGblW.js";var _=e(),v={title:`Demo/Profile`,tags:[`beta`],parameters:{layout:`fullscreen`},args:{}},y=()=>{let{layout:e}=h({}),{defaultAccount:o}=m({}),{items:s}=n({}),c=[{icon:a,title:`Mine aktører`,description:`Administrer aktører, favoritter og grupper.`,href:`/iframe.html?id=demo-profile--accounts-page`,groupId:`1`,badge:{label:`20 aktører`}},{icon:t,title:`Mine varslinger`,description:`Varslinger og varslingsprofiler.`,href:`/iframe.html?id=demo-profile--alerts-page`,groupId:`1`,badge:{label:`3 profiler`}},{icon:i,title:`Flere innstillinger`,href:`/iframe.html?id=demo-profile--settings-page`,as:`a`}].map(e=>({...e,variant:`link`,as:`a`,groupId:`1`,linkIcon:!0})),l=[...s?.filter(e=>e.groupId===`contact`)?.map(e=>({...e,groupId:`0`}))||[],...c]?.map((e,t)=>({...e,id:`s`+t})),u={1:{title:`Min profil`},0:{title:``}};return(0,_.jsx)(d,{...e,useGlobalHeader:!0,children:(0,_.jsxs)(f,{children:[(0,_.jsx)(p,{...o}),(0,_.jsx)(r,{groups:u,items:l})]})})},b=()=>{let{layout:e}=h({pageId:`accounts`});return(0,_.jsx)(d,{...e,useGlobalHeader:!0,children:(0,_.jsxs)(f,{children:[(0,_.jsx)(u,{size:`xl`,children:`Mine aktører`}),(0,_.jsx)(o,{})]})})},x=()=>{let{layout:e}=h({pageId:`accounts`});return(0,_.jsx)(d,{...e,useGlobalHeader:!0,children:(0,_.jsxs)(f,{children:[(0,_.jsx)(u,{size:`xl`,children:`Mine aktører (Virtualized)`}),(0,_.jsx)(s,{})]})})},S=()=>{let{layout:e}=h({pageId:`alerts`});return(0,_.jsx)(d,{...e,useGlobalHeader:!0,children:(0,_.jsx)(f,{color:`person`,children:(0,_.jsx)(c,{})})})},C=()=>{let{layout:e}=h({pageId:`settings`});return(0,_.jsx)(d,{...e,useGlobalHeader:!0,children:(0,_.jsx)(f,{color:`person`,children:(0,_.jsx)(l,{})})})},w=()=>{let{layout:e}=h({pageId:`activity-log`});return(0,_.jsx)(d,{...e,useGlobalHeader:!0,children:(0,_.jsxs)(f,{color:`person`,children:[(0,_.jsx)(u,{size:`xl`,children:`Aktivitetslogg`}),(0,_.jsx)(g,{})]})})},T=()=>{let{layout:e}=h({pageId:`users`});return(0,_.jsx)(d,{...e,useGlobalHeader:!0,children:(0,_.jsx)(f,{color:`person`,children:(0,_.jsx)(u,{size:`xl`,children:`Brukere med fullmakt til din profil`})})})},E=()=>{let{layout:e}=h({pageId:`access`});return(0,_.jsx)(d,{...e,useGlobalHeader:!0,children:(0,_.jsx)(f,{children:(0,_.jsx)(u,{size:`xl`,children:`Tilganger du har gitt til andre`})})})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const {
    layout
  } = useProfile({});
  const {
    defaultAccount
  } = useAccounts({});
  const {
    items
  } = useSettings({});
  const linkSettings = [{
    icon: HeartIcon,
    title: "Mine aktører",
    description: "Administrer aktører, favoritter og grupper.",
    href: "/iframe.html?id=demo-profile--accounts-page",
    groupId: "1",
    badge: {
      label: "20 aktører"
    }
  }, {
    icon: BellIcon,
    title: "Mine varslinger",
    description: "Varslinger og varslingsprofiler.",
    href: "/iframe.html?id=demo-profile--alerts-page",
    groupId: "1",
    badge: {
      label: "3 profiler"
    }
  }, {
    icon: CogIcon,
    title: "Flere innstillinger",
    href: "/iframe.html?id=demo-profile--settings-page",
    as: "a"
  }].map(item => ({
    ...item,
    variant: "link",
    as: "a",
    groupId: "1",
    linkIcon: true
  }));
  const contactSettings = items?.filter(item => item.groupId === "contact")?.map(item => ({
    ...item,
    groupId: "0"
  })) || [];
  const dashboardItems = [...contactSettings, ...linkSettings]?.map((item, index) => {
    return {
      ...item,
      id: "s" + index
    };
  });
  const groups = {
    "1": {
      title: "Min profil"
    },
    "0": {
      title: ""
    }
  };
  return <Layout {...layout} useGlobalHeader={true}>
      <PageBase>
        <DashboardHeader {...defaultAccount as DashboardHeaderProps} />
        <SettingsList groups={groups} items={dashboardItems as SettingsItemProps[]} />
      </PageBase>
    </Layout>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const {
    layout
  } = useProfile({
    pageId: "accounts"
  });
  return <Layout {...layout} useGlobalHeader={true}>
      <PageBase>
        <Heading size="xl">Mine aktører</Heading>
        <AccountListStories.Collapsible />
      </PageBase>
    </Layout>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const {
    layout
  } = useProfile({
    pageId: "accounts"
  });
  return <Layout {...layout} useGlobalHeader={true}>
      <PageBase>
        <Heading size="xl">Mine aktører (Virtualized)</Heading>
        <AccountListStories.Virtualized />
      </PageBase>
    </Layout>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const {
    layout
  } = useProfile({
    pageId: "alerts"
  });
  return <Layout {...layout} useGlobalHeader={true}>
      <PageBase color="person">
        <SettingsStories.AlertSettings />
      </PageBase>
    </Layout>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const {
    layout
  } = useProfile({
    pageId: "settings"
  });
  return <Layout {...layout} useGlobalHeader={true}>
      <PageBase color="person">
        <SettingsStories.AccountSettings />
      </PageBase>
    </Layout>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const {
    layout
  } = useProfile({
    pageId: "activity-log"
  });
  return <Layout {...layout} useGlobalHeader={true}>
      <PageBase color="person">
        <Heading size="xl">Aktivitetslogg</Heading>
        <ActivityLogStories.Controlled />
      </PageBase>
    </Layout>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const {
    layout
  } = useProfile({
    pageId: "users"
  });
  return <Layout {...layout} useGlobalHeader={true}>
      <PageBase color="person">
        <Heading size="xl">Brukere med fullmakt til din profil</Heading>
      </PageBase>
    </Layout>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const {
    layout
  } = useProfile({
    pageId: "access"
  });
  return <Layout {...layout} useGlobalHeader={true}>
      <PageBase>
        <Heading size="xl">Tilganger du har gitt til andre</Heading>
      </PageBase>
    </Layout>;
}`,...E.parameters?.docs?.source}}};var D=[`DashboardPage`,`AccountsPage`,`AccountsPageVirtualized`,`AlertsPage`,`SettingsPage`,`ActivityLogPage`,`UsersPage`,`AccessPage`];export{E as AccessPage,b as AccountsPage,x as AccountsPageVirtualized,w as ActivityLogPage,S as AlertsPage,y as DashboardPage,C as SettingsPage,T as UsersPage,D as __namedExportsOrder,v as default};