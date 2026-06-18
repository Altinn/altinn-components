import{a7 as o,x as u,aa as d}from"./iframe-3eub8g81.js";import{G as a}from"./GlobalHeader-CM-mKTys.js";import{u as l}from"./useGlobalHeader-Ctd1awOQ.js";import{u as M,a as G,g as y}from"./accountDataFetchers-2AS0CFBP.js";import{h as z}from"./header-BSG0hLSn.js";import{a as x}from"./useLocale-Dy532l4o.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-85ERKH5L.js";import"./GlobalAccountButton-DKPiMzOb.js";import"./Avatar-CwYCtPFD.js";import"./ChevronDown-ByzAyPe6.js";import"./Enter-CvCu2dAb.js";import"./GlobalMenuButton-CKB-x1rg.js";import"./MenuHamburger-CbSlFFZF.js";import"./Badge-CMPSGpEc.js";import"./Tooltip-egZN2oaV.js";import"./ChevronUp-B-pU4SPo.js";import"./Dropdown-D34Rh-FK.js";import"./AccountSelector-OSLyMiiK.js";import"./SearchField-DQomiBHs.js";import"./MagnifyingGlass-BjeT7HiQ.js";import"./FieldBase-C1gDTj8R.js";import"./Typography-BfGFMo_X.js";import"./useHighlightedText-D_KrHTcm.js";import"./Field-BEYcEfWR.js";import"./Label-Dn1DYcv0.js";import"./Input-C_lNMvAW.js";import"./useMenu-DENMRGmJ.js";import"./MenuListItem-kYkVg98b.js";import"./MenuListDivider-Bx6VzZCp.js";import"./MenuListHeading-lAZfEwXv.js";import"./MenuItem-CSF12lCK.js";import"./ItemMedia-BB_XOZ97.js";import"./AvatarGroup-5atDHYqT.js";import"./Checkmark-CY-7WOxt.js";import"./ItemLabel-CEuTRmIa.js";import"./Heading-Cn9WCavo.js";import"./ItemControls-DXPiBYKt.js";import"./ChevronRight-BS_VcXFa.js";import"./InformationSquare-CORGNNV5.js";import"./Switch-CuP7DJRF.js";import"./AccountMenu-CNbXUl8V.js";import"./GlobalMenu-Dz-l5-L4.js";import"./ArrowUndo-N8aO_0gv.js";import"./Globe-CgKM5q3K.js";import"./HeartFill-DBdzvLtg.js";import"./globalMenu-CJwUwGIy.js";import"./PersonCircle-CcWLSde1.js";import"./Buildings2-CcrzKN1f.js";import"./InboxFill-CV2hcl9g.js";import"./MenuGrid-Bs34ZRtK.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BrF0TmJU.js";import"./Archive-DyLG6tnj.js";import"./Trash-BuKvObXQ.js";import"./useAccountMenu-Bp6IDqFX.js";const Re={title:"Layout/GlobalHeader",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...z}},f=()=>{const t=l({state:"loggedOut"});return o.jsx(u,{children:o.jsx(a,{...t})})},v=()=>{const t=x({accountId:"diaspora"}),[c,i]=d.useState([]),[n,s]=d.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),p=y(),g=M({partyListDTO:p,favoriteAccountUuids:c,onToggleFavorite:e=>{i(r=>r.includes(e)?r.filter(m=>m!==e):[...r,e])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:n,onSelectAccount:e=>{s(e)},languageCode:"nb",isLoading:!1});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})},A=()=>{const t=l({currentAccountIndex:5});return o.jsx(u,{children:o.jsx(a,{...t})})},b=()=>{const{globalMenu:t,accountSelector:c,onLoginClick:i,locale:n}=l({});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:{...c,forceOpenFullScreen:!0,accountMenu:{...c?.accountMenu,currentAccount:void 0}},onLoginClick:i,locale:n})})},U=()=>{const t=l({});return o.jsx(u,{children:o.jsx(a,{...t,badge:{label:"Beta",color:"person"}})})},h=()=>{const t=l({state:"loading"});return o.jsx(u,{children:o.jsx(a,{...t})})},P=()=>{const{globalMenu:t,accountSelector:c,onLoginClick:i,locale:n}=l({state:"loading"});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:{...c,forceOpenFullScreen:!0},onLoginClick:i,locale:n})})},F=()=>{const t=x({accountId:"diaspora"}),[c,i]=d.useState([]),n=G(1e3),s=n.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=d.useState(s),g=M({partyListDTO:n,favoriteAccountUuids:c,onToggleFavorite:e=>{i(r=>r.includes(e)?r.filter(m=>m!==e):[...r,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})},L=()=>{const t=x({accountId:"diaspora"}),[c,i]=d.useState([]),n=G(2),s=n.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=d.useState(s),g=M({partyListDTO:n,favoriteAccountUuids:c,onToggleFavorite:e=>{i(r=>r.includes(e)?r.filter(m=>m!==e):[...r,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}};const je=["Login","LoggedIn","CompanyAccount","ForcedFullScreenAccountSelection","WithCustomBadge","Loading","LoadingWithForcedFullScreenAccountSelection","WithVirtualizationEnabled","WithShortAccountList"];export{A as CompanyAccount,b as ForcedFullScreenAccountSelection,h as Loading,P as LoadingWithForcedFullScreenAccountSelection,v as LoggedIn,f as Login,U as WithCustomBadge,L as WithShortAccountList,F as WithVirtualizationEnabled,je as __namedExportsOrder,Re as default};
