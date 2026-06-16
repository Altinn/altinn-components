import{a7 as o,aa as n,x as F}from"./iframe-5uZaoZDv.js";import{u as w,g as C}from"./accountDataFetchers-CG-xPk7K.js";import{a as O}from"./inboxMenu-GFmd34kw.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-BM1CGIa-.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-YlJjt3Zp.js";import{u as x}from"./useLayout-TA_KuGRY.js";import{a as T}from"./useLocale-BsS1kP7L.js";import{F as E}from"./Flex-n4FQi775.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BtoJpQh7.js";import"./HeartFill-DCGWXjh-.js";import"./InboxFill-C1F-FBG0.js";import"./Plus-Niq-gKxO.js";import"./PersonCircle-6TXghkEl.js";import"./Bookmark-iOzOj9GE.js";import"./Archive-3ezaIRLA.js";import"./Trash-2WKaOU1P.js";import"./InformationSquare-DVWbDPiI.js";import"./globalMenu-Brui9SgR.js";import"./Buildings2-BtgOIZ6h.js";import"./MenuGrid-7flgsfA5.js";import"./MagnifyingGlass-BhHVps8f.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-BxsFb5Og.js";import"./Banner-n9wWpLew.js";import"./Heading-B0bYr3fv.js";import"./useHighlightedText-SumDRzv0.js";import"./Typography-DIry-l26.js";import"./GlobalHeader-K2Vvsrfp.js";import"./GlobalAccountButton-D3YkeWN6.js";import"./Avatar-YMRiiHHf.js";import"./ChevronDown-WcynsFDk.js";import"./Enter-BLjcmL9e.js";import"./GlobalMenuButton-UDYXjn0g.js";import"./MenuHamburger-Dp4fYPBF.js";import"./Badge-CJMAUuOr.js";import"./Tooltip-BCm3h_Ql.js";import"./ChevronUp-DyiUf01B.js";import"./Dropdown-CDWM3_3M.js";import"./AccountSelector-DRG0v8TS.js";import"./SearchField-BHTg7ejP.js";import"./FieldBase-D-wimfjV.js";import"./Field-CjiYvts-.js";import"./Label-DkLrq_fL.js";import"./Input-C9_VoQpt.js";import"./useMenu-ihj2gTIo.js";import"./MenuListItem-BbZ2xvN5.js";import"./MenuListDivider-BVxqYtLY.js";import"./MenuListHeading-gwVAdWe6.js";import"./MenuItem-CHpnlanL.js";import"./ItemMedia-CTN7-8P7.js";import"./AvatarGroup-BGXl6ZDr.js";import"./Checkmark-j8exHh37.js";import"./ItemLabel-DdCL01OT.js";import"./ItemControls-DqscoWhH.js";import"./ChevronRight-Bm7ufgRx.js";import"./Switch-DtoW_28_.js";import"./AccountMenu-oPXEEHya.js";import"./GlobalMenu-CQ0cRHDw.js";import"./ArrowUndo-DYsQqSN_.js";import"./Globe-BFCa4mjd.js";import"./BreadcrumbsLink-fOI1FWh4.js";import"./ArrowRight-Ucu-Xew7.js";import"./Footer-Cr5jeopI.js";import"./useAccountMenu-DrOsqRFd.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
