import{a7 as r,f as I}from"./iframe-CH-Rf2AI.js";import{u as x,S as c}from"./useAdmin-B0HgTJvk.js";import{D as p}from"./DashboardHeader-CimziIRG.js";import{G as l}from"./Grid-9BBxc4iD.js";import{I as v}from"./ItemMedia-BczcOirL.js";import{H as k}from"./Heading-BVqV7FRe.js";import{T as A}from"./Typography-CqA3kMNv.js";import{S as h}from"./HeartFill-BYSAi8Z7.js";import{S as g}from"./Bell-fcA9xSh9.js";import{S as f}from"./Cog-nlWReunp.js";import{u}from"./useSettings-CR24djae.js";import{P as D}from"./PageBase-BcnUpMFY.js";import{a as P}from"./useAccountMenu-D2zJVa-5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn39eRZ3.js";import"./useMenu-FkcUMU_-.js";import"./SettingsItem-BGVJ8lEr.js";import"./SettingsItemBase-Cht2WGOe.js";import"./ChevronUp-COzX9VRs.js";import"./ChevronDown-D_JnpA4f.js";import"./ChevronRight-uifDbL9f.js";import"./ItemBase-B9tNoNOm.js";import"./ItemLink-FshzAh5h.js";import"./ItemControls-loNIR_kd.js";import"./Badge-D-8o5byA.js";import"./Tooltip-DbXMT4Wm.js";import"./SettingsModal-Bx3rcEds.js";import"./ModalBody-DWS6WpdW.js";import"./Section-DzGR-IUh.js";import"./Flex-BtYwPl5t.js";import"./Avatar-BTqkjvF0.js";import"./AvatarGroup-l96vnRcp.js";import"./ButtonGroup-6-1iOFaS.js";import"./ButtonIcon-CIT11Yqm.js";import"./ButtonLabel-DngeK8JL.js";import"./Input-CCpKfFu1.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-C99LfLi3.js";import"./PersonCircle-BwpYfq3Y.js";import"./Buildings2-DK48JhGB.js";import"./InboxFill-CjX93Lsg.js";import"./MenuGrid-D-M2D-4J.js";import"./MagnifyingGlass-CcgQ0D7w.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-D8GfnLN6.js";import"./Archive-hrfshYGt.js";import"./Trash-BAmIqX5W.js";import"./PersonGroup-D0ff-VUl.js";import"./Database-CoOP-UPc.js";import"./ClockDashed-An8qJSBT.js";import"./useLayout-CHzeUI8x.js";import"./useLocale-C_wYC4TW.js";import"./header-D6LNfdoA.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-DIHcSE2r.js";import"./Fieldset-RTv4sQps.js";import"./TextField-B2WC8qDF.js";import"./FieldBase-BRTqs99O.js";import"./Field-D5PSE71G.js";import"./Label-D8E1gFAx.js";import"./Switch-C3S78qS-.js";import"./Paperplane-BfsoGrBh.js";import"./Legend-Bg6ffJve.js";import"./Select-ZY3-KJ4r.js";import"./Hashtag-Cahe3Lcj.js";import"./Files-Q69cdbAP.js";import"./TextareaField-J95AgTvk.js";import"./ExternalLink-C-z5byJt.js";import"./Globe-QtnCWb3M.js";import"./PersonRectangle-BShPoMJ_.js";import"./HardHat-DWO11ukG.js";import"./Radio-xE2VRxRy.js";const H="_icon_112og_1",S={icon:H};function i({color:e,theme:a="tinted",icon:t,title:o,href:b,children:C,loading:d,className:j}){return r.jsxs(I,{"data-color":e,variant:a,className:j,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(v,{loading:d,icon:t,className:S.icon}),r.jsx(k,{size:"lg",loading:d,children:b?r.jsx("a",{href:b,children:o}):o})]}),r.jsx(A,{size:"sm",loading:d,children:C})]})}const Wr={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},s=()=>{const{currentAccount:e}=x({defaultAccountId:"diaspora"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},n=()=>{const{currentAccount:e}=x({defaultAccountId:"freyr"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},m=()=>{const{defaultAccount:e}=P({}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-profile--accounts-page",icon:h,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--alerts-page",icon:g,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(c,{items:t})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAdmin({
    defaultAccountId: 'diaspora'
  });
  const {
    items
  } = useSettings({});
  const filteredItems = items?.filter(item => item.groupId === 'companyInfo');
  return <PageBase color="company">
      <DashboardHeader icon={currentAccount?.icon as DashboardHeaderProps['icon']} title={currentAccount?.name || 'Company'} description={currentAccount?.description} />

      <Grid cols={3}>
        <DashboardCard href="/iframe.html?id=demo-admin--users-page" icon={HeartIcon as DashboardCardProps['icon']} title="Brukere">
          <p>Hvem har tilgang til virksomheten?</p>
        </DashboardCard>
        <DashboardCard href="/iframe.html?id=demo-admin--access-page" icon={BellIcon as DashboardCardProps['icon']} title="Tilganger">
          <p>Hvilke tilganger har virksomheten?</p>
        </DashboardCard>
        <DashboardCard href="/iframe.html?id=demo-admin--settings-page" icon={CogIcon as DashboardCardProps['icon']} title="Innstillinger">
          <p>Varslinger og andre innstillinger.</p>
        </DashboardCard>
      </Grid>

      <SettingsList items={filteredItems} />
    </PageBase>;
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAdmin({
    defaultAccountId: 'freyr'
  });
  const {
    items
  } = useSettings({});
  const filteredItems = items?.filter(item => item.groupId === 'contact');
  return <PageBase color="person">
      <DashboardHeader icon={currentAccount?.icon as DashboardHeaderProps['icon']} title={currentAccount?.name || 'Company'} description={currentAccount?.description} />

      <Grid cols={3}>
        <DashboardCard href="/iframe.html?id=demo-admin--users-page" icon={HeartIcon as DashboardCardProps['icon']} title="Brukere">
          <p>Hvem har tilgang til virksomheten?</p>
        </DashboardCard>
        <DashboardCard href="/iframe.html?id=demo-admin--access-page" icon={BellIcon as DashboardCardProps['icon']} title="Tilganger">
          <p>Hvilke tilganger har virksomheten?</p>
        </DashboardCard>
        <DashboardCard href="/iframe.html?id=demo-admin--settings-page" icon={CogIcon as DashboardCardProps['icon']} title="Innstillinger">
          <p>Varslinger og andre innstillinger.</p>
        </DashboardCard>
      </Grid>

      <SettingsList items={filteredItems} />
    </PageBase>;
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    defaultAccount
  } = useAccounts({});
  const {
    items
  } = useSettings({});
  const filteredItems = items?.filter(item => item.groupId === 'contact');
  return <PageBase color="person">
      <DashboardHeader icon={defaultAccount?.icon as DashboardHeaderProps['icon']} title={defaultAccount?.name} description={defaultAccount?.description as DashboardHeaderProps['description']} />
      <Grid cols={3}>
        <DashboardCard href="/iframe.html?id=demo-profile--accounts-page" icon={HeartIcon as DashboardCardProps['icon']} title="Mine aktører">
          <p>Mine aktører, favoritter og grupper.</p>
        </DashboardCard>
        <DashboardCard href="/iframe.html?id=demo-profile--alerts-page" icon={BellIcon as DashboardCardProps['icon']} title="Mine varslinger">
          <p>Mine varslingsadresser og varslinger per aktør.</p>
        </DashboardCard>
        <DashboardCard href="/iframe.html?id=demo-profile--settings-page" icon={CogIcon as DashboardCardProps['icon']} title="Innstillinger">
          <p>Kontaktinformasjon og andre innstillinger.</p>
        </DashboardCard>
      </Grid>
      <SettingsList items={filteredItems} />
    </PageBase>;
}`,...m.parameters?.docs?.source}}};const Xr=["CompanyDashboard","PersonDashboard","UserDashboard"];export{s as CompanyDashboard,n as PersonDashboard,m as UserDashboard,Xr as __namedExportsOrder,Wr as default};
