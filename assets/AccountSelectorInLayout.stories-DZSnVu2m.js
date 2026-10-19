var O=Object.defineProperty;var o=(e,r)=>O(e,"name",{value:r,configurable:!0});import{a7 as s,aa as i,x as w}from"./iframe-BhbNl8M-.js";import{u as x,g as j}from"./accountDataFetchers-DyyjmHcG.js";import{a as z}from"./inboxMenu-wxxAzzfg.js";import{f as I}from"./footer-w2jkxXbY.js";import{h as E}from"./header-oVTgoXh6.js";import{s as M}from"./skipLink-a-xnxnVi.js";import{L as F}from"./Layout-Bi2sLomB.js";import{u as T}from"./useLayout-CRL-o6CO.js";import{a as P}from"./useLocale-4qyXxddG.js";import{F as R}from"./Flex-ywhhAUvJ.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-CoNfvEt7.js";import"./name-Dr5DH52l.js";import"./HeartFill-DKoAVF2-.js";import"./InboxFill-C-Gznw1O.js";import"./Plus-BcmDIJkz.js";import"./PersonCircle-CSh1iTk6.js";import"./Bookmark-fWw4PRdh.js";import"./Archive-CfOkFSG4.js";import"./Trash-Df4Pkq18.js";import"./InformationSquare-9qL3pT6L.js";import"./globalMenu-DLp0UzhL.js";import"./Buildings2-4YKnHmoY.js";import"./MenuGrid-DTjxVVPA.js";import"./MagnifyingGlass-CzKquxqQ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-q81YSldO.js";import"./CookieBanner-CKCrzmx7.js";import"./Heading-Cykhux0L.js";import"./useHighlightedText-LhTntwcL.js";import"./Typography-DcyIPmTi.js";import"./Banner-BMb1L36s.js";import"./GlobalHeader-CSzpOvf-.js";import"./GlobalAccountButton-DJLFYXlr.js";import"./Avatar-BNyDKZi7.js";import"./ChevronDown-FDOS9kby.js";import"./Enter-DgJZC0JW.js";import"./GlobalMenuButton-CQFUYfha.js";import"./MenuHamburger-DEHtIGqF.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./ChevronUp-Dq4__2Sc.js";import"./Dropdown--p27U_G_.js";import"./AccountSelector-Bq_sOzpk.js";import"./SearchField-ClYBiZmS.js";import"./FieldBase--SCvu2WQ.js";import"./Field-Qg24LC8p.js";import"./Label-BJPwmzpN.js";import"./Input-jGspNcB3.js";import"./useMenu-6KerkDf-.js";import"./MenuListItem-CmOECRgU.js";import"./MenuListDivider-DzxdVQ89.js";import"./MenuListHeading-DAQ9yky2.js";import"./MenuItem-C2AE0J9V.js";import"./ItemMedia-1lh8-vEh.js";import"./AvatarGroup-B4pMcHMh.js";import"./Checkmark-CzAA5vNN.js";import"./ItemLabel-BJSi7rzf.js";import"./ItemControls-Enh4UL9O.js";import"./ChevronRight-DG59p-Nv.js";import"./Switch-HPZGYIQM.js";import"./AccountMenu-C1XnEBmu.js";import"./GlobalMenu-Sj7JrfLA.js";import"./ArrowUndo-D9tJ-Erq.js";import"./Globe-DCB48zAy.js";import"./BreadcrumbsLink-lneiUb_j.js";import"./ArrowRight-40scby1E.js";import"./Footer-DQFb1BdE.js";import"./useAccountMenu-CB1eDk4k.js";const rt={title:"Layout/AccountSelector/In Layout",component:F,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
