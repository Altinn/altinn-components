import{a7 as o,aa as n,x as F}from"./iframe-C2dzRmjh.js";import{u as w,g as C}from"./accountDataFetchers-CC0JJOwx.js";import{a as O}from"./inboxMenu-QaVLBTAH.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-Dt9p5SZw.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-BESVG-4a.js";import{u as x}from"./useLayout-Cojtmutn.js";import{a as T}from"./useLocale-CjpPBswc.js";import{F as E}from"./Flex-Cz2ESd29.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-hTAGJPDL.js";import"./HeartFill-CKxTLM5T.js";import"./InboxFill-BqHFk0E9.js";import"./Plus-CZi1FHk4.js";import"./PersonCircle-DSKNIxCS.js";import"./Bookmark-DUz8snvJ.js";import"./Archive-CZc_K4aU.js";import"./Trash-C6xIZZfI.js";import"./InformationSquare-D0pKd-n8.js";import"./globalMenu-BIAGFQ8t.js";import"./Buildings2-CK7NFVn3.js";import"./MenuGrid-EKha7Hm6.js";import"./MagnifyingGlass-D4s7mQ1G.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-DycDzkmp.js";import"./Banner-C1JDonv1.js";import"./Heading-CfKKA19E.js";import"./useHighlightedText-DV4hS6Cx.js";import"./Typography-DJs4mnKu.js";import"./GlobalHeader-CgjF-Eft.js";import"./GlobalAccountButton-1N-AzRUz.js";import"./Avatar-JufbU_Wx.js";import"./ChevronDown-DT113Xv8.js";import"./Enter-DNhLgdXe.js";import"./GlobalMenuButton-C_EX7h5n.js";import"./MenuHamburger-oqzJhj6q.js";import"./Badge-BtitS9Rx.js";import"./Tooltip-yHxi1dML.js";import"./ChevronUp-DhNGyOn8.js";import"./Dropdown-DtS9S0hY.js";import"./AccountSelector-DavzJPA3.js";import"./SearchField-uOvA63Zf.js";import"./FieldBase-Dvh5lIYF.js";import"./Field-B-1S4h3H.js";import"./Label-_M2OAFvX.js";import"./Input-DA-lDvIm.js";import"./useMenu-BFtnvp_l.js";import"./MenuListItem-4Fso0lef.js";import"./MenuListDivider-F2YAa9H7.js";import"./MenuListHeading-C9cVAuQ-.js";import"./MenuItem-BNIi9g5E.js";import"./ItemMedia-BDW8lmrL.js";import"./AvatarGroup-Dco4ceHR.js";import"./Checkmark-BherDihq.js";import"./ItemLabel-dXZ3Y_Gg.js";import"./ItemControls-dnLa86IT.js";import"./ChevronRight-DtjNYNu3.js";import"./Switch-CzhDNOrG.js";import"./AccountMenu-hJwrNsx7.js";import"./GlobalMenu-B8dwTLwb.js";import"./ArrowUndo-e1ZOBjb3.js";import"./Globe-CoJRMQ-v.js";import"./BreadcrumbsLink-BQ_7q1hg.js";import"./ArrowRight-DkZaDrOS.js";import"./Footer-GfBJUugl.js";import"./useAccountMenu-BxjGamUx.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
