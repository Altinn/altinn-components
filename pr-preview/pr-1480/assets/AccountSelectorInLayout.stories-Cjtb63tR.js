var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-M-0W2Kc9.js";import{u as j,g as z}from"./accountDataFetchers-BYKVSO5J.js";import{a as C}from"./inboxMenu-BCFD0y5E.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-DZ2lWmTS.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-v6Qt2V8K.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-BXSIOu8t.js";import{u as U}from"./useLayout-BZGgrSK_.js";import{a as D}from"./useLocale-BvsW5Ys3.js";import{F as E}from"./Flex-CvQqYnnc.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-Cn7t9tR4.js";import"./name-Dr5DH52l.js";import"./HeartFill-CR39zrNl.js";import"./InboxFill-Chtb-S2w.js";import"./Plus-DyAe2qPf.js";import"./PersonCircle-CBGrcbP_.js";import"./Bookmark-Bjnly7uL.js";import"./Archive-BppFJWLm.js";import"./Trash-DszqcR2r.js";import"./InformationSquare-DDYjH-iE.js";import"./globalMenu-Bte7cBv5.js";import"./Buildings2-YNhXlUod.js";import"./MenuGrid-BfyJFOaJ.js";import"./MagnifyingGlass-BCQWJszI.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-DntJm87m.js";import"./CookieBanner-CKoUg9tE.js";import"./Heading-BiiiOHzW.js";import"./useHighlightedText-DPRacH3N.js";import"./Typography-xHph4zf_.js";import"./Link-DAR5zBg4.js";import"./Banner-Bo7eGbbS.js";import"./GlobalHeader-Be6Dpmtw.js";import"./GlobalAccountButton-By-2tKoX.js";import"./Avatar-DT58NR7U.js";import"./ChevronDown-oFv1HZMB.js";import"./Enter-DvPk9pty.js";import"./GlobalMenuButton-DjmeRY1w.js";import"./MenuHamburger-C2Da0bEq.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./ChevronUp-D7bAfZe9.js";import"./Dropdown-DeOVVvS3.js";import"./AccountSelector-DjZHSBhK.js";import"./SearchField-IrO9fkpT.js";import"./MenuListItem-liqRqbPT.js";import"./MenuListDivider-5CZ-K279.js";import"./MenuItem-Bm0vldGL.js";import"./CheckboxUncheckedIcon-D1N0JUmQ.js";import"./RadioUncheckedIcon-DihvZmzM.js";import"./ItemMedia-BNntQAQS.js";import"./AvatarGroup-CiVqxcXe.js";import"./ItemLabel-lDW_MVeZ.js";import"./ItemControls-CUY2SrAL.js";import"./ChevronRight-e5zm3v6Y.js";import"./FieldBase-Bv-PdLp_.js";import"./Field-CJDObndh.js";import"./Label-BfAsqjGj.js";import"./Input-PR-EPUfC.js";import"./useMenu-D1I6Xbj7.js";import"./Switch-rSPs52No.js";import"./AccountMenu-GyTJFnAZ.js";import"./GlobalMenu-gxscJUse.js";import"./Checkmark-v-SGYEEX.js";import"./ArrowUndo-BbhWyJt8.js";import"./Globe-BsQeD7rm.js";import"./BreadcrumbsLink-CRb6C2Tw.js";import"./ArrowRight-BaGs8lxe.js";import"./Footer-vBS3rioj.js";import"./useAccountMenu-_vjgMLUi.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
