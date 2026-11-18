var v=Object.defineProperty;var a=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a6 as r,f as k}from"./iframe-Cf4UALw8.js";import{u as C,S as p}from"./useAdmin-CL76kgxS.js";import{D as l}from"./DashboardHeader-CEDpW9fs.js";import{G as h}from"./Grid-Ik0V-sVg.js";import{I as A}from"./ItemMedia-BhGUpV92.js";import{H as P}from"./Heading-B2LEqvTq.js";import{T as H}from"./Typography-CsGx0b_o.js";import{S as g}from"./HeartFill-D9h2LAGd.js";import{S as f}from"./Bell-CC6emYwL.js";import{S as u}from"./Cog-Ct4tE6EL.js";import{u as x}from"./useSettings-CO2ySN-t.js";import{P as D}from"./PageBase-eBY4Pxiv.js";import{a as S}from"./useAccountMenu-Df-Uf2IL.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-CfWidWjC.js";import"./SettingsItem-CZpLnMaq.js";import"./SettingsItemBase-zn0lCP7Y.js";import"./ChevronUp-BKdDwASh.js";import"./ChevronDown-B_UJ6uJ_.js";import"./ChevronRight-DcM2grMN.js";import"./ItemBase-CxBRYBgT.js";import"./ItemLink-B3qiGYfX.js";import"./ItemControls-C74k2R8j.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./SettingsModal-YzyxvoqZ.js";import"./ModalBody-D4pYrcnM.js";import"./Section-B-7b4QAp.js";import"./Flex-CiSMsFR7.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./ButtonGroup-Cw0djEV1.js";import"./ButtonIcon-DQVaPbHm.js";import"./ButtonLabel-DhfYOY4K.js";import"./Input-OKh8JSaI.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-BIJOliht.js";import"./PersonCircle-BinjxBJZ.js";import"./Buildings2-C5pfq8or.js";import"./InboxFill-DaA5y8zL.js";import"./MenuGrid-Dn9gpcu9.js";import"./MagnifyingGlass-Ckn3gk3A.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-C10mug1X.js";import"./Archive-DbxYD9lF.js";import"./Trash-B_p5hHVd.js";import"./PersonGroup-CZyYgXf0.js";import"./Database-D0NNNrdS.js";import"./ClockDashed-BLeXrSnX.js";import"./useLayout-JlqS5Fc2.js";import"./useLocale-BPjin0qe.js";import"./header-cyCh-hE6.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-BGOVKO4Q.js";import"./Fieldset-CpxHlq1s.js";import"./TextField-DiuOYn3x.js";import"./FieldBase-DSaLFDie.js";import"./Field-t2hlVRTC.js";import"./Label-COfT1-eu.js";import"./Switch-DuCdX2cJ.js";import"./Paperplane-CnZuk2vD.js";import"./Legend-GPQ53iE_.js";import"./Select-D4YwX4Xg.js";import"./Hashtag-mfG0QBn-.js";import"./Files-C2FWMwUb.js";import"./TextareaField-DkCoHY-Z.js";import"./ExternalLink-ByH4q3JR.js";import"./Globe-C1KW9qlQ.js";import"./PadlockLocked-DlURQVHZ.js";import"./PersonRectangle-mWex91nj.js";import"./HardHat-Cer2dYI_.js";import"./Radio-D5dfx0-Q.js";const y="_icon_112og_1",B={icon:y};function o({color:e,theme:i="tinted",icon:t,title:n,href:b,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(A,{loading:c,icon:t,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:b?r.jsx("a",{href:b,children:n}):n})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}a(o,"DashboardCard");const Zr={title:"Page/Dashboard/Dashboard",tags:["autodocs"],parameters:{},args:{}},s=a(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"CompanyDashboard"),m=a(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"PersonDashboard"),d=a(()=>{const{defaultAccount:e}=S({}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--notifications",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--profile-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"UserDashboard"),$r=["CompanyDashboard","PersonDashboard","UserDashboard"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
        <DashboardCard href="/iframe.html?id=demo-profile--notifications" icon={BellIcon as DashboardCardProps['icon']} title="Mine varslinger">
          <p>Mine varslingsadresser og varslinger per aktør.</p>
        </DashboardCard>
        <DashboardCard href="/iframe.html?id=demo-profile--profile-page" icon={CogIcon as DashboardCardProps['icon']} title="Innstillinger">
          <p>Kontaktinformasjon og andre innstillinger.</p>
        </DashboardCard>
      </Grid>
      <SettingsList items={filteredItems} />
    </PageBase>;
}`,...d.parameters?.docs?.source}}};export{s as CompanyDashboard,m as PersonDashboard,d as UserDashboard,$r as __namedExportsOrder,Zr as default};
