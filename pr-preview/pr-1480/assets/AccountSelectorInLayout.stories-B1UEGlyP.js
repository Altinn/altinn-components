var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-CrglqwQn.js";import{u as j,g as z}from"./accountDataFetchers-5WQLewzD.js";import{a as C}from"./inboxMenu-CliYnW1T.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-CZewJz0V.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-BtmXYADp.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-Bp1Q9pUP.js";import{u as U}from"./useLayout-BcexFKpd.js";import{a as D}from"./useLocale-C45L4w_z.js";import{F as E}from"./Flex-DJ9jSUVh.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BFXmchO7.js";import"./name-Dr5DH52l.js";import"./HeartFill-CKM7yr0T.js";import"./InboxFill-5KCnwHYz.js";import"./Plus-BsVWtc_l.js";import"./PersonCircle-2tYZc417.js";import"./Bookmark-B71Tg_A4.js";import"./Archive-QnejR0rZ.js";import"./Trash-D8Yx43MO.js";import"./InformationSquare-BOQji3ZT.js";import"./globalMenu-BxqPVjRD.js";import"./Buildings2-uuckHAgd.js";import"./MenuGrid-4KLfWHTb.js";import"./MagnifyingGlass-C-uYCvZ7.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-dW7OoA73.js";import"./CookieBanner-DuM_xTLh.js";import"./Heading-Cue2sNHi.js";import"./useHighlightedText-BwDaK6ea.js";import"./Typography-BczTYRHT.js";import"./Link-Chsrp-ow.js";import"./Banner-CO4ulxs9.js";import"./GlobalHeader-IkXOnXah.js";import"./GlobalAccountButton-DM1YrGJI.js";import"./Avatar-CdjH483A.js";import"./ChevronDown-qCwX9ScZ.js";import"./Enter-zEk9kRFx.js";import"./GlobalMenuButton-Gdg78j4Y.js";import"./MenuHamburger-Co7zqsTV.js";import"./Badge-DecVHfU_.js";import"./Tooltip-C3l4V9U1.js";import"./ChevronUp-fcfSgUs-.js";import"./Dropdown-Bs8XHg5O.js";import"./AccountSelector-BNOyXtGS.js";import"./SearchField-C2qhyCtD.js";import"./MenuListItem-BrJu3vrY.js";import"./MenuListDivider-BYAuSbm9.js";import"./MenuItem-BOpoNs7B.js";import"./CheckboxUncheckedIcon-CXEG0Svy.js";import"./RadioUncheckedIcon-BvYRqxVQ.js";import"./ItemMedia-CKHqoxmK.js";import"./AvatarGroup-BVlT7mXX.js";import"./ItemLabel-C8AtzUlo.js";import"./ItemControls-BCjOivMY.js";import"./ChevronRight-DGfPuTVb.js";import"./FieldBase-B81pLsMF.js";import"./Field-2w0B3_JZ.js";import"./Label-DGjLhU1K.js";import"./Input-CFGd0v58.js";import"./useMenu-8J-CXIB0.js";import"./Switch-CWx3MDUl.js";import"./AccountMenu-BL-n-r0X.js";import"./GlobalMenu-DWjDb7fh.js";import"./Checkmark-D7BkIwSo.js";import"./ArrowUndo-B915tdkI.js";import"./Globe-KdSZmZPM.js";import"./BreadcrumbsLink-Bbwo0LYF.js";import"./ArrowRight-CwRhQGdr.js";import"./Footer-D5l3ArAx.js";import"./useAccountMenu-eifD--Pm.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
