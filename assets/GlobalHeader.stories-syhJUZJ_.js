var z=Object.defineProperty;var r=(o,n)=>z(o,"name",{value:n,configurable:!0});import{a7 as t,x as s,aa as p}from"./iframe-DliZ2j7V.js";import{G as u}from"./GlobalHeader-CDCTdJnq.js";import{u as l}from"./useGlobalHeader-TeYwTPly.js";import{u as M,a as H,g as I}from"./accountDataFetchers-GKhje8a5.js";import{h as T}from"./header-CClp5MgW.js";import{a as C}from"./useLocale-CX8mMcpD.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-DmFMgreD.js";import"./GlobalAccountButton-DhGp9uH_.js";import"./Avatar-Bb13CEJH.js";import"./ChevronDown-DO1dBJk1.js";import"./Enter-BFNsHNEk.js";import"./GlobalMenuButton-BUvUT3hC.js";import"./MenuHamburger-BOtrt7de.js";import"./Badge-CXvbGuU6.js";import"./Tooltip-rTlSPEDx.js";import"./ChevronUp-yDNMXP2e.js";import"./Dropdown-BbS2MxJj.js";import"./AccountSelector-CjAjfHVy.js";import"./SearchField-CHTtqi8q.js";import"./MagnifyingGlass-BuxQzsSI.js";import"./FieldBase-CUazmIBl.js";import"./Typography-Oc42wyxk.js";import"./useHighlightedText-D1lssxtb.js";import"./Field-DYOclivh.js";import"./Label-F6glHlTT.js";import"./Input-BcFkd5TI.js";import"./useMenu-Bhv2948N.js";import"./MenuListItem-eO1CqTCm.js";import"./MenuListDivider-kl64fblZ.js";import"./MenuListHeading-DGDFRB8j.js";import"./MenuItem-BWlafNQ2.js";import"./ItemMedia-DsNtfucp.js";import"./AvatarGroup-BP8b6NDq.js";import"./Checkmark-D4_xXQHC.js";import"./ItemLabel-ChEAFnfF.js";import"./Heading-CtKubyco.js";import"./ItemControls-rcas_vti.js";import"./ChevronRight-_BaSemP0.js";import"./InformationSquare-Bli9QzR2.js";import"./Switch-C_H2f2Qb.js";import"./AccountMenu-CuHtLQfM.js";import"./GlobalMenu-egUmzDdz.js";import"./ArrowUndo-wAj8mUHm.js";import"./Globe-fARQJzgG.js";import"./name-Dr5DH52l.js";import"./HeartFill-IptN33lT.js";import"./globalMenu-CTfKcH8f.js";import"./PersonCircle-CV1SLENd.js";import"./Buildings2-CfN_Mmv-.js";import"./InboxFill-DWFh2g3m.js";import"./MenuGrid-kjLHCa2c.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-DZHhxvuQ.js";import"./Archive-COw0cazQ.js";import"./Trash-CR_vY-TR.js";import"./useAccountMenu-B1PfWzYV.js";const We={title:"Layout/GlobalHeader",component:u,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...T}},A=r(()=>{const o=l({state:"loggedOut"});return t.jsx(s,{children:t.jsx(u,{...o})})},"Login"),b=r(()=>{const o=C({accountId:"diaspora"}),[n,i]=p.useState([]),[c,d]=p.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),g=I(),m=M({partyListDTO:g,favoriteAccountUuids:n,onToggleFavorite:r(e=>{i(a=>a.includes(e)?a.filter(S=>S!==e):[...a,e])},"onToggleFavorite"),selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:c,onSelectAccount:r(e=>{d(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1});return t.jsx(s,{children:t.jsx(u,{globalMenu:o,accountSelector:m})})},"LoggedIn"),v=r(()=>{const o=l({currentAccountIndex:5});return t.jsx(s,{children:t.jsx(u,{...o})})},"CompanyAccount"),U=r(()=>{const o=l({currentAccountIndex:5});return t.jsx(u,{...o,disableAccountSelection:!0})},"DisabledAccountSelection"),h=r(()=>{const{globalMenu:o,accountSelector:n,onLoginClick:i,locale:c}=l({});return t.jsx(s,{children:t.jsx(u,{globalMenu:o,accountSelector:{...n,forceOpenFullScreen:!0,accountMenu:{...n?.accountMenu,currentAccount:void 0}},onLoginClick:i,locale:c})})},"ForcedFullScreenAccountSelection"),P=r(()=>{const o=l({});return t.jsx(s,{children:t.jsx(u,{...o,badge:{label:"Beta",color:"person"}})})},"WithCustomBadge"),F=r(()=>{const o=l({state:"loading"});return t.jsx(s,{children:t.jsx(u,{...o})})},"Loading"),L=r(()=>{const{globalMenu:o,accountSelector:n,onLoginClick:i,locale:c}=l({state:"loading"});return t.jsx(s,{children:t.jsx(u,{globalMenu:o,accountSelector:{...n,forceOpenFullScreen:!0},onLoginClick:i,locale:c})})},"LoadingWithForcedFullScreenAccountSelection"),x=r(()=>{const o=C({accountId:"diaspora"}),[n,i]=p.useState([]),c=H(1e3),d=c.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=p.useState(d),m=M({partyListDTO:c,favoriteAccountUuids:n,onToggleFavorite:r(e=>{i(a=>a.includes(e)?a.filter(S=>S!==e):[...a,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(s,{children:t.jsx(u,{globalMenu:o,accountSelector:m})})},"WithVirtualizationEnabled"),G=r(()=>{const o=C({accountId:"diaspora"}),[n,i]=p.useState([]),c=H(2),d=c.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=p.useState(d),m=M({partyListDTO:c,favoriteAccountUuids:n,onToggleFavorite:r(e=>{i(a=>a.includes(e)?a.filter(S=>S!==e):[...a,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(s,{children:t.jsx(u,{globalMenu:o,accountSelector:m})})},"WithShortAccountList");A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loggedOut'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...A.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    currentAccountIndex: 5
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...v.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    currentAccountIndex: 5
  });
  return <GlobalHeader {...header as GlobalHeaderProps} disableAccountSelection />;
}`,...U.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({});
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} badge={{
      label: 'Beta',
      color: 'person'
    }} />
    </RootProvider>;
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}};const Ee=["Login","LoggedIn","CompanyAccount","DisabledAccountSelection","ForcedFullScreenAccountSelection","WithCustomBadge","Loading","LoadingWithForcedFullScreenAccountSelection","WithVirtualizationEnabled","WithShortAccountList"];export{v as CompanyAccount,U as DisabledAccountSelection,h as ForcedFullScreenAccountSelection,F as Loading,L as LoadingWithForcedFullScreenAccountSelection,b as LoggedIn,A as Login,P as WithCustomBadge,G as WithShortAccountList,x as WithVirtualizationEnabled,Ee as __namedExportsOrder,We as default};
