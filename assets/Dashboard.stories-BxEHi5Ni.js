var v=Object.defineProperty;var a=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a6 as r,f as k}from"./iframe-DKOj4Qmf.js";import{u as C,S as p}from"./useAdmin-DcnuiVnY.js";import{D as l}from"./DashboardHeader-BpO-KFAf.js";import{G as h}from"./Grid-CjHFQrLQ.js";import{I as A}from"./ItemMedia-BRG2KhSe.js";import{H as P}from"./Heading-CZ9YFV1k.js";import{T as H}from"./Typography-eLs7BNQP.js";import{S as g}from"./HeartFill-TMgHEMWw.js";import{S as f}from"./Bell-D-w-Z2hb.js";import{S as u}from"./Cog-BZYgksBg.js";import{u as x}from"./useSettings-BFbAyCqP.js";import{P as D}from"./PageBase-B2Ee9Al7.js";import{a as S}from"./useAccountMenu-DkSxoiko.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-CQyV1KVq.js";import"./SettingsItem-DTDcWlcC.js";import"./SettingsItemBase-C5KqK7Hg.js";import"./ChevronUp-C6mjAtW4.js";import"./ChevronDown-E0Mu4V8Q.js";import"./ChevronRight-BtINKUzX.js";import"./ItemBase-DvuL1i9R.js";import"./ItemLink-5KzMXfWD.js";import"./ItemControls-CBo-NxME.js";import"./Badge-DEZY09pU.js";import"./Tooltip-G6lw2ON-.js";import"./SettingsModal-D9a2GTgV.js";import"./ModalBody-yuWxiPLa.js";import"./Section-DDkkqRz5.js";import"./Flex-DwWkcKON.js";import"./Avatar-CF_k6VZv.js";import"./AvatarGroup-DEy2HyjC.js";import"./ButtonGroup-tVuhtuMt.js";import"./ButtonIcon-BeQ87dMs.js";import"./ButtonLabel-TaOioUjS.js";import"./Input-BzqjTNtI.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-Bgwguyyv.js";import"./PersonCircle-B-YmhkaA.js";import"./Buildings2-wb5ZIU2b.js";import"./InboxFill-DlN-FcL8.js";import"./MenuGrid-DtqF4QVd.js";import"./MagnifyingGlass-CQx-KSK5.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-DtUUxBWC.js";import"./Archive-BdzDAVfI.js";import"./Trash-BH2M-vSd.js";import"./PersonGroup-Cqh1ongJ.js";import"./Database-91-Oy_7W.js";import"./ClockDashed-J0wFRlbL.js";import"./useLayout-KPAgcc6H.js";import"./useLocale-Ba1i3mzS.js";import"./header-DFSjGhev.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-C5BJuUZa.js";import"./Fieldset-ylSujjef.js";import"./TextField-B092Moqu.js";import"./FieldBase-B2rDpv5b.js";import"./Field-BWfsO4dQ.js";import"./Label-Z9WrVSxL.js";import"./Switch-Bkx_nto1.js";import"./Paperplane-Dky0sFIn.js";import"./Legend-FmLVXYXn.js";import"./Select-D_B9JvQp.js";import"./Hashtag-B7r-aFy8.js";import"./Files-UnpApt6z.js";import"./TextareaField-C9D10mXv.js";import"./ExternalLink-18L0vbBb.js";import"./Globe-CyCJXh5C.js";import"./PadlockLocked-CvNsVdC8.js";import"./PersonRectangle-Bm_hJkyu.js";import"./HardHat-l9XTJ4BB.js";import"./Radio-DrZjHURs.js";const y="_icon_112og_1",B={icon:y};function o({color:e,theme:i="tinted",icon:t,title:n,href:b,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(A,{loading:c,icon:t,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:b?r.jsx("a",{href:b,children:n}):n})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}a(o,"DashboardCard");const Zr={title:"Page/Dashboard/Dashboard",tags:["autodocs"],parameters:{},args:{}},s=a(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"CompanyDashboard"),m=a(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"PersonDashboard"),d=a(()=>{const{defaultAccount:e}=S({}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--notifications",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--profile-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"UserDashboard"),$r=["CompanyDashboard","PersonDashboard","UserDashboard"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
