var R=Object.defineProperty;var r=(o,n)=>R(o,"name",{value:n,configurable:!0});import{a7 as t,x as u,aa as p}from"./iframe-Bv9y2YZF.js";import{G as i}from"./GlobalHeader-OeFPbV6D.js";import{u as l}from"./useGlobalHeader--NXRw2sv.js";import{u as C,a as M,g as z}from"./accountDataFetchers-Bw8AEyU6.js";import{h as I}from"./header-C_6SnzN5.js";import{a as F}from"./useLocale--rMGF6-r.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-DtqNBB9o.js";import"./GlobalAccountButton-qZohFw4c.js";import"./Avatar-CJwf9igj.js";import"./ChevronDown-CAvQitey.js";import"./Enter-Dh8Hm6Mk.js";import"./GlobalMenuButton-CkOoAgh5.js";import"./MenuHamburger-Rv0EpLGA.js";import"./Badge-PIp_WKNx.js";import"./Tooltip-DATtufsq.js";import"./ChevronUp-5Z-Nijsh.js";import"./Dropdown-DQyu8KYK.js";import"./AccountSelector-nBuOEX0t.js";import"./SearchField-Bk5qe-oT.js";import"./MagnifyingGlass-rds0MzVJ.js";import"./FieldBase-qKDj-2_C.js";import"./Typography-AZvc429m.js";import"./useHighlightedText-B3SRW8uR.js";import"./Field-T8_evT5x.js";import"./Label-O9M7TqIt.js";import"./Input-C95LaLCm.js";import"./useMenu-B94lF56c.js";import"./MenuListItem-DxCoBxPm.js";import"./MenuListDivider-LPYMn92M.js";import"./MenuListHeading--KYKPYxZ.js";import"./MenuItem-CWh5VY2j.js";import"./ItemMedia-DqG5JuI7.js";import"./AvatarGroup-DorKIyuC.js";import"./Checkmark-CwfUY960.js";import"./ItemLabel-grT0gHhk.js";import"./Heading-CDZ3_iYV.js";import"./ItemControls-DeEkLGNj.js";import"./ChevronRight-B_ztNHmN.js";import"./InformationSquare-BoyRK6zF.js";import"./Switch-CK1DZ9-L.js";import"./AccountMenu-B46jN_aJ.js";import"./GlobalMenu-C_1726fk.js";import"./ArrowUndo-BFPX-Hsc.js";import"./Globe-BL4BJF4r.js";import"./name-Dr5DH52l.js";import"./HeartFill-DXgvfbND.js";import"./globalMenu-C_P803DG.js";import"./PersonCircle-BAfZY-GC.js";import"./Buildings2-BeaWmSSV.js";import"./InboxFill-BWUP4o7z.js";import"./MenuGrid-NBrgBJaj.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-CxxANetE.js";import"./Archive-BZe-TlAS.js";import"./Trash-D9cqJvdS.js";import"./useAccountMenu-C7IrRYos.js";const We={title:"Layout/GlobalHeader",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...I}},f=r(()=>{const o=l({state:"loggedOut"});return t.jsx(u,{children:t.jsx(i,{...o})})},"Login"),b=r(()=>{const o=F({accountId:"diaspora"}),[n,s]=p.useState([]),[a,d]=p.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),g=z(),m=C({partyListDTO:g,favoriteAccountUuids:n,onToggleFavorite:r(e=>{s(c=>c.includes(e)?c.filter(A=>A!==e):[...c,e])},"onToggleFavorite"),selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:a,onSelectAccount:r(e=>{d(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1});return t.jsx(u,{children:t.jsx(i,{globalMenu:o,accountSelector:m})})},"LoggedIn"),v=r(()=>{const o=l({currentAccountIndex:5});return t.jsx(u,{children:t.jsx(i,{...o})})},"CompanyAccount"),U=r(()=>{const o=l({currentAccountIndex:5});return t.jsx(i,{...o,disableAccountSelection:!0})},"DisabledAccountSelection"),h=r(()=>{const{globalMenu:o,accountSelector:n,onLoginClick:s,locale:a}=l({});return t.jsx(u,{children:t.jsx(i,{globalMenu:o,accountSelector:n,onLoginClick:s,locale:a,readOnlyAccountSelector:!0})})},"ReadOnlyAccountSelector"),P=r(()=>{const o=l({});return t.jsx(u,{children:t.jsx(i,{...o,badge:{label:"Beta",color:"person"}})})},"WithCustomBadge"),y=r(()=>{const o=l({state:"loading"});return t.jsx(u,{children:t.jsx(i,{...o})})},"Loading"),L=r(()=>{const{globalMenu:o,accountSelector:n,onLoginClick:s,locale:a}=l({state:"loading"});return t.jsx(u,{children:t.jsx(i,{globalMenu:o,accountSelector:n,onLoginClick:s,locale:a,readOnlyAccountSelector:!0})})},"LoadingReadOnlyAccountSelector"),x=r(()=>{const o=F({accountId:"diaspora"}),[n,s]=p.useState([]),a=M(1e3),d=a.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,S]=p.useState(d),m=C({partyListDTO:a,favoriteAccountUuids:n,onToggleFavorite:r(e=>{s(c=>c.includes(e)?c.filter(A=>A!==e):[...c,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{S(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(u,{children:t.jsx(i,{globalMenu:o,accountSelector:m})})},"WithVirtualizationEnabled"),G=r(()=>{const o=F({accountId:"diaspora"}),[n,s]=p.useState([]),a=M(2),d=a.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,S]=p.useState(d),m=C({partyListDTO:a,favoriteAccountUuids:n,onToggleFavorite:r(e=>{s(c=>c.includes(e)?c.filter(A=>A!==e):[...c,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{S(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(u,{children:t.jsx(i,{globalMenu:o,accountSelector:m})})},"WithShortAccountList");f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loggedOut'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector as AccountSelectorProps} onLoginClick={onLoginClick} locale={locale} readOnlyAccountSelector />
    </RootProvider>;
}`,...h.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({});
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} badge={{
      label: 'Beta',
      color: 'person'
    }} />
    </RootProvider>;
}`,...P.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...y.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const {
    globalMenu,
    accountSelector,
    onLoginClick,
    locale
  } = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector as AccountSelectorProps} onLoginClick={onLoginClick} locale={locale} readOnlyAccountSelector />
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
}`,...G.parameters?.docs?.source}}};const Ee=["Login","LoggedIn","CompanyAccount","DisabledAccountSelection","ReadOnlyAccountSelector","WithCustomBadge","Loading","LoadingReadOnlyAccountSelector","WithVirtualizationEnabled","WithShortAccountList"];export{v as CompanyAccount,U as DisabledAccountSelection,y as Loading,L as LoadingReadOnlyAccountSelector,b as LoggedIn,f as Login,h as ReadOnlyAccountSelector,P as WithCustomBadge,G as WithShortAccountList,x as WithVirtualizationEnabled,Ee as __namedExportsOrder,We as default};
