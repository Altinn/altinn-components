var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-DvHKorxQ.js";import{u as j,g as z}from"./accountDataFetchers-DBL4B57S.js";import{a as C}from"./inboxMenu-BlaQQ0ZY.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-53c7wphf.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-BGOJc8X0.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-B5FPK6H0.js";import{u as U}from"./useLayout-CLDfpz0r.js";import{a as D}from"./useLocale-B5jh-Ozh.js";import{F as E}from"./Flex-DGnnEuV7.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-D_CwdmZf.js";import"./name-Dr5DH52l.js";import"./HeartFill-DNqsa6JA.js";import"./InboxFill-BwfO79nt.js";import"./Plus-BlCIA3TM.js";import"./PersonCircle-C7aNQMvr.js";import"./Bookmark-Du-mldJF.js";import"./Archive-9iEfNGgD.js";import"./Trash-DVfbPaj0.js";import"./InformationSquare-dQI1I0JD.js";import"./globalMenu-Dw1qB3hK.js";import"./Buildings2-DChFgHfm.js";import"./MenuGrid-Dy4yWDeC.js";import"./MagnifyingGlass-BXEQkXVn.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-BsrasTA6.js";import"./CookieBanner-C89zACVF.js";import"./Heading-Cl1YAvvB.js";import"./useHighlightedText-BTXbLxcU.js";import"./Typography-CvxYC9sf.js";import"./Link-f4TZXGvV.js";import"./Banner-CHcz1tE6.js";import"./GlobalHeader-Bm1pjFSp.js";import"./GlobalAccountButton-Dvkyq19P.js";import"./Avatar-Cz88DWwK.js";import"./ChevronDown-CIQHUQdq.js";import"./Enter-CbVInwau.js";import"./GlobalMenuButton-BIiZsZYy.js";import"./MenuHamburger-DBDIkqls.js";import"./Badge-DzOSp-VL.js";import"./Tooltip-B5VcyW21.js";import"./ChevronUp-CNwAnotn.js";import"./Dropdown-CZm18rgm.js";import"./AccountSelector-CqvFZ-x3.js";import"./SearchField-BU96PyeS.js";import"./MenuListItem-sxF_Fdo2.js";import"./MenuListDivider-CVAdbPBV.js";import"./MenuItem-BKT_WeeP.js";import"./CheckboxUncheckedIcon-DfhKN-kl.js";import"./RadioUncheckedIcon-02hVvrUJ.js";import"./ItemMedia-D3TRsre4.js";import"./AvatarGroup-DG05vr_h.js";import"./ItemLabel-BPqR0X1V.js";import"./ItemControls--z7ByJD8.js";import"./ChevronRight-BUHnh-Yw.js";import"./FieldBase-BZwhXyPC.js";import"./Field-DZglScdH.js";import"./Label-bDy8LqNB.js";import"./Input-Bgd0BScM.js";import"./useMenu-DmIIMIa0.js";import"./Switch-DcMon32a.js";import"./AccountMenu-l_9YcMP5.js";import"./GlobalMenu-BKC0fVrL.js";import"./Checkmark-Cv0i3HMy.js";import"./ArrowUndo-q1AmrM8c.js";import"./Globe-BJ6hoLpR.js";import"./BreadcrumbsLink-BigUfgp2.js";import"./ArrowRight-WkZj4CZG.js";import"./Footer-Da4KN9d7.js";import"./useAccountMenu-C9yBDl5o.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
