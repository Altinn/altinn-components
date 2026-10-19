var O=Object.defineProperty;var o=(e,r)=>O(e,"name",{value:r,configurable:!0});import{a7 as s,aa as i,x as w}from"./iframe-uBWg0zsp.js";import{u as x,g as j}from"./accountDataFetchers-CL8sFYYo.js";import{a as z}from"./inboxMenu-D49pmuwh.js";import{f as I}from"./footer-w2jkxXbY.js";import{h as E}from"./header-CSxOLC7g.js";import{s as M}from"./skipLink-a-xnxnVi.js";import{L as F}from"./Layout-DZANu_Hh.js";import{u as T}from"./useLayout-CiIuMPZ2.js";import{a as P}from"./useLocale-beZubcQW.js";import{F as R}from"./Flex-DndVrHjj.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-DcTRZ5ZT.js";import"./name-Dr5DH52l.js";import"./HeartFill-BqDYZsQS.js";import"./InboxFill-DkiEshJB.js";import"./Plus-BMtrBUYo.js";import"./PersonCircle-Pj1-lGjF.js";import"./Bookmark-DYks1yWn.js";import"./Archive-CUWUpWB2.js";import"./Trash-C1BuSK8u.js";import"./InformationSquare-D-wVMUGu.js";import"./globalMenu-BSFVfjx8.js";import"./Buildings2-BFEb8cPA.js";import"./MenuGrid-CTVAN0SB.js";import"./MagnifyingGlass-BtelB3DZ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-DgpJ_2v3.js";import"./CookieBanner-BjYHKuiX.js";import"./Heading-B2wyz-tz.js";import"./useHighlightedText-SyZl2q2q.js";import"./Typography-nYxE8-3g.js";import"./Banner-BfHzf1w4.js";import"./GlobalHeader-D5vHX9No.js";import"./GlobalAccountButton-Drtkc2-N.js";import"./Avatar-B2zjqVbH.js";import"./ChevronDown-DVkqLj7d.js";import"./Enter-DhpyhqgF.js";import"./GlobalMenuButton-DMNOqqY2.js";import"./MenuHamburger-mpc9gk08.js";import"./Badge-DNaQuN8i.js";import"./Tooltip-wSNkhPxH.js";import"./ChevronUp-BLeJynbN.js";import"./Dropdown-xncsPjss.js";import"./AccountSelector-CGZQPmIW.js";import"./SearchField-CiFTLXk1.js";import"./FieldBase-Bze69qIO.js";import"./Field-CRhxlWe8.js";import"./Label-BasS1jKP.js";import"./Input-BX-kD412.js";import"./useMenu-CXJ-cLkO.js";import"./MenuListItem-CF8uHASG.js";import"./MenuListDivider-Dqpo6I2q.js";import"./MenuListHeading-BKTLR-s3.js";import"./MenuItem-SLuK_1Or.js";import"./ItemMedia-DYHGe3r3.js";import"./AvatarGroup-X4pMTDtc.js";import"./Checkmark-BMATBI43.js";import"./ItemLabel-BpKks5h0.js";import"./ItemControls-D7ku9ps1.js";import"./ChevronRight-Ci7fQup2.js";import"./Switch-dVR22df8.js";import"./AccountMenu-N2jjgUvV.js";import"./GlobalMenu-Bb3b-FRJ.js";import"./ArrowUndo--sIB0AY5.js";import"./Globe-BL8S-NB7.js";import"./BreadcrumbsLink-CxH1qZz5.js";import"./ArrowRight-DsN3MKzI.js";import"./Footer-DRDgkYE3.js";import"./useAccountMenu-BWodzjgl.js";const rt={title:"Layout/AccountSelector/In Layout",component:F,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
