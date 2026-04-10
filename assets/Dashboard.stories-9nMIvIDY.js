"use client";import{r as g,j as r}from"./iframe-CfpleAaJ.js";import{u as A,S as u}from"./useAdmin-DNwpjsKv.js";import{D as C}from"./DashboardHeader--9GQ2N7Y.js";import{G as b}from"./Grid-BqMnOIgh.js";import{u as R,S as P}from"./use-merge-refs-0CqQhLRb.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-BjhAIHdo.js";import{H as E}from"./Heading-SalYmhoh.js";import{T as L}from"./Typography-KZreLO9a.js";import{a as x}from"./HeartFill-CVYiNdJZ.js";import{S as D}from"./Bell-DmOoeAH4.js";import{S as j}from"./Cog-Dsa1bMY2.js";import{u as I}from"./useSettings-CmnnyvbZ.js";import{P as k}from"./PageBase-C9JSYceS.js";import{u as T}from"./useAccountsToolbar-D2q6MUHo.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-DmjfRwxC.js";import"./Flex-Buw28yn5.js";import"./index-C-ZlSrx2.js";import"./SettingsSection-CShbRmzY.js";import"./Section-BT3IVwl3.js";import"./List-Daw1OOj7.js";import"./ListItem-BnFFeCbH.js";import"./Button-DKJP6EaO.js";import"./button-bjClnooE.js";import"./Input-B030prVc.js";import"./input-DZJGjPia.js";import"./XMark-Mr05NtnF.js";import"./useId-CRfl8v3D.js";import"./Icon-DFklvQ48.js";import"./Skeleton-mkQz_xZ6.js";import"./Avatar-BBkC-qEC.js";import"./AvatarGroup-vSwCjNL5.js";import"./Badge-BZbseZdr.js";import"./ChevronUp-C1m4sJ12.js";import"./ChevronDown-QoYlkrAl.js";import"./ChevronRight-F6vNJ-SN.js";import"./Divider-DzmWM7JQ.js";import"./SettingsItem-TFCtHSbx.js";import"./SettingsItemBase-P2wKn9AB.js";import"./SettingsModal-Dv0AM5pv.js";import"./ModalBase-BZf314E6.js";import"./ModalBody-BFcSEnBf.js";import"./ButtonGroup-BCc6e8WW.js";import"./ButtonIcon-C5_cwnJG.js";import"./ButtonLabel-Dr2RfoaG.js";import"./globalMenu-XHPWPcDc.js";import"./PadlockLockedFill-BVrWM9G0.js";import"./Buildings2-dioGEkgK.js";import"./InboxFill-BPQ9Huup.js";import"./MenuGrid-ClMY4bMf.js";import"./MagnifyingGlass-BxOwsnNq.js";import"./PersonCircle-Cm8x5lDG.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-FXH6tBKj.js";import"./Archive-DQXPE0eG.js";import"./Trash-CK0t-M2f.js";import"./PersonGroup-CxKRtnLA.js";import"./Database-Cw9uMXTX.js";import"./ClockDashed-BlB34t9g.js";import"./useLayout-D7GjuGO1.js";import"./useSearchbar-Deuyyb_-.js";import"./useLocale-By0WHoQU.js";import"./useAccountMenu-C-I3dxhF.js";import"./header-BZxPi5AI.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-Cf92T70c.js";import"./Fieldset-Bi9idR3x.js";import"./index-CyGYnAy8.js";import"./TextField-BJh9knYm.js";import"./FieldBase-CjTWVBCf.js";import"./Label-BNnaJGt0.js";import"./Switch-jyXztMT7.js";import"./Paperplane-Bta7MIGc.js";import"./Legend-BNSaJpYz.js";import"./Select-B_HKi5NI.js";import"./Globe-BBA1moor.js";import"./PadlockLocked-DXpwFlf5.js";import"./PersonRectangle-CMzaUePe.js";import"./Hashtag-CwDNnDJl.js";import"./HardHat-CMhJPSA8.js";import"./Radio-38yIVrCS.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",d=g.useRef(null),S=R([d,n]);return g.useEffect(()=>{const f=d.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const m=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!m||m?.contains(G)||(y||M?window.open(m.href,"","noreferrer"):m.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:d}){return r.jsxs(B,{"data-color":e,variant:o,className:d,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const be={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
