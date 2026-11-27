var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-qf9-WDF6.js";import{u as j,g as z}from"./accountDataFetchers-BYiEkUmL.js";import{a as C}from"./inboxMenu-CClCgVvN.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-B65mkvEc.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-CSnqG8x3.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-D_k1xsNs.js";import{u as U}from"./useLayout-CAjur4Yx.js";import{a as D}from"./useLocale-DbVlmmET.js";import{F as E}from"./Flex-CKfD6hy-.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BRT8QPRE.js";import"./name-Dr5DH52l.js";import"./HeartFill-CdPXTECY.js";import"./InboxFill-BH39gt5n.js";import"./Plus-BtfN9nMF.js";import"./PersonCircle-CwV4buWC.js";import"./Bookmark-BclP6BG9.js";import"./Archive-u7sh-Eny.js";import"./Trash-BZaaSweo.js";import"./InformationSquare-Diuvkxkj.js";import"./globalMenu-vY7cibjq.js";import"./Buildings2-BeNd78fo.js";import"./MenuGrid-CSQ0FslJ.js";import"./MagnifyingGlass-Cdozzsty.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-Bg14e_ii.js";import"./CookieBanner-CUQkNZM8.js";import"./Heading-BHDuq3TV.js";import"./useHighlightedText-CpVNHUyQ.js";import"./Typography-BcM5UJCL.js";import"./Link-CQZsL-OO.js";import"./Banner-DxeQHfsW.js";import"./GlobalHeader-CFG6zT8I.js";import"./GlobalAccountButton-BqeBlZWz.js";import"./Avatar--Y6TPEGR.js";import"./ChevronDown-DGrlTQ0v.js";import"./Enter-BpHTk3PW.js";import"./GlobalMenuButton-DbdbRywD.js";import"./MenuHamburger-BHbrSeUX.js";import"./Badge-DOvVfylv.js";import"./Tooltip-DFjSrT0M.js";import"./ChevronUp-eh4muoQm.js";import"./Dropdown-uPy0PMPK.js";import"./AccountSelector-BFArgWJU.js";import"./SearchField-_nVMBmov.js";import"./MenuListItem-DipxFI8g.js";import"./MenuListDivider-jbpIOTgw.js";import"./MenuItem-BwnUXeQs.js";import"./CheckboxUncheckedIcon-BFS8hvm2.js";import"./RadioUncheckedIcon-DwubkL11.js";import"./ItemMedia-Fak15njE.js";import"./AvatarGroup-DIzE-PAU.js";import"./ItemLabel-99ZX_KO1.js";import"./ItemControls-BmhBXfnl.js";import"./ChevronRight-NAoaHsS_.js";import"./FieldBase-D7ZJbpSW.js";import"./Field-gppFe246.js";import"./Label-CcdUHTDK.js";import"./Input-tPq75GZ4.js";import"./useMenu-DZRK4ukY.js";import"./Switch--rdxT6CY.js";import"./AccountMenu-DNB1BImf.js";import"./GlobalMenu-CMrJlHCd.js";import"./Checkmark-B3HuJqdN.js";import"./ArrowUndo-DrB_qkGV.js";import"./Globe-DO9_UsMD.js";import"./BreadcrumbsLink-DKa8_fUt.js";import"./ArrowRight-e4eyEntm.js";import"./Footer-TeWfJg9L.js";import"./useAccountMenu-GfsylDPs.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
