"use client";import{r as g,j as r}from"./iframe-CHILL5tZ.js";import{u as A,S as u}from"./useAdmin-te501jYf.js";import{D as C}from"./DashboardHeader-C8TmsL0e.js";import{G as b}from"./Grid-ff3Qx0cX.js";import{u as R,S as P}from"./use-merge-refs-BXZnV1dm.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-BDXURQdO.js";import{H as E}from"./Heading-B80Wap_u.js";import{T as L}from"./Typography-BDbDV84g.js";import{a as x}from"./HeartFill-DB-9jMfH.js";import{S as D}from"./Bell-DwStcAmq.js";import{S as j}from"./Cog-BbrC2JUN.js";import{u as I}from"./useSettings-DshSjR8a.js";import{P as k}from"./PageBase-D-YEL3iO.js";import{u as T}from"./useAccountsToolbar-x1be4tOl.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-CBS-gOUF.js";import"./Flex-A7S1F2F0.js";import"./index-D0JdUEkn.js";import"./SettingsSection-BPkatNoj.js";import"./Section-DgehUQNo.js";import"./List-BcksO0y4.js";import"./ListItem-foRln84O.js";import"./Button-BhP7fHb4.js";import"./button-BIgBCVIC.js";import"./Input-F-jc7mgY.js";import"./input-BiYbaGgt.js";import"./XMark-DQxCv5Yn.js";import"./useId-CxjMVxT3.js";import"./Icon-DK0uLDnk.js";import"./Skeleton-BX9QnUCy.js";import"./Avatar-BEHn6hs3.js";import"./AvatarGroup-9Hd8MZfa.js";import"./Badge-DHaboY8X.js";import"./Tooltip-gqkYQCXG.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-DXNAPjGw.js";import"./ChevronDown-D4I_nLcA.js";import"./ChevronRight-C2HiJ5JV.js";import"./Divider-BUzBNLe4.js";import"./SettingsItem-B2Lyxhvv.js";import"./SettingsItemBase-B9ImwOxd.js";import"./ItemLink-SjZ2P_5W.js";import"./ItemControls-Okligr0R.js";import"./SettingsModal-DqS_MZrV.js";import"./ModalBody-D4FH2jV5.js";import"./ButtonGroup-85VHWPxh.js";import"./ButtonIcon-C3eOYnF4.js";import"./ButtonLabel-CO3yS6Gk.js";import"./globalMenu-CBN3_-Kp.js";import"./PadlockLockedFill-C6yyEZiT.js";import"./Buildings2-tjbDAD09.js";import"./InboxFill-DjyyvXGx.js";import"./MenuGrid-vMpDdG9w.js";import"./MagnifyingGlass-Z3jVe5X3.js";import"./PersonCircle-BfGPlfya.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BQ3ZYUl6.js";import"./Archive-D1KH-vpC.js";import"./Trash-DeMvNL0c.js";import"./PersonGroup-BlZ7Ys_C.js";import"./Database-5CRl67VN.js";import"./ClockDashed-DiSE3K5K.js";import"./useLayout-FBla2Zr_.js";import"./useLocale-CR2al_3e.js";import"./useAccountMenu-1jVKCAcE.js";import"./header-ucoM8cEG.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-sycLCu80.js";import"./Fieldset-Dl54YQ74.js";import"./index-ASxRsC3U.js";import"./TextField-BKpAQTe7.js";import"./FieldBase-DGrlYpX7.js";import"./Label-BmNpXiOX.js";import"./Switch-BLGSmnhn.js";import"./Paperplane-zbUXROty.js";import"./Legend-61Rfsv8K.js";import"./Select-BGe26u5U.js";import"./Globe-BcFcVMh8.js";import"./PersonRectangle-tHud6AxT.js";import"./Hashtag-CvR0Qua_.js";import"./HardHat-Cdb4OyAz.js";import"./Radio-BP3GWe7y.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",m=g.useRef(null),S=R([m,n]);return g.useEffect(()=>{const f=m.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const d=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!d||d?.contains(G)||(y||M?window.open(d.href,"","noreferrer"):d.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:m}){return r.jsxs(B,{"data-color":e,variant:o,className:m,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const xe={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};const De=["CompanyDashboard","PersonDashboard","UserDashboard"];export{p as CompanyDashboard,l as PersonDashboard,h as UserDashboard,De as __namedExportsOrder,xe as default};
