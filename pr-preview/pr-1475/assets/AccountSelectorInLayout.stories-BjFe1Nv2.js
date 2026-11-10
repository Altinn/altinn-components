var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-CFooeFlc.js";import{u as j,g as z}from"./accountDataFetchers-Cz7i23xt.js";import{a as C}from"./inboxMenu-i03i7qEu.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-DWjctTLs.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-BlHJit78.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-Cxw17UII.js";import{u as U}from"./useLayout-D30LU4br.js";import{a as D}from"./useLocale-BBBFsIWT.js";import{F as E}from"./Flex-DvJJETpK.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-DMKYuN7Q.js";import"./name-Dr5DH52l.js";import"./HeartFill-DdHcHph9.js";import"./InboxFill-C_9JPAbS.js";import"./Plus-uOOnNtuS.js";import"./PersonCircle-dY6cP1lV.js";import"./Bookmark-Ddp9wjen.js";import"./Archive-Cn31xRbo.js";import"./Trash-RDp0u5kC.js";import"./InformationSquare-CkGSwppR.js";import"./globalMenu-V79Pn2VS.js";import"./Buildings2-BcXb6UsZ.js";import"./MenuGrid-2a9RgC_E.js";import"./MagnifyingGlass-BeyjX3_h.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-CvhSBmX4.js";import"./CookieBanner-gpoAWfQo.js";import"./Heading-BvwzGhlC.js";import"./useHighlightedText-CSeb_EVo.js";import"./Typography-DZMMTX6d.js";import"./Link-CAZN9a6X.js";import"./Banner-veWYbJJ0.js";import"./GlobalHeader-CAxn3FbR.js";import"./GlobalAccountButton-CxUertbH.js";import"./Avatar-BMLgJvdJ.js";import"./ChevronDown-DRjCt-FM.js";import"./Enter-Bl8n-sGa.js";import"./GlobalMenuButton-BefVXzoE.js";import"./MenuHamburger-BBOi02AU.js";import"./Badge-4L7pEK9S.js";import"./Tooltip-Dsu4-yLP.js";import"./ChevronUp-2AABqykr.js";import"./Dropdown-UxeuVY1V.js";import"./AccountSelector-B4QhyC5f.js";import"./SearchField-vc2j7DYW.js";import"./MenuListItem-lDH_nIX2.js";import"./MenuListDivider-DbxP2E3y.js";import"./MenuItem-Bf8xgsdL.js";import"./CheckboxUncheckedIcon-BUUPFL_h.js";import"./RadioUncheckedIcon-SM_w6gXN.js";import"./ItemMedia-BiITU9Jf.js";import"./AvatarGroup-O59IIMZ1.js";import"./ItemLabel-uOYlRqGI.js";import"./ItemControls-a2iPy1rh.js";import"./ChevronRight-Pp6aFK2W.js";import"./FieldBase--dF0uMSe.js";import"./Field-XgzC0Js-.js";import"./Label-BITGJPso.js";import"./Input-CijTBA3T.js";import"./useMenu-Bq9-gO9j.js";import"./Switch-XnFFT3OB.js";import"./AccountMenu-CyQLONBq.js";import"./GlobalMenu-D8aETKbm.js";import"./Checkmark-CL0UyCZk.js";import"./ArrowUndo-Bq7mvHQO.js";import"./Globe-ASfh3ELd.js";import"./BreadcrumbsLink-DQSRC3y-.js";import"./ArrowRight-CiUYzs3Y.js";import"./Footer-B1HwsH9k.js";import"./useAccountMenu-CHt8fAhr.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
