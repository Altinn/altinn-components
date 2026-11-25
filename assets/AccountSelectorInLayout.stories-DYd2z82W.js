var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-BW6sNfUG.js";import{u as j,g as z}from"./accountDataFetchers-CedZ4pmO.js";import{a as C}from"./inboxMenu-BBx30qPg.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-D92ziJoR.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-BRGO3Pxh.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-HDD7CT3y.js";import{u as U}from"./useLayout-CK2DWd9l.js";import{a as D}from"./useLocale-BH5uSXf7.js";import{F as E}from"./Flex-Ws1WKTNd.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-K1BK9pQC.js";import"./name-Dr5DH52l.js";import"./HeartFill-B-yKUcbi.js";import"./InboxFill-DB0GMdkZ.js";import"./Plus-CdPXJ-Lc.js";import"./PersonCircle-BTIkMKiQ.js";import"./Bookmark-Dvpolsml.js";import"./Archive-B39KtXbP.js";import"./Trash-V_KyvxF_.js";import"./InformationSquare-1mOGr1dD.js";import"./globalMenu-BhfXV69n.js";import"./Buildings2-1YBn2wwl.js";import"./MenuGrid-Bp-MYz7m.js";import"./MagnifyingGlass-Drdd_pqG.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-Vo-PXquq.js";import"./CookieBanner-CiOG0Kpd.js";import"./Heading-DZSCY0dD.js";import"./useHighlightedText-Dx6jhFuL.js";import"./Typography-DluWU8As.js";import"./Link-Bp8Nw_8-.js";import"./Banner-DHc3Yjej.js";import"./GlobalHeader-Dd8WtTln.js";import"./GlobalAccountButton-BjtDDNLZ.js";import"./Avatar-C64BSSKk.js";import"./ChevronDown-CGVF_s9R.js";import"./Enter-Dt6b_6kn.js";import"./GlobalMenuButton-C4dWsTVa.js";import"./MenuHamburger-DnvsbnfP.js";import"./Badge-CSeOMfHV.js";import"./Tooltip-CNbHjlA7.js";import"./ChevronUp-D9Lqz4C3.js";import"./Dropdown-bOP-opo8.js";import"./AccountSelector-Dd-cE7hX.js";import"./SearchField--GRE4W__.js";import"./MenuListItem-BekZrZTE.js";import"./MenuListDivider-Bd4QDS3f.js";import"./MenuItem-C4PV3Kj2.js";import"./CheckboxUncheckedIcon-D8b9z956.js";import"./RadioUncheckedIcon-BmM-W-GL.js";import"./ItemMedia-C8rbfA3l.js";import"./AvatarGroup-Ccq8C8ES.js";import"./ItemLabel-Dcm3mA4k.js";import"./ItemControls-Bqaen0yJ.js";import"./ChevronRight-DCXIgdRg.js";import"./FieldBase-CiEo5wf3.js";import"./Field-BCzysLpY.js";import"./Label-xW9KovlB.js";import"./Input-gnkfXNcC.js";import"./useMenu-uJdjEIIP.js";import"./Switch-BQQXs8vx.js";import"./AccountMenu-eYdaPZUA.js";import"./GlobalMenu-DMhb8QD9.js";import"./Checkmark-Br7Bq_3w.js";import"./ArrowUndo-gaLA-SPG.js";import"./Globe-fpE-1Baj.js";import"./BreadcrumbsLink-XSdj1u1V.js";import"./ArrowRight-JAuvZFV7.js";import"./Footer-GDlyG5dh.js";import"./useAccountMenu-C4dO-fGe.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
