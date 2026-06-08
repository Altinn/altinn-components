import{a7 as o,x as u,aa as d}from"./iframe-B0WoJH5H.js";import{G as a}from"./GlobalHeader-B0T11nh9.js";import{u as l}from"./useGlobalHeader-BeTlP4NL.js";import{u as M,a as G,g as y}from"./accountDataFetchers-D_WfSeEg.js";import{h as z}from"./header-DMM4WHA9.js";import{a as x}from"./useLocale-D7SS4IEK.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BaLceTDX.js";import"./GlobalAccountButton-Dc0u35gL.js";import"./Avatar-DoqQG8m_.js";import"./ChevronDown-BDG9HWsL.js";import"./Enter-BHXFCvcD.js";import"./GlobalMenuButton-BkQpp6do.js";import"./MenuHamburger-B-sBFcFJ.js";import"./Badge-D2udDyy3.js";import"./Tooltip-KSMOwJOX.js";import"./ChevronUp-DUEhyOAc.js";import"./Dropdown-trRXYlHt.js";import"./AccountSelector-B1Wfa091.js";import"./SearchField-B4XHRk25.js";import"./MagnifyingGlass-BMHKxaiy.js";import"./FieldBase-HmzGYXkl.js";import"./Typography-BsE1w5gb.js";import"./useHighlightedText-BkoAp9J_.js";import"./Field-CdETmOUd.js";import"./Label-CQqygcqp.js";import"./Input-CGgDhHHk.js";import"./useMenu-BEojsPyg.js";import"./MenuListItem-DBrd4sth.js";import"./MenuListHeading-Czl8ffQE.js";import"./MenuItem-DWXRYnde.js";import"./ItemMedia-BWZiVBkm.js";import"./AvatarGroup-CareQQNx.js";import"./Checkmark-szHKU0qA.js";import"./ItemLabel-3EoqOPb2.js";import"./Heading-DxONre_z.js";import"./ItemControls-AxIj9K4z.js";import"./ChevronRight-DJgUHhg2.js";import"./index-BYFLACqY.js";import"./InformationSquare-C2uJAFQZ.js";import"./Switch-C4u2FFt0.js";import"./AccountMenu-CZ5u86yO.js";import"./GlobalMenu-BLzK7Uw6.js";import"./ArrowUndo-CQUYnDVr.js";import"./Globe-CURRM6pv.js";import"./HeartFill-hNWkwNox.js";import"./globalMenu-CU3Nq1bS.js";import"./PersonCircle-bbVAK5SY.js";import"./Buildings2-CqbLLczn.js";import"./InboxFill-CIDIOQ77.js";import"./MenuGrid-KEKsXkIK.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-DO9fKdzq.js";import"./Archive-BFiK2iNm.js";import"./Trash-CO6lVbOZ.js";import"./useAccountMenu-D1gjhGAY.js";const Re={title:"Layout/GlobalHeader",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...z}},f=()=>{const t=l({state:"loggedOut"});return o.jsx(u,{children:o.jsx(a,{...t})})},v=()=>{const t=x({accountId:"diaspora"}),[c,i]=d.useState([]),[n,s]=d.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),p=y(),g=M({partyListDTO:p,favoriteAccountUuids:c,onToggleFavorite:e=>{i(r=>r.includes(e)?r.filter(m=>m!==e):[...r,e])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:n,onSelectAccount:e=>{s(e)},languageCode:"nb",isLoading:!1});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})},A=()=>{const t=l({currentAccountIndex:5});return o.jsx(u,{children:o.jsx(a,{...t})})},b=()=>{const{globalMenu:t,accountSelector:c,onLoginClick:i,locale:n}=l({});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:{...c,forceOpenFullScreen:!0,accountMenu:{...c?.accountMenu,currentAccount:void 0}},onLoginClick:i,locale:n})})},U=()=>{const t=l({});return o.jsx(u,{children:o.jsx(a,{...t,badge:{label:"Beta",color:"person"}})})},h=()=>{const t=l({state:"loading"});return o.jsx(u,{children:o.jsx(a,{...t})})},P=()=>{const{globalMenu:t,accountSelector:c,onLoginClick:i,locale:n}=l({state:"loading"});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:{...c,forceOpenFullScreen:!0},onLoginClick:i,locale:n})})},F=()=>{const t=x({accountId:"diaspora"}),[c,i]=d.useState([]),n=G(1e3),s=n.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=d.useState(s),g=M({partyListDTO:n,favoriteAccountUuids:c,onToggleFavorite:e=>{i(r=>r.includes(e)?r.filter(m=>m!==e):[...r,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})},L=()=>{const t=x({accountId:"diaspora"}),[c,i]=d.useState([]),n=G(2),s=n.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=d.useState(s),g=M({partyListDTO:n,favoriteAccountUuids:c,onToggleFavorite:e=>{i(r=>r.includes(e)?r.filter(m=>m!==e):[...r,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return o.jsx(u,{children:o.jsx(a,{globalMenu:t,accountSelector:g})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
