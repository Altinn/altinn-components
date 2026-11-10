var H=Object.defineProperty;var r=(t,c)=>H(t,"name",{value:c,configurable:!0});import{a6 as o,x as s,a9 as l}from"./iframe-CFooeFlc.js";import{G as a}from"./GlobalHeader-CAxn3FbR.js";import{u as p}from"./useGlobalHeader-D9p6VWqO.js";import{u as y,a as C,g as I}from"./accountDataFetchers-Cz7i23xt.js";import{h as T}from"./header-DWjctTLs.js";import{a as F}from"./useLocale-BBBFsIWT.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-DMKYuN7Q.js";import"./GlobalAccountButton-CxUertbH.js";import"./Avatar-BMLgJvdJ.js";import"./ChevronDown-DRjCt-FM.js";import"./Enter-Bl8n-sGa.js";import"./GlobalMenuButton-BefVXzoE.js";import"./MenuHamburger-BBOi02AU.js";import"./Badge-4L7pEK9S.js";import"./Tooltip-Dsu4-yLP.js";import"./ChevronUp-2AABqykr.js";import"./Dropdown-UxeuVY1V.js";import"./AccountSelector-B4QhyC5f.js";import"./SearchField-vc2j7DYW.js";import"./MagnifyingGlass-BeyjX3_h.js";import"./MenuListItem-lDH_nIX2.js";import"./MenuListDivider-DbxP2E3y.js";import"./MenuItem-Bf8xgsdL.js";import"./CheckboxUncheckedIcon-BUUPFL_h.js";import"./RadioUncheckedIcon-SM_w6gXN.js";import"./ItemMedia-BiITU9Jf.js";import"./AvatarGroup-O59IIMZ1.js";import"./ItemLabel-uOYlRqGI.js";import"./Heading-BvwzGhlC.js";import"./useHighlightedText-CSeb_EVo.js";import"./ItemControls-a2iPy1rh.js";import"./ChevronRight-Pp6aFK2W.js";import"./FieldBase--dF0uMSe.js";import"./Typography-DZMMTX6d.js";import"./Field-XgzC0Js-.js";import"./Label-BITGJPso.js";import"./Input-CijTBA3T.js";import"./useMenu-Bq9-gO9j.js";import"./InformationSquare-CkGSwppR.js";import"./Switch-XnFFT3OB.js";import"./AccountMenu-CyQLONBq.js";import"./GlobalMenu-D8aETKbm.js";import"./Checkmark-CL0UyCZk.js";import"./ArrowUndo-Bq7mvHQO.js";import"./Globe-ASfh3ELd.js";import"./name-Dr5DH52l.js";import"./HeartFill-DdHcHph9.js";import"./globalMenu-V79Pn2VS.js";import"./PersonCircle-dY6cP1lV.js";import"./Buildings2-BcXb6UsZ.js";import"./InboxFill-C_9JPAbS.js";import"./MenuGrid-2a9RgC_E.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-Ddp9wjen.js";import"./Archive-Cn31xRbo.js";import"./Trash-RDp0u5kC.js";import"./useAccountMenu-CHt8fAhr.js";const ke={title:"Layout/GlobalHeader",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...T}},b=r(()=>{const t=p({state:"loggedOut"});return o.jsx(s,{children:o.jsx(a,{...t})})},"Login"),v=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),[i,d]=l.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),g=I(),m=y({partyListDTO:g,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:i,onSelectAccount:r(e=>{d(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"LoggedIn"),S=r(()=>{const t=p({currentAccountIndex:5});return o.jsx(s,{children:o.jsx(a,{...t})})},"CompanyAccount"),U=r(()=>{const t=p({currentAccountIndex:5});return o.jsx(a,{...t,disableAccountSelection:!0})},"DisabledAccountSelection"),h=r(()=>{const t=p({});return o.jsx(s,{children:o.jsx(a,{...t,badge:{label:"Beta",color:"person"}})})},"WithCustomBadge"),P=r(()=>{const t=p({state:"loading"});return o.jsx(s,{children:o.jsx(a,{...t})})},"Loading"),x=r(()=>{const{globalMenu:t,accountSelector:c,onLoginClick:u,locale:i}=p({state:"loading"});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:c,onLoginClick:u,locale:i,disableAccountSelection:!0})})},"LoadingDisabledAccountSelection"),G=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),i=C(1e3),d=i.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=l.useState(d),m=y({partyListDTO:i,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"WithVirtualizationEnabled"),L=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),i=C(2),d=i.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=l.useState(d),m=y({partyListDTO:i,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"WithShortAccountList"),Ee=["Login","LoggedIn","CompanyAccount","DisabledAccountSelection","WithCustomBadge","Loading","LoadingDisabledAccountSelection","WithVirtualizationEnabled","WithShortAccountList"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
