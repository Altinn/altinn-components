"use client";import{r as g,j as r}from"./iframe-CpLxKnDM.js";import{u as A,S as u}from"./useAdmin-BKxDaxh8.js";import{D as C}from"./DashboardHeader-C852tt15.js";import{G as b}from"./Grid-CbZC7lmf.js";import{u as R,S as P}from"./use-merge-refs-g_590vId.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-DT3PutY3.js";import{H as E}from"./Heading-Dmt1Hp0l.js";import{T as L}from"./Typography-jv3_dxzw.js";import{a as x}from"./HeartFill-BQxUxVVL.js";import{S as D}from"./Bell-nocAIVI8.js";import{S as j}from"./Cog-Dcy6_jlg.js";import{u as I}from"./useSettings-BFtZzRPe.js";import{P as k}from"./PageBase-BVqmiexz.js";import{a as T}from"./useAccountMenu-BlPdMQXq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B76D54i4.js";import"./useMenu-CCk7NyHy.js";import"./SettingsItem-B4n6Gp8C.js";import"./SettingsItemBase-BBwYFpce.js";import"./ChevronUp-CGssbGWN.js";import"./useId-Dk2QO8VQ.js";import"./ChevronDown-_hDUIJMX.js";import"./ChevronRight-16z1B_cb.js";import"./ItemLink-BTrHhqHl.js";import"./index-BZrYlxzi.js";import"./ItemControls-SBEzslTa.js";import"./Badge-BprayW1R.js";import"./Tooltip-BKj7GKZF.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SettingsModal-7lvDMQRR.js";import"./ModalBody-DeQjF_gb.js";import"./Section-cnHf2d7L.js";import"./Flex-DdRay9SF.js";import"./XMark-BkFwP2BW.js";import"./Icon-xH6stteC.js";import"./Skeleton-B2kLb9z1.js";import"./Avatar-Bh6xe4Ys.js";import"./AvatarGroup-DwxSIihj.js";import"./Button-DKJNFoHr.js";import"./button-DZ9B7a50.js";import"./ButtonGroup-MGSBAJb-.js";import"./ButtonIcon-BTCRLLcP.js";import"./ButtonLabel-BNjF5oc8.js";import"./Input-Cnu7Dubv.js";import"./input-CwcuNrJh.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-BKQnoocv.js";import"./PersonCircle-CA3B10fa.js";import"./Buildings2-CpGh8O8D.js";import"./InboxFill-DISyPVQO.js";import"./MenuGrid-_azA79nh.js";import"./MagnifyingGlass-DhzKRFoX.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BLr2Syot.js";import"./Archive-2zuUqDx-.js";import"./Trash-0aRAlmkw.js";import"./PersonGroup-DQBP7ziK.js";import"./Database-CruB3CCc.js";import"./ClockDashed-CK_NRh5l.js";import"./useLayout-B2TQwHwh.js";import"./useLocale-C2WYZW11.js";import"./header-DjWuerpI.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-De1FlINf.js";import"./Fieldset-B3qzU0ZI.js";import"./index-DjVenMls.js";import"./TextField-Bj7KcJb8.js";import"./FieldBase-zLQdXhmX.js";import"./Label-C0kuzyFW.js";import"./Switch-DtDZT1hR.js";import"./Paperplane-DcLFXl9k.js";import"./Legend-dkhnEcqd.js";import"./Select-B3yofIeC.js";import"./Hashtag-CvAmNLN0.js";import"./Files-ByjI0wSd.js";import"./TextareaField-B6jl7n3S.js";import"./ExternalLink-D7XJBk6a.js";import"./Globe-C7BiUSRN.js";import"./PersonRectangle-CybuTWYn.js";import"./HardHat-BygJ0hBu.js";import"./Radio-C0hWVv_Q.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",d=g.useRef(null),S=R([d,n]);return g.useEffect(()=>{const f=d.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const m=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!m||m?.contains(G)||(y||M?window.open(m.href,"","noreferrer"):m.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:d}){return r.jsxs(B,{"data-color":e,variant:o,className:d,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const be={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
