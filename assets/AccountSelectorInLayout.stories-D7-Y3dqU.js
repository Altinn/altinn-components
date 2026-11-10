var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-CfESZwGq.js";import{u as j,g as z}from"./accountDataFetchers-BJKlDphc.js";import{a as C}from"./inboxMenu-Ddd3ZPv9.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-Od3SKb1D.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-DUuE-Ou8.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-D5IbUDpM.js";import{u as U}from"./useLayout-BbVkyVzJ.js";import{a as D}from"./useLocale-C3Mk-E9B.js";import{F as E}from"./Flex-DCvAlmz5.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-DuR8D8_r.js";import"./name-Dr5DH52l.js";import"./HeartFill-Bj_kLhYI.js";import"./InboxFill-CxH-FZoP.js";import"./Plus-C15azGMz.js";import"./PersonCircle-BTGNYzp8.js";import"./Bookmark-B_ThKo_j.js";import"./Archive-g44wWaqP.js";import"./Trash-B8iqDuUh.js";import"./InformationSquare-BWZxY-Ir.js";import"./globalMenu-tXjhSQdN.js";import"./Buildings2-ClRD1E4M.js";import"./MenuGrid-CGy7PnqW.js";import"./MagnifyingGlass-CdYCPvzC.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-BfYwNiOX.js";import"./CookieBanner-BkOFQ3j0.js";import"./Heading-BMVjBYv7.js";import"./useHighlightedText-DZWCzlXV.js";import"./Typography-DtLS48Hu.js";import"./Link-DsvxrKVD.js";import"./Banner-CkxdVSu6.js";import"./GlobalHeader-KtK9X2tS.js";import"./GlobalAccountButton-D64CL6rx.js";import"./Avatar-DD7mVb1C.js";import"./ChevronDown-BeusJatl.js";import"./Enter-B6lOGCKU.js";import"./GlobalMenuButton-G92qHvB4.js";import"./MenuHamburger-Dm7Id1b9.js";import"./Badge-pBqwugki.js";import"./Tooltip-DUaFgqyq.js";import"./ChevronUp-AGjLHyT-.js";import"./Dropdown-BfcDJKeS.js";import"./AccountSelector-CViGMN2t.js";import"./SearchField-Dzjcb6Jc.js";import"./MenuListItem-DFvxTJo7.js";import"./MenuListDivider-PhbjEgIJ.js";import"./MenuItem-DfUUgYTt.js";import"./CheckboxUncheckedIcon-8mxNE8Kh.js";import"./RadioUncheckedIcon-BTuDB-oi.js";import"./ItemMedia-av47GhhR.js";import"./AvatarGroup-BU05kps4.js";import"./ItemLabel-Bf911ckJ.js";import"./ItemControls-m0GxRmTW.js";import"./ChevronRight-B74pzmXz.js";import"./FieldBase-B5R0NBwO.js";import"./Field-B6D7FR_A.js";import"./Label-C598VR2I.js";import"./Input-C1qnV1Va.js";import"./useMenu-DCL6y2xK.js";import"./Switch-BH_KBOBo.js";import"./AccountMenu-BhZcjiKm.js";import"./GlobalMenu-CDjKAhOl.js";import"./Checkmark-B9ugWUTA.js";import"./ArrowUndo-Ds3qFIs3.js";import"./Globe-DQPwD49L.js";import"./BreadcrumbsLink-BfnwJCv0.js";import"./ArrowRight-C5VAtTTo.js";import"./Footer-Csa8fVfX.js";import"./useAccountMenu-CtVcBggF.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
