import{a7 as r,f as I}from"./iframe-DWR_BPge.js";import{u as x,S as c}from"./useAdmin-CbwA7zjp.js";import{D as p}from"./DashboardHeader-D9Kj9p2N.js";import{G as l}from"./Grid-B01QAGVn.js";import{I as v}from"./ItemMedia-CNbHl28k.js";import{H as k}from"./Heading-DZv3ITVf.js";import{T as A}from"./Typography-Ck9DnhQz.js";import{S as h}from"./HeartFill-fRtY9Ved.js";import{S as g}from"./Bell-CNwaOF5z.js";import{S as f}from"./Cog-rzggeVTw.js";import{u}from"./useSettings-CsXnRB79.js";import{P as D}from"./PageBase-DT7QQcgC.js";import{a as P}from"./useAccountMenu-BUhzrhNb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cf984nsL.js";import"./useMenu-D6mVZHWX.js";import"./SettingsItem-BaQWAhOp.js";import"./SettingsItemBase-ucDTJ2CS.js";import"./ChevronUp-B_nN6-rE.js";import"./ChevronDown-DyMHpH4k.js";import"./ChevronRight-Byhvri5k.js";import"./ItemBase-Cw7jbG4w.js";import"./ItemLink-DjqXhCHd.js";import"./ItemControls-BuEVWR3X.js";import"./Badge-DkIfMZHe.js";import"./Tooltip-DTF1wjLo.js";import"./SettingsModal-B9paxYpJ.js";import"./ModalBody-TFV96CG9.js";import"./Section-BCFzX2B1.js";import"./Flex-6ZJb0CGr.js";import"./Avatar-Cok-GZxK.js";import"./AvatarGroup-CXLQt8Ir.js";import"./ButtonGroup-BQ7wgDtN.js";import"./ButtonIcon-CMheF9Lh.js";import"./ButtonLabel-VQkVwOaH.js";import"./Input-_0Vw9ldu.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-yo8b4zDp.js";import"./PersonCircle-DvPby5ZL.js";import"./Buildings2-Bsk7OURA.js";import"./InboxFill-BSccVKoO.js";import"./MenuGrid-DM9DMxk5.js";import"./MagnifyingGlass-G_PIqG58.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CIzhTlww.js";import"./Archive-t07JtCRk.js";import"./Trash-D3VLDrQo.js";import"./PersonGroup-CcFhOxrl.js";import"./Database-nUvrsebp.js";import"./ClockDashed-BuHgNuyH.js";import"./useLayout-CQS2umG3.js";import"./useLocale-DJa2LSIP.js";import"./header-DAalrbo9.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-CxSGKcWS.js";import"./Fieldset-CmPgreUf.js";import"./TextField-CnsffK4d.js";import"./FieldBase-BMAVe4Iy.js";import"./Field-Ck35a6Qp.js";import"./Label-BsbeMro6.js";import"./Switch-Cw7BxWBg.js";import"./Paperplane-wchV-Xu8.js";import"./Legend-DhWrJnYZ.js";import"./Select-IT9o9CXh.js";import"./Hashtag-DF_lmshc.js";import"./Files-DX1M06Ks.js";import"./TextareaField-7b40v-w1.js";import"./ExternalLink-BkaNO1qO.js";import"./Globe-C2nJg-Wj.js";import"./PersonRectangle-B6jvBdeH.js";import"./HardHat-DONUxHlC.js";import"./Radio-Dgw-6Sst.js";const H="_icon_112og_1",S={icon:H};function i({color:e,theme:a="tinted",icon:t,title:o,href:b,children:C,loading:d,className:j}){return r.jsxs(I,{"data-color":e,variant:a,className:j,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(v,{loading:d,icon:t,className:S.icon}),r.jsx(k,{size:"lg",loading:d,children:b?r.jsx("a",{href:b,children:o}):o})]}),r.jsx(A,{size:"sm",loading:d,children:C})]})}const Wr={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},s=()=>{const{currentAccount:e}=x({defaultAccountId:"diaspora"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},n=()=>{const{currentAccount:e}=x({defaultAccountId:"freyr"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},m=()=>{const{defaultAccount:e}=P({}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-profile--accounts-page",icon:h,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--alerts-page",icon:g,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(c,{items:t})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Xr=["CompanyDashboard","PersonDashboard","UserDashboard"];export{s as CompanyDashboard,n as PersonDashboard,m as UserDashboard,Xr as __namedExportsOrder,Wr as default};
