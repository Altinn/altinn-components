"use client";import{r as g,j as r}from"./iframe-BWWyepKi.js";import{u as A,S as u}from"./useAdmin-DdXfgn0v.js";import{D as C}from"./DashboardHeader-C91iOmoL.js";import{G as b}from"./Grid-tB23GgRN.js";import{u as R,S as P}from"./use-merge-refs-CbLzoZkL.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-h4TQiEvV.js";import{H as E}from"./Heading-DQYelGqr.js";import{T as L}from"./Typography-C9vgo_J4.js";import{a as x}from"./HeartFill-vK5Yc91U.js";import{S as D}from"./Bell-CszqB2U-.js";import{S as j}from"./Cog-DzLGL7K1.js";import{u as I}from"./useSettings-5Nw-RwAS.js";import{P as k}from"./PageBase-BxdrjdOf.js";import{u as T}from"./useAccountsToolbar-DoGOBUeg.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-BnIxk9FT.js";import"./Flex-C8xEqik7.js";import"./index-fkRlyifr.js";import"./SettingsSection-DozXiDbI.js";import"./Section-B8U8libR.js";import"./List-QdfDgzch.js";import"./ListItem-EuoB6Qe0.js";import"./Button-DaLP9UzX.js";import"./button-dq33hCwG.js";import"./Input-BcqR7Mo_.js";import"./input-CuS4pR7j.js";import"./XMark-DJOirLMA.js";import"./useId-CMCVT55W.js";import"./Icon-w9oNx8pI.js";import"./Skeleton-CYDyiFkf.js";import"./Avatar-CiKCHN1S.js";import"./AvatarGroup-DPHuhQ41.js";import"./Badge-CiufGa4u.js";import"./Tooltip-C4xENPhK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-BJ9TGsTi.js";import"./ChevronDown-DWRTbX5l.js";import"./ChevronRight-I2Pyvoyr.js";import"./Divider-BnKww764.js";import"./SettingsItem-CBOJpwGZ.js";import"./SettingsItemBase-uMe3DJCi.js";import"./ItemLink-BmfX1JZV.js";import"./ItemControls-jVI2cRmn.js";import"./SettingsModal-Cb4D0vgb.js";import"./ModalBase-6CWkGVU3.js";import"./ModalBody-Bam-amgL.js";import"./ButtonGroup-Bf6ZmgRN.js";import"./ButtonIcon-CknArlPu.js";import"./ButtonLabel-C9m85BPo.js";import"./globalMenu-YVPeMv21.js";import"./PadlockLockedFill-DBaRumWt.js";import"./Buildings2-DRqyTy38.js";import"./InboxFill-CGl49g3V.js";import"./MenuGrid-BzIQlHmL.js";import"./MagnifyingGlass-B591vdqr.js";import"./PersonCircle-BNXH9dF5.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-CCyimZDh.js";import"./Archive-C0BkWIAH.js";import"./Trash-DMXRjDw8.js";import"./PersonGroup-zz0Q4xGr.js";import"./Database-BZlsBtLN.js";import"./ClockDashed-C37jzxs0.js";import"./useLayout-CHR1iOgA.js";import"./useSearchbar-B19bAqr1.js";import"./useLocale-g-BV4uvP.js";import"./useAccountMenu-vBHQIgJZ.js";import"./header-B_hXxrfF.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-BYfI8EMJ.js";import"./Fieldset-B2fp5dSJ.js";import"./index-2Prco8uk.js";import"./TextField-RXQ8ysQd.js";import"./FieldBase-DnRTsvox.js";import"./Label-DYc4A36I.js";import"./Switch-Cap1vkPZ.js";import"./Paperplane-Dcn2f9V8.js";import"./Legend-Cp-3QYGI.js";import"./Select-Du6Gz-2H.js";import"./Globe-qk8GfdhN.js";import"./PadlockLocked-BoC2y4lf.js";import"./PersonRectangle-D4fhb2gd.js";import"./Hashtag-ckNaSEa_.js";import"./HardHat-43SKMvsd.js";import"./Radio-DL-wcDme.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",m=g.useRef(null),S=R([m,n]);return g.useEffect(()=>{const f=m.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const d=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!d||d?.contains(G)||(y||M?window.open(d.href,"","noreferrer"):d.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:m}){return r.jsxs(B,{"data-color":e,variant:o,className:m,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const Ie={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
