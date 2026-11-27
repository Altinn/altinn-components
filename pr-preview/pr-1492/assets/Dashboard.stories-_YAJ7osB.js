var v=Object.defineProperty;var a=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a6 as r,f as k}from"./iframe-DS_59AwM.js";import{u as C,S as p}from"./useAdmin-dqTITLLh.js";import{D as l}from"./DashboardHeader-7NFUiSpR.js";import{G as h}from"./Grid-CNpRVkB2.js";import{I as A}from"./ItemMedia-CcjWIfuL.js";import{H as P}from"./Heading-BZMLDowx.js";import{T as H}from"./Typography-DXt4lEYU.js";import{S as g}from"./HeartFill-BrIW_AfX.js";import{S as f}from"./Bell-DULJ5NX_.js";import{S as u}from"./Cog-ChivtBVm.js";import{u as x}from"./useSettings-Bb6r3_Uy.js";import{P as D}from"./PageBase-YImES81T.js";import{a as S}from"./useAccountMenu-CiqfZgO1.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-30LDsNSn.js";import"./SettingsItem-ExZhZ1dg.js";import"./SettingsItemBase-8GjNQu7K.js";import"./ChevronUp-DZ6JxO9u.js";import"./ChevronDown-CX1A4zpd.js";import"./ChevronRight-C7PJPgHr.js";import"./ItemBase-BrUL2VDB.js";import"./ItemLink-BrauzxFU.js";import"./ItemControls-C2ZClT3B.js";import"./Badge-CF5PgN9h.js";import"./Tooltip-BBICM8wr.js";import"./SettingsModal-C-3qMdZ6.js";import"./ModalBody-DwWBi8_C.js";import"./Section-C50awZDU.js";import"./Flex-kHR-J2An.js";import"./Avatar-DsQCNXZF.js";import"./AvatarGroup-yHV_WJhD.js";import"./ButtonGroup-BVrUrJIV.js";import"./ButtonIcon-DfIk3itr.js";import"./ButtonLabel-CM1BrYjJ.js";import"./Input-3GNdcrOi.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-DFBTjtgP.js";import"./PersonCircle-DSk0oNxz.js";import"./Buildings2-csFrmVqP.js";import"./InboxFill-BFZrrmB7.js";import"./MenuGrid-BViEhOfD.js";import"./MagnifyingGlass-l1_f6IJo.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-C5zK9N2t.js";import"./Archive-BRmXGBJj.js";import"./Trash-CqvnIlMZ.js";import"./PersonGroup-C9CtkzP0.js";import"./Database-BdlRVAUP.js";import"./ClockDashed-CJPcObAR.js";import"./useLayout-xnkjj_-v.js";import"./useLocale-D_2mvdEX.js";import"./header-cIQVq8Pp.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-Ba9mKwdy.js";import"./Fieldset-Ac7nZuVN.js";import"./TextField-D4axFbpH.js";import"./FieldBase-Bv1sQ0dY.js";import"./Field-DAFUCo_M.js";import"./Label-BBg6DFs6.js";import"./Switch-UOM24JjQ.js";import"./Paperplane-CgmzB8bH.js";import"./Legend-r9lVEPQS.js";import"./Select-BegMR9Dk.js";import"./Hashtag-CHGcE4Te.js";import"./Files-CFLdt85H.js";import"./TextareaField-Bf0EYf2w.js";import"./ExternalLink-BCIvuavu.js";import"./Globe-CZo01Odx.js";import"./PadlockLocked-DPkxBXze.js";import"./PersonRectangle-DobBhxoi.js";import"./HardHat-BlBIHh8j.js";import"./Radio-BqGzGcrM.js";const y="_icon_112og_1",B={icon:y};function o({color:e,theme:i="tinted",icon:t,title:n,href:b,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(A,{loading:c,icon:t,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:b?r.jsx("a",{href:b,children:n}):n})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}a(o,"DashboardCard");const Zr={title:"Page/Dashboard/Dashboard",tags:["autodocs"],parameters:{},args:{}},s=a(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"CompanyDashboard"),m=a(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"PersonDashboard"),d=a(()=>{const{defaultAccount:e}=S({}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--notifications",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--profile-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"UserDashboard"),$r=["CompanyDashboard","PersonDashboard","UserDashboard"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
