var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-Cf4UALw8.js";import{u as j,g as z}from"./accountDataFetchers-K8rCuzpT.js";import{a as C}from"./inboxMenu-C291m3-d.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-cyCh-hE6.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-2Z_4kzXe.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-BLTOZGUY.js";import{u as U}from"./useLayout-JlqS5Fc2.js";import{a as D}from"./useLocale-BPjin0qe.js";import{F as E}from"./Flex-CiSMsFR7.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-B8RqtL_d.js";import"./name-Dr5DH52l.js";import"./HeartFill-D9h2LAGd.js";import"./InboxFill-DaA5y8zL.js";import"./Plus-sEq00D2Y.js";import"./PersonCircle-BinjxBJZ.js";import"./Bookmark-C10mug1X.js";import"./Archive-DbxYD9lF.js";import"./Trash-B_p5hHVd.js";import"./InformationSquare-uRwoVJB-.js";import"./globalMenu-BIJOliht.js";import"./Buildings2-C5pfq8or.js";import"./MenuGrid-Dn9gpcu9.js";import"./MagnifyingGlass-Ckn3gk3A.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-CgCDDMsC.js";import"./CookieBanner-BQBopbaZ.js";import"./Heading-B2LEqvTq.js";import"./useHighlightedText-BGOVKO4Q.js";import"./Typography-CsGx0b_o.js";import"./Link-ApESsW5M.js";import"./Banner-CE7cR7yb.js";import"./GlobalHeader-DtmiGd7W.js";import"./GlobalAccountButton-DxY6wyot.js";import"./Avatar-DPyI2gzd.js";import"./ChevronDown-B_UJ6uJ_.js";import"./Enter-KlBUq896.js";import"./GlobalMenuButton-W3knbd65.js";import"./MenuHamburger-DwSFJE3g.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./ChevronUp-BKdDwASh.js";import"./Dropdown-BbrYcScL.js";import"./AccountSelector-CSU8nWht.js";import"./SearchField-CpDf3EHS.js";import"./MenuListItem-btKh04Ui.js";import"./MenuListDivider-CFCegYqH.js";import"./MenuItem-CaK55ag2.js";import"./CheckboxUncheckedIcon-DFhHVdqs.js";import"./RadioUncheckedIcon-BM_T1ETq.js";import"./ItemMedia-BhGUpV92.js";import"./AvatarGroup-C1FgnCDS.js";import"./ItemLabel-C9vfNdbz.js";import"./ItemControls-C74k2R8j.js";import"./ChevronRight-DcM2grMN.js";import"./FieldBase-DSaLFDie.js";import"./Field-t2hlVRTC.js";import"./Label-COfT1-eu.js";import"./Input-OKh8JSaI.js";import"./useMenu-CfWidWjC.js";import"./Switch-DuCdX2cJ.js";import"./AccountMenu-Ba6_WV3b.js";import"./GlobalMenu-Y6Sa8-oh.js";import"./Checkmark-Dha_gRss.js";import"./ArrowUndo-ucfdJHsw.js";import"./Globe-C1KW9qlQ.js";import"./BreadcrumbsLink-zy9RVUNR.js";import"./ArrowRight-C3hJKAqP.js";import"./Footer-BL-GZqKp.js";import"./useAccountMenu-Df-Uf2IL.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
