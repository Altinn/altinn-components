var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-CmRPDbOf.js";import{u as j,g as z}from"./accountDataFetchers-CR3CBMDT.js";import{a as C}from"./inboxMenu-FGdRdNdw.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-FmwbDT6K.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-iwrXuX5I.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-DdHWuBXh.js";import{u as U}from"./useLayout-C26j3cNh.js";import{a as D}from"./useLocale-BFWthnKR.js";import{F as E}from"./Flex-CHIj3aXb.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BnBN7-h6.js";import"./name-Dr5DH52l.js";import"./HeartFill-BrWfX2ow.js";import"./InboxFill-C-y88DAH.js";import"./Plus-BIlgSaK7.js";import"./PersonGroup-DT6ZT_45.js";import"./Bookmark-jlJzyw-m.js";import"./Archive-Czt8xJzv.js";import"./Trash-BLtAnUoG.js";import"./InformationSquare-CWm2kkCA.js";import"./localeSwitcher-C3Jstk8I.js";import"./MenuGrid-CHOSeooe.js";import"./MagnifyingGlass-CwhdRafK.js";import"./Buildings2-N07gQ7vJ.js";import"./Bell-CcxSUtBz.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-B2JVR-Og.js";import"./CookieBanner-DN9oxIAl.js";import"./Heading-Bga8Ehqe.js";import"./useHighlightedText-DjvNujh0.js";import"./Typography-3Ni-pGxm.js";import"./Link-Di1sS5P3.js";import"./Banner-CHiyD-pJ.js";import"./GlobalHeader-C9_nPyrF.js";import"./GlobalAccountButton-CkZ1qyuA.js";import"./Avatar-CwlqlX3p.js";import"./ChevronDown-DDaXyD9m.js";import"./Enter-D9jMCMkR.js";import"./GlobalMenuButton-BWiZuY5w.js";import"./MenuHamburger-kBHhFvVJ.js";import"./Badge-v2cVTzHM.js";import"./Tooltip-68erwe8G.js";import"./ChevronUp-Du7zJIj-.js";import"./Dropdown-B1dfaL3E.js";import"./AccountSelector-Bh3LYNJI.js";import"./SearchField-DPxFOcjN.js";import"./MenuListItem-DYZsrCFE.js";import"./MenuListDivider-USarlITZ.js";import"./MenuItem-CP9JLIOX.js";import"./CheckboxUncheckedIcon-Dld9bvaz.js";import"./RadioUncheckedIcon-zMkD8-D_.js";import"./ItemMedia-BANum1kS.js";import"./AvatarGroup-CLRHdYA5.js";import"./ItemLabel-S9If7Ew0.js";import"./ItemControls-CjzJ0cx0.js";import"./ChevronRight-DUgz5ktQ.js";import"./FieldBase-uTfpYKlO.js";import"./Field-BGZ86hwn.js";import"./Label-DME-k-qs.js";import"./Input-SsfERmB5.js";import"./useMenu-Dthlol8g.js";import"./Switch-ClafsxpZ.js";import"./AccountMenu-CMinoV1y.js";import"./GlobalMenu-CIdPDdza.js";import"./Checkmark-BU8vtpH6.js";import"./ArrowUndo-L8RPPon2.js";import"./Globe-uYgrsE93.js";import"./BreadcrumbsLink-DVQNZRfZ.js";import"./ArrowRight-CLXTujYb.js";import"./Footer-atzPI7p2.js";import"./useAccountMenu-BYpZZcV3.js";const no={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
