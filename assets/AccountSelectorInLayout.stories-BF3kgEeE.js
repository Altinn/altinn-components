var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-DV7mfmQb.js";import{u as j,g as z}from"./accountDataFetchers-D9pXPbfM.js";import{a as C}from"./inboxMenu-yKL_DE72.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-DHMJJ7gv.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-BK0w3PMD.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-DZBNcXWe.js";import{u as U}from"./useLayout-DdknUL0l.js";import{a as D}from"./useLocale-BFesZEMO.js";import{F as E}from"./Flex-DFf5qQ3F.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-DCLIk5lP.js";import"./name-Dr5DH52l.js";import"./HeartFill-DOapQs-H.js";import"./InboxFill-BvLcyoSs.js";import"./Plus-sUzSSeT3.js";import"./PersonCircle-_T27UUZ-.js";import"./Bookmark-DA6gE_Tg.js";import"./Archive-PXBTQ8NB.js";import"./Trash-C1yoK2W5.js";import"./InformationSquare-Z-eNQMTk.js";import"./globalMenu-CpRGNqVy.js";import"./Buildings2-CeZxpCtB.js";import"./MenuGrid-DRVrG73C.js";import"./MagnifyingGlass-B1ufIXT-.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-DWhpD2JE.js";import"./CookieBanner-DIELrxAP.js";import"./Heading-qQ_NecB3.js";import"./useHighlightedText-DBlSdXli.js";import"./Typography-DQaNXpVK.js";import"./Link-td4tSMf0.js";import"./Banner-BYfqFn6r.js";import"./GlobalHeader-DXyqSPVs.js";import"./GlobalAccountButton-CxEaXp2V.js";import"./Avatar-DCtpkPNs.js";import"./ChevronDown-M6oDtO0s.js";import"./Enter-v_RE-Mu9.js";import"./GlobalMenuButton-BQS4sS8d.js";import"./MenuHamburger-CxPazaXX.js";import"./Badge-DzF_wXJq.js";import"./Tooltip-Dnt3MX0-.js";import"./ChevronUp-DkTvQyLF.js";import"./Dropdown-B1DFc__X.js";import"./AccountSelector-BHau9V2C.js";import"./SearchField-DyUxixY-.js";import"./MenuListItem-BNAb4_WQ.js";import"./MenuListDivider-uDPIzbn6.js";import"./MenuItem-_arBrpFq.js";import"./CheckboxUncheckedIcon-W9wh7zhg.js";import"./RadioUncheckedIcon-DHe0o4Rd.js";import"./ItemMedia-CxtJxXCZ.js";import"./AvatarGroup-DkZdjAob.js";import"./ItemLabel-DhOVpPar.js";import"./ItemControls-DXTFa1Wt.js";import"./ChevronRight-y8OcgkDI.js";import"./FieldBase-BPbtcuhV.js";import"./Field-xCImHJHX.js";import"./Label-CBFOmf2H.js";import"./Input-C3PsoH0G.js";import"./useMenu-BFlkLZpJ.js";import"./Switch-DNLwrdXr.js";import"./AccountMenu-DM2EBnSH.js";import"./GlobalMenu-Qbd1zlxn.js";import"./Checkmark-B-M1QuTd.js";import"./ArrowUndo-m6YZv1rE.js";import"./Globe-DaOEOAky.js";import"./BreadcrumbsLink-CBwmeyQz.js";import"./ArrowRight-C_osjboa.js";import"./Footer-BiqT7Jqb.js";import"./useAccountMenu-BwLt8TWy.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
