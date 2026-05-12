"use client";import{r as g,j as r}from"./iframe-BUZW8AMM.js";import{u as A,S as u}from"./useAdmin-C7I856uj.js";import{D as C}from"./DashboardHeader-C-tWBNJB.js";import{G as b}from"./Grid-C4lbdYkW.js";import{u as R,S as P}from"./use-merge-refs-Cq-TarIz.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-lV46z_8W.js";import{H as E}from"./Heading-BBJzhiZm.js";import{T as L}from"./Typography-DPxU9lqg.js";import{a as x}from"./HeartFill-swP0PXTG.js";import{S as D}from"./Bell-CInWcKsn.js";import{S as j}from"./Cog-DfYxJCgk.js";import{u as I}from"./useSettings-zZlFRbh8.js";import{P as k}from"./PageBase-DuZT8m5x.js";import{a as T}from"./useAccountMenu-aefej9YR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1N1jCNu.js";import"./useMenu-DzfOGhde.js";import"./SettingsItem-B6dEFvOZ.js";import"./SettingsItemBase-DZ_I7vZA.js";import"./ChevronUp-Cmvg9ZuE.js";import"./useId-CoMggIDA.js";import"./ChevronDown-C7e7c8oq.js";import"./ChevronRight-Be2F8dIE.js";import"./ItemLink-pH7m12-R.js";import"./index-DDG5Qp_D.js";import"./ItemControls-CILw3fe6.js";import"./Badge-CcUYqUUV.js";import"./Tooltip-4HkvDlDY.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SettingsModal-2DOGG5hN.js";import"./ModalBody-BtJGyYre.js";import"./Section-DQEzrtai.js";import"./Flex-ErkwFvdj.js";import"./XMark-N_5CtkVA.js";import"./Icon-pO_LYxKU.js";import"./Skeleton-2WT-jYKy.js";import"./Avatar-VmI9f2FC.js";import"./AvatarGroup-BSpRcNGO.js";import"./Button-gpqpzK6E.js";import"./button-Bzfkec0d.js";import"./ButtonGroup-BdRMlEte.js";import"./ButtonIcon-DbIrT_gT.js";import"./ButtonLabel-CQvjwTEk.js";import"./Input-xWxScOYP.js";import"./input-Dl9c_xvZ.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-DyKOSCyj.js";import"./PersonCircle-Dp7Qthqx.js";import"./Buildings2-B67cXEvc.js";import"./InboxFill-CTf7tvg-.js";import"./MenuGrid-gCFTtwbJ.js";import"./MagnifyingGlass-e5Ddvpo2.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BKPiN4UC.js";import"./Archive-BF40uVhW.js";import"./Trash-CBYCI39t.js";import"./PersonGroup-CYOc_PNc.js";import"./Database-BVJKU_Be.js";import"./ClockDashed-D1Qaa07F.js";import"./useLayout-BSYWmMLB.js";import"./useLocale-Di8vUl15.js";import"./header-w4plCkPS.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-Df1F8nSN.js";import"./Fieldset-D6j_8XE-.js";import"./index-BxrYGQ_D.js";import"./TextField-De0Y2qe5.js";import"./FieldBase-D0VPfoZq.js";import"./Label-EV3PcI6g.js";import"./Switch-CFAy6nJV.js";import"./Paperplane-DWA7vKuK.js";import"./Legend-DMYmGtLO.js";import"./Select-CaGTqlNb.js";import"./Hashtag-QBvqcxIc.js";import"./Files-CtoSf7Bu.js";import"./TextareaField-BpS_q6si.js";import"./ExternalLink-B9rY1iAs.js";import"./Globe-ghm5oPz9.js";import"./PersonRectangle-BxBl8J49.js";import"./HardHat--EEYW44Q.js";import"./Radio-B6dgGPOq.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",d=g.useRef(null),S=R([d,n]);return g.useEffect(()=>{const f=d.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const m=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!m||m?.contains(G)||(y||M?window.open(m.href,"","noreferrer"):m.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:d}){return r.jsxs(B,{"data-color":e,variant:o,className:d,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const be={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
