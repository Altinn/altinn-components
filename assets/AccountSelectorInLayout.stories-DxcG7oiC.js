import{a7 as o,aa as n,x as F}from"./iframe-Bg-ykIGY.js";import{u as w,g as C}from"./accountDataFetchers-BfFlrBjN.js";import{a as O}from"./inboxMenu-CEWKRVn4.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-ZS_Ira2O.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-CvpjqPJ1.js";import{u as x}from"./useLayout-CnZm0k8j.js";import{a as T}from"./useLocale-6q1AmMB-.js";import{F as E}from"./Flex-BQ7Sfa4Q.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-CvqDUnjE.js";import"./HeartFill-CtlcHBEb.js";import"./InboxFill-DTqh6vc6.js";import"./Plus-CRKlQLAt.js";import"./PersonCircle-HQYrmpfh.js";import"./Bookmark-BZCRMINk.js";import"./Archive-65IAQloY.js";import"./Trash-D0nu_cWD.js";import"./InformationSquare-CVG9J0Nh.js";import"./globalMenu-CZmZJOcT.js";import"./Buildings2-B9RAII3-.js";import"./MenuGrid-BPfAt4Cz.js";import"./MagnifyingGlass-D8mkQKeK.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-DUZCAgBJ.js";import"./CookieBanner-J5rw2cCh.js";import"./Heading-BKVhZ0mC.js";import"./useHighlightedText-pfd0QjZv.js";import"./Typography-DBpPrukr.js";import"./Banner-BGmQv_6w.js";import"./GlobalHeader-0IBksqQV.js";import"./GlobalAccountButton-DqkYqPmk.js";import"./Avatar-DcnAq-Om.js";import"./ChevronDown-30JTV7H0.js";import"./Enter-Bp_EcGzr.js";import"./GlobalMenuButton-BkpjWEGe.js";import"./MenuHamburger-CVmRJGX8.js";import"./Badge-DsOcGMcG.js";import"./Tooltip-DQBCcEkE.js";import"./ChevronUp-C-UrHs7h.js";import"./Dropdown-BqiaInOV.js";import"./AccountSelector-Djl-K9hW.js";import"./SearchField-BC3zApJG.js";import"./FieldBase-DJSWyb1T.js";import"./Field-CtkuJ2u8.js";import"./Label-Bd0qu7F0.js";import"./Input-DE7Whw6H.js";import"./useMenu-TQu19WT_.js";import"./MenuListItem-mJ40Xt43.js";import"./MenuListDivider-SxHGHgdX.js";import"./MenuListHeading-CGdgP7xn.js";import"./MenuItem-Do53kNn7.js";import"./ItemMedia-CbKN8wGb.js";import"./AvatarGroup-BOIk740D.js";import"./Checkmark-DLRr0XeX.js";import"./ItemLabel-C7izt9pc.js";import"./ItemControls-ChQuM1Jl.js";import"./ChevronRight-BubW3AYp.js";import"./Switch-BMj-uGOR.js";import"./AccountMenu-CWifJSh4.js";import"./GlobalMenu-D6m_y0cV.js";import"./ArrowUndo-DUSAMG1W.js";import"./Globe-Dutz8jhq.js";import"./BreadcrumbsLink-DxhoIpPE.js";import"./ArrowRight-CEIu9B9J.js";import"./Footer-Dq2z0t-4.js";import"./useAccountMenu-B-m9fqvm.js";const Ze={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
