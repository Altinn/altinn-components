import{a7 as o,aa as n,x as F}from"./iframe-CAjSv_nS.js";import{u as w,g as C}from"./accountDataFetchers-CPQEihYu.js";import{a as O}from"./inboxMenu-DaYzmyie.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-C5XfkQb0.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-ZWNbHIN7.js";import{u as x}from"./useLayout-CKqjadf7.js";import{a as T}from"./useLocale-Blm1WIgg.js";import{F as E}from"./Flex-Dkl3V3J_.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-CNSJjTJn.js";import"./HeartFill-DEe8KAvC.js";import"./InboxFill-DQ0aEly4.js";import"./Plus-BAe7a_fr.js";import"./PersonCircle-C8v-lBPL.js";import"./Bookmark-CVASSdLQ.js";import"./Archive-D9_PLgbn.js";import"./Trash-CNWgj8JD.js";import"./InformationSquare-CA9knMPH.js";import"./globalMenu-Bu4U4Sdt.js";import"./Buildings2-B2Sj8eeu.js";import"./MenuGrid-CBA2935z.js";import"./MagnifyingGlass-BZEvKjAk.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-C0ps2RQ-.js";import"./Banner-DxIJOORh.js";import"./Heading-Dl2CB_qz.js";import"./useHighlightedText-BhVVUcDt.js";import"./Typography-CP4EAHNP.js";import"./GlobalHeader-D5ZGSCT-.js";import"./GlobalAccountButton-DCdJBRGc.js";import"./Avatar-CgMczA0n.js";import"./ChevronDown-DV1YpklV.js";import"./Enter-DlXm2DlN.js";import"./GlobalMenuButton-CBBmuqFJ.js";import"./MenuHamburger-BbzPLYJ2.js";import"./Badge-Dlsqw5tH.js";import"./Tooltip-DmTt27sC.js";import"./ChevronUp-CiQ1vTJ_.js";import"./Dropdown-CFFHqeqH.js";import"./AccountSelector-CfR9zR4X.js";import"./SearchField-BeyrM52L.js";import"./FieldBase-B3aukQxa.js";import"./Field-D8Qe0uka.js";import"./Label-CjI2CUCN.js";import"./Input-BnE3VUoY.js";import"./useMenu-DNlZtc9u.js";import"./MenuListItem-Cr3RaesB.js";import"./MenuListDivider-Cl5vSJ7C.js";import"./MenuListHeading-DK632LaI.js";import"./MenuItem-C500ZIIj.js";import"./ItemMedia-DCE7hmVr.js";import"./AvatarGroup-ujKKLt3E.js";import"./Checkmark-Da_1rBde.js";import"./ItemLabel-JZ_7_TI1.js";import"./ItemControls-C86-eNC3.js";import"./ChevronRight-DBCR3hzH.js";import"./Switch-D9JMrYde.js";import"./AccountMenu-DqVVwRYg.js";import"./GlobalMenu-DLc3Jzlm.js";import"./ArrowUndo-Dk2uggSE.js";import"./Globe-nvMd5ZQX.js";import"./BreadcrumbsLink-CywEWjrR.js";import"./ArrowRight-BIY-HWMN.js";import"./Footer-CRc1UDyx.js";import"./useAccountMenu-C5sjZYs2.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
