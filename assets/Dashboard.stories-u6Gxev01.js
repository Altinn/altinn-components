var v=Object.defineProperty;var a=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a5 as r,e as k}from"./iframe-BfD7syly.js";import{u as C,S as p}from"./useAdmin-BD8qaTLG.js";import{D as l}from"./DashboardHeader-B8aA7bSh.js";import{G as h}from"./Grid-DMgp28Z-.js";import{I as A}from"./ItemMedia-DHigLupS.js";import{H as P}from"./Heading-M_gD0nhY.js";import{T as H}from"./Typography-EJ3Vxj-4.js";import{S as g}from"./HeartFill-BV-KItZj.js";import{S as f}from"./Bell-C0iAft9K.js";import{S as u}from"./Cog-Dnwu-ZeY.js";import{u as x}from"./useSettings-TfAHqwVT.js";import{P as D}from"./PageBase-CRoOkBV8.js";import{a as S}from"./useAccountMenu-BpF8a_G0.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-o9JsDoVb.js";import"./SettingsItem-bBdNMt_4.js";import"./SettingsItemBase-BtSbSFJ1.js";import"./ChevronUp-Di_vjPCQ.js";import"./ChevronDown-CFgXCL2X.js";import"./ChevronRight-DeJMnotn.js";import"./ItemBase-ns7uWmGI.js";import"./ItemLink-B9RuLI2u.js";import"./ItemControls-CvMksNjC.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./SettingsModal-BAff8Jkt.js";import"./ModalBody-BG0TjSSS.js";import"./Section-r6HY9TNV.js";import"./Flex-B7LQuBXt.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./ButtonGroup-DFsWLoyK.js";import"./ButtonIcon-15F_DJjK.js";import"./ButtonLabel-Btjg_m5y.js";import"./Input-BppbGARe.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-CX2uOhHH.js";import"./PersonCircle-Dlxxw6BP.js";import"./Buildings2-BGyMsCbz.js";import"./InboxFill-DTYJlSxB.js";import"./MenuGrid-CU8AhdjO.js";import"./MagnifyingGlass-ClZGDDqe.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-B2RW4bmm.js";import"./Archive-Do2Bo_ug.js";import"./Trash-DKa5Tgj8.js";import"./PersonGroup-Bt8kfyoO.js";import"./Database-DTadOuPS.js";import"./ClockDashed-BHc3FuEH.js";import"./useLayout-CqkUQsA5.js";import"./useLocale-3YNQYid9.js";import"./header-BcIuFSSI.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-BiU1Xaf8.js";import"./Fieldset-B79kwUcw.js";import"./TextField-Gc8uNQmn.js";import"./FieldBase-fk0uyKjd.js";import"./Field-DGIr44pk.js";import"./Label-KYDdO5cS.js";import"./Switch-UQ3Ni1OJ.js";import"./Paperplane-FCSFni-7.js";import"./Legend-koB9ToOo.js";import"./Select-DcvfH0JG.js";import"./Hashtag-CwHi4GE0.js";import"./Files-DPOqKIrZ.js";import"./TextareaField-BzDixyfF.js";import"./ExternalLink-HMlsH5Jo.js";import"./Globe-BwTVQOT7.js";import"./PadlockLocked-DEap5_mX.js";import"./PersonRectangle-BMO1_azx.js";import"./HardHat-DXPutjya.js";import"./Radio-Br481gv6.js";const y="_icon_112og_1",B={icon:y};function t({color:e,theme:i="tinted",icon:o,title:n,href:b,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[o&&r.jsx(A,{loading:c,icon:o,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:b?r.jsx("a",{href:b,children:n}):n})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}a(t,"DashboardCard");const Zr={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},s=a(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=x({}),o=i?.filter(n=>n.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"CompanyDashboard"),m=a(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=x({}),o=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"PersonDashboard"),d=a(()=>{const{defaultAccount:e}=S({}),{items:i}=x({}),o=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--alerts-page",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"UserDashboard"),$r=["CompanyDashboard","PersonDashboard","UserDashboard"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
        <DashboardCard href="/iframe.html?id=demo-profile--alerts-page" icon={BellIcon as DashboardCardProps['icon']} title="Mine varslinger">
          <p>Mine varslingsadresser og varslinger per aktør.</p>
        </DashboardCard>
        <DashboardCard href="/iframe.html?id=demo-profile--settings-page" icon={CogIcon as DashboardCardProps['icon']} title="Innstillinger">
          <p>Kontaktinformasjon og andre innstillinger.</p>
        </DashboardCard>
      </Grid>
      <SettingsList items={filteredItems} />
    </PageBase>;
}`,...d.parameters?.docs?.source}}};export{s as CompanyDashboard,m as PersonDashboard,d as UserDashboard,$r as __namedExportsOrder,Zr as default};
