import{j as e,R as c,r as f}from"./iframe-CZMLD2fe.js";import{u as s}from"./useGlobalHeader-CkZIlbXc.js";import{u as L,g as M,a as C}from"./accountDataFetchers-IG_hDTRw.js";import{h as H}from"./header-DP5aZFPj.js";import{G as n}from"./GlobalHeader-Bdoxbjrg.js";import{u as G}from"./useLocale-CbEV2YSF.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-DX1vl52f.js";import"./HeartFill-Bo9xq64m.js";import"./useId-Dmu9AgSD.js";import"./Button-z0ZioQWK.js";import"./button-CZknkFMR.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";import"./globalMenu-CThTZovX.js";import"./PersonCircle-Cnz-oc73.js";import"./Buildings2-Cd8pIexL.js";import"./InboxFill-dmJCO2GG.js";import"./MenuGrid-GwGTD_sm.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BvWd1gs8.js";import"./Archive-DXvpD1-K.js";import"./Trash-CFAM7fxG.js";import"./GlobalAccountButton-DltMrGPB.js";import"./index-iGjPLQV7.js";import"./XMark-BBRiAlI8.js";import"./ChevronDown-Bjx7qU4A.js";import"./Enter-B5HAdrS7.js";import"./Avatar-DzGFAhDt.js";import"./Skeleton-D52MvI5U.js";import"./GlobalMenuButton-BbcRNqJQ.js";import"./MenuHamburger-CM7Wkn6q.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-C_Nv0CUA.js";import"./Dropdown-Bx0d8Qo_.js";import"./AccountSelector-ScZw3yb8.js";import"./heading-BH75kNw6.js";import"./AccountMenu-CfO1iyk0.js";import"./SearchField-hPGSgF9W.js";import"./FieldBase-bsYRos9m.js";import"./Typography-BegW4Ytw.js";import"./useHighlightedText-CmlayFSP.js";import"./Label-C0JPWrbN.js";import"./index-DZ8nICMn.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./MenuListItem-DDLkxBzW.js";import"./MenuListHeading-BJ84Vv6-.js";import"./MenuItem-BQTFtYYp.js";import"./ItemMedia-CE_zTi22.js";import"./AvatarGroup-sNwukvT8.js";import"./Icon-CbE8dCFV.js";import"./Checkmark-CgCD7cxb.js";import"./Heading-5rlhad8Q.js";import"./ItemControls-CSi2HZsx.js";import"./ChevronRight-7zRCvc5i.js";import"./useMenu-CEG7UMF2.js";import"./index-CQNCMx5k.js";import"./InformationSquare-BauCIT4L.js";import"./Switch-k_GymHg0.js";import"./GlobalMenu-DqWSpTc_.js";import"./ArrowUndo-CgL76AqI.js";import"./Globe-BgtTiwhv.js";import"./useAccountMenu-BUPU4Djz.js";const qe={title:"Layout/GlobalHeader",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...H}},l=()=>{const o=s({state:"loggedOut"});return e.jsx(c,{children:e.jsx(n,{...o})})},d=()=>{const o=G({accountId:"diaspora"}),[a,i]=f.useState([]),[r,A]=f.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),h=C(),U=L({partyListDTO:h,favoriteAccountUuids:a,onToggleFavorite:t=>{i(u=>u.includes(t)?u.filter(P=>P!==t):[...u,t])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:r,onSelectAccount:t=>{A(t)},languageCode:"nb",isLoading:!1});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:U})})},p=()=>{const o=s({currentAccountIndex:5});return e.jsx(c,{children:e.jsx(n,{...o})})},m=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:i,locale:r}=s({});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0,accountMenu:{...a?.accountMenu,currentAccount:void 0}},onLoginClick:i,locale:r})})},g=()=>{const o=s({});return e.jsx(c,{children:e.jsx(n,{...o,badge:{label:"Beta",color:"person"}})})},S=()=>{const o=s({state:"loading"});return e.jsx(c,{children:e.jsx(n,{...o})})},b=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:i,locale:r}=s({state:"loading"});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0},onLoginClick:i,locale:r})})},v=()=>{const o=G({accountId:"diaspora"}),[a,i]=f.useState([]),r=M(1e3),[A,h]=f.useState(r[0].partyUuid),F=r[0].partyUuid,U=L({partyListDTO:r,favoriteAccountUuids:a,onToggleFavorite:t=>{i(u=>u.includes(t)?u.filter(P=>P!==t):[...u,t])},selfAccountUuid:F,currentAccountUuid:A,onSelectAccount:t=>{h(t)},languageCode:"nb",isLoading:!1,virtualized:!0});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:U})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}};const we=["Login","LoggedIn","CompanyAccount","ForcedFullScreenAccountSelection","WithCustomBadge","Loading","LoadingWithForcedFullScreenAccountSelection","WithVirtualizationEnabled"];export{p as CompanyAccount,m as ForcedFullScreenAccountSelection,S as Loading,b as LoadingWithForcedFullScreenAccountSelection,d as LoggedIn,l as Login,g as WithCustomBadge,v as WithVirtualizationEnabled,we as __namedExportsOrder,qe as default};
