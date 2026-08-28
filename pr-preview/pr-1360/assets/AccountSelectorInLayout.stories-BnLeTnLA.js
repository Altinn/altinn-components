import{a7 as o,aa as n,x as F}from"./iframe-BKPYfBaP.js";import{u as w,g as C}from"./accountDataFetchers-ChbIiIB-.js";import{a as O}from"./inboxMenu-jqwdlZRR.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-CqqbQ1CR.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-CMjm2tJC.js";import{u as x}from"./useLayout-BVUGlFtZ.js";import{a as T}from"./useLocale-o4iH5XfL.js";import{F as E}from"./Flex-Dg9OypdH.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-EkiOMZ7A.js";import"./HeartFill-ClW5moNW.js";import"./InboxFill-Dim3XRif.js";import"./Plus-3k5Jqwe2.js";import"./PersonCircle-ClfUp13-.js";import"./Bookmark-C7VR73qx.js";import"./Archive-CIUvgHr0.js";import"./Trash-Cnwe6yaS.js";import"./InformationSquare-BcX77Iuf.js";import"./globalMenu-DSOs4F-M.js";import"./Buildings2-C-O3AVkE.js";import"./MenuGrid-CZS2OUqb.js";import"./MagnifyingGlass-BcIgrRKJ.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-BCWqN3F4.js";import"./CookieBanner-C99ddqmD.js";import"./Heading-BlMy4Ad2.js";import"./useHighlightedText-BNKt0Eyh.js";import"./Typography-Cdqx97qL.js";import"./Banner-DMEYucF2.js";import"./GlobalHeader-C_THL8xz.js";import"./GlobalAccountButton-DjUCe58B.js";import"./Avatar-CBzwnIR6.js";import"./ChevronDown-CR6j5uYN.js";import"./Enter-Cp7eRPyv.js";import"./GlobalMenuButton-BKYW8NoQ.js";import"./MenuHamburger-BprZ1BzR.js";import"./Badge-MDs50kx6.js";import"./Tooltip-BCY8jcz2.js";import"./ChevronUp-B-ED2Onp.js";import"./Dropdown-BaK7GwBJ.js";import"./AccountSelector-D2m594M4.js";import"./SearchField-BEBaG6GH.js";import"./FieldBase-BZsWcTUs.js";import"./Field-DD7IzQnc.js";import"./Label-TLLhNVMu.js";import"./Input-CHWt3Nk0.js";import"./useMenu-BEKNpnot.js";import"./MenuListItem-Dox6r-gI.js";import"./MenuListDivider-Br9qCroM.js";import"./MenuListHeading-DETCOsyl.js";import"./MenuItem-Bx6H1W-Q.js";import"./ItemMedia-CfPfvhkB.js";import"./AvatarGroup-C3fpFOg5.js";import"./Checkmark-CamERl7S.js";import"./ItemLabel-CAfmR_Xk.js";import"./ItemControls-MYYKbbE3.js";import"./ChevronRight-CfHO682k.js";import"./Switch-T1iKx95o.js";import"./AccountMenu-BBS5mw4I.js";import"./GlobalMenu-Bub5e2_m.js";import"./ArrowUndo-CbmIsveB.js";import"./Globe-DzU898X1.js";import"./BreadcrumbsLink-CVY2PFJQ.js";import"./ArrowRight-CJStjUi1.js";import"./Footer-DwEZ0RGQ.js";import"./useAccountMenu-DTnieR8A.js";const Ze={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
