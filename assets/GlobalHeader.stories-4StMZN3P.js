import{a7 as t,x as i,aa as l}from"./iframe-RnExGCnN.js";import{G as c}from"./GlobalHeader-DbUDUH1N.js";import{u as d}from"./useGlobalHeader-A5SIEOBu.js";import{u as G,a as y,g as H}from"./accountDataFetchers-DcuYTIht.js";import{h as z}from"./header-D-UNfmnH.js";import{a as M}from"./useLocale-ChtSRQFS.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-D-HcI6XD.js";import"./GlobalAccountButton-iM_fNh5c.js";import"./Avatar-BUNCqCk4.js";import"./ChevronDown-CHkfpXTu.js";import"./Enter-D7zjNy7y.js";import"./GlobalMenuButton-BzAAwCnD.js";import"./MenuHamburger-CljCR6Je.js";import"./Badge-DH0HalVo.js";import"./Tooltip-CrL6AlY-.js";import"./ChevronUp-B2SXqU3E.js";import"./Dropdown-B88VU_C4.js";import"./AccountSelector-DN8G-kUN.js";import"./SearchField-vIwRNxpu.js";import"./MagnifyingGlass-t8Md0lZx.js";import"./FieldBase-DiJ4iC98.js";import"./Typography-C0LI4Nld.js";import"./useHighlightedText-wXuVfUlk.js";import"./Field-CSEfWH1k.js";import"./Label-DfG8fS43.js";import"./Input--YjiHlpM.js";import"./useMenu-ZXSzWhmh.js";import"./MenuListItem-Dqpn2neg.js";import"./MenuListDivider-CHRqqpSn.js";import"./MenuListHeading-Cn6qeGor.js";import"./MenuItem-BDAEKbBK.js";import"./ItemMedia-D368mX5y.js";import"./AvatarGroup-fOMA9ogc.js";import"./Checkmark-DIw4FkIE.js";import"./ItemLabel-B7AwZTmi.js";import"./Heading-Ds8TW_p4.js";import"./ItemControls-g4j5xbWR.js";import"./ChevronRight-CN6Km5wu.js";import"./InformationSquare-CRikKN32.js";import"./Switch-cSaA82mK.js";import"./AccountMenu-DL7GHW0M.js";import"./GlobalMenu-B60CzSq-.js";import"./ArrowUndo-DTXf9uKE.js";import"./Globe-RxityyaA.js";import"./name-DC2ocV39.js";import"./HeartFill-CtK1HR8J.js";import"./globalMenu-UgFJI4kF.js";import"./PersonCircle-CXYglnzD.js";import"./Buildings2-DDsFMQtQ.js";import"./InboxFill-BUXmS3wG.js";import"./MenuGrid-BYQSl4NI.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CmNkWfG-.js";import"./Archive-CdtSNR_W.js";import"./Trash-D4qqih4r.js";import"./useAccountMenu-DrzJ9YUL.js";const De={title:"Layout/GlobalHeader",component:c,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...z}},f=()=>{const o=d({state:"loggedOut"});return t.jsx(i,{children:t.jsx(c,{...o})})},A=()=>{const o=M({accountId:"diaspora"}),[a,u]=l.useState([]),[r,s]=l.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),p=H(),g=G({partyListDTO:p,favoriteAccountUuids:a,onToggleFavorite:e=>{u(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:r,onSelectAccount:e=>{s(e)},languageCode:"nb",isLoading:!1});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:g})})},b=()=>{const o=d({currentAccountIndex:5});return t.jsx(i,{children:t.jsx(c,{...o})})},v=()=>{const o=d({currentAccountIndex:5});return t.jsx(c,{...o,disableAccountSelection:!0})},U=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:u,locale:r}=d({});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0,accountMenu:{...a?.accountMenu,currentAccount:void 0}},onLoginClick:u,locale:r})})},h=()=>{const o=d({});return t.jsx(i,{children:t.jsx(c,{...o,badge:{label:"Beta",color:"person"}})})},P=()=>{const o=d({state:"loading"});return t.jsx(i,{children:t.jsx(c,{...o})})},F=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:u,locale:r}=d({state:"loading"});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0},onLoginClick:u,locale:r})})},L=()=>{const o=M({accountId:"diaspora"}),[a,u]=l.useState([]),r=y(1e3),s=r.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=l.useState(s),g=G({partyListDTO:r,favoriteAccountUuids:a,onToggleFavorite:e=>{u(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:g})})},x=()=>{const o=M({accountId:"diaspora"}),[a,u]=l.useState([]),r=y(2),s=r.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=l.useState(s),g=G({partyListDTO:r,favoriteAccountUuids:a,onToggleFavorite:e=>{u(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:g})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
