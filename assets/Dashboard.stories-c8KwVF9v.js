"use client";import{r as g,j as r}from"./iframe-CZMLD2fe.js";import{u as A,S as u}from"./useAdmin-Buaw6TYZ.js";import{D as C}from"./DashboardHeader-CnGZSZnV.js";import{G as b}from"./Grid-B5oV1DD_.js";import{u as R,S as P}from"./use-merge-refs-BZH6UNTX.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-CE_zTi22.js";import{H as E}from"./Heading-5rlhad8Q.js";import{T as L}from"./Typography-BegW4Ytw.js";import{a as x}from"./HeartFill-Bo9xq64m.js";import{S as D}from"./Bell-gRSHSOzF.js";import{S as j}from"./Cog-B6r2Lzik.js";import{u as I}from"./useSettings-C9BWBCnv.js";import{P as k}from"./PageBase-DHcq2BZc.js";import{a as T}from"./useAccountMenu-BUPU4Djz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQNCMx5k.js";import"./useMenu-CEG7UMF2.js";import"./SettingsItem-uM6SM568.js";import"./SettingsItemBase-C4lOIklE.js";import"./ChevronUp-C_Nv0CUA.js";import"./useId-Dmu9AgSD.js";import"./ChevronDown-Bjx7qU4A.js";import"./ChevronRight-7zRCvc5i.js";import"./ItemLink-D5-BdpwL.js";import"./index-iGjPLQV7.js";import"./ItemControls-CSi2HZsx.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SettingsModal-BPOEW54D.js";import"./ModalBody-COFFml6R.js";import"./Section-B1dSFwPq.js";import"./Flex-oWhCvzqt.js";import"./XMark-BBRiAlI8.js";import"./Icon-CbE8dCFV.js";import"./Skeleton-D52MvI5U.js";import"./Avatar-DzGFAhDt.js";import"./AvatarGroup-sNwukvT8.js";import"./Button-z0ZioQWK.js";import"./button-CZknkFMR.js";import"./ButtonGroup-lppFG0T2.js";import"./ButtonIcon-BscAx0sF.js";import"./ButtonLabel-k_kFU7aM.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-CThTZovX.js";import"./PersonCircle-Cnz-oc73.js";import"./Buildings2-Cd8pIexL.js";import"./InboxFill-dmJCO2GG.js";import"./MenuGrid-GwGTD_sm.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BvWd1gs8.js";import"./Archive-DXvpD1-K.js";import"./Trash-CFAM7fxG.js";import"./PersonGroup-DCgNIRBx.js";import"./Database-bgluG3zD.js";import"./ClockDashed-RUw66Dcn.js";import"./useLayout-_ltsB0Y1.js";import"./useLocale-CbEV2YSF.js";import"./header-DP5aZFPj.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-CmlayFSP.js";import"./Fieldset-CaCWnSVo.js";import"./index-DZ8nICMn.js";import"./TextField-DWuCPUHk.js";import"./FieldBase-bsYRos9m.js";import"./Label-C0JPWrbN.js";import"./Switch-k_GymHg0.js";import"./Paperplane-DD3Cg4Ek.js";import"./Legend-DXD0lulK.js";import"./Select-D36QtqhA.js";import"./Hashtag-CtqGZ9Om.js";import"./Files-DoUTt0xG.js";import"./TextareaField-Dr9iQHAh.js";import"./ExternalLink-CtshmN9W.js";import"./Globe-BgtTiwhv.js";import"./PersonRectangle-Bk_Fu97Q.js";import"./HardHat-B0fVvnMp.js";import"./Radio-v1-7lYhA.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",d=g.useRef(null),S=R([d,n]);return g.useEffect(()=>{const f=d.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const m=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!m||m?.contains(G)||(y||M?window.open(m.href,"","noreferrer"):m.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:d}){return r.jsxs(B,{"data-color":e,variant:o,className:d,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const be={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
