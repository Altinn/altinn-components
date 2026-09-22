import{a7 as o,aa as n,x as F}from"./iframe-COBbWeA3.js";import{u as w,g as C}from"./accountDataFetchers-DRrv58Ci.js";import{a as O}from"./inboxMenu-BlHyfgz5.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-BN_pG8nz.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-BQN34pf_.js";import{u as x}from"./useLayout-BtsPBF6f.js";import{a as T}from"./useLocale-CsnI0u0d.js";import{F as E}from"./Flex-D1m969Q2.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-YnGGveQt.js";import"./name-DC2ocV39.js";import"./HeartFill-dFx5lM65.js";import"./InboxFill-B5cSLXJJ.js";import"./Plus-CZeME9An.js";import"./PersonCircle-CJWffokc.js";import"./Bookmark-B7bLBlGl.js";import"./Archive-BBSn7y3F.js";import"./Trash-C2miCmJW.js";import"./InformationSquare-DlnV5Jxm.js";import"./globalMenu-DyCfarTX.js";import"./Buildings2-BdJoNvxN.js";import"./MenuGrid-ChOOKAAj.js";import"./MagnifyingGlass-BZ6J5iab.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-BAgXMzLq.js";import"./CookieBanner-CrHvGZUE.js";import"./Heading-Cmg-mUrR.js";import"./useHighlightedText-CaUkEEvw.js";import"./Typography-BEwm6wl9.js";import"./Banner-DykrVk8_.js";import"./GlobalHeader-B5Gg2oRQ.js";import"./GlobalAccountButton-BMBMFuTz.js";import"./Avatar-DxGMGD7I.js";import"./ChevronDown-DuT6TpEz.js";import"./Enter-BNlWh4Qh.js";import"./GlobalMenuButton-B88uOtkT.js";import"./MenuHamburger-Bzaj4enJ.js";import"./Badge-0q-IE2XW.js";import"./Tooltip-DupjxGOM.js";import"./ChevronUp-BDeeV8M4.js";import"./Dropdown-B2n1P303.js";import"./AccountSelector-BYptsVl6.js";import"./SearchField-C1W3zbfq.js";import"./FieldBase-DRB9b-3z.js";import"./Field-QFb6ZZM4.js";import"./Label-C-viX-1h.js";import"./Input-BuLWJ9G8.js";import"./useMenu-C3_JQO79.js";import"./MenuListItem-BpH-lOdT.js";import"./MenuListDivider-C_auds-g.js";import"./MenuListHeading-BpdGMS_N.js";import"./MenuItem-nArOW8Hu.js";import"./ItemMedia-CVZylXEj.js";import"./AvatarGroup-AOdZQtKF.js";import"./Checkmark-nzyjGA6l.js";import"./ItemLabel-BFAcVwUa.js";import"./ItemControls-DB9Qd_W5.js";import"./ChevronRight-gAwtmJAo.js";import"./Switch-2hglO3ot.js";import"./AccountMenu-Bw7dQ1ke.js";import"./GlobalMenu-WbiDej2B.js";import"./ArrowUndo-CNM4Ftfy.js";import"./Globe-Yb8kgyab.js";import"./BreadcrumbsLink-BjFsUCUk.js";import"./ArrowRight-y8OQlwU9.js";import"./Footer-C-W1fgIq.js";import"./useAccountMenu-DT7-mLBB.js";const et={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
