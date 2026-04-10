"use client";import{r as g,j as r}from"./iframe-BmFIVBn_.js";import{u as A,S as u}from"./useAdmin-7qmzZKPn.js";import{D as C}from"./DashboardHeader-SA79v41t.js";import{G as b}from"./Grid-CJ04n8bp.js";import{u as R,S as P}from"./use-merge-refs-C8jIJdDy.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-CCYQNyqL.js";import{H as E}from"./Heading-D2Zb4ZMb.js";import{T as L}from"./Typography-CMiy0gec.js";import{a as x}from"./HeartFill-DTduOV9l.js";import{S as D}from"./Bell-DITbeRov.js";import{S as j}from"./Cog-B6LLrtyj.js";import{u as I}from"./useSettings-LeWQjRDy.js";import{P as k}from"./PageBase-PLrFuzq6.js";import{u as T}from"./useAccountsToolbar-BQCyNlKc.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-BRAeQdeQ.js";import"./Flex-CFezmhlL.js";import"./index-3BUTcXKg.js";import"./SettingsSection--CUIl9Kc.js";import"./Section-8wZRyHWu.js";import"./List-DKOvmWxK.js";import"./ListItem-CaiNUw8w.js";import"./Button-qEoy6ct0.js";import"./button-DKdxIprw.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./XMark-DPeWQ31a.js";import"./useId-ClegSKnE.js";import"./Icon-zZDqlwOf.js";import"./Skeleton-DRn19mA6.js";import"./Avatar-Zvdkk7EN.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Badge-DoiHwmxA.js";import"./ChevronUp-DNi3P42Z.js";import"./ChevronDown-B_BWwBHT.js";import"./ChevronRight-DcRWf4tm.js";import"./Divider-BzRFkj3B.js";import"./SettingsItem-BsW-V_Xa.js";import"./SettingsItemBase-Ad-naNyj.js";import"./ItemLink-CbhqGqnO.js";import"./ItemControls-B2xjI1HN.js";import"./SettingsModal-CSSxsvFR.js";import"./ModalBase-C8uvGW6d.js";import"./ModalBody-DgmBWAGP.js";import"./ButtonGroup-DOYzKGQP.js";import"./ButtonIcon-BhDAFAtm.js";import"./ButtonLabel-JoMzXma_.js";import"./globalMenu-DAeZ48lp.js";import"./PadlockLockedFill-5oiKD1pI.js";import"./Buildings2-Bp7D6pSC.js";import"./InboxFill-ClSwJPih.js";import"./MenuGrid-Cjzb3ZQ-.js";import"./MagnifyingGlass-B0C_9vni.js";import"./PersonCircle-C0o0J3NY.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-Bo5gTdE7.js";import"./Archive-kTBarS_a.js";import"./Trash-eorIYi8J.js";import"./PersonGroup-D_ev-wbt.js";import"./Database-DmQ_Pgx0.js";import"./ClockDashed-D19_5m9-.js";import"./useLayout-Dpo2Ym2L.js";import"./useSearchbar-DD_1Cprw.js";import"./useLocale-Bf-30zWK.js";import"./useAccountMenu-BonKHbVL.js";import"./header-B_a6SjHF.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-Dq-XqtYP.js";import"./Fieldset-K6715TbB.js";import"./index-32OlLxJ9.js";import"./TextField-DNty29AR.js";import"./FieldBase-Cx6yKeh2.js";import"./Label-D7uBca_a.js";import"./Switch-72xu8gyc.js";import"./Paperplane-DqsufGbp.js";import"./Legend-BHodXxNk.js";import"./Select-DChVWDnB.js";import"./Globe-CS0vj-xA.js";import"./PadlockLocked-C26Pv4Gt.js";import"./PersonRectangle-D7fpt8VR.js";import"./Hashtag-C2-yliRX.js";import"./HardHat-DVWubgnp.js";import"./Radio-C5Gpb00U.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",m=g.useRef(null),S=R([m,n]);return g.useEffect(()=>{const f=m.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const d=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!d||d?.contains(G)||(y||M?window.open(d.href,"","noreferrer"):d.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:m}){return r.jsxs(B,{"data-color":e,variant:o,className:m,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const De={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
