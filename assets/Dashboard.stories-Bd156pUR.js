"use client";import{r as g,j as r}from"./iframe-GJv3-kpe.js";import{u as A,S as u}from"./useAdmin-Cyrr8zw_.js";import{D as C}from"./DashboardHeader-C-w9RAOV.js";import{G as b}from"./Grid-T2LPzpxu.js";import{u as R,S as P}from"./use-merge-refs-oF7p1rqv.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-45ogcwRE.js";import{H as E}from"./Heading-CiHDuood.js";import{T as L}from"./Typography-XN79jGlV.js";import{a as x}from"./HeartFill-BWVbn9KR.js";import{S as D}from"./Bell-BTom6BN8.js";import{S as j}from"./Cog-CPTRNbbJ.js";import{u as I}from"./useSettings-BncPUo-3.js";import{P as k}from"./PageBase-BzRsWLMH.js";import{a as T}from"./useAccountMenu-DIz_6x6q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CNHiDjij.js";import"./useMenu-D_O6qRR4.js";import"./SettingsItem-Zl-WEsCW.js";import"./SettingsItemBase-C5TELNS3.js";import"./ChevronUp-DpWMs-eZ.js";import"./useId-B1GQrjht.js";import"./ChevronDown-DZsHrJjp.js";import"./ChevronRight-C3wqtQo3.js";import"./ItemLink-Pose4tqX.js";import"./index-D19pPnAw.js";import"./ItemControls-3C4JbZ3m.js";import"./Badge-CyLczarF.js";import"./Tooltip-Dv6bEDCe.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SettingsModal-BtcjVjo_.js";import"./ModalBody-C4Y7ExYH.js";import"./Section-BvBlt0Cn.js";import"./Flex-CxS25VqD.js";import"./XMark-D7blLnze.js";import"./Icon-DKgAzIsH.js";import"./Skeleton-dVNdeapn.js";import"./Avatar-CGv-fnY8.js";import"./AvatarGroup-DxuzyW4n.js";import"./Button-XgEODhFb.js";import"./button-5jjXov6B.js";import"./ButtonGroup-CkGxccE7.js";import"./ButtonIcon-Bi2Ix8OH.js";import"./ButtonLabel-BZ1WKaDO.js";import"./Input-WbVs78EM.js";import"./input-B1NrCnvc.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-B4GmlJBL.js";import"./PersonCircle-9EKdXSyZ.js";import"./Buildings2-Bfg_uNMu.js";import"./InboxFill-Cnv6fcar.js";import"./MenuGrid-B538mca7.js";import"./MagnifyingGlass-a5jU8Ia_.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-B5mmMKvT.js";import"./Archive-CmHW744W.js";import"./Trash-CCKQd2Hf.js";import"./PersonGroup-BIgVkPDc.js";import"./Database-C_E5O-bb.js";import"./ClockDashed-BA999rwy.js";import"./useLayout-Dumh26yR.js";import"./useLocale-CyABlUyR.js";import"./header-DzC44STw.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-ClfYglU-.js";import"./Fieldset-Dcg2wbOC.js";import"./index-OoPsm9QB.js";import"./TextField-Czkxag-i.js";import"./FieldBase-D2hpNZAE.js";import"./Label-Bx3ShTJ6.js";import"./Switch-DmKXGw5v.js";import"./Paperplane-BFgvwcSL.js";import"./Legend-BZWVXf06.js";import"./Select-13zMpR2T.js";import"./Hashtag-rSQt18c9.js";import"./Files-C1kAKp57.js";import"./TextareaField-BehrlLUN.js";import"./ExternalLink-a1u1LKSy.js";import"./Globe-CoSwJzs5.js";import"./PersonRectangle-DBiiCCn_.js";import"./HardHat-Drupiq1E.js";import"./Radio-CNt0auGm.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",d=g.useRef(null),S=R([d,n]);return g.useEffect(()=>{const f=d.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const m=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!m||m?.contains(G)||(y||M?window.open(m.href,"","noreferrer"):m.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:d}){return r.jsxs(B,{"data-color":e,variant:o,className:d,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const be={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
