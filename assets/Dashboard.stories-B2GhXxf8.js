"use client";import{r as g,j as r}from"./iframe-B1AqnzaQ.js";import{u as A,S as u}from"./useAdmin-DNrjpSfP.js";import{D as C}from"./DashboardHeader-DGe_ICXV.js";import{G as b}from"./Grid-GlF26RN2.js";import{u as R,S as P}from"./use-merge-refs-BdRYIeb-.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-D13Mes1V.js";import{H as E}from"./Heading-Rbp_06UC.js";import{T as L}from"./Typography-lvuy6SF3.js";import{a as x}from"./HeartFill-DxrYEi1K.js";import{S as D}from"./Bell-BhIfx4Q_.js";import{S as j}from"./Cog-yauKi9_t.js";import{u as I}from"./useSettings-Dn5bWhXA.js";import{P as k}from"./PageBase-CFP6B5zG.js";import{u as T}from"./useAccountsToolbar-CnEYgc0z.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-5Lc1jfY6.js";import"./Flex-DsTgjl9e.js";import"./index-Ddi2Dmvi.js";import"./SettingsSection-GZbxYuVq.js";import"./Section-BiNpoqqK.js";import"./List-BG7le78U.js";import"./ListItem-DtW6UlaD.js";import"./Button-7DVHhPF2.js";import"./button-HgPz3r79.js";import"./Input-DvVIUV_H.js";import"./input-CzzL8SnL.js";import"./XMark-COJVLPGF.js";import"./useId-D3sFZbtB.js";import"./Icon-68Gi_xA8.js";import"./Skeleton-6Posg2tf.js";import"./Avatar-Dhw0Atsj.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Badge-DUhzLQsC.js";import"./ChevronUp-DDB3rTR_.js";import"./ChevronDown-yd2Fwy4k.js";import"./ChevronRight-BOPTtlba.js";import"./Divider-BmD1gm9l.js";import"./SettingsItem-CV4vhB0N.js";import"./SettingsItemBase-qMCsAtpC.js";import"./SettingsModal-4_6AHUU_.js";import"./ModalBase-D8Fgbk92.js";import"./ModalBody-CFyARQ-s.js";import"./ButtonGroup-Kwyl4wzf.js";import"./ButtonIcon-B4FLSCwL.js";import"./ButtonLabel-CKRky11D.js";import"./globalMenu-CJJB8Q39.js";import"./PadlockLockedFill-wyntw034.js";import"./Buildings2-Dn31Fin1.js";import"./InboxFill-88oeaOtY.js";import"./MenuGrid-tIpDrGJL.js";import"./MagnifyingGlass-CXhi_3qD.js";import"./PersonCircle-BjQ8-HdB.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-PCr6gbaY.js";import"./Archive-BQ-4sTsA.js";import"./Trash-DvhW7kU1.js";import"./PersonGroup-DevNktmG.js";import"./Database-DRyUN6BE.js";import"./ClockDashed-CC6jchBR.js";import"./useLayout-Dc71G93k.js";import"./useSearchbar-5mJdNzZb.js";import"./useLocale-BNDjzm9t.js";import"./useAccountMenu-CB4ETM4w.js";import"./header-BUScdX-T.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-D6JE0bc4.js";import"./Fieldset-RuWcFVb6.js";import"./index-DvbpjXY1.js";import"./TextField-B-n87mcL.js";import"./FieldBase-BfQZNQHG.js";import"./Label-CufZoml2.js";import"./Switch-CES7Axv9.js";import"./Paperplane-DFjmy2p2.js";import"./Legend-Z_ZxrQQ4.js";import"./Select-DzDBsmnL.js";import"./Globe-Ba6M6rzW.js";import"./PadlockLocked-CobcO1qj.js";import"./PersonRectangle-BcACJW9F.js";import"./Hashtag-CGH7zBFa.js";import"./HardHat-SUex8w-Z.js";import"./Radio-nN0-EUtq.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",d=g.useRef(null),S=R([d,n]);return g.useEffect(()=>{const f=d.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const m=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!m||m?.contains(G)||(y||M?window.open(m.href,"","noreferrer"):m.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:d}){return r.jsxs(B,{"data-color":e,variant:o,className:d,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const be={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
