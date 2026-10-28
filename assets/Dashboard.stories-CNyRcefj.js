var v=Object.defineProperty;var a=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a5 as r,e as k}from"./iframe-zDfzPjQ-.js";import{u as C,S as p}from"./useAdmin-D48LW1H-.js";import{D as l}from"./DashboardHeader-LOcGDs-A.js";import{G as h}from"./Grid-C15L1Qag.js";import{I as A}from"./ItemMedia-C2cNA_4j.js";import{H as P}from"./Heading-CKFRzaKs.js";import{T as H}from"./Typography-D20OWptm.js";import{S as g}from"./HeartFill-DWq4EM8k.js";import{S as f}from"./Bell-Dn9a_7gF.js";import{S as u}from"./Cog-C7jZMLsC.js";import{u as x}from"./useSettings-C6a0abDK.js";import{P as D}from"./PageBase-B7s_nOQY.js";import{a as S}from"./useAccountMenu-KzwaMil7.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-D1ILj_Qw.js";import"./SettingsItem-CgwjMuo9.js";import"./SettingsItemBase-Ci6e4bQP.js";import"./ChevronUp-0LePS4pY.js";import"./ChevronDown-D8vGjyTz.js";import"./ChevronRight-NBomJvaL.js";import"./ItemBase-CBBaiBDD.js";import"./ItemLink-C2Q5plIG.js";import"./ItemControls-D2gn34WX.js";import"./Badge-aBFHXHYf.js";import"./Tooltip-B0sYZQl4.js";import"./SettingsModal-fD6tePd9.js";import"./ModalBody-BmMBPQXf.js";import"./Section-BxkDhIq7.js";import"./Flex-D4woKuNy.js";import"./Avatar-D3LaL2hn.js";import"./AvatarGroup-CvMpJghk.js";import"./ButtonGroup-DS66Ru9T.js";import"./ButtonIcon-Ck0HIEFU.js";import"./ButtonLabel-lbb0L__I.js";import"./Input-Cng2zass.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-CATmCGAI.js";import"./PersonCircle-BRcEdbYJ.js";import"./Buildings2-Cmv8W-Bb.js";import"./InboxFill-BQBSHFpa.js";import"./MenuGrid-YVJRjo8W.js";import"./MagnifyingGlass-D8qauCMU.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-BunPpgRi.js";import"./Archive-CJqTsyOd.js";import"./Trash-BQPU0aQd.js";import"./PersonGroup-CPlYM9GY.js";import"./Database-BpnOOvz5.js";import"./ClockDashed-DZjsnkqQ.js";import"./useLayout-B2QbmWB-.js";import"./useLocale-ViVT72na.js";import"./header-CRfS1HMY.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-BKf3y1mD.js";import"./Fieldset-BjvTqO2O.js";import"./TextField-BRWr-P52.js";import"./FieldBase-DhhNDbiD.js";import"./Field-DD9eOhx2.js";import"./Label-D889KtIj.js";import"./Switch-DIWrH6AQ.js";import"./Paperplane-BQ0IAcfZ.js";import"./Legend-BIS1PbXA.js";import"./Select-B-ChpWnM.js";import"./Hashtag-DD3VS_jg.js";import"./Files-D_SjqVgP.js";import"./TextareaField-BhscSxd2.js";import"./ExternalLink-CEdizJib.js";import"./Globe-EZ3f66Yc.js";import"./PadlockLocked-DPH91XB6.js";import"./PersonRectangle-CKpj1GM7.js";import"./HardHat-xudvyl3g.js";import"./Radio-b_D6rRwS.js";const y="_icon_112og_1",B={icon:y};function t({color:e,theme:i="tinted",icon:o,title:n,href:b,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[o&&r.jsx(A,{loading:c,icon:o,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:b?r.jsx("a",{href:b,children:n}):n})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}a(t,"DashboardCard");const Zr={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},s=a(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=x({}),o=i?.filter(n=>n.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"CompanyDashboard"),m=a(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=x({}),o=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"PersonDashboard"),d=a(()=>{const{defaultAccount:e}=S({}),{items:i}=x({}),o=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--alerts-page",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"UserDashboard"),$r=["CompanyDashboard","PersonDashboard","UserDashboard"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
