var j=Object.defineProperty;var o=(e,r)=>j(e,"name",{value:r,configurable:!0});import{a5 as s,a8 as i,w as F}from"./iframe-CQ8LzMHp.js";import{u as T,g as z}from"./accountDataFetchers-BAGxlr9v.js";import{a as I}from"./inboxMenu-9vGTqm-M.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as O}from"./header-DYeFlK_r.js";import{s as E}from"./skipLink-a-xnxnVi.js";import{L as w}from"./Layout-BsF1xh-T.js";import{u as x}from"./useLayout-CBLm1JcD.js";import{a as P}from"./useLocale-BYRPMExJ.js";import{F as R}from"./Flex-DjPJH1VJ.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-CXHmTJZE.js";import"./name-Dr5DH52l.js";import"./HeartFill-mxtM7vZy.js";import"./InboxFill-oIQcKaT9.js";import"./Plus-DLJWKiOB.js";import"./PersonCircle-DRVciM8o.js";import"./Bookmark-34xC8uML.js";import"./Archive-D8VT4iDx.js";import"./Trash-CygTswjF.js";import"./InformationSquare-BtVNFzkX.js";import"./globalMenu-B0pmFmwj.js";import"./Buildings2-mvrF0gIS.js";import"./MenuGrid-CbgwO7BS.js";import"./MagnifyingGlass-cYMoIKgd.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-BanEhnpy.js";import"./CookieBanner-4paMnb-c.js";import"./Heading-Bqh3Rpnn.js";import"./useHighlightedText-X_Pa7Sct.js";import"./Typography-C0hb-rov.js";import"./Link-CG_HcmyW.js";import"./Banner-Bvmc1q-k.js";import"./GlobalHeader-CZylxlLq.js";import"./GlobalAccountButton-BYezC4Lu.js";import"./Avatar-cvm5lBsk.js";import"./ChevronDown-BCthsF-h.js";import"./Enter-sjC3k3KF.js";import"./GlobalMenuButton-DKC_YNdX.js";import"./MenuHamburger-BaFe5b5h.js";import"./Badge-DUcHOS9Y.js";import"./Tooltip-Eed-mcd2.js";import"./ChevronUp-C1AG-Aka.js";import"./Dropdown-AuOHSehb.js";import"./AccountSelector-DwB-qXs_.js";import"./SearchField-0g3sCasv.js";import"./MenuListItem-BuDRebVM.js";import"./MenuListHeading-CsWBJhah.js";import"./MenuItem-DNZJHOTT.js";import"./CheckboxUncheckedIcon-DodbdVRp.js";import"./RadioUncheckedIcon-QGnejBkB.js";import"./ItemMedia-BTxysFbk.js";import"./AvatarGroup-DeE95cBJ.js";import"./ItemLabel-CgsktDzP.js";import"./ItemControls--xlpWt8t.js";import"./ChevronRight-ywpt7Pxk.js";import"./FieldBase-wKpsF2Qr.js";import"./Field-I35AXfO5.js";import"./Label-BS-vPhzZ.js";import"./Input-BKSTqttN.js";import"./useMenu-CDI-E8wX.js";import"./MenuListDivider-n9hRAznf.js";import"./Switch-DZyG9cIk.js";import"./AccountMenu-CoLX5g5p.js";import"./GlobalMenu-D3o8JZD4.js";import"./Checkmark-CgKKHBb_.js";import"./ArrowUndo-CXl7zYNM.js";import"./Globe-Zq2WYf14.js";import"./BreadcrumbsLink-C93ln5Ut.js";import"./ArrowRight-CCTsBz-f.js";import"./Footer-B09SsJSW.js";import"./useAccountMenu-PwCfdtN_.js";const at={title:"Layout/AccountSelector/In Layout",component:w,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
selector behaves alongside the header, sidebar and global menu. The same
cases are available as standalone-component stories under Layout/AccountSelector.`}}},args:{theme:"subtle",skipLink:E,header:O,footer:M,sidebar:{menu:I},children:s.jsxs(R,{align:"center",justify:"center",style:{border:"1px dashed",width:"100%",height:"100%",gap:5},children:["Content",s.jsx("a",{href:"https://altinn.no",children:"with a focusable item"})]}),color:"company",accountSelectionAsMain:void 0},argTypes:{color:{control:"select",options:["company","neutral","person"]},accountSelectionAsMain:{control:"select",options:[!0,!1,void 0]}}},u="167536b5-f8ed-4c5a-8f48-0279507e53ae",k={partyUuid:u,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},N=o((e,r)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:r,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),"makeOrgParty"),A=o((e,r=0)=>{const a=Array.from({length:e-1},(l,c)=>N(c+1,c<r));return[k,...a]},"buildParties"),S=o(({args:e,parties:r})=>{const a=x(e),l=P({accountId:"diaspora"}),[c,y]=i.useState([]),[f,U]=i.useState(!0),[D,b]=i.useState(u),L=T({partyListDTO:r,favoriteAccountUuids:c,onToggleFavorite:o(t=>{y(n=>n.includes(t)?n.filter(v=>v!==t):[...n,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:D,onSelectAccount:o(t=>{b(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:f,onShowDeletedUnitsChange:o(t=>{U(t)},"onShowDeletedUnitsChange")});return s.jsx(F,{languageCode:"nb",children:s.jsx(w,{...e,...a,header:{...a.header,accountSelector:L,globalMenu:l},children:e.children})})},"AccountSelectorDemo"),d=o(e=>{const r=x(e),a=P({accountId:"diaspora"}),[l,c]=i.useState([]),[y,f]=i.useState(!1),[U,D]=i.useState(u),b=z(),L=T({partyListDTO:b,favoriteAccountUuids:l,onToggleFavorite:o(t=>{c(n=>n.includes(t)?n.filter(v=>v!==t):[...n,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:U,onSelectAccount:o(t=>{D(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:y,onShowDeletedUnitsChange:o(t=>{f(t)},"onShowDeletedUnitsChange")});return s.jsx(F,{languageCode:"nb",children:s.jsx(w,{...e,...r,header:{...r.header,accountSelector:L,globalMenu:a},children:e.children})})},"UsingUseAccountHook"),p=o(e=>s.jsx(S,{args:e,parties:A(3)}),"ThreeAccounts"),m=o(e=>s.jsx(S,{args:e,parties:A(4,1)}),"FourAccountsOneDeleted"),g=o(e=>s.jsx(S,{args:e,parties:A(6,3)}),"SixAccountsThreeDeleted"),h=o(e=>s.jsx(S,{args:e,parties:A(10)}),"TenAccountsNoneDeleted"),ct=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });

  // Use the useAccountSelector hook to get account menu and loading state
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(false); // Get actual value from user profile
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(SELF_UUID);
  const authorizedParties = getAuthorizedPartiesData(); // Fetch your authorized parties data from external source
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids(prev => prev.includes(uuid) ? prev.filter(id => id !== uuid) : [...prev, uuid]);
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid: SELF_UUID,
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...h.parameters?.docs?.source}}};export{m as FourAccountsOneDeleted,g as SixAccountsThreeDeleted,h as TenAccountsNoneDeleted,p as ThreeAccounts,d as UsingUseAccountHook,ct as __namedExportsOrder,at as default};
