import{a7 as o,aa as n,x as F}from"./iframe-DK26OyRD.js";import{u as w,g as C}from"./accountDataFetchers-BFXvAXKD.js";import{a as O}from"./inboxMenu-CNWCtwnR.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-Cr_-pdw0.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-BcBr38eq.js";import{u as x}from"./useLayout-Yj75r2vZ.js";import{a as T}from"./useLocale-Clg2Wn5K.js";import{F as E}from"./Flex-Bsp6DeeI.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BZUhQWI_.js";import"./HeartFill-B6rWCuOk.js";import"./InboxFill-3rvWKNLS.js";import"./Plus-BMnL1FI5.js";import"./PersonCircle-CITAvyGa.js";import"./Bookmark-2rp6yNDB.js";import"./Archive-Dptm87W-.js";import"./Trash-DH9PmhSG.js";import"./InformationSquare-f4aulv5D.js";import"./globalMenu-BgjGhabf.js";import"./Buildings2-DQ4ff-Ye.js";import"./MenuGrid-D34zZXTO.js";import"./MagnifyingGlass-BHP7DrS9.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-6fgDvMFq.js";import"./CookieBanner-Ew-yAjYZ.js";import"./Heading-KMM5EtCs.js";import"./useHighlightedText-dRdWwo97.js";import"./Typography-DLY6k0s2.js";import"./Banner-Cnqr2F_o.js";import"./GlobalHeader-CDaMr_Rk.js";import"./GlobalAccountButton-CJcUpqA1.js";import"./Avatar-BffuF9Fo.js";import"./ChevronDown-BXSVxDRn.js";import"./Enter-B85cbUfy.js";import"./GlobalMenuButton-BmlIUW_I.js";import"./MenuHamburger-C6_sJYu4.js";import"./Badge-DJCWLgdY.js";import"./Tooltip-FdBCCTre.js";import"./ChevronUp-H846LjQF.js";import"./Dropdown-DKc7uAuj.js";import"./AccountSelector-B1s29TaL.js";import"./SearchField-Mgah0vbC.js";import"./FieldBase-BNgybH8j.js";import"./Field-CP0Ba6gq.js";import"./Label-BicRbD_9.js";import"./Input-DpIg0EIy.js";import"./useMenu-0kp9W_Tl.js";import"./MenuListItem-CCTq2KJp.js";import"./MenuListDivider-DYsLXAeP.js";import"./MenuListHeading-BjuGDozt.js";import"./MenuItem-X5ltzLjc.js";import"./ItemMedia-eL3WoD14.js";import"./AvatarGroup-jikhFLm8.js";import"./Checkmark-CX2TKrXP.js";import"./ItemLabel-DbTlGETX.js";import"./ItemControls-DNRsDyv1.js";import"./ChevronRight-CgtnVZss.js";import"./Switch-BoDdhyv4.js";import"./AccountMenu-CeZrRttM.js";import"./GlobalMenu-Z48khG5h.js";import"./ArrowUndo-zT6R2bHq.js";import"./Globe-Cc3tC6-3.js";import"./BreadcrumbsLink-8HFo-MC4.js";import"./ArrowRight-Bjn7HgM7.js";import"./Footer-BK9O7jJH.js";import"./useAccountMenu-D_8qL5xf.js";const Ze={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
