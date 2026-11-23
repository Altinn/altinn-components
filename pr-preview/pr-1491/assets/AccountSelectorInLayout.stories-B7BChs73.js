var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-HroKCH1i.js";import{u as j,g as z}from"./accountDataFetchers-CYYceYgl.js";import{a as C}from"./inboxMenu-C-5L-WXl.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-BMddiS4F.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-BJWTle-B.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-tdLzhmRI.js";import{u as U}from"./useLayout-C8WgeLqn.js";import{a as D}from"./useLocale-X1Z3kdXY.js";import{F as E}from"./Flex-CL3BtjUZ.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BTCUyq0Y.js";import"./name-Dr5DH52l.js";import"./HeartFill-CZHOmC4o.js";import"./InboxFill-Dwv2ZDno.js";import"./Plus-CnaATfP4.js";import"./PersonGroup-WrhwV8_x.js";import"./Bookmark-DaEaxFpU.js";import"./Archive-CzrN7IRQ.js";import"./Trash-CnguooS_.js";import"./InformationSquare-uPdk22J8.js";import"./localeSwitcher-PZoiL7mz.js";import"./MenuGrid-DMFQx4_O.js";import"./MagnifyingGlass-GwJB8-P4.js";import"./Buildings2-Isc-I77e.js";import"./Bell-BbNhDS7V.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-BsMHl5Dl.js";import"./CookieBanner-D5zydMJa.js";import"./Heading-ButwX4Fz.js";import"./useHighlightedText-BR2lgM5a.js";import"./Typography-mUXdli5h.js";import"./Link-bcRJX1ul.js";import"./Banner-BECRe8uM.js";import"./GlobalHeader-Bdu0hHXo.js";import"./GlobalAccountButton-Ci9Ajpvf.js";import"./Avatar-DknIY_wN.js";import"./ChevronDown-DmtpYDji.js";import"./Enter-BTzvw947.js";import"./GlobalMenuButton-C2xvSLNT.js";import"./MenuHamburger-Ca2SrZOe.js";import"./Badge-6DoOsqKK.js";import"./Tooltip-3zva_1pJ.js";import"./ChevronUp-CmHElL6S.js";import"./Dropdown-CxvfuUHz.js";import"./AccountSelector-DFjKkW66.js";import"./SearchField-DdJVtzp5.js";import"./MenuListItem-DW9PJpJL.js";import"./MenuListDivider-DtrGkUUW.js";import"./MenuItem-CIYGtEiF.js";import"./CheckboxUncheckedIcon-HP_EJry3.js";import"./RadioUncheckedIcon-Ds8PcFs2.js";import"./ItemMedia-BGnaafVo.js";import"./AvatarGroup-CajaM-Bn.js";import"./ItemLabel-BExOJJ8K.js";import"./ItemControls-P_AZ0k9Y.js";import"./ChevronRight-CnU_-vpz.js";import"./FieldBase-Dy7F34xJ.js";import"./Field-A9TpZ5Q4.js";import"./Label-3I9SdFhT.js";import"./Input-KntdUcqG.js";import"./useMenu-DLxClmSr.js";import"./Switch-CjSSR8lu.js";import"./AccountMenu-Dghf-kj5.js";import"./GlobalMenu-B2C0Dikk.js";import"./Checkmark-rGl1e__H.js";import"./ArrowUndo-D_aPg2Cn.js";import"./Globe-BdekqIrA.js";import"./BreadcrumbsLink-BWF5RF-c.js";import"./ArrowRight-BJR7CRKc.js";import"./Footer-CWkOOgTl.js";import"./useAccountMenu-DLFye4nI.js";const no={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
