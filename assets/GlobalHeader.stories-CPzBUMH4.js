import{j as e,R as c,r as f}from"./iframe-DUgQHy5z.js";import{u as s}from"./useGlobalHeader-CNUyTxUh.js";import{u as L,g as M,a as C}from"./accountDataFetchers-DsnlsUxZ.js";import{h as H}from"./header-Ccx5LE26.js";import{G as n}from"./GlobalHeader-AhP8Fdlc.js";import{u as G}from"./useLocale-D8vLRJkT.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-DrWtlE9w.js";import"./HeartFill-BuCGHZZm.js";import"./useId-BEmmm-9F.js";import"./Button-DAj4Vb1f.js";import"./button-D0axoqj3.js";import"./use-merge-refs-tN_UguZ4.js";import"./lite-DaUVFjkg.js";import"./globalMenu-CusR0aRA.js";import"./PadlockLockedFill-TYz325xT.js";import"./Buildings2-DA0PLkI3.js";import"./InboxFill-DFOQHMM1.js";import"./MenuGrid-BFXheAVa.js";import"./MagnifyingGlass-Bvm8HrPp.js";import"./PersonCircle-zi-Qrj_q.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BAKdMXQt.js";import"./Archive-BPO8NoVo.js";import"./Trash-palqR5xc.js";import"./GlobalAccountButton-CFVCgB7k.js";import"./index-CHKdKrFD.js";import"./XMark-CIC6hSAY.js";import"./ChevronDown-BTaF_AA-.js";import"./Enter-B9HoLh_R.js";import"./Avatar-CQy8D3NB.js";import"./Skeleton-BWHbMU5J.js";import"./GlobalMenuButton-Bj6xqra8.js";import"./MenuHamburger-BFRrh2Ww.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-DELRJlHt.js";import"./Dropdown-VwXyzPyy.js";import"./AccountSelector-PedD5jOO.js";import"./heading-BK46rBC9.js";import"./AccountMenu-8gwTG4_u.js";import"./SearchField-DrvAfAqD.js";import"./FieldBase-B3m8Pe0B.js";import"./Typography-CInfIHKg.js";import"./useHighlightedText-BXy_Fo0F.js";import"./Label-B-nIzD7x.js";import"./index-DtFuKRqq.js";import"./Input-DxofbABb.js";import"./input-BKf2w74T.js";import"./MenuListItem-Cobo65pu.js";import"./MenuListHeading-USeQ6WLV.js";import"./MenuItem-rAhK0ZP8.js";import"./ItemMedia-CtpZg4yw.js";import"./AvatarGroup-DAp73R1d.js";import"./Icon-D31Usj2D.js";import"./Checkmark-CEKDqcfc.js";import"./Heading-CGuufgH4.js";import"./ItemControls-eEEzDso3.js";import"./ChevronRight-DcPr7c69.js";import"./useMenu-DKqXZTHj.js";import"./InformationSquare-C5uyE4ek.js";import"./Switch-B4GoFuUp.js";import"./GlobalMenu-B7zYaWxz.js";import"./ArrowUndo-Dawpb3je.js";import"./Globe-lsKPohrg.js";import"./useAccountMenu-BzhCGaz3.js";import"./useAccountsToolbar-Bfww5QV_.js";const we={title:"Layout/GlobalHeader",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...H}},l=()=>{const o=s({state:"loggedOut"});return e.jsx(c,{children:e.jsx(n,{...o})})},d=()=>{const o=G({accountId:"diaspora"}),[a,i]=f.useState([]),[r,A]=f.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),h=C(),U=L({partyListDTO:h,favoriteAccountUuids:a,onToggleFavorite:t=>{i(u=>u.includes(t)?u.filter(P=>P!==t):[...u,t])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:r,onSelectAccount:t=>{A(t)},languageCode:"nb",isLoading:!1});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:U})})},p=()=>{const o=s({currentAccountIndex:5});return e.jsx(c,{children:e.jsx(n,{...o})})},m=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:i,locale:r}=s({});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0,accountMenu:{...a?.accountMenu,currentAccount:void 0}},onLoginClick:i,locale:r})})},g=()=>{const o=s({});return e.jsx(c,{children:e.jsx(n,{...o,badge:{label:"Beta",color:"person"}})})},S=()=>{const o=s({state:"loading"});return e.jsx(c,{children:e.jsx(n,{...o})})},b=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:i,locale:r}=s({state:"loading"});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0},onLoginClick:i,locale:r})})},v=()=>{const o=G({accountId:"diaspora"}),[a,i]=f.useState([]),r=M(1e3),[A,h]=f.useState(r[0].partyUuid),F=r[0].partyUuid,U=L({partyListDTO:r,favoriteAccountUuids:a,onToggleFavorite:t=>{i(u=>u.includes(t)?u.filter(P=>P!==t):[...u,t])},selfAccountUuid:F,currentAccountUuid:A,onSelectAccount:t=>{h(t)},languageCode:"nb",isLoading:!1,virtualized:!0});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:U})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}};const Je=["Login","LoggedIn","CompanyAccount","ForcedFullScreenAccountSelection","WithCustomBadge","Loading","LoadingWithForcedFullScreenAccountSelection","WithVirtualizationEnabled"];export{p as CompanyAccount,m as ForcedFullScreenAccountSelection,S as Loading,b as LoadingWithForcedFullScreenAccountSelection,d as LoggedIn,l as Login,g as WithCustomBadge,v as WithVirtualizationEnabled,Je as __namedExportsOrder,we as default};
