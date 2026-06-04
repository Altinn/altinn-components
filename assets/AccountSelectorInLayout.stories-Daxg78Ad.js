import{a7 as o,aa as n,x as F}from"./iframe-CDUjh_2z.js";import{u as w,g as C}from"./accountDataFetchers-DQjsw3iD.js";import{a as O}from"./inboxMenu-Cltgb-5h.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-HzjlBqFo.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-Clzy8C9-.js";import{u as x}from"./useLayout-Lg5Z56qP.js";import{a as T}from"./useLocale-DVIfSYWN.js";import{F as E}from"./Flex-Bc1_yHC5.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-DP7wam1j.js";import"./HeartFill-CU0oPSEK.js";import"./InboxFill-Bsc4AfQF.js";import"./Plus-BtkWHSVH.js";import"./PersonCircle-BDpPcxzb.js";import"./Bookmark-C6csqz55.js";import"./Archive-BJIbGZn4.js";import"./Trash-0-27J6Eh.js";import"./InformationSquare-CT1i7ej7.js";import"./globalMenu-BcM4hSn0.js";import"./Buildings2-BCItUeY7.js";import"./MenuGrid-BAWE-3hk.js";import"./MagnifyingGlass-Dn7hqdrb.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-DAr2beFj.js";import"./Banner-BJWNA3Mr.js";import"./Heading-DX7LPsCl.js";import"./useHighlightedText-DcMy2tkL.js";import"./Typography-HCvo8I75.js";import"./GlobalHeader-DGA7DqaJ.js";import"./GlobalAccountButton-CsTmajHT.js";import"./Avatar-CxwAqCY2.js";import"./ChevronDown-BUU9mFY7.js";import"./Enter-CRniGYFa.js";import"./GlobalMenuButton-CRXTMqKw.js";import"./MenuHamburger-CKCKhSKS.js";import"./Badge-9wdqlOC-.js";import"./Tooltip-rnvLebTi.js";import"./ChevronUp-B_5rOd5t.js";import"./Dropdown-Cq9y5l3q.js";import"./AccountSelector-_TaMLnZT.js";import"./SearchField-D9cu5VJD.js";import"./FieldBase-CC2tJByH.js";import"./Field-BLni3K_t.js";import"./Label-BeOd8owz.js";import"./Input-CyWHlPcl.js";import"./useMenu-CCO_lxMe.js";import"./MenuListItem-CGgNB0ZA.js";import"./MenuListHeading-DztGiWDu.js";import"./MenuItem-GdPNBIG6.js";import"./ItemMedia-Bai-Urcu.js";import"./AvatarGroup-BYI_T_-3.js";import"./Checkmark-DLLLSSlc.js";import"./ItemLabel-Cz51yrrd.js";import"./ItemControls-Kup6bLJb.js";import"./ChevronRight-CG3NwLwQ.js";import"./index-BAc6HH-X.js";import"./Switch-BsB9C13J.js";import"./AccountMenu-_5VktjzI.js";import"./GlobalMenu-DBasIg4L.js";import"./ArrowUndo-CzbSWIbd.js";import"./Globe-BKGQk3fV.js";import"./BreadcrumbsLink-BK8g_MEW.js";import"./ArrowRight-D9kIYyTz.js";import"./Footer-4DjpfKHj.js";import"./useAccountMenu-zxAlAouQ.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
