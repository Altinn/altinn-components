var v=Object.defineProperty;var a=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a6 as r,f as k}from"./iframe-CmRPDbOf.js";import{u as C,S as p}from"./useAdmin-DVEC-x5Z.js";import{D as l}from"./DashboardHeader-BNyLzym4.js";import{G as h}from"./Grid-DIdGyEiz.js";import{I as A}from"./ItemMedia-BANum1kS.js";import{H as P}from"./Heading-Bga8Ehqe.js";import{T as H}from"./Typography-3Ni-pGxm.js";import{S as g}from"./HeartFill-BrWfX2ow.js";import{S as f}from"./Bell-CcxSUtBz.js";import{S as u}from"./Cog-DpnaWjbl.js";import{u as x}from"./useSettings-Tu9en4Td.js";import{P as D}from"./PageBase-Cf8U6Wq_.js";import{a as S}from"./useAccountMenu-BYpZZcV3.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-Dthlol8g.js";import"./SettingsItem-CyuFgI4G.js";import"./SettingsItemBase-g7FynA0W.js";import"./ChevronUp-Du7zJIj-.js";import"./ChevronDown-DDaXyD9m.js";import"./ChevronRight-DUgz5ktQ.js";import"./ItemBase-BsdSxlJi.js";import"./ItemLink-BbfZb6VU.js";import"./ItemControls-CjzJ0cx0.js";import"./Badge-v2cVTzHM.js";import"./Tooltip-68erwe8G.js";import"./SettingsModal-CEuFBG6Q.js";import"./ModalBody-MM25gKZr.js";import"./Section-BoLEShm2.js";import"./Flex-CHIj3aXb.js";import"./Avatar-CwlqlX3p.js";import"./AvatarGroup-CLRHdYA5.js";import"./ButtonGroup-Cg6ykbdg.js";import"./ButtonIcon-CNrehQ60.js";import"./ButtonLabel-B207nJqR.js";import"./Input-SsfERmB5.js";import"./settlingsList.module-DvhJJNuI.js";import"./PersonGroup-DT6ZT_45.js";import"./Database-DWZkaKzo.js";import"./ClockDashed-DoZCcm3C.js";import"./localeSwitcher-C3Jstk8I.js";import"./InboxFill-C-y88DAH.js";import"./MenuGrid-CHOSeooe.js";import"./MagnifyingGlass-CwhdRafK.js";import"./Buildings2-N07gQ7vJ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-Czt8xJzv.js";import"./Trash-BLtAnUoG.js";import"./useLayout-C26j3cNh.js";import"./useLocale-BFWthnKR.js";import"./header-FmwbDT6K.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-DjvNujh0.js";import"./Fieldset-Db_uOtwo.js";import"./TextField-BmqYfvA4.js";import"./FieldBase-uTfpYKlO.js";import"./Field-BGZ86hwn.js";import"./Label-DME-k-qs.js";import"./Switch-ClafsxpZ.js";import"./Paperplane-kh9Ln9kF.js";import"./Legend-Dx3EaSUJ.js";import"./Select-Ctec77DV.js";import"./Hashtag-DmbYOKVk.js";import"./Files-CpMc5dKU.js";import"./TextareaField-VpPCe9Tb.js";import"./ExternalLink-upvh_9KK.js";import"./Bookmark-jlJzyw-m.js";import"./Globe-uYgrsE93.js";import"./PadlockLocked-J-u0-msW.js";import"./PersonRectangle-CmGI8fhe.js";import"./HardHat-VRk6WN9h.js";import"./Radio-C_mMYnXS.js";const y="_icon_112og_1",B={icon:y};function o({color:e,theme:i="tinted",icon:n,title:t,href:b,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[n&&r.jsx(A,{loading:c,icon:n,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:b?r.jsx("a",{href:b,children:t}):t})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}a(o,"DashboardCard");const Yr={title:"Page/Dashboard/Dashboard",tags:["autodocs"],parameters:{},args:{}},s=a(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=x({}),n=i?.filter(t=>t.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:n})]})},"CompanyDashboard"),m=a(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=x({}),n=i?.filter(t=>t.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:n})]})},"PersonDashboard"),d=a(()=>{const{defaultAccount:e}=S({}),{items:i}=x({}),n=i?.filter(t=>t.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--notifications",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--profile-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:n})]})},"UserDashboard"),Zr=["CompanyDashboard","PersonDashboard","UserDashboard"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
