import{a7 as o,aa as n,x as F}from"./iframe-CId_qj2z.js";import{u as w,g as C}from"./accountDataFetchers-Cz1PLx7x.js";import{a as O}from"./inboxMenu-BZBi2RwO.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-CM2Q6xKj.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-BCfIVaUx.js";import{u as x}from"./useLayout-BjyTtTOW.js";import{a as T}from"./useLocale-BQuW1tnY.js";import{F as E}from"./Flex-CPV4Eexm.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-VkDY77Uv.js";import"./name-DC2ocV39.js";import"./HeartFill-BeCjgmIE.js";import"./InboxFill-BoT5g8PP.js";import"./Plus-D70awSlJ.js";import"./PersonCircle-DVfffIGi.js";import"./Bookmark-QmKJnEqr.js";import"./Archive-CCdP7xw0.js";import"./Trash-CdB6ueTj.js";import"./InformationSquare-DbymG94h.js";import"./globalMenu-BYd_fKFw.js";import"./Buildings2-D30IHXtp.js";import"./MenuGrid-vT6jwxB2.js";import"./MagnifyingGlass-C7MrVWIP.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-BMQYzgWt.js";import"./CookieBanner-SdGvx2gZ.js";import"./Heading-sNyVbkrk.js";import"./useHighlightedText-B-8pDdyK.js";import"./Typography-DeDqtkyf.js";import"./Banner-B0-Pgj7d.js";import"./GlobalHeader-CSY_h-G4.js";import"./GlobalAccountButton-Bh66e_Bq.js";import"./Avatar-qewy70Fx.js";import"./ChevronDown-D4kQ2fb9.js";import"./Enter-B6AWK89G.js";import"./GlobalMenuButton-CjxzpDAE.js";import"./MenuHamburger-Dw1f-W1K.js";import"./Badge-DHd56Np2.js";import"./Tooltip-B4yZ0kY7.js";import"./ChevronUp-7fsujl90.js";import"./Dropdown-C5rYnJno.js";import"./AccountSelector-ifVYb22t.js";import"./SearchField-CLqhaeqA.js";import"./FieldBase-BhNxXsJd.js";import"./Field-C9CrCSTd.js";import"./Label-Bri1HqH-.js";import"./Input-qq9zM3Qu.js";import"./useMenu-CkWSpni-.js";import"./MenuListItem-Bza4K3Vz.js";import"./MenuListDivider-CndLXr4L.js";import"./MenuListHeading-Dgk_gmcd.js";import"./MenuItem-D69ypsbK.js";import"./ItemMedia-DATZMrih.js";import"./AvatarGroup-DDqOMRUz.js";import"./Checkmark-CV_uUhR-.js";import"./ItemLabel-ezryvk3W.js";import"./ItemControls-s3x5r9Y_.js";import"./ChevronRight-CD2F4Mmq.js";import"./Switch-Jy7pPJYw.js";import"./AccountMenu-CwINr1xx.js";import"./GlobalMenu-tCZNMjum.js";import"./ArrowUndo-BYpV408O.js";import"./Globe-Ciny8H7f.js";import"./BreadcrumbsLink-Wp6NhKEF.js";import"./ArrowRight-Cltu3VqV.js";import"./Footer-CYamDtWe.js";import"./useAccountMenu-BowvKVP-.js";const et={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
