"use client";import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./Bell-Dy1Lu3cE.js";import{t as i}from"./useSettings-DhtL7S3O.js";import{n as a,t as o}from"./useAdmin-DJliUQJ1.js";import{t as s}from"./Cog-flszozsV.js";import{n as c}from"./HeartFill-C1lqhZrU.js";import{n as l,t as u}from"./use-merge-refs-C9Va2EMf.js";import{t as d}from"./lite-Bi5SuAl9.js";import{t as f}from"./ItemMedia-CyT5D_SF.js";import{t as p}from"./Typography-DBWZN96y.js";import{t as m}from"./Heading-CJB15i5Q.js";import{t as h}from"./PageBase-C-dLvRYT.js";import{t as g}from"./Grid-DmCi2t9R.js";import{t as _}from"./DashboardHeader-DLAors9B.js";import{t as v}from"./useAccountsToolbar-B3xMUr3_.js";var y=n(),b=e(t(),1),x=(0,b.forwardRef)(function({asChild:e=!1,variant:t=`default`,className:n,...r},i){let a=e?l:`div`,o=(0,b.useRef)(null),s=u([o,i]);return(0,b.useEffect)(()=>{let e=o.current,t=({ctrlKey:t,metaKey:n,target:r})=>{let i=e?.querySelector(`:is(h1,h2,h3,h4,h5,h6) a`);!i||i?.contains(r)||(t||n?window.open(i.href,``,`noreferrer`):i.click())};return e?.addEventListener(`click`,t),()=>e?.removeEventListener(`click`,t)},[]),(0,y.jsx)(a,{className:d(`ds-card`,n),"data-variant":t,ref:s,...r})}),S=(0,b.forwardRef)(function({asChild:e,className:t,...n},r){return(0,y.jsx)(e?l:`div`,{className:d(`ds-card__block`,t),ref:r,...n})}),C=Object.assign(x,{Block:S});C.Block.displayName=`Card.Block`;var w={icon:`_icon_112og_1`,avatarGroup:`_avatarGroup_112og_29`,badge:`_badge_112og_33`};function T({color:e,theme:t=`tinted`,icon:n,title:r,href:i,children:a,loading:o,className:s}){return(0,y.jsxs)(C,{"data-color":e,variant:t,className:s,children:[(0,y.jsxs)(`header`,{style:{display:`flex`,flexDirection:`column`,alignItems:`flex-start`,rowGap:`1rem`},children:[n&&(0,y.jsx)(f,{loading:o,icon:n,className:w.icon}),(0,y.jsx)(m,{size:`lg`,loading:o,children:i?(0,y.jsx)(`a`,{href:i,children:r}):r})]}),(0,y.jsx)(p,{size:`sm`,loading:o,children:a})]})}var E={title:`Page/Dashboard/Dashboard`,tags:[`beta`,`autodocs`],parameters:{},args:{}},D=()=>{let{currentAccount:e}=o({defaultAccountId:`diaspora`}),{items:t}=i({}),n=t?.filter(e=>e.groupId===`companyInfo`);return(0,y.jsxs)(h,{color:`company`,children:[(0,y.jsx)(_,{icon:e?.icon,title:e?.name||`Company`,description:e?.description}),(0,y.jsxs)(g,{cols:3,children:[(0,y.jsx)(T,{href:`/iframe.html?id=demo-admin--users-page`,icon:c,title:`Brukere`,children:(0,y.jsx)(`p`,{children:`Hvem har tilgang til virksomheten?`})}),(0,y.jsx)(T,{href:`/iframe.html?id=demo-admin--access-page`,icon:r,title:`Tilganger`,children:(0,y.jsx)(`p`,{children:`Hvilke tilganger har virksomheten?`})}),(0,y.jsx)(T,{href:`/iframe.html?id=demo-admin--settings-page`,icon:s,title:`Innstillinger`,children:(0,y.jsx)(`p`,{children:`Varslinger og andre innstillinger.`})})]}),(0,y.jsx)(a,{items:n})]})},O=()=>{let{currentAccount:e}=o({defaultAccountId:`freyr`}),{items:t}=i({}),n=t?.filter(e=>e.groupId===`contact`);return(0,y.jsxs)(h,{color:`person`,children:[(0,y.jsx)(_,{icon:e?.icon,title:e?.name||`Company`,description:e?.description}),(0,y.jsxs)(g,{cols:3,children:[(0,y.jsx)(T,{href:`/iframe.html?id=demo-admin--users-page`,icon:c,title:`Brukere`,children:(0,y.jsx)(`p`,{children:`Hvem har tilgang til virksomheten?`})}),(0,y.jsx)(T,{href:`/iframe.html?id=demo-admin--access-page`,icon:r,title:`Tilganger`,children:(0,y.jsx)(`p`,{children:`Hvilke tilganger har virksomheten?`})}),(0,y.jsx)(T,{href:`/iframe.html?id=demo-admin--settings-page`,icon:s,title:`Innstillinger`,children:(0,y.jsx)(`p`,{children:`Varslinger og andre innstillinger.`})})]}),(0,y.jsx)(a,{items:n})]})},k=()=>{let{defaultAccount:e}=v({}),{items:t}=i({}),n=t?.filter(e=>e.groupId===`contact`);return(0,y.jsxs)(h,{color:`person`,children:[(0,y.jsx)(_,{icon:e?.icon,title:e?.name,description:e?.description}),(0,y.jsxs)(g,{cols:3,children:[(0,y.jsx)(T,{href:`/iframe.html?id=demo-profile--accounts-page`,icon:c,title:`Mine aktører`,children:(0,y.jsx)(`p`,{children:`Mine aktører, favoritter og grupper.`})}),(0,y.jsx)(T,{href:`/iframe.html?id=demo-profile--alerts-page`,icon:r,title:`Mine varslinger`,children:(0,y.jsx)(`p`,{children:`Mine varslingsadresser og varslinger per aktør.`})}),(0,y.jsx)(T,{href:`/iframe.html?id=demo-profile--settings-page`,icon:s,title:`Innstillinger`,children:(0,y.jsx)(`p`,{children:`Kontaktinformasjon og andre innstillinger.`})})]}),(0,y.jsx)(a,{items:n})]})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};var A=[`CompanyDashboard`,`PersonDashboard`,`UserDashboard`];export{D as CompanyDashboard,O as PersonDashboard,k as UserDashboard,A as __namedExportsOrder,E as default};