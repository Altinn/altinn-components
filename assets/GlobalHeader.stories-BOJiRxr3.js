import{j as e,R as c,r as f}from"./iframe-Cqj3AiBb.js";import{u as s}from"./useGlobalHeader-YGPvkGat.js";import{u as L,g as M,a as C}from"./accountDataFetchers-BwiTeXHA.js";import{h as H}from"./header-DyRk7f-v.js";import{G as n}from"./GlobalHeader-1ZMARuNk.js";import{u as G}from"./useLocale-BwYOMWnF.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BA5ox44l.js";import"./HeartFill-DCHu72W2.js";import"./useId-Bi-DL88I.js";import"./Button-DYwdzfZG.js";import"./button-CcZ_KMhQ.js";import"./use-merge-refs-CZYKnUm1.js";import"./lite-DaUVFjkg.js";import"./globalMenu-CsbiSy3A.js";import"./PersonCircle-sKNvHz4D.js";import"./Buildings2-CW6Ln2Lr.js";import"./InboxFill-B-I70TLd.js";import"./MenuGrid-Dnrx8ipH.js";import"./MagnifyingGlass-fMCV_alc.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-ykz9HJCL.js";import"./Archive-Brm_9A3i.js";import"./Trash-B8H25DCw.js";import"./GlobalAccountButton-DzTdmx8c.js";import"./index-CHG1hv9Q.js";import"./XMark-ReENydG3.js";import"./ChevronDown-g18mW4eX.js";import"./Enter-COG8qags.js";import"./Avatar-D1U6ps5a.js";import"./Skeleton-B33vAz-c.js";import"./GlobalMenuButton-CYW4jJbb.js";import"./MenuHamburger-Cowy_Pyv.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-BaSPXXxx.js";import"./Dropdown-Cx7yQmcU.js";import"./AccountSelector-K6AFxsIB.js";import"./heading-BCk6Lw7-.js";import"./AccountMenu-DDR4vCda.js";import"./SearchField-qenOIdRZ.js";import"./FieldBase-DDsWnoQi.js";import"./Typography-CV-E4tqG.js";import"./useHighlightedText-Cyl54eZj.js";import"./Label-URmODKr6.js";import"./index-BZqr7PxG.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./MenuListItem-BGLPSqCo.js";import"./MenuListHeading-CixMX2n6.js";import"./MenuItem-BHtFBHA3.js";import"./ItemMedia-DihsrAKt.js";import"./AvatarGroup-CmMUwf3A.js";import"./Icon-CHi77IUK.js";import"./Checkmark-BFwQvgMU.js";import"./Heading-CJiOkJPI.js";import"./ItemControls-eJMUKPOH.js";import"./ChevronRight-CxmxTIkT.js";import"./useMenu-CKPILulU.js";import"./index-hX5sl0T5.js";import"./InformationSquare-DK31GEUT.js";import"./Switch-Dd7wCyBA.js";import"./GlobalMenu-G61wL3ak.js";import"./ArrowUndo-zDsO2X_3.js";import"./Globe-DBjj0c59.js";import"./useAccountMenu-BNVwIEiq.js";const qe={title:"Layout/GlobalHeader",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...H}},l=()=>{const o=s({state:"loggedOut"});return e.jsx(c,{children:e.jsx(n,{...o})})},d=()=>{const o=G({accountId:"diaspora"}),[a,i]=f.useState([]),[r,A]=f.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),h=C(),U=L({partyListDTO:h,favoriteAccountUuids:a,onToggleFavorite:t=>{i(u=>u.includes(t)?u.filter(P=>P!==t):[...u,t])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:r,onSelectAccount:t=>{A(t)},languageCode:"nb",isLoading:!1});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:U})})},p=()=>{const o=s({currentAccountIndex:5});return e.jsx(c,{children:e.jsx(n,{...o})})},m=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:i,locale:r}=s({});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0,accountMenu:{...a?.accountMenu,currentAccount:void 0}},onLoginClick:i,locale:r})})},g=()=>{const o=s({});return e.jsx(c,{children:e.jsx(n,{...o,badge:{label:"Beta",color:"person"}})})},S=()=>{const o=s({state:"loading"});return e.jsx(c,{children:e.jsx(n,{...o})})},b=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:i,locale:r}=s({state:"loading"});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0},onLoginClick:i,locale:r})})},v=()=>{const o=G({accountId:"diaspora"}),[a,i]=f.useState([]),r=M(1e3),[A,h]=f.useState(r[0].partyUuid),F=r[0].partyUuid,U=L({partyListDTO:r,favoriteAccountUuids:a,onToggleFavorite:t=>{i(u=>u.includes(t)?u.filter(P=>P!==t):[...u,t])},selfAccountUuid:F,currentAccountUuid:A,onSelectAccount:t=>{h(t)},languageCode:"nb",isLoading:!1,virtualized:!0});return e.jsx(c,{children:e.jsx(n,{globalMenu:o,accountSelector:U})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
