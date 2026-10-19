var j=Object.defineProperty;var o=(e,r)=>j(e,"name",{value:r,configurable:!0});import{a7 as s,aa as i,x}from"./iframe-C7zNVDTT.js";import{u as F,g as z}from"./accountDataFetchers-DdXN4vVa.js";import{a as I}from"./inboxMenu-CqoxX1yJ.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as O}from"./header-CDpjXX52.js";import{s as E}from"./skipLink-a-xnxnVi.js";import{L as w}from"./Layout-Bm3GWiKE.js";import{u as T}from"./useLayout-lbzwA2xj.js";import{a as P}from"./useLocale-C47f_wVY.js";import{F as R}from"./Flex-CVxm3AId.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-DvOzZNPR.js";import"./name-Dr5DH52l.js";import"./HeartFill-Be15i5fa.js";import"./InboxFill-C72yjiaX.js";import"./Plus-D2iqct3P.js";import"./PersonCircle-Dtb1J2KT.js";import"./Bookmark-DMj8vedD.js";import"./Archive-k3j1nRib.js";import"./Trash-DXsDcsqv.js";import"./InformationSquare-BvDWZ3oM.js";import"./globalMenu-DZwWJtIL.js";import"./Buildings2-C52yfc6A.js";import"./MenuGrid-BCmbKjow.js";import"./MagnifyingGlass-D6hMH6h9.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-bYGbYPzo.js";import"./CookieBanner-BmiFJVUa.js";import"./Heading-gv6s55oV.js";import"./useHighlightedText-CLjqXK08.js";import"./Typography-4gq5i4xU.js";import"./Banner-rY54sJaF.js";import"./GlobalHeader-BtYj7AEn.js";import"./GlobalAccountButton-DfGs1d0C.js";import"./Avatar-BME3B1PP.js";import"./ChevronDown-wiRxhmw3.js";import"./Enter-D72Fb-f9.js";import"./GlobalMenuButton-CItGckp8.js";import"./MenuHamburger-PG0UCurc.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./ChevronUp-wuByUJN5.js";import"./Dropdown-ONE2NNEY.js";import"./AccountSelector-Lplja8Da.js";import"./SearchField-DGzlCViu.js";import"./FieldBase-CRVXDoio.js";import"./Field-C_oHAtV1.js";import"./Label-CAjho_cW.js";import"./Input-CFKt0A_s.js";import"./useMenu-CRscwWGI.js";import"./MenuListItem-BTzpN6s4.js";import"./MenuListDivider-DPPFUY5F.js";import"./MenuListHeading-DE-GHA8Q.js";import"./MenuItem-BFxBNv1B.js";import"./ItemMedia-89sj9-D5.js";import"./AvatarGroup-nzaSXphj.js";import"./Checkmark-BpQLEI_t.js";import"./ItemLabel-BTO4WUhi.js";import"./ItemControls-CUub_53H.js";import"./ChevronRight-DIApXsrk.js";import"./Switch-BTuJol9o.js";import"./AccountMenu-3SdWfky9.js";import"./GlobalMenu-Cw9Lq0Ju.js";import"./ArrowUndo-nuZh3Ffr.js";import"./Globe-CqKzv9dh.js";import"./BreadcrumbsLink-CLjQgSHD.js";import"./ArrowRight-Bp2_CMNo.js";import"./Footer-BXZRNiiV.js";import"./useAccountMenu-uA8btcNE.js";const rt={title:"Layout/AccountSelector/In Layout",component:w,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
selector behaves alongside the header, sidebar and global menu. The same
cases are available as standalone-component stories under Layout/AccountSelector.`}}},args:{theme:"subtle",skipLink:E,header:O,footer:M,sidebar:{menu:I},children:s.jsxs(R,{align:"center",justify:"center",style:{border:"1px dashed",width:"100%",height:"100%",gap:5},children:["Content",s.jsx("a",{href:"https://altinn.no",children:"with a focusable item"})]}),color:"company",accountSelectionAsMain:void 0},argTypes:{color:{control:"select",options:["company","neutral","person"]},accountSelectionAsMain:{control:"select",options:[!0,!1,void 0]}}},u="167536b5-f8ed-4c5a-8f48-0279507e53ae",k={partyUuid:u,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},N=o((e,r)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:r,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),"makeOrgParty"),A=o((e,r=0)=>{const c=Array.from({length:e-1},(l,n)=>N(n+1,n<r));return[k,...c]},"buildParties"),S=o(({args:e,parties:r})=>{const c=T(e),l=P({accountId:"diaspora"}),[n,y]=i.useState([]),[f,U]=i.useState(!0),[D,b]=i.useState(u),L=F({partyListDTO:r,favoriteAccountUuids:n,onToggleFavorite:o(t=>{y(a=>a.includes(t)?a.filter(v=>v!==t):[...a,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:D,onSelectAccount:o(t=>{b(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:f,onShowDeletedUnitsChange:o(t=>{U(t)},"onShowDeletedUnitsChange")});return s.jsx(x,{languageCode:"nb",children:s.jsx(w,{...e,...c,header:{...c.header,accountSelector:L,globalMenu:l},children:e.children})})},"AccountSelectorDemo"),d=o(e=>{const r=T(e),c=P({accountId:"diaspora"}),[l,n]=i.useState([]),[y,f]=i.useState(!1),[U,D]=i.useState(u),b=z(),L=F({partyListDTO:b,favoriteAccountUuids:l,onToggleFavorite:o(t=>{n(a=>a.includes(t)?a.filter(v=>v!==t):[...a,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:U,onSelectAccount:o(t=>{D(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:y,onShowDeletedUnitsChange:o(t=>{f(t)},"onShowDeletedUnitsChange")});return s.jsx(x,{languageCode:"nb",children:s.jsx(w,{...e,...r,header:{...r.header,accountSelector:L,globalMenu:c},children:e.children})})},"UsingUseAccountHook"),p=o(e=>s.jsx(S,{args:e,parties:A(3)}),"ThreeAccounts"),m=o(e=>s.jsx(S,{args:e,parties:A(4,1)}),"FourAccountsOneDeleted"),g=o(e=>s.jsx(S,{args:e,parties:A(6,3)}),"SixAccountsThreeDeleted"),h=o(e=>s.jsx(S,{args:e,parties:A(10)}),"TenAccountsNoneDeleted");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...h.parameters?.docs?.source}}};const st=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];export{m as FourAccountsOneDeleted,g as SixAccountsThreeDeleted,h as TenAccountsNoneDeleted,p as ThreeAccounts,d as UsingUseAccountHook,st as __namedExportsOrder,rt as default};
