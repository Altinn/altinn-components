var j=Object.defineProperty;var o=(e,r)=>j(e,"name",{value:r,configurable:!0});import{a7 as s,aa as i,x}from"./iframe-C320xpwq.js";import{u as F,g as z}from"./accountDataFetchers-Ccjh6AA-.js";import{a as I}from"./inboxMenu-CV36kP8T.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as O}from"./header-BheZ3kVF.js";import{s as E}from"./skipLink-a-xnxnVi.js";import{L as w}from"./Layout-B8s1Yicf.js";import{u as T}from"./useLayout-Bb0udb__.js";import{a as P}from"./useLocale-BRtpZD7d.js";import{F as R}from"./Flex-vd8VAqWN.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-vnwmm91F.js";import"./name-Dr5DH52l.js";import"./HeartFill-BAt_nvyH.js";import"./InboxFill-DZB_H27q.js";import"./Plus-ZWKQtzTH.js";import"./PersonCircle-DqA3LwVg.js";import"./Bookmark-Bz47rNmZ.js";import"./Archive-Cbch5ryT.js";import"./Trash-CVaRXKAa.js";import"./InformationSquare-BVSTZ5OZ.js";import"./globalMenu-gTRXNQEp.js";import"./Buildings2-Cki0ndPV.js";import"./MenuGrid-3_OOeL1M.js";import"./MagnifyingGlass-BNq1j2pw.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-jnbR-ln8.js";import"./CookieBanner-BwWd3p2Z.js";import"./Heading-C_k6PbIN.js";import"./useHighlightedText-DSoWCMjQ.js";import"./Typography-DeOYXGTy.js";import"./Link-CK47N41p.js";import"./Banner-BLCkBNXA.js";import"./GlobalHeader-LOVrAtVB.js";import"./GlobalAccountButton-HRF24Cy_.js";import"./Avatar-DiTaWPNi.js";import"./ChevronDown-y1vJePuN.js";import"./Enter-CPkKyFVm.js";import"./GlobalMenuButton-CfdWCzfD.js";import"./MenuHamburger-CkyOXOBY.js";import"./Badge-CKNKkFIN.js";import"./Tooltip-CJNSgf5y.js";import"./ChevronUp-DyDxvCOy.js";import"./Dropdown-DOQP5U0B.js";import"./AccountSelector-CbXpO1vP.js";import"./SearchField-BvARDiuT.js";import"./MenuListItem-BqKoFA4P.js";import"./MenuListHeading-BpIk0QC_.js";import"./MenuItem-RBRvsnc4.js";import"./ItemMedia-DXXjb0Ql.js";import"./AvatarGroup-C3ZQ77zA.js";import"./Checkmark-DXZzi-ZC.js";import"./ItemLabel-DED-sXIi.js";import"./ItemControls-PDJ9i9Cv.js";import"./ChevronRight-0obYraG7.js";import"./FieldBase-CS4MYGp7.js";import"./Field-WScL1nVe.js";import"./Label-CArvchbl.js";import"./Input-Butkrn3v.js";import"./useMenu-CNq5BiUb.js";import"./MenuListDivider-DFJO6x9b.js";import"./Switch-CWssEnQq.js";import"./AccountMenu-8oVSJmzt.js";import"./GlobalMenu-Ln8xFO4g.js";import"./ArrowUndo-DyZTn8wI.js";import"./Globe-CTKberuz.js";import"./BreadcrumbsLink-DEbZBh4a.js";import"./ArrowRight-B2lyLnMs.js";import"./Footer-Bfq4ZQcs.js";import"./useAccountMenu-BfSKMtsZ.js";const st={title:"Layout/AccountSelector/In Layout",component:w,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
selector behaves alongside the header, sidebar and global menu. The same
cases are available as standalone-component stories under Layout/AccountSelector.`}}},args:{theme:"subtle",skipLink:E,header:O,footer:M,sidebar:{menu:I},children:s.jsxs(R,{align:"center",justify:"center",style:{border:"1px dashed",width:"100%",height:"100%",gap:5},children:["Content",s.jsx("a",{href:"https://altinn.no",children:"with a focusable item"})]}),color:"company",accountSelectionAsMain:void 0},argTypes:{color:{control:"select",options:["company","neutral","person"]},accountSelectionAsMain:{control:"select",options:[!0,!1,void 0]}}},u="167536b5-f8ed-4c5a-8f48-0279507e53ae",k={partyUuid:u,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},N=o((e,r)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:r,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),"makeOrgParty"),A=o((e,r=0)=>{const c=Array.from({length:e-1},(l,n)=>N(n+1,n<r));return[k,...c]},"buildParties"),S=o(({args:e,parties:r})=>{const c=T(e),l=P({accountId:"diaspora"}),[n,y]=i.useState([]),[f,U]=i.useState(!0),[D,b]=i.useState(u),L=F({partyListDTO:r,favoriteAccountUuids:n,onToggleFavorite:o(t=>{y(a=>a.includes(t)?a.filter(v=>v!==t):[...a,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:D,onSelectAccount:o(t=>{b(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:f,onShowDeletedUnitsChange:o(t=>{U(t)},"onShowDeletedUnitsChange")});return s.jsx(x,{languageCode:"nb",children:s.jsx(w,{...e,...c,header:{...c.header,accountSelector:L,globalMenu:l},children:e.children})})},"AccountSelectorDemo"),d=o(e=>{const r=T(e),c=P({accountId:"diaspora"}),[l,n]=i.useState([]),[y,f]=i.useState(!1),[U,D]=i.useState(u),b=z(),L=F({partyListDTO:b,favoriteAccountUuids:l,onToggleFavorite:o(t=>{n(a=>a.includes(t)?a.filter(v=>v!==t):[...a,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:U,onSelectAccount:o(t=>{D(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:y,onShowDeletedUnitsChange:o(t=>{f(t)},"onShowDeletedUnitsChange")});return s.jsx(x,{languageCode:"nb",children:s.jsx(w,{...e,...r,header:{...r.header,accountSelector:L,globalMenu:c},children:e.children})})},"UsingUseAccountHook"),p=o(e=>s.jsx(S,{args:e,parties:A(3)}),"ThreeAccounts"),m=o(e=>s.jsx(S,{args:e,parties:A(4,1)}),"FourAccountsOneDeleted"),g=o(e=>s.jsx(S,{args:e,parties:A(6,3)}),"SixAccountsThreeDeleted"),h=o(e=>s.jsx(S,{args:e,parties:A(10)}),"TenAccountsNoneDeleted");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...h.parameters?.docs?.source}}};const at=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];export{m as FourAccountsOneDeleted,g as SixAccountsThreeDeleted,h as TenAccountsNoneDeleted,p as ThreeAccounts,d as UsingUseAccountHook,at as __namedExportsOrder,st as default};
