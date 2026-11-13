var v=Object.defineProperty;var a=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a7 as r,f as k}from"./iframe-r-PzxnFG.js";import{u as C,S as p}from"./useAdmin-BTAMb_2w.js";import{D as l}from"./DashboardHeader-lK-sRzAP.js";import{G as h}from"./Grid-Cw4FaU5D.js";import{I as A}from"./ItemMedia-BFk5syHA.js";import{H as P}from"./Heading-qFKPv3xm.js";import{T as H}from"./Typography-DZA02yZr.js";import{S as g}from"./HeartFill-ClnFDlAG.js";import{S as f}from"./Bell-q-HOnHBl.js";import{S as u}from"./Cog-BdYgFUsm.js";import{u as x}from"./useSettings-m7-x5Otz.js";import{P as D}from"./PageBase-DxNDcwho.js";import{a as S}from"./useAccountMenu-BkEejnLn.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-BMl9Yb_c.js";import"./SettingsItem-DxXxFwXC.js";import"./SettingsItemBase-YCR0c7jg.js";import"./ChevronUp-B0s8dawY.js";import"./ChevronDown-BD5i-hxE.js";import"./ChevronRight-DoF3revo.js";import"./ItemBase-CTpIDqLP.js";import"./ItemLink-BAk2uFkE.js";import"./ItemControls-Di1aFGjk.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./SettingsModal-BdZ7Q-Ay.js";import"./ModalBody-B-L7EXsI.js";import"./Section-DH0F_yu4.js";import"./Flex-DRLqoZbu.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./ButtonGroup-tpSmkUGs.js";import"./ButtonLabel-DKmNFHli.js";import"./Input-BYbvd3yE.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-DZrKoONM.js";import"./PersonCircle-DirIdGej.js";import"./Buildings2-BvvammpD.js";import"./InboxFill-DXiS2hpk.js";import"./MenuGrid-CZNJcB7P.js";import"./MagnifyingGlass-7vnMkGiQ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-D8tcOQIL.js";import"./Archive-CAWbyIsL.js";import"./Trash-0c2zCAv3.js";import"./PersonGroup-D6u0Cb-z.js";import"./Database-DiRBYOye.js";import"./ClockDashed-wZFtld5l.js";import"./useLayout-b8sxLxt5.js";import"./useLocale-ONEEo_UB.js";import"./header-mzwr1EEx.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-D1CHWYs6.js";import"./Fieldset-CZCpLVdS.js";import"./TextField-CvCwRuU3.js";import"./FieldBase-D95hzyfr.js";import"./Field-C8va_Ig3.js";import"./Label-dzQU0Yg2.js";import"./Switch-BcyiU8sz.js";import"./Paperplane-BZLX9zpj.js";import"./Legend-LqvXDnXJ.js";import"./Select-WKoDhHDz.js";import"./Hashtag-CzhgaB8J.js";import"./Files-CJyaA0av.js";import"./TextareaField-Bl_aeLaL.js";import"./ExternalLink-hZt8iMhs.js";import"./Globe-cKjoRVPR.js";import"./PadlockLocked-CuUKLHlf.js";import"./PersonRectangle-DNpzLFox.js";import"./HardHat-Di7P8FwQ.js";import"./Radio-DW9PNWPj.js";const y="_icon_112og_1",B={icon:y};function o({color:e,theme:i="tinted",icon:n,title:t,href:b,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[n&&r.jsx(A,{loading:c,icon:n,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:b?r.jsx("a",{href:b,children:t}):t})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}a(o,"DashboardCard");const Yr={title:"Page/Dashboard/Dashboard",tags:["autodocs"],parameters:{},args:{}},s=a(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=x({}),n=i?.filter(t=>t.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:n})]})},"CompanyDashboard"),m=a(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=x({}),n=i?.filter(t=>t.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:n})]})},"PersonDashboard"),d=a(()=>{const{defaultAccount:e}=S({}),{items:i}=x({}),n=i?.filter(t=>t.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--notifications",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--profile-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:n})]})},"UserDashboard"),Zr=["CompanyDashboard","PersonDashboard","UserDashboard"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
