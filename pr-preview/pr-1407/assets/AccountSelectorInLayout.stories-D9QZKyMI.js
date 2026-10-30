var j=Object.defineProperty;var o=(e,r)=>j(e,"name",{value:r,configurable:!0});import{a5 as s,a8 as i,w as F}from"./iframe-CmcSEjvS.js";import{u as T,g as z}from"./accountDataFetchers-D4DxHn0X.js";import{a as I}from"./inboxMenu-BjcQ3vqx.js";import{f as M}from"./footer-w2jkxXbY.js";import{h as O}from"./header-DJI56i4Y.js";import{s as E}from"./skipLink-a-xnxnVi.js";import{L as w}from"./Layout-CPXcIC8M.js";import{u as x}from"./useLayout-C2IQeh4D.js";import{a as P}from"./useLocale-CclKqTdY.js";import{F as R}from"./Flex-DEGiHBSh.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BjBT6U_c.js";import"./name-Dr5DH52l.js";import"./HeartFill-vDdmUGil.js";import"./InboxFill-DULM9wRD.js";import"./Plus-DVOeMTJ7.js";import"./PersonCircle-DdJu216P.js";import"./Bookmark-fmnCZLUz.js";import"./Archive-B4hgbdr3.js";import"./Trash-BCBK84Mw.js";import"./InformationSquare-6xY-3cyl.js";import"./globalMenu-D38oQQCP.js";import"./Buildings2-BSYY2HHr.js";import"./MenuGrid-jTVAZ9Ee.js";import"./MagnifyingGlass-C2kDbxXn.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-C3lmtsO4.js";import"./CookieBanner-C288A3qi.js";import"./Heading-vmMoflPs.js";import"./useHighlightedText-DJAL4JcK.js";import"./Typography-sASlV-kd.js";import"./Link-BjH1AWT3.js";import"./Banner-CREzkBEl.js";import"./GlobalHeader-DFDdUqbN.js";import"./GlobalAccountButton-DwtAY2mj.js";import"./Avatar-e7KasoHp.js";import"./ChevronDown-CI4G7sPT.js";import"./Enter-FbOIMnu2.js";import"./GlobalMenuButton-YT_8PTBw.js";import"./MenuHamburger-C5VZ8Cb8.js";import"./Badge-DDzGMVSy.js";import"./Tooltip-BzKHjYiv.js";import"./ChevronUp-DVy7WPfM.js";import"./Dropdown-BXdn9jDY.js";import"./AccountSelector-DJEPs5Gp.js";import"./SearchField-DQeX1ZYV.js";import"./MenuListItem-BL-id_u-.js";import"./MenuListHeading-BKPqFrC5.js";import"./MenuItem-BJhn9r_O.js";import"./CheckboxUncheckedIcon-BBoJFSSq.js";import"./RadioUncheckedIcon-VgJlolIv.js";import"./ItemMedia-BefRyocx.js";import"./AvatarGroup-CK0XwNSh.js";import"./ItemLabel-s_xPF5R8.js";import"./ItemControls-YGZP0Vjk.js";import"./ChevronRight-B5wtiA4y.js";import"./FieldBase-C-IkhlpM.js";import"./Field-00i3_VLV.js";import"./Label-C2oW91xs.js";import"./Input-C0nOO2ZR.js";import"./useMenu-C4pen0si.js";import"./MenuListDivider-wZXMjqHS.js";import"./Switch-DKqmfKoy.js";import"./AccountMenu-B1ePtIqN.js";import"./GlobalMenu-HlwMHmKy.js";import"./Checkmark-CgRfi7IM.js";import"./ArrowUndo-iwGs3R4E.js";import"./Globe-Ci7WMHae.js";import"./BreadcrumbsLink-B_SrXzGV.js";import"./ArrowRight-DrFP_GgV.js";import"./Footer-UbSvmezm.js";import"./useAccountMenu-CqdFGhFb.js";const at={title:"Layout/AccountSelector/In Layout",component:w,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
