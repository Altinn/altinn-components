import{a7 as o,x as u,aa as d}from"./iframe-C3-39QZn.js";import{G as a}from"./GlobalHeader-BxC2Kzt0.js";import{u as l}from"./useGlobalHeader-XoGih0f-.js";import{u as M,a as G,g as y}from"./accountDataFetchers-D782qS-g.js";import{h as z}from"./header-Ck4A6r18.js";import{a as x}from"./useLocale-QoBpgrnu.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-B_nl_2PG.js";import"./GlobalAccountButton-1c1oP4o_.js";import"./Avatar-WM3RFSU5.js";import"./ChevronDown-C_O64CkH.js";import"./Enter-FSzNSatz.js";import"./GlobalMenuButton-lnjvOmqB.js";import"./MenuHamburger-BX-oMAjS.js";import"./Badge-D3xvyoOt.js";import"./Tooltip-DTSJdaMh.js";import"./ChevronUp-CNTxwGY1.js";import"./Dropdown-DwcIrTVC.js";import"./AccountSelector-I9R229FX.js";import"./SearchField-BHCumu4V.js";import"./MagnifyingGlass-W4-YHK47.js";import"./FieldBase-CuUVQ-X3.js";import"./Typography-DzSxU3qn.js";import"./useHighlightedText--t_r6ff3.js";import"./Field-D-SteSQi.js";import"./Label-BXFq-CrQ.js";import"./Input-Ck9X-Ajd.js";import"./useMenu-PdCJBcPZ.js";import"./MenuListItem-C_zHoz8h.js";import"./MenuListHeading-BABwYJ-w.js";import"./MenuItem-_nHd0yat.js";import"./ItemMedia-Dvk-rH5V.js";import"./AvatarGroup-BCEXfOjH.js";import"./Checkmark-DcGYSDVC.js";import"./ItemLabel-EUoHzQAm.js";import"./Heading-B2KBSzP-.js";import"./ItemControls-CvvFc83j.js";import"./ChevronRight-C8E9q9OI.js";import"./index-DsMJ5_O1.js";import"./InformationSquare-CikWmUv2.js";import"./Switch-DF_iO8hw.js";import"./AccountMenu-CjG9lWO_.js";import"./GlobalMenu-LPr3bcCu.js";import"./ArrowUndo-CTGuYn12.js";import"./Globe-DapnUHe0.js";import"./HeartFill-l3zYTDm7.js";import"./globalMenu-DFm9P4A4.js";import"./PersonCircle-Bo-Vu_zy.js";import"./Buildings2-CvXVAbl-.js";import"./InboxFill-Ce5E9EzM.js";import"./MenuGrid-DYQYeL5Z.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CRjD1-8F.js";import"./Archive-B4YJqA48.js";import"./Trash-Daess6ZY.js";import"./useAccountMenu-Bs3BLusA.js";const Re={title:"Layout/GlobalHeader",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...z}},f=()=>{const t=l({state:"loggedOut"});return o.jsx(u,{children:o.jsx(a,{...t})})},v=()=>{const t=x({accountId:"diaspora"}),[c,i]=d.useState([]),[n,s]=d.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),p=y(),g=M({partyListDTO:p,favoriteAccountUuids:c,onToggleFavorite:e=>{i(r=>r.includes(e)?r.filter(m=>m!==e):[...r,e])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:n,onSelectAccount:e=>{s(e)},languageCode:"nb",isLoading:!1});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})},A=()=>{const t=l({currentAccountIndex:5});return o.jsx(u,{children:o.jsx(a,{...t})})},b=()=>{const{globalMenu:t,accountSelector:c,onLoginClick:i,locale:n}=l({});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:{...c,forceOpenFullScreen:!0,accountMenu:{...c?.accountMenu,currentAccount:void 0}},onLoginClick:i,locale:n})})},U=()=>{const t=l({});return o.jsx(u,{children:o.jsx(a,{...t,badge:{label:"Beta",color:"person"}})})},h=()=>{const t=l({state:"loading"});return o.jsx(u,{children:o.jsx(a,{...t})})},P=()=>{const{globalMenu:t,accountSelector:c,onLoginClick:i,locale:n}=l({state:"loading"});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:{...c,forceOpenFullScreen:!0},onLoginClick:i,locale:n})})},F=()=>{const t=x({accountId:"diaspora"}),[c,i]=d.useState([]),n=G(1e3),s=n.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=d.useState(s),g=M({partyListDTO:n,favoriteAccountUuids:c,onToggleFavorite:e=>{i(r=>r.includes(e)?r.filter(m=>m!==e):[...r,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})},L=()=>{const t=x({accountId:"diaspora"}),[c,i]=d.useState([]),n=G(2),s=n.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=d.useState(s),g=M({partyListDTO:n,favoriteAccountUuids:c,onToggleFavorite:e=>{i(r=>r.includes(e)?r.filter(m=>m!==e):[...r,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
