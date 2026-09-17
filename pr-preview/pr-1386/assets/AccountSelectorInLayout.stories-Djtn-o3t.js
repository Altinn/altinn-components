import{a7 as o,aa as n,x as F}from"./iframe-BlyVQ5Wf.js";import{u as w,g as C}from"./accountDataFetchers-HqGUeRLU.js";import{a as O}from"./inboxMenu-Dq7gdPf0.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-CLIs_EIB.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-CSm99JqL.js";import{u as x}from"./useLayout-CU00PYEr.js";import{a as T}from"./useLocale-D6yQc20T.js";import{F as E}from"./Flex-CGPMEzYL.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-Yp4QQdpa.js";import"./name-DC2ocV39.js";import"./HeartFill-C3HM61e6.js";import"./InboxFill-mWnDeDsa.js";import"./Plus-BtBVLn4K.js";import"./PersonCircle-6--piB4m.js";import"./Bookmark-CAzjqs2L.js";import"./Archive-yxqFfZrS.js";import"./Trash-Bw2W8ER7.js";import"./InformationSquare-CSNu4leW.js";import"./globalMenu-DKnQ6qoo.js";import"./Buildings2-CKZSXDU2.js";import"./MenuGrid-CmNLr_jA.js";import"./MagnifyingGlass-DUa4q_J4.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-DJJ3N_5H.js";import"./CookieBanner-ryxflztk.js";import"./Heading-hWvyrxAT.js";import"./useHighlightedText-DCg_XHxB.js";import"./Typography-xETneU90.js";import"./Banner-2iyITvcA.js";import"./GlobalHeader-kHvqGJRA.js";import"./GlobalAccountButton-Dc4bMZ5Z.js";import"./Avatar-DQIgsQd2.js";import"./ChevronDown-Bxa_Upno.js";import"./Enter-Bs5XnApl.js";import"./GlobalMenuButton-DfWEpbEg.js";import"./MenuHamburger-AxvsS4Qu.js";import"./Badge-BWoBgQxU.js";import"./Tooltip-DIerloK1.js";import"./ChevronUp-CFGBj1-_.js";import"./Dropdown-D4yTY22u.js";import"./AccountSelector-cA0RmHyl.js";import"./SearchField-DB7B9m_1.js";import"./FieldBase-CZEUpIPU.js";import"./Field-CitCeqKK.js";import"./Label-B4XhPvWK.js";import"./Input-7ZkrUdZt.js";import"./useMenu-DUnPL890.js";import"./MenuListItem-u2C1cR8C.js";import"./MenuListDivider-DBzJeO3_.js";import"./MenuListHeading-HVvc_FIB.js";import"./MenuItem-Bv74nrne.js";import"./ItemMedia-BlQhkodk.js";import"./AvatarGroup-6IOgo5me.js";import"./Checkmark-CAhepm8i.js";import"./ItemLabel-CF-a0vLD.js";import"./ItemControls-B0XNXszg.js";import"./ChevronRight-C0zIwyjD.js";import"./Switch-BxXj1yyp.js";import"./AccountMenu-BJ9gl8cA.js";import"./GlobalMenu-nggbh2Kp.js";import"./ArrowUndo-Ds9fN1GT.js";import"./Globe-CZRqGhTL.js";import"./BreadcrumbsLink-C9AGufvm.js";import"./ArrowRight-BzKdGUr0.js";import"./Footer-DjkC2-ZK.js";import"./useAccountMenu-BCYl5C36.js";const et={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
selector behaves alongside the header, sidebar and global menu. The same
cases are available as standalone-component stories under Layout/AccountSelector.`}}},args:{theme:"subtle",skipLink:I,header:z,footer:j,sidebar:{menu:O},children:o.jsxs(E,{align:"center",justify:"center",style:{border:"1px dashed",width:"100%",height:"100%",gap:5},children:["Content",o.jsx("a",{href:"https://altinn.no",children:"with a focusable item"})]}),color:"company",forceOpenFullScreen:void 0},argTypes:{color:{control:"select",options:["company","neutral","person"]},forceOpenFullScreen:{control:"select",options:[!0,!1,void 0]}}},i="167536b5-f8ed-4c5a-8f48-0279507e53ae",M={partyUuid:i,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},R=(e,r)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:r,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),h=(e,r=0)=>{const a=Array.from({length:e-1},(u,c)=>R(c+1,c<r));return[M,...a]},A=({args:e,parties:r})=>{const a=x(e),u=T({accountId:"diaspora"}),[c,S]=n.useState([]),[f,y]=n.useState(!0),[U,D]=n.useState(i),b=w({partyListDTO:r,favoriteAccountUuids:c,onToggleFavorite:t=>{S(s=>s.includes(t)?s.filter(L=>L!==t):[...s,t])},selfAccountUuid:i,currentAccountUuid:U,onSelectAccount:t=>{D(t)},languageCode:"nb",isLoading:!1,showDeletedUnits:f,onShowDeletedUnitsChange:t=>{y(t)}});return o.jsx(F,{languageCode:"nb",children:o.jsx(v,{...e,...a,header:{...a.header,accountSelector:b,globalMenu:u},children:e.children})})},l=e=>{const r=x(e),a=T({accountId:"diaspora"}),[u,c]=n.useState([]),[S,f]=n.useState(!1),[y,U]=n.useState(i),D=C(),b=w({partyListDTO:D,favoriteAccountUuids:u,onToggleFavorite:t=>{c(s=>s.includes(t)?s.filter(L=>L!==t):[...s,t])},selfAccountUuid:i,currentAccountUuid:y,onSelectAccount:t=>{U(t)},languageCode:"nb",isLoading:!1,showDeletedUnits:S,onShowDeletedUnitsChange:t=>{f(t)}});return o.jsx(F,{languageCode:"nb",children:o.jsx(v,{...e,...r,header:{...r.header,accountSelector:b,globalMenu:a},children:e.children})})},d=e=>o.jsx(A,{args:e,parties:h(3)}),p=e=>o.jsx(A,{args:e,parties:h(4,1)}),m=e=>o.jsx(A,{args:e,parties:h(6,3)}),g=e=>o.jsx(A,{args:e,parties:h(10)});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });

  // Use the useAccountSelector hook to get account menu and loading state
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(false); // Get actual value from user profile
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(SELF_UUID);
  const authorizedParties = getAuthorizedPartiesData(); // Fetch your authorized parties data from external source
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids(prev => prev.includes(uuid) ? prev.filter(id => id !== uuid) : [...prev, uuid]);
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid: SELF_UUID,
    currentAccountUuid: currentAccountUuid,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: 'nb',
    isLoading: false,
    showDeletedUnits: showDeletedAccounts,
    onShowDeletedUnitsChange: (newValue: boolean) => {
      setShowDeletedAccounts(newValue);
    }
  });
  return <RootProvider languageCode="nb">
      <Layout {...args} {...layout} header={{
      ...layout.header,
      accountSelector: accountSelector,
      globalMenu: globalMenu
    }}>
        {args.children}
      </Layout>
    </RootProvider>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...g.parameters?.docs?.source}}};const tt=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];export{p as FourAccountsOneDeleted,m as SixAccountsThreeDeleted,g as TenAccountsNoneDeleted,d as ThreeAccounts,l as UsingUseAccountHook,tt as __namedExportsOrder,et as default};
