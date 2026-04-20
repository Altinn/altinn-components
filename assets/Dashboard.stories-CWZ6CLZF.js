"use client";import{r as g,j as r}from"./iframe-Dj7Cj6th.js";import{u as A,S as u}from"./useAdmin-BhH-KUKs.js";import{D as C}from"./DashboardHeader-D_KDf_jA.js";import{G as b}from"./Grid-zZ2TGVn4.js";import{u as R,S as P}from"./use-merge-refs-YImFlbky.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-ClCn_Pwn.js";import{H as E}from"./Heading-CYqNNVt0.js";import{T as L}from"./Typography-NJpqcBZB.js";import{a as x}from"./HeartFill-ByYTYDoa.js";import{S as D}from"./Bell-BoGfiElF.js";import{S as j}from"./Cog-sBbMLK9M.js";import{u as I}from"./useSettings-DRHYmISM.js";import{P as k}from"./PageBase-CcCRpB6D.js";import{u as T}from"./useAccountsToolbar-8HoKFADG.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-CZ8hjrPb.js";import"./Flex-BFoeedqd.js";import"./index-CddsnUaU.js";import"./SettingsSection-DIxl5GJt.js";import"./Section-H920sslu.js";import"./List-DYKtwJbC.js";import"./ListItem-CdIQewdQ.js";import"./Button-CSjIyK1w.js";import"./button-BKLxmUvr.js";import"./Input-xlo_b8Ui.js";import"./input-Dg3xXmgC.js";import"./XMark-CFOHUWx0.js";import"./useId-ByPI58ip.js";import"./Icon-ClXNgiA2.js";import"./Skeleton-D2EJPpRT.js";import"./Avatar-BthLZDba.js";import"./AvatarGroup-CKpZaMLG.js";import"./Badge-CSrzMhOz.js";import"./Tooltip-DHRUZs7M.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-CdPgOeEh.js";import"./ChevronDown-sTkixeUo.js";import"./ChevronRight-DoyD_DMf.js";import"./Divider-BwiEsQnP.js";import"./SettingsItem-DMqg8WL0.js";import"./SettingsItemBase-8IR7mEqN.js";import"./ItemLink-hS_z791-.js";import"./ItemControls-Dm3s3qCz.js";import"./SettingsModal-AKXr0_zI.js";import"./ModalBase-D6AxN5ds.js";import"./ModalBody-pkjmwJOi.js";import"./ButtonGroup-FtWKGzEG.js";import"./ButtonIcon-B8pHyvH7.js";import"./ButtonLabel-DExUchGn.js";import"./globalMenu-Bbbt_AAp.js";import"./PadlockLockedFill-DyKEGGIm.js";import"./Buildings2-RbNRYIPS.js";import"./InboxFill-Bdr_IoBv.js";import"./MenuGrid-CIIiRQec.js";import"./MagnifyingGlass-CkAWdXLw.js";import"./PersonCircle-DGunPqZp.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-D8nK4eWy.js";import"./Archive-fCDhiZwM.js";import"./Trash-BWaUzv09.js";import"./PersonGroup-BNQVKXjG.js";import"./Database-dv1zeOdR.js";import"./ClockDashed-C4nxmfnv.js";import"./useLayout-BQAfZN81.js";import"./useSearchbar-DlPYZYl1.js";import"./useLocale-Cc-EZgTa.js";import"./useAccountMenu-Be5qqc25.js";import"./header-DUH2FbKW.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-BEM-o_8x.js";import"./Fieldset-5pp9MIr3.js";import"./index-DyfHnAhP.js";import"./TextField-CaM97Ew6.js";import"./FieldBase-1wPahpAR.js";import"./Label-knK18nOg.js";import"./Switch-CsETL5z-.js";import"./Paperplane-317oe7t2.js";import"./Legend-CfBJN8ds.js";import"./Select-CyGcYcWC.js";import"./Globe-D9vLtYKA.js";import"./PadlockLocked-DMO0v4Jz.js";import"./PersonRectangle-CAu5A0Ab.js";import"./Hashtag-VVrw4sFI.js";import"./HardHat-DJlOPslp.js";import"./Radio-D2RHB0-U.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",m=g.useRef(null),S=R([m,n]);return g.useEffect(()=>{const f=m.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const d=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!d||d?.contains(G)||(y||M?window.open(d.href,"","noreferrer"):d.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:m}){return r.jsxs(B,{"data-color":e,variant:o,className:m,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const Ie={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
