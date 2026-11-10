var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a6 as t,a9 as A,x as y}from"./iframe-Yc5vADWD.js";import{u as j,g as z}from"./accountDataFetchers-CnEUNzop.js";import{a as C}from"./inboxMenu-Cz1Y3JjF.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-BXZtHWs1.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-D0oQT3Dr.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-DoCtDg0f.js";import{u as U}from"./useLayout-DX6kMpo8.js";import{a as D}from"./useLocale-BQDegRz8.js";import{F as E}from"./Flex-B3cYS6HF.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BSuHAgib.js";import"./name-Dr5DH52l.js";import"./HeartFill-DHNRDEOI.js";import"./InboxFill-G4XjwwCh.js";import"./Plus-BG9CstYb.js";import"./PersonCircle-DmjSZPTB.js";import"./Bookmark-nCgC_NEs.js";import"./Archive-52BKtGhP.js";import"./Trash-DtaM_GNe.js";import"./InformationSquare-TRKWejmi.js";import"./globalMenu-gbiJxtTP.js";import"./Buildings2-DfxUKA-x.js";import"./MenuGrid-CDep6gRY.js";import"./MagnifyingGlass-D24TEFQh.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-5s7iHcFe.js";import"./CookieBanner-Bv5jbEtk.js";import"./Heading-DEfYMi8I.js";import"./useHighlightedText-DPM1PtgE.js";import"./Typography-BbQNKF3N.js";import"./Link-NvhW_JA3.js";import"./Banner-BR7HfYZ0.js";import"./GlobalHeader-DtD7Bi_o.js";import"./GlobalAccountButton-DOfFwmM4.js";import"./Avatar-B1293ug9.js";import"./ChevronDown-DOVICByK.js";import"./Enter-33WYXkGQ.js";import"./GlobalMenuButton-DAKf8ey0.js";import"./MenuHamburger-BZO_lHH1.js";import"./Badge-B7caOYrZ.js";import"./Tooltip-ClWq0FMC.js";import"./ChevronUp-CHIwOCup.js";import"./Dropdown-ClwEgS76.js";import"./AccountSelector-BqS9VXnN.js";import"./SearchField-DuQI2WUG.js";import"./MenuListItem-D_xInwm_.js";import"./MenuListDivider-CBT6dc8U.js";import"./MenuItem-Do_eZo-E.js";import"./CheckboxUncheckedIcon-BTRLnzsL.js";import"./RadioUncheckedIcon-B5Tym566.js";import"./ItemMedia-93ge468N.js";import"./AvatarGroup-b9E5cL-B.js";import"./ItemLabel-CEwOeVMD.js";import"./ItemControls-CBx0Fvi9.js";import"./ChevronRight-BvgS2wwu.js";import"./FieldBase-Dm91Yu7W.js";import"./Field-CKipP2ZI.js";import"./Label-Coc0T7Cr.js";import"./Input-XB5O9fra.js";import"./useMenu-CxtnSdnP.js";import"./Switch-D1NN4jqs.js";import"./AccountMenu-CgK3-AZU.js";import"./GlobalMenu-B-GfbJrP.js";import"./Checkmark-Bfjel_6l.js";import"./ArrowUndo-C9sxw3hI.js";import"./Globe-BdpCoWNM.js";import"./BreadcrumbsLink-B7mvbHEj.js";import"./ArrowRight-CfnTjRjZ.js";import"./Footer-BFZED0r-.js";import"./useAccountMenu-CefcaoFX.js";const ao={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
