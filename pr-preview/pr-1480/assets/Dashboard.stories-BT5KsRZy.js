var v=Object.defineProperty;var a=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a7 as r,f as k}from"./iframe-D6r7-MD4.js";import{u as C,S as p}from"./useAdmin-BGhnr_IJ.js";import{D as l}from"./DashboardHeader-CkCXpWa2.js";import{G as h}from"./Grid-DDphmLTt.js";import{I as A}from"./ItemMedia-CeccNKOc.js";import{H as P}from"./Heading-BBX9eyEy.js";import{T as H}from"./Typography-CHbDBJK8.js";import{S as g}from"./HeartFill-6Q0CsPxj.js";import{S as f}from"./Bell--e4uljyi.js";import{S as u}from"./Cog-C4m3l1LF.js";import{u as x}from"./useSettings-CnZeuPDO.js";import{P as D}from"./PageBase-BAUzD4k0.js";import{a as S}from"./useAccountMenu-DNv1VH71.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-BVbqxAfY.js";import"./SettingsItem-DRgIEsRj.js";import"./SettingsItemBase-CykaSvC5.js";import"./ChevronUp-o2c5iYOu.js";import"./ChevronDown-CA3F-CAN.js";import"./ChevronRight-B-ItEsH6.js";import"./ItemBase-CTt5NrfE.js";import"./ItemLink-C_nP4AK3.js";import"./ItemControls-Cgg9ynEC.js";import"./Badge-CP83yfsu.js";import"./Tooltip-CXVzZfKB.js";import"./SettingsModal-C3nFnbLP.js";import"./ModalBody-d0UpXorR.js";import"./Section-CZyWrzO9.js";import"./Flex-BbelGz4F.js";import"./Avatar-DRH-z-Xj.js";import"./AvatarGroup-Ba2zvAJ7.js";import"./ButtonGroup-Br96c_T4.js";import"./ButtonLabel-D2IlmIEz.js";import"./Input-CtcmBtOO.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-B8vVdqli.js";import"./PersonCircle-BedPTAn8.js";import"./Buildings2-LPZcIjTE.js";import"./InboxFill-8qZ2EuaI.js";import"./MenuGrid-BnpoElgk.js";import"./MagnifyingGlass-Bj8AyQob.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-DXFZnfLO.js";import"./Archive-BY-3YmHS.js";import"./Trash-DWkOlGVD.js";import"./PersonGroup-BYO-74It.js";import"./Database-Be1aARHi.js";import"./ClockDashed-8bhbX2BH.js";import"./useLayout-B2TpKIWb.js";import"./useLocale-CX_k4MBF.js";import"./header-DBmXoirO.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-ByiYciR_.js";import"./Fieldset-GW0eUCGC.js";import"./TextField-DN0N8XPX.js";import"./FieldBase-BsGJArhX.js";import"./Field-Des1xs_L.js";import"./Label-C4LgoAnx.js";import"./Switch-Tw7A9AdD.js";import"./Paperplane-DORBnYJm.js";import"./Legend-DZQVrLDt.js";import"./Select-BrNgDl3K.js";import"./Hashtag-40A5tKpU.js";import"./Files-dRTcCvjc.js";import"./TextareaField-CEdUIbjJ.js";import"./ExternalLink-BFFEPq-F.js";import"./Globe-DyYompeK.js";import"./PadlockLocked-Dddu5ZYz.js";import"./PersonRectangle-Bpd9vmae.js";import"./HardHat-BUvqcP8c.js";import"./Radio-BqdzJlpV.js";const y="_icon_112og_1",B={icon:y};function o({color:e,theme:i="tinted",icon:n,title:t,href:b,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[n&&r.jsx(A,{loading:c,icon:n,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:b?r.jsx("a",{href:b,children:t}):t})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}a(o,"DashboardCard");const Yr={title:"Page/Dashboard/Dashboard",tags:["autodocs"],parameters:{},args:{}},s=a(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=x({}),n=i?.filter(t=>t.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:n})]})},"CompanyDashboard"),m=a(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=x({}),n=i?.filter(t=>t.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:n})]})},"PersonDashboard"),d=a(()=>{const{defaultAccount:e}=S({}),{items:i}=x({}),n=i?.filter(t=>t.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--notifications",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--profile-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:n})]})},"UserDashboard"),Zr=["CompanyDashboard","PersonDashboard","UserDashboard"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
