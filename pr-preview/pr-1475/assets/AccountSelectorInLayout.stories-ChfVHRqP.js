var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-DV5agHf5.js";import{u as j,g as z}from"./accountDataFetchers-DbCo5685.js";import{a as C}from"./inboxMenu-BY1IsCvA.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-38T2EOt5.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-C3SfnO8o.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-BrYzLvPp.js";import{u as U}from"./useLayout-CxCh7PE4.js";import{a as D}from"./useLocale-BH4R6fqI.js";import{F as E}from"./Flex-BRxWwGAq.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-Dgf_ImB_.js";import"./name-Dr5DH52l.js";import"./HeartFill-DVcNV07D.js";import"./InboxFill-BuecJ8u6.js";import"./Plus-BR13EOsl.js";import"./PersonCircle-3fvyR-Zs.js";import"./Bookmark-Bep4WbZD.js";import"./Archive-DszzhGXz.js";import"./Trash-DJnUMrV2.js";import"./InformationSquare-CpDw8TpS.js";import"./globalMenu-Cmki8EvO.js";import"./Buildings2-JRf2It2a.js";import"./MenuGrid-BRhDAza_.js";import"./MagnifyingGlass-tTfHyx-p.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-LyrS11DA.js";import"./CookieBanner-DME2vTqP.js";import"./Heading-Ct7f5Viq.js";import"./useHighlightedText-D74GV1fZ.js";import"./Typography-DklD6Rdi.js";import"./Link-tw3HlPU6.js";import"./Banner-BY-nOb9Q.js";import"./GlobalHeader-ahSxCkcv.js";import"./GlobalAccountButton-BsGWGzNM.js";import"./Avatar-BEN4tDyT.js";import"./ChevronDown-Brg3C2rz.js";import"./Enter-CPudqAed.js";import"./GlobalMenuButton-BFSvdCC_.js";import"./MenuHamburger-sep3wvC_.js";import"./Badge-Pb0_Mmmt.js";import"./Tooltip-BJCyjCNp.js";import"./ChevronUp-CkyCCeXo.js";import"./Dropdown-hdLzeqLa.js";import"./AccountSelector-CtVsCXWw.js";import"./SearchField-DZ4t3H4v.js";import"./MenuListItem-CWjGfYeh.js";import"./MenuListDivider-B_yXfz6T.js";import"./MenuItem-0aaQQHkL.js";import"./CheckboxUncheckedIcon-B-IeYfRG.js";import"./RadioUncheckedIcon-DnY8WA8D.js";import"./ItemMedia-K3xyGGVD.js";import"./AvatarGroup-DhvypAS5.js";import"./ItemLabel-DMcOnD30.js";import"./ItemControls-Dpr02RM6.js";import"./ChevronRight-DdV1IRY7.js";import"./FieldBase-D4-LzoRW.js";import"./Field-BelDBEf0.js";import"./Label-DXhZaYP8.js";import"./Input-CfHBGeL6.js";import"./useMenu-BBdwWh--.js";import"./Switch-Cdw3bZt4.js";import"./AccountMenu-Zc-XGeGF.js";import"./GlobalMenu-Dzylc3ME.js";import"./Checkmark-B_VJ15Sz.js";import"./ArrowUndo-CRPQURmv.js";import"./Globe-CSSNkPCg.js";import"./BreadcrumbsLink-BrtOGbrU.js";import"./ArrowRight-BgPN7dhI.js";import"./Footer-CE_xU-HV.js";import"./useAccountMenu-BWeYrxn_.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
