import{a7 as o,aa as n,x as F}from"./iframe-DWxW88Wb.js";import{u as w,g as C}from"./accountDataFetchers-CO1VG3NV.js";import{a as O}from"./inboxMenu-DKkeN3LP.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-B3BwDgq_.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-BYPYvGug.js";import{u as x}from"./useLayout-4B-kyIHY.js";import{a as T}from"./useLocale-BN0KHM64.js";import{F as E}from"./Flex-DNJfc4Fp.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BCueAbhV.js";import"./HeartFill-4UySQMjC.js";import"./InboxFill-DWim87Ku.js";import"./Plus-DPgCKFUP.js";import"./PersonCircle-4342nGFh.js";import"./Bookmark-CjRgSvle.js";import"./Archive-FtzxqCV-.js";import"./Trash-D9-PBT3O.js";import"./InformationSquare-BIrp2N6S.js";import"./globalMenu-DgR3YC_B.js";import"./Buildings2-FcIOdoWf.js";import"./MenuGrid-DDlbbuJg.js";import"./MagnifyingGlass-DeszhIH4.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-DkjEsfbV.js";import"./Banner-BV8VXQU6.js";import"./Heading-Dg7_b6ZQ.js";import"./useHighlightedText-Kme-_nwy.js";import"./Typography-Dvuik0pJ.js";import"./GlobalHeader-C765PQS9.js";import"./GlobalAccountButton-COsKF7Tf.js";import"./Avatar-C1EBlka3.js";import"./ChevronDown-BB-XUZ3B.js";import"./Enter-Fxl2xNK-.js";import"./GlobalMenuButton-Bg2p-r2N.js";import"./MenuHamburger-DJLRFmM-.js";import"./Badge-Dmc2yD_5.js";import"./Tooltip-Cxw5k6PG.js";import"./ChevronUp-CEtfk9lQ.js";import"./Dropdown-CCIsf4ws.js";import"./AccountSelector-EEHH-Kq6.js";import"./SearchField-DiX0tG9c.js";import"./FieldBase-CIL3pXPs.js";import"./Field-nEx1TRai.js";import"./Label-EU_RFMoG.js";import"./Input-CPaqJzda.js";import"./useMenu-DXA38xVt.js";import"./MenuListItem-CaAjdfCo.js";import"./MenuListHeading-COGZjwEu.js";import"./MenuItem-CTR_r1KI.js";import"./ItemMedia-pWda_jSz.js";import"./AvatarGroup-BXtad5OG.js";import"./Checkmark-BMNSyflA.js";import"./ItemLabel-CjOWrvlD.js";import"./ItemControls-uvaqS71K.js";import"./ChevronRight-CaZE672G.js";import"./index-BBaxa0Qn.js";import"./Switch-DePifvnb.js";import"./AccountMenu-Dfu0uW3u.js";import"./GlobalMenu-BUd0VjgT.js";import"./ArrowUndo-BNbnSrnn.js";import"./Globe-BJLo8sVQ.js";import"./BreadcrumbsLink-CNTXGuVE.js";import"./ArrowRight-DK82HgDq.js";import"./Footer-CDr_1NMF.js";import"./useAccountMenu-4JeJgGma.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
