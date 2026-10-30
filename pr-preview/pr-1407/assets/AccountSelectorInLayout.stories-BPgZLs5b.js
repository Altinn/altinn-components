var j=Object.defineProperty;var o=(e,r)=>j(e,"name",{value:r,configurable:!0});import{a5 as s,a8 as i,w as F}from"./iframe-k-5ppgch.js";import{u as T,g as z}from"./accountDataFetchers-Cqrc3kkL.js";import{a as I}from"./inboxMenu-CBnjos4M.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as O}from"./header-BaYHS0E4.js";import{s as E}from"./skipLink-a-xnxnVi.js";import{L as w}from"./Layout-DEaVutfL.js";import{u as x}from"./useLayout-B3wJna8x.js";import{a as P}from"./useLocale-EftIacJ8.js";import{F as R}from"./Flex-DfG9uaWh.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BKfbiGbl.js";import"./name-Dr5DH52l.js";import"./HeartFill-CACTuZAo.js";import"./InboxFill-kSVolaGe.js";import"./Plus-BfzF3o2K.js";import"./PersonCircle-DCYTUj1x.js";import"./Bookmark-DBlnZUpd.js";import"./Archive-mZAeZsrq.js";import"./Trash-D-Jav_7z.js";import"./InformationSquare-C8JQXppp.js";import"./globalMenu-CO675N6U.js";import"./Buildings2-BK3EZ0ZK.js";import"./MenuGrid-CP9p0DZ8.js";import"./MagnifyingGlass-B6a_F1T2.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-jAF_koBc.js";import"./CookieBanner-y5xuM2-F.js";import"./Heading-DFDwpHPM.js";import"./useHighlightedText-DchtrGpj.js";import"./Typography-CYRWqnkB.js";import"./Link-D3USK1B-.js";import"./Banner-Bhw_pIWR.js";import"./GlobalHeader-C2pwYy4F.js";import"./GlobalAccountButton-DvMbKPo6.js";import"./Avatar-Bkj70cv6.js";import"./ChevronDown-l3Tycs4Q.js";import"./Enter-DygFgs-7.js";import"./GlobalMenuButton-lXuJLn7R.js";import"./MenuHamburger-Bo7vD2QW.js";import"./Badge-GfdRI08Y.js";import"./Tooltip-tkuEOqTN.js";import"./ChevronUp-gL_c1moU.js";import"./Dropdown-CPtynmaA.js";import"./AccountSelector-CaKr1Ruk.js";import"./SearchField-BRPq9oj8.js";import"./MenuListItem-NGcm-BoJ.js";import"./MenuListHeading-DOGIQowl.js";import"./MenuItem-BXSsa0TG.js";import"./CheckboxUncheckedIcon-427e4rUe.js";import"./RadioUncheckedIcon-DLopOulv.js";import"./ItemMedia-DxNh8EKr.js";import"./AvatarGroup-CF7XuR93.js";import"./ItemLabel-D5iTgQt_.js";import"./ItemControls-ByMwyA6J.js";import"./ChevronRight-CDNE03o8.js";import"./FieldBase-CXS3Sevu.js";import"./Field-BTpPk25O.js";import"./Label-D-n8lPTZ.js";import"./Input-fDrubqKv.js";import"./useMenu-DQYhP48A.js";import"./MenuListDivider-BXcHHiOJ.js";import"./Switch-Dxi_T-X1.js";import"./AccountMenu-Cczy76kt.js";import"./GlobalMenu-rI0p574d.js";import"./Checkmark-F2mBpe6M.js";import"./ArrowUndo-B3MWpO9H.js";import"./Globe-CPlScfnn.js";import"./BreadcrumbsLink-DlHMKow1.js";import"./ArrowRight-B0kRBzSw.js";import"./Footer-B5aadUGx.js";import"./useAccountMenu-CSWmAgnW.js";const at={title:"Layout/AccountSelector/In Layout",component:w,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
