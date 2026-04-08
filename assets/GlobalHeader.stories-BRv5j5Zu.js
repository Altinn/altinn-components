import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./RootProvider-CwL6faQJ.js";import{n as i,r as a,t as o}from"./accountDataFetchers-CYmAnCPf.js";import{t as s}from"./GlobalHeader-BPQHBzoX.js";import{r as c}from"./useLocale-C34C1tOZ.js";import{t as l}from"./header-Dw7WTJLI.js";import{t as u}from"./useGlobalHeader-C1GBmQHK.js";var d=e(t(),1),f=n(),p={title:`Layout/GlobalHeader`,component:s,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{...l}},m=()=>(0,f.jsx)(r,{children:(0,f.jsx)(s,{...u({state:`loggedOut`})})}),h=()=>{let e=c({accountId:`diaspora`}),[t,n]=(0,d.useState)([]),[i,l]=(0,d.useState)(`167536b5-f8ed-4c5a-8f48-0279507e53ae`),u=o();return(0,f.jsx)(r,{children:(0,f.jsx)(s,{globalMenu:e,accountSelector:a({partyListDTO:u,favoriteAccountUuids:t,onToggleFavorite:e=>{n(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},selfAccountUuid:`167536b5-f8ed-4c5a-8f48-0279507e53ae`,currentAccountUuid:i,onSelectAccount:e=>{l(e)},languageCode:`nb`,isLoading:!1})})})},g=()=>(0,f.jsx)(r,{children:(0,f.jsx)(s,{...u({currentAccountIndex:5})})}),_=()=>{let{globalMenu:e,accountSelector:t,onLoginClick:n,locale:i}=u({});return(0,f.jsx)(r,{children:(0,f.jsx)(s,{globalMenu:e,accountSelector:{...t,forceOpenFullScreen:!0,accountMenu:{...t?.accountMenu,currentAccount:void 0}},onLoginClick:n,locale:i})})},v=()=>(0,f.jsx)(r,{children:(0,f.jsx)(s,{...u({}),badge:{label:`Beta`,color:`person`}})}),y=()=>(0,f.jsx)(r,{children:(0,f.jsx)(s,{...u({state:`loading`})})}),b=()=>{let{globalMenu:e,accountSelector:t,onLoginClick:n,locale:i}=u({state:`loading`});return(0,f.jsx)(r,{children:(0,f.jsx)(s,{globalMenu:e,accountSelector:{...t,forceOpenFullScreen:!0},onLoginClick:n,locale:i})})},x=()=>{let e=c({accountId:`diaspora`}),[t,n]=(0,d.useState)([]),o=i(1e3),[l,u]=(0,d.useState)(o[0].partyUuid),p=o[0].partyUuid;return(0,f.jsx)(r,{children:(0,f.jsx)(s,{globalMenu:e,accountSelector:a({partyListDTO:o,favoriteAccountUuids:t,onToggleFavorite:e=>{n(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},selfAccountUuid:p,currentAccountUuid:l,onSelectAccount:e=>{u(e)},languageCode:`nb`,isLoading:!1,virtualized:!0})})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loggedOut'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });

  // Use the useAccountSelector hook to get account menu and loading state
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
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
    isLoading: false
  });
  return <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector} />
    </RootProvider>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    currentAccountIndex: 5
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const {
    globalMenu,
    accountSelector,
    onLoginClick,
    locale
  } = useGlobalHeader({});
  return <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={{
      ...accountSelector,
      forceOpenFullScreen: true,
      accountMenu: {
        ...accountSelector?.accountMenu,
        currentAccount: undefined
      }
    } as AccountSelectorProps} onLoginClick={onLoginClick} locale={locale} />
    </RootProvider>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({});
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} badge={{
      label: 'Beta',
      color: 'person'
    }} />
    </RootProvider>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const {
    globalMenu,
    accountSelector,
    onLoginClick,
    locale
  } = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={{
      ...accountSelector,
      forceOpenFullScreen: true
    } as AccountSelectorProps} onLoginClick={onLoginClick} locale={locale} />
    </RootProvider>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const authorizedParties = getLargeAuthorizedPartiesData(1000);
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(authorizedParties[0].partyUuid);
  const selfAccountUuid = authorizedParties[0].partyUuid;
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
    virtualized: true
  });
  return <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector} />
    </RootProvider>;
}`,...x.parameters?.docs?.source}}};var S=[`Login`,`LoggedIn`,`CompanyAccount`,`ForcedFullScreenAccountSelection`,`WithCustomBadge`,`Loading`,`LoadingWithForcedFullScreenAccountSelection`,`WithVirtualizationEnabled`];export{g as CompanyAccount,_ as ForcedFullScreenAccountSelection,y as Loading,b as LoadingWithForcedFullScreenAccountSelection,h as LoggedIn,m as Login,v as WithCustomBadge,x as WithVirtualizationEnabled,S as __namedExportsOrder,p as default};