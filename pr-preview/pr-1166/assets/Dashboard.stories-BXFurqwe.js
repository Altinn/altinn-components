"use client";import{r as g,j as r}from"./iframe-0B_Yudin.js";import{u as A,S as u}from"./useAdmin-1r7fYSsy.js";import{D as C}from"./DashboardHeader-Cr7iyGQe.js";import{G as b}from"./Grid-C0J4kYmo.js";import{u as R,S as P}from"./use-merge-refs-ymJsCjoB.js";import{c as H}from"./lite-DaUVFjkg.js";import{I as _}from"./ItemMedia-DPzqoyVf.js";import{H as E}from"./Heading-iCNnL7gN.js";import{T as L}from"./Typography-WSorE15D.js";import{a as x}from"./HeartFill-B029Znip.js";import{S as D}from"./Bell-I9jdyPhB.js";import{S as j}from"./Cog-BFeH_yyK.js";import{u as I}from"./useSettings-CNW_NX3g.js";import{P as k}from"./PageBase-DKSXK-Hh.js";import{a as T}from"./useAccountMenu-CY3f9UY9.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-G8FOBFFN.js";import"./Flex-CcsVAtXA.js";import"./index-bzqtFzN_.js";import"./SettingsSection-D6rTmT22.js";import"./Section-byNAOZ7t.js";import"./List-BxubJ1l7.js";import"./ListItem-DnHiZFTT.js";import"./Button-CFVlP8iN.js";import"./button-B4QTcVhB.js";import"./Input-B4vKKvBG.js";import"./input-P8iU2s3c.js";import"./XMark-4vnuAWTz.js";import"./useId-BUxMg0Ir.js";import"./Icon-CbCRlB_g.js";import"./Skeleton-CCW5QxrE.js";import"./Avatar-BGwRUT15.js";import"./AvatarGroup-VvayKp3V.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-CRY6Xdys.js";import"./ChevronDown-DyrNm3cx.js";import"./ChevronRight-D1gjYegd.js";import"./Divider-DZtdoQqC.js";import"./SettingsItem-B8uJVMUB.js";import"./SettingsItemBase-CPL8qCc4.js";import"./ItemLink-BmeT6DsA.js";import"./ItemControls-DGPFdAX4.js";import"./SettingsModal-D9Bwsf9R.js";import"./ModalBody-lU1YKfiD.js";import"./ButtonGroup-CSUZvsoD.js";import"./ButtonIcon-C8wYqRVe.js";import"./ButtonLabel-DvXULbxc.js";import"./globalMenu-D7pxO8X4.js";import"./PersonCircle-Cq1dPAel.js";import"./Buildings2-6vsd0VXE.js";import"./InboxFill-W7UakbcK.js";import"./MenuGrid-DYbnBtWP.js";import"./MagnifyingGlass-D-_dPVyR.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-xUjEkd69.js";import"./Archive-DM72aU-A.js";import"./Trash-C5AYfDtF.js";import"./PersonGroup-2P1EMsrG.js";import"./Database-BrNEJlRM.js";import"./ClockDashed-Bz_gcxU0.js";import"./useLayout-DEPJKxwS.js";import"./useLocale-ClBThj-i.js";import"./header-CDdzMi6G.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-1P3axs8E.js";import"./Fieldset-CcucJBMR.js";import"./index-DeiwrdtL.js";import"./TextField-DZRDAZ9k.js";import"./FieldBase-BRRzaSEH.js";import"./Label-BawrqgTw.js";import"./Switch-6FvXDRQ8.js";import"./Paperplane-B0I6H-6c.js";import"./Legend-C6BdcfXm.js";import"./Select-B154wbu_.js";import"./Hashtag-BwFWabg8.js";import"./Files-BJMam6eS.js";import"./TextareaField-E0U3Ibck.js";import"./ExternalLink-p6Z2mzdu.js";import"./Globe-C4inFFJx.js";import"./PersonRectangle-D9Lomlt2.js";import"./HardHat-CokC7EBR.js";import"./Radio-YDtOCziz.js";const w=g.forwardRef(function({asChild:o=!1,variant:i="default",className:t,...s},n){const c=o?P:"div",m=g.useRef(null),S=R([m,n]);return g.useEffect(()=>{const f=m.current,v=({ctrlKey:y,metaKey:M,target:G})=>{const d=f?.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!d||d?.contains(G)||(y||M?window.open(d.href,"","noreferrer"):d.click())};return f?.addEventListener("click",v),()=>f?.removeEventListener("click",v)},[]),r.jsx(c,{className:H("ds-card",t),"data-variant":i,ref:S,...s})}),N=g.forwardRef(function({asChild:o,className:i,...t},s){const n=o?P:"div";return r.jsx(n,{className:H("ds-card__block",i),ref:s,...t})}),B=Object.assign(w,{Block:N});B.Block.displayName="Card.Block";const V="_icon_112og_1",z={icon:V};function a({color:e,theme:o="tinted",icon:i,title:t,href:s,children:n,loading:c,className:m}){return r.jsxs(B,{"data-color":e,variant:o,className:m,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[i&&r.jsx(_,{loading:c,icon:i,className:z.icon}),r.jsx(E,{size:"lg",loading:c,children:s?r.jsx("a",{href:s,children:t}):t})]}),r.jsx(L,{size:"sm",loading:c,children:n})]})}const De={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},p=()=>{const{currentAccount:e}=A({defaultAccountId:"diaspora"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="companyInfo");return r.jsxs(k,{color:"company",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},l=()=>{const{currentAccount:e}=A({defaultAccountId:"freyr"}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-admin--users-page",icon:x,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--access-page",icon:D,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(a,{href:"/iframe.html?id=demo-admin--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(u,{items:i})]})},h=()=>{const{defaultAccount:e}=T({}),{items:o}=I({}),i=o?.filter(t=>t.groupId==="contact");return r.jsxs(k,{color:"person",children:[r.jsx(C,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(b,{cols:3,children:[r.jsx(a,{href:"/iframe.html?id=demo-profile--accounts-page",icon:x,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--alerts-page",icon:D,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(a,{href:"/iframe.html?id=demo-profile--settings-page",icon:j,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(u,{items:i})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
