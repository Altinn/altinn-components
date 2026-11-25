var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-B3JK86DP.js";import{u as j,g as z}from"./accountDataFetchers-BMFjKo4N.js";import{a as C}from"./inboxMenu-BetaJs6I.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-DKY8cYu5.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-CIgk6UxX.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-CpGtS8s6.js";import{u as U}from"./useLayout-DgZpZST_.js";import{a as D}from"./useLocale-U5LT0tDJ.js";import{F as E}from"./Flex-DTtFl6cz.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-CV7gQySW.js";import"./name-Dr5DH52l.js";import"./HeartFill-BCuk1aAg.js";import"./InboxFill-ijG3Dsww.js";import"./Plus-UzcieS8Z.js";import"./PersonCircle-CbyNMypj.js";import"./Bookmark-BNWrj_cZ.js";import"./Archive-DGM3iS45.js";import"./Trash-XyOTEtSX.js";import"./InformationSquare-DD61y5yY.js";import"./globalMenu-ZlvOBH04.js";import"./Buildings2-bc0yLADC.js";import"./MenuGrid-DKi9-mwC.js";import"./MagnifyingGlass-Dar3Cjqj.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-RCbbMY4N.js";import"./CookieBanner-DeF8tbcP.js";import"./Heading-DhZTTpsP.js";import"./useHighlightedText-DIT5s5Wk.js";import"./Typography-AZ3lf-vT.js";import"./Link-nyBdqDjQ.js";import"./Banner-EMpRl99Y.js";import"./GlobalHeader-B4i6zyAh.js";import"./GlobalAccountButton-CWuo16M7.js";import"./Avatar-C5zwgekh.js";import"./ChevronDown-eXgBXwsS.js";import"./Enter-Bmsepcvu.js";import"./GlobalMenuButton-DlkSCuXD.js";import"./MenuHamburger-buk28FFl.js";import"./Badge-CHkrsaqO.js";import"./Tooltip-5MJkmhaO.js";import"./ChevronUp-2E8wLm1d.js";import"./Dropdown-D-XZVyts.js";import"./AccountSelector-B9RDvL4R.js";import"./SearchField-CYbBjrsH.js";import"./MenuListItem-Dv-zfi5J.js";import"./MenuListDivider-JnPQTBAl.js";import"./MenuItem-DcugXxJu.js";import"./CheckboxUncheckedIcon-DWGQqmR1.js";import"./RadioUncheckedIcon-BENOQjAf.js";import"./ItemMedia-w7Ibrgnv.js";import"./AvatarGroup-CljQ4hw7.js";import"./ItemLabel-UJIDw8s4.js";import"./ItemControls-EPopScKo.js";import"./ChevronRight-CXXN68ww.js";import"./FieldBase-BOLpoc-t.js";import"./Field-4Patn0Bt.js";import"./Label-0jV2FogB.js";import"./Input-Dn912l6M.js";import"./useMenu-RTLBsPgV.js";import"./Switch-CIsn3VnQ.js";import"./AccountMenu-DHPdtaaD.js";import"./GlobalMenu-DNbtyV0e.js";import"./Checkmark-BlaG2503.js";import"./ArrowUndo-akLfJpcJ.js";import"./Globe-CITtRZvC.js";import"./BreadcrumbsLink-CVLW5LEg.js";import"./ArrowRight-DDv59QSS.js";import"./Footer-SU54PDkp.js";import"./useAccountMenu-B0MPCcV8.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
selector behaves alongside the header, sidebar and global menu. The same
cases are available as standalone-component stories under Layout/AccountSelector.`}}},args:{theme:"subtle",skipLink:_,header:I,footer:M,sidebar:{menu:C},children:t.jsxs(E,{align:"center",justify:"center",style:{border:"1px dashed",width:"100%",height:"100%",gap:5},children:["Content",t.jsx("a",{href:"https://altinn.no",children:"with a focusable item"})]}),color:"company",accountSelectionAsMain:void 0},argTypes:{color:{control:"select",options:["company","neutral","person"]},accountSelectionAsMain:{control:"select",options:[!0,!1,void 0]}}},p=o(({args:e,parties:s})=>{const a=U(e),m=D({accountId:"diaspora"}),g=R(s);return t.jsx(y,{languageCode:"nb",children:t.jsx(S,{...e,...a,header:{...a.header,accountSelector:g,globalMenu:m},children:e.children})})},"AccountSelectorDemo"),n=o(e=>{const s=U(e),a=D({accountId:"diaspora"}),[m,g]=A.useState([]),[b,v]=A.useState(!1),[L,x]=A.useState(f),T=z(),F=j({partyListDTO:T,favoriteAccountUuids:m,onToggleFavorite:o(r=>{g(h=>h.includes(r)?h.filter(P=>P!==r):[...h,r])},"onToggleFavorite"),selfAccountUuid:f,currentAccountUuid:L,onSelectAccount:o(r=>{x(r)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:b,onShowDeletedUnitsChange:o(r=>{v(r)},"onShowDeletedUnitsChange")});return t.jsx(y,{languageCode:"nb",children:t.jsx(S,{...e,...s,header:{...s.header,accountSelector:F,globalMenu:a},children:e.children})})},"UsingUseAccountHook"),c=o(e=>t.jsx(p,{args:e,parties:l(3)}),"ThreeAccounts"),i=o(e=>t.jsx(p,{args:e,parties:l(4,1)}),"FourAccountsOneDeleted"),u=o(e=>t.jsx(p,{args:e,parties:l(6,3)}),"SixAccountsThreeDeleted"),d=o(e=>t.jsx(p,{args:e,parties:l(10)}),"TenAccountsNoneDeleted"),no=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });

  // Use the useAccountSelector hook to get account menu and loading state
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(false); // Get actual value from user profile
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(SELF_PARTY_UUID);
  const authorizedParties = getAuthorizedPartiesData(); // Fetch your authorized parties data from external source
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids(prev => prev.includes(uuid) ? prev.filter(id => id !== uuid) : [...prev, uuid]);
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid: SELF_PARTY_UUID,
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildAuthorizedParties(3)} />",...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildAuthorizedParties(4, 1)} />",...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildAuthorizedParties(6, 3)} />",...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildAuthorizedParties(10)} />",...d.parameters?.docs?.source}}};export{i as FourAccountsOneDeleted,u as SixAccountsThreeDeleted,d as TenAccountsNoneDeleted,c as ThreeAccounts,n as UsingUseAccountHook,no as __namedExportsOrder,ao as default};
