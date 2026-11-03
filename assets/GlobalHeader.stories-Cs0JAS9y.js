var H=Object.defineProperty;var r=(t,c)=>H(t,"name",{value:c,configurable:!0});import{a5 as o,w as s,a8 as l}from"./iframe-CQ8LzMHp.js";import{G as a}from"./GlobalHeader-CZylxlLq.js";import{u as p}from"./useGlobalHeader-BQHU6eDU.js";import{u as y,a as C,g as I}from"./accountDataFetchers-BAGxlr9v.js";import{h as T}from"./header-DYeFlK_r.js";import{a as F}from"./useLocale-BYRPMExJ.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-CXHmTJZE.js";import"./GlobalAccountButton-BYezC4Lu.js";import"./Avatar-cvm5lBsk.js";import"./ChevronDown-BCthsF-h.js";import"./Enter-sjC3k3KF.js";import"./GlobalMenuButton-DKC_YNdX.js";import"./MenuHamburger-BaFe5b5h.js";import"./Badge-DUcHOS9Y.js";import"./Tooltip-Eed-mcd2.js";import"./ChevronUp-C1AG-Aka.js";import"./Dropdown-AuOHSehb.js";import"./AccountSelector-DwB-qXs_.js";import"./SearchField-0g3sCasv.js";import"./MagnifyingGlass-cYMoIKgd.js";import"./MenuListItem-BuDRebVM.js";import"./MenuListHeading-CsWBJhah.js";import"./MenuItem-DNZJHOTT.js";import"./CheckboxUncheckedIcon-DodbdVRp.js";import"./RadioUncheckedIcon-QGnejBkB.js";import"./ItemMedia-BTxysFbk.js";import"./AvatarGroup-DeE95cBJ.js";import"./ItemLabel-CgsktDzP.js";import"./Heading-Bqh3Rpnn.js";import"./useHighlightedText-X_Pa7Sct.js";import"./ItemControls--xlpWt8t.js";import"./ChevronRight-ywpt7Pxk.js";import"./FieldBase-wKpsF2Qr.js";import"./Typography-C0hb-rov.js";import"./Field-I35AXfO5.js";import"./Label-BS-vPhzZ.js";import"./Input-BKSTqttN.js";import"./useMenu-CDI-E8wX.js";import"./MenuListDivider-n9hRAznf.js";import"./InformationSquare-BtVNFzkX.js";import"./Switch-DZyG9cIk.js";import"./AccountMenu-CoLX5g5p.js";import"./GlobalMenu-D3o8JZD4.js";import"./Checkmark-CgKKHBb_.js";import"./ArrowUndo-CXl7zYNM.js";import"./Globe-Zq2WYf14.js";import"./name-Dr5DH52l.js";import"./HeartFill-mxtM7vZy.js";import"./globalMenu-B0pmFmwj.js";import"./PersonCircle-DRVciM8o.js";import"./Buildings2-mvrF0gIS.js";import"./InboxFill-oIQcKaT9.js";import"./MenuGrid-CbgwO7BS.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-34xC8uML.js";import"./Archive-D8VT4iDx.js";import"./Trash-CygTswjF.js";import"./useAccountMenu-PwCfdtN_.js";const Ee={title:"Layout/GlobalHeader",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...T}},b=r(()=>{const t=p({state:"loggedOut"});return o.jsx(s,{children:o.jsx(a,{...t})})},"Login"),v=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),[i,d]=l.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),g=I(),m=y({partyListDTO:g,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:i,onSelectAccount:r(e=>{d(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"LoggedIn"),S=r(()=>{const t=p({currentAccountIndex:5});return o.jsx(s,{children:o.jsx(a,{...t})})},"CompanyAccount"),U=r(()=>{const t=p({currentAccountIndex:5});return o.jsx(a,{...t,disableAccountSelection:!0})},"DisabledAccountSelection"),h=r(()=>{const t=p({});return o.jsx(s,{children:o.jsx(a,{...t,badge:{label:"Beta",color:"person"}})})},"WithCustomBadge"),P=r(()=>{const t=p({state:"loading"});return o.jsx(s,{children:o.jsx(a,{...t})})},"Loading"),G=r(()=>{const{globalMenu:t,accountSelector:c,onLoginClick:u,locale:i}=p({state:"loading"});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:c,onLoginClick:u,locale:i,disableAccountSelection:!0})})},"LoadingDisabledAccountSelection"),x=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),i=C(1e3),d=i.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=l.useState(d),m=y({partyListDTO:i,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"WithVirtualizationEnabled"),L=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),i=C(2),d=i.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=l.useState(d),m=y({partyListDTO:i,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"WithShortAccountList"),Be=["Login","LoggedIn","CompanyAccount","DisabledAccountSelection","WithCustomBadge","Loading","LoadingDisabledAccountSelection","WithVirtualizationEnabled","WithShortAccountList"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}};export{S as CompanyAccount,U as DisabledAccountSelection,P as Loading,G as LoadingDisabledAccountSelection,v as LoggedIn,b as Login,h as WithCustomBadge,L as WithShortAccountList,x as WithVirtualizationEnabled,Be as __namedExportsOrder,Ee as default};
