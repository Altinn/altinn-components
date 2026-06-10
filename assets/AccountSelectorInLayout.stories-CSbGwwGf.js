import{a7 as o,aa as n,x as F}from"./iframe-Da53zzTq.js";import{u as w,g as C}from"./accountDataFetchers-DY9vsmSk.js";import{a as O}from"./inboxMenu-DZ2CaAgu.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-D4Wv07tK.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout--3fNWm7q.js";import{u as x}from"./useLayout-C4bCB44Z.js";import{a as T}from"./useLocale-Mw6BRR6v.js";import{F as E}from"./Flex-D2KvdX5w.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-Bce_WwsS.js";import"./HeartFill-CP95Nmnr.js";import"./InboxFill-DrTrmOOe.js";import"./Plus-D8GF-Tra.js";import"./PersonCircle-UPehwCUm.js";import"./Bookmark-DIIwwtSj.js";import"./Archive-BPAYx93c.js";import"./Trash-CFLNIgyC.js";import"./InformationSquare-B_LCnSe8.js";import"./globalMenu-ftdJOC73.js";import"./Buildings2-ZV3Q-fFf.js";import"./MenuGrid-CjMwQH3h.js";import"./MagnifyingGlass-bfd6ClVE.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-DFUaYnYK.js";import"./Banner-a6YxsrH0.js";import"./Heading-DscqP9Yc.js";import"./useHighlightedText-CRKmbQjK.js";import"./Typography-Dy4MqSc4.js";import"./GlobalHeader-B3gZUjPG.js";import"./GlobalAccountButton-Bk9OXKZz.js";import"./Avatar-CNmsZKUa.js";import"./ChevronDown-n3Y6y8IU.js";import"./Enter-wL9t8S3m.js";import"./GlobalMenuButton-DyO7-BtI.js";import"./MenuHamburger-C3wVymzF.js";import"./Badge-Cz-Xpmja.js";import"./Tooltip-Ovi09slt.js";import"./ChevronUp-kw1y4I9y.js";import"./Dropdown-CHEaMzgw.js";import"./AccountSelector-CAI6zt-c.js";import"./SearchField-C_K7QMu3.js";import"./FieldBase-BU_zP5Yv.js";import"./Field-BfWcyiGr.js";import"./Label-BttEpvGq.js";import"./Input-CoMQYpcI.js";import"./useMenu-DY0SSfK5.js";import"./MenuListItem-miRB5bIM.js";import"./MenuListHeading-DpZURBIT.js";import"./MenuItem-CyggXvzt.js";import"./ItemMedia-DBIH2IUr.js";import"./AvatarGroup-CiKX_xpR.js";import"./Checkmark-y0isgIvR.js";import"./ItemLabel-DluBJ4yx.js";import"./ItemControls-ohsHtP8K.js";import"./ChevronRight-R352om1g.js";import"./index-nqILkJZM.js";import"./Switch-DAQ_sxHW.js";import"./AccountMenu-DrARlzRz.js";import"./GlobalMenu-DE0duDCs.js";import"./ArrowUndo-G4gIgZFZ.js";import"./Globe-D3SqfVz8.js";import"./BreadcrumbsLink-CJdOFiGK.js";import"./ArrowRight-DypIxPg4.js";import"./Footer-EEwlh3cQ.js";import"./useAccountMenu-BvdRAmPi.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
