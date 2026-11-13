var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a7 as t,aa as A,x as y}from"./iframe-r-PzxnFG.js";import{u as j,g as z}from"./accountDataFetchers-Cdb4fEWU.js";import{a as C}from"./inboxMenu-xZz36WC1.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-mzwr1EEx.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-DiBl5Ss_.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-A9HZQbM-.js";import{u as U}from"./useLayout-b8sxLxt5.js";import{a as D}from"./useLocale-ONEEo_UB.js";import{F as E}from"./Flex-DRLqoZbu.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-Di7DAkKs.js";import"./name-Dr5DH52l.js";import"./HeartFill-ClnFDlAG.js";import"./InboxFill-DXiS2hpk.js";import"./Plus-C3gc2Iai.js";import"./PersonCircle-DirIdGej.js";import"./Bookmark-D8tcOQIL.js";import"./Archive-CAWbyIsL.js";import"./Trash-0c2zCAv3.js";import"./InformationSquare-x0k9ph8l.js";import"./globalMenu-DZrKoONM.js";import"./Buildings2-BvvammpD.js";import"./MenuGrid-CZNJcB7P.js";import"./MagnifyingGlass-7vnMkGiQ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-CxAmd6fp.js";import"./CookieBanner-FV1KTXzV.js";import"./Heading-qFKPv3xm.js";import"./useHighlightedText-D1CHWYs6.js";import"./Typography-DZA02yZr.js";import"./Link-Cir18kU1.js";import"./Banner-BLHl1LXV.js";import"./GlobalHeader-B2yCgO-g.js";import"./GlobalAccountButton-DLB0nold.js";import"./Avatar-Dzc1_6Ua.js";import"./ChevronDown-BD5i-hxE.js";import"./Enter-C5EQ7SBG.js";import"./GlobalMenuButton-CtToZxYI.js";import"./commonTexts-CG1mkCQM.js";import"./MenuHamburger-BBbrRald.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./ChevronUp-B0s8dawY.js";import"./Dropdown-tD-rtn-3.js";import"./AccountSelector-7QzxMRVr.js";import"./SearchField-Cn8qUcxo.js";import"./MenuListItem-IXmILE2K.js";import"./MenuListDivider-DjMXmyAN.js";import"./MenuItem-Cmtt-77v.js";import"./CheckboxUncheckedIcon-CL3G4Xwm.js";import"./RadioUncheckedIcon-D0JrFl2l.js";import"./ItemMedia-BFk5syHA.js";import"./AvatarGroup-D0dlHClc.js";import"./ItemLabel-DE7oETkr.js";import"./ItemControls-Di1aFGjk.js";import"./ChevronRight-DoF3revo.js";import"./FieldBase-D95hzyfr.js";import"./Field-C8va_Ig3.js";import"./Label-dzQU0Yg2.js";import"./Input-BYbvd3yE.js";import"./useMenu-BMl9Yb_c.js";import"./Switch-BcyiU8sz.js";import"./AccountMenu-4Pvbq0L4.js";import"./GlobalMenu-IlPBKVIs.js";import"./Checkmark-D0ulgpJN.js";import"./ArrowUndo-BHFoGQzk.js";import"./Globe-cKjoRVPR.js";import"./BreadcrumbsLink-C2WcbWT1.js";import"./ArrowRight-iKU0eq0k.js";import"./Footer-DHBjbd5P.js";import"./useAccountMenu-BkEejnLn.js";const no={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
