var H=Object.defineProperty;var r=(t,c)=>H(t,"name",{value:c,configurable:!0});import{a6 as o,x as s,a9 as l}from"./iframe-DvHKorxQ.js";import{G as a}from"./GlobalHeader-Bm1pjFSp.js";import{u as p}from"./useGlobalHeader-DfBK20AG.js";import{u as y,a as C,g as I}from"./accountDataFetchers-DBL4B57S.js";import{h as T}from"./header-53c7wphf.js";import{a as F}from"./useLocale-B5jh-Ozh.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-D_CwdmZf.js";import"./GlobalAccountButton-Dvkyq19P.js";import"./Avatar-Cz88DWwK.js";import"./ChevronDown-CIQHUQdq.js";import"./Enter-CbVInwau.js";import"./GlobalMenuButton-BIiZsZYy.js";import"./MenuHamburger-DBDIkqls.js";import"./Badge-DzOSp-VL.js";import"./Tooltip-B5VcyW21.js";import"./ChevronUp-CNwAnotn.js";import"./Dropdown-CZm18rgm.js";import"./AccountSelector-CqvFZ-x3.js";import"./SearchField-BU96PyeS.js";import"./MagnifyingGlass-BXEQkXVn.js";import"./MenuListItem-sxF_Fdo2.js";import"./MenuListDivider-CVAdbPBV.js";import"./MenuItem-BKT_WeeP.js";import"./CheckboxUncheckedIcon-DfhKN-kl.js";import"./RadioUncheckedIcon-02hVvrUJ.js";import"./ItemMedia-D3TRsre4.js";import"./AvatarGroup-DG05vr_h.js";import"./ItemLabel-BPqR0X1V.js";import"./Heading-Cl1YAvvB.js";import"./useHighlightedText-BTXbLxcU.js";import"./ItemControls--z7ByJD8.js";import"./ChevronRight-BUHnh-Yw.js";import"./FieldBase-BZwhXyPC.js";import"./Typography-CvxYC9sf.js";import"./Field-DZglScdH.js";import"./Label-bDy8LqNB.js";import"./Input-Bgd0BScM.js";import"./useMenu-DmIIMIa0.js";import"./InformationSquare-dQI1I0JD.js";import"./Switch-DcMon32a.js";import"./AccountMenu-l_9YcMP5.js";import"./GlobalMenu-BKC0fVrL.js";import"./Checkmark-Cv0i3HMy.js";import"./ArrowUndo-q1AmrM8c.js";import"./Globe-BJ6hoLpR.js";import"./name-Dr5DH52l.js";import"./HeartFill-DNqsa6JA.js";import"./globalMenu-Dw1qB3hK.js";import"./PersonCircle-C7aNQMvr.js";import"./Buildings2-DChFgHfm.js";import"./InboxFill-BwfO79nt.js";import"./MenuGrid-Dy4yWDeC.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-Du-mldJF.js";import"./Archive-9iEfNGgD.js";import"./Trash-DVfbPaj0.js";import"./useAccountMenu-C9yBDl5o.js";const ke={title:"Layout/GlobalHeader",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...T}},b=r(()=>{const t=p({state:"loggedOut"});return o.jsx(s,{children:o.jsx(a,{...t})})},"Login"),v=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),[i,d]=l.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),g=I(),m=y({partyListDTO:g,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:i,onSelectAccount:r(e=>{d(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"LoggedIn"),S=r(()=>{const t=p({currentAccountIndex:5});return o.jsx(s,{children:o.jsx(a,{...t})})},"CompanyAccount"),U=r(()=>{const t=p({currentAccountIndex:5});return o.jsx(a,{...t,disableAccountSelection:!0})},"DisabledAccountSelection"),h=r(()=>{const t=p({});return o.jsx(s,{children:o.jsx(a,{...t,badge:{label:"Beta",color:"person"}})})},"WithCustomBadge"),P=r(()=>{const t=p({state:"loading"});return o.jsx(s,{children:o.jsx(a,{...t})})},"Loading"),x=r(()=>{const{globalMenu:t,accountSelector:c,onLoginClick:u,locale:i}=p({state:"loading"});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:c,onLoginClick:u,locale:i,disableAccountSelection:!0})})},"LoadingDisabledAccountSelection"),G=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),i=C(1e3),d=i.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=l.useState(d),m=y({partyListDTO:i,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"WithVirtualizationEnabled"),L=r(()=>{const t=F({accountId:"diaspora"}),[c,u]=l.useState([]),i=C(2),d=i.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=l.useState(d),m=y({partyListDTO:i,favoriteAccountUuids:c,onToggleFavorite:r(e=>{u(n=>n.includes(e)?n.filter(A=>A!==e):[...n,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(s,{children:o.jsx(a,{globalMenu:t,accountSelector:m})})},"WithShortAccountList"),Ee=["Login","LoggedIn","CompanyAccount","DisabledAccountSelection","WithCustomBadge","Loading","LoadingDisabledAccountSelection","WithVirtualizationEnabled","WithShortAccountList"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
