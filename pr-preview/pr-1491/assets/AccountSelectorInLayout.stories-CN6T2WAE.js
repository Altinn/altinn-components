var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-BYGPhf7N.js";import{u as j,g as z}from"./accountDataFetchers-BN0asI87.js";import{a as C}from"./inboxMenu-3f8CrizC.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-D5drYKkj.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-BPdOd1Rw.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-DFVMkeSB.js";import{u as U}from"./useLayout-CAOUDQsd.js";import{a as D}from"./useLocale-DfM0gWBz.js";import{F as E}from"./Flex-DJhBIPT8.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-D4Aibili.js";import"./name-Dr5DH52l.js";import"./HeartFill-Djummj3_.js";import"./InboxFill-DWlAI5wH.js";import"./Plus-ChNYXBRv.js";import"./PersonGroup-Bxf-P3OI.js";import"./Bookmark-BxGJO_Zp.js";import"./Archive-wTNP5JWn.js";import"./Trash-Aw4yKrn_.js";import"./InformationSquare-Cx25xyTl.js";import"./localeSwitcher-BCkn9Xx-.js";import"./MenuGrid-CHEbnhS0.js";import"./MagnifyingGlass-u7KFDhSG.js";import"./Buildings2-BkCIy4EX.js";import"./Bell-BfrH_baH.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-Dgr7vA8p.js";import"./CookieBanner-DJRgFs59.js";import"./Heading-C5-vf6se.js";import"./useHighlightedText-B7c7eBDx.js";import"./Typography-BHNcIxxH.js";import"./Link-9JXhPkMC.js";import"./Banner-2ZRfWoLb.js";import"./GlobalHeader-2-_5kNCX.js";import"./GlobalAccountButton-TXUATpCe.js";import"./Avatar-B_FLCNK9.js";import"./ChevronDown-DPBIQHio.js";import"./Enter-CidaVE-r.js";import"./GlobalMenuButton-Csrrjbob.js";import"./MenuHamburger-BBEPorEN.js";import"./Badge-qi425Zbf.js";import"./Tooltip-egmjN7rU.js";import"./ChevronUp-C71MAo1t.js";import"./Dropdown-0Y8H4iVy.js";import"./AccountSelector-B_Ngmqwk.js";import"./SearchField-BySPj-oD.js";import"./MenuListItem-Er-de1vm.js";import"./MenuListDivider-C-25gy3r.js";import"./MenuItem-BciZRIkx.js";import"./CheckboxUncheckedIcon-Bc2cW9fu.js";import"./RadioUncheckedIcon-xfigfStp.js";import"./ItemMedia-ApKMdvQL.js";import"./AvatarGroup-BKwaFY6K.js";import"./ItemLabel-KBN1Srj3.js";import"./ItemControls-1sBh4pPD.js";import"./ChevronRight-BckCGbec.js";import"./FieldBase-eqne-WwB.js";import"./Field-CZH9Low_.js";import"./Label-DXziafiV.js";import"./Input-C9cQp4bZ.js";import"./useMenu-r2OQI4uO.js";import"./Switch-c6ueHKpQ.js";import"./AccountMenu-BmkVq2sD.js";import"./GlobalMenu-BV-cJ0dn.js";import"./Checkmark-CWd8wRaj.js";import"./ArrowUndo-BhG5BbM5.js";import"./Globe-MPkG4s1s.js";import"./BreadcrumbsLink-DogAlUIw.js";import"./ArrowRight-DWa5c0tl.js";import"./Footer-DuD_A72t.js";import"./useAccountMenu-EtfLqtMZ.js";const no={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
