var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-CZm9Z2L_.js";import{u as j,g as z}from"./accountDataFetchers-DhRDzeyR.js";import{a as C}from"./inboxMenu-DaxDIycg.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-uFVA6_mv.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-CvCO9vht.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-DB9_u68Y.js";import{u as U}from"./useLayout-DYUXqeS5.js";import{a as D}from"./useLocale-lD8VxMFm.js";import{F as E}from"./Flex-piEowcmm.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-IAQovNa1.js";import"./name-Dr5DH52l.js";import"./HeartFill-DoCB_GBg.js";import"./InboxFill-BUC9Wdwi.js";import"./Plus-B_1tuTHV.js";import"./PersonGroup-B8m6JoNP.js";import"./Bookmark-DKHIVL-x.js";import"./Archive-BdlwK_O4.js";import"./Trash-D-r-J8J3.js";import"./InformationSquare-C62nR7w8.js";import"./localeSwitcher-CHBrcsab.js";import"./MenuGrid-lFBl4Ujw.js";import"./MagnifyingGlass-DwPErScE.js";import"./Buildings2-BTINRXJL.js";import"./Bell-DUB8E5rY.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-Ccg6Z0HW.js";import"./CookieBanner-CJtaCpSr.js";import"./Heading-CGvkj5VV.js";import"./useHighlightedText-0BBntNc4.js";import"./Typography-99BUGcV3.js";import"./Link-C11OOuTG.js";import"./Banner-DSEj4-yB.js";import"./GlobalHeader-BfW7ctuA.js";import"./GlobalAccountButton-B5kGcy7l.js";import"./Avatar-BfR_UP2W.js";import"./ChevronDown-Bb4C_BOJ.js";import"./Enter-Bs0dFK5F.js";import"./GlobalMenuButton-PWA8yxnN.js";import"./MenuHamburger-DLVH7hi6.js";import"./Badge-DcBwCaoO.js";import"./Tooltip-CnehfAFo.js";import"./ChevronUp-CIHpYQBC.js";import"./Dropdown-CjN8UIhd.js";import"./AccountSelector-KuPoNuS1.js";import"./SearchField-Cj8KK4lS.js";import"./MenuListItem-BwtayZGz.js";import"./MenuListDivider-CEL60lz2.js";import"./MenuItem-BBEZ09Ze.js";import"./CheckboxUncheckedIcon-B2FVZ7uO.js";import"./RadioUncheckedIcon-BajGCIeL.js";import"./ItemMedia-CpjA7nnT.js";import"./AvatarGroup-z1q2Yw0e.js";import"./ItemLabel-B3mLAUUV.js";import"./ItemControls-1WPti-Pt.js";import"./ChevronRight-MmDri0bt.js";import"./FieldBase-BiQdP4ez.js";import"./Field-5TCcBbbM.js";import"./Label-BT4-swg_.js";import"./Input-BcwXpX3S.js";import"./useMenu-czaSJY_k.js";import"./Switch-Cf-4wIba.js";import"./AccountMenu-Xa7DSnYy.js";import"./GlobalMenu-KE6BDCkE.js";import"./Checkmark-CAMmZDSe.js";import"./ArrowUndo-Hp57fThJ.js";import"./Globe-CpZCrs52.js";import"./BreadcrumbsLink-BAkwvg6x.js";import"./ArrowRight-Bp4cspyp.js";import"./Footer-D97rfyOA.js";import"./useAccountMenu-DC0KMFHI.js";const no={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
