var O=Object.defineProperty;var o=(e,r)=>O(e,"name",{value:r,configurable:!0});import{a7 as s,aa as i,x as w}from"./iframe-Ck42qOx1.js";import{u as x,g as j}from"./accountDataFetchers-O52qItWg.js";import{a as z}from"./inboxMenu-B-LQ8BqP.js";import{f as I}from"./footer-w2jkxXbY.js";import{h as E}from"./header-BEkB8-SK.js";import{s as M}from"./skipLink-a-xnxnVi.js";import{L as F}from"./Layout-DO1kRlg1.js";import{u as T}from"./useLayout-BxgrZEpM.js";import{a as P}from"./useLocale-B1NgXTrx.js";import{F as R}from"./Flex-CzBhjOdV.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-Bk2hO8WM.js";import"./name-Dr5DH52l.js";import"./HeartFill-DWHY2qOR.js";import"./InboxFill-D7_H0CmT.js";import"./Plus-1EeeSaLT.js";import"./PersonCircle-BOj09QIw.js";import"./Bookmark-DJEuTHB_.js";import"./Archive-DTVQB6g6.js";import"./Trash-hM9OCzu1.js";import"./InformationSquare-CGuPpOub.js";import"./globalMenu-B2DxW95W.js";import"./Buildings2-DL0ggmdl.js";import"./MenuGrid-Bu376UhO.js";import"./MagnifyingGlass-CxCtlPHN.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-DHkdA6Mx.js";import"./CookieBanner-Dp8DU3hx.js";import"./Heading-CWc2O27X.js";import"./useHighlightedText-BgClQYDl.js";import"./Typography-nObbjg0R.js";import"./Link-DG8ufNV-.js";import"./Banner-CXO-NfdB.js";import"./GlobalHeader-C_xj6DIj.js";import"./GlobalAccountButton-BtmdH2Tx.js";import"./Avatar-BGxIkqoE.js";import"./ChevronDown-CVgB8S_A.js";import"./Enter-BsxyvaAW.js";import"./GlobalMenuButton-DkFOr-X_.js";import"./MenuHamburger-CF5_JoaO.js";import"./Badge-Cjd2AmoZ.js";import"./Tooltip-CTYi4ppJ.js";import"./ChevronUp-CXZFvpJO.js";import"./Dropdown-Dfag5WSr.js";import"./AccountSelector-DRpQGVU6.js";import"./SearchField-B8KiDBUc.js";import"./MenuListItem-BIqpRdYe.js";import"./MenuListHeading-C_C2TzXD.js";import"./MenuItem-BT6sfN7d.js";import"./ItemMedia-Br8-csYo.js";import"./AvatarGroup-47nQolqa.js";import"./Checkmark-Di95vAnU.js";import"./ItemLabel-BKKQ8yMh.js";import"./ItemControls-3hwzA3sg.js";import"./ChevronRight-DWZnEevf.js";import"./FieldBase-ly-5mtcw.js";import"./Field-DflaqZhu.js";import"./Label-BQ9ZPq2G.js";import"./Input-DGLuCKOz.js";import"./useMenu-BBAeNj9K.js";import"./MenuListDivider-CthpKcql.js";import"./Switch-B1H2K7js.js";import"./AccountMenu-D1k5sfyr.js";import"./GlobalMenu-s93dAZzh.js";import"./ArrowUndo-BORXbKBL.js";import"./Globe-4hEu2YgG.js";import"./BreadcrumbsLink-DvaHLwgW.js";import"./ArrowRight-B3peGAbp.js";import"./Footer-C7cpYrr2.js";import"./useAccountMenu-DsX4mUWw.js";const st={title:"Layout/AccountSelector/In Layout",component:F,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
selector behaves alongside the header, sidebar and global menu. The same
cases are available as standalone-component stories under Layout/AccountSelector.`}}},args:{theme:"subtle",skipLink:M,header:E,footer:I,sidebar:{menu:z},children:s.jsxs(R,{align:"center",justify:"center",style:{border:"1px dashed",width:"100%",height:"100%",gap:5},children:["Content",s.jsx("a",{href:"https://altinn.no",children:"with a focusable item"})]}),color:"company",forceOpenFullScreen:void 0},argTypes:{color:{control:"select",options:["company","neutral","person"]},forceOpenFullScreen:{control:"select",options:[!0,!1,void 0]}}},u="167536b5-f8ed-4c5a-8f48-0279507e53ae",k={partyUuid:u,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},N=o((e,r)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:r,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),"makeOrgParty"),A=o((e,r=0)=>{const c=Array.from({length:e-1},(l,n)=>N(n+1,n<r));return[k,...c]},"buildParties"),S=o(({args:e,parties:r})=>{const c=T(e),l=P({accountId:"diaspora"}),[n,f]=i.useState([]),[y,U]=i.useState(!0),[D,b]=i.useState(u),L=x({partyListDTO:r,favoriteAccountUuids:n,onToggleFavorite:o(t=>{f(a=>a.includes(t)?a.filter(v=>v!==t):[...a,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:D,onSelectAccount:o(t=>{b(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:y,onShowDeletedUnitsChange:o(t=>{U(t)},"onShowDeletedUnitsChange")});return s.jsx(w,{languageCode:"nb",children:s.jsx(F,{...e,...c,header:{...c.header,accountSelector:L,globalMenu:l},children:e.children})})},"AccountSelectorDemo"),d=o(e=>{const r=T(e),c=P({accountId:"diaspora"}),[l,n]=i.useState([]),[f,y]=i.useState(!1),[U,D]=i.useState(u),b=j(),L=x({partyListDTO:b,favoriteAccountUuids:l,onToggleFavorite:o(t=>{n(a=>a.includes(t)?a.filter(v=>v!==t):[...a,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:U,onSelectAccount:o(t=>{D(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:f,onShowDeletedUnitsChange:o(t=>{y(t)},"onShowDeletedUnitsChange")});return s.jsx(w,{languageCode:"nb",children:s.jsx(F,{...e,...r,header:{...r.header,accountSelector:L,globalMenu:c},children:e.children})})},"UsingUseAccountHook"),p=o(e=>s.jsx(S,{args:e,parties:A(3)}),"ThreeAccounts"),m=o(e=>s.jsx(S,{args:e,parties:A(4,1)}),"FourAccountsOneDeleted"),g=o(e=>s.jsx(S,{args:e,parties:A(6,3)}),"SixAccountsThreeDeleted"),h=o(e=>s.jsx(S,{args:e,parties:A(10)}),"TenAccountsNoneDeleted");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...h.parameters?.docs?.source}}};const at=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];export{m as FourAccountsOneDeleted,g as SixAccountsThreeDeleted,h as TenAccountsNoneDeleted,p as ThreeAccounts,d as UsingUseAccountHook,at as __namedExportsOrder,st as default};
