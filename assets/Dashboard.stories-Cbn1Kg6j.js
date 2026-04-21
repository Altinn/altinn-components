"use client";import{r as g,j as r}from"./iframe-BNDruhPA.js";import{u as A,S as u}from"./useAdmin-BGwoUsxa.js";import{D as C}from"./DashboardHeader-DDs13rDr.js";import{G as b}from"./Grid-C_V20tkf.js";import{u as R,S as P}from"./use-merge-refs-DHcrFN31.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-C5U6F78e.js";import{H as E}from"./Heading-C1Pb_LrU.js";import{T as L}from"./Typography-0VzQ_bGw.js";import{a as x}from"./HeartFill-Dtg6NhVq.js";import{S as D}from"./Bell-Dx4YFKBq.js";import{S as j}from"./Cog-BlQbBkZk.js";import{u as I}from"./useSettings-p62pEIWM.js";import{P as k}from"./PageBase-BEJ_MPUT.js";import{u as T}from"./useAccountsToolbar-Bke35YwJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-BrVLonhI.js";import"./Flex-DdLGZodm.js";import"./index-JM42q3xD.js";import"./SettingsSection-BA6pNIkE.js";import"./Section-CcOIv3Qj.js";import"./List-Ckq5YGm7.js";import"./ListItem-CLrzKGmW.js";import"./Button-CaDKAluY.js";import"./button-Bu4lXR2T.js";import"./Input-Bq2zza5V.js";import"./input-CeK3s4nJ.js";import"./XMark-vbUnhqfT.js";import"./useId-28rL4Hsl.js";import"./Icon-Ch0vKaKK.js";import"./Skeleton-3vFplc_z.js";import"./Avatar-Bc7K3VQ6.js";import"./AvatarGroup-CBYJn5rG.js";import"./Badge-e7-dfLSt.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-dNDMwZOi.js";import"./ChevronDown-1m-leHy9.js";import"./ChevronRight-Bcu8s-U3.js";import"./Divider-2s9iAeFh.js";import"./SettingsItem-h0OCGsu8.js";import"./SettingsItemBase-DfTHf9Q5.js";import"./ItemLink-B_kfJLa3.js";import"./ItemControls-nx23Lp4C.js";import"./SettingsModal-BEnwQwYs.js";import"./ModalBase-Csr9qX6t.js";import"./ModalBody-BfZsUu8q.js";import"./ButtonGroup-Cj9A7v4t.js";import"./ButtonIcon-DlPFQqJE.js";import"./ButtonLabel-B0odgBfB.js";import"./globalMenu-Cyd6DvA6.js";import"./PadlockLockedFill-fbKrvijm.js";import"./Buildings2-BreMs8ue.js";import"./InboxFill-fA1MI7fW.js";import"./MenuGrid-BXQJX2XF.js";import"./MagnifyingGlass-BEj5aS_0.js";import"./PersonCircle-DVq9OI9o.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-DzaXZGJ9.js";import"./Archive-2uQCDMcb.js";import"./Trash-dW9GgNZJ.js";import"./PersonGroup-D3LFwZvt.js";import"./Database-Cqpfh_2m.js";import"./ClockDashed-DgKNOZHi.js";import"./useLayout-DneTlG0l.js";import"./useSearchbar-BmsH9U3D.js";import"./useLocale-CX_3bC68.js";import"./useAccountMenu-CGLd_608.js";import"./header-B-zCr0Lr.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-Bss46XCz.js";import"./Fieldset-DP0tXg_B.js";import"./index-BuvBvGLs.js";import"./TextField-sZteiMxb.js";import"./FieldBase-CqddQ4KB.js";import"./Label-DEPud0Ho.js";import"./Switch-CRz5pM3y.js";import"./Paperplane-CWw-_jkg.js";import"./Legend-D6gKHICV.js";import"./Select-B68jR6ww.js";import"./Globe-puhqCle3.js";import"./PadlockLocked-oQs_26Wi.js";import"./PersonRectangle-Br0dw0A6.js";import"./Hashtag-DIp8g-tX.js";import"./HardHat-C6f_i-IU.js";import"./Radio-BoJZLFfp.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",m=g.useRef(null),S=R([m,n]);return g.useEffect(()=>{const f=m.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const d=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!d||d?.contains(G)||(y||M?window.open(d.href,"","noreferrer"):d.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:m}){return r.jsxs(B,{"data-color":e,variant:o,className:m,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const Ie={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
