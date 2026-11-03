var j=Object.defineProperty;var o=(e,r)=>j(e,"name",{value:r,configurable:!0});import{a5 as s,a8 as i,w as F}from"./iframe-C2TXN9Gt.js";import{u as T,g as z}from"./accountDataFetchers-CjmWb9WK.js";import{a as I}from"./inboxMenu-MaluVZt4.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as O}from"./header-DH8e45fB.js";import{s as E}from"./skipLink-a-xnxnVi.js";import{L as w}from"./Layout-Bvz-SivH.js";import{u as x}from"./useLayout-mlXmi5GU.js";import{a as P}from"./useLocale-CZZnsne7.js";import{F as R}from"./Flex-DqWQ_o-P.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-B9YQzkYM.js";import"./name-Dr5DH52l.js";import"./HeartFill-5Iq-Owvh.js";import"./InboxFill-DA4IkIM3.js";import"./Plus-B0fUlCfQ.js";import"./PersonCircle-CAys3UVy.js";import"./Bookmark-CvOGkY20.js";import"./Archive-DKeMOGZM.js";import"./Trash-DNndesK1.js";import"./InformationSquare-CbcqUQld.js";import"./globalMenu-DEiW7C3A.js";import"./Buildings2-Vha0c4GV.js";import"./MenuGrid-D41LCN_6.js";import"./MagnifyingGlass-yE6CRZNo.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-D9WHILnJ.js";import"./CookieBanner-CmYHFQbt.js";import"./Heading-DUZOSHF_.js";import"./useHighlightedText-rpsh5ryi.js";import"./Typography-DMeULRXh.js";import"./Link-CNf1JpN_.js";import"./Banner-BG5mY4Ol.js";import"./GlobalHeader-Dp7Me0N9.js";import"./GlobalAccountButton-B7erYIhQ.js";import"./Avatar-FtVJWfDO.js";import"./ChevronDown-5BC-Ndiq.js";import"./Enter-Dfwb13hO.js";import"./GlobalMenuButton-B13INuuG.js";import"./MenuHamburger-C2-afPRI.js";import"./Badge-BBkduo-x.js";import"./Tooltip-DGaFfrCO.js";import"./ChevronUp-JvKfy9Td.js";import"./Dropdown-ClxCQ_oE.js";import"./AccountSelector-B-CZ9esz.js";import"./SearchField-BhmsKdsU.js";import"./MenuListItem-BZm8a22V.js";import"./MenuListHeading-KNqUpgh4.js";import"./MenuItem-fN7KVjMo.js";import"./CheckboxUncheckedIcon-DbFdcG4a.js";import"./RadioUncheckedIcon-BGT6n-0U.js";import"./ItemMedia-DvL0nIvI.js";import"./AvatarGroup-Dp8bZnxk.js";import"./ItemLabel-zq6K58HK.js";import"./ItemControls-BNQjxOXY.js";import"./ChevronRight-B3qMZH3P.js";import"./FieldBase-RJLhkwbG.js";import"./Field-B9ILzcp7.js";import"./Label-C63o_NPU.js";import"./Input-DCxTW5af.js";import"./useMenu-PLj8_L9k.js";import"./MenuListDivider-DUsmtn09.js";import"./Switch-jEIAPBE0.js";import"./AccountMenu-CC-oiwXq.js";import"./GlobalMenu-CauoPyWU.js";import"./Checkmark-BMKDsWEg.js";import"./ArrowUndo-DzLQVWV6.js";import"./Globe-CL4kQMhG.js";import"./BreadcrumbsLink-DMdCkvNu.js";import"./ArrowRight-CvKeCsQH.js";import"./Footer-DbmN-9Bb.js";import"./useAccountMenu-CvxQy9VU.js";const at={title:"Layout/AccountSelector/In Layout",component:w,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
