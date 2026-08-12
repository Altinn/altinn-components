import{a7 as o,aa as n,x as F}from"./iframe-CeD8DZF_.js";import{u as w,g as C}from"./accountDataFetchers-DanQKQVE.js";import{a as O}from"./inboxMenu-kTKgDOfn.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-Sl1oj08R.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-CIjwcIba.js";import{u as x}from"./useLayout-Bgrn8336.js";import{a as T}from"./useLocale-6RmjaUqZ.js";import{F as E}from"./Flex-BOkBPJQr.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-ClFmcpth.js";import"./HeartFill-Cs4AGepw.js";import"./InboxFill-CV3pJzk9.js";import"./Plus-StvQ1Urq.js";import"./PersonCircle-zHDRbj0E.js";import"./Bookmark-C69DWwR5.js";import"./Archive-BtIL4-pG.js";import"./Trash-YA0mygsZ.js";import"./InformationSquare-CNpr0xiM.js";import"./globalMenu-B9dDwuMR.js";import"./Buildings2-BA18tGco.js";import"./MenuGrid-CY-CpihY.js";import"./MagnifyingGlass-DbRqyBnQ.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-CuhBaYcN.js";import"./Banner-Db1gRFD-.js";import"./Heading-CqEhdWlY.js";import"./useHighlightedText-qfj7RnMw.js";import"./Typography-D10BEJyK.js";import"./GlobalHeader-C9vBsP0x.js";import"./GlobalAccountButton-wEyxwdUc.js";import"./Avatar-D8aGqJlF.js";import"./ChevronDown-y5t2TNH2.js";import"./Enter-C_HHSuUn.js";import"./GlobalMenuButton-Bf81O9iC.js";import"./MenuHamburger-5i5jT7Mb.js";import"./Badge-BzMsK0Kj.js";import"./Tooltip-DJy5VenJ.js";import"./ChevronUp-CcrHqtW6.js";import"./Dropdown-gDr2Qds9.js";import"./AccountSelector-CUefH3va.js";import"./SearchField-D9P8-rjO.js";import"./FieldBase-BbgmrWIh.js";import"./Field-DdzYX5Hl.js";import"./Label-DgGQ1tMX.js";import"./Input-B6Hxr8dW.js";import"./useMenu-Cr0Tzvrf.js";import"./MenuListItem-dRCDziUR.js";import"./MenuListDivider-CA69mol6.js";import"./MenuListHeading-C1lg1_sH.js";import"./MenuItem-D5qCw848.js";import"./ItemMedia-CjD5QxWk.js";import"./AvatarGroup-fNYoTzyx.js";import"./Checkmark-C90PiZqs.js";import"./ItemLabel-CBqRB1sq.js";import"./ItemControls-CphkAdhU.js";import"./ChevronRight-B8wcZ9md.js";import"./Switch-BPi0Tt-y.js";import"./AccountMenu-BRpxa_gO.js";import"./GlobalMenu-BcMHIVXZ.js";import"./ArrowUndo-CY16ifDv.js";import"./Globe-XElHabot.js";import"./BreadcrumbsLink-J5lk5-3z.js";import"./ArrowRight-BPk6hCSQ.js";import"./Footer-Z2XHXSO9.js";import"./useAccountMenu-O9W1mag3.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
