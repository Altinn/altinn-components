var v=Object.defineProperty;var s=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a7 as r,f as k}from"./iframe-C7zNVDTT.js";import{u as C,S as p}from"./useAdmin-nFmRZLmB.js";import{D as l}from"./DashboardHeader-DDj0sbk-.js";import{G as h}from"./Grid-DRRYlzi4.js";import{I as A}from"./ItemMedia-89sj9-D5.js";import{H as P}from"./Heading-gv6s55oV.js";import{T as H}from"./Typography-4gq5i4xU.js";import{S as g}from"./HeartFill-Be15i5fa.js";import{S as f}from"./Bell-CsPO5nr_.js";import{S as u}from"./Cog-C_dIfaiu.js";import{u as D}from"./useSettings-CawHqgts.js";import{P as b}from"./PageBase-inkFzTL0.js";import{a as S}from"./useAccountMenu-uA8btcNE.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-CRscwWGI.js";import"./SettingsItem-DVvt3bI4.js";import"./SettingsItemBase-CJYffbTY.js";import"./ChevronUp-wuByUJN5.js";import"./ChevronDown-wiRxhmw3.js";import"./ChevronRight-DIApXsrk.js";import"./ItemBase-DuoRnkB5.js";import"./ItemLink-B4RQLXhb.js";import"./ItemControls-CUub_53H.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./SettingsModal-BI6AVWDn.js";import"./ModalBody-DHblQtRU.js";import"./Section-B3YiwHQ7.js";import"./Flex-CVxm3AId.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./ButtonGroup-CoqmCer7.js";import"./ButtonIcon-BPuZWt5t.js";import"./ButtonLabel-CpQPvS5S.js";import"./Input-CFKt0A_s.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-DZwWJtIL.js";import"./PersonCircle-Dtb1J2KT.js";import"./Buildings2-C52yfc6A.js";import"./InboxFill-C72yjiaX.js";import"./MenuGrid-BCmbKjow.js";import"./MagnifyingGlass-D6hMH6h9.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-DMj8vedD.js";import"./Archive-k3j1nRib.js";import"./Trash-DXsDcsqv.js";import"./PersonGroup-BZqPyPC0.js";import"./Database-B8GP2Cy8.js";import"./ClockDashed-Ni0gvRCY.js";import"./useLayout-lbzwA2xj.js";import"./useLocale-C47f_wVY.js";import"./header-CDpjXX52.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-CLjqXK08.js";import"./Fieldset-DG2W5MhA.js";import"./TextField-DUvaSDR4.js";import"./FieldBase-CRVXDoio.js";import"./Field-C_oHAtV1.js";import"./Label-CAjho_cW.js";import"./Switch-BTuJol9o.js";import"./Paperplane-Nz8AMp4_.js";import"./Legend-A_nfH57D.js";import"./Select-EB9QXss9.js";import"./Hashtag-DAlukAWc.js";import"./Files-BmrAPL6z.js";import"./TextareaField-B-hz6HKZ.js";import"./ExternalLink-DhNEqeEL.js";import"./Globe-CqKzv9dh.js";import"./PersonRectangle-BwLe69lU.js";import"./HardHat-BOE9RxAZ.js";import"./Radio-Ss_o9WPN.js";const y="_icon_112og_1",B={icon:y};function t({color:e,theme:i="tinted",icon:o,title:a,href:x,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[o&&r.jsx(A,{loading:c,icon:o,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:x?r.jsx("a",{href:x,children:a}):a})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}s(t,"DashboardCard");const Yr={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},n=s(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="companyInfo");return r.jsxs(b,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"CompanyDashboard"),m=s(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="contact");return r.jsxs(b,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"PersonDashboard"),d=s(()=>{const{defaultAccount:e}=S({}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="contact");return r.jsxs(b,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--alerts-page",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"UserDashboard");n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
