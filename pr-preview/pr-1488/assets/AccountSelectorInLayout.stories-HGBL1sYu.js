var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-Cb83cNHz.js";import{u as j,g as z}from"./accountDataFetchers-CU9xGlfo.js";import{a as C}from"./inboxMenu-BCVIvCMO.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-BCF_3qUB.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-Dff3kFcF.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-CMBfslKk.js";import{u as U}from"./useLayout-ChotBEY2.js";import{a as D}from"./useLocale-B81XpxB2.js";import{F as E}from"./Flex-mAUGJKsG.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-bkDzo4_p.js";import"./name-Dr5DH52l.js";import"./HeartFill-DcdlCvlf.js";import"./InboxFill-C-qRYzn8.js";import"./Plus-DTEoGbp7.js";import"./PersonCircle-CtGRXr0J.js";import"./Bookmark-CQ14dnwq.js";import"./Archive-DAtzml59.js";import"./Trash-lsGNewil.js";import"./InformationSquare-BiO92rri.js";import"./globalMenu-C_b1A6tx.js";import"./Buildings2-CMW_rwWI.js";import"./MenuGrid-BEQ62scm.js";import"./MagnifyingGlass-C02McN1l.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-6B7b5F_a.js";import"./CookieBanner-jCRU0d03.js";import"./Heading-I2bz7uBQ.js";import"./useHighlightedText-DXF5vSCe.js";import"./Typography-BPADIB9F.js";import"./Link-DQQdOR66.js";import"./Banner-B1D4lRTG.js";import"./GlobalHeader-GY_0unjy.js";import"./GlobalAccountButton-YJVub4dC.js";import"./Avatar-CO1wzsxc.js";import"./ChevronDown-CvYcy6of.js";import"./Enter-242fxigb.js";import"./GlobalMenuButton-Dr02kXNp.js";import"./MenuHamburger-CnSpXwtX.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./ChevronUp-BCG2x0JT.js";import"./Dropdown-ANdQRx3c.js";import"./AccountSelector-C0DI3fm4.js";import"./SearchField-HWu0obAx.js";import"./MenuListItem-Ddq1rF2u.js";import"./MenuListDivider-CU0QYw1K.js";import"./MenuItem-D8XMh2RI.js";import"./CheckboxUncheckedIcon-DNQ5ph0B.js";import"./RadioUncheckedIcon-CIyf3y8X.js";import"./ItemMedia-DqOX_qxk.js";import"./AvatarGroup-DvuSBfuR.js";import"./ItemLabel-BEqC8Tjb.js";import"./ItemControls-B2ksNOht.js";import"./ChevronRight-C-6CVVq7.js";import"./FieldBase-DBBKjPwf.js";import"./Field-SexvxzIl.js";import"./Label-CzmEce_d.js";import"./Input-DdatSh7d.js";import"./useMenu-D3abljbA.js";import"./Switch-DIW_Z6WH.js";import"./AccountMenu-DZR0MJzN.js";import"./GlobalMenu-BMN2Sqk4.js";import"./Checkmark-CNvtSrOy.js";import"./ArrowUndo-B-nYNH6F.js";import"./Globe-DtcnCepT.js";import"./BreadcrumbsLink--x-4fvlt.js";import"./ArrowRight-CQNswdhZ.js";import"./Footer-CT_cgCIN.js";import"./useAccountMenu-BH3K6i1e.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
