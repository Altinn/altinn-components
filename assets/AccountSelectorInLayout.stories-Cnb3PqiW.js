import{a7 as o,aa as n,x as F}from"./iframe-DMrRMxbq.js";import{u as w,g as C}from"./accountDataFetchers-DNGlDfNQ.js";import{a as O}from"./inboxMenu-5esGDebj.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-0kQoZtY9.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-JeqDW6pR.js";import{u as x}from"./useLayout-BO7i3ay6.js";import{a as T}from"./useLocale-Zirkpq73.js";import{F as E}from"./Flex-D4xbJs2N.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BZ5IVph7.js";import"./HeartFill-D9MSWJSi.js";import"./InboxFill-6uq36H51.js";import"./Plus-CNvKeQn4.js";import"./PersonCircle-DyHpIQU5.js";import"./Bookmark-jMqd69vz.js";import"./Archive-BwBynVKj.js";import"./Trash-EXN3xZ3n.js";import"./InformationSquare-C88VQYSr.js";import"./globalMenu-DbvPhrfG.js";import"./Buildings2-reMkWEs_.js";import"./MenuGrid-CxnVSjLH.js";import"./MagnifyingGlass-DofikZhZ.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-4YbRrFwP.js";import"./CookieBanner-C_MDX-N6.js";import"./Heading-BhmjWuIr.js";import"./useHighlightedText-qcaYlVq2.js";import"./Typography-z164oB1T.js";import"./Banner-kW9XarUo.js";import"./GlobalHeader-eiSHWSql.js";import"./GlobalAccountButton-PnIW8EKf.js";import"./Avatar-C6i6C6T9.js";import"./ChevronDown-B_vMfdZY.js";import"./Enter-BqiFr20G.js";import"./GlobalMenuButton-C1DCU4FG.js";import"./MenuHamburger-LUIk6x4-.js";import"./Badge-CzHyduDR.js";import"./Tooltip-1SJQbRAy.js";import"./ChevronUp-iFSbc_bY.js";import"./Dropdown-B5Bg-WA0.js";import"./AccountSelector-BRvHao2Y.js";import"./SearchField-nNatmuZA.js";import"./FieldBase-BwVJ7Sfq.js";import"./Field-DxDkeKhB.js";import"./Label-CB0_8IHy.js";import"./Input-CZPP85wE.js";import"./useMenu-CNg8vInV.js";import"./MenuListItem-CATFKnlr.js";import"./MenuListDivider-CzVCr-XK.js";import"./MenuListHeading-B9JHXv6C.js";import"./MenuItem-DLpEa2I6.js";import"./ItemMedia-Dx1IKYEg.js";import"./AvatarGroup-DVS-_6qx.js";import"./Checkmark-BUuDcLZs.js";import"./ItemLabel-DavwL6MJ.js";import"./ItemControls-DNnHu-Ez.js";import"./ChevronRight-ngEBzgMu.js";import"./Switch-CPFxWEtZ.js";import"./AccountMenu-CmOp2xUf.js";import"./GlobalMenu-f-YUs_iC.js";import"./ArrowUndo-DjzOQXeb.js";import"./Globe-BfSA-wJy.js";import"./BreadcrumbsLink-Bf-OkN9K.js";import"./ArrowRight-BDzZD6JY.js";import"./Footer-Cy-1Nduu.js";import"./useAccountMenu-DgUVaGSz.js";const Ze={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...g.parameters?.docs?.source}}};const et=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];export{p as FourAccountsOneDeleted,m as SixAccountsThreeDeleted,g as TenAccountsNoneDeleted,d as ThreeAccounts,l as UsingUseAccountHook,et as __namedExportsOrder,Ze as default};
