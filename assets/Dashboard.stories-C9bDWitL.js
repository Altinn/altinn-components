"use client";import{r as g,j as r}from"./iframe-xsOFb0qB.js";import{u as A,S as u}from"./useAdmin-CtcuSYqZ.js";import{D as C}from"./DashboardHeader-WMCuwGIt.js";import{G as b}from"./Grid-BDDJBlQl.js";import{u as R,S as P}from"./use-merge-refs-CVCJxog4.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-J6PAjnJS.js";import{H as E}from"./Heading-CKV0OzUJ.js";import{T as L}from"./Typography-Bx2c3_US.js";import{a as x}from"./HeartFill-BI770wDo.js";import{S as D}from"./Bell-lzchwu9E.js";import{S as j}from"./Cog-VVw0sBjg.js";import{u as I}from"./useSettings-vBbZoMwD.js";import{P as k}from"./PageBase-BmzZTWtK.js";import{a as T}from"./useAccountMenu-S2tlqrVp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7qBukkQ.js";import"./useMenu-Cuq0hoPZ.js";import"./SettingsItem-BA3Nt4Rt.js";import"./SettingsItemBase-Bj8jNJ8o.js";import"./ChevronUp-DtTCTXgH.js";import"./useId-BSkX16Wf.js";import"./ChevronDown-DgTX1k3o.js";import"./ChevronRight-C-KQY4Ee.js";import"./ItemLink-D5ErANnm.js";import"./index-C2Njje4x.js";import"./ItemControls-a4lEiOE5.js";import"./Badge-BNd15I-A.js";import"./Tooltip-O5uJJY5C.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SettingsModal-DY4S-rNA.js";import"./ModalBody-CU-34hyC.js";import"./Section-B92vWqdI.js";import"./Flex-D9aEciRT.js";import"./XMark-CIyVPbna.js";import"./Icon-Bfs0jdaJ.js";import"./Skeleton-DBfNAA4T.js";import"./Avatar-n4A0Yiev.js";import"./AvatarGroup-D3a3Cvdg.js";import"./Button-BpTRR-R2.js";import"./button-_KGDSi7k.js";import"./ButtonGroup-C6oYdo0U.js";import"./ButtonIcon-CgcH6LiT.js";import"./ButtonLabel-BYEs_GZq.js";import"./Input-CKQ98Ns6.js";import"./input-WCOpszOV.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-7gz2NZeF.js";import"./PersonCircle-CQxK2wwo.js";import"./Buildings2-C62e6IVW.js";import"./InboxFill-D-JS-mTH.js";import"./MenuGrid-B4fGNlZg.js";import"./MagnifyingGlass--8bC5kd2.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CORWw_ar.js";import"./Archive-B1CaQo-V.js";import"./Trash-CZXvsvHs.js";import"./PersonGroup-DCgU0zTZ.js";import"./Database-IUz0mboD.js";import"./ClockDashed-B79nfQIW.js";import"./useLayout-Dhg-h9Qc.js";import"./useLocale-ZIxXDciE.js";import"./header-B3Zd00EL.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-DlnkJmvJ.js";import"./Fieldset-DgXA1yP2.js";import"./index-CZjeF-Ef.js";import"./TextField-BfoCX5sC.js";import"./FieldBase-CVHmMMmY.js";import"./Label-CiIlYW7w.js";import"./Switch-D_4hH0ed.js";import"./Paperplane-CI1Dn5Ep.js";import"./Legend-Bq9PscRO.js";import"./Select-DNC0cPXR.js";import"./Hashtag-B7Sswhr2.js";import"./Files-ChM2sBt6.js";import"./TextareaField-BOMpcB5i.js";import"./ExternalLink-aIGj6UNs.js";import"./Globe-Bo46H1tU.js";import"./PersonRectangle-CIjutggl.js";import"./HardHat-n0IN7mSJ.js";import"./Radio-BEOSbLr0.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",d=g.useRef(null),S=R([d,n]);return g.useEffect(()=>{const f=d.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const m=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!m||m?.contains(G)||(y||M?window.open(m.href,"","noreferrer"):m.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:d}){return r.jsxs(B,{"data-color":e,variant:o,className:d,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const be={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
