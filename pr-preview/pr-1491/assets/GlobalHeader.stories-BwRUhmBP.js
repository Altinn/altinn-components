var H=Object.defineProperty;var r=(t,c)=>H(t,"name",{value:c,configurable:!0});import{a6 as o,x as s,a9 as l}from"./iframe-C0_zUbkp.js";import{G as a}from"./GlobalHeader-DHevhZzs.js";import{u as p}from"./useGlobalHeader-Chk9Da3v.js";import{u as y,a as C,g as I}from"./accountDataFetchers-DINXldVb.js";import{h as T}from"./header-diTf3tgd.js";import{a as F}from"./useLocale-C5LBRr1x.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-KF_OKnzc.js";import"./GlobalAccountButton-EC8pNabB.js";import"./Avatar-DKE26PJw.js";import"./ChevronDown-C32tY52G.js";import"./Enter-BA5cepcd.js";import"./GlobalMenuButton--DFb6lqD.js";import"./MenuHamburger-I_0J1-VZ.js";import"./Badge-SiuoHNvy.js";import"./Tooltip-IMKx06Nx.js";import"./ChevronUp-Co9i1NxZ.js";import"./Dropdown-DC94zabz.js";import"./AccountSelector-DBxkMqVm.js";import"./SearchField-DNtOxHfE.js";import"./MagnifyingGlass-CzEj6Uz6.js";import"./MenuListItem-CH7aCagC.js";import"./MenuListDivider-BiU_kXeA.js";import"./MenuItem-DJSb-Ysu.js";import"./CheckboxUncheckedIcon-TiK1Utdf.js";import"./RadioUncheckedIcon-BOm3YJdr.js";import"./ItemMedia-Dqx0ptul.js";import"./AvatarGroup-BwefBp_5.js";import"./ItemLabel-9fWKgY8j.js";import"./Heading-DLwaSr_O.js";import"./useHighlightedText-BFDvP_rA.js";import"./ItemControls-DWFJyhPy.js";import"./ChevronRight-C6nH0agV.js";import"./FieldBase-BHBKFAe2.js";import"./Typography-CXAuaEKv.js";import"./Field-ze6C9QpL.js";import"./Label-BRVQ__pE.js";import"./Input-CmIpmweJ.js";import"./useMenu-DkMnEsls.js";import"./InformationSquare-CG3sxIst.js";import"./Switch-BJBwrzYu.js";import"./AccountMenu-B7S2sMdl.js";import"./GlobalMenu-BrdGem6M.js";import"./Checkmark-r_LW2Dwq.js";import"./ArrowUndo-BzebLQMk.js";import"./Globe-CaMonKWF.js";import"./localeSwitcher-DQ-czMYR.js";import"./InboxFill-aFAE7ktP.js";import"./PersonGroup-nhG0hY5y.js";import"./MenuGrid-D5USsJgg.js";import"./Buildings2-DwPA8eJN.js";import"./Bell-D_-BbDHJ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-C-7hLfu8.js";import"./Trash-1-5ygZCI.js";import"./name-Dr5DH52l.js";import"./HeartFill-BNoN-VYK.js";import"./useAccountMenu-az0_1zHh.js";const ke={title:"Layout/GlobalHeader",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...T}},b=r(()=>{const t=p({state:"loggedOut"});return o.jsx(s,{children:o.jsx(a,{...t})})},"Login"),v=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),[i,d]=l.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),g=I(),m=y({partyListDTO:g,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:i,onSelectAccount:r(e=>{d(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"LoggedIn"),S=r(()=>{const t=p({currentAccountIndex:5});return o.jsx(s,{children:o.jsx(a,{...t})})},"CompanyAccount"),U=r(()=>{const t=p({currentAccountIndex:5});return o.jsx(a,{...t,disableAccountSelection:!0})},"DisabledAccountSelection"),h=r(()=>{const t=p({});return o.jsx(s,{children:o.jsx(a,{...t,badge:{label:"Beta",color:"person"}})})},"WithCustomBadge"),P=r(()=>{const t=p({state:"loading"});return o.jsx(s,{children:o.jsx(a,{...t})})},"Loading"),x=r(()=>{const{globalMenu:t,accountSelector:c,onLoginClick:u,locale:i}=p({state:"loading"});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:c,onLoginClick:u,locale:i,disableAccountSelection:!0})})},"LoadingDisabledAccountSelection"),G=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),i=C(1e3),d=i.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=l.useState(d),m=y({partyListDTO:i,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"WithVirtualizationEnabled"),L=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),i=C(2),d=i.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=l.useState(d),m=y({partyListDTO:i,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"WithShortAccountList"),Ee=["Login","LoggedIn","CompanyAccount","DisabledAccountSelection","WithCustomBadge","Loading","LoadingDisabledAccountSelection","WithVirtualizationEnabled","WithShortAccountList"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loggedOut'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    currentAccountIndex: 5
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...S.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    currentAccountIndex: 5
  });
  return <GlobalHeader {...header as GlobalHeaderProps} disableAccountSelection />;
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
}`,...P.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const {
    globalMenu,
    accountSelector,
    onLoginClick,
    locale
  } = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector as AccountSelectorProps} onLoginClick={onLoginClick} locale={locale} disableAccountSelection />
    </RootProvider>;
}`,...x.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}};export{S as CompanyAccount,U as DisabledAccountSelection,P as Loading,x as LoadingDisabledAccountSelection,v as LoggedIn,b as Login,h as WithCustomBadge,L as WithShortAccountList,G as WithVirtualizationEnabled,Ee as __namedExportsOrder,ke as default};
