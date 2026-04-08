import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./Bell-Dy1Lu3cE.js";import{n}from"./useFloatingDropdown-fbB596hr.js";import{t as r}from"./DialogListGroup--vVbngCh.js";import{t as i}from"./Layout-oRerHG_B.js";import{t as a}from"./List-BNjZuxCc.js";import{t as o}from"./NotificationItemIcon-CabCxan-.js";import{t as s}from"./Toolbar-CmziBAS7.js";import{t as c}from"./PageBase-C-dLvRYT.js";var l=e(),u={title:`Notifications`,component:o,tags:[`beta`],parameters:{layout:`fullscreen`}},d=()=>{let{layout:e,toolbar:u,results:d}=n({});return(0,l.jsx)(i,{...e,children:(0,l.jsxs)(c,{margin:`page`,children:[(0,l.jsx)(s,{...u}),(0,l.jsx)(a,{children:(0,l.jsx)(o,{id:`alert`,as:`a`,href:`//vg.no`,icon:t,iconBadge:{label:`Nytt innhold`},dismissable:!0,title:`Du har meldinger i gammel innboks`,description:`2 dager siden`,variant:`tinted`})}),d&&(0,l.jsx)(r,{items:d.items,groups:d?.groups})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    layout,
    toolbar,
    results
  } = useInbox({});
  return <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <List>
          <NotificationItem id="alert" as="a" href="//vg.no" icon={BellIcon} iconBadge={{
          label: 'Nytt innhold'
        }} dismissable title="Du har meldinger i gammel innboks" description="2 dager siden" variant="tinted" />
        </List>
        {results && <DialogList items={results.items} groups={results?.groups} />}
      </PageBase>
    </Layout>;
}`,...d.parameters?.docs?.source}}};var f=[`InboxNotification`];export{d as InboxNotification,f as __namedExportsOrder,u as default};