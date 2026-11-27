var H=Object.defineProperty;var r=(t,c)=>H(t,"name",{value:c,configurable:!0});import{a6 as o,x as s,a9 as l}from"./iframe-DS_59AwM.js";import{G as a}from"./GlobalHeader-qSkTlajx.js";import{u as p}from"./useGlobalHeader-B1u30sfN.js";import{u as y,a as C,g as I}from"./accountDataFetchers-CZwAQh_6.js";import{h as T}from"./header-cIQVq8Pp.js";import{a as F}from"./useLocale-D_2mvdEX.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BLNCbIMG.js";import"./GlobalAccountButton-B87x-cA4.js";import"./Avatar-DsQCNXZF.js";import"./ChevronDown-CX1A4zpd.js";import"./Enter-BzYlsRS4.js";import"./GlobalMenuButton-DtJCYos4.js";import"./MenuHamburger-D2t_fJxS.js";import"./Badge-CF5PgN9h.js";import"./Tooltip-BBICM8wr.js";import"./ChevronUp-DZ6JxO9u.js";import"./Dropdown-DLABBFh7.js";import"./AccountSelector-DeuKRwyu.js";import"./SearchField-CAjTntqL.js";import"./MagnifyingGlass-l1_f6IJo.js";import"./MenuListItem-DwlAJFdA.js";import"./MenuListDivider-CucqnGV5.js";import"./MenuItem-Y-AEUpRl.js";import"./CheckboxUncheckedIcon-C7ZL4zpD.js";import"./RadioUncheckedIcon-B7iKOFAO.js";import"./ItemMedia-CcjWIfuL.js";import"./AvatarGroup-yHV_WJhD.js";import"./ItemLabel-DXVwsqWf.js";import"./Heading-BZMLDowx.js";import"./useHighlightedText-Ba9mKwdy.js";import"./ItemControls-C2ZClT3B.js";import"./ChevronRight-C7PJPgHr.js";import"./FieldBase-Bv1sQ0dY.js";import"./Typography-DXt4lEYU.js";import"./Field-DAFUCo_M.js";import"./Label-BBg6DFs6.js";import"./Input-3GNdcrOi.js";import"./useMenu-30LDsNSn.js";import"./InformationSquare-DyP2GK92.js";import"./Switch-UOM24JjQ.js";import"./AccountMenu-0gBoOXlr.js";import"./GlobalMenu-B_WcCU9L.js";import"./Checkmark-zqsIpaA_.js";import"./ArrowUndo-D5XHMjLO.js";import"./Globe-CZo01Odx.js";import"./name-Dr5DH52l.js";import"./HeartFill-BrIW_AfX.js";import"./globalMenu-DFBTjtgP.js";import"./PersonCircle-DSk0oNxz.js";import"./Buildings2-csFrmVqP.js";import"./InboxFill-BFZrrmB7.js";import"./MenuGrid-BViEhOfD.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-C5zK9N2t.js";import"./Archive-BRmXGBJj.js";import"./Trash-CqvnIlMZ.js";import"./useAccountMenu-CiqfZgO1.js";const ke={title:"Layout/GlobalHeader",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...T}},b=r(()=>{const t=p({state:"loggedOut"});return o.jsx(s,{children:o.jsx(a,{...t})})},"Login"),v=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),[i,d]=l.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),g=I(),m=y({partyListDTO:g,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:i,onSelectAccount:r(e=>{d(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"LoggedIn"),S=r(()=>{const t=p({currentAccountIndex:5});return o.jsx(s,{children:o.jsx(a,{...t})})},"CompanyAccount"),U=r(()=>{const t=p({currentAccountIndex:5});return o.jsx(a,{...t,disableAccountSelection:!0})},"DisabledAccountSelection"),h=r(()=>{const t=p({});return o.jsx(s,{children:o.jsx(a,{...t,badge:{label:"Beta",color:"person"}})})},"WithCustomBadge"),P=r(()=>{const t=p({state:"loading"});return o.jsx(s,{children:o.jsx(a,{...t})})},"Loading"),x=r(()=>{const{globalMenu:t,accountSelector:c,onLoginClick:u,locale:i}=p({state:"loading"});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:c,onLoginClick:u,locale:i,disableAccountSelection:!0})})},"LoadingDisabledAccountSelection"),G=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),i=C(1e3),d=i.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=l.useState(d),m=y({partyListDTO:i,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"WithVirtualizationEnabled"),L=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),i=C(2),d=i.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=l.useState(d),m=y({partyListDTO:i,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"WithShortAccountList"),Ee=["Login","LoggedIn","CompanyAccount","DisabledAccountSelection","WithCustomBadge","Loading","LoadingDisabledAccountSelection","WithVirtualizationEnabled","WithShortAccountList"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
