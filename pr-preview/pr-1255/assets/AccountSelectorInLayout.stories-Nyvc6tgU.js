import{a7 as o,aa as n,x as F}from"./iframe-B2qSCuzl.js";import{u as w,g as C}from"./accountDataFetchers-DqPfIGqx.js";import{a as O}from"./inboxMenu-DKT7vNYs.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-D3_ONeFu.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-76ZEl-bN.js";import{u as x}from"./useLayout-DO3aS3SB.js";import{a as T}from"./useLocale-BcTppNNY.js";import{F as E}from"./Flex-DUbFTLOy.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-DFn6uBJT.js";import"./HeartFill-v2yxnjxD.js";import"./InboxFill-BGlK0kAC.js";import"./Plus-C423HqNe.js";import"./PersonCircle-DkxcEC2H.js";import"./Bookmark-BnCq2bwL.js";import"./Archive-l9uRDAtU.js";import"./Trash-DxBU9Rfy.js";import"./InformationSquare-Bz2aeVSU.js";import"./globalMenu-CTO35srA.js";import"./Buildings2-CSa0Fj3k.js";import"./MenuGrid-DiWI3u40.js";import"./MagnifyingGlass-BW6TNVS9.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-CfzACGl1.js";import"./Banner-C-RrrCPx.js";import"./Heading-BraOiwz9.js";import"./useHighlightedText-BGZ3rca6.js";import"./Typography-CidHk-ga.js";import"./GlobalHeader-Ddqn6DNs.js";import"./GlobalAccountButton-CZP785Uy.js";import"./Avatar-BRPRyGzj.js";import"./ChevronDown-MLEeMvzz.js";import"./Enter-D2BxqJId.js";import"./GlobalMenuButton-v9hWJoq1.js";import"./MenuHamburger-CgPTbI81.js";import"./Badge-DVZKO9ha.js";import"./Tooltip-DOfER3P6.js";import"./ChevronUp-DsaXlzpU.js";import"./Dropdown-CXjz9DNR.js";import"./AccountSelector-DqwMajub.js";import"./SearchField-M5wz_Je4.js";import"./FieldBase-LsrXuCdT.js";import"./Field-IfN9vhAd.js";import"./Label-qtoi2ZUa.js";import"./Input-BEYjfhLL.js";import"./useMenu-4wlPj4vw.js";import"./MenuListItem-C_Y3s3QU.js";import"./MenuListHeading-Dp2ZOdKs.js";import"./MenuItem-DufE-zMI.js";import"./ItemMedia-C3fquT_8.js";import"./AvatarGroup-BepXVr5f.js";import"./Checkmark-1_ErCtmb.js";import"./ItemLabel-CXwcKPbI.js";import"./ItemControls-i4q63th9.js";import"./ChevronRight-CE-Naqr7.js";import"./index-L4tlORLO.js";import"./Switch-BaESAcvv.js";import"./AccountMenu-DTvV-i8u.js";import"./GlobalMenu-4TKKPZA1.js";import"./ArrowUndo-CSSrSj6Y.js";import"./Globe-BwntYx03.js";import"./BreadcrumbsLink-FVIP7hU1.js";import"./ArrowRight-DmbHvLhG.js";import"./Footer-ClXdpL_M.js";import"./useAccountMenu-CLG0BEsy.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
