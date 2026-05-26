import{j as r}from"./iframe-DU0n7__8.js";import{u as x,S as c}from"./useAdmin-lwQsSdGG.js";import{D as p}from"./DashboardHeader-CQKlLyJT.js";import{G as l}from"./Grid-j8at4osN.js";import{o as I}from"./tooltip-UENHGvJl.js";import{I as v}from"./ItemMedia-yH6oBbwQ.js";import{H as k}from"./Heading-BrrIdLRc.js";import{T as A}from"./Typography-DOUoXZCv.js";import{a as h}from"./HeartFill-CtZjD9gP.js";import{S as g}from"./Bell-BcvPsB0o.js";import{S as f}from"./Cog-D0c3gGJd.js";import{u}from"./useSettings-D9X8TxqU.js";import{P as D}from"./PageBase-Dh04bbNa.js";import{a as P}from"./useAccountMenu-B1Kjloif.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cyw62YTk.js";import"./useMenu-CrvHU43k.js";import"./SettingsItem-CDCQGE9p.js";import"./SettingsItemBase-DMrHKdiZ.js";import"./ChevronUp-B4O89os7.js";import"./useId-DCXiBgwp.js";import"./ChevronDown-Bfnu4XYc.js";import"./ChevronRight-B4fDZY6k.js";import"./ItemLink-B8GeE3YY.js";import"./index-sAFX08uI.js";import"./ItemControls-BwQhe1K-.js";import"./Badge-DWaei4kj.js";import"./Tooltip-DMnOwjPw.js";import"./SettingsModal-DHjDeK3E.js";import"./ModalBody-DelIgQsz.js";import"./Section-DwU7Gyqo.js";import"./Flex-C_O_eubX.js";import"./XMark-DGVnrVrT.js";import"./Icon-Dg7nJLrw.js";import"./Skeleton-etbnaSOo.js";import"./Avatar-Bsgd2iIp.js";import"./AvatarGroup-BpsuUsFp.js";import"./Button-pXyw-iqn.js";import"./ButtonGroup-rBVDnBd_.js";import"./ButtonIcon-FC_tMBA0.js";import"./ButtonLabel-DfiBlqye.js";import"./Input-Cjh3ClWU.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-v0OSVy5N.js";import"./PersonCircle-C5Yra1cm.js";import"./Buildings2-BAJoSK4H.js";import"./InboxFill-BY9s4Eha.js";import"./MenuGrid-CH-9RbmU.js";import"./MagnifyingGlass-COVfkIqf.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CKXgK4eW.js";import"./Archive-BK5DGjhH.js";import"./Trash-MdbyzcW1.js";import"./PersonGroup-BAzEPzjh.js";import"./Database-siVZgy6e.js";import"./ClockDashed-BJpd6pOc.js";import"./useLayout-BhWJPcfn.js";import"./useLocale-CXdyMocm.js";import"./header-hSXwTL6l.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-Wa_y882s.js";import"./Fieldset-CU0WOUwA.js";import"./TextField-Dl9QfE1k.js";import"./FieldBase-BIV16XC5.js";import"./Label-DSFEyVbW.js";import"./Switch-CRWhuB4h.js";import"./Paperplane-CrAbUjrX.js";import"./Legend-CndyWw5G.js";import"./Select-DSgvyOJm.js";import"./Hashtag-A8SC9ssc.js";import"./Files-DRXx6mX2.js";import"./TextareaField-BJJ8HT99.js";import"./ExternalLink-Biof14vD.js";import"./Globe-03FCv489.js";import"./PersonRectangle-DslZTTZw.js";import"./HardHat-BDwmupe5.js";import"./Radio-qbYA11Ad.js";const H="_icon_112og_1",y={icon:H};function i({color:e,theme:a="tinted",icon:t,title:o,href:b,children:j,loading:d,className:C}){return r.jsxs(I,{"data-color":e,variant:a,className:C,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(v,{loading:d,icon:t,className:y.icon}),r.jsx(k,{size:"lg",loading:d,children:b?r.jsx("a",{href:b,children:o}):o})]}),r.jsx(A,{size:"sm",loading:d,children:j})]})}const re={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},s=()=>{const{currentAccount:e}=x({defaultAccountId:"diaspora"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},n=()=>{const{currentAccount:e}=x({defaultAccountId:"freyr"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},m=()=>{const{defaultAccount:e}=P({}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-profile--accounts-page",icon:h,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--alerts-page",icon:g,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(c,{items:t})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
