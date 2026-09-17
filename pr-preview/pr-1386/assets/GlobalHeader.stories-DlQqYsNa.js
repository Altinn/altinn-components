import{a7 as t,x as i,aa as l}from"./iframe-BlyVQ5Wf.js";import{G as c}from"./GlobalHeader-kHvqGJRA.js";import{u as d}from"./useGlobalHeader-Wa08LuS_.js";import{u as G,a as y,g as H}from"./accountDataFetchers-HqGUeRLU.js";import{h as z}from"./header-CLIs_EIB.js";import{a as M}from"./useLocale-D6yQc20T.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-Yp4QQdpa.js";import"./GlobalAccountButton-Dc4bMZ5Z.js";import"./Avatar-DQIgsQd2.js";import"./ChevronDown-Bxa_Upno.js";import"./Enter-Bs5XnApl.js";import"./GlobalMenuButton-DfWEpbEg.js";import"./MenuHamburger-AxvsS4Qu.js";import"./Badge-BWoBgQxU.js";import"./Tooltip-DIerloK1.js";import"./ChevronUp-CFGBj1-_.js";import"./Dropdown-D4yTY22u.js";import"./AccountSelector-cA0RmHyl.js";import"./SearchField-DB7B9m_1.js";import"./MagnifyingGlass-DUa4q_J4.js";import"./FieldBase-CZEUpIPU.js";import"./Typography-xETneU90.js";import"./useHighlightedText-DCg_XHxB.js";import"./Field-CitCeqKK.js";import"./Label-B4XhPvWK.js";import"./Input-7ZkrUdZt.js";import"./useMenu-DUnPL890.js";import"./MenuListItem-u2C1cR8C.js";import"./MenuListDivider-DBzJeO3_.js";import"./MenuListHeading-HVvc_FIB.js";import"./MenuItem-Bv74nrne.js";import"./ItemMedia-BlQhkodk.js";import"./AvatarGroup-6IOgo5me.js";import"./Checkmark-CAhepm8i.js";import"./ItemLabel-CF-a0vLD.js";import"./Heading-hWvyrxAT.js";import"./ItemControls-B0XNXszg.js";import"./ChevronRight-C0zIwyjD.js";import"./InformationSquare-CSNu4leW.js";import"./Switch-BxXj1yyp.js";import"./AccountMenu-BJ9gl8cA.js";import"./GlobalMenu-nggbh2Kp.js";import"./ArrowUndo-Ds9fN1GT.js";import"./Globe-CZRqGhTL.js";import"./name-DC2ocV39.js";import"./HeartFill-C3HM61e6.js";import"./globalMenu-DKnQ6qoo.js";import"./PersonCircle-6--piB4m.js";import"./Buildings2-CKZSXDU2.js";import"./InboxFill-mWnDeDsa.js";import"./MenuGrid-CmNLr_jA.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CAzjqs2L.js";import"./Archive-yxqFfZrS.js";import"./Trash-Bw2W8ER7.js";import"./useAccountMenu-BCYl5C36.js";const De={title:"Layout/GlobalHeader",component:c,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...z}},f=()=>{const o=d({state:"loggedOut"});return t.jsx(i,{children:t.jsx(c,{...o})})},A=()=>{const o=M({accountId:"diaspora"}),[a,u]=l.useState([]),[r,s]=l.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),p=H(),g=G({partyListDTO:p,favoriteAccountUuids:a,onToggleFavorite:e=>{u(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:r,onSelectAccount:e=>{s(e)},languageCode:"nb",isLoading:!1});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:g})})},b=()=>{const o=d({currentAccountIndex:5});return t.jsx(i,{children:t.jsx(c,{...o})})},v=()=>{const o=d({currentAccountIndex:5});return t.jsx(c,{...o,disableAccountSelection:!0})},U=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:u,locale:r}=d({});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0,accountMenu:{...a?.accountMenu,currentAccount:void 0}},onLoginClick:u,locale:r})})},h=()=>{const o=d({});return t.jsx(i,{children:t.jsx(c,{...o,badge:{label:"Beta",color:"person"}})})},P=()=>{const o=d({state:"loading"});return t.jsx(i,{children:t.jsx(c,{...o})})},F=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:u,locale:r}=d({state:"loading"});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0},onLoginClick:u,locale:r})})},L=()=>{const o=M({accountId:"diaspora"}),[a,u]=l.useState([]),r=y(1e3),s=r.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=l.useState(s),g=G({partyListDTO:r,favoriteAccountUuids:a,onToggleFavorite:e=>{u(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:g})})},x=()=>{const o=M({accountId:"diaspora"}),[a,u]=l.useState([]),r=y(2),s=r.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=l.useState(s),g=G({partyListDTO:r,favoriteAccountUuids:a,onToggleFavorite:e=>{u(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:g})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loggedOut'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...f.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    currentAccountIndex: 5
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    currentAccountIndex: 5
  });
  return <GlobalHeader {...header as GlobalHeaderProps} disableAccountSelection />;
}`,...v.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({});
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} badge={{
      label: 'Beta',
      color: 'person'
    }} />
    </RootProvider>;
}`,...h.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const authorizedParties = getSyntheticAuthorizedPartiesData(1000);
  const selfAccountUuid = authorizedParties.find(p => p.type === 'Person' || p.type === 'SelfIdentified')?.partyUuid;
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(selfAccountUuid);
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
}`,...L.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const authorizedParties = getSyntheticAuthorizedPartiesData(2);
  const selfAccountUuid = authorizedParties.find(p => p.type === 'Person' || p.type === 'SelfIdentified')?.partyUuid;
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(selfAccountUuid);
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
}`,...x.parameters?.docs?.source}}};const Oe=["Login","LoggedIn","CompanyAccount","DisabledAccountSelection","ForcedFullScreenAccountSelection","WithCustomBadge","Loading","LoadingWithForcedFullScreenAccountSelection","WithVirtualizationEnabled","WithShortAccountList"];export{b as CompanyAccount,v as DisabledAccountSelection,U as ForcedFullScreenAccountSelection,P as Loading,F as LoadingWithForcedFullScreenAccountSelection,A as LoggedIn,f as Login,h as WithCustomBadge,x as WithShortAccountList,L as WithVirtualizationEnabled,Oe as __namedExportsOrder,De as default};
