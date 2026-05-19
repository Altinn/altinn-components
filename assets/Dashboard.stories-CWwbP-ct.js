"use client";import{r as g,j as r}from"./iframe-CPVbSj3C.js";import{u as A,S as u}from"./useAdmin-34U7SeXx.js";import{D as C}from"./DashboardHeader-BoRwQwDO.js";import{G as b}from"./Grid-DUbSZOlK.js";import{u as R,S as P}from"./use-merge-refs-14k-yabz.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-C5hW-xxB.js";import{H as E}from"./Heading-Bxz0tryo.js";import{T as L}from"./Typography-CiUpHFvi.js";import{a as x}from"./HeartFill-Diwb-etP.js";import{S as D}from"./Bell-CqEvBRjS.js";import{S as j}from"./Cog-IJaZaMLR.js";import{u as I}from"./useSettings-BJxW6DCe.js";import{P as k}from"./PageBase-DFhlNnxF.js";import{a as T}from"./useAccountMenu-BXGFvz9G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7mUU4Rd.js";import"./useMenu-CE-qOAep.js";import"./SettingsItem-CfKXZHio.js";import"./SettingsItemBase-D1iPa5AE.js";import"./ChevronUp-26jjNeZQ.js";import"./useId-CeU55pH0.js";import"./ChevronDown-Dne2Ro5q.js";import"./ChevronRight-D8cN60Uo.js";import"./ItemLink-C2_R4otY.js";import"./index-B-yq3MoC.js";import"./ItemControls-DA5Yy7AS.js";import"./Badge-DYvIbN7v.js";import"./Tooltip-B8o2LWCL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SettingsModal-BSXdfxkk.js";import"./ModalBody-BKlJM7ar.js";import"./Section-D88C7V2M.js";import"./Flex-DcepQHCt.js";import"./XMark-DWjKCZtX.js";import"./Icon-DFTXBWnL.js";import"./Skeleton-O-y9i0gG.js";import"./Avatar-Ctx52zko.js";import"./AvatarGroup-Dg-4Llzy.js";import"./Button-D-Q0AT9s.js";import"./button-ChrWDnnK.js";import"./ButtonGroup-Cm_Y-nHl.js";import"./ButtonIcon-2zejLvFM.js";import"./ButtonLabel-DpmDeYsj.js";import"./Input-BYE1y6gH.js";import"./input-fAELYQ1t.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-0agvsO0_.js";import"./PersonCircle-D2e_Fk0r.js";import"./Buildings2-DTyd86gG.js";import"./InboxFill-BcVdTZOM.js";import"./MenuGrid-Be7605dr.js";import"./MagnifyingGlass-BOvUZuLn.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-DGWiCv9O.js";import"./Archive-DoTzijFK.js";import"./Trash-CN9HTNng.js";import"./PersonGroup-DJ4S7LrB.js";import"./Database-BNi5bb01.js";import"./ClockDashed-CXAa2KHW.js";import"./useLayout-DHrV6fTQ.js";import"./useLocale-DoH-u2AV.js";import"./header-CEPK6jIJ.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-cpJ8B6bV.js";import"./Fieldset-BN3377Nd.js";import"./index-DZJ03fJe.js";import"./TextField-B-bNJNaA.js";import"./FieldBase-COzHnWja.js";import"./Label-VN1m6SC8.js";import"./Switch-kADCV8Cm.js";import"./Paperplane-CRXG_4uZ.js";import"./Legend-CpIcVSaM.js";import"./Select-CdieHB4s.js";import"./Hashtag-0G57LCLP.js";import"./Files-C6c0nfuQ.js";import"./TextareaField-B0GVqLdH.js";import"./ExternalLink-Ch1r2NDP.js";import"./Globe-B9YHqOf_.js";import"./PersonRectangle-B9vsOc_n.js";import"./HardHat-ZPEh148Z.js";import"./Radio-BIDWppgZ.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",d=g.useRef(null),S=R([d,n]);return g.useEffect(()=>{const f=d.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const m=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!m||m?.contains(G)||(y||M?window.open(m.href,"","noreferrer"):m.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:d}){return r.jsxs(B,{"data-color":e,variant:o,className:d,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const be={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
