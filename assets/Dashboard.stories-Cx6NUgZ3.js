"use client";import{r as g,j as r}from"./iframe-CFpZEpOT.js";import{u as A,S as u}from"./useAdmin-BhbZ0k1f.js";import{D as C}from"./DashboardHeader-DP6kEJii.js";import{G as b}from"./Grid-Bf1IxilE.js";import{u as R,S as P}from"./use-merge-refs-DZRIBNsE.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-DMrQkYiw.js";import{H as E}from"./Heading-Biv3WsI7.js";import{T as L}from"./Typography-CFFVnqbI.js";import{a as x}from"./HeartFill-DEHhRWyD.js";import{S as D}from"./Bell-adRUhSGF.js";import{S as j}from"./Cog-8MZN71Ps.js";import{u as I}from"./useSettings-Dot1CUm0.js";import{P as k}from"./PageBase-DWyZBRXR.js";import{u as T}from"./useAccountsToolbar-DBxyqmzN.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-BHNp1hvr.js";import"./Flex-LzaqVov5.js";import"./index-CMCH-iYZ.js";import"./SettingsSection-ajhe3lC8.js";import"./Section-0tWdfaTG.js";import"./List-p1cS4I4-.js";import"./ListItem-qVW9-kPs.js";import"./Button-C0rUC1sb.js";import"./button-DcOM5j_b.js";import"./Input-D08OnHI6.js";import"./input-BOf7pxRD.js";import"./XMark-DsxdrTa7.js";import"./useId-Bpa1--zZ.js";import"./Icon-CcpuJg5J.js";import"./Skeleton-BxeTCVQ2.js";import"./Avatar-BgJ1eR8E.js";import"./AvatarGroup-CCJxayqM.js";import"./Badge-CiO-ESqG.js";import"./ChevronUp-B6qove2P.js";import"./ChevronDown-COoSRgYT.js";import"./ChevronRight-Ca_cSWgJ.js";import"./Divider-B_IjgFoE.js";import"./SettingsItem-H0Yo2KmN.js";import"./SettingsItemBase-BsxeBpgI.js";import"./SettingsModal-DDPQc-j7.js";import"./ModalBase-CZDPyOsV.js";import"./ModalBody-BZzL8uF4.js";import"./ButtonGroup-ix1R0MqJ.js";import"./ButtonIcon-BpGEXsWC.js";import"./ButtonLabel-DHLBBQDW.js";import"./globalMenu-DftxmSwB.js";import"./PadlockLockedFill-D7dAxHFy.js";import"./Buildings2-CHv5owWW.js";import"./InboxFill-DVh7rOkz.js";import"./MenuGrid-ZNnDBKbO.js";import"./MagnifyingGlass-C_OdGmS9.js";import"./PersonCircle-5AXd7Vkz.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-DMRCbUCL.js";import"./Archive-CGP_n4PV.js";import"./Trash-B2QKAP19.js";import"./PersonGroup-DiEbMbP8.js";import"./Database-DLLVNLyQ.js";import"./ClockDashed-B-vg0pWf.js";import"./useLayout-BzzZO4eV.js";import"./useSearchbar-nBUQJ4RR.js";import"./useLocale-AQRnd-cm.js";import"./useAccountMenu-BEQPKCiz.js";import"./header-BKjGJpMh.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-DHCy4ZgC.js";import"./Fieldset-C3KeG6M-.js";import"./index-CBNpaYnn.js";import"./TextField-CUluzzSh.js";import"./FieldBase-BKE2EVCO.js";import"./Label-CTb5NEuA.js";import"./Switch-iqmXxgDm.js";import"./Paperplane-CjyKLcZu.js";import"./Legend-Bns8ih0S.js";import"./Select-71RsFi3e.js";import"./Globe-DOomxry_.js";import"./PadlockLocked-m05TZyf8.js";import"./PersonRectangle-BME-S3lb.js";import"./Hashtag-DG_b7lWN.js";import"./HardHat-NmrnKMQ9.js";import"./Radio-DJVneipu.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",d=g.useRef(null),S=R([d,n]);return g.useEffect(()=>{const f=d.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const m=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!m||m?.contains(G)||(y||M?window.open(m.href,"","noreferrer"):m.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:d}){return r.jsxs(B,{"data-color":e,variant:o,className:d,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const be={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};const xe=["CompanyDashboard","PersonDashboard","UserDashboard"];export{p as CompanyDashboard,l as PersonDashboard,h as UserDashboard,xe as __namedExportsOrder,be as default};
