import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./useAdmin-DJliUQJ1.js";import{n}from"./SettingsList.stories-BZgDec6_.js";import{t as r}from"./Heading-CJB15i5Q.js";import{t as i}from"./BreadcrumbsLink-D8FBTW55.js";import{t as a}from"./Layout-oRerHG_B.js";import{t as o}from"./Toolbar-CmziBAS7.js";import{t as s}from"./PageBase-C-dLvRYT.js";import{i as c}from"./ActivityLog.stories-C4SZGblW.js";import{CompanyDashboard as l,PersonDashboard as u}from"./Dashboard.stories-Dw4nHyRX.js";var d=e(),f={title:`Demo/Admin`,tags:[`beta`,`autodocs`],parameters:{layout:`fullscreen`},args:{}},p=()=>{let{currentAccount:e,layout:n}=t({});return(0,d.jsx)(a,{...n,children:e?.type===`company`?(0,d.jsx)(l,{}):(0,d.jsx)(u,{})})},m=()=>{let{currentAccount:e,breadcrumbs:n,layout:c,toolbar:l}=t({pageId:`users`});return(0,d.jsx)(a,{...c,children:(0,d.jsxs)(s,{color:e?.type,children:[(0,d.jsx)(i,{items:n}),(0,d.jsxs)(r,{size:`xl`,children:[`Brukere med fullmakt til `,e?.name]}),(0,d.jsx)(o,{...l})]})})},h=()=>{let{currentAccount:e,breadcrumbs:n,layout:c,toolbar:l}=t({pageId:`access`});return(0,d.jsx)(a,{...c,children:(0,d.jsxs)(s,{color:e?.type,children:[(0,d.jsx)(i,{items:n}),(0,d.jsxs)(r,{size:`xl`,children:[`Tilganger til `,e?.name]}),(0,d.jsx)(o,{...l})]})})},g=()=>{let{currentAccount:e,breadcrumbs:n,layout:c,toolbar:l}=t({pageId:`requests`});return(0,d.jsx)(a,{...c,children:(0,d.jsxs)(s,{color:e?.type,children:[(0,d.jsx)(i,{items:n}),(0,d.jsx)(r,{size:`xl`,children:`Tittel`}),(0,d.jsx)(o,{...l})]})})},_=()=>{let{currentAccount:e,breadcrumbs:n,layout:c,toolbar:l}=t({pageId:`api-settings`});return(0,d.jsx)(a,{...c,children:(0,d.jsxs)(s,{color:e?.type,children:[(0,d.jsx)(i,{items:n}),(0,d.jsx)(r,{size:`xl`,children:`Tittel`}),(0,d.jsx)(o,{...l})]})})},v=()=>{let{currentAccount:e,breadcrumbs:n,layout:c,toolbar:l}=t({pageId:`reverse-access`});return(0,d.jsx)(a,{...c,children:(0,d.jsxs)(s,{color:e?.type,children:[(0,d.jsx)(i,{items:n}),(0,d.jsx)(r,{size:`xl`,children:`Tittel`}),(0,d.jsx)(o,{...l})]})})},y=()=>{let{currentAccount:e,breadcrumbs:n,layout:c,toolbar:l}=t({pageId:`client-admin`});return(0,d.jsx)(a,{...c,children:(0,d.jsxs)(s,{color:e?.type,children:[(0,d.jsx)(i,{items:n}),(0,d.jsx)(r,{size:`xl`,children:`Tittel`}),(0,d.jsx)(o,{...l})]})})},b=()=>{let{currentAccount:e,breadcrumbs:r,layout:o}=t({pageId:`settings`});return(0,d.jsx)(a,{...o,children:(0,d.jsxs)(s,{color:e?.type,children:[(0,d.jsx)(i,{items:r}),(0,d.jsx)(n,{})]})})},x=()=>{let{currentAccount:e,breadcrumbs:n,layout:o}=t({pageId:`activity-log`});return(0,d.jsx)(a,{...o,children:(0,d.jsxs)(s,{color:e?.type,children:[(0,d.jsx)(i,{items:n}),(0,d.jsx)(r,{size:`xl`,children:`Aktivitetslogg`}),(0,d.jsx)(c,{})]})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount,
    layout
  } = useAdmin({});
  return <Layout {...layout}>
      {currentAccount?.type === "company" ? <DashboardStories.CompanyDashboard /> : <DashboardStories.PersonDashboard />}
    </Layout>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount,
    breadcrumbs,
    layout,
    toolbar
  } = useAdmin({
    pageId: "users"
  });
  return <Layout {...layout}>
      <PageBase color={currentAccount?.type}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">
          Brukere med fullmakt til {currentAccount?.name}
        </Heading>
        <Toolbar {...toolbar} />
      </PageBase>
    </Layout>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount,
    breadcrumbs,
    layout,
    toolbar
  } = useAdmin({
    pageId: "access"
  });
  return <Layout {...layout}>
      <PageBase color={currentAccount?.type}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tilganger til {currentAccount?.name}</Heading>
        <Toolbar {...toolbar} />
      </PageBase>
    </Layout>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount,
    breadcrumbs,
    layout,
    toolbar
  } = useAdmin({
    pageId: "requests"
  });
  return <Layout {...layout}>
      <PageBase color={currentAccount?.type}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tittel</Heading>
        <Toolbar {...toolbar} />
      </PageBase>
    </Layout>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount,
    breadcrumbs,
    layout,
    toolbar
  } = useAdmin({
    pageId: "api-settings"
  });
  return <Layout {...layout}>
      <PageBase color={currentAccount?.type}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tittel</Heading>
        <Toolbar {...toolbar} />
      </PageBase>
    </Layout>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount,
    breadcrumbs,
    layout,
    toolbar
  } = useAdmin({
    pageId: "reverse-access"
  });
  return <Layout {...layout}>
      <PageBase color={currentAccount?.type}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tittel</Heading>
        <Toolbar {...toolbar} />
      </PageBase>
    </Layout>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount,
    breadcrumbs,
    layout,
    toolbar
  } = useAdmin({
    pageId: "client-admin"
  });
  return <Layout {...layout}>
      <PageBase color={currentAccount?.type}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tittel</Heading>
        <Toolbar {...toolbar} />
      </PageBase>
    </Layout>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount,
    breadcrumbs,
    layout
  } = useAdmin({
    pageId: "settings"
  });
  return <Layout {...layout}>
      <PageBase color={currentAccount?.type}>
        <Breadcrumbs items={breadcrumbs} />
        <SettingsStories.AdminSettings />
      </PageBase>
    </Layout>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount,
    breadcrumbs,
    layout
  } = useAdmin({
    pageId: "activity-log"
  });
  return <Layout {...layout}>
      <PageBase color={currentAccount?.type}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Aktivitetslogg</Heading>
        <ActivityLogStories.Default />
      </PageBase>
    </Layout>;
}`,...x.parameters?.docs?.source}}};var S=[`DashboardPage`,`UsersPage`,`AccessPage`,`RequestsPage`,`ApiSettingsPage`,`ReverseAccessPage`,`ClientAdminPage`,`SettingsPage`,`ActivityLogPage`];export{h as AccessPage,x as ActivityLogPage,_ as ApiSettingsPage,y as ClientAdminPage,p as DashboardPage,g as RequestsPage,v as ReverseAccessPage,b as SettingsPage,m as UsersPage,S as __namedExportsOrder,f as default};