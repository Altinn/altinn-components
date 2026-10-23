var R=Object.defineProperty;var r=(o,n)=>R(o,"name",{value:n,configurable:!0});import{a7 as t,x as u,aa as p}from"./iframe-C320xpwq.js";import{G as i}from"./GlobalHeader-LOVrAtVB.js";import{u as l}from"./useGlobalHeader-0m_Glhhk.js";import{u as C,a as M,g as z}from"./accountDataFetchers-Ccjh6AA-.js";import{h as I}from"./header-BheZ3kVF.js";import{a as F}from"./useLocale-BRtpZD7d.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-vnwmm91F.js";import"./GlobalAccountButton-HRF24Cy_.js";import"./Avatar-DiTaWPNi.js";import"./ChevronDown-y1vJePuN.js";import"./Enter-CPkKyFVm.js";import"./GlobalMenuButton-CfdWCzfD.js";import"./MenuHamburger-CkyOXOBY.js";import"./Badge-CKNKkFIN.js";import"./Tooltip-CJNSgf5y.js";import"./ChevronUp-DyDxvCOy.js";import"./Dropdown-DOQP5U0B.js";import"./AccountSelector-CbXpO1vP.js";import"./SearchField-BvARDiuT.js";import"./MagnifyingGlass-BNq1j2pw.js";import"./MenuListItem-BqKoFA4P.js";import"./MenuListHeading-BpIk0QC_.js";import"./MenuItem-RBRvsnc4.js";import"./ItemMedia-DXXjb0Ql.js";import"./AvatarGroup-C3ZQ77zA.js";import"./Checkmark-DXZzi-ZC.js";import"./ItemLabel-DED-sXIi.js";import"./Heading-C_k6PbIN.js";import"./useHighlightedText-DSoWCMjQ.js";import"./ItemControls-PDJ9i9Cv.js";import"./ChevronRight-0obYraG7.js";import"./FieldBase-CS4MYGp7.js";import"./Typography-DeOYXGTy.js";import"./Field-WScL1nVe.js";import"./Label-CArvchbl.js";import"./Input-Butkrn3v.js";import"./useMenu-CNq5BiUb.js";import"./MenuListDivider-DFJO6x9b.js";import"./InformationSquare-BVSTZ5OZ.js";import"./Switch-CWssEnQq.js";import"./AccountMenu-8oVSJmzt.js";import"./GlobalMenu-Ln8xFO4g.js";import"./ArrowUndo-DyZTn8wI.js";import"./Globe-CTKberuz.js";import"./name-Dr5DH52l.js";import"./HeartFill-BAt_nvyH.js";import"./globalMenu-gTRXNQEp.js";import"./PersonCircle-DqA3LwVg.js";import"./Buildings2-Cki0ndPV.js";import"./InboxFill-DZB_H27q.js";import"./MenuGrid-3_OOeL1M.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-Bz47rNmZ.js";import"./Archive-Cbch5ryT.js";import"./Trash-CVaRXKAa.js";import"./useAccountMenu-BfSKMtsZ.js";const We={title:"Layout/GlobalHeader",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...I}},f=r(()=>{const o=l({state:"loggedOut"});return t.jsx(u,{children:t.jsx(i,{...o})})},"Login"),b=r(()=>{const o=F({accountId:"diaspora"}),[n,s]=p.useState([]),[a,d]=p.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),g=z(),m=C({partyListDTO:g,favoriteAccountUuids:n,onToggleFavorite:r(e=>{s(c=>c.includes(e)?c.filter(A=>A!==e):[...c,e])},"onToggleFavorite"),selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:a,onSelectAccount:r(e=>{d(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1});return t.jsx(u,{children:t.jsx(i,{globalMenu:o,accountSelector:m})})},"LoggedIn"),v=r(()=>{const o=l({currentAccountIndex:5});return t.jsx(u,{children:t.jsx(i,{...o})})},"CompanyAccount"),U=r(()=>{const o=l({currentAccountIndex:5});return t.jsx(i,{...o,disableAccountSelection:!0})},"DisabledAccountSelection"),h=r(()=>{const{globalMenu:o,accountSelector:n,onLoginClick:s,locale:a}=l({});return t.jsx(u,{children:t.jsx(i,{globalMenu:o,accountSelector:n,onLoginClick:s,locale:a,readOnlyAccountSelector:!0})})},"ReadOnlyAccountSelector"),P=r(()=>{const o=l({});return t.jsx(u,{children:t.jsx(i,{...o,badge:{label:"Beta",color:"person"}})})},"WithCustomBadge"),y=r(()=>{const o=l({state:"loading"});return t.jsx(u,{children:t.jsx(i,{...o})})},"Loading"),L=r(()=>{const{globalMenu:o,accountSelector:n,onLoginClick:s,locale:a}=l({state:"loading"});return t.jsx(u,{children:t.jsx(i,{globalMenu:o,accountSelector:n,onLoginClick:s,locale:a,readOnlyAccountSelector:!0})})},"LoadingReadOnlyAccountSelector"),x=r(()=>{const o=F({accountId:"diaspora"}),[n,s]=p.useState([]),a=M(1e3),d=a.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,S]=p.useState(d),m=C({partyListDTO:a,favoriteAccountUuids:n,onToggleFavorite:r(e=>{s(c=>c.includes(e)?c.filter(A=>A!==e):[...c,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{S(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(u,{children:t.jsx(i,{globalMenu:o,accountSelector:m})})},"WithVirtualizationEnabled"),G=r(()=>{const o=F({accountId:"diaspora"}),[n,s]=p.useState([]),a=M(2),d=a.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,S]=p.useState(d),m=C({partyListDTO:a,favoriteAccountUuids:n,onToggleFavorite:r(e=>{s(c=>c.includes(e)?c.filter(A=>A!==e):[...c,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{S(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(u,{children:t.jsx(i,{globalMenu:o,accountSelector:m})})},"WithShortAccountList");f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loggedOut'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    currentAccountIndex: 5
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...v.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    currentAccountIndex: 5
  });
  return <GlobalHeader {...header as GlobalHeaderProps} disableAccountSelection />;
}`,...U.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const {
    globalMenu,
    accountSelector,
    onLoginClick,
    locale
  } = useGlobalHeader({});
  return <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector as AccountSelectorProps} onLoginClick={onLoginClick} locale={locale} readOnlyAccountSelector />
    </RootProvider>;
}`,...h.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({});
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} badge={{
      label: 'Beta',
      color: 'person'
    }} />
    </RootProvider>;
}`,...P.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...y.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const {
    globalMenu,
    accountSelector,
    onLoginClick,
    locale
  } = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector as AccountSelectorProps} onLoginClick={onLoginClick} locale={locale} readOnlyAccountSelector />
    </RootProvider>;
}`,...L.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}};const Ee=["Login","LoggedIn","CompanyAccount","DisabledAccountSelection","ReadOnlyAccountSelector","WithCustomBadge","Loading","LoadingReadOnlyAccountSelector","WithVirtualizationEnabled","WithShortAccountList"];export{v as CompanyAccount,U as DisabledAccountSelection,y as Loading,L as LoadingReadOnlyAccountSelector,b as LoggedIn,f as Login,h as ReadOnlyAccountSelector,P as WithCustomBadge,G as WithShortAccountList,x as WithVirtualizationEnabled,Ee as __namedExportsOrder,We as default};
