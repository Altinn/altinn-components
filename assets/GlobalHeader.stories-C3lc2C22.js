import{p as e,f as c,s as v}from"./iframe-WHERbRNQ.js";import{G as n}from"./GlobalHeader-m87i1LWh.js";import{u as s}from"./useGlobalHeader-DN6YsRmx.js";import{u as L,a as M,g as C}from"./accountDataFetchers-DmFfTMOJ.js";import{h as H}from"./header-B8nnbXER.js";import{a as G}from"./useLocale-BhAm75Aa.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-CJvITts6.js";import"./GlobalAccountButton-Dh83g-S0.js";import"./index-CPQpJFkN.js";import"./Avatar-BsRLrsxS.js";import"./Skeleton-rNcUZaAx.js";import"./useId-BfbJ7PbP.js";import"./XMark-5kXogJ_J.js";import"./ChevronDown-DWIhSCAm.js";import"./Enter-D5TP3xo0.js";import"./Button-DkTjWAj1.js";import"./tooltip-C7TGaz5I.js";import"./GlobalMenuButton-O-KjprMS.js";import"./MenuHamburger-bKOv5Y63.js";import"./Badge-DPxfDcUM.js";import"./Tooltip-C3iERcDF.js";import"./ChevronUp-BIOdACnc.js";import"./Dropdown-BvAU1fs3.js";import"./AccountSelector-BT2GELq7.js";import"./SearchField-CjOGKjR9.js";import"./MagnifyingGlass-DkwRxD0r.js";import"./FieldBase-9wEEVFHi.js";import"./Typography-CVWBmure.js";import"./useHighlightedText-CCsQk8zm.js";import"./Label-DoBAei1C.js";import"./Input-D2AEap14.js";import"./useMenu-DdbFwnvU.js";import"./MenuListItem-Gq-dCZ2a.js";import"./MenuListHeading-B72ED6_O.js";import"./MenuItem-BN2QDxa4.js";import"./ItemMedia-CZ4j0uoG.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Icon-jpLauUO9.js";import"./Checkmark-DwlfhjiK.js";import"./ItemLabel-CGpASln7.js";import"./Heading-POmwd9W2.js";import"./ItemControls-CXMEe70O.js";import"./ChevronRight-HD9xUhWG.js";import"./index-Cy4S4a6-.js";import"./InformationSquare-DqU7vShm.js";import"./Switch-DwucQso5.js";import"./AccountMenu-CjEOexO1.js";import"./GlobalMenu-BpeW2zl7.js";import"./ArrowUndo-C_T3lMra.js";import"./Globe-BkGe9tXO.js";import"./HeartFill-D5kqlvfH.js";import"./globalMenu-k9i_bNnv.js";import"./PersonCircle-CbGRsB75.js";import"./Buildings2-Cxu8SLwv.js";import"./InboxFill-COhlx1Bw.js";import"./MenuGrid-xBvM-GYV.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-WSvH4AZu.js";import"./Archive-PwU0eenA.js";import"./Trash-C1kE2B-c.js";import"./useAccountMenu-u260JJSc.js";const We={title:"Layout/GlobalHeader",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...H}},l=()=>{const o=s({state:"loggedOut"});return e.jsx(c,{children:e.jsx(n,{...o})})},d=()=>{const o=G({accountId:"diaspora"}),[a,i]=v.useState([]),[r,A]=v.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),h=C(),U=L({partyListDTO:h,favoriteAccountUuids:a,onToggleFavorite:t=>{i(u=>u.includes(t)?u.filter(P=>P!==t):[...u,t])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:r,onSelectAccount:t=>{A(t)},languageCode:"nb",isLoading:!1});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:U})})},p=()=>{const o=s({currentAccountIndex:5});return e.jsx(c,{children:e.jsx(n,{...o})})},m=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:i,locale:r}=s({});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0,accountMenu:{...a?.accountMenu,currentAccount:void 0}},onLoginClick:i,locale:r})})},g=()=>{const o=s({});return e.jsx(c,{children:e.jsx(n,{...o,badge:{label:"Beta",color:"person"}})})},S=()=>{const o=s({state:"loading"});return e.jsx(c,{children:e.jsx(n,{...o})})},b=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:i,locale:r}=s({state:"loading"});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0},onLoginClick:i,locale:r})})},f=()=>{const o=G({accountId:"diaspora"}),[a,i]=v.useState([]),r=M(1e3),[A,h]=v.useState(r[0].partyUuid),F=r[0].partyUuid,U=L({partyListDTO:r,favoriteAccountUuids:a,onToggleFavorite:t=>{i(u=>u.includes(t)?u.filter(P=>P!==t):[...u,t])},selfAccountUuid:F,currentAccountUuid:A,onSelectAccount:t=>{h(t)},languageCode:"nb",isLoading:!1,virtualized:!0});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:U})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loggedOut'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    currentAccountIndex: 5
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({});
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} badge={{
      label: 'Beta',
      color: 'person'
    }} />
    </RootProvider>;
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const authorizedParties = getLargeAuthorizedPartiesData(1000);
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(authorizedParties[0].partyUuid);
  const selfAccountUuid = authorizedParties[0].partyUuid;
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
}`,...f.parameters?.docs?.source}}};const Ee=["Login","LoggedIn","CompanyAccount","ForcedFullScreenAccountSelection","WithCustomBadge","Loading","LoadingWithForcedFullScreenAccountSelection","WithVirtualizationEnabled"];export{p as CompanyAccount,m as ForcedFullScreenAccountSelection,S as Loading,b as LoadingWithForcedFullScreenAccountSelection,d as LoggedIn,l as Login,g as WithCustomBadge,f as WithVirtualizationEnabled,Ee as __namedExportsOrder,We as default};
