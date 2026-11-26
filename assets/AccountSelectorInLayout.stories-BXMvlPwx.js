var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-ZrU_khjL.js";import{u as j,g as z}from"./accountDataFetchers-BXzBBp0w.js";import{a as C}from"./inboxMenu-CtrVWWb1.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-CmAt-1UB.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-BpdryenR.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-Baz6inEc.js";import{u as U}from"./useLayout-BWPtWGZs.js";import{a as D}from"./useLocale-bYy0Yvaq.js";import{F as E}from"./Flex-DJ1B1xxZ.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-v0h-kR2t.js";import"./name-Dr5DH52l.js";import"./HeartFill-Cd4P8gX9.js";import"./InboxFill-DvTncqt1.js";import"./Plus-DonfkQJy.js";import"./PersonCircle-BpkEJcqi.js";import"./Bookmark-ChOY-J_L.js";import"./Archive-BqlJd5xK.js";import"./Trash-D_09wouA.js";import"./InformationSquare-v_Dcjud5.js";import"./globalMenu-CXbk4zBY.js";import"./Buildings2-D071t-hU.js";import"./MenuGrid-OFU6OM4f.js";import"./MagnifyingGlass-Daj1V0tq.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-BdmTHMy_.js";import"./CookieBanner-CAcj-FZO.js";import"./Heading-CifG33hf.js";import"./useHighlightedText-CDx2rO1x.js";import"./Typography-FbkShcFO.js";import"./Link-BZaMHpGV.js";import"./Banner-CPL97lia.js";import"./GlobalHeader-CYt7SSdw.js";import"./GlobalAccountButton-C1FVFYdc.js";import"./Avatar-Cz72QNux.js";import"./ChevronDown-BB20zuC9.js";import"./Enter-C2hxxdFf.js";import"./GlobalMenuButton-BzlllpjY.js";import"./MenuHamburger-Bmp7ovD_.js";import"./Badge-CRj8wKrC.js";import"./Tooltip-Dbgfurbn.js";import"./ChevronUp-CSSlqESb.js";import"./Dropdown-CeljIqa3.js";import"./AccountSelector-BMF--fBy.js";import"./SearchField-BKf2_wz5.js";import"./MenuListItem-UylFm72-.js";import"./MenuListDivider-Frk75rx_.js";import"./MenuItem-Cnq3lS8W.js";import"./CheckboxUncheckedIcon-D5_rz1Ju.js";import"./RadioUncheckedIcon-DY3mbg0B.js";import"./ItemMedia-RrQv9WL4.js";import"./AvatarGroup-Bva3vDjZ.js";import"./ItemLabel-Dkx3E56O.js";import"./ItemControls-BPrmzCX9.js";import"./ChevronRight-I-BGQZW2.js";import"./FieldBase-Bti6f0lr.js";import"./Field-DiIDUIXB.js";import"./Label-C-OC1u9M.js";import"./Input-pcnWwkdM.js";import"./useMenu-D1AoRPPj.js";import"./Switch-BdFzWZ9v.js";import"./AccountMenu-CzF8GbtV.js";import"./GlobalMenu-DuXi0wGS.js";import"./Checkmark-CeGyim3w.js";import"./ArrowUndo-DApzQjif.js";import"./Globe-FslnJAPK.js";import"./BreadcrumbsLink-C9H93YOO.js";import"./ArrowRight-zE1jOLWI.js";import"./Footer-CalvC98I.js";import"./useAccountMenu-D3F_sQJW.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
