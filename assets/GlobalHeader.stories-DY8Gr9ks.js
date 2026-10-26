var z=Object.defineProperty;var r=(o,n)=>z(o,"name",{value:n,configurable:!0});import{a7 as t,x as s,aa as p}from"./iframe-DZEBeon6.js";import{G as u}from"./GlobalHeader-C1xyeVjl.js";import{u as l}from"./useGlobalHeader-JQbmzjdM.js";import{u as M,a as H,g as I}from"./accountDataFetchers-Cn-iuqvv.js";import{h as T}from"./header-CXffDktb.js";import{a as C}from"./useLocale-cI1FQhuq.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BUvzy5Tw.js";import"./GlobalAccountButton-DrQ2S6cJ.js";import"./Avatar-D6PHcyLs.js";import"./ChevronDown-CwSFKLVt.js";import"./Enter-CJQnKqa0.js";import"./GlobalMenuButton-DhRFdWpD.js";import"./MenuHamburger-CTz_AmqV.js";import"./Badge-DyKbmjLd.js";import"./Tooltip-DxZByRjV.js";import"./ChevronUp-Bz_NdsyW.js";import"./Dropdown-CX71Aqrg.js";import"./AccountSelector-DcQ2IQJ1.js";import"./SearchField-GPsGdyh4.js";import"./MagnifyingGlass-CTxcpUID.js";import"./MenuListItem-DfeXcHT9.js";import"./MenuListHeading-BypPBxNY.js";import"./MenuItem-BGB4ycnF.js";import"./ItemMedia-6pV5l8vT.js";import"./AvatarGroup-BkVQ_49o.js";import"./Checkmark-HYeuFO73.js";import"./ItemLabel-DltkMrM4.js";import"./Heading-DnxwPqg0.js";import"./useHighlightedText-C02Ewits.js";import"./ItemControls-uBubo23m.js";import"./ChevronRight-USTqc2u1.js";import"./FieldBase-Ba-trh_u.js";import"./Typography-4TCMsL9d.js";import"./Field-C3XB-y4b.js";import"./Label-BuWFr_Nf.js";import"./Input-mPEfjr4P.js";import"./useMenu-BVHVYpiB.js";import"./MenuListDivider-C1mJKicD.js";import"./InformationSquare-YKe2AoWI.js";import"./Switch-CokB6aYL.js";import"./AccountMenu-yMcU8t-x.js";import"./GlobalMenu-C9Ky5rIY.js";import"./ArrowUndo-DkISv7pM.js";import"./Globe-B65d8Gq3.js";import"./name-Dr5DH52l.js";import"./HeartFill-CsC9vuTq.js";import"./globalMenu-SyEYbEUZ.js";import"./PersonCircle-pA5aoYOk.js";import"./Buildings2-p1voPYe4.js";import"./InboxFill-UlBdMz1S.js";import"./MenuGrid-CbpowVch.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-BOR1ciHn.js";import"./Archive-VujtsAHe.js";import"./Trash-E83sjO2G.js";import"./useAccountMenu-CXC_H5Ve.js";const We={title:"Layout/GlobalHeader",component:u,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...T}},A=r(()=>{const o=l({state:"loggedOut"});return t.jsx(s,{children:t.jsx(u,{...o})})},"Login"),b=r(()=>{const o=C({accountId:"diaspora"}),[n,i]=p.useState([]),[c,d]=p.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),g=I(),m=M({partyListDTO:g,favoriteAccountUuids:n,onToggleFavorite:r(e=>{i(a=>a.includes(e)?a.filter(S=>S!==e):[...a,e])},"onToggleFavorite"),selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:c,onSelectAccount:r(e=>{d(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1});return t.jsx(s,{children:t.jsx(u,{globalMenu:o,accountSelector:m})})},"LoggedIn"),v=r(()=>{const o=l({currentAccountIndex:5});return t.jsx(s,{children:t.jsx(u,{...o})})},"CompanyAccount"),U=r(()=>{const o=l({currentAccountIndex:5});return t.jsx(u,{...o,disableAccountSelection:!0})},"DisabledAccountSelection"),h=r(()=>{const{globalMenu:o,accountSelector:n,onLoginClick:i,locale:c}=l({});return t.jsx(s,{children:t.jsx(u,{globalMenu:o,accountSelector:{...n,forceOpenFullScreen:!0,accountMenu:{...n?.accountMenu,currentAccount:void 0}},onLoginClick:i,locale:c})})},"ForcedFullScreenAccountSelection"),P=r(()=>{const o=l({});return t.jsx(s,{children:t.jsx(u,{...o,badge:{label:"Beta",color:"person"}})})},"WithCustomBadge"),F=r(()=>{const o=l({state:"loading"});return t.jsx(s,{children:t.jsx(u,{...o})})},"Loading"),L=r(()=>{const{globalMenu:o,accountSelector:n,onLoginClick:i,locale:c}=l({state:"loading"});return t.jsx(s,{children:t.jsx(u,{globalMenu:o,accountSelector:{...n,forceOpenFullScreen:!0},onLoginClick:i,locale:c})})},"LoadingWithForcedFullScreenAccountSelection"),x=r(()=>{const o=C({accountId:"diaspora"}),[n,i]=p.useState([]),c=H(1e3),d=c.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=p.useState(d),m=M({partyListDTO:c,favoriteAccountUuids:n,onToggleFavorite:r(e=>{i(a=>a.includes(e)?a.filter(S=>S!==e):[...a,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(s,{children:t.jsx(u,{globalMenu:o,accountSelector:m})})},"WithVirtualizationEnabled"),G=r(()=>{const o=C({accountId:"diaspora"}),[n,i]=p.useState([]),c=H(2),d=c.find(e=>e.type==="Person"||e.type==="SelfIdentified")?.partyUuid,[g,f]=p.useState(d),m=M({partyListDTO:c,favoriteAccountUuids:n,onToggleFavorite:r(e=>{i(a=>a.includes(e)?a.filter(S=>S!==e):[...a,e])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:g,onSelectAccount:r(e=>{f(e)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return t.jsx(s,{children:t.jsx(u,{globalMenu:o,accountSelector:m})})},"WithShortAccountList");A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loggedOut'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...A.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
      <GlobalHeader globalMenu={globalMenu} accountSelector={{
      ...accountSelector,
      forceOpenFullScreen: true,
      accountMenu: {
        ...accountSelector?.accountMenu,
        currentAccount: undefined
      }
    } as AccountSelectorProps} onLoginClick={onLoginClick} locale={locale} />
    </RootProvider>;
}`,...h.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({});
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} badge={{
      label: 'Beta',
      color: 'person'
    }} />
    </RootProvider>;
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}};const Ee=["Login","LoggedIn","CompanyAccount","DisabledAccountSelection","ForcedFullScreenAccountSelection","WithCustomBadge","Loading","LoadingWithForcedFullScreenAccountSelection","WithVirtualizationEnabled","WithShortAccountList"];export{v as CompanyAccount,U as DisabledAccountSelection,h as ForcedFullScreenAccountSelection,F as Loading,L as LoadingWithForcedFullScreenAccountSelection,b as LoggedIn,A as Login,P as WithCustomBadge,G as WithShortAccountList,x as WithVirtualizationEnabled,Ee as __namedExportsOrder,We as default};
