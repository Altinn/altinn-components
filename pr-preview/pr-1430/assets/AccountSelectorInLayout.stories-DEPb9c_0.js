var j=Object.defineProperty;var o=(e,r)=>j(e,"name",{value:r,configurable:!0});import{a7 as s,aa as i,x}from"./iframe-Bv9y2YZF.js";import{u as F,g as z}from"./accountDataFetchers-Bw8AEyU6.js";import{a as I}from"./inboxMenu-CGe_wBEL.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as O}from"./header-C_6SnzN5.js";import{s as E}from"./skipLink-a-xnxnVi.js";import{L as w}from"./Layout-C3QQC_y6.js";import{u as T}from"./useLayout-3E5lnQHy.js";import{a as P}from"./useLocale--rMGF6-r.js";import{F as R}from"./Flex-k0HwcErc.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-DtqNBB9o.js";import"./name-Dr5DH52l.js";import"./HeartFill-DXgvfbND.js";import"./InboxFill-BWUP4o7z.js";import"./Plus-vOPLkYgp.js";import"./PersonCircle-BAfZY-GC.js";import"./Bookmark-CxxANetE.js";import"./Archive-BZe-TlAS.js";import"./Trash-D9cqJvdS.js";import"./InformationSquare-BoyRK6zF.js";import"./globalMenu-C_P803DG.js";import"./Buildings2-BeaWmSSV.js";import"./MenuGrid-NBrgBJaj.js";import"./MagnifyingGlass-rds0MzVJ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-Bt2A0zmA.js";import"./CookieBanner-x3DERLN8.js";import"./Heading-CDZ3_iYV.js";import"./useHighlightedText-B3SRW8uR.js";import"./Typography-AZvc429m.js";import"./Banner-DbqK-nbR.js";import"./GlobalHeader-OeFPbV6D.js";import"./GlobalAccountButton-qZohFw4c.js";import"./Avatar-CJwf9igj.js";import"./ChevronDown-CAvQitey.js";import"./Enter-Dh8Hm6Mk.js";import"./GlobalMenuButton-CkOoAgh5.js";import"./MenuHamburger-Rv0EpLGA.js";import"./Badge-PIp_WKNx.js";import"./Tooltip-DATtufsq.js";import"./ChevronUp-5Z-Nijsh.js";import"./Dropdown-DQyu8KYK.js";import"./AccountSelector-nBuOEX0t.js";import"./SearchField-Bk5qe-oT.js";import"./FieldBase-qKDj-2_C.js";import"./Field-T8_evT5x.js";import"./Label-O9M7TqIt.js";import"./Input-C95LaLCm.js";import"./useMenu-B94lF56c.js";import"./MenuListItem-DxCoBxPm.js";import"./MenuListDivider-LPYMn92M.js";import"./MenuListHeading--KYKPYxZ.js";import"./MenuItem-CWh5VY2j.js";import"./ItemMedia-DqG5JuI7.js";import"./AvatarGroup-DorKIyuC.js";import"./Checkmark-CwfUY960.js";import"./ItemLabel-grT0gHhk.js";import"./ItemControls-DeEkLGNj.js";import"./ChevronRight-B_ztNHmN.js";import"./Switch-CK1DZ9-L.js";import"./AccountMenu-B46jN_aJ.js";import"./GlobalMenu-C_1726fk.js";import"./ArrowUndo-BFPX-Hsc.js";import"./Globe-BL4BJF4r.js";import"./BreadcrumbsLink-9dv1Pynw.js";import"./ArrowRight-CkweDtTF.js";import"./Footer-CO8r1KiX.js";import"./useAccountMenu-C7IrRYos.js";const rt={title:"Layout/AccountSelector/In Layout",component:w,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
