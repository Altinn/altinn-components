var w=Object.defineProperty;var o=(e,s)=>w(e,"name",{value:s,configurable:!0});import{a7 as t,aa as A,x as y}from"./iframe-SD2JkkBx.js";import{u as j,g as z}from"./accountDataFetchers-B37ZW-_K.js";import{a as C}from"./inboxMenu-BAxNwmqh.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as I}from"./header-ID-6NjYt.js";import{s as _}from"./skipLink-a-xnxnVi.js";import{L as S}from"./Layout-BDt8b59D.js";import{b as l,S as f,u as R}from"./useAccountSelectorDemo-B8bpZKdX.js";import{u as U}from"./useLayout-QXw5Ya0g.js";import{a as D}from"./useLocale-CTV-FNfu.js";import{F as E}from"./Flex-BqyCauEo.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-Cel6HB35.js";import"./name-Dr5DH52l.js";import"./HeartFill-Bgg5VGzh.js";import"./InboxFill-B_-j2dv9.js";import"./Plus-6xBOzmi7.js";import"./PersonCircle-CboEv5N6.js";import"./Bookmark-D-9J-S2m.js";import"./Archive-D_jolVYJ.js";import"./Trash-CPezUXOI.js";import"./InformationSquare-CgIS3Fvj.js";import"./globalMenu-GkPccjNA.js";import"./Buildings2-B5kNdPhs.js";import"./MenuGrid-Cq_-kqfQ.js";import"./MagnifyingGlass-99de9OEC.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-Cwn8WHGQ.js";import"./CookieBanner-BkVqc6WW.js";import"./Heading-Bxu0IPlw.js";import"./useHighlightedText-BOE_uc-4.js";import"./Typography-DYbohGA0.js";import"./Link-BkAPZJG4.js";import"./Banner-Dk0A6VzB.js";import"./GlobalHeader-Bdc8Rgzj.js";import"./GlobalAccountButton-C-KOrR8o.js";import"./Avatar-ChkBInZc.js";import"./ChevronDown-ComuAOz9.js";import"./Enter-Cq5qF9Z6.js";import"./GlobalMenuButton-mxTpEkZX.js";import"./commonTexts-CG1mkCQM.js";import"./MenuHamburger-Wy7pQwlx.js";import"./Badge-BbMhpBgn.js";import"./Tooltip-CTbeRzRw.js";import"./ChevronUp-hnI_g5yp.js";import"./Dropdown-DNvFP9FV.js";import"./AccountSelector-Cop3lB5s.js";import"./SearchField-CtzaZVEy.js";import"./MenuListItem-D9pwYymO.js";import"./MenuListDivider-B9dhr0kB.js";import"./MenuItem-DtEaYpyr.js";import"./CheckboxUncheckedIcon-DpMW6Wp2.js";import"./RadioUncheckedIcon-tgX_k-4X.js";import"./ItemMedia-WgmEjgHK.js";import"./AvatarGroup-DfwMjEOK.js";import"./ItemLabel-BHU5o8nH.js";import"./ItemControls-CYQHXshs.js";import"./ChevronRight-N_DPzqc2.js";import"./FieldBase-BELwbvmB.js";import"./Field-C50xRSHN.js";import"./Label-BJSodJlT.js";import"./Input-Fr_9ZdVX.js";import"./useMenu-Bkg094iM.js";import"./Switch-D5l1sJVB.js";import"./AccountMenu-8QL85dEA.js";import"./GlobalMenu-wKMszXw_.js";import"./Checkmark-ChNJFaj8.js";import"./ArrowUndo-CXChIdxN.js";import"./Globe-B33k006i.js";import"./BreadcrumbsLink-Cu4BC189.js";import"./ArrowRight-DtY135Ug.js";import"./Footer-FuueFcLe.js";import"./useAccountMenu-BwmrOLiU.js";const no={title:"Layout/AccountSelector/In Layout",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
