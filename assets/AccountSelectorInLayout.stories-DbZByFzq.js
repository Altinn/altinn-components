import{a7 as o,aa as n,x as F}from"./iframe-RnExGCnN.js";import{u as w,g as C}from"./accountDataFetchers-DcuYTIht.js";import{a as O}from"./inboxMenu-CRx3uHRS.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-D-UNfmnH.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-DIJC5uS7.js";import{u as x}from"./useLayout-DsST9Xz7.js";import{a as T}from"./useLocale-ChtSRQFS.js";import{F as E}from"./Flex-BMUSu7OL.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-D-HcI6XD.js";import"./name-DC2ocV39.js";import"./HeartFill-CtK1HR8J.js";import"./InboxFill-BUXmS3wG.js";import"./Plus-BRt8-Ub-.js";import"./PersonCircle-CXYglnzD.js";import"./Bookmark-CmNkWfG-.js";import"./Archive-CdtSNR_W.js";import"./Trash-D4qqih4r.js";import"./InformationSquare-CRikKN32.js";import"./globalMenu-UgFJI4kF.js";import"./Buildings2-DDsFMQtQ.js";import"./MenuGrid-BYQSl4NI.js";import"./MagnifyingGlass-t8Md0lZx.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-BXFvptkT.js";import"./CookieBanner-xaf7zN5g.js";import"./Heading-Ds8TW_p4.js";import"./useHighlightedText-wXuVfUlk.js";import"./Typography-C0LI4Nld.js";import"./Banner-C3B1ipE0.js";import"./GlobalHeader-DbUDUH1N.js";import"./GlobalAccountButton-iM_fNh5c.js";import"./Avatar-BUNCqCk4.js";import"./ChevronDown-CHkfpXTu.js";import"./Enter-D7zjNy7y.js";import"./GlobalMenuButton-BzAAwCnD.js";import"./MenuHamburger-CljCR6Je.js";import"./Badge-DH0HalVo.js";import"./Tooltip-CrL6AlY-.js";import"./ChevronUp-B2SXqU3E.js";import"./Dropdown-B88VU_C4.js";import"./AccountSelector-DN8G-kUN.js";import"./SearchField-vIwRNxpu.js";import"./FieldBase-DiJ4iC98.js";import"./Field-CSEfWH1k.js";import"./Label-DfG8fS43.js";import"./Input--YjiHlpM.js";import"./useMenu-ZXSzWhmh.js";import"./MenuListItem-Dqpn2neg.js";import"./MenuListDivider-CHRqqpSn.js";import"./MenuListHeading-Cn6qeGor.js";import"./MenuItem-BDAEKbBK.js";import"./ItemMedia-D368mX5y.js";import"./AvatarGroup-fOMA9ogc.js";import"./Checkmark-DIw4FkIE.js";import"./ItemLabel-B7AwZTmi.js";import"./ItemControls-g4j5xbWR.js";import"./ChevronRight-CN6Km5wu.js";import"./Switch-cSaA82mK.js";import"./AccountMenu-DL7GHW0M.js";import"./GlobalMenu-B60CzSq-.js";import"./ArrowUndo-DTXf9uKE.js";import"./Globe-RxityyaA.js";import"./BreadcrumbsLink-XgkKfwaq.js";import"./ArrowRight-Cc07q7fo.js";import"./Footer-aeMb_oSK.js";import"./useAccountMenu-DrzJ9YUL.js";const et={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
