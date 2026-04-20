"use client";import{r as g,j as r}from"./iframe-BqnZkKPi.js";import{u as A,S as u}from"./useAdmin-D65CDO5V.js";import{D as C}from"./DashboardHeader-F7l-oxfs.js";import{G as b}from"./Grid-C7n7PF46.js";import{u as R,S as P}from"./use-merge-refs-Dh9pzmOc.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-BIsU1ixF.js";import{H as E}from"./Heading-BxNd6ZSD.js";import{T as L}from"./Typography-DM76If-Q.js";import{a as x}from"./HeartFill-BTUqspAB.js";import{S as D}from"./Bell-CeY0A2-k.js";import{S as j}from"./Cog-DELvHUfQ.js";import{u as I}from"./useSettings-DpBh_t06.js";import{P as k}from"./PageBase-BTe2Y4CE.js";import{u as T}from"./useAccountsToolbar-BHxNgyxu.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-b_BS_LFk.js";import"./Flex-Dfcm_wdC.js";import"./index-DAuAfjpD.js";import"./SettingsSection-BUH76TAD.js";import"./Section-CvCvg2MJ.js";import"./List-BhyjlMCS.js";import"./ListItem-C4Du7a0f.js";import"./Button-BhHmd_Fm.js";import"./button-CeqU6--G.js";import"./Input-C33ZQCyq.js";import"./input-xJWBoVha.js";import"./XMark-Y2_85_oc.js";import"./useId-9kVvsXig.js";import"./Icon-CnWjusVH.js";import"./Skeleton-1qnYSSLw.js";import"./Avatar-DNgE8Mou.js";import"./AvatarGroup-CjT1qNUB.js";import"./Badge-wAZ__xuM.js";import"./ChevronUp-Df6M1VDr.js";import"./ChevronDown-CoVqqo9t.js";import"./ChevronRight-DE1wtPln.js";import"./Divider-BztRnATF.js";import"./SettingsItem-CL-7jNv1.js";import"./SettingsItemBase--Dvcwneu.js";import"./ItemLink-mzPSXjXe.js";import"./ItemControls-CZQ275uO.js";import"./SettingsModal-Ds32jFFb.js";import"./ModalBase-CxE9fIF-.js";import"./ModalBody-B72hH_Lv.js";import"./ButtonGroup-DF4p7rG3.js";import"./ButtonIcon-dIUFz82l.js";import"./ButtonLabel-DoJ9xNj_.js";import"./globalMenu-BdhfA5so.js";import"./PadlockLockedFill-DWUZVu94.js";import"./Buildings2-CX0IGr76.js";import"./InboxFill-nxlzxk7U.js";import"./MenuGrid-DoGLOC2Q.js";import"./MagnifyingGlass-BqeXJqhd.js";import"./PersonCircle-De8axjJC.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-CBUJ6BTp.js";import"./Archive-BMrgF3IC.js";import"./Trash-CfRAqYTy.js";import"./PersonGroup-BgXRnA9d.js";import"./Database-CkVppWcX.js";import"./ClockDashed-BB8orsTQ.js";import"./useLayout-BOWIPAfQ.js";import"./useSearchbar-CeIlbEZP.js";import"./useLocale-t45hRxiN.js";import"./useAccountMenu-DqzCHNG-.js";import"./header-CL72BpvY.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-Clj8nPui.js";import"./Fieldset-Cg5MupaB.js";import"./index-wnzGLxld.js";import"./TextField-D-rWllbm.js";import"./FieldBase-BELBUfOz.js";import"./Label-CWCdrO7p.js";import"./Switch-BBnTu_Uu.js";import"./Paperplane-CPYXls_I.js";import"./Legend-dRW6Ps_Y.js";import"./Select-CbCXm9ze.js";import"./Globe-C0LXQqCK.js";import"./PadlockLocked-DRp9Nxaq.js";import"./PersonRectangle-BlN5COSq.js";import"./Hashtag-BCwxwHS-.js";import"./HardHat-BoZetEkd.js";import"./Radio-1G_nl-n0.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",m=g.useRef(null),S=R([m,n]);return g.useEffect(()=>{const f=m.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const d=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!d||d?.contains(G)||(y||M?window.open(d.href,"","noreferrer"):d.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:m}){return r.jsxs(B,{"data-color":e,variant:o,className:m,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const De={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
