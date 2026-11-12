var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a7 as t,aa as A,x as y}from"./iframe-xlSYDLmX.js";import{u as j,g as z}from"./accountDataFetchers-CmxuzP3u.js";import{a as C}from"./inboxMenu-vxstSZ3P.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-BbZOjMSG.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-DLGCtKJK.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-BKjTBjbL.js";import{u as U}from"./useLayout-Cg8VChyL.js";import{a as D}from"./useLocale-DX6DGIz8.js";import{F as E}from"./Flex-Brl5o9wf.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-6yxnkXHf.js";import"./name-Dr5DH52l.js";import"./HeartFill-BXqiREJy.js";import"./InboxFill-D1izvkko.js";import"./Plus-B94II9lJ.js";import"./PersonCircle-DbC33sJW.js";import"./Bookmark-CwN43r-K.js";import"./Archive-DNZp7WUs.js";import"./Trash-Dtf6X4Tk.js";import"./InformationSquare-DlLj2oH8.js";import"./globalMenu-DUgS66uh.js";import"./Buildings2-B9C4Wpww.js";import"./MenuGrid-C8x75imp.js";import"./MagnifyingGlass-DJJa4Uj5.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-DbFcsqGo.js";import"./CookieBanner-Bv33FMRA.js";import"./Heading-DK8bpf-l.js";import"./useHighlightedText-CTgwY4NQ.js";import"./Typography-CBKRdQ-b.js";import"./Link-Dd0FvdCr.js";import"./Banner-Dy_L3DR8.js";import"./GlobalHeader-CPP82mBY.js";import"./GlobalAccountButton-uCDrrwKM.js";import"./Avatar-DElWOLnF.js";import"./ChevronDown-BV4f9W92.js";import"./Enter-BB3yJ8-F.js";import"./GlobalMenuButton-BmrRLFGS.js";import"./MenuHamburger-Di3wOkSc.js";import"./Badge-xtJTwQdy.js";import"./Tooltip-DtRHHtRs.js";import"./ChevronUp-SNqOJLK8.js";import"./Dropdown-CsBuGo6i.js";import"./AccountSelector-BEsgKni_.js";import"./SearchField-Cm1bebf2.js";import"./MenuListItem-C1VHk2tM.js";import"./MenuListDivider-B_1so_ti.js";import"./MenuItem-BLhJ1hxZ.js";import"./CheckboxUncheckedIcon-DH-Lidl1.js";import"./RadioUncheckedIcon-C7ew2nKt.js";import"./ItemMedia-DF0c3SDh.js";import"./AvatarGroup-Dx8NgiU3.js";import"./ItemLabel-eTSb-Z0L.js";import"./ItemControls-Dlw9_sua.js";import"./ChevronRight-WLOtysjI.js";import"./FieldBase-CKEKDcDW.js";import"./Field-mWeCiqLp.js";import"./Label-DW6M7Jnl.js";import"./Input-r4bRN1Qy.js";import"./useMenu-C7Dhr05-.js";import"./Switch-GVxp4VPn.js";import"./AccountMenu-PFjNuNzI.js";import"./GlobalMenu-i-XbP5Gh.js";import"./Checkmark-opEEWy2T.js";import"./ArrowUndo-5Pl34Luc.js";import"./Globe-5mzhGoRG.js";import"./BreadcrumbsLink-CGJPd532.js";import"./ArrowRight-BtJExjIH.js";import"./Footer-oYNbV1h3.js";import"./useAccountMenu-CeKxH1hX.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
