import{p as r}from"./iframe-43_RSSTf.js";import{u as x,S as c}from"./useAdmin-BpKiuJqq.js";import{D as p}from"./DashboardHeader-BLMqKwiS.js";import{G as l}from"./Grid-C0bXXMQE.js";import{C as I}from"./tooltip-CaRi0lSN.js";import{I as v}from"./ItemMedia-C7TJfaPW.js";import{H as k}from"./Heading-2vQl8tBj.js";import{T as A}from"./Typography-Ct8ipg3s.js";import{S as h}from"./HeartFill-CK5ZP6qh.js";import{S as g}from"./Bell-OuASsAUs.js";import{S as f}from"./Cog-CVYugA4u.js";import{u}from"./useSettings-7n8IMXnZ.js";import{P as D}from"./PageBase-YwOI6whh.js";import{a as P}from"./useAccountMenu-C_gEjtMM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CwY-RffE.js";import"./useMenu-CLHDsGsG.js";import"./SettingsItem-C7MNkQHp.js";import"./SettingsItemBase-0pp7psHT.js";import"./ChevronUp-DrEXLnbF.js";import"./useId-BLkk23cI.js";import"./ChevronDown-DzTSEYyg.js";import"./ChevronRight-DXBQR3xu.js";import"./ItemBase-ByoSv5t_.js";import"./index-D9XEmR3s.js";import"./ItemLink-NtTBDy97.js";import"./ItemControls-DImp59Cc.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./SettingsModal-pzz_m3jh.js";import"./ModalBody-RXLH-EOA.js";import"./Section-i7Bzbjq_.js";import"./Flex-CbLPS6D2.js";import"./XMark-Baw5EL5c.js";import"./Icon-DxaOlqJE.js";import"./Skeleton-C5aNvb_u.js";import"./Avatar-B5wzfTza.js";import"./AvatarGroup-vsY4p1Py.js";import"./Button-B83AdZGF.js";import"./ButtonGroup-w02pJMP9.js";import"./ButtonIcon-wjUMimDA.js";import"./ButtonLabel-Db8R2o-l.js";import"./Input-B-eeYerN.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-CYMl9fs2.js";import"./PersonCircle-5C7xLqsV.js";import"./Buildings2-Chbhwy3k.js";import"./InboxFill-LO64aqnK.js";import"./MenuGrid-DpPBmXDm.js";import"./MagnifyingGlass-Bf1420VU.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-Dm5c54YI.js";import"./Archive-DejoCF8M.js";import"./Trash-sc3FQnLB.js";import"./PersonGroup-Bre-kyxt.js";import"./Database-ClJiawga.js";import"./ClockDashed-BtdrgYQX.js";import"./useLayout-Nuqq7Pvf.js";import"./useLocale-D2MMdEwB.js";import"./header-BnA0__0d.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-CH9gApkX.js";import"./Fieldset-C5LDAjlI.js";import"./TextField-C2NHcdr5.js";import"./FieldBase-DaCzydfk.js";import"./Label-DtAXMx4b.js";import"./Switch-YXKvHF1V.js";import"./Paperplane-DLz2JoiC.js";import"./Legend-aOViquXA.js";import"./Select-CLdkoxim.js";import"./Hashtag-Cc1KsJ_c.js";import"./Files-BeEKNftm.js";import"./TextareaField-BKTYtcWw.js";import"./ExternalLink-DvK22Fss.js";import"./Globe-DE_rqwfk.js";import"./PersonRectangle-BLybiR7D.js";import"./HardHat-BAEdJAY8.js";import"./Radio-ALhL-rDH.js";const H="_icon_112og_1",S={icon:H};function i({color:e,theme:a="tinted",icon:t,title:o,href:b,children:C,loading:d,className:j}){return r.jsxs(I,{"data-color":e,variant:a,className:j,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(v,{loading:d,icon:t,className:S.icon}),r.jsx(k,{size:"lg",loading:d,children:b?r.jsx("a",{href:b,children:o}):o})]}),r.jsx(A,{size:"sm",loading:d,children:C})]})}const ee={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},s=()=>{const{currentAccount:e}=x({defaultAccountId:"diaspora"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},n=()=>{const{currentAccount:e}=x({defaultAccountId:"freyr"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},m=()=>{const{defaultAccount:e}=P({}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-profile--accounts-page",icon:h,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--alerts-page",icon:g,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(c,{items:t})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const ie=["CompanyDashboard","PersonDashboard","UserDashboard"];export{s as CompanyDashboard,n as PersonDashboard,m as UserDashboard,ie as __namedExportsOrder,ee as default};
