var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-CXqMdlCC.js";import{u as j,g as z}from"./accountDataFetchers-Em8bEUYT.js";import{a as C}from"./inboxMenu-B8L7e4Oq.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-WRAFw5u1.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-B0Kmw8Wv.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-CnYF7mEz.js";import{u as U}from"./useLayout-CYidKplt.js";import{a as D}from"./useLocale-C6lwJHTf.js";import{F as E}from"./Flex-C0b8jFL9.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BnvVJKv_.js";import"./name-Dr5DH52l.js";import"./HeartFill-BM_ipkyj.js";import"./InboxFill-6IEAeIKt.js";import"./Plus-BUwnjirz.js";import"./PersonCircle-BhmCdgxO.js";import"./Bookmark-Dvtt7kIU.js";import"./Archive-DLDgEUbl.js";import"./Trash-BZMVy5so.js";import"./InformationSquare-ZHKJrQSE.js";import"./globalMenu-2K-k12nO.js";import"./Buildings2-BerC_M3Z.js";import"./MenuGrid-B1wVZlDZ.js";import"./MagnifyingGlass-C2E3OXTe.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-CbQhhDZZ.js";import"./CookieBanner-Dor9yVbW.js";import"./Heading-Bc_OkYLY.js";import"./useHighlightedText-DHwhs_hr.js";import"./Typography-B65oo-6B.js";import"./Link-CjI5sSKG.js";import"./Banner-DKJntqtX.js";import"./GlobalHeader-ByjAguUA.js";import"./GlobalAccountButton-W5vizdCb.js";import"./Avatar-DmiiS68f.js";import"./ChevronDown-BjOSGq_A.js";import"./Enter-DmDgRP0Q.js";import"./GlobalMenuButton-B9op-Ewu.js";import"./MenuHamburger-BUucDG4Z.js";import"./Badge-DLWRsvj2.js";import"./Tooltip-ra4jscVD.js";import"./ChevronUp-NZ-cp3Wt.js";import"./Dropdown-D-iF0FQf.js";import"./AccountSelector-ueRGc7ms.js";import"./SearchField-BQG9p1mb.js";import"./MenuListItem-upw9R9gQ.js";import"./MenuListDivider-CmJPINW2.js";import"./MenuItem-D2UkRxiZ.js";import"./CheckboxUncheckedIcon-DWMJmCdE.js";import"./RadioUncheckedIcon-DsZbsVcQ.js";import"./ItemMedia-CHMaO1_z.js";import"./AvatarGroup-Chz5d9SY.js";import"./ItemLabel-DvzzIYMd.js";import"./ItemControls-CAvLGz5J.js";import"./ChevronRight-DltnHqdC.js";import"./FieldBase-0KjilGfX.js";import"./Field-BA8wlTFM.js";import"./Label-D7XOgbuq.js";import"./Input-D8RpuIgN.js";import"./useMenu-CqtkU6S6.js";import"./Switch-DAhdVzvS.js";import"./AccountMenu-BTXikZ9S.js";import"./GlobalMenu-BWM2UK14.js";import"./Checkmark-CQaorHYz.js";import"./ArrowUndo-CO4CQkvC.js";import"./Globe-uwU59LH4.js";import"./BreadcrumbsLink-C3lWgJ2I.js";import"./ArrowRight-B7D23jat.js";import"./Footer-CzbjZOfK.js";import"./useAccountMenu-ZtCuB2vf.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
