var v=Object.defineProperty;var a=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a5 as r,e as k}from"./iframe-CplFPuE2.js";import{u as C,S as p}from"./useAdmin-D8q1xV7h.js";import{D as l}from"./DashboardHeader-C8GXJ5DF.js";import{G as h}from"./Grid-B-3Vd5pL.js";import{I as A}from"./ItemMedia-BtRJ3M2I.js";import{H as P}from"./Heading-H6e_lYEN.js";import{T as H}from"./Typography-pPFkmvZJ.js";import{S as g}from"./HeartFill-CCjIgyb1.js";import{S as f}from"./Bell-Ks_WFjfG.js";import{S as u}from"./Cog-inb-ANbG.js";import{u as x}from"./useSettings-C5JfE7lc.js";import{P as D}from"./PageBase-CXMH_kNw.js";import{a as S}from"./useAccountMenu-Dv4Sdotu.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-Ct0wDmor.js";import"./SettingsItem-BGqNaBM-.js";import"./SettingsItemBase-CnCqpkD_.js";import"./ChevronUp-Dm28ImCZ.js";import"./ChevronDown-DzeGgGZr.js";import"./ChevronRight-44eUUhYn.js";import"./ItemBase-D8QKfK-5.js";import"./ItemLink-BYmj_1KC.js";import"./ItemControls-KQk_c0UL.js";import"./Badge-BWoGIkg0.js";import"./Tooltip-Dh3mcs7O.js";import"./SettingsModal-xBJrpL7h.js";import"./ModalBody-BJDu01Be.js";import"./Section-CaXjLAlu.js";import"./Flex-CoXKQauA.js";import"./Avatar-B3ASgMQL.js";import"./AvatarGroup-B9EoMI2b.js";import"./ButtonGroup-BYs_As_u.js";import"./ButtonIcon-B77pSTxU.js";import"./ButtonLabel-Bdm9dHON.js";import"./Input-BNktXmCP.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-DRK-Ye3A.js";import"./PersonCircle-CYa0pHIh.js";import"./Buildings2-BYsgmedO.js";import"./InboxFill-u0vQs3UT.js";import"./MenuGrid-vv6hTZbm.js";import"./MagnifyingGlass-BqSMzz0M.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-BJQ0a4vS.js";import"./Archive-YBefTHiT.js";import"./Trash-DVLYtG5v.js";import"./PersonGroup-sknUps--.js";import"./Database-CUkxT93s.js";import"./ClockDashed-Cu0lpOdc.js";import"./useLayout-eHGoyRSa.js";import"./useLocale-CFpX76Nf.js";import"./header-OLW70M6w.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-BpzjnQwF.js";import"./Fieldset-CiT8uuvj.js";import"./TextField-DkVZ8i71.js";import"./FieldBase-BHrQkTmp.js";import"./Field-DmUVDlMz.js";import"./Label-C9lUUP0G.js";import"./Switch-Bduvd3lO.js";import"./Paperplane-3GTTapMl.js";import"./Legend-vAA-V7iv.js";import"./Select-BCNsUwuS.js";import"./Hashtag-B3BZvMoe.js";import"./Files-Bx4UF9Xk.js";import"./TextareaField--IejytOM.js";import"./ExternalLink-D9yfW3ka.js";import"./Globe-N6PuO_kS.js";import"./PadlockLocked-DfC-DjhU.js";import"./PersonRectangle-o6azPssy.js";import"./HardHat-CJHIjU3_.js";import"./Radio-2EkpzQns.js";const y="_icon_112og_1",B={icon:y};function t({color:e,theme:i="tinted",icon:o,title:n,href:b,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[o&&r.jsx(A,{loading:c,icon:o,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:b?r.jsx("a",{href:b,children:n}):n})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}a(t,"DashboardCard");const Zr={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},s=a(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=x({}),o=i?.filter(n=>n.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"CompanyDashboard"),m=a(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=x({}),o=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(t,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"PersonDashboard"),d=a(()=>{const{defaultAccount:e}=S({}),{items:i}=x({}),o=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(t,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--alerts-page",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(t,{href:"/iframe.html?id=demo-profile--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:o})]})},"UserDashboard"),$r=["CompanyDashboard","PersonDashboard","UserDashboard"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
