import{p as o,g as u,s as d}from"./iframe-43_RSSTf.js";import{G as a}from"./GlobalHeader-CBGVi9UL.js";import{u as l}from"./useGlobalHeader-DqOSU35T.js";import{u as M,a as x,g as y}from"./accountDataFetchers-zPR2jlnq.js";import{h as z}from"./header-BnA0__0d.js";import{a as C}from"./useLocale-D2MMdEwB.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-CRlQyS-C.js";import"./GlobalAccountButton-l7w_Shmo.js";import"./index-D9XEmR3s.js";import"./Avatar-B5wzfTza.js";import"./Skeleton-C5aNvb_u.js";import"./useId-BLkk23cI.js";import"./XMark-Baw5EL5c.js";import"./ChevronDown-DzTSEYyg.js";import"./Enter-DdOnloWp.js";import"./Button-B83AdZGF.js";import"./tooltip-CaRi0lSN.js";import"./GlobalMenuButton-DBrFEzwi.js";import"./MenuHamburger-aTqKFAcp.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./ChevronUp-DrEXLnbF.js";import"./Dropdown-CGlaKjlH.js";import"./AccountSelector-CwVIiTFB.js";import"./SearchField-QwXAT1yz.js";import"./MagnifyingGlass-Bf1420VU.js";import"./FieldBase-DaCzydfk.js";import"./Typography-Ct8ipg3s.js";import"./useHighlightedText-CH9gApkX.js";import"./Label-DtAXMx4b.js";import"./Input-B-eeYerN.js";import"./useMenu-CLHDsGsG.js";import"./MenuListItem-CaaZlGvV.js";import"./MenuListHeading-BUwMNUeX.js";import"./MenuItem-DlVW2JuZ.js";import"./ItemMedia-C7TJfaPW.js";import"./AvatarGroup-vsY4p1Py.js";import"./Icon-DxaOlqJE.js";import"./Checkmark-DrnVUh8F.js";import"./ItemLabel-DnPKS4W6.js";import"./Heading-2vQl8tBj.js";import"./ItemControls-DImp59Cc.js";import"./ChevronRight-DXBQR3xu.js";import"./index-CwY-RffE.js";import"./InformationSquare-BgUnCFaX.js";import"./Switch-YXKvHF1V.js";import"./AccountMenu-DCpMQtOk.js";import"./GlobalMenu-CwqY0ksZ.js";import"./ArrowUndo-B6CsLZ7N.js";import"./Globe-DE_rqwfk.js";import"./HeartFill-CK5ZP6qh.js";import"./globalMenu-CYMl9fs2.js";import"./PersonCircle-5C7xLqsV.js";import"./Buildings2-Chbhwy3k.js";import"./InboxFill-LO64aqnK.js";import"./MenuGrid-DpPBmXDm.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-Dm5c54YI.js";import"./Archive-DejoCF8M.js";import"./Trash-sc3FQnLB.js";import"./useAccountMenu-C_gEjtMM.js";const Ee={title:"Layout/GlobalHeader",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...z}},f=()=>{const t=l({state:"loggedOut"});return o.jsx(u,{children:o.jsx(a,{...t})})},v=()=>{const t=C({accountId:"diaspora"}),[c,i]=d.useState([]),[r,s]=d.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),p=y(),g=M({partyListDTO:p,favoriteAccountUuids:c,onToggleFavorite:e=>{i(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:r,onSelectAccount:e=>{s(e)},languageCode:"nb",isLoading:!1});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})},A=()=>{const t=l({currentAccountIndex:5});return o.jsx(u,{children:o.jsx(a,{...t})})},b=()=>{const{globalMenu:t,accountSelector:c,onLoginClick:i,locale:r}=l({});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:{...c,forceOpenFullScreen:!0,accountMenu:{...c?.accountMenu,currentAccount:void 0}},onLoginClick:i,locale:r})})},U=()=>{const t=l({});return o.jsx(u,{children:o.jsx(a,{...t,badge:{label:"Beta",color:"person"}})})},h=()=>{const t=l({state:"loading"});return o.jsx(u,{children:o.jsx(a,{...t})})},P=()=>{const{globalMenu:t,accountSelector:c,onLoginClick:i,locale:r}=l({state:"loading"});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:{...c,forceOpenFullScreen:!0},onLoginClick:i,locale:r})})},F=()=>{const t=C({accountId:"diaspora"}),[c,i]=d.useState([]),r=x(1e3),s=r.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=d.useState(s),g=M({partyListDTO:r,favoriteAccountUuids:c,onToggleFavorite:e=>{i(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})},L=()=>{const t=C({accountId:"diaspora"}),[c,i]=d.useState([]),r=x(2),s=r.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=d.useState(s),g=M({partyListDTO:r,favoriteAccountUuids:c,onToggleFavorite:e=>{i(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loggedOut'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    currentAccountIndex: 5
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...A.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({});
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} badge={{
      label: 'Beta',
      color: 'person'
    }} />
    </RootProvider>;
}`,...U.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...h.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}};const Be=["Login","LoggedIn","CompanyAccount","ForcedFullScreenAccountSelection","WithCustomBadge","Loading","LoadingWithForcedFullScreenAccountSelection","WithVirtualizationEnabled","WithShortAccountList"];export{A as CompanyAccount,b as ForcedFullScreenAccountSelection,h as Loading,P as LoadingWithForcedFullScreenAccountSelection,v as LoggedIn,f as Login,U as WithCustomBadge,L as WithShortAccountList,F as WithVirtualizationEnabled,Be as __namedExportsOrder,Ee as default};
