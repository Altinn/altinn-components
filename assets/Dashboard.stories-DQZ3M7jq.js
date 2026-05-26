import{j as r}from"./iframe-C32LkOFR.js";import{u as x,S as c}from"./useAdmin-CCEwi4kV.js";import{D as p}from"./DashboardHeader-C-dVFxy7.js";import{G as l}from"./Grid-BjGWlJ6C.js";import{o as I}from"./tooltip-C1z0ba6x.js";import{I as v}from"./ItemMedia-Bzb68dd0.js";import{H as k}from"./Heading-C2AVc7ZV.js";import{T as A}from"./Typography-BtAt1mkJ.js";import{a as h}from"./HeartFill-C7oIvOKf.js";import{S as g}from"./Bell-CJjrcI_k.js";import{S as f}from"./Cog-CWiinJJW.js";import{u}from"./useSettings-XlRtdpvi.js";import{P as D}from"./PageBase-Dgy6d6kk.js";import{a as P}from"./useAccountMenu-1EjrHnhT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DD5_FiA2.js";import"./useMenu-CglJcFc3.js";import"./SettingsItem-fDU4breZ.js";import"./SettingsItemBase-3DPHee1e.js";import"./ChevronUp-BXoYzDan.js";import"./useId-C6VS968l.js";import"./ChevronDown-CFXYCpRP.js";import"./ChevronRight-BRam3foO.js";import"./ItemLink-BpCtkCJ8.js";import"./index-B41-Gq6i.js";import"./ItemControls-6sDFc5WV.js";import"./Badge-B5rN9dZh.js";import"./Tooltip-D2U0c2nY.js";import"./SettingsModal-BZYvkT5f.js";import"./ModalBody-Dqmc2GiO.js";import"./Section-BW54BVJv.js";import"./Flex-BUJ7sT5C.js";import"./XMark-CJ_7TJfx.js";import"./Icon-ClcJ2Ugl.js";import"./Skeleton-BFp1Ns5z.js";import"./Avatar-Bfhk-MsW.js";import"./AvatarGroup-CngdFV9S.js";import"./Button-DJyTPLgL.js";import"./ButtonGroup-C2Onw-9a.js";import"./ButtonIcon-C8Th3GXI.js";import"./ButtonLabel-zcuLnIEs.js";import"./Input-944JhKVs.js";import"./settlingsList.module-DvhJJNuI.js";import"./globalMenu-D8wHdbGP.js";import"./PersonCircle-NpZjwD6u.js";import"./Buildings2-DWFUVmyZ.js";import"./InboxFill-CFq9SYOT.js";import"./MenuGrid-CUkG-sMG.js";import"./MagnifyingGlass-WQhuuXQl.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BsIrq4-c.js";import"./Archive-DlpjqB3V.js";import"./Trash-C9CuwFFb.js";import"./PersonGroup-D1_1FYwy.js";import"./Database-BdVqRqoM.js";import"./ClockDashed-BYpO9OrU.js";import"./useLayout-DmBG6enH.js";import"./useLocale-dH69KaSQ.js";import"./header-BC6OBGnk.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./useHighlightedText-TWz6a-kb.js";import"./Fieldset-DahoeTWf.js";import"./TextField-9LtiQjkC.js";import"./FieldBase-C4PiPQJY.js";import"./Label--g4FWuur.js";import"./Switch-6v-VyuZR.js";import"./Paperplane-B_b5F-vR.js";import"./Legend-CDBmFhxA.js";import"./Select-BpKBsHPc.js";import"./Hashtag-DqimW4Vg.js";import"./Files-DJI95PEv.js";import"./TextareaField-Dp5Z5Hxs.js";import"./ExternalLink-94qxZIns.js";import"./Globe-AP3W_AdN.js";import"./PersonRectangle-CfSjDWY3.js";import"./HardHat-0Rly635w.js";import"./Radio-D3wXHJV-.js";const H="_icon_112og_1",y={icon:H};function i({color:e,theme:a="tinted",icon:t,title:o,href:b,children:j,loading:d,className:C}){return r.jsxs(I,{"data-color":e,variant:a,className:C,children:[r.jsxs("header",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:"1rem"},children:[t&&r.jsx(v,{loading:d,icon:t,className:y.icon}),r.jsx(k,{size:"lg",loading:d,children:b?r.jsx("a",{href:b,children:o}):o})]}),r.jsx(A,{size:"sm",loading:d,children:j})]})}const re={title:"Page/Dashboard/Dashboard",tags:["beta","autodocs"],parameters:{},args:{}},s=()=>{const{currentAccount:e}=x({defaultAccountId:"diaspora"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="companyInfo");return r.jsxs(D,{color:"company",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},n=()=>{const{currentAccount:e}=x({defaultAccountId:"freyr"}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name||"Company",description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-admin--users-page",icon:h,title:"Brukere",children:r.jsx("p",{children:"Hvem har tilgang til virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--access-page",icon:g,title:"Tilganger",children:r.jsx("p",{children:"Hvilke tilganger har virksomheten?"})}),r.jsx(i,{href:"/iframe.html?id=demo-admin--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Varslinger og andre innstillinger."})})]}),r.jsx(c,{items:t})]})},m=()=>{const{defaultAccount:e}=P({}),{items:a}=u({}),t=a?.filter(o=>o.groupId==="contact");return r.jsxs(D,{color:"person",children:[r.jsx(p,{icon:e?.icon,title:e?.name,description:e?.description}),r.jsxs(l,{cols:3,children:[r.jsx(i,{href:"/iframe.html?id=demo-profile--accounts-page",icon:h,title:"Mine aktører",children:r.jsx("p",{children:"Mine aktører, favoritter og grupper."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--alerts-page",icon:g,title:"Mine varslinger",children:r.jsx("p",{children:"Mine varslingsadresser og varslinger per aktør."})}),r.jsx(i,{href:"/iframe.html?id=demo-profile--settings-page",icon:f,title:"Innstillinger",children:r.jsx("p",{children:"Kontaktinformasjon og andre innstillinger."})})]}),r.jsx(c,{items:t})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const ee=["CompanyDashboard","PersonDashboard","UserDashboard"];export{s as CompanyDashboard,n as PersonDashboard,m as UserDashboard,ee as __namedExportsOrder,re as default};
