import{j as r}from"./iframe-BM6RZuQM.js";import{u as x,S as c}from"./useAdmin-CrZeAec8.js";import{D as p}from"./DashboardHeader-D3evBIwD.js";import{G as l}from"./Grid-D0AZoB8p.js";import{o as I}from"./tooltip-DKLQ4JCb.js";import{I as v}from"./ItemMedia-qdtGx-k7.js";import{H as k}from"./Heading-aHWaPGZz.js";import{T as A}from"./Typography-CXaseqiH.js";import{a as h}from"./HeartFill-C0v9J4kN.js";import{S as g}from"./Bell-Bdcl3ieI.js";import{S as f}from"./Cog-ZcPMYDbZ.js";import{u}from"./useSettings-Cr4EmJ5x.js";import{P as D}from"./PageBase-Bdd_NXuX.js";import{a as P}from"./useAccountMenu-R2DlDLLf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CvxbdxgD.js";import"./useMenu-DmjwUxq0.js";import"./SettingsItem-BJXE-SrF.js";import"./SettingsItemBase-wy81PUWi.js";import"./ChevronUp-CLlFINM4.js";import"./useId-BYt_OYJh.js";import"./ChevronDown-DYIPhVz6.js";import"./ChevronRight-B7KHdEb3.js";import"./ItemLink-ADNTAdax.js";import"./index-DAnedVDn.js";import"./ItemControls-DdRx042_.js";import"./Badge-QT5oZygk.js";import"./Tooltip-BxiimWqz.js";import"./SettingsModal-D-ZvKL37.js";import"./ModalBody-tg8E7uYI.js";import"./Section-h9TGEdkh.js";import"./Flex-DCHL4VAz.js";import"./XMark-EbOSJv8a.js";import"./Icon-m3ZEAfHU.js";import"./Skeleton-DWzjK3h6.js";import"./Avatar-P_Ikblul.js";import"./AvatarGroup-pynF50Va.js";import"./Button-DhtPu9_Y.js";import"./ButtonGroup-DLPKqiPP.js";import"./ButtonIcon-Cvxr_Dcd.js";import"./ButtonLabel-DbDYSY1l.js";import"./Input-DsxiHlOc.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-BGPqSz8E.js";import"./PersonCircle-DN7g7QG1.js";import"./Buildings2-DPJaWJUP.js";import"./InboxFill-CoU3DNM4.js";import"./MenuGrid-B2fy_4CU.js";import"./MagnifyingGlass-D8QlnKcL.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BjY-XLx0.js";import"./Archive-DxmrpUmh.js";import"./Trash-CeRRfZXt.js";import"./PersonGroup-CQhE5LWM.js";import"./Database-M7Gz5mtY.js";import"./ClockDashed-sGix1zSO.js";import"./useLayout-BHv6aN6B.js";import"./useLocale-Dq8Iiold.js";import"./header-CiD1VSCk.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-Ctq_ta7p.js";import"./Fieldset-N-D1ZQgj.js";import"./TextField-D940yGFY.js";import"./FieldBase-lFVyN1xh.js";import"./Label-C7IFl0uM.js";import"./Switch-D6evj3r2.js";import"./Paperplane-LzFu_jMU.js";import"./Legend-KFOq5Rwt.js";import"./Select-CcJ8SKfy.js";import"./Hashtag-CJ--GRpf.js";import"./Files-BLJogD_w.js";import"./TextareaField-BRmQ7Vt0.js";import"./ExternalLink-CHL3vkFF.js";import"./Globe-BWe6SIwi.js";import"./PersonRectangle-BooMs9Rs.js";import"./HardHat-tItw7pTN.js";import"./Radio-BnR_6uc8.js";const H="_icon_112og_1",y={icon:H};function i({color:e,theme:a="tinted",icon:t,title:o,href:b,children:j,loading:d,className:C}){return r.jsxs(I,{"data-color":e,variant:a,className:C,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(v,{loading:d,icon:t,className:y.icon}),r.jsx(k,{size:"lg",loading:d,children:b?r.jsx("a",{href:b,children:o}):o})]}),r.jsx(A,{size:"sm",loading:d,children:j})]})}const re={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},s=()=>{const{currentAccount:e}=x({defaultAccountId:"diaspora"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},n=()=>{const{currentAccount:e}=x({defaultAccountId:"freyr"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},m=()=>{const{defaultAccount:e}=P({}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-profile--accounts-page",icon:h,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--alerts-page",icon:g,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(c,{items:t})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const ee=["CompanyDashboard","PersonDashboard","UserDashboard"];export{s as CompanyDashboard,n as PersonDashboard,m as UserDashboard,ee as __namedExportsOrder,re as default};
