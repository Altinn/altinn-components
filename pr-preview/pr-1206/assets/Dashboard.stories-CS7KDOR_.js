import{j as r}from"./iframe-CdkbiINU.js";import{u as x,S as c}from"./useAdmin-DU2mc1Qp.js";import{D as p}from"./DashboardHeader-DUqOGTWp.js";import{G as l}from"./Grid-Brq5aebh.js";import{o as I}from"./tooltip-ClrKYCC2.js";import{I as v}from"./ItemMedia-Mj1KUH0F.js";import{H as k}from"./Heading-pV_B_Yzg.js";import{T as A}from"./Typography-CbNgqrog.js";import{a as h}from"./HeartFill-vVx3GXlt.js";import{S as g}from"./Bell-rY58_Vrj.js";import{S as f}from"./Cog-D2TdgDK8.js";import{u}from"./useSettings-Bere9QM8.js";import{P as D}from"./PageBase-Da9eaYxe.js";import{a as P}from"./useAccountMenu-RyIUwxtk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4P432Vi.js";import"./useMenu-Cw7IEDma.js";import"./SettingsItem-C9R93uqE.js";import"./SettingsItemBase-zrEv8Gr_.js";import"./ChevronUp-zAhIBGoC.js";import"./useId-BBNwfwR-.js";import"./ChevronDown-DqPtLl_G.js";import"./ChevronRight-WcqCaCSB.js";import"./ItemLink-uRj7Y6jT.js";import"./index-ClUlC5r_.js";import"./ItemControls-2WNlOUKw.js";import"./Badge-Nnj4VnpH.js";import"./Tooltip-CkfZKf5K.js";import"./SettingsModal-p1UGJMFY.js";import"./ModalBody-B1FGT2pR.js";import"./Section-CxpgG4VY.js";import"./Flex-B60SO79o.js";import"./XMark-CXTea0I2.js";import"./Icon-Cn1mWE7M.js";import"./Skeleton-DNrLKFK9.js";import"./Avatar-Dqj4y4ce.js";import"./AvatarGroup-XhgZMwS_.js";import"./Button-DbqBa2Ra.js";import"./ButtonGroup-rFZEcV2R.js";import"./ButtonIcon-CyqeVLbn.js";import"./ButtonLabel-BTmVkbIz.js";import"./Input-CXgAq3E9.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-tgsqT7sD.js";import"./PersonCircle-LFFErccD.js";import"./Buildings2-B6DX2ZbA.js";import"./InboxFill-DVVOb2iZ.js";import"./MenuGrid-CY0Q_UsS.js";import"./MagnifyingGlass-MF_Zjyww.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-DvWCxKLU.js";import"./Archive-5hJJ1NJt.js";import"./Trash-D4pY1Rc-.js";import"./PersonGroup-Dn2Wct2V.js";import"./Database-DaDjpEzF.js";import"./ClockDashed-Da5zW20o.js";import"./useLayout-DgFkx46j.js";import"./useLocale-D3mY-h9s.js";import"./header-C6PCT9u1.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-Z8eL_Nst.js";import"./Fieldset-CiaDAd-z.js";import"./TextField-B9cNHav0.js";import"./FieldBase-CADFK9ds.js";import"./Label-DOiiUdXJ.js";import"./Switch-Cw7IuUMn.js";import"./Paperplane-CVdaTiyZ.js";import"./Legend-DK2YFRd_.js";import"./Select-CLzeIvF_.js";import"./Hashtag-D8Zw4pOb.js";import"./Files-Cf3XZkhL.js";import"./TextareaField-BVooByg5.js";import"./ExternalLink-D2SzEPmr.js";import"./Globe-fe3HaoO0.js";import"./PersonRectangle-kU3bEajl.js";import"./HardHat-BM1Dg7NC.js";import"./Radio-su5EbvLM.js";const H="_icon_112og_1",y={icon:H};function i({color:e,theme:a="tinted",icon:t,title:o,href:b,children:j,loading:d,className:C}){return r.jsxs(I,{"data-color":e,variant:a,className:C,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(v,{loading:d,icon:t,className:y.icon}),r.jsx(k,{size:"lg",loading:d,children:b?r.jsx("a",{href:b,children:o}):o})]}),r.jsx(A,{size:"sm",loading:d,children:j})]})}const re={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},s=()=>{const{currentAccount:e}=x({defaultAccountId:"diaspora"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},n=()=>{const{currentAccount:e}=x({defaultAccountId:"freyr"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},m=()=>{const{defaultAccount:e}=P({}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-profile--accounts-page",icon:h,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--alerts-page",icon:g,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(c,{items:t})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
