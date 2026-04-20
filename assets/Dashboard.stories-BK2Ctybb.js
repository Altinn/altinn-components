"use client";import{r as g,j as r}from"./iframe-yBEatwQ0.js";import{u as A,S as u}from"./useAdmin-CzZ-uMGp.js";import{D as C}from"./DashboardHeader-DVgR4whu.js";import{G as b}from"./Grid-0FwIsVZp.js";import{u as R,S as P}from"./use-merge-refs-BCyRe6aJ.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-po0tYTET.js";import{H as E}from"./Heading-gNorXCZa.js";import{T as L}from"./Typography-ggurnZ72.js";import{a as x}from"./HeartFill-DJA7wNNg.js";import{S as D}from"./Bell-bWFM8Kft.js";import{S as j}from"./Cog-DsTXtWb5.js";import{u as I}from"./useSettings-dPmhSoRu.js";import{P as k}from"./PageBase-Dd0dV3J_.js";import{u as T}from"./useAccountsToolbar-BHTWjE-3.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-DUoC-ldr.js";import"./Flex-Co0GST2J.js";import"./index-B7J_eA84.js";import"./SettingsSection-CPMsqYtc.js";import"./Section-CLhotqus.js";import"./List-FR3qe7-6.js";import"./ListItem-CFEmGYjw.js";import"./Button-Du_F5DdO.js";import"./button-DDduZyu8.js";import"./Input-BprGT-wl.js";import"./input-ByeiaQUe.js";import"./XMark-DRdfunCf.js";import"./useId-DyCIbqyR.js";import"./Icon-m6GSRHhZ.js";import"./Skeleton-D2AOT5bt.js";import"./Avatar-BHAY-jNJ.js";import"./AvatarGroup-Em3MhneF.js";import"./Badge-Bt5kdhhY.js";import"./ChevronUp-BhUGhxGW.js";import"./ChevronDown-BJoDwoph.js";import"./ChevronRight-DNoffWLc.js";import"./Divider-ClYOp7SL.js";import"./SettingsItem-3XB8AtJJ.js";import"./SettingsItemBase-CtHYjpOw.js";import"./ItemLink-BJ7ieZn8.js";import"./ItemControls-CsC9idfH.js";import"./SettingsModal-BtsjTNax.js";import"./ModalBase-C-XV4k6W.js";import"./ModalBody-0bKYBPzE.js";import"./ButtonGroup-Cw-wKcaM.js";import"./ButtonIcon-kXMu6eE8.js";import"./ButtonLabel-DWbU693S.js";import"./globalMenu-Chte0suD.js";import"./PadlockLockedFill-Bpq2gcD3.js";import"./Buildings2-iLtDDyRo.js";import"./InboxFill-BAn487aw.js";import"./MenuGrid-B3KPctc0.js";import"./MagnifyingGlass-SlzD67D9.js";import"./PersonCircle-hsf5HIre.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-C-yemQKs.js";import"./Archive-BK62d9I_.js";import"./Trash-1ExTWg_2.js";import"./PersonGroup-VIqmb2OV.js";import"./Database-B96iOZyI.js";import"./ClockDashed-B7qjsId-.js";import"./useLayout-MbEOB7R0.js";import"./useSearchbar-CFG0uwYZ.js";import"./useLocale-D8aC51g_.js";import"./useAccountMenu-8QZdwbVN.js";import"./header-dZfUnq1N.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-Dt8J34OD.js";import"./Fieldset-Wydq2NK2.js";import"./index-4yM6tgpO.js";import"./TextField-N-ReZJz2.js";import"./FieldBase-DJNauVgJ.js";import"./Label-jtu-OMH2.js";import"./Switch-BDdNKTmo.js";import"./Paperplane-CTqoZVvJ.js";import"./Legend-9LteDDpq.js";import"./Select-yGPdvGNW.js";import"./Globe-CnEsP9Fx.js";import"./PadlockLocked-Dj7qNhL4.js";import"./PersonRectangle-CZXh0pNV.js";import"./Hashtag-A6i2d-_b.js";import"./HardHat-ml5GHfJO.js";import"./Radio-DyEMCCIm.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",m=g.useRef(null),S=R([m,n]);return g.useEffect(()=>{const f=m.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const d=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!d||d?.contains(G)||(y||M?window.open(d.href,"","noreferrer"):d.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:m}){return r.jsxs(B,{"data-color":e,variant:o,className:m,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const De={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};const je=["CompanyDashboard","PersonDashboard","UserDashboard"];export{p as CompanyDashboard,l as PersonDashboard,h as UserDashboard,je as __namedExportsOrder,De as default};
