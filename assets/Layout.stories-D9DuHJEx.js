import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{n as r}from"./inboxMenu-kCHJyKpW.js";import{t as i}from"./Badge-BYXOeMxo.js";import{t as a}from"./RootProvider-CwL6faQJ.js";import{r as o,t as s}from"./accountDataFetchers-CYmAnCPf.js";import{t as c}from"./Heading-CJB15i5Q.js";import{t as l}from"./DialogListGroup--vVbngCh.js";import{t as u}from"./Layout-oRerHG_B.js";import{t as d}from"./List-BNjZuxCc.js";import{t as f}from"./Toolbar-CmziBAS7.js";import{t as p}from"./Flex-SBjIXoOg.js";import{t as m}from"./PageBase-C-dLvRYT.js";import{t as h}from"./useAccountMenu-DXrbjGkx.js";import{r as g}from"./useLocale-C34C1tOZ.js";import{t as _}from"./header-Dw7WTJLI.js";import{t as v}from"./footer-DDWzsXPS.js";import{t as y}from"./useLayout-C1ZVwhw5.js";import{t as b}from"./skipLink-CjZ-szVY.js";import{t as x}from"./inboxSection-DTkdJGPT.js";var S=e(t(),1),C=n(),w={title:`Layout/Layout`,component:u,parameters:{layout:`fullscreen`},args:{theme:`subtle`,skipLink:b,header:_,footer:v,sidebar:{menu:r},children:(0,C.jsxs)(p,{align:`center`,justify:`center`,style:{border:`1px dashed`,width:`100%`,height:`100%`,gap:5},children:[`Content`,(0,C.jsx)(`a`,{href:`https://altinn.no`,children:`with a focusable item`})]}),useGlobalHeader:!0,color:`company`,forceOpenFullScreen:void 0},argTypes:{useGlobalHeader:{control:{type:`boolean`}},color:{control:`select`,options:[`company`,`neutral`,`person`]},forceOpenFullScreen:{control:`select`,options:[!0,!1,void 0]}}},T=e=>{let t=y(e),n={...h({accountId:`diaspora`}),virtualized:!0},r=g({accountId:`diaspora`}),i={accountMenu:n,forceOpenFullScreen:e.forceOpenFullScreen};return(0,C.jsx)(a,{children:(0,C.jsx)(u,{...e,...t,header:{...t.header,accountSelector:i,globalMenu:r},children:e.children})})},E=e=>{let t=y(e),n=g({accountId:`diaspora`}),[r,i]=(0,S.useState)([]),[c,l]=(0,S.useState)(!1),[d,f]=(0,S.useState)(`167536b5-f8ed-4c5a-8f48-0279507e53ae`),p=o({partyListDTO:s(),favoriteAccountUuids:r,onToggleFavorite:e=>{i(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},selfAccountUuid:`167536b5-f8ed-4c5a-8f48-0279507e53ae`,currentAccountUuid:d,onSelectAccount:e=>{f(e)},languageCode:`nb`,isLoading:!1,showDeletedUnits:c,onShowDeletedUnitsChange:e=>{l(e)}});return(0,C.jsx)(a,{languageCode:`nb`,children:(0,C.jsx)(u,{...e,...t,header:{...t.header,accountSelector:p,globalMenu:n},children:e.children})})},D=e=>{let t=y(e),n={...h({accountId:`diaspora`}),virtualized:!0,currentAccount:void 0,items:[]},r=g({accountId:`diaspora`}),i={accountMenu:n,forceOpenFullScreen:e.forceOpenFullScreen},o=()=>{alert(`Login clicked`)};return console.info(r),(0,C.jsx)(a,{children:(0,C.jsx)(u,{...e,...t,header:{...t.header,accountSelector:i,globalMenu:r,onLoginClick:o},children:e.children})})},O=e=>{let t=y(e),n=h({accountId:`diaspora`}),r=g({accountId:`diaspora`}),i={accountMenu:n};return(0,C.jsx)(a,{languageCode:`en`,children:(0,C.jsx)(u,{...e,...t,header:{...t.header,accountSelector:i,globalMenu:r},children:e.children})})},k=e=>{let t=y(e);return(0,C.jsx)(a,{children:(0,C.jsx)(u,{...e,...t,sidebar:{...e.sidebar,sticky:!0},children:(0,C.jsx)(m,{children:(0,C.jsx)(d,{items:Array.from({length:30},(e,t)=>{let n={type:`person`,name:t+`Item `+t*t};return{id:`i`+t,groupId:t>10?`2`:`1`,icon:n,title:`Item ${t+1}`}})})})})})},A=e=>{let t=y(e);return(0,C.jsx)(a,{children:(0,C.jsx)(u,{...e,...t,sidebar:{...e.sidebar,hidden:!0},children:e.children})})},j=e=>{let t=y(e);return(0,C.jsx)(a,{children:(0,C.jsx)(u,{...e,...t,theme:`default`,sidebar:void 0,children:e.children})})},M=e=>{let t=y(e),n=h({accountId:`diaspora`}),r=g({accountId:`diaspora`}),i={accountMenu:n};return(0,C.jsx)(a,{children:(0,C.jsx)(u,{...e,...t,header:{...t.header,accountSelector:i,globalMenu:r},color:`person`,children:e.children})})},N=e=>{let t=y(e),n=h({accountId:`diaspora`}),r=g({accountId:`diaspora`}),o={accountMenu:n};return(0,C.jsx)(a,{children:(0,C.jsx)(u,{...e,...t,header:{...t.header,accountSelector:o,globalMenu:r},sidebar:{...e.sidebar,footer:(0,C.jsx)(i,{label:`Beta`,variant:`base`,color:`neutral`,size:`sm`})},children:e.children})})},P=e=>{let t=y(e),n=h({accountId:`diaspora`}),r=g({accountId:`diaspora`}),i={accountMenu:n},o={...t.sidebar,sticky:!0},s={...t.header,accountSelector:i,globalMenu:r},d={ariaLabel:`Du er her:`,items:[{label:`Innboks`,href:`#`},{label:`Arkiv`,href:`#`}]},p={accountMenu:{label:n?.currentAccount?.title,items:n?.items,searchable:!0},search:{placeholder:`Søk`,collapsible:!0}};return(0,C.jsx)(a,{children:(0,C.jsx)(u,{...e,...t,sidebar:o,header:s,breadcrumbs:d,children:(0,C.jsxs)(m,{children:[(0,C.jsx)(c,{size:`xl`,children:`Page title`}),(0,C.jsx)(f,{...p}),(0,C.jsx)(l,{...x})]})})})};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = {
    ...useAccountMenu({
      accountId: 'diaspora'
    }),
    virtualized: true
  };
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenu,
    forceOpenFullScreen: args.forceOpenFullScreen
  };
  return <RootProvider>
      <Layout {...args} {...layout} header={{
      ...layout.header,
      accountSelector: accountSelector,
      globalMenu: globalMenu
    }}>
        {args.children}
      </Layout>
    </RootProvider>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });

  // Use the useAccountSelector hook to get account menu and loading state
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(false); // Get actual value from user profile
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>('167536b5-f8ed-4c5a-8f48-0279507e53ae');
  const authorizedParties = getAuthorizedPartiesData(); // Fetch your authorized parties data from external source
  const selfAccountUuid = '167536b5-f8ed-4c5a-8f48-0279507e53ae';
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids(prev => prev.includes(uuid) ? prev.filter(id => id !== uuid) : [...prev, uuid]);
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid,
    currentAccountUuid: currentAccountUuid,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: 'nb',
    isLoading: false,
    showDeletedUnits: showDeletedAccounts,
    onShowDeletedUnitsChange: (newValue: boolean) => {
      setShowDeletedAccounts(newValue);
    }
  });
  return <RootProvider languageCode="nb">
      <Layout {...args} {...layout} header={{
      ...layout.header,
      accountSelector: accountSelector,
      globalMenu: globalMenu
    }}>
        {args.children}
      </Layout>
    </RootProvider>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = {
    ...useAccountMenu({
      accountId: 'diaspora'
    }),
    virtualized: true
  };
  const accountMenuNotLoggedIn = {
    ...accountMenu,
    currentAccount: undefined,
    items: []
  };
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenuNotLoggedIn,
    forceOpenFullScreen: args.forceOpenFullScreen
  };
  const onLoginClick = () => {
    alert('Login clicked');
  };
  console.info(globalMenu);
  return <RootProvider>
      <Layout {...args} {...layout} header={{
      ...layout.header,
      accountSelector: accountSelector,
      globalMenu: globalMenu,
      onLoginClick: onLoginClick
    }}>
        {args.children}
      </Layout>
    </RootProvider>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = useAccountMenu({
    accountId: 'diaspora'
  });
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenu
  };
  return <RootProvider languageCode="en">
      <Layout {...args} {...layout} header={{
      ...layout.header,
      accountSelector: accountSelector,
      globalMenu: globalMenu
    }}>
        {args.children}
      </Layout>
    </RootProvider>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  return <RootProvider>
      <Layout {...args} {...layout} sidebar={{
      ...args.sidebar,
      sticky: true
    }}>
        <PageBase>
          <List items={Array.from({
          length: 30
        }, (_, i) => {
          const avatar = {
            type: 'person',
            name: i + 'Item ' + i * i
          };
          return {
            id: 'i' + i,
            groupId: i > 10 ? '2' : '1',
            icon: avatar,
            title: \`Item \${i + 1}\`
          };
        }) as ListItemProps[]} />
        </PageBase>
      </Layout>
    </RootProvider>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  return <RootProvider>
      <Layout {...args} {...layout} sidebar={{
      ...args.sidebar,
      hidden: true
    }}>
        {args.children}
      </Layout>
    </RootProvider>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  return <RootProvider>
      <Layout {...args} {...layout} theme="default" sidebar={undefined}>
        {args.children}
      </Layout>
    </RootProvider>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = useAccountMenu({
    accountId: 'diaspora'
  });
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenu
  };
  return <RootProvider>
      <Layout {...args} {...layout} header={{
      ...layout.header,
      accountSelector: accountSelector,
      globalMenu: globalMenu
    }} color="person">
        {args.children}
      </Layout>
    </RootProvider>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = useAccountMenu({
    accountId: 'diaspora'
  });
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenu
  };
  return <RootProvider>
      <Layout {...args} {...layout} header={{
      ...layout.header,
      accountSelector: accountSelector,
      globalMenu: globalMenu
    }} sidebar={{
      ...args.sidebar,
      footer: <Badge label="Beta" variant="base" color="neutral" size="sm" />
    }}>
        {args.children}
      </Layout>
    </RootProvider>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = useAccountMenu({
    accountId: 'diaspora'
  });
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenu
  };
  const sidebar = {
    ...layout.sidebar,
    sticky: true
  };
  const header = {
    ...layout.header,
    accountSelector: accountSelector,
    globalMenu: globalMenu
  };
  const breadcrumbs = {
    ariaLabel: 'Du er her:',
    items: [{
      label: 'Innboks',
      href: '#'
    }, {
      label: 'Arkiv',
      href: '#'
    }]
  };
  const toolbar = {
    accountMenu: {
      label: accountMenu?.currentAccount?.title,
      items: accountMenu?.items,
      searchable: true
    },
    search: {
      placeholder: 'Søk',
      collapsible: true
    }
  };
  return <RootProvider>
      <Layout {...args} {...layout} sidebar={sidebar} header={header} breadcrumbs={breadcrumbs}>
        <PageBase>
          <Heading size="xl">Page title</Heading>
          <Toolbar {...toolbar} />
          <DialogList {...inboxSection} />
        </PageBase>
      </Layout>
    </RootProvider>;
}`,...P.parameters?.docs?.source}}};var F=[`Preview`,`UsingUseAccountHook`,`LogInView`,`WithEnglishLanguage`,`StickySidebar`,`HiddenSidebar`,`Fullscreen`,`Profile`,`SidebarReference`,`InboxLayout`];export{j as Fullscreen,A as HiddenSidebar,P as InboxLayout,D as LogInView,T as Preview,M as Profile,N as SidebarReference,k as StickySidebar,E as UsingUseAccountHook,O as WithEnglishLanguage,F as __namedExportsOrder,w as default};