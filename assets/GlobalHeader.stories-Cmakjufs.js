import{a7 as t,x as i,aa as l}from"./iframe-CId_qj2z.js";import{G as c}from"./GlobalHeader-CSY_h-G4.js";import{u as d}from"./useGlobalHeader-DYlUfkGb.js";import{u as G,a as y,g as H}from"./accountDataFetchers-Cz1PLx7x.js";import{h as z}from"./header-CM2Q6xKj.js";import{a as M}from"./useLocale-BQuW1tnY.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-VkDY77Uv.js";import"./GlobalAccountButton-Bh66e_Bq.js";import"./Avatar-qewy70Fx.js";import"./ChevronDown-D4kQ2fb9.js";import"./Enter-B6AWK89G.js";import"./GlobalMenuButton-CjxzpDAE.js";import"./MenuHamburger-Dw1f-W1K.js";import"./Badge-DHd56Np2.js";import"./Tooltip-B4yZ0kY7.js";import"./ChevronUp-7fsujl90.js";import"./Dropdown-C5rYnJno.js";import"./AccountSelector-ifVYb22t.js";import"./SearchField-CLqhaeqA.js";import"./MagnifyingGlass-C7MrVWIP.js";import"./FieldBase-BhNxXsJd.js";import"./Typography-DeDqtkyf.js";import"./useHighlightedText-B-8pDdyK.js";import"./Field-C9CrCSTd.js";import"./Label-Bri1HqH-.js";import"./Input-qq9zM3Qu.js";import"./useMenu-CkWSpni-.js";import"./MenuListItem-Bza4K3Vz.js";import"./MenuListDivider-CndLXr4L.js";import"./MenuListHeading-Dgk_gmcd.js";import"./MenuItem-D69ypsbK.js";import"./ItemMedia-DATZMrih.js";import"./AvatarGroup-DDqOMRUz.js";import"./Checkmark-CV_uUhR-.js";import"./ItemLabel-ezryvk3W.js";import"./Heading-sNyVbkrk.js";import"./ItemControls-s3x5r9Y_.js";import"./ChevronRight-CD2F4Mmq.js";import"./InformationSquare-DbymG94h.js";import"./Switch-Jy7pPJYw.js";import"./AccountMenu-CwINr1xx.js";import"./GlobalMenu-tCZNMjum.js";import"./ArrowUndo-BYpV408O.js";import"./Globe-Ciny8H7f.js";import"./name-DC2ocV39.js";import"./HeartFill-BeCjgmIE.js";import"./globalMenu-BYd_fKFw.js";import"./PersonCircle-DVfffIGi.js";import"./Buildings2-D30IHXtp.js";import"./InboxFill-BoT5g8PP.js";import"./MenuGrid-vT6jwxB2.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-QmKJnEqr.js";import"./Archive-CCdP7xw0.js";import"./Trash-CdB6ueTj.js";import"./useAccountMenu-BowvKVP-.js";const De={title:"Layout/GlobalHeader",component:c,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...z}},f=()=>{const o=d({state:"loggedOut"});return t.jsx(i,{children:t.jsx(c,{...o})})},A=()=>{const o=M({accountId:"diaspora"}),[a,u]=l.useState([]),[r,s]=l.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),p=H(),g=G({partyListDTO:p,favoriteAccountUuids:a,onToggleFavorite:e=>{u(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:r,onSelectAccount:e=>{s(e)},languageCode:"nb",isLoading:!1});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:g})})},b=()=>{const o=d({currentAccountIndex:5});return t.jsx(i,{children:t.jsx(c,{...o})})},v=()=>{const o=d({currentAccountIndex:5});return t.jsx(c,{...o,disableAccountSelection:!0})},U=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:u,locale:r}=d({});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0,accountMenu:{...a?.accountMenu,currentAccount:void 0}},onLoginClick:u,locale:r})})},h=()=>{const o=d({});return t.jsx(i,{children:t.jsx(c,{...o,badge:{label:"Beta",color:"person"}})})},P=()=>{const o=d({state:"loading"});return t.jsx(i,{children:t.jsx(c,{...o})})},F=()=>{const{globalMenu:o,accountSelector:a,onLoginClick:u,locale:r}=d({state:"loading"});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:{...a,forceOpenFullScreen:!0},onLoginClick:u,locale:r})})},L=()=>{const o=M({accountId:"diaspora"}),[a,u]=l.useState([]),r=y(1e3),s=r.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=l.useState(s),g=G({partyListDTO:r,favoriteAccountUuids:a,onToggleFavorite:e=>{u(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:g})})},x=()=>{const o=M({accountId:"diaspora"}),[a,u]=l.useState([]),r=y(2),s=r.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[p,S]=l.useState(s),g=G({partyListDTO:r,favoriteAccountUuids:a,onToggleFavorite:e=>{u(n=>n.includes(e)?n.filter(m=>m!==e):[...n,e])},selfAccountUuid:s,currentAccountUuid:p,onSelectAccount:e=>{S(e)},languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(i,{children:t.jsx(c,{globalMenu:o,accountSelector:g})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
