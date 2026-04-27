"use client";import{r as g,j as r}from"./iframe-B56t8i7v.js";import{u as A,S as u}from"./useAdmin-DvA98TKx.js";import{D as C}from"./DashboardHeader-DJ7mdy9i.js";import{G as b}from"./Grid-C1K3QPMN.js";import{u as R,S as P}from"./use-merge-refs-CJ3sV19d.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-DJxakqLL.js";import{H as E}from"./Heading-B0k14T1s.js";import{T as L}from"./Typography-C36VcWyw.js";import{a as x}from"./HeartFill-yVQ7LC3O.js";import{S as D}from"./Bell-CIzwRMBA.js";import{S as j}from"./Cog-QyfP42ZQ.js";import{u as I}from"./useSettings-CSeekLGw.js";import{P as k}from"./PageBase-Cy7JfnpK.js";import{u as T}from"./useAccountsToolbar-BC4dVOr7.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-Bz8Gr0jh.js";import"./Flex-BSViFEWJ.js";import"./index-CHgNdXFp.js";import"./SettingsSection-D9n9j1H_.js";import"./Section-DXg-mnVx.js";import"./List-Cf0-_oGc.js";import"./ListItem-DXm9Ifb4.js";import"./Button-x4ugPYkx.js";import"./button-BSGP1CSM.js";import"./Input-DqVNSGAW.js";import"./input-CtI4L4z7.js";import"./XMark-CQR84vCO.js";import"./useId-Ce_44NzT.js";import"./Icon-CgN9F-ql.js";import"./Skeleton-Cer98cLN.js";import"./Avatar-_1995Z8x.js";import"./AvatarGroup-kqIJtB4O.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-DZyTk36P.js";import"./ChevronDown-DuvcSheB.js";import"./ChevronRight-VYKVaZtU.js";import"./Divider-BSd8txhR.js";import"./SettingsItem-DpkybshB.js";import"./SettingsItemBase-dnhUSNJ6.js";import"./ItemLink-CR2F4UR3.js";import"./ItemControls-DurpuKFn.js";import"./SettingsModal-cif9potf.js";import"./ModalBase-DAC3P7wf.js";import"./ModalBody-DZEYNo_5.js";import"./ButtonGroup-DUjF8sgK.js";import"./ButtonIcon-RQaEMoLk.js";import"./ButtonLabel-B2zAlRRB.js";import"./globalMenu-BJLTogqL.js";import"./PadlockLockedFill-b2QY2ao5.js";import"./Buildings2-Cmz8iX3m.js";import"./InboxFill-CKfO2UBM.js";import"./MenuGrid-DOIPFHmi.js";import"./MagnifyingGlass-U17pnqdh.js";import"./PersonCircle-DvEbo7K4.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-DhU-ifQv.js";import"./Archive-C86xORiC.js";import"./Trash-CCj34_zQ.js";import"./PersonGroup-Cz_AUlDe.js";import"./Database-DegDU5T9.js";import"./ClockDashed-wryP5gNL.js";import"./useLayout-qLJ-24i2.js";import"./useSearchbar-DnKusciC.js";import"./useLocale-BlXJktaZ.js";import"./useAccountMenu-66yDReJd.js";import"./header-BJRQXRTp.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-YMvuFtwb.js";import"./Fieldset-DqVnc9xR.js";import"./index-pNH6Tvi1.js";import"./TextField-CxRl2dGO.js";import"./FieldBase-BkGCBc8B.js";import"./Label-Bx5THtMF.js";import"./Switch-Ch_BWUCO.js";import"./Paperplane-BJXqtQ6h.js";import"./Legend-CAhLycoi.js";import"./Select-Dtn294uS.js";import"./Globe-CfQppjOD.js";import"./PadlockLocked-BohZXiRX.js";import"./PersonRectangle-DG4Wbqci.js";import"./Hashtag-DMbKf-S9.js";import"./HardHat-FKTZm-YJ.js";import"./Radio-Dp0Ut7Tz.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",m=g.useRef(null),S=R([m,n]);return g.useEffect(()=>{const f=m.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const d=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!d||d?.contains(G)||(y||M?window.open(d.href,"","noreferrer"):d.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:m}){return r.jsxs(B,{"data-color":e,variant:o,className:m,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const Ie={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};const ke=["CompanyDashboard","PersonDashboard","UserDashboard"];export{p as CompanyDashboard,l as PersonDashboard,h as UserDashboard,ke as __namedExportsOrder,Ie as default};
