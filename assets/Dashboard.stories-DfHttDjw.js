"use client";import{r as g,j as r}from"./iframe-DRbAvM8B.js";import{u as A,S as u}from"./useAdmin-CqZygQO5.js";import{D as C}from"./DashboardHeader-JZUHhyDw.js";import{G as b}from"./Grid-DLnGSWRe.js";import{u as R,S as P}from"./use-merge-refs-BRHMCtFk.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-DLqoeXZM.js";import{H as E}from"./Heading-aiLobBhZ.js";import{T as L}from"./Typography-Da6zx1kt.js";import{a as x}from"./HeartFill-Wk84ovd5.js";import{S as D}from"./Bell-CrIQAd7G.js";import{S as j}from"./Cog-BvyEEemc.js";import{u as I}from"./useSettings-j3ZA3IgR.js";import{P as k}from"./PageBase-B2fJWf6C.js";import{u as T}from"./useAccountsToolbar-DsXxsXAF.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-BNYBCPCQ.js";import"./Flex-DfEZbiAr.js";import"./index-Dpt5RUeZ.js";import"./SettingsSection-7tq97RBd.js";import"./Section-eG7NPuGp.js";import"./List-DqiN2axT.js";import"./ListItem-B48A-xDW.js";import"./Button-DXRH0CtL.js";import"./button-DB6SpB_q.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./XMark-BeNK6Eym.js";import"./useId-p3Uu13R2.js";import"./Icon-BB196-C1.js";import"./Skeleton-C6w0Fovi.js";import"./Avatar-DHw0Umd5.js";import"./AvatarGroup-BZTkgKpW.js";import"./Badge-B0bOgxTq.js";import"./ChevronUp-DFhYQLlv.js";import"./ChevronDown-D8-ttEmo.js";import"./ChevronRight-BIwAZUpi.js";import"./Divider-CSQOdO1f.js";import"./SettingsItem-CenHAcE6.js";import"./SettingsItemBase-CIv-jZJU.js";import"./SettingsModal-sRXVYMRo.js";import"./ModalBase-OEJeuyA3.js";import"./ModalBody-DFMk_yAO.js";import"./ButtonGroup-r6m6YA7P.js";import"./ButtonIcon-rceAdK8H.js";import"./ButtonLabel-DCtnGfPd.js";import"./globalMenu-DHnDMiSf.js";import"./PadlockLockedFill-D8BKctec.js";import"./Buildings2-CmC2WHsf.js";import"./InboxFill-C89p-26o.js";import"./MenuGrid-BfVjhsXm.js";import"./MagnifyingGlass-Byb6dLEO.js";import"./PersonCircle-C4jGpZZ2.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BjFdHmBW.js";import"./Archive-Can2FccB.js";import"./Trash-D6ryZk36.js";import"./PersonGroup-C4JcSxHh.js";import"./Database-oOfa_2py.js";import"./ClockDashed-BWgjUcJM.js";import"./useLayout-2uKxPayo.js";import"./useSearchbar-uSfvromK.js";import"./useLocale-CalhqoQ-.js";import"./useAccountMenu-DkneCUY7.js";import"./header-Lu4j73s_.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-DaUYVTi5.js";import"./Fieldset-DWXEpDF1.js";import"./index-Vs8aUpKw.js";import"./TextField-CJk_az0l.js";import"./FieldBase-_93TCpK5.js";import"./Label-Zr8dB_9-.js";import"./Switch-Wk8JvxKk.js";import"./Paperplane-za3KdJ4u.js";import"./Legend-BKCES3tr.js";import"./Select-ig1VVHXb.js";import"./Globe-MQPa4Wnu.js";import"./PadlockLocked-DGHOWM9Z.js";import"./PersonRectangle-CeXVMlNZ.js";import"./Hashtag-CPeOFID7.js";import"./HardHat-niMv7ob1.js";import"./Radio-CdAZDOUq.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",d=g.useRef(null),S=R([d,n]);return g.useEffect(()=>{const f=d.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const m=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!m||m?.contains(G)||(y||M?window.open(m.href,"","noreferrer"):m.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:d}){return r.jsxs(B,{"data-color":e,variant:o,className:d,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const be={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
