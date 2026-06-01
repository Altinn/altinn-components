import{p as r}from"./iframe-HmDeAVAp.js";import{u as x,S as c}from"./useAdmin-DlHpmPC5.js";import{D as p}from"./DashboardHeader-CRB4H2G3.js";import{G as l}from"./Grid-CMplBQo2.js";import{C as I}from"./tooltip-DaXe8rKK.js";import{I as v}from"./ItemMedia-CLlob8fs.js";import{H as k}from"./Heading-CYuK0FXt.js";import{T as A}from"./Typography-C3y2BBzr.js";import{S as h}from"./HeartFill-F6kflSFE.js";import{S as g}from"./Bell-OUyuKCV8.js";import{S as f}from"./Cog-DuYuvZcc.js";import{u}from"./useSettings-DaTmS5oG.js";import{P as D}from"./PageBase-DIs_1Ar7.js";import{a as P}from"./useAccountMenu-D7vno3IW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-4vigTm9p.js";import"./useMenu-l9Wd3rxx.js";import"./SettingsItem-CWr_X-jX.js";import"./SettingsItemBase-xPZwhobn.js";import"./ChevronUp-DWlUIEYm.js";import"./useId-BNhfXdUV.js";import"./ChevronDown-D8XmQ_JM.js";import"./ChevronRight-Cqfpq8PE.js";import"./ItemBase-p8rf4Jdz.js";import"./index-CDtevUxF.js";import"./ItemLink-DyGCCHkK.js";import"./ItemControls-dRm3u7Mm.js";import"./Badge-DVsrmVw9.js";import"./Tooltip-DFVNjhLt.js";import"./SettingsModal-CygK-Zxf.js";import"./ModalBody-HgcUYgus.js";import"./Section-0rDkal-t.js";import"./Flex-CKAWkLAd.js";import"./XMark-DFSmJjac.js";import"./Icon-DE5JaAj2.js";import"./Skeleton-C_Dxe6ID.js";import"./Avatar-CUX9SLHz.js";import"./AvatarGroup-CpvcYsvD.js";import"./Button-SB9AH0kY.js";import"./ButtonGroup-IIZdVlDD.js";import"./ButtonIcon-CIUJ6U7l.js";import"./ButtonLabel-fQ3RMke8.js";import"./Input-Dd7kdPyi.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-DxGEj0TB.js";import"./PersonCircle-CNe7iw6a.js";import"./Buildings2-C4jzAZ1_.js";import"./InboxFill-DyosbqVC.js";import"./MenuGrid-CTrdV62x.js";import"./MagnifyingGlass-BBPHMis4.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-WP4RvwzF.js";import"./Archive-DP3tiXIo.js";import"./Trash-DTo3Lvzs.js";import"./PersonGroup-DMS_bv7B.js";import"./Database-ByDPtTtb.js";import"./ClockDashed-DPb7YX4C.js";import"./useLayout-C-QeVy89.js";import"./useLocale-DCCg7QrN.js";import"./header-CSj4CAVu.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-CVbcsWEJ.js";import"./Fieldset-CwIulh6B.js";import"./TextField-CQ0deXKf.js";import"./FieldBase-DgiW3HLY.js";import"./Field-D-jjHIb3.js";import"./Label-Bwfk_b4F.js";import"./Switch-BqrMYGGB.js";import"./Paperplane-Dy6wWHaf.js";import"./Legend-CxTMulRW.js";import"./Select-C0-7yvHH.js";import"./Hashtag-sbESJ2nh.js";import"./Files-FdN32_BN.js";import"./TextareaField-CNfBimxQ.js";import"./ExternalLink-Xh3ioknd.js";import"./Globe-BEIMQJ4I.js";import"./PersonRectangle-Go-Ej2IO.js";import"./HardHat-CAguIbUL.js";import"./Radio-BYmvpS98.js";const H="_icon_112og_1",S={icon:H};function i({color:e,theme:a="tinted",icon:t,title:o,href:b,children:C,loading:d,className:j}){return r.jsxs(I,{"data-color":e,variant:a,className:j,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(v,{loading:d,icon:t,className:S.icon}),r.jsx(k,{size:"lg",loading:d,children:b?r.jsx("a",{href:b,children:o}):o})]}),r.jsx(A,{size:"sm",loading:d,children:C})]})}const ie={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},s=()=>{const{currentAccount:e}=x({defaultAccountId:"diaspora"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},n=()=>{const{currentAccount:e}=x({defaultAccountId:"freyr"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},m=()=>{const{defaultAccount:e}=P({}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-profile--accounts-page",icon:h,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--alerts-page",icon:g,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(c,{items:t})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const te=["CompanyDashboard","PersonDashboard","UserDashboard"];export{s as CompanyDashboard,n as PersonDashboard,m as UserDashboard,te as __namedExportsOrder,ie as default};
