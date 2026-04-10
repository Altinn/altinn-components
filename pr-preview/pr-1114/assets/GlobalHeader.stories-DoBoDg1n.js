import{j as e,R as c,r as f}from"./iframe-CEV_bE_y.js";import{u as s}from"./useGlobalHeader-K8J7Op3F.js";import{u as L,g as M,a as C}from"./accountDataFetchers-DmU9W13U.js";import{h as H}from"./header-i9DUxBd6.js";import{G as n}from"./GlobalHeader-BDhkDXWd.js";import{u as G}from"./useLocale-ChwWafHA.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BlUQDDAY.js";import"./HeartFill-Bf2nTARw.js";import"./useId-BHfJgDBc.js";import"./Button-Camg-mBZ.js";import"./button-B-6jfb5R.js";import"./use-merge-refs-Dqc3iuE1.js";import"./lite-DaUVFjkg.js";import"./globalMenu-DMBqT3bV.js";import"./PadlockLockedFill-Dg6xF2gV.js";import"./Buildings2-DLWHFsKX.js";import"./InboxFill-DTZLIyGz.js";import"./MenuGrid-D-AQupNN.js";import"./MagnifyingGlass-D6I6hP_d.js";import"./PersonCircle-DkfM7_Ed.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-CFo8DrTV.js";import"./Archive-DWBVULf9.js";import"./Trash-DL6cPj-R.js";import"./GlobalAccountButton-BQGEBgqJ.js";import"./index-CGpVDQnA.js";import"./XMark-ByuttVGc.js";import"./ChevronDown--HTcc5lI.js";import"./Enter-C1WxztuE.js";import"./Avatar-Cf5aI0ZG.js";import"./Skeleton-cNOPtI7P.js";import"./GlobalMenuButton-BMfwJ8hK.js";import"./MenuHamburger-DBcPb8fU.js";import"./Badge-BVMw9Rw0.js";import"./ChevronUp-BgDvj3-f.js";import"./Dropdown--G_NTa0P.js";import"./AccountSelector-B4cd66jm.js";import"./heading-D3Tt8F81.js";import"./AccountMenu-adZ4jcQl.js";import"./SearchField-C9XAkfHX.js";import"./FieldBase-D397wWlI.js";import"./Typography-BMVOyH8m.js";import"./useHighlightedText-DdOlAfmT.js";import"./Label-Cb-tqHHM.js";import"./index-Cr9j_S5O.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./MenuListItem-DvZVWiZY.js";import"./MenuListHeading-BxT-phiC.js";import"./MenuItem-D6Egs8SC.js";import"./ItemMedia-DIGN_0r9.js";import"./AvatarGroup-DHx4XjXe.js";import"./Icon-BwPDmLy2.js";import"./Checkmark-D-WBqViW.js";import"./Heading-CjHEKkoD.js";import"./ItemControls-Dsxd0fj6.js";import"./ChevronRight-Dck0Zh1j.js";import"./useMenu-EIG5MfCS.js";import"./InformationSquare-C-romZo4.js";import"./Switch-Br9M89v1.js";import"./GlobalMenu-CovSPeT7.js";import"./ArrowUndo-DgeaLVju.js";import"./Globe-BPeGlch2.js";import"./useAccountMenu-42OF9cBc.js";import"./useAccountsToolbar-DGGVcX76.js";const _e={title:"Layout/GlobalHeader",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...H}},l=()=>{const o=s({state:"loggedOut"});return e.jsx(c,{children:e.jsx(n,{...o})})},d=()=>{const o=G({accountId:"diaspora"}),[a,i]=f.useState([]),[r,A]=f.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),h=C(),U=L({partyListDTO:h,favoriteAccountUuids:a,onToggleFavorite:t=>{i(u=>u.includes(t)?u.filter(P=>P!==t):[...u,t])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:r,onSelectAccount:t=>{A(t)},languageCode:"nb",isLoading:!1});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:U})})},p=()=>{const o=s({currentAccountIndex:5});return e.jsx(c,{children:e.jsx(n,{...o})})},m=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:i,locale:r}=s({});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0,accountMenu:{...a?.accountMenu,currentAccount:void 0}},onLoginClick:i,locale:r})})},g=()=>{const o=s({});return e.jsx(c,{children:e.jsx(n,{...o,badge:{label:"Beta",color:"person"}})})},S=()=>{const o=s({state:"loading"});return e.jsx(c,{children:e.jsx(n,{...o})})},b=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:i,locale:r}=s({state:"loading"});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0},onLoginClick:i,locale:r})})},v=()=>{const o=G({accountId:"diaspora"}),[a,i]=f.useState([]),r=M(1e3),[A,h]=f.useState(r[0].partyUuid),F=r[0].partyUuid,U=L({partyListDTO:r,favoriteAccountUuids:a,onToggleFavorite:t=>{i(u=>u.includes(t)?u.filter(P=>P!==t):[...u,t])},selfAccountUuid:F,currentAccountUuid:A,onSelectAccount:t=>{h(t)},languageCode:"nb",isLoading:!1,virtualized:!0});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:U})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}};const qe=["Login","LoggedIn","CompanyAccount","ForcedFullScreenAccountSelection","WithCustomBadge","Loading","LoadingWithForcedFullScreenAccountSelection","WithVirtualizationEnabled"];export{p as CompanyAccount,m as ForcedFullScreenAccountSelection,S as Loading,b as LoadingWithForcedFullScreenAccountSelection,d as LoggedIn,l as Login,g as WithCustomBadge,v as WithVirtualizationEnabled,qe as __namedExportsOrder,_e as default};
