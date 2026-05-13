"use client";import{r as g,j as r}from"./iframe-DkQPO9ro.js";import{u as A,S as u}from"./useAdmin-zmGJcSs4.js";import{D as C}from"./DashboardHeader-BQmDf8dF.js";import{G as b}from"./Grid-xNp3CXej.js";import{u as R,S as P}from"./use-merge-refs-B1oKProt.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-CHWY5IG3.js";import{H as E}from"./Heading-Otl-Ib-S.js";import{T as L}from"./Typography-cgJeIGtL.js";import{a as x}from"./HeartFill-B2O-pGHr.js";import{S as D}from"./Bell-CqR_GCXB.js";import{S as j}from"./Cog-G_cKxn-5.js";import{u as I}from"./useSettings-CQtyn47m.js";import{P as k}from"./PageBase-PVDRI2R2.js";import{a as T}from"./useAccountMenu-VhGFIA2t.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DaA-2TAn.js";import"./useMenu-BKpTfeOo.js";import"./SettingsItem-KtrtdTSI.js";import"./SettingsItemBase-okg423NT.js";import"./ChevronUp-1RXiKLsv.js";import"./useId-CwF4wxTL.js";import"./ChevronDown-CbPk4DLa.js";import"./ChevronRight-Ddmldm4v.js";import"./ItemLink-z5fThoi9.js";import"./index-BrTdOUlk.js";import"./ItemControls-Czqw_jtP.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SettingsModal-CIbtSnKL.js";import"./ModalBody-GvvO4sGF.js";import"./Section-DUH4Cyq_.js";import"./Flex-Cy28VffD.js";import"./XMark-5G2rqhrX.js";import"./Icon-Dao4TSf9.js";import"./Skeleton-8DklmnzK.js";import"./Avatar-DlrsSRUv.js";import"./AvatarGroup-DkXzBnSr.js";import"./Button-OKMeorO5.js";import"./button-Byovksc3.js";import"./ButtonGroup-3KQzrPQQ.js";import"./ButtonIcon-HEZ4yPr4.js";import"./ButtonLabel-teAu4cwf.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-BxtgWRIy.js";import"./PersonCircle-EOFyGUwS.js";import"./Buildings2-TPl-W-Aw.js";import"./InboxFill-CAHNcSmn.js";import"./MenuGrid-DLVVZ2an.js";import"./MagnifyingGlass-DLwDZfMD.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CKRc-mIU.js";import"./Archive-cVVZTQ-I.js";import"./Trash-C8jSETfh.js";import"./PersonGroup-BIudXK7m.js";import"./Database-DBRK09JV.js";import"./ClockDashed-0qd6mo8-.js";import"./useLayout-DoUfOd_L.js";import"./useLocale-CkSteAqX.js";import"./header-DGMFgBuH.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-BlkM7iRt.js";import"./Fieldset-CcK7G4vk.js";import"./index-BCCMT4X2.js";import"./TextField-DUUYp28e.js";import"./FieldBase-BPqKon2e.js";import"./Label-DNmTNqvr.js";import"./Switch-DagNs5eW.js";import"./Paperplane-BvPhvfCw.js";import"./Legend-BSYHMovY.js";import"./Select-BiXx2uS_.js";import"./Hashtag-Ie2WUL4b.js";import"./Files-C7jYqi9F.js";import"./TextareaField-DTmFJBbK.js";import"./ExternalLink-CQ13ggaC.js";import"./Globe-kuwFCIDb.js";import"./PersonRectangle-B4_0lZhy.js";import"./HardHat-CIRSRIPh.js";import"./Radio-BD9-kisx.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",d=g.useRef(null),S=R([d,n]);return g.useEffect(()=>{const f=d.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const m=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!m||m?.contains(G)||(y||M?window.open(m.href,"","noreferrer"):m.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:d}){return r.jsxs(B,{"data-color":e,variant:o,className:d,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const be={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
