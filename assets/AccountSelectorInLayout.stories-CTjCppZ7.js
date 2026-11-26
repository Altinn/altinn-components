var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-Dhr5kNpI.js";import{u as j,g as z}from"./accountDataFetchers-Dww_-rhr.js";import{a as C}from"./inboxMenu-YMfldJTG.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-DsG7eok5.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-b9_DASgO.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-BFoiPP9i.js";import{u as U}from"./useLayout-zxKW-DRf.js";import{a as D}from"./useLocale-DmgTjWPu.js";import{F as E}from"./Flex-CQB0dbJh.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-9sPcRqaI.js";import"./name-Dr5DH52l.js";import"./HeartFill-C2b-lyNp.js";import"./InboxFill-BQn04Vnh.js";import"./Plus-CJyVTS1m.js";import"./PersonCircle-D7PND_VY.js";import"./Bookmark-Dnx7CoLa.js";import"./Archive-CSWjZQYI.js";import"./Trash-DlyJC_yu.js";import"./InformationSquare-B4yRDNra.js";import"./globalMenu-YsQW083g.js";import"./Buildings2-Zdf-PMQF.js";import"./MenuGrid-Dtc87Yds.js";import"./MagnifyingGlass-qp743Sh-.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-D4aRwPBT.js";import"./CookieBanner-BYmyroC1.js";import"./Heading-DmbuxGS8.js";import"./useHighlightedText-D3bt4yNA.js";import"./Typography-CiPthQfi.js";import"./Link-BcpX_Jbu.js";import"./Banner-B75RCubj.js";import"./GlobalHeader-HRR1BEKf.js";import"./GlobalAccountButton-CA2fQ84T.js";import"./Avatar-DFghK3As.js";import"./ChevronDown-CRBE2Pft.js";import"./Enter-B8y0P7tB.js";import"./GlobalMenuButton-CnciQBA6.js";import"./MenuHamburger-CsHjEoZC.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./ChevronUp-CnX9Oj5-.js";import"./Dropdown-CYaHmHFx.js";import"./AccountSelector-Bgw129to.js";import"./SearchField-Daiwk--y.js";import"./MenuListItem-DSvu2y_O.js";import"./MenuListDivider-BDnQXOa-.js";import"./MenuItem-B7bCDHld.js";import"./CheckboxUncheckedIcon-CniL-5fW.js";import"./RadioUncheckedIcon-DgOCQagW.js";import"./ItemMedia-C0ReNhrI.js";import"./AvatarGroup-DUSzafHi.js";import"./ItemLabel-D7TXcLH5.js";import"./ItemControls-CiyO-qr-.js";import"./ChevronRight-BnrL2uT7.js";import"./FieldBase-C_75hFZi.js";import"./Field-BxmDkK6m.js";import"./Label-DR9BIR4K.js";import"./Input-jpu5auKu.js";import"./useMenu-BGMvW90K.js";import"./Switch-DrTa1vix.js";import"./AccountMenu-BrVN1SqG.js";import"./GlobalMenu-CrWIFlwZ.js";import"./Checkmark-Dq0lqnYy.js";import"./ArrowUndo-Cco96Qbs.js";import"./Globe-CB-uD3-X.js";import"./BreadcrumbsLink-D3ZvT99q.js";import"./ArrowRight-CNFtkaIJ.js";import"./Footer-y517Vrur.js";import"./useAccountMenu-BhDYNqzc.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
