import{a7 as r,f as I}from"./iframe-BtrieXtc.js";import{u as x,S as c}from"./useAdmin-DItLNPqi.js";import{D as p}from"./DashboardHeader-CZiz8qMG.js";import{G as l}from"./Grid-DXHIFDO7.js";import{I as v}from"./ItemMedia-eBYq579p.js";import{H as k}from"./Heading-CdtnAJEW.js";import{T as A}from"./Typography-BRa08Jyj.js";import{S as h}from"./HeartFill-BilN-GbW.js";import{S as g}from"./Bell-BG-31dmr.js";import{S as f}from"./Cog-Bin3jD3e.js";import{u}from"./useSettings-DnKWye7r.js";import{P as D}from"./PageBase-CF5zmwec.js";import{a as P}from"./useAccountMenu-JGfUIXgR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyGDkSgg.js";import"./useMenu-BNfzuibe.js";import"./SettingsItem-DsjWSWmB.js";import"./SettingsItemBase-DWJ69Eh4.js";import"./ChevronUp-ByxPUPOK.js";import"./ChevronDown-BfacC3TQ.js";import"./ChevronRight-DjbS-LPA.js";import"./ItemBase-BOh1wieW.js";import"./ItemLink-jSdmZiom.js";import"./ItemControls-DyiOoqOz.js";import"./Badge-BaL1X3jx.js";import"./Tooltip-CavTLnec.js";import"./SettingsModal-BH3rW1aX.js";import"./ModalBody-B4Te2i-O.js";import"./Section-UNmwoB7j.js";import"./Flex-Dld0WRRq.js";import"./Avatar-CpJVuKGv.js";import"./AvatarGroup-B_fE5muE.js";import"./ButtonGroup-CVtevVNY.js";import"./ButtonIcon-nvXcIoKP.js";import"./ButtonLabel-CyEgs9OW.js";import"./Input-BbNTIeCv.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-t48JvDwV.js";import"./PersonCircle-Cq-RBWU9.js";import"./Buildings2-BeFlXIfB.js";import"./InboxFill-BMaWgsYu.js";import"./MenuGrid-D-RdBwwi.js";import"./MagnifyingGlass-C5aguymI.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-6BWihtUE.js";import"./Archive-CFC9XJ3c.js";import"./Trash-CK3701XQ.js";import"./PersonGroup-D8bqL15L.js";import"./Database-C63eVhmL.js";import"./ClockDashed-BcQ_Y7Z0.js";import"./useLayout-Dn7YUYKv.js";import"./useLocale-Cs-gVyaD.js";import"./header-BS2AYpd7.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-B6dVubhR.js";import"./Fieldset-o-8Piykq.js";import"./TextField-DM_urZ6l.js";import"./FieldBase-CTDBNJ5K.js";import"./Field-D8_JVLdM.js";import"./Label-ERyazbFa.js";import"./Switch-BjdFyd00.js";import"./Paperplane-BEQ07Iyg.js";import"./Legend-BKDxrl8Y.js";import"./Select-BFF8MElV.js";import"./Hashtag-CNzIzumI.js";import"./Files-TVcPi0qM.js";import"./TextareaField-FR8mppPo.js";import"./ExternalLink-C8Y1gBR6.js";import"./Globe-o9O-O-tZ.js";import"./PersonRectangle-t5K6VPZw.js";import"./HardHat-CK1eeesY.js";import"./Radio-eJOSJX0g.js";const H="_icon_112og_1",S={icon:H};function i({color:e,theme:a="tinted",icon:t,title:o,href:b,children:C,loading:d,className:j}){return r.jsxs(I,{"data-color":e,variant:a,className:j,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(v,{loading:d,icon:t,className:S.icon}),r.jsx(k,{size:"lg",loading:d,children:b?r.jsx("a",{href:b,children:o}):o})]}),r.jsx(A,{size:"sm",loading:d,children:C})]})}const Wr={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},s=()=>{const{currentAccount:e}=x({defaultAccountId:"diaspora"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},n=()=>{const{currentAccount:e}=x({defaultAccountId:"freyr"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},m=()=>{const{defaultAccount:e}=P({}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-profile--accounts-page",icon:h,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--alerts-page",icon:g,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(c,{items:t})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Xr=["CompanyDashboard","PersonDashboard","UserDashboard"];export{s as CompanyDashboard,n as PersonDashboard,m as UserDashboard,Xr as __namedExportsOrder,Wr as default};
