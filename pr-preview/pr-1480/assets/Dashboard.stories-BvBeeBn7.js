var v=Object.defineProperty;var a=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a6 as r,f as k}from"./iframe-M-0W2Kc9.js";import{u as C,S as p}from"./useAdmin-BG7g4Nq4.js";import{D as l}from"./DashboardHeader-HQWgC4hl.js";import{G as h}from"./Grid-BLFGLZwH.js";import{I as A}from"./ItemMedia-BNntQAQS.js";import{H as P}from"./Heading-BiiiOHzW.js";import{T as H}from"./Typography-xHph4zf_.js";import{S as g}from"./HeartFill-CR39zrNl.js";import{S as f}from"./Bell-DWIt3W7G.js";import{S as u}from"./Cog-De_PprxQ.js";import{u as x}from"./useSettings-DN8pTgWU.js";import{P as D}from"./PageBase-BDisxRkj.js";import{a as S}from"./useAccountMenu-_vjgMLUi.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-D1I6Xbj7.js";import"./SettingsItem-C4hV6YpS.js";import"./SettingsItemBase-BCTOKKcn.js";import"./ChevronUp-D7bAfZe9.js";import"./ChevronDown-oFv1HZMB.js";import"./ChevronRight-e5zm3v6Y.js";import"./ItemBase-F0Gk4WOT.js";import"./ItemLink-CCAm3_Nh.js";import"./ItemControls-CUY2SrAL.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./SettingsModal-QTOJw0zh.js";import"./ModalBody-D2JzRsow.js";import"./Section-BRRFv94H.js";import"./Flex-CvQqYnnc.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./ButtonGroup-C-A48uAy.js";import"./ButtonIcon-B0Ww61Ca.js";import"./ButtonLabel-DaZOBcYC.js";import"./Input-PR-EPUfC.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-Bte7cBv5.js";import"./PersonCircle-CBGrcbP_.js";import"./Buildings2-YNhXlUod.js";import"./InboxFill-Chtb-S2w.js";import"./MenuGrid-BfyJFOaJ.js";import"./MagnifyingGlass-BCQWJszI.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-Bjnly7uL.js";import"./Archive-BppFJWLm.js";import"./Trash-DszqcR2r.js";import"./PersonGroup-BQl8N5MU.js";import"./Database-C3XukllD.js";import"./ClockDashed-CE3rKYo4.js";import"./useLayout-BZGgrSK_.js";import"./useLocale-BvsW5Ys3.js";import"./header-DZ2lWmTS.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-DPRacH3N.js";import"./Fieldset-Bscmb-Eq.js";import"./TextField-CHQPvnNv.js";import"./FieldBase-Bv-PdLp_.js";import"./Field-CJDObndh.js";import"./Label-BfAsqjGj.js";import"./Switch-rSPs52No.js";import"./Paperplane-Bu_TRwc-.js";import"./Legend-Wj_Lwr-W.js";import"./Select-CTQ6TQXy.js";import"./Hashtag-CRo9Rd7e.js";import"./Files-D24Nxx7v.js";import"./TextareaField-BiK0KV8X.js";import"./ExternalLink-Bj_4iRTy.js";import"./Globe-BsQeD7rm.js";import"./PadlockLocked-C8bkxdSC.js";import"./PersonRectangle-DHBy95vH.js";import"./HardHat-CocVQ35i.js";import"./Radio-Blv9m_Aq.js";const y="_icon_112og_1",B={icon:y};function o({color:e,theme:i="tinted",icon:t,title:n,href:b,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(A,{loading:c,icon:t,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:b?r.jsx("a",{href:b,children:n}):n})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}a(o,"DashboardCard");const Zr={title:"Page/Dashboard/Dashboard",tags:["autodocs"],parameters:{},args:{}},s=a(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"CompanyDashboard"),m=a(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"PersonDashboard"),d=a(()=>{const{defaultAccount:e}=S({}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--notifications",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--profile-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"UserDashboard"),$r=["CompanyDashboard","PersonDashboard","UserDashboard"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
