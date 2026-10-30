var v=Object.defineProperty;var a=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a5 as r,e as k}from"./iframe-k-5ppgch.js";import{u as C,S as p}from"./useAdmin-BN3zxRIk.js";import{D as l}from"./DashboardHeader-DmQO7lq-.js";import{G as h}from"./Grid-UcB1jhss.js";import{I as A}from"./ItemMedia-DxNh8EKr.js";import{H as P}from"./Heading-DFDwpHPM.js";import{T as H}from"./Typography-CYRWqnkB.js";import{S as g}from"./HeartFill-CACTuZAo.js";import{S as f}from"./Bell-CJ9Ne8_7.js";import{S as u}from"./Cog-c4lHbm7A.js";import{u as x}from"./useSettings-CI-fmXl8.js";import{P as D}from"./PageBase-Oq9h2D-P.js";import{a as S}from"./useAccountMenu-CSWmAgnW.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-DQYhP48A.js";import"./SettingsItem-CJmPSekk.js";import"./SettingsItemBase-DZxwsjoE.js";import"./ChevronUp-gL_c1moU.js";import"./ChevronDown-l3Tycs4Q.js";import"./ChevronRight-CDNE03o8.js";import"./ItemBase-C_ikRmi3.js";import"./ItemLink-CIk1xtvG.js";import"./ItemControls-ByMwyA6J.js";import"./Badge-GfdRI08Y.js";import"./Tooltip-tkuEOqTN.js";import"./SettingsModal-C25gVZ6b.js";import"./ModalBody-CIuqRrmc.js";import"./Section-QDM_T_oE.js";import"./Flex-DfG9uaWh.js";import"./Avatar-Bkj70cv6.js";import"./AvatarGroup-CF7XuR93.js";import"./ButtonGroup-B2jA2Tqh.js";import"./ButtonIcon-w0mUwAgm.js";import"./ButtonLabel-CaO7Cf6Y.js";import"./Input-fDrubqKv.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-CO675N6U.js";import"./PersonCircle-DCYTUj1x.js";import"./Buildings2-BK3EZ0ZK.js";import"./InboxFill-kSVolaGe.js";import"./MenuGrid-CP9p0DZ8.js";import"./MagnifyingGlass-B6a_F1T2.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-DBlnZUpd.js";import"./Archive-mZAeZsrq.js";import"./Trash-D-Jav_7z.js";import"./PersonGroup-DJCOyCSc.js";import"./Database-C66mbA8V.js";import"./ClockDashed-KjzK9RZG.js";import"./useLayout-B3wJna8x.js";import"./useLocale-EftIacJ8.js";import"./header-BaYHS0E4.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-DchtrGpj.js";import"./Fieldset-XGcIUQA1.js";import"./TextField-DwcD3VdB.js";import"./FieldBase-CXS3Sevu.js";import"./Field-BTpPk25O.js";import"./Label-D-n8lPTZ.js";import"./Switch-Dxi_T-X1.js";import"./Paperplane-u7-Mxinu.js";import"./Legend-C_7x1Y2I.js";import"./Select-CRGEy-ED.js";import"./Hashtag-BiuOMnnV.js";import"./Files-DKWN8ubK.js";import"./TextareaField-BDlcgOhg.js";import"./ExternalLink-CuRQ8iVJ.js";import"./Globe-CPlScfnn.js";import"./PadlockLocked-CPVc7Tom.js";import"./PersonRectangle-BPinuPbo.js";import"./HardHat-CALbbS7f.js";import"./Radio-Cgw5SgGs.js";const y="_icon_112og_1",B={icon:y};function t({color:e,theme:i="tinted",icon:o,title:n,href:b,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[o&&r.jsx(A,{loading:c,icon:o,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:b?r.jsx("a",{href:b,children:n}):n})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}a(t,"DashboardCard");const Zr={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},s=a(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=x({}),o=i?.filter(n=>n.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"CompanyDashboard"),m=a(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=x({}),o=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"PersonDashboard"),d=a(()=>{const{defaultAccount:e}=S({}),{items:i}=x({}),o=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--alerts-page",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"UserDashboard"),$r=["CompanyDashboard","PersonDashboard","UserDashboard"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
        <DashboardCard href="/iframe.html?id=demo-profile--alerts-page" icon={BellIcon as DashboardCardProps['icon']} title="Mine varslinger">
          <p>Mine varslingsadresser og varslinger per aktør.</p>
        </DashboardCard>
        <DashboardCard href="/iframe.html?id=demo-profile--settings-page" icon={CogIcon as DashboardCardProps['icon']} title="Innstillinger">
          <p>Kontaktinformasjon og andre innstillinger.</p>
        </DashboardCard>
      </Grid>
      <SettingsList items={filteredItems} />
    </PageBase>;
}`,...d.parameters?.docs?.source}}};export{s as CompanyDashboard,m as PersonDashboard,d as UserDashboard,$r as __namedExportsOrder,Zr as default};
