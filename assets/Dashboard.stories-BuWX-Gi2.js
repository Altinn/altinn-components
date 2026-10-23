var v=Object.defineProperty;var s=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a7 as r,f as k}from"./iframe-Ck42qOx1.js";import{u as C,S as p}from"./useAdmin-BhLDH62k.js";import{D as l}from"./DashboardHeader-2vloMf--.js";import{G as h}from"./Grid-4q65xKLZ.js";import{I as A}from"./ItemMedia-Br8-csYo.js";import{H as P}from"./Heading-CWc2O27X.js";import{T as H}from"./Typography-nObbjg0R.js";import{S as g}from"./HeartFill-DWHY2qOR.js";import{S as f}from"./Bell-C9thxVLV.js";import{S as u}from"./Cog-huK7G8Sv.js";import{u as D}from"./useSettings-Bn0BlHMx.js";import{P as b}from"./PageBase-BG0jmuXn.js";import{a as S}from"./useAccountMenu-DsX4mUWw.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-BBAeNj9K.js";import"./SettingsItem-CKUU-yVH.js";import"./SettingsItemBase-BOQ-SQ7r.js";import"./ChevronUp-CXZFvpJO.js";import"./ChevronDown-CVgB8S_A.js";import"./ChevronRight-DWZnEevf.js";import"./ItemBase-CjTMF0wf.js";import"./ItemLink-D_slDvwR.js";import"./ItemControls-3hwzA3sg.js";import"./Badge-Cjd2AmoZ.js";import"./Tooltip-CTYi4ppJ.js";import"./SettingsModal-DgcCT0IL.js";import"./ModalBody-0O6NY7SM.js";import"./Section-wNwpgjpU.js";import"./Flex-CzBhjOdV.js";import"./Avatar-BGxIkqoE.js";import"./AvatarGroup-47nQolqa.js";import"./ButtonGroup-ChpwNZu9.js";import"./ButtonIcon-CYrEachb.js";import"./ButtonLabel-5wbsHXmv.js";import"./Input-DGLuCKOz.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-B2DxW95W.js";import"./PersonCircle-BOj09QIw.js";import"./Buildings2-DL0ggmdl.js";import"./InboxFill-D7_H0CmT.js";import"./MenuGrid-Bu376UhO.js";import"./MagnifyingGlass-CxCtlPHN.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-DJEuTHB_.js";import"./Archive-DTVQB6g6.js";import"./Trash-hM9OCzu1.js";import"./PersonGroup-CEEJ1kEC.js";import"./Database-Cxi9R68j.js";import"./ClockDashed-1RQ8UU49.js";import"./useLayout-BxgrZEpM.js";import"./useLocale-B1NgXTrx.js";import"./header-BEkB8-SK.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-BgClQYDl.js";import"./Fieldset-_Y7gbmZ4.js";import"./TextField-BT_NxReM.js";import"./FieldBase-ly-5mtcw.js";import"./Field-DflaqZhu.js";import"./Label-BQ9ZPq2G.js";import"./Switch-B1H2K7js.js";import"./Paperplane-BjnjZFX3.js";import"./Legend-CT5eZWNn.js";import"./Select-kwfnREm3.js";import"./Hashtag-B7SkRsCh.js";import"./Files-B3cMo_EB.js";import"./TextareaField-B3GsZla0.js";import"./ExternalLink--C2vtEYd.js";import"./Globe-4hEu2YgG.js";import"./PadlockLocked-CZHNP7jq.js";import"./PersonRectangle-XdGLuQC_.js";import"./HardHat-4uVYk-vF.js";import"./Radio-BW4uR7Sc.js";const y="_icon_112og_1",B={icon:y};function t({color:e,theme:i="tinted",icon:o,title:a,href:x,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[o&&r.jsx(A,{loading:c,icon:o,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:x?r.jsx("a",{href:x,children:a}):a})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}s(t,"DashboardCard");const Zr={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},n=s(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="companyInfo");return r.jsxs(b,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"CompanyDashboard"),m=s(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="contact");return r.jsxs(b,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"PersonDashboard"),d=s(()=>{const{defaultAccount:e}=S({}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="contact");return r.jsxs(b,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--alerts-page",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"UserDashboard");n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};const $r=["CompanyDashboard","PersonDashboard","UserDashboard"];export{n as CompanyDashboard,m as PersonDashboard,d as UserDashboard,$r as __namedExportsOrder,Zr as default};
