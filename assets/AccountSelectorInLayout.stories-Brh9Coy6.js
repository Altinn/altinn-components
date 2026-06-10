import{a7 as o,aa as n,x as F}from"./iframe-B8reGtNb.js";import{u as w,g as C}from"./accountDataFetchers-DXKf-wnX.js";import{a as O}from"./inboxMenu-BrycH81_.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-CT-kzGQY.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-BtIVNKSD.js";import{u as x}from"./useLayout-DyDpIziV.js";import{a as T}from"./useLocale-DuxjwPpw.js";import{F as E}from"./Flex-qoZntq9f.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-8-GHnyaN.js";import"./HeartFill-Cd3MetJy.js";import"./InboxFill-DZO1RCYN.js";import"./Plus-Ck-NVedy.js";import"./PersonCircle-8zq8UCe7.js";import"./Bookmark-BkYwOVnq.js";import"./Archive-DhWzN6pb.js";import"./Trash-BwJUxhUJ.js";import"./InformationSquare-t8wgbWET.js";import"./globalMenu-CAHdZk2u.js";import"./Buildings2-yXpbPS2f.js";import"./MenuGrid-DUOkUJ_e.js";import"./MagnifyingGlass-CBDfQb5g.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-DFS3DuOU.js";import"./Banner-r-U3Cb6i.js";import"./Heading-Cybus3jr.js";import"./useHighlightedText-ZBcygk0-.js";import"./Typography-Dxv9MSbD.js";import"./GlobalHeader-pkP8gSeA.js";import"./GlobalAccountButton-DuBGo6fg.js";import"./Avatar-DjLw-5ab.js";import"./ChevronDown-Cin8-QCk.js";import"./Enter-CLqIKE_3.js";import"./GlobalMenuButton-BiVkXz99.js";import"./MenuHamburger-CHdAjUqn.js";import"./Badge-DzttLmt8.js";import"./Tooltip-fMVkBgtC.js";import"./ChevronUp-B4Qw2TyU.js";import"./Dropdown-mf9EWUWK.js";import"./AccountSelector-B35oC7Oo.js";import"./SearchField-CW2nl4m_.js";import"./FieldBase-DDJWfLpA.js";import"./Field-BHSHIm9D.js";import"./Label-D9DJQymt.js";import"./Input-DOKzz0Tj.js";import"./useMenu-G7RJHCVr.js";import"./MenuListItem-DvV5RcWS.js";import"./MenuListHeading-BEkIHHSP.js";import"./MenuItem-b6Fzjl6t.js";import"./ItemMedia-B3mE-krC.js";import"./AvatarGroup-CBquJS0s.js";import"./Checkmark-7r8S-fkf.js";import"./ItemLabel-OlP1i4ZU.js";import"./ItemControls-CBTS8zxi.js";import"./ChevronRight-BRSkVVAW.js";import"./index-BuUpoUlL.js";import"./Switch-BkDsJFfA.js";import"./AccountMenu-CsigFq3b.js";import"./GlobalMenu-ClOo-T6M.js";import"./ArrowUndo-CqT7_P72.js";import"./Globe-DPkwBtVA.js";import"./BreadcrumbsLink-CBiRFfdZ.js";import"./ArrowRight-BiaOeh9q.js";import"./Footer-BDdV_XIi.js";import"./useAccountMenu-RI6BdrHE.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
