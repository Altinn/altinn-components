import{a7 as o,aa as n,x as F}from"./iframe-CH-Rf2AI.js";import{u as w,g as C}from"./accountDataFetchers-C2vXj6P9.js";import{a as O}from"./inboxMenu-D0cikHk1.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-D6LNfdoA.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-5CLSl6Qa.js";import{u as x}from"./useLayout-CHzeUI8x.js";import{a as T}from"./useLocale-C_wYC4TW.js";import{F as E}from"./Flex-BtYwPl5t.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-Dgi44TjI.js";import"./HeartFill-BYSAi8Z7.js";import"./InboxFill-CjX93Lsg.js";import"./Plus-BQYmFmTa.js";import"./PersonCircle-BwpYfq3Y.js";import"./Bookmark-D8GfnLN6.js";import"./Archive-hrfshYGt.js";import"./Trash-BAmIqX5W.js";import"./InformationSquare-D0kDsS_w.js";import"./globalMenu-C99LfLi3.js";import"./Buildings2-DK48JhGB.js";import"./MenuGrid-D-M2D-4J.js";import"./MagnifyingGlass-CcgQ0D7w.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-BCjaOKFl.js";import"./Banner-CnAxrOLU.js";import"./Heading-BVqV7FRe.js";import"./useHighlightedText-DIHcSE2r.js";import"./Typography-CqA3kMNv.js";import"./GlobalHeader-sT_AjsbH.js";import"./GlobalAccountButton-CT8sX0Ns.js";import"./Avatar-BTqkjvF0.js";import"./ChevronDown-D_JnpA4f.js";import"./Enter-DkRJwzLX.js";import"./GlobalMenuButton-CnyqvQAO.js";import"./MenuHamburger-DrB2GaRw.js";import"./Badge-D-8o5byA.js";import"./Tooltip-DbXMT4Wm.js";import"./ChevronUp-COzX9VRs.js";import"./Dropdown-_OswQPQg.js";import"./AccountSelector-BbFrD_97.js";import"./SearchField-Dm3ERjlY.js";import"./FieldBase-BRTqs99O.js";import"./Field-D5PSE71G.js";import"./Label-D8E1gFAx.js";import"./Input-CCpKfFu1.js";import"./useMenu-FkcUMU_-.js";import"./MenuListItem-GZMPCGGS.js";import"./MenuListHeading-DRQf-aXW.js";import"./MenuItem-BWxi170U.js";import"./ItemMedia-BczcOirL.js";import"./AvatarGroup-l96vnRcp.js";import"./Checkmark-CzXEx9R6.js";import"./ItemLabel-B29_eOJn.js";import"./ItemControls-loNIR_kd.js";import"./ChevronRight-uifDbL9f.js";import"./index-Bn39eRZ3.js";import"./Switch-C3S78qS-.js";import"./AccountMenu-NcwbISGC.js";import"./GlobalMenu-BpjEBk4h.js";import"./ArrowUndo-DkUyPEkv.js";import"./Globe-QtnCWb3M.js";import"./BreadcrumbsLink-jByZbqzh.js";import"./ArrowRight-CDNjHBQ0.js";import"./Footer-AF14lKWa.js";import"./useAccountMenu-D2zJVa-5.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
