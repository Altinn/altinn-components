var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a7 as t,aa as A,x as y}from"./iframe-DdPcKG0O.js";import{u as j,g as z}from"./accountDataFetchers-BIkpz3Af.js";import{a as C}from"./inboxMenu-Cez6SIRl.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-Ce6970so.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-abpSdaPk.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-4Yc6head.js";import{u as U}from"./useLayout-pYUVznTo.js";import{a as D}from"./useLocale-C5aYDsSd.js";import{F as E}from"./Flex-Cxkl80LA.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-Db5oQl2d.js";import"./name-Dr5DH52l.js";import"./HeartFill-BIqdK5f8.js";import"./InboxFill-DNUdwCna.js";import"./Plus-DSTjtDMb.js";import"./PersonCircle-D31QT1Vw.js";import"./Bookmark-D4xtpkN-.js";import"./Archive-Ru5RTNZx.js";import"./Trash-CS2QUAEY.js";import"./InformationSquare-RfPtjfhK.js";import"./globalMenu-DImnYpf6.js";import"./Buildings2-DptQBOZ0.js";import"./MenuGrid-DWVFfKff.js";import"./MagnifyingGlass-DvG6YRWZ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-XB2ueEYu.js";import"./CookieBanner-DqZLgQb-.js";import"./Heading-BJje4zKM.js";import"./useHighlightedText-BvQbOG8T.js";import"./Typography-D4dRQ14t.js";import"./Link-BOlpc0iE.js";import"./Banner-CZ375lTk.js";import"./GlobalHeader-AGgSr_4d.js";import"./GlobalAccountButton-YjQ0C6XK.js";import"./Avatar-Dfz4UezB.js";import"./ChevronDown-Bg2scdYv.js";import"./Enter-HqcRumc5.js";import"./GlobalMenuButton-sxX9OeGz.js";import"./commonTexts-CG1mkCQM.js";import"./MenuHamburger-D6OlWMiZ.js";import"./Badge-BzZwcsiz.js";import"./Tooltip-wlipxmMb.js";import"./ChevronUp-DhLREmKD.js";import"./Dropdown-COjWQps0.js";import"./AccountSelector-D-sw94Xn.js";import"./SearchField-DZAM9WJB.js";import"./MenuListItem-DT2WooyF.js";import"./MenuListDivider-Dinu7Rw4.js";import"./MenuItem-BOFr4MJg.js";import"./CheckboxUncheckedIcon-BsqpIyxr.js";import"./RadioUncheckedIcon-DgOrjSnU.js";import"./ItemMedia-BsdmKVrj.js";import"./AvatarGroup-BtZlCnKI.js";import"./ItemLabel-vi7acRQa.js";import"./ItemControls-Bf5MqGaN.js";import"./ChevronRight-Cmdt4Cn7.js";import"./FieldBase-V879Q4R4.js";import"./Field-DKeS0ieC.js";import"./Label-BJbtrgL_.js";import"./Input-RBXxlYal.js";import"./useMenu-B_zDT5uM.js";import"./Switch-GG9A6A0W.js";import"./AccountMenu-B95Q69sF.js";import"./GlobalMenu-JRG16Ahg.js";import"./Checkmark-CRn1GEhZ.js";import"./ArrowUndo-Bxuz6WKg.js";import"./Globe-BDvt3sjf.js";import"./BreadcrumbsLink-DBNxqeKE.js";import"./ArrowRight-Dgw6wxdS.js";import"./Footer-rqwLtXl1.js";import"./useAccountMenu-BPX8SLoq.js";const no={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
