var v=Object.defineProperty;var a=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a6 as r,f as k}from"./iframe-BYGPhf7N.js";import{u as C,S as p}from"./useAdmin-Bh6Z9PXH.js";import{D as l}from"./DashboardHeader-Cko6xD-5.js";import{G as h}from"./Grid-BKhlqIi5.js";import{I as A}from"./ItemMedia-ApKMdvQL.js";import{H as P}from"./Heading-C5-vf6se.js";import{T as H}from"./Typography-BHNcIxxH.js";import{S as g}from"./HeartFill-Djummj3_.js";import{S as f}from"./Bell-BfrH_baH.js";import{S as u}from"./Cog-CMo2fSgJ.js";import{u as x}from"./useSettings-hyc6eNGK.js";import{P as D}from"./PageBase-CxZ8FIOJ.js";import{a as S}from"./useAccountMenu-EtfLqtMZ.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-r2OQI4uO.js";import"./SettingsItem-CrMyEmsf.js";import"./SettingsItemBase-pJ5WgIh7.js";import"./ChevronUp-C71MAo1t.js";import"./ChevronDown-DPBIQHio.js";import"./ChevronRight-BckCGbec.js";import"./ItemBase-q-LDfooT.js";import"./ItemLink-bFvWK9OW.js";import"./ItemControls-1sBh4pPD.js";import"./Badge-qi425Zbf.js";import"./Tooltip-egmjN7rU.js";import"./SettingsModal-Ocr_lCKp.js";import"./ModalBody-CY91l2Bs.js";import"./Section-BRaGuhHv.js";import"./Flex-DJhBIPT8.js";import"./Avatar-B_FLCNK9.js";import"./AvatarGroup-BKwaFY6K.js";import"./ButtonGroup-c8ZaNYEQ.js";import"./ButtonIcon-DdgcgrDi.js";import"./ButtonLabel-CfdqJJd8.js";import"./Input-C9cQp4bZ.js";import"./settlingsList.module-DvhJJNuI.js";import"./PersonGroup-Bxf-P3OI.js";import"./Database-BMzsn1eh.js";import"./ClockDashed-CuLyg4No.js";import"./localeSwitcher-BCkn9Xx-.js";import"./InboxFill-DWlAI5wH.js";import"./MenuGrid-CHEbnhS0.js";import"./MagnifyingGlass-u7KFDhSG.js";import"./Buildings2-BkCIy4EX.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-wTNP5JWn.js";import"./Trash-Aw4yKrn_.js";import"./useLayout-CAOUDQsd.js";import"./useLocale-DfM0gWBz.js";import"./header-D5drYKkj.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-B7c7eBDx.js";import"./Fieldset-e8AZdZvX.js";import"./TextField-DSU2FLcY.js";import"./FieldBase-eqne-WwB.js";import"./Field-CZH9Low_.js";import"./Label-DXziafiV.js";import"./Switch-c6ueHKpQ.js";import"./Paperplane-C51l_3Na.js";import"./Legend-Df1oEa8U.js";import"./Select-BkazksGF.js";import"./Hashtag-7DIUGeey.js";import"./Files-DigYcGXN.js";import"./TextareaField-CcAQkP7G.js";import"./ExternalLink-BoSLbAh-.js";import"./Bookmark-BxGJO_Zp.js";import"./Globe-MPkG4s1s.js";import"./PadlockLocked-Bkz-tLBk.js";import"./PersonRectangle-ClgSYPbC.js";import"./HardHat-DrrIJeHm.js";import"./Radio-aNyUJ6nL.js";const y="_icon_112og_1",B={icon:y};function o({color:e,theme:i="tinted",icon:n,title:t,href:b,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[n&&r.jsx(A,{loading:c,icon:n,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:b?r.jsx("a",{href:b,children:t}):t})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}a(o,"DashboardCard");const Yr={title:"Page/Dashboard/Dashboard",tags:["autodocs"],parameters:{},args:{}},s=a(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=x({}),n=i?.filter(t=>t.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:n})]})},"CompanyDashboard"),m=a(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=x({}),n=i?.filter(t=>t.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:n})]})},"PersonDashboard"),d=a(()=>{const{defaultAccount:e}=S({}),{items:i}=x({}),n=i?.filter(t=>t.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--notifications",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--profile-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:n})]})},"UserDashboard"),Zr=["CompanyDashboard","PersonDashboard","UserDashboard"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};export{s as CompanyDashboard,m as PersonDashboard,d as UserDashboard,Zr as __namedExportsOrder,Yr as default};
