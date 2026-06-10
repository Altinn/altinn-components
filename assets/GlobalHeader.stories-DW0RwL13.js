import{a7 as o,x as u,aa as d}from"./iframe-CENvAP26.js";import{G as a}from"./GlobalHeader-BqqSQIP8.js";import{u as l}from"./useGlobalHeader-DXO-cnlY.js";import{u as M,a as G,g as y}from"./accountDataFetchers-bPr9EyZA.js";import{h as z}from"./header-R7c6h7ER.js";import{a as x}from"./useLocale-5_xwWSwQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-C4w-DyYP.js";import"./GlobalAccountButton-C3e6i8a2.js";import"./Avatar-D1pW8xSr.js";import"./ChevronDown-88nFsQYK.js";import"./Enter-CEXAJ-VY.js";import"./GlobalMenuButton-BJO4NSOM.js";import"./MenuHamburger-acEhsrwC.js";import"./Badge-DDGgDt_B.js";import"./Tooltip-B6qNZOKm.js";import"./ChevronUp-BFUCM25K.js";import"./Dropdown-BZVY_4Wm.js";import"./AccountSelector-B1AzVeP1.js";import"./SearchField-B76VS5jy.js";import"./MagnifyingGlass-DDkWwcsn.js";import"./FieldBase-IIcWSE0k.js";import"./Typography-BK5AylHP.js";import"./useHighlightedText-BwOLK-i3.js";import"./Field-oHEtcERA.js";import"./Label-N53R6xsN.js";import"./Input-CMkEMAO8.js";import"./useMenu-DmwlujsT.js";import"./MenuListItem-BT-iZ3cq.js";import"./MenuListHeading-BD0rgLCP.js";import"./MenuItem-Fa6rC5wV.js";import"./ItemMedia-C5TE1h6m.js";import"./AvatarGroup-CTCyh_uW.js";import"./Checkmark-D1ifpvt_.js";import"./ItemLabel-CqdC7zrv.js";import"./Heading-mra_L4pQ.js";import"./ItemControls-DaWh-3zk.js";import"./ChevronRight-CqCnB5Zg.js";import"./index-BzTqrnLh.js";import"./InformationSquare-DfDfuKua.js";import"./Switch-BB3pqrIE.js";import"./AccountMenu-BnAb9qBG.js";import"./GlobalMenu-tnZS_kWC.js";import"./ArrowUndo-DxMsWBCJ.js";import"./Globe-0uZUwFK3.js";import"./HeartFill-Di08reZX.js";import"./globalMenu-CjMqv0jS.js";import"./PersonCircle-B1WnJpSq.js";import"./Buildings2-Cx_FQqS5.js";import"./InboxFill-T9OvqkvK.js";import"./MenuGrid-D_WOCdA8.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-DuFvDZBJ.js";import"./Archive-De4Ormwu.js";import"./Trash-Cs7D8kti.js";import"./useAccountMenu-UsnhQD61.js";const Re={title:"Layout/GlobalHeader",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...z}},f=()=>{const t=l({state:"loggedOut"});return o.jsx(u,{children:o.jsx(a,{...t})})},v=()=>{const t=x({accountId:"diaspora"}),[c,i]=d.useState([]),[n,s]=d.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),p=y(),g=M({partyListDTO:p,favoriteAccountUuids:c,onToggleFavorite:e=>{i(r=>r.includes(e)?r.filter(m=>m!==e):[...r,e])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:n,onSelectAccount:e=>{s(e)},languageCode:"nb",isLoading:!1});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})},A=()=>{const t=l({currentAccountIndex:5});return o.jsx(u,{children:o.jsx(a,{...t})})},b=()=>{const{globalMenu:t,accountSelector:c,onLoginClick:i,locale:n}=l({});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:{...c,forceOpenFullScreen:!0,accountMenu:{...c?.accountMenu,currentAccount:void 0}},onLoginClick:i,locale:n})})},U=()=>{const t=l({});return o.jsx(u,{children:o.jsx(a,{...t,badge:{label:"Beta",color:"person"}})})},h=()=>{const t=l({state:"loading"});return o.jsx(u,{children:o.jsx(a,{...t})})},P=()=>{const{globalMenu:t,accountSelector:c,onLoginClick:i,locale:n}=l({state:"loading"});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:{...c,forceOpenFullScreen:!0},onLoginClick:i,locale:n})})},F=()=>{const t=x({accountId:"diaspora"}),[c,i]=d.useState([]),n=G(1e3),s=n.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=d.useState(s),g=M({partyListDTO:n,favoriteAccountUuids:c,onToggleFavorite:e=>{i(r=>r.includes(e)?r.filter(m=>m!==e):[...r,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})},L=()=>{const t=x({accountId:"diaspora"}),[c,i]=d.useState([]),n=G(2),s=n.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=d.useState(s),g=M({partyListDTO:n,favoriteAccountUuids:c,onToggleFavorite:e=>{i(r=>r.includes(e)?r.filter(m=>m!==e):[...r,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
