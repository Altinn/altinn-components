import{a7 as o,aa as n,x as F}from"./iframe-Cj7V21km.js";import{u as w,g as C}from"./accountDataFetchers-DlM6t9-G.js";import{a as O}from"./inboxMenu-eHPLaFX0.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-fdj7rbPm.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-CKzA9fKN.js";import{u as x}from"./useLayout-97ljUbj-.js";import{a as T}from"./useLocale-BxIi2exc.js";import{F as E}from"./Flex-CMfzrDGq.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-B_K6d_pz.js";import"./HeartFill-B0fwXfOV.js";import"./InboxFill-BGibYNWU.js";import"./Plus-ubcjdf5p.js";import"./PersonCircle-CYbmJpdB.js";import"./Bookmark-Bv_Utm-D.js";import"./Archive-CMBlBZQq.js";import"./Trash-tfnqqh8_.js";import"./InformationSquare-NQW98JPt.js";import"./globalMenu-DW5ZQeeK.js";import"./Buildings2-56fcZ__k.js";import"./MenuGrid-DJsZCOkm.js";import"./MagnifyingGlass-B8zavmyI.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-gx7XgO_W.js";import"./Banner-DQZIlCt5.js";import"./Heading-BRQOSuW8.js";import"./useHighlightedText-gdz5u-yJ.js";import"./Typography-B3pfG5kD.js";import"./GlobalHeader-CfYlg_Ke.js";import"./GlobalAccountButton-DIIuy-_h.js";import"./Avatar-D_h-dTDE.js";import"./ChevronDown-SIqR4dbe.js";import"./Enter-f6aYZdhd.js";import"./GlobalMenuButton-BYeiSNPC.js";import"./MenuHamburger-DoaqNjt8.js";import"./Badge-DmpmaSED.js";import"./Tooltip-D-lEMjLJ.js";import"./ChevronUp-d_RO8MoQ.js";import"./Dropdown-BCb8vxkT.js";import"./AccountSelector-D24D4-CR.js";import"./SearchField-BEMeTu2B.js";import"./FieldBase-D_BM9i5X.js";import"./Field-Cnt4wz2p.js";import"./Label-Bl6bhyHp.js";import"./Input-DnU3MXtK.js";import"./useMenu-DM-7OZIV.js";import"./MenuListItem-CO0eoNuC.js";import"./MenuListDivider-Cd6IMkL-.js";import"./MenuListHeading-CRxb5-RD.js";import"./MenuItem-CHAPJdhJ.js";import"./ItemMedia-CT1Qhol1.js";import"./AvatarGroup-WUTqusx8.js";import"./Checkmark-CVZzCtvU.js";import"./ItemLabel-C1bWOeuh.js";import"./ItemControls-C0hj5koB.js";import"./ChevronRight-DWxpnRfX.js";import"./Switch-B__v8UGS.js";import"./AccountMenu-B-eZH9r6.js";import"./GlobalMenu-CHtFHwyb.js";import"./ArrowUndo-CNZhAEE7.js";import"./Globe-CzN74s1b.js";import"./BreadcrumbsLink-C_IpMOma.js";import"./ArrowRight-mfl-HMNl.js";import"./Footer-BaPK0KMZ.js";import"./useAccountMenu-CdZ1XpdU.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
