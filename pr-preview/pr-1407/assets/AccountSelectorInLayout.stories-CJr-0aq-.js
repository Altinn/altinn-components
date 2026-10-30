var j=Object.defineProperty;var o=(e,r)=>j(e,"name",{value:r,configurable:!0});import{a5 as s,a8 as i,w as F}from"./iframe-BenRi1VF.js";import{u as T,g as z}from"./accountDataFetchers-CjYQSgJZ.js";import{a as I}from"./inboxMenu-CuyjRMwL.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as O}from"./header-I_IXxagU.js";import{s as E}from"./skipLink-a-xnxnVi.js";import{L as w}from"./Layout-BaFIQMFl.js";import{u as x}from"./useLayout-Ua9JaOwq.js";import{a as P}from"./useLocale-B2mFAGLn.js";import{F as R}from"./Flex-BtqRQeFd.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-Dbk7V61U.js";import"./name-Dr5DH52l.js";import"./HeartFill-BiG4BtDc.js";import"./InboxFill-2n72cNpU.js";import"./Plus-EZwUhJBV.js";import"./PersonCircle-eQSZhDRX.js";import"./Bookmark-DCMqXbS5.js";import"./Archive-BQnOimYU.js";import"./Trash-D1ucPBDs.js";import"./InformationSquare-g2viFsxF.js";import"./globalMenu-D-PvPRnc.js";import"./Buildings2-C5awSUTB.js";import"./MenuGrid-nVArCUlQ.js";import"./MagnifyingGlass-DuDF4CwQ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-9tkRb9KF.js";import"./CookieBanner-BI95DtPT.js";import"./Heading-kdzgZTGG.js";import"./useHighlightedText-lRrcJCDS.js";import"./Typography-CY6bfOBd.js";import"./Link-Da3i2jr6.js";import"./Banner-BU1fzH68.js";import"./GlobalHeader-C_LFs9_B.js";import"./GlobalAccountButton-CVgp1u6R.js";import"./Avatar-DXBUAkUc.js";import"./ChevronDown-CnLj0wQZ.js";import"./Enter-BTbdLEvm.js";import"./GlobalMenuButton-BYMAxANz.js";import"./MenuHamburger-ByVQVVUg.js";import"./Badge-3MbQAaWj.js";import"./Tooltip-BQW8S8Bj.js";import"./ChevronUp-BbUZTqMr.js";import"./Dropdown-CC6-2lKu.js";import"./AccountSelector-BlVpD02u.js";import"./SearchField-BPBX14Ku.js";import"./MenuListItem-B2_-lc8x.js";import"./MenuListHeading-BcNWVjjO.js";import"./MenuItem-BzrbgLmX.js";import"./CheckboxUncheckedIcon-DGOw9jdP.js";import"./RadioUncheckedIcon-BIRg52Rg.js";import"./ItemMedia-BMPM4W1l.js";import"./AvatarGroup-BAohrV6V.js";import"./ItemLabel-lIFyccob.js";import"./ItemControls-C62YDQLR.js";import"./ChevronRight-B0Rwz_dW.js";import"./FieldBase-Blf3tEjx.js";import"./Field-C3B81q5y.js";import"./Label-Dp2L8TH9.js";import"./Input-CYuEMmfW.js";import"./useMenu-DrYFOky6.js";import"./MenuListDivider-v6fvRPAn.js";import"./Switch-D8Udb4vC.js";import"./AccountMenu-jsP8YXhm.js";import"./GlobalMenu-DAsIO-EP.js";import"./Checkmark-Dysfm6au.js";import"./ArrowUndo-CMj0IFjQ.js";import"./Globe-DUdAh6-W.js";import"./BreadcrumbsLink-BYA8JUuU.js";import"./ArrowRight-C2GQq3jg.js";import"./Footer-CzHwnD-6.js";import"./useAccountMenu-DCsLG7gJ.js";const at={title:"Layout/AccountSelector/In Layout",component:w,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
