var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-CjTVLX0J.js";import{u as j,g as z}from"./accountDataFetchers-CjwNm1rw.js";import{a as C}from"./inboxMenu-LFt73ixi.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-CNV4dqbz.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-DLSiGAx-.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-BcTWtV95.js";import{u as U}from"./useLayout-DT1dRbJp.js";import{a as D}from"./useLocale-DY_Y1RPB.js";import{F as E}from"./Flex-DPGhARfx.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-CRXCxfgX.js";import"./name-Dr5DH52l.js";import"./HeartFill-Duwqd6aq.js";import"./InboxFill-B1_bEVcP.js";import"./Plus-DW7oopwP.js";import"./PersonGroup-BwCOL2Gz.js";import"./Bookmark-BDeoFTtd.js";import"./Archive-BBOY_v7Z.js";import"./Trash-f0oxT1Hh.js";import"./InformationSquare-DA1l9Dlv.js";import"./localeSwitcher-BdJo1Izh.js";import"./MenuGrid-F8C2h4Pq.js";import"./MagnifyingGlass-DkbBbRdW.js";import"./Buildings2-DbrN1Cg2.js";import"./Bell-BL9bPd5p.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-CFVJJW-V.js";import"./CookieBanner-BoBiIGVA.js";import"./Heading-iGdZKzrq.js";import"./useHighlightedText-DSpkTug-.js";import"./Typography-D5LJyQSI.js";import"./Link-CwJzganA.js";import"./Banner-CCUC8ahN.js";import"./GlobalHeader-CYRnFvVR.js";import"./GlobalAccountButton-CN0jJRTe.js";import"./Avatar-Bte94cY6.js";import"./ChevronDown-mX34rd4T.js";import"./Enter-C-VRq7pc.js";import"./GlobalMenuButton-C4Qn8CNp.js";import"./MenuHamburger-BrSo9lJ8.js";import"./Badge-5qYmbB4A.js";import"./Tooltip-D-ZO89_f.js";import"./ChevronUp-BaW30cb9.js";import"./Dropdown-Dh6j_cOd.js";import"./AccountSelector-D_UDBNlC.js";import"./SearchField-BoWCGyO9.js";import"./MenuListItem-Db90m9cT.js";import"./MenuListDivider-D1F-iYgs.js";import"./MenuItem-BHJaEqQ5.js";import"./CheckboxUncheckedIcon-BI8H0dji.js";import"./RadioUncheckedIcon-BkjXdcpz.js";import"./ItemMedia-DnpNAz5S.js";import"./AvatarGroup-C543ATGD.js";import"./ItemLabel-QKtbke7Z.js";import"./ItemControls-DdDcRIJg.js";import"./ChevronRight-B7WfXeCo.js";import"./FieldBase-C5zYRo5L.js";import"./Field-DCjNXD15.js";import"./Label-em-S6i9n.js";import"./Input-B0rqselK.js";import"./useMenu-DyQl0UH7.js";import"./Switch-DudTedAR.js";import"./AccountMenu-BAN1_qc4.js";import"./GlobalMenu-Dx6KsJmK.js";import"./Checkmark-MZRBZVNG.js";import"./ArrowUndo-ButKzzqn.js";import"./Globe-xX74n395.js";import"./BreadcrumbsLink-BwoDhCel.js";import"./ArrowRight-DIDpPpC_.js";import"./Footer-BDn4xEy5.js";import"./useAccountMenu-BvLo-JyS.js";const no={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
