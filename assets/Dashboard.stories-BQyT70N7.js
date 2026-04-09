"use client";import{r as g,j as r}from"./iframe-DgiLb7Jh.js";import{u as A,S as u}from"./useAdmin-ApOUC208.js";import{D as C}from"./DashboardHeader-C-daQuIS.js";import{G as b}from"./Grid-CgPOWGN9.js";import{u as R,S as P}from"./use-merge-refs-CpvzIuY-.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-BvSNOAVc.js";import{H as E}from"./Heading-CAIwUoS2.js";import{T as L}from"./Typography-Bp8CNLT3.js";import{a as x}from"./HeartFill-BCkF_MLv.js";import{S as D}from"./Bell-BkL0-15N.js";import{S as j}from"./Cog-CrSOBAg1.js";import{u as I}from"./useSettings-CSBZxJf3.js";import{P as k}from"./PageBase-fhmQRwK0.js";import{u as T}from"./useAccountsToolbar-D87yQfAd.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-7q5OpfBf.js";import"./Flex-BfnRV8tR.js";import"./index-CzzvqmNv.js";import"./SettingsSection-CjPQtDT3.js";import"./Section-BoeinIOl.js";import"./List-DTj7XRDi.js";import"./ListItem-DCHK_eIp.js";import"./Button-D7CoEZHH.js";import"./button-2pQtb28r.js";import"./Input-Cmck_kaL.js";import"./input-BBC2L6cA.js";import"./XMark-DE16CL-6.js";import"./useId-6J1VG5PF.js";import"./Icon-uoDJWBW9.js";import"./Skeleton-CjXkBVSw.js";import"./Avatar-D2ea3_hU.js";import"./AvatarGroup-BGNg7yRW.js";import"./Badge-DFo-bNGw.js";import"./ChevronUp-X_MpgVb_.js";import"./ChevronDown-1x60-vzB.js";import"./ChevronRight-B8GqJ6hU.js";import"./Divider-D-bz7DwV.js";import"./SettingsItem-rb0D60Fb.js";import"./SettingsItemBase-CIYWNZwc.js";import"./SettingsModal-BHJhNZE_.js";import"./ModalBase-BLc5GE5E.js";import"./ModalBody-CYaAfA_z.js";import"./ButtonGroup-Ds9mrFFQ.js";import"./ButtonIcon-CpeMN0SU.js";import"./ButtonLabel-Ch_U16-K.js";import"./globalMenu-6DJB3M--.js";import"./PadlockLockedFill-CO86K5pC.js";import"./Buildings2-B3-eOzM1.js";import"./InboxFill-2LP2zszg.js";import"./MenuGrid-DDphszev.js";import"./MagnifyingGlass-C5v4zKU0.js";import"./PersonCircle-Cp_h5SKP.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BMlh_PGy.js";import"./Archive-DCJg-9Yj.js";import"./Trash-1SNvNmMf.js";import"./PersonGroup-DDZDE6nP.js";import"./Database-ChJm0pp9.js";import"./ClockDashed-CKcQn27N.js";import"./useLayout-C4mZw3Qd.js";import"./useSearchbar-D8pRqDsa.js";import"./useLocale-Ckhi8jiz.js";import"./useAccountMenu-DhXEg9tW.js";import"./header-B_Ww3_aM.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-C3KXFHAg.js";import"./Fieldset-kjl2AGn_.js";import"./index-Cu0iGtDM.js";import"./TextField-vX1ciD8r.js";import"./FieldBase-B0t89PB6.js";import"./Label-6LQ7LXNA.js";import"./Switch-CQ9i4TBM.js";import"./Paperplane-BqolTNIK.js";import"./Legend-ChpdoyKv.js";import"./Select-d9Vhco2j.js";import"./Globe-r95Jct_q.js";import"./PadlockLocked-CvlPqwA8.js";import"./PersonRectangle-D6B2rTVm.js";import"./Hashtag-BhArrjYC.js";import"./HardHat-DvXfeeVJ.js";import"./Radio-CplDs62y.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",d=g.useRef(null),S=R([d,n]);return g.useEffect(()=>{const f=d.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const m=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!m||m?.contains(G)||(y||M?window.open(m.href,"","noreferrer"):m.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:d}){return r.jsxs(B,{"data-color":e,variant:o,className:d,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const be={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
