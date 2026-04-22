"use client";import{r as g,j as r}from"./iframe-C5YDQF8t.js";import{u as A,S as u}from"./useAdmin-BZMqGBN2.js";import{D as C}from"./DashboardHeader-IaGdqcXO.js";import{G as b}from"./Grid-CS2ZB3tY.js";import{u as R,S as P}from"./use-merge-refs-C8sdFhVy.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-FRtQjDq_.js";import{H as E}from"./Heading-DpfkgbSv.js";import{T as L}from"./Typography-yp9Qf0rT.js";import{a as x}from"./HeartFill-CPf7_OAe.js";import{S as D}from"./Bell-Ks7Lgkha.js";import{S as j}from"./Cog-CVxM7LV3.js";import{u as I}from"./useSettings-D7tbSVK8.js";import{P as k}from"./PageBase-jqFQ7DAa.js";import{u as T}from"./useAccountsToolbar-BOH-O7aK.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-BhI6CQre.js";import"./Flex-6suuLzFU.js";import"./index-Wv9BNi45.js";import"./SettingsSection-CrVOSZMb.js";import"./Section-Dr7qREfG.js";import"./List-Boa0b6al.js";import"./ListItem-Drd2VZlP.js";import"./Button-BZAGm3c0.js";import"./button-CCJ82TCy.js";import"./Input-CBT5zBbT.js";import"./input-D6WzUQ9f.js";import"./XMark-DdTqeOk-.js";import"./useId-D8_RB8wa.js";import"./Icon-CecLgcvt.js";import"./Skeleton-Drx-E9Fo.js";import"./Avatar-BGjXXmrj.js";import"./AvatarGroup-DQC0T1Vh.js";import"./Badge-BloMeVT9.js";import"./Tooltip-BhYnScUh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-4JOxusLP.js";import"./ChevronDown-C8XWqM8H.js";import"./ChevronRight-N4TcqxLw.js";import"./Divider-Dv1yq08v.js";import"./SettingsItem-CnkC2zcK.js";import"./SettingsItemBase-CR7xFp4Y.js";import"./ItemLink-BHq-nEBb.js";import"./ItemControls-B4P5BjHw.js";import"./SettingsModal-BBU9uJSV.js";import"./ModalBase-CZBI8oQS.js";import"./ModalBody-C4j48ml-.js";import"./ButtonGroup-Z2Cev14m.js";import"./ButtonIcon-DRcTjkMx.js";import"./ButtonLabel-CoTsOCoc.js";import"./globalMenu-BxuyzCtB.js";import"./PadlockLockedFill-GHxmhAmq.js";import"./Buildings2-CCtuJzKi.js";import"./InboxFill-BqOp0fif.js";import"./MenuGrid-BF8Rqd0Y.js";import"./MagnifyingGlass-CEZChhW1.js";import"./PersonCircle-BcOgqqgZ.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-CibaDFrx.js";import"./Archive-vblwy2cE.js";import"./Trash-D8RBkZPj.js";import"./PersonGroup-DZ4G6nmF.js";import"./Database-Db7aAZw9.js";import"./ClockDashed-CHE2RCR-.js";import"./useLayout-CfbjcXH0.js";import"./useSearchbar-D6OHoAJK.js";import"./useLocale-MWkbtFJd.js";import"./useAccountMenu-Bm9YPwMm.js";import"./header-CZep_Afd.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-n06FiY88.js";import"./Fieldset-CdSmZIIj.js";import"./index-B1UWFYtY.js";import"./TextField-CFz75KxP.js";import"./FieldBase-BeNWnE8F.js";import"./Label-DtjEPZjV.js";import"./Switch-CCPkcRPo.js";import"./Paperplane-mipTQve3.js";import"./Legend-DdUuSlNL.js";import"./Select-DUIrSk7f.js";import"./Globe-hsiQLHF9.js";import"./PadlockLocked-BITt1ywl.js";import"./PersonRectangle-BrajiotO.js";import"./Hashtag-DrESf4wz.js";import"./HardHat-D-vuGp3n.js";import"./Radio-HqdDVJe-.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",m=g.useRef(null),S=R([m,n]);return g.useEffect(()=>{const f=m.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const d=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!d||d?.contains(G)||(y||M?window.open(d.href,"","noreferrer"):d.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:m}){return r.jsxs(B,{"data-color":e,variant:o,className:m,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const Ie={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
