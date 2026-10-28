var j=Object.defineProperty;var o=(e,r)=>j(e,"name",{value:r,configurable:!0});import{a5 as s,a8 as i,w as F}from"./iframe-BfD7syly.js";import{u as T,g as z}from"./accountDataFetchers-DdumHcVq.js";import{a as I}from"./inboxMenu-BGyKHyXU.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as O}from"./header-BcIuFSSI.js";import{s as E}from"./skipLink-a-xnxnVi.js";import{L as w}from"./Layout-CHpZZy-N.js";import{u as x}from"./useLayout-CqkUQsA5.js";import{a as P}from"./useLocale-3YNQYid9.js";import{F as R}from"./Flex-B7LQuBXt.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-Ba3et8z1.js";import"./name-Dr5DH52l.js";import"./HeartFill-BV-KItZj.js";import"./InboxFill-DTYJlSxB.js";import"./Plus-Oie_r0eR.js";import"./PersonCircle-Dlxxw6BP.js";import"./Bookmark-B2RW4bmm.js";import"./Archive-Do2Bo_ug.js";import"./Trash-DKa5Tgj8.js";import"./InformationSquare-CmhaWIAD.js";import"./globalMenu-CX2uOhHH.js";import"./Buildings2-BGyMsCbz.js";import"./MenuGrid-CU8AhdjO.js";import"./MagnifyingGlass-ClZGDDqe.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-BTv7syuZ.js";import"./CookieBanner-QVxSnXBQ.js";import"./Heading-M_gD0nhY.js";import"./useHighlightedText-BiU1Xaf8.js";import"./Typography-EJ3Vxj-4.js";import"./Link-BuToNDy6.js";import"./Banner-wdoxvpRR.js";import"./GlobalHeader-lk5xpqdu.js";import"./GlobalAccountButton-B0Dl7laI.js";import"./Avatar-DzXDYKXO.js";import"./ChevronDown-CFgXCL2X.js";import"./Enter-CcW5u4Xu.js";import"./GlobalMenuButton-BPjq-f8K.js";import"./MenuHamburger-COAJxrWW.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./ChevronUp-Di_vjPCQ.js";import"./Dropdown-BRxpGVP6.js";import"./AccountSelector-DOrv1x5T.js";import"./SearchField-CWWZLGm9.js";import"./MenuListItem-DkdyT6s3.js";import"./MenuListHeading-BsDHC7at.js";import"./MenuItem-yk1xWr1C.js";import"./ItemMedia-DHigLupS.js";import"./AvatarGroup-x9OrqdJM.js";import"./Checkmark-DS2-cyTF.js";import"./ItemLabel-C4QOzGgW.js";import"./ItemControls-CvMksNjC.js";import"./ChevronRight-DeJMnotn.js";import"./FieldBase-fk0uyKjd.js";import"./Field-DGIr44pk.js";import"./Label-KYDdO5cS.js";import"./Input-BppbGARe.js";import"./useMenu-o9JsDoVb.js";import"./MenuListDivider-VNatTLoD.js";import"./Switch-UQ3Ni1OJ.js";import"./AccountMenu-mY6CVbmC.js";import"./GlobalMenu-C4RLrARM.js";import"./ArrowUndo-C7PukArl.js";import"./Globe-BwTVQOT7.js";import"./BreadcrumbsLink-DYiILvvM.js";import"./ArrowRight-VmwRvciP.js";import"./Footer-CEdgTNjo.js";import"./useAccountMenu-BpF8a_G0.js";const st={title:"Layout/AccountSelector/In Layout",component:w,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
selector behaves alongside the header, sidebar and global menu. The same
cases are available as standalone-component stories under Layout/AccountSelector.`}}},args:{theme:"subtle",skipLink:E,header:O,footer:M,sidebar:{menu:I},children:s.jsxs(R,{align:"center",justify:"center",style:{border:"1px dashed",width:"100%",height:"100%",gap:5},children:["Content",s.jsx("a",{href:"https://altinn.no",children:"with a focusable item"})]}),color:"company",accountSelectionAsMain:void 0},argTypes:{color:{control:"select",options:["company","neutral","person"]},accountSelectionAsMain:{control:"select",options:[!0,!1,void 0]}}},u="167536b5-f8ed-4c5a-8f48-0279507e53ae",k={partyUuid:u,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},N=o((e,r)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:r,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),"makeOrgParty"),A=o((e,r=0)=>{const a=Array.from({length:e-1},(l,c)=>N(c+1,c<r));return[k,...a]},"buildParties"),S=o(({args:e,parties:r})=>{const a=x(e),l=P({accountId:"diaspora"}),[c,y]=i.useState([]),[f,U]=i.useState(!0),[D,b]=i.useState(u),L=T({partyListDTO:r,favoriteAccountUuids:c,onToggleFavorite:o(t=>{y(n=>n.includes(t)?n.filter(v=>v!==t):[...n,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:D,onSelectAccount:o(t=>{b(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:f,onShowDeletedUnitsChange:o(t=>{U(t)},"onShowDeletedUnitsChange")});return s.jsx(F,{languageCode:"nb",children:s.jsx(w,{...e,...a,header:{...a.header,accountSelector:L,globalMenu:l},children:e.children})})},"AccountSelectorDemo"),d=o(e=>{const r=x(e),a=P({accountId:"diaspora"}),[l,c]=i.useState([]),[y,f]=i.useState(!1),[U,D]=i.useState(u),b=z(),L=T({partyListDTO:b,favoriteAccountUuids:l,onToggleFavorite:o(t=>{c(n=>n.includes(t)?n.filter(v=>v!==t):[...n,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:U,onSelectAccount:o(t=>{D(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:y,onShowDeletedUnitsChange:o(t=>{f(t)},"onShowDeletedUnitsChange")});return s.jsx(F,{languageCode:"nb",children:s.jsx(w,{...e,...r,header:{...r.header,accountSelector:L,globalMenu:a},children:e.children})})},"UsingUseAccountHook"),p=o(e=>s.jsx(S,{args:e,parties:A(3)}),"ThreeAccounts"),m=o(e=>s.jsx(S,{args:e,parties:A(4,1)}),"FourAccountsOneDeleted"),g=o(e=>s.jsx(S,{args:e,parties:A(6,3)}),"SixAccountsThreeDeleted"),h=o(e=>s.jsx(S,{args:e,parties:A(10)}),"TenAccountsNoneDeleted"),nt=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...h.parameters?.docs?.source}}};export{m as FourAccountsOneDeleted,g as SixAccountsThreeDeleted,h as TenAccountsNoneDeleted,p as ThreeAccounts,d as UsingUseAccountHook,nt as __namedExportsOrder,st as default};
