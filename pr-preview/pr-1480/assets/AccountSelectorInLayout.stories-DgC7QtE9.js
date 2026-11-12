var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-CqoHfDH7.js";import{u as j,g as z}from"./accountDataFetchers-ChxvS1cP.js";import{a as C}from"./inboxMenu-Bx8kL7_l.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-BZI1U5Xj.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-CSUzQI7d.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-Dl93-mxD.js";import{u as U}from"./useLayout-1O80DLaO.js";import{a as D}from"./useLocale-8rWX-jAY.js";import{F as E}from"./Flex-zJBPm08F.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-DOYNI_br.js";import"./name-Dr5DH52l.js";import"./HeartFill-B5r3HVdm.js";import"./InboxFill-CbXG-sfC.js";import"./Plus-DQZnEDJR.js";import"./PersonCircle-JGJi10OX.js";import"./Bookmark-BOLbbqTe.js";import"./Archive-BpmgVQNb.js";import"./Trash-DDnja0xf.js";import"./InformationSquare-B2hWOsOH.js";import"./globalMenu-C7MS5dOU.js";import"./Buildings2-jiqwiY34.js";import"./MenuGrid-CTbcWMRg.js";import"./MagnifyingGlass-BfkFvkOD.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-Ds2RcVLC.js";import"./CookieBanner-CFMBRXMy.js";import"./Heading-CDVcG6kV.js";import"./useHighlightedText-CSyjuktp.js";import"./Typography-rh9OwAWr.js";import"./Link-DR6nrsxT.js";import"./Banner-DQu6A5-G.js";import"./GlobalHeader-DWRMPzkc.js";import"./GlobalAccountButton-BvEMjebp.js";import"./Avatar-Co74uJ_O.js";import"./ChevronDown-CPg5ddv-.js";import"./Enter-B9MAPnXr.js";import"./GlobalMenuButton-DiyANMBE.js";import"./MenuHamburger-DSLGNBpT.js";import"./Badge-DFDtKU_w.js";import"./Tooltip-D8wWP0Tl.js";import"./ChevronUp-BraeWy4W.js";import"./Dropdown-BxvitPqI.js";import"./AccountSelector-BvBz0nl7.js";import"./SearchField-D-gn40zc.js";import"./MenuListItem-CqFpgSR1.js";import"./MenuListDivider-BNYPxbgd.js";import"./MenuItem-C8OuBr6l.js";import"./CheckboxUncheckedIcon-gMScnkcn.js";import"./RadioUncheckedIcon-BxdAbBT7.js";import"./ItemMedia-Sf1LoSEA.js";import"./AvatarGroup-DYss91lm.js";import"./ItemLabel-Bv-toCFX.js";import"./ItemControls-BKR8KplG.js";import"./ChevronRight-jzUrV1wz.js";import"./FieldBase-B4VpsYUB.js";import"./Field-CmdZ93FX.js";import"./Label-Cw8gPh7D.js";import"./Input-Dq2UXB3O.js";import"./useMenu-DC909dob.js";import"./Switch-C1zqeT7L.js";import"./AccountMenu-Fh_lK1IK.js";import"./GlobalMenu-CxNL_K9P.js";import"./Checkmark-6oHZmwOe.js";import"./ArrowUndo-CAunjfEO.js";import"./Globe-C2Y4iZjS.js";import"./BreadcrumbsLink-UdHkGk6j.js";import"./ArrowRight-B2OtfF5b.js";import"./Footer-BIpaMByz.js";import"./useAccountMenu-C9Px9FrJ.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
