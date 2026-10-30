var j=Object.defineProperty;var o=(e,r)=>j(e,"name",{value:r,configurable:!0});import{a5 as s,a8 as i,w as F}from"./iframe-BEPBrhYh.js";import{u as T,g as z}from"./accountDataFetchers-W38bks63.js";import{a as I}from"./inboxMenu-CtWtNlRn.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as O}from"./header-BeC-Xqh1.js";import{s as E}from"./skipLink-a-xnxnVi.js";import{L as w}from"./Layout-DCDXVfbM.js";import{u as x}from"./useLayout-CnZ0UKoN.js";import{a as P}from"./useLocale-CW0JYoPc.js";import{F as R}from"./Flex-x8IfBbMo.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BW8ld6Da.js";import"./name-Dr5DH52l.js";import"./HeartFill-C6llmCUX.js";import"./InboxFill-DYuRRpF0.js";import"./Plus-DAOB77qZ.js";import"./PersonCircle-C2xFq9dK.js";import"./Bookmark-C2CIOINf.js";import"./Archive-NlH1Z6Dm.js";import"./Trash-C1lJDto_.js";import"./InformationSquare-D8scBrIA.js";import"./globalMenu-qNfVydtB.js";import"./Buildings2-BzaFL7GZ.js";import"./MenuGrid-B8jnjZA4.js";import"./MagnifyingGlass-l6jgUFkE.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-CkAz1fvp.js";import"./CookieBanner-Cl_qHuXI.js";import"./Heading-BqUC1GBi.js";import"./useHighlightedText-DWAIm2UF.js";import"./Typography-_e1X1oy3.js";import"./Link-BR4Ky0AC.js";import"./Banner-FQfjiqcM.js";import"./GlobalHeader-C6MfFN6C.js";import"./GlobalAccountButton-CV724ZOt.js";import"./Avatar-qDEqb0bI.js";import"./ChevronDown-BSSTTv90.js";import"./Enter-eQD-eOZr.js";import"./GlobalMenuButton-BBIPux6p.js";import"./MenuHamburger-CXEb9Ato.js";import"./Badge-BmPIjRDc.js";import"./Tooltip-DCBB34Fc.js";import"./ChevronUp-Bk9rr-UB.js";import"./Dropdown-CldWVtsu.js";import"./AccountSelector-DuBTmlxF.js";import"./SearchField-r0pyJJeA.js";import"./MenuListItem-2YHve_kq.js";import"./MenuListHeading-T5KLvVq-.js";import"./MenuItem-H_qy6f71.js";import"./ItemMedia-CYSGtJhU.js";import"./AvatarGroup-Gy14OH0C.js";import"./Checkmark-QQMx0dPf.js";import"./ItemLabel-BAi-NqVp.js";import"./ItemControls-CZ-8cGPW.js";import"./ChevronRight-BrDrfe7a.js";import"./FieldBase-BC5T5LJl.js";import"./Field-DhJVWLwL.js";import"./Label-jwx91OTT.js";import"./Input-DvI4J5FV.js";import"./useMenu-B9HVKiow.js";import"./MenuListDivider-DmSDyTka.js";import"./Switch-kGpFVWzx.js";import"./AccountMenu-BFJ5YJHn.js";import"./GlobalMenu-CKxZKQb2.js";import"./ArrowUndo-Bn6ibvxZ.js";import"./Globe-IgiMzoZ3.js";import"./BreadcrumbsLink-C0C6OCT3.js";import"./ArrowRight-CdAaftPP.js";import"./Footer-DxQXXNlI.js";import"./useAccountMenu-pnfblXj7.js";const st={title:"Layout/AccountSelector/In Layout",component:w,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
