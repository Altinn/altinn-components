var O=Object.defineProperty;var o=(e,r)=>O(e,"name",{value:r,configurable:!0});import{a7 as s,aa as i,x as w}from"./iframe-CW69B4-4.js";import{u as x,g as j}from"./accountDataFetchers-C3orVExf.js";import{a as z}from"./inboxMenu-CD6QTmo4.js";import{f as I}from"./footer-w2jkxXbY.js";import{h as E}from"./header-BEUfmFDv.js";import{s as M}from"./skipLink-a-xnxnVi.js";import{L as F}from"./Layout-B_7nyMPO.js";import{u as T}from"./useLayout-BLiDNBgr.js";import{a as P}from"./useLocale-CkCpj6ku.js";import{F as R}from"./Flex-CcbgemcX.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-DSB5VsnW.js";import"./name-Dr5DH52l.js";import"./HeartFill-DkooJKuR.js";import"./InboxFill-D5LTolsy.js";import"./Plus-BD6Fr9o4.js";import"./PersonCircle-ByGIkqCx.js";import"./Bookmark-LA0lxQXC.js";import"./Archive-DYq_SIX9.js";import"./Trash-D4e6x_o2.js";import"./InformationSquare-O6zrlrVZ.js";import"./globalMenu-GOiap1A2.js";import"./Buildings2-O1uq_JUr.js";import"./MenuGrid-CpQPQ3av.js";import"./MagnifyingGlass-JTPy69Hm.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-z1B9lV1q.js";import"./CookieBanner-CjygE0LW.js";import"./Heading-BlWFVsgQ.js";import"./useHighlightedText-Coh-oebD.js";import"./Typography-CD2WmtRN.js";import"./Banner-sDPlm4fb.js";import"./GlobalHeader-CRHYSdkx.js";import"./GlobalAccountButton-CVWw2o_g.js";import"./Avatar-DlTYOJ9X.js";import"./ChevronDown-CiTeIiQR.js";import"./Enter-BCK4qu55.js";import"./GlobalMenuButton-DOkB80LY.js";import"./MenuHamburger-CkzROnpS.js";import"./Badge-pUt1HWk8.js";import"./Tooltip-Bdo2x66E.js";import"./ChevronUp-BFUaosek.js";import"./Dropdown-DTxBcaKX.js";import"./AccountSelector-BQ9ON5Hs.js";import"./SearchField-LDFEPhQv.js";import"./MenuListItem-CMSm7sFe.js";import"./MenuListHeading-Cky4DZUO.js";import"./MenuItem-WxsEDNt-.js";import"./ItemMedia-zpQSTqxO.js";import"./AvatarGroup-C54_5QsB.js";import"./Checkmark-BGDDfT19.js";import"./ItemLabel-BOWUd3uk.js";import"./ItemControls-Dz-gOQFJ.js";import"./ChevronRight-CxFkThxw.js";import"./FieldBase-Cx7I1cae.js";import"./Field-rkOFbQMU.js";import"./Label-DMxT2wjQ.js";import"./Input-BNHnVUMY.js";import"./useMenu-bx75--uT.js";import"./MenuListDivider-C9vQ7MZ-.js";import"./Switch-D3R4G4XP.js";import"./AccountMenu-BU0exfrj.js";import"./GlobalMenu-G17RUCAu.js";import"./ArrowUndo-DP6Ao8AK.js";import"./Globe-CieDabaJ.js";import"./BreadcrumbsLink-BYR2umK4.js";import"./ArrowRight-DzvF-M15.js";import"./Footer-DSiwazAh.js";import"./useAccountMenu-Tymaw9nB.js";const rt={title:"Layout/AccountSelector/In Layout",component:F,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
selector behaves alongside the header, sidebar and global menu. The same
cases are available as standalone-component stories under Layout/AccountSelector.`}}},args:{theme:"subtle",skipLink:M,header:E,footer:I,sidebar:{menu:z},children:s.jsxs(R,{align:"center",justify:"center",style:{border:"1px dashed",width:"100%",height:"100%",gap:5},children:["Content",s.jsx("a",{href:"https://altinn.no",children:"with a focusable item"})]}),color:"company",forceOpenFullScreen:void 0},argTypes:{color:{control:"select",options:["company","neutral","person"]},forceOpenFullScreen:{control:"select",options:[!0,!1,void 0]}}},u="167536b5-f8ed-4c5a-8f48-0279507e53ae",k={partyUuid:u,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},N=o((e,r)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:r,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),"makeOrgParty"),A=o((e,r=0)=>{const c=Array.from({length:e-1},(l,n)=>N(n+1,n<r));return[k,...c]},"buildParties"),S=o(({args:e,parties:r})=>{const c=T(e),l=P({accountId:"diaspora"}),[n,f]=i.useState([]),[y,U]=i.useState(!0),[D,b]=i.useState(u),L=x({partyListDTO:r,favoriteAccountUuids:n,onToggleFavorite:o(t=>{f(a=>a.includes(t)?a.filter(v=>v!==t):[...a,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:D,onSelectAccount:o(t=>{b(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:y,onShowDeletedUnitsChange:o(t=>{U(t)},"onShowDeletedUnitsChange")});return s.jsx(w,{languageCode:"nb",children:s.jsx(F,{...e,...c,header:{...c.header,accountSelector:L,globalMenu:l},children:e.children})})},"AccountSelectorDemo"),d=o(e=>{const r=T(e),c=P({accountId:"diaspora"}),[l,n]=i.useState([]),[f,y]=i.useState(!1),[U,D]=i.useState(u),b=j(),L=x({partyListDTO:b,favoriteAccountUuids:l,onToggleFavorite:o(t=>{n(a=>a.includes(t)?a.filter(v=>v!==t):[...a,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:U,onSelectAccount:o(t=>{D(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:f,onShowDeletedUnitsChange:o(t=>{y(t)},"onShowDeletedUnitsChange")});return s.jsx(w,{languageCode:"nb",children:s.jsx(F,{...e,...r,header:{...r.header,accountSelector:L,globalMenu:c},children:e.children})})},"UsingUseAccountHook"),p=o(e=>s.jsx(S,{args:e,parties:A(3)}),"ThreeAccounts"),m=o(e=>s.jsx(S,{args:e,parties:A(4,1)}),"FourAccountsOneDeleted"),g=o(e=>s.jsx(S,{args:e,parties:A(6,3)}),"SixAccountsThreeDeleted"),h=o(e=>s.jsx(S,{args:e,parties:A(10)}),"TenAccountsNoneDeleted");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
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
