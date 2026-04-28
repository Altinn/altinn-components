"use client";import{r as g,j as r}from"./iframe-DUgQHy5z.js";import{u as A,S as u}from"./useAdmin-CoBd3EIY.js";import{D as C}from"./DashboardHeader-BcUcE3m3.js";import{G as b}from"./Grid-BxYqsZ9j.js";import{u as R,S as P}from"./use-merge-refs-tN_UguZ4.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-CtpZg4yw.js";import{H as E}from"./Heading-CGuufgH4.js";import{T as L}from"./Typography-CInfIHKg.js";import{a as x}from"./HeartFill-BuCGHZZm.js";import{S as D}from"./Bell-BiViY5Iy.js";import{S as j}from"./Cog-BsmYO-HR.js";import{u as I}from"./useSettings-DsmWlA2C.js";import{P as k}from"./PageBase-BpykcBvq.js";import{u as T}from"./useAccountsToolbar-Bfww5QV_.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-DKqXZTHj.js";import"./Flex-CL-SSZvT.js";import"./index-CHKdKrFD.js";import"./SettingsSection-C11iBrng.js";import"./Section-BJevJr8H.js";import"./List-EmWT1t1G.js";import"./ListItem-BxV254vh.js";import"./Button-DAj4Vb1f.js";import"./button-D0axoqj3.js";import"./Input-DxofbABb.js";import"./input-BKf2w74T.js";import"./XMark-CIC6hSAY.js";import"./useId-BEmmm-9F.js";import"./Icon-D31Usj2D.js";import"./Skeleton-BWHbMU5J.js";import"./Avatar-CQy8D3NB.js";import"./AvatarGroup-DAp73R1d.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-DELRJlHt.js";import"./ChevronDown-BTaF_AA-.js";import"./ChevronRight-DcPr7c69.js";import"./Divider-D8pG1bsQ.js";import"./SettingsItem-CgWPEikZ.js";import"./SettingsItemBase-wZ9q0lCm.js";import"./ItemLink-CrE95sD-.js";import"./ItemControls-eEEzDso3.js";import"./SettingsModal-s9mgmAX2.js";import"./ModalBase-BV94wsIh.js";import"./ModalBody-D3QXhoSO.js";import"./ButtonGroup-Co0foBbC.js";import"./ButtonIcon-CVfXAbGb.js";import"./ButtonLabel-3HSCNrVA.js";import"./globalMenu-CusR0aRA.js";import"./PadlockLockedFill-TYz325xT.js";import"./Buildings2-DA0PLkI3.js";import"./InboxFill-DFOQHMM1.js";import"./MenuGrid-BFXheAVa.js";import"./MagnifyingGlass-Bvm8HrPp.js";import"./PersonCircle-zi-Qrj_q.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BAKdMXQt.js";import"./Archive-BPO8NoVo.js";import"./Trash-palqR5xc.js";import"./PersonGroup-DxmPFG_9.js";import"./Database-C58rlYOR.js";import"./ClockDashed-DdwCFhaK.js";import"./useLayout-DvFqO-kU.js";import"./useSearchbar-DIurRxYg.js";import"./useLocale-D8vLRJkT.js";import"./useAccountMenu-BzhCGaz3.js";import"./header-Ccx5LE26.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-BXy_Fo0F.js";import"./Fieldset-BjkJQ7MW.js";import"./index-DtFuKRqq.js";import"./TextField-Zqz37qEC.js";import"./FieldBase-B3m8Pe0B.js";import"./Label-B-nIzD7x.js";import"./Switch-B4GoFuUp.js";import"./Paperplane-Cg8yEfCh.js";import"./Legend-Bu37csf4.js";import"./Select-QdttHgTw.js";import"./Globe-lsKPohrg.js";import"./PadlockLocked-OauvSILz.js";import"./PersonRectangle-tJD6OoPi.js";import"./Hashtag-CJBwkdMp.js";import"./HardHat-BSIMyE8A.js";import"./Radio-BADgzHrS.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",m=g.useRef(null),S=R([m,n]);return g.useEffect(()=>{const f=m.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const d=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!d||d?.contains(G)||(y||M?window.open(d.href,"","noreferrer"):d.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:m}){return r.jsxs(B,{"data-color":e,variant:o,className:m,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const Ie={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
