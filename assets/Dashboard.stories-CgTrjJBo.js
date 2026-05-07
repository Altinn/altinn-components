"use client";import{r as g,j as r}from"./iframe-Cqj3AiBb.js";import{u as A,S as u}from"./useAdmin-14w0yXsw.js";import{D as C}from"./DashboardHeader-dp_63PrD.js";import{G as b}from"./Grid-DOuOpAN_.js";import{u as R,S as P}from"./use-merge-refs-CZYKnUm1.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-DihsrAKt.js";import{H as E}from"./Heading-CJiOkJPI.js";import{T as L}from"./Typography-CV-E4tqG.js";import{a as x}from"./HeartFill-DCHu72W2.js";import{S as D}from"./Bell-BFrIV75G.js";import{S as j}from"./Cog-DE_LP7WS.js";import{u as I}from"./useSettings-CXhAnWCr.js";import{P as k}from"./PageBase-D_2wcYMv.js";import{a as T}from"./useAccountMenu-BNVwIEiq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hX5sl0T5.js";import"./useMenu-CKPILulU.js";import"./SettingsItem-4Dc5iI0g.js";import"./SettingsItemBase-B6HYWitJ.js";import"./ChevronUp-BaSPXXxx.js";import"./useId-Bi-DL88I.js";import"./ChevronDown-g18mW4eX.js";import"./ChevronRight-CxmxTIkT.js";import"./ItemLink-Bkhdk8v_.js";import"./index-CHG1hv9Q.js";import"./ItemControls-eJMUKPOH.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SettingsModal-B16xHKIZ.js";import"./ModalBody-jsg5kTGr.js";import"./Section-BsXiOSXS.js";import"./Flex-DFnlILDc.js";import"./XMark-ReENydG3.js";import"./Icon-CHi77IUK.js";import"./Skeleton-B33vAz-c.js";import"./Avatar-D1U6ps5a.js";import"./AvatarGroup-CmMUwf3A.js";import"./Button-DYwdzfZG.js";import"./button-CcZ_KMhQ.js";import"./ButtonGroup-HmC79Nv3.js";import"./ButtonIcon-CRk-Fq7D.js";import"./ButtonLabel-BBQgFKVt.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-CsbiSy3A.js";import"./PersonCircle-sKNvHz4D.js";import"./Buildings2-CW6Ln2Lr.js";import"./InboxFill-B-I70TLd.js";import"./MenuGrid-Dnrx8ipH.js";import"./MagnifyingGlass-fMCV_alc.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-ykz9HJCL.js";import"./Archive-Brm_9A3i.js";import"./Trash-B8H25DCw.js";import"./PersonGroup-Cy3uNri3.js";import"./Database-Cjg_bP0g.js";import"./ClockDashed-2w90gDju.js";import"./useLayout-D5_pfhJQ.js";import"./useLocale-BwYOMWnF.js";import"./header-DyRk7f-v.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-Cyl54eZj.js";import"./Fieldset-W2wGG_nr.js";import"./index-BZqr7PxG.js";import"./TextField-CKQo9ppU.js";import"./FieldBase-DDsWnoQi.js";import"./Label-URmODKr6.js";import"./Switch-Dd7wCyBA.js";import"./Paperplane-DegoHXNm.js";import"./Legend-BZIKN7Sh.js";import"./Select-BtU2K9t0.js";import"./Hashtag-BkjdlspC.js";import"./Files-Bp7HCD3v.js";import"./TextareaField-BNq6IQeD.js";import"./ExternalLink-JGqTZbqg.js";import"./Globe-DBjj0c59.js";import"./PersonRectangle-X0ryBjB-.js";import"./HardHat-qAYDhOiX.js";import"./Radio-Cyqb2JW6.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",d=g.useRef(null),S=R([d,n]);return g.useEffect(()=>{const f=d.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const m=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!m||m?.contains(G)||(y||M?window.open(m.href,"","noreferrer"):m.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:d}){return r.jsxs(B,{"data-color":e,variant:o,className:d,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const be={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
