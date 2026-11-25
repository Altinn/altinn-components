var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-Df5nkPs8.js";import{u as j,g as z}from"./accountDataFetchers-BapHSoUj.js";import{a as C}from"./inboxMenu-DG66RFS1.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-BAWJKgIQ.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-CTPgBLff.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-W_nFibUK.js";import{u as U}from"./useLayout-DcMH42AZ.js";import{a as D}from"./useLocale-DHkbaZMt.js";import{F as E}from"./Flex-CYtO0dFj.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-CZKmsf4c.js";import"./name-Dr5DH52l.js";import"./HeartFill-DT4iXLuo.js";import"./InboxFill-BWNa2-zj.js";import"./Plus-BaDdjZ6L.js";import"./PersonGroup--rYaGh6g.js";import"./Bookmark-DD9Ln-TJ.js";import"./Archive-BEIKmTLh.js";import"./Trash-_1KE3-4v.js";import"./InformationSquare-CXwkU926.js";import"./localeSwitcher-ChhKg0Ck.js";import"./MenuGrid-jjE0xEq3.js";import"./MagnifyingGlass-3vGCvjJD.js";import"./Buildings2-Byf-KbZl.js";import"./Bell-CssGG3Qs.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-BctJCkx5.js";import"./CookieBanner-DBfwuf8y.js";import"./Heading-CPiHedua.js";import"./useHighlightedText-BM0MIdsX.js";import"./Typography-W78b6WhV.js";import"./Link-CjVBNz8b.js";import"./Banner-BHR8TN-K.js";import"./GlobalHeader-TYmVKmYX.js";import"./GlobalAccountButton-CP5a2BWr.js";import"./Avatar-CUeqTW6a.js";import"./ChevronDown-DdFcAhZa.js";import"./Enter-n45wvjgT.js";import"./GlobalMenuButton-Dpi4a_VH.js";import"./MenuHamburger-BHNimgxZ.js";import"./Badge-m24uQYgz.js";import"./Tooltip-KOhXDwFj.js";import"./ChevronUp-Bz4Vcv4a.js";import"./Dropdown-DRbHVqgW.js";import"./AccountSelector--eNdOJ7G.js";import"./SearchField-C0Yxe_69.js";import"./MenuListItem-C4bbk3e4.js";import"./MenuListDivider-BMCtCld-.js";import"./MenuItem-9AmdLb1n.js";import"./CheckboxUncheckedIcon-DFwabWeH.js";import"./RadioUncheckedIcon-CNGez86b.js";import"./ItemMedia-B1kmhXWg.js";import"./AvatarGroup-CtyhIC1k.js";import"./ItemLabel-DuyLbrJx.js";import"./ItemControls-Bd_Lnueh.js";import"./ChevronRight-DJP358BJ.js";import"./FieldBase-C4nTzDS1.js";import"./Field-DfhUv83u.js";import"./Label-D4wdB9xq.js";import"./Input-B9TaRlMe.js";import"./useMenu-gk-Zv7NC.js";import"./Switch-BKc4sxE1.js";import"./AccountMenu-BF2GwXJ0.js";import"./GlobalMenu-BQTKpuvH.js";import"./Checkmark-DZ-Lmkux.js";import"./ArrowUndo-BBF4w0in.js";import"./Globe-CJX2uVTf.js";import"./BreadcrumbsLink-C2L4Ui-h.js";import"./ArrowRight-DrBNAp4X.js";import"./Footer-BOc2nD-C.js";import"./useAccountMenu-wWVmh8ME.js";const no={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
selector behaves alongside the header, sidebar and global menu. The same
cases are available as standalone-component stories under Layout/AccountSelector.`}}},args:{theme:"subtle",skipLink:_,header:I,footer:M,sidebar:{menu:C},children:t.jsxs(E,{align:"center",justify:"center",style:{border:"1px dashed",width:"100%",height:"100%",gap:5},children:["Content",t.jsx("a",{href:"https://altinn.no",children:"with a focusable item"})]}),color:"company",accountSelectionAsMain:void 0},argTypes:{color:{control:"select",options:["company","neutral","person"]},accountSelectionAsMain:{control:"select",options:[!0,!1,void 0]}}},p=o(({args:e,parties:s})=>{const a=U(e),m=D({accountId:"diaspora"}),g=R(s);return t.jsx(y,{languageCode:"nb",children:t.jsx(S,{...e,...a,header:{...a.header,accountSelector:g,globalMenu:m},children:e.children})})},"AccountSelectorDemo"),n=o(e=>{const s=U(e),a=D({accountId:"diaspora"}),[m,g]=A.useState([]),[b,v]=A.useState(!1),[L,x]=A.useState(f),T=z(),F=j({partyListDTO:T,favoriteAccountUuids:m,onToggleFavorite:o(r=>{g(h=>h.includes(r)?h.filter(P=>P!==r):[...h,r])},"onToggleFavorite"),selfAccountUuid:f,currentAccountUuid:L,onSelectAccount:o(r=>{x(r)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:b,onShowDeletedUnitsChange:o(r=>{v(r)},"onShowDeletedUnitsChange")});return t.jsx(y,{languageCode:"nb",children:t.jsx(S,{...e,...s,header:{...s.header,accountSelector:F,globalMenu:a},children:e.children})})},"UsingUseAccountHook"),c=o(e=>t.jsx(p,{args:e,parties:l(3)}),"ThreeAccounts"),i=o(e=>t.jsx(p,{args:e,parties:l(4,1)}),"FourAccountsOneDeleted"),u=o(e=>t.jsx(p,{args:e,parties:l(6,3)}),"SixAccountsThreeDeleted"),d=o(e=>t.jsx(p,{args:e,parties:l(10)}),"TenAccountsNoneDeleted"),co=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildAuthorizedParties(3)} />",...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildAuthorizedParties(4, 1)} />",...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildAuthorizedParties(6, 3)} />",...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildAuthorizedParties(10)} />",...d.parameters?.docs?.source}}};export{i as FourAccountsOneDeleted,u as SixAccountsThreeDeleted,d as TenAccountsNoneDeleted,c as ThreeAccounts,n as UsingUseAccountHook,co as __namedExportsOrder,no as default};
