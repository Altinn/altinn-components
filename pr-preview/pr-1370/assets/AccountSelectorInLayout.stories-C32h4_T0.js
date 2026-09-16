import{a7 as o,aa as n,x as F}from"./iframe-DJnynaCo.js";import{u as w,g as C}from"./accountDataFetchers-BdTW2VwX.js";import{a as O}from"./inboxMenu-BzvhDNOS.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-BFGsb-E1.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-CkIK5wuF.js";import{u as x}from"./useLayout-BNdJclcb.js";import{a as T}from"./useLocale-C3euyATo.js";import{F as E}from"./Flex-DolhwIS-.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-E8FB6fc7.js";import"./name-DC2ocV39.js";import"./HeartFill-BlrI3Zwn.js";import"./InboxFill-BZ4Trjm9.js";import"./Plus-Ddr8PqBX.js";import"./PersonCircle-fXmonhWi.js";import"./Bookmark-CIv5zAUE.js";import"./Archive-Dx_-h2dD.js";import"./Trash-CbXj-0_h.js";import"./InformationSquare-Bwpxsw1g.js";import"./globalMenu-RlMLoQi6.js";import"./Buildings2-pksubvZz.js";import"./MenuGrid-DSZi7UmW.js";import"./MagnifyingGlass-D5ryHey3.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-BwaYSGZo.js";import"./CookieBanner-JzSOTciE.js";import"./Heading-DlyjjAZZ.js";import"./useHighlightedText-CYNOolzk.js";import"./Typography-CiLhkoi6.js";import"./Banner-BojpkkzL.js";import"./GlobalHeader-Dk3367s9.js";import"./GlobalAccountButton-BonYyVlz.js";import"./Avatar-BkXKEErw.js";import"./ChevronDown-CYeA95Pw.js";import"./Enter-Cnl_XCis.js";import"./GlobalMenuButton-C9LbZkye.js";import"./MenuHamburger-C7HX5DPN.js";import"./Badge-CnaY1St8.js";import"./Tooltip-D6A63mE4.js";import"./ChevronUp-BZfYUYCO.js";import"./Dropdown-DqJi5yfL.js";import"./AccountSelector-BM2Wt3GI.js";import"./SearchField-DQ5LjUme.js";import"./FieldBase-D0EiQS06.js";import"./Field-CUMpXqzl.js";import"./Label-DeMCQWn2.js";import"./Input-BYb8Xo7l.js";import"./useMenu-Dk5q8tzl.js";import"./MenuListItem-Ci9AWxXv.js";import"./MenuListDivider-B4GlA6zr.js";import"./MenuListHeading-DcFAqgb-.js";import"./MenuItem-MEQzSQZF.js";import"./ItemMedia-UE0Xgjah.js";import"./AvatarGroup-C7fA72SD.js";import"./Checkmark-b-ALmYFM.js";import"./ItemLabel-CWPkZwXM.js";import"./ItemControls-CHuQfTIH.js";import"./ChevronRight-C7aaNXCF.js";import"./Switch-zYeYtYcJ.js";import"./AccountMenu-D7yd4CHs.js";import"./GlobalMenu-BrMnNOoZ.js";import"./ArrowUndo-_eOhqtEM.js";import"./Globe-ws9jjJHv.js";import"./BreadcrumbsLink-DEcSSvvK.js";import"./ArrowRight-BfehACc8.js";import"./Footer-Dho8J8QT.js";import"./useAccountMenu-1fesQtvK.js";const et={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
