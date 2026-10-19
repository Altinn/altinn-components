var v=Object.defineProperty;var s=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a7 as r,f as k}from"./iframe-C_3qWz8U.js";import{u as C,S as p}from"./useAdmin-CS_zsGEQ.js";import{D as l}from"./DashboardHeader-BFhg0zXS.js";import{G as h}from"./Grid-DivFhvZ9.js";import{I as A}from"./ItemMedia-Cj3xkQia.js";import{H as P}from"./Heading-mFc3Xe1m.js";import{T as H}from"./Typography-BcJ8Dd08.js";import{S as g}from"./HeartFill-hsfVC7cP.js";import{S as f}from"./Bell-Bpe1AR9G.js";import{S as u}from"./Cog-BuDT4TfM.js";import{u as D}from"./useSettings-BGYmgs-B.js";import{P as b}from"./PageBase-DfEOLhka.js";import{a as S}from"./useAccountMenu-DyAD_b2o.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-DHyqVfH8.js";import"./SettingsItem-BDryr6tg.js";import"./SettingsItemBase-Df9MmMMP.js";import"./ChevronUp-CK8aUJr_.js";import"./ChevronDown-Du2hGOu_.js";import"./ChevronRight-Cfc1KVT6.js";import"./ItemBase-DGBv8zFK.js";import"./ItemLink-BlWZTpmg.js";import"./ItemControls-B-e7R4IL.js";import"./Badge-BBubxNU6.js";import"./Tooltip-oYeDkYvf.js";import"./SettingsModal-DErnX0V6.js";import"./ModalBody-BKf16YWY.js";import"./Section-CCH9N23g.js";import"./Flex-BTfeLS8w.js";import"./Avatar-DoTE2KMY.js";import"./AvatarGroup-CYCsQlmU.js";import"./ButtonGroup-Byo6nBQS.js";import"./ButtonIcon-CkJ7s5gA.js";import"./ButtonLabel-IXPMuGu0.js";import"./Input-BnIvU9G4.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-BpzYzkGb.js";import"./PersonCircle-B6fG4_ys.js";import"./Buildings2-DI2Qx4qD.js";import"./InboxFill-BXPi7rH2.js";import"./MenuGrid-DrCpJymH.js";import"./MagnifyingGlass-h5bwwa2w.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-CQqchivH.js";import"./Archive-BEuDz18x.js";import"./Trash-CF3fiEwO.js";import"./PersonGroup-BKaMLaZ6.js";import"./Database-CPq3IqyZ.js";import"./ClockDashed-Bi2OBX1v.js";import"./useLayout-Bnm5sTTP.js";import"./useLocale-D4eqsiYd.js";import"./header-BXZhewUp.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-ChiMW-L8.js";import"./Fieldset-DuTv6cVj.js";import"./TextField-Zt09XX06.js";import"./FieldBase-2HPCGFYx.js";import"./Field-D_aQ-GwQ.js";import"./Label-El1js8iZ.js";import"./Switch-Br6FtIP2.js";import"./Paperplane-DggJFDWk.js";import"./Legend-DLgjiTsU.js";import"./Select-Ca3KSTVH.js";import"./Hashtag-DD_PZ6ma.js";import"./Files-Dm6wNZEx.js";import"./TextareaField-l013U5d3.js";import"./ExternalLink-fPt-RFZ5.js";import"./Globe-DuJDLN5K.js";import"./PersonRectangle-CgrEx6mi.js";import"./HardHat-C_8Og667.js";import"./Radio-vqbG5QQj.js";const y="_icon_112og_1",B={icon:y};function t({color:e,theme:i="tinted",icon:o,title:a,href:x,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[o&&r.jsx(A,{loading:c,icon:o,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:x?r.jsx("a",{href:x,children:a}):a})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}s(t,"DashboardCard");const Yr={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},n=s(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="companyInfo");return r.jsxs(b,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"CompanyDashboard"),m=s(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="contact");return r.jsxs(b,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"PersonDashboard"),d=s(()=>{const{defaultAccount:e}=S({}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="contact");return r.jsxs(b,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--alerts-page",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"UserDashboard");n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};const Zr=["CompanyDashboard","PersonDashboard","UserDashboard"];export{n as CompanyDashboard,m as PersonDashboard,d as UserDashboard,Zr as __namedExportsOrder,Yr as default};
