var v=Object.defineProperty;var a=(e,i)=>v(e,"name",{value:i,configurable:!0});import{a6 as r,f as k}from"./iframe-CqoHfDH7.js";import{u as C,S as p}from"./useAdmin-BW42CFuH.js";import{D as l}from"./DashboardHeader-C6WLCLKC.js";import{G as h}from"./Grid-CWAnwl83.js";import{I as A}from"./ItemMedia-Sf1LoSEA.js";import{H as P}from"./Heading-CDVcG6kV.js";import{T as H}from"./Typography-rh9OwAWr.js";import{S as g}from"./HeartFill-B5r3HVdm.js";import{S as f}from"./Bell-1EBapfKe.js";import{S as u}from"./Cog-DBTzU0E2.js";import{u as x}from"./useSettings-Bq3jbpqH.js";import{P as D}from"./PageBase-DbvnRoLj.js";import{a as S}from"./useAccountMenu-C9Px9FrJ.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-DC909dob.js";import"./SettingsItem-Bo6CEaex.js";import"./SettingsItemBase-CEruRLCu.js";import"./ChevronUp-BraeWy4W.js";import"./ChevronDown-CPg5ddv-.js";import"./ChevronRight-jzUrV1wz.js";import"./ItemBase-BUrta6st.js";import"./ItemLink-BmS9PXKb.js";import"./ItemControls-BKR8KplG.js";import"./Badge-DFDtKU_w.js";import"./Tooltip-D8wWP0Tl.js";import"./SettingsModal-BNLp4N0e.js";import"./ModalBody-CiSC6mzB.js";import"./Section-DzgRr51L.js";import"./Flex-zJBPm08F.js";import"./Avatar-Co74uJ_O.js";import"./AvatarGroup-DYss91lm.js";import"./ButtonGroup-Cf6Ux1xO.js";import"./ButtonIcon-CRl4eaFH.js";import"./ButtonLabel-DpOqQbl0.js";import"./Input-Dq2UXB3O.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-C7MS5dOU.js";import"./PersonCircle-JGJi10OX.js";import"./Buildings2-jiqwiY34.js";import"./InboxFill-CbXG-sfC.js";import"./MenuGrid-CTbcWMRg.js";import"./MagnifyingGlass-BfkFvkOD.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-BOLbbqTe.js";import"./Archive-BpmgVQNb.js";import"./Trash-DDnja0xf.js";import"./PersonGroup-D0UnOZQP.js";import"./Database-C_uyu5DA.js";import"./ClockDashed-wmdL0CKS.js";import"./useLayout-1O80DLaO.js";import"./useLocale-8rWX-jAY.js";import"./header-BZI1U5Xj.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-CSyjuktp.js";import"./Fieldset-DwzMC0K1.js";import"./TextField-BTeXfEgc.js";import"./FieldBase-B4VpsYUB.js";import"./Field-CmdZ93FX.js";import"./Label-Cw8gPh7D.js";import"./Switch-C1zqeT7L.js";import"./Paperplane-j1dAD8c9.js";import"./Legend-COTGfQvv.js";import"./Select-B84MKG-z.js";import"./Hashtag-CSgnxpym.js";import"./Files-Dr1wJp76.js";import"./TextareaField-BAqrlbcD.js";import"./ExternalLink-BtamLVTz.js";import"./Globe-C2Y4iZjS.js";import"./PadlockLocked-CkehmBLH.js";import"./PersonRectangle-Bz0IGZF0.js";import"./HardHat-B4lBc6wb.js";import"./Radio-DCToKfGP.js";const y="_icon_112og_1",B={icon:y};function o({color:e,theme:i="tinted",icon:t,title:n,href:b,children:j,loading:c,className:I}){return r.jsxs(k,{"data-color":e,variant:i,className:I,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(A,{loading:c,icon:t,className:B.icon}),r.jsx(P,{size:"lg",loading:c,children:b?r.jsx("a",{href:b,children:n}):n})]}),r.jsx(H,{size:"sm",loading:c,children:j})]})}a(o,"DashboardCard");const Zr={title:"Page/Dashboard/Dashboard",tags:["autodocs"],parameters:{},args:{}},s=a(()=>{const{currentAccount:e}=C({defaultAccountId:"diaspora"}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"CompanyDashboard"),m=a(()=>{const{currentAccount:e}=C({defaultAccountId:"freyr"}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-admin--users-page",icon:g,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--access-page",icon:f,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(o,{href:"/iframe.html?id=demo-admin--settings-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"PersonDashboard"),d=a(()=>{const{defaultAccount:e}=S({}),{items:i}=x({}),t=i?.filter(n=>n.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(l,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(h,{cols:3,children:[r.jsx(o,{href:"/iframe.html?id=demo-profile--accounts-page",icon:g,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--notifications",icon:f,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(o,{href:"/iframe.html?id=demo-profile--profile-page",icon:u,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(p,{items:t})]})},"UserDashboard"),$r=["CompanyDashboard","PersonDashboard","UserDashboard"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
        <DashboardCard href="/iframe.html?id=demo-profile--notifications" icon={BellIcon as DashboardCardProps['icon']} title="Mine varslinger">
          <p>Mine varslingsadresser og varslinger per aktør.</p>
        </DashboardCard>
        <DashboardCard href="/iframe.html?id=demo-profile--profile-page" icon={CogIcon as DashboardCardProps['icon']} title="Innstillinger">
          <p>Kontaktinformasjon og andre innstillinger.</p>
        </DashboardCard>
      </Grid>
      <SettingsList items={filteredItems} />
    </PageBase>;
}`,...d.parameters?.docs?.source}}};export{s as CompanyDashboard,m as PersonDashboard,d as UserDashboard,$r as __namedExportsOrder,Zr as default};
