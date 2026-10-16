var v=Object.defineProperty;var s=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a7 as r,f as k}from"./iframe-ITS-2hJr.js";import{u as C,S as p}from"./useAdmin-CLbVEtal.js";import{D as l}from"./DashboardHeader-CJWR6_nz.js";import{G as h}from"./Grid-CD2ZP4n2.js";import{I as A}from"./ItemMedia-pMPhCUmI.js";import{H as P}from"./Heading-Bdv6LYG9.js";import{T as H}from"./Typography-8PAPF6ji.js";import{S as g}from"./HeartFill-oj3X-ZaZ.js";import{S as f}from"./Bell-CYI2F0Fp.js";import{S as u}from"./Cog-BRaQD6D7.js";import{u as D}from"./useSettings-Bxjq2zjA.js";import{P as b}from"./PageBase-DsJJeZMz.js";import{a as S}from"./useAccountMenu-C-4o4W_3.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-Cz88jtED.js";import"./SettingsItem-mBA5QWXI.js";import"./SettingsItemBase-BhuktrHX.js";import"./ChevronUp-fEa8K7DU.js";import"./ChevronDown-Ca0tEUL8.js";import"./ChevronRight-DGdpC6SO.js";import"./ItemBase-3_cP2lbl.js";import"./ItemLink-Ck57Gq-9.js";import"./ItemControls-f_wXUIix.js";import"./Badge-BVHpVrLu.js";import"./Tooltip-4yQO3AdC.js";import"./SettingsModal-CxN7IwrT.js";import"./ModalBody-Cqe55Y6K.js";import"./Section-b3xCS6xU.js";import"./Flex-D_HsLLCq.js";import"./Avatar-BB-8uFGa.js";import"./AvatarGroup-BWnxkhGl.js";import"./ButtonGroup-B79-xqIF.js";import"./ButtonIcon-DIolnyFl.js";import"./ButtonLabel-DKPFiNkA.js";import"./Input-eieVqTh_.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-DJCxlQHv.js";import"./PersonCircle-CuiBDSgR.js";import"./Buildings2-t8AqHIZv.js";import"./InboxFill-CrPtCltv.js";import"./MenuGrid-DxQ98BF1.js";import"./MagnifyingGlass-CFIOBciK.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-BoS4cVq2.js";import"./Archive-BfyIZBrU.js";import"./Trash-Cy_ISLKx.js";import"./PersonGroup-BF-Qp4-A.js";import"./Database-CQBUW9mN.js";import"./ClockDashed-jbIYtePL.js";import"./useLayout-C3Oq0Tz_.js";import"./useLocale-CDuwreSV.js";import"./header-BRJCjh72.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-B2HymlD1.js";import"./Fieldset-DRo1Axyh.js";import"./TextField-CtDQb2Ds.js";import"./FieldBase-CQGaRX-e.js";import"./Field-D1z-R59Q.js";import"./Label-o7Cne8nH.js";import"./Switch-rM7WLXe7.js";import"./Paperplane-G4VJAVrW.js";import"./Legend-DehPXn2N.js";import"./Select-DIfPmM2R.js";import"./Hashtag-Cv5WCCKr.js";import"./Files-BXF6wYPQ.js";import"./TextareaField-DwXCoNTg.js";import"./ExternalLink-BDAn7eVr.js";import"./Globe-THAXL2bb.js";import"./PersonRectangle-ID2DOEAt.js";import"./HardHat-ZqQzP4G6.js";import"./Radio-iV_ga_a8.js";const y="_icon_112og_1",B={icon:y};function t({color:e,theme:i="tinted",icon:o,title:a,href:x,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[o&&r.jsx(A,{loading:c,icon:o,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:x?r.jsx("a",{href:x,children:a}):a})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}s(t,"DashboardCard");const Yr={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},n=s(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="companyInfo");return r.jsxs(b,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"CompanyDashboard"),m=s(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="contact");return r.jsxs(b,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"PersonDashboard"),d=s(()=>{const{defaultAccount:e}=S({}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="contact");return r.jsxs(b,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--alerts-page",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"UserDashboard");n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
