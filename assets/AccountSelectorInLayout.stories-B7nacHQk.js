var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-DKOj4Qmf.js";import{u as j,g as z}from"./accountDataFetchers-DIOjYLju.js";import{a as C}from"./inboxMenu-BEjRP-ns.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-DFSjGhev.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-C77_zlI3.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-Cy5IRW4w.js";import{u as U}from"./useLayout-KPAgcc6H.js";import{a as D}from"./useLocale-Ba1i3mzS.js";import{F as E}from"./Flex-DwWkcKON.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-ButgdWSM.js";import"./name-Dr5DH52l.js";import"./HeartFill-TMgHEMWw.js";import"./InboxFill-DlN-FcL8.js";import"./Plus-CFLLX51l.js";import"./PersonCircle-B-YmhkaA.js";import"./Bookmark-DtUUxBWC.js";import"./Archive-BdzDAVfI.js";import"./Trash-BH2M-vSd.js";import"./InformationSquare-CC_FvbA-.js";import"./globalMenu-Bgwguyyv.js";import"./Buildings2-wb5ZIU2b.js";import"./MenuGrid-DtqF4QVd.js";import"./MagnifyingGlass-CQx-KSK5.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-Dd2TvshO.js";import"./CookieBanner-DQKUtDMx.js";import"./Heading-CZ9YFV1k.js";import"./useHighlightedText-C5BJuUZa.js";import"./Typography-eLs7BNQP.js";import"./Link-Bf9h-zyq.js";import"./Banner-tfb5tHuB.js";import"./GlobalHeader-Ndrp0S0T.js";import"./GlobalAccountButton-D0WFlV57.js";import"./Avatar-CF_k6VZv.js";import"./ChevronDown-E0Mu4V8Q.js";import"./Enter-h7bFRpOG.js";import"./GlobalMenuButton-DGjR9OMW.js";import"./MenuHamburger-biRJv-in.js";import"./Badge-DEZY09pU.js";import"./Tooltip-G6lw2ON-.js";import"./ChevronUp-C6mjAtW4.js";import"./Dropdown--jVfBx7U.js";import"./AccountSelector-DVWTlh2e.js";import"./SearchField-TPXYOreq.js";import"./MenuListItem-DoNptxMM.js";import"./MenuListDivider-D3rKIdnM.js";import"./MenuItem-BIy6YDdy.js";import"./CheckboxUncheckedIcon-yrWrTRi3.js";import"./RadioUncheckedIcon-C00GN-tf.js";import"./ItemMedia-BRG2KhSe.js";import"./AvatarGroup-DEy2HyjC.js";import"./ItemLabel-CcblWyxm.js";import"./ItemControls-CBo-NxME.js";import"./ChevronRight-BtINKUzX.js";import"./FieldBase-B2rDpv5b.js";import"./Field-BWfsO4dQ.js";import"./Label-Z9WrVSxL.js";import"./Input-BzqjTNtI.js";import"./useMenu-CQyV1KVq.js";import"./Switch-Bkx_nto1.js";import"./AccountMenu-Dihb_EuE.js";import"./GlobalMenu-DJxTXL6b.js";import"./Checkmark-DXw908H5.js";import"./ArrowUndo-Cs7Bhn7X.js";import"./Globe-CyCJXh5C.js";import"./BreadcrumbsLink-W4MU2AZQ.js";import"./ArrowRight-CsC-IM5g.js";import"./Footer-uc4Se_lB.js";import"./useAccountMenu-DkSxoiko.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
