var O=Object.defineProperty;var o=(e,r)=>O(e,"name",{value:r,configurable:!0});import{a7 as s,aa as i,x as w}from"./iframe-CHdTRX1S.js";import{u as x,g as j}from"./accountDataFetchers-BBBNOfAQ.js";import{a as z}from"./inboxMenu-KfkU6khE.js";import{f as I}from"./footer-w2jkxXbY.js";import{h as E}from"./header-CZ4ZfOMj.js";import{s as M}from"./skipLink-a-xnxnVi.js";import{L as F}from"./Layout-BAdKeMc2.js";import{u as T}from"./useLayout-BlF0Rd2f.js";import{a as P}from"./useLocale-h146CYdR.js";import{F as R}from"./Flex-BzRwEaeD.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BkKeRcUN.js";import"./name-Dr5DH52l.js";import"./HeartFill-C8CDMWke.js";import"./InboxFill-CSEqyTOi.js";import"./Plus-XpG4Dc8n.js";import"./PersonCircle-D6EWv42v.js";import"./Bookmark-CLGLjDoM.js";import"./Archive-DTcxNWPK.js";import"./Trash-j20aQRbZ.js";import"./InformationSquare-B7p_A_2X.js";import"./globalMenu-DPikLiik.js";import"./Buildings2-CyFQwsFF.js";import"./MenuGrid-B8l_elR-.js";import"./MagnifyingGlass-DoQnYB7U.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-BGR3gUHZ.js";import"./CookieBanner-EX49xoo3.js";import"./Heading-CWEvYxPf.js";import"./useHighlightedText-HQpCSNf5.js";import"./Typography-6g7ttECm.js";import"./Link-CgqRBP1_.js";import"./Banner-bPhDqDex.js";import"./GlobalHeader-BvkS7HKk.js";import"./GlobalAccountButton-eIHSniiH.js";import"./Avatar-BgVv4jsI.js";import"./ChevronDown-BTY70Kvu.js";import"./Enter-CqcCQCxA.js";import"./GlobalMenuButton-B6AJMXt4.js";import"./MenuHamburger-DGqoRL5Z.js";import"./Badge-ZdmE6gaR.js";import"./Tooltip-CYLMyUyD.js";import"./ChevronUp-Bc1dDmk3.js";import"./Dropdown-lGfq8dlC.js";import"./AccountSelector-DGdQw3BV.js";import"./SearchField-CHvi1Rr9.js";import"./MenuListItem-BuMUeh0I.js";import"./MenuListHeading-BF6vRJ1G.js";import"./MenuItem-C43FNrfh.js";import"./ItemMedia-BQC5N1RJ.js";import"./AvatarGroup-C6qZoOIR.js";import"./Checkmark-BvCukKJy.js";import"./ItemLabel-BnULnKGe.js";import"./ItemControls-D53PO9xK.js";import"./ChevronRight-h2GXZqhR.js";import"./FieldBase-CkHB3870.js";import"./Field-8ZiKnfLQ.js";import"./Label-CJ7sG7Qi.js";import"./Input-CiIWWSBU.js";import"./useMenu-erQCXILL.js";import"./MenuListDivider-tQrfQ--u.js";import"./Switch-DlUvEvai.js";import"./AccountMenu-C_aIb6mU.js";import"./GlobalMenu-eyIbcXM5.js";import"./ArrowUndo-BxOUoQQA.js";import"./Globe-KQBmjpCv.js";import"./BreadcrumbsLink-aESNMqqg.js";import"./ArrowRight-DVUtDFtL.js";import"./Footer-Dvv8b_dg.js";import"./useAccountMenu-BqnsyJWo.js";const st={title:"Layout/AccountSelector/In Layout",component:F,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...h.parameters?.docs?.source}}};const at=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];export{m as FourAccountsOneDeleted,g as SixAccountsThreeDeleted,h as TenAccountsNoneDeleted,p as ThreeAccounts,d as UsingUseAccountHook,at as __namedExportsOrder,st as default};
