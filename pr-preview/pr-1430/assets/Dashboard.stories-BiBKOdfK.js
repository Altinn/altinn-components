var v=Object.defineProperty;var s=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a7 as r,f as k}from"./iframe-Bv9y2YZF.js";import{u as C,S as p}from"./useAdmin-T2XGYnqL.js";import{D as l}from"./DashboardHeader-CpQ10Rut.js";import{G as h}from"./Grid-CriasFVy.js";import{I as A}from"./ItemMedia-DqG5JuI7.js";import{H as P}from"./Heading-CDZ3_iYV.js";import{T as H}from"./Typography-AZvc429m.js";import{S as g}from"./HeartFill-DXgvfbND.js";import{S as f}from"./Bell-C-UuEd4P.js";import{S as u}from"./Cog-BF_blja7.js";import{u as D}from"./useSettings-YxNJs2Bx.js";import{P as b}from"./PageBase-C-LGHzYC.js";import{a as S}from"./useAccountMenu-C7IrRYos.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-B94lF56c.js";import"./SettingsItem-qeprg7Ax.js";import"./SettingsItemBase-Chn0L4dt.js";import"./ChevronUp-5Z-Nijsh.js";import"./ChevronDown-CAvQitey.js";import"./ChevronRight-B_ztNHmN.js";import"./ItemBase-DiWDtFEx.js";import"./ItemLink-C-pnxU8M.js";import"./ItemControls-DeEkLGNj.js";import"./Badge-PIp_WKNx.js";import"./Tooltip-DATtufsq.js";import"./SettingsModal-C7UV_pJj.js";import"./ModalBody-Bb-z6REP.js";import"./Section-SEwZH98m.js";import"./Flex-k0HwcErc.js";import"./Avatar-CJwf9igj.js";import"./AvatarGroup-DorKIyuC.js";import"./ButtonGroup-DFBjPK-b.js";import"./ButtonIcon-BgohvzPZ.js";import"./ButtonLabel--Rsf9jsc.js";import"./Input-C95LaLCm.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-C_P803DG.js";import"./PersonCircle-BAfZY-GC.js";import"./Buildings2-BeaWmSSV.js";import"./InboxFill-BWUP4o7z.js";import"./MenuGrid-NBrgBJaj.js";import"./MagnifyingGlass-rds0MzVJ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-CxxANetE.js";import"./Archive-BZe-TlAS.js";import"./Trash-D9cqJvdS.js";import"./PersonGroup-CHh1pP_-.js";import"./Database-D667K7DT.js";import"./ClockDashed-OPx8LfHd.js";import"./useLayout-3E5lnQHy.js";import"./useLocale--rMGF6-r.js";import"./header-C_6SnzN5.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-B3SRW8uR.js";import"./Fieldset-Ddc92Ika.js";import"./TextField-BKY9Zb_n.js";import"./FieldBase-qKDj-2_C.js";import"./Field-T8_evT5x.js";import"./Label-O9M7TqIt.js";import"./Switch-CK1DZ9-L.js";import"./Paperplane-CgP4A7In.js";import"./Legend-B1xedN2S.js";import"./Select-Bmt0DXxl.js";import"./Hashtag-DsVsJobA.js";import"./Files-lfA0uQOC.js";import"./TextareaField-Cjtvs_98.js";import"./ExternalLink-Cs4iV1xO.js";import"./Globe-BL4BJF4r.js";import"./PersonRectangle-B8kYL9zI.js";import"./HardHat-Dk_mHMzg.js";import"./Radio-dym-J6ih.js";const y="_icon_112og_1",B={icon:y};function t({color:e,theme:i="tinted",icon:o,title:a,href:x,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[o&&r.jsx(A,{loading:c,icon:o,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:x?r.jsx("a",{href:x,children:a}):a})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}s(t,"DashboardCard");const Yr={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},n=s(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="companyInfo");return r.jsxs(b,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"CompanyDashboard"),m=s(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="contact");return r.jsxs(b,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"PersonDashboard"),d=s(()=>{const{defaultAccount:e}=S({}),{items:i}=D({}),o=i?.filter(a=>a.groupId==="contact");return r.jsxs(b,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--alerts-page",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"UserDashboard");n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};const Zr=["CompanyDashboard","PersonDashboard","UserDashboard"];export{n as CompanyDashboard,m as PersonDashboard,d as UserDashboard,Zr as __namedExportsOrder,Yr as default};
