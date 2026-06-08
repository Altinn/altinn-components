import{a7 as o,aa as n,x as F}from"./iframe-KbHODQgb.js";import{u as w,g as C}from"./accountDataFetchers-BI68sQ_C.js";import{a as O}from"./inboxMenu-DFNRjkHk.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-CHwP2tYE.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-zPH4fyD9.js";import{u as x}from"./useLayout-BbMnQCVD.js";import{a as T}from"./useLocale-fn_8TFMQ.js";import{F as E}from"./Flex-DJYB_We1.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-vNPzihpg.js";import"./HeartFill-D_GdJ6TD.js";import"./InboxFill-n5sUwVFs.js";import"./Plus-DWfYvBf0.js";import"./PersonCircle-DCtiKJYx.js";import"./Bookmark-CMKRXxOZ.js";import"./Archive-D0FcTHIV.js";import"./Trash-Af7bx1Lq.js";import"./InformationSquare-DCyKofJQ.js";import"./globalMenu--h1A6fPQ.js";import"./Buildings2-B7ePRcqB.js";import"./MenuGrid-TcyXoz86.js";import"./MagnifyingGlass-Db52e0Xc.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-Blj0zeEn.js";import"./Banner-CuUdzJys.js";import"./Heading-jxV4Y0yK.js";import"./useHighlightedText-uGguOCwY.js";import"./Typography-C9K693Jo.js";import"./GlobalHeader-BpANGVsD.js";import"./GlobalAccountButton-DaatQQtc.js";import"./Avatar-DL544SyI.js";import"./ChevronDown-DDGA5gfO.js";import"./Enter-CpZn4cxl.js";import"./GlobalMenuButton-XZi3ovFK.js";import"./MenuHamburger-CMlucM-D.js";import"./Badge-MoiWNolG.js";import"./Tooltip-BDxQfQSw.js";import"./ChevronUp-DjGQTIt5.js";import"./Dropdown-2MkuZ1sA.js";import"./AccountSelector-NahkJjx4.js";import"./SearchField-BOprvfZ0.js";import"./FieldBase-Vfg8qV6A.js";import"./Field-B8zKs9Bz.js";import"./Label-C3jcdxRS.js";import"./Input-DwLHHyGz.js";import"./useMenu-veT1adJt.js";import"./MenuListItem-D3mLd2IU.js";import"./MenuListHeading-BPNZa_yh.js";import"./MenuItem-BP2R6FfU.js";import"./ItemMedia-vwuqAhM8.js";import"./AvatarGroup-CCjx5RK0.js";import"./Checkmark-CO83o23q.js";import"./ItemLabel-BW6ywGNt.js";import"./ItemControls-BYcmr1lT.js";import"./ChevronRight-wplb_UH2.js";import"./index-DNTFCYRR.js";import"./Switch-ym8FDDIw.js";import"./AccountMenu-DeYCZtkw.js";import"./GlobalMenu-BdpiVZy2.js";import"./ArrowUndo-Czf3yvOi.js";import"./Globe-Bqq8HH8f.js";import"./BreadcrumbsLink-Dur88p81.js";import"./ArrowRight-B3wkdOFg.js";import"./Footer-okdGhFgd.js";import"./useAccountMenu-DqwVjPm-.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...g.parameters?.docs?.source}}};const Ze=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];export{p as FourAccountsOneDeleted,m as SixAccountsThreeDeleted,g as TenAccountsNoneDeleted,d as ThreeAccounts,l as UsingUseAccountHook,Ze as __namedExportsOrder,Ye as default};
