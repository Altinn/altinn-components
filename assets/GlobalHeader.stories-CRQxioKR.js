import{a7 as t,x as i,aa as l}from"./iframe-BKcGtkf2.js";import{G as c}from"./GlobalHeader-DOZpIOT4.js";import{u as d}from"./useGlobalHeader-By_uanxD.js";import{u as G,a as y,g as H}from"./accountDataFetchers-CMqX5ASN.js";import{h as z}from"./header-AHCR3okz.js";import{a as M}from"./useLocale-Bk5QqCoD.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-qjVyTUOe.js";import"./GlobalAccountButton-BjFtBMmS.js";import"./Avatar-BD71BIVo.js";import"./ChevronDown-Jc6dKi_G.js";import"./Enter-C71FhnH-.js";import"./GlobalMenuButton-CX8FuP9n.js";import"./MenuHamburger-8h-PJWWI.js";import"./Badge-CPABd3pg.js";import"./Tooltip-PYsK9SJI.js";import"./ChevronUp-DoWxH2Yl.js";import"./Dropdown-CApDEdpz.js";import"./AccountSelector-ByuZnqmz.js";import"./SearchField-c4c7eBD1.js";import"./MagnifyingGlass-CBFBCqg8.js";import"./FieldBase-kOxFDexg.js";import"./Typography-CpSlwMZW.js";import"./useHighlightedText-Qdo-jqVR.js";import"./Field-DGa34R2s.js";import"./Label-D5VJqQJd.js";import"./Input-C7NN4jQM.js";import"./useMenu-D9Zi9nWU.js";import"./MenuListItem-q_h-S_lZ.js";import"./MenuListDivider-BA6y76AD.js";import"./MenuListHeading-MK0rACd0.js";import"./MenuItem-BPSVutJE.js";import"./ItemMedia-DmxCD2ZI.js";import"./AvatarGroup-Chghs2c1.js";import"./Checkmark-57W1Byq3.js";import"./ItemLabel-DZ6-a4p7.js";import"./Heading-iI-qniD3.js";import"./ItemControls-sjDYc_Mm.js";import"./ChevronRight-Bik0Rfts.js";import"./InformationSquare-7aD0sTi5.js";import"./Switch-CnB8xQ9k.js";import"./AccountMenu-CZN_US-M.js";import"./GlobalMenu-BmtCcnVS.js";import"./ArrowUndo-B99YefQU.js";import"./Globe-BzSsSW9E.js";import"./name-DC2ocV39.js";import"./HeartFill-ypZlzLnn.js";import"./globalMenu-RfYCzwRW.js";import"./PersonCircle-BSqUoazC.js";import"./Buildings2-Bo1BVeUl.js";import"./InboxFill-EBeZzB-b.js";import"./MenuGrid-DM7gsKVN.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-DcJyyazT.js";import"./Archive-CsURTuDo.js";import"./Trash-Bcnjmr1n.js";import"./useAccountMenu-CZQr2rvi.js";const De={title:"Layout/GlobalHeader",component:c,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...z}},f=()=>{const o=d({state:"loggedOut"});return t.jsx(i,{children:t.jsx(c,{...o})})},A=()=>{const o=M({accountId:"diaspora"}),[a,u]=l.useState([]),[r,s]=l.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),p=H(),g=G({partyListDTO:p,favoriteAccountUuids:a,onToggleFavorite:e=>{u(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:r,onSelectAccount:e=>{s(e)},languageCode:"nb",isLoading:!1});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:g})})},b=()=>{const o=d({currentAccountIndex:5});return t.jsx(i,{children:t.jsx(c,{...o})})},v=()=>{const o=d({currentAccountIndex:5});return t.jsx(c,{...o,disableAccountSelection:!0})},U=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:u,locale:r}=d({});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0,accountMenu:{...a?.accountMenu,currentAccount:void 0}},onLoginClick:u,locale:r})})},h=()=>{const o=d({});return t.jsx(i,{children:t.jsx(c,{...o,badge:{label:"Beta",color:"person"}})})},P=()=>{const o=d({state:"loading"});return t.jsx(i,{children:t.jsx(c,{...o})})},F=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:u,locale:r}=d({state:"loading"});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0},onLoginClick:u,locale:r})})},L=()=>{const o=M({accountId:"diaspora"}),[a,u]=l.useState([]),r=y(1e3),s=r.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=l.useState(s),g=G({partyListDTO:r,favoriteAccountUuids:a,onToggleFavorite:e=>{u(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:g})})},x=()=>{const o=M({accountId:"diaspora"}),[a,u]=l.useState([]),r=y(2),s=r.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=l.useState(s),g=G({partyListDTO:r,favoriteAccountUuids:a,onToggleFavorite:e=>{u(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:g})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
