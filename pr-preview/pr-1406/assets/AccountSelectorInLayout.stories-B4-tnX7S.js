import{a7 as o,aa as n,x as F}from"./iframe-CH8mgD3C.js";import{u as w,g as C}from"./accountDataFetchers-DXsD_idj.js";import{a as O}from"./inboxMenu-Bz20Hiq0.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-trUjiQcx.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-BOzR4hEv.js";import{u as x}from"./useLayout-ahXDbfGe.js";import{a as T}from"./useLocale-C5jN0Mjc.js";import{F as E}from"./Flex-f5LhVaqN.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-yZuWpI0r.js";import"./name-DC2ocV39.js";import"./HeartFill-kUwQNS9y.js";import"./InboxFill-DDP75Wdr.js";import"./Plus-OvBsSWIf.js";import"./PersonCircle-DOtiN3WO.js";import"./Bookmark-BrYxV1oH.js";import"./Archive-O5mpBRtM.js";import"./Trash-BAAoSTtu.js";import"./InformationSquare-Dm8hsCNK.js";import"./globalMenu-B0yX5bgW.js";import"./Buildings2-C_eOnXb4.js";import"./MenuGrid-BKj9o5wt.js";import"./MagnifyingGlass-BnEAksKO.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-71KCplzA.js";import"./CookieBanner-C7jEkkAH.js";import"./Heading-Yz0Kaix4.js";import"./useHighlightedText-B_wEJ_uI.js";import"./Typography-ClkFzU7o.js";import"./Banner-GE6f-K6T.js";import"./GlobalHeader-CyVwwBdQ.js";import"./GlobalAccountButton-BkrEb-fP.js";import"./Avatar-DpRxDHCs.js";import"./ChevronDown-Cn-stDPP.js";import"./Enter-nR_uMI8e.js";import"./GlobalMenuButton-CLHfKO0X.js";import"./MenuHamburger-31PylNbM.js";import"./Badge-CSoF9iVN.js";import"./Tooltip-CT6ipS0w.js";import"./ChevronUp-BTM5yc0u.js";import"./Dropdown-D9qzdFMY.js";import"./AccountSelector-CAnGzmSM.js";import"./SearchField-UH995Up-.js";import"./FieldBase-D9urOdyW.js";import"./Field-Dls_LVcA.js";import"./Label-CqTyDT0V.js";import"./Input-Sz2FhcYy.js";import"./useMenu-BlkNFW_W.js";import"./MenuListItem-dmpcOffB.js";import"./MenuListDivider-Dpg_gFHI.js";import"./MenuListHeading-Bwq8QFZh.js";import"./MenuItem-B2UgnfYQ.js";import"./ItemMedia-BK3BNMj0.js";import"./AvatarGroup-B9kdZ47G.js";import"./Checkmark-BQdUfCkA.js";import"./ItemLabel-DGIpgk0p.js";import"./ItemControls-dstWsIeL.js";import"./ChevronRight-CQGN_WtL.js";import"./Switch-sgpnl_WC.js";import"./AccountMenu-0MdarHIi.js";import"./GlobalMenu-OXov9hzk.js";import"./ArrowUndo-CjwPyzKk.js";import"./Globe-MreKg2lO.js";import"./BreadcrumbsLink-BhxLV-hv.js";import"./ArrowRight-C0Td8hNJ.js";import"./Footer-BubM0sCM.js";import"./useAccountMenu-DRAn8kE8.js";const et={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
selector behaves alongside the header, sidebar and global menu. The same
cases are available as standalone-component stories under Layout/AccountSelector.`}}},args:{theme:"subtle",skipLink:I,header:z,footer:j,sidebar:{menu:O},children:o.jsxs(E,{align:"center",justify:"center",style:{border:"1px dashed",width:"100%",height:"100%",gap:5},children:["Content",o.jsx("a",{href:"https://altinn.no",children:"with a focusable item"})]}),color:"company",forceOpenFullScreen:void 0},argTypes:{color:{control:"select",options:["company","neutral","person"]},forceOpenFullScreen:{control:"select",options:[!0,!1,void 0]}}},i="167536b5-f8ed-4c5a-8f48-0279507e53ae",M={partyUuid:i,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},R=(e,r)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:r,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),h=(e,r=0)=>{const a=Array.from({length:e-1},(u,c)=>R(c+1,c<r));return[M,...a]},A=({args:e,parties:r})=>{const a=x(e),u=T({accountId:"diaspora"}),[c,S]=n.useState([]),[f,y]=n.useState(!0),[U,D]=n.useState(i),b=w({partyListDTO:r,favoriteAccountUuids:c,onToggleFavorite:t=>{S(s=>s.includes(t)?s.filter(L=>L!==t):[...s,t])},selfAccountUuid:i,currentAccountUuid:U,onSelectAccount:t=>{D(t)},languageCode:"nb",isLoading:!1,showDeletedUnits:f,onShowDeletedUnitsChange:t=>{y(t)}});return o.jsx(F,{languageCode:"nb",children:o.jsx(v,{...e,...a,header:{...a.header,accountSelector:b,globalMenu:u},children:e.children})})},l=e=>{const r=x(e),a=T({accountId:"diaspora"}),[u,c]=n.useState([]),[S,f]=n.useState(!1),[y,U]=n.useState(i),D=C(),b=w({partyListDTO:D,favoriteAccountUuids:u,onToggleFavorite:t=>{c(s=>s.includes(t)?s.filter(L=>L!==t):[...s,t])},selfAccountUuid:i,currentAccountUuid:y,onSelectAccount:t=>{U(t)},languageCode:"nb",isLoading:!1,showDeletedUnits:S,onShowDeletedUnitsChange:t=>{f(t)}});return o.jsx(F,{languageCode:"nb",children:o.jsx(v,{...e,...r,header:{...r.header,accountSelector:b,globalMenu:a},children:e.children})})},d=e=>o.jsx(A,{args:e,parties:h(3)}),p=e=>o.jsx(A,{args:e,parties:h(4,1)}),m=e=>o.jsx(A,{args:e,parties:h(6,3)}),g=e=>o.jsx(A,{args:e,parties:h(10)});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...g.parameters?.docs?.source}}};const tt=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];export{p as FourAccountsOneDeleted,m as SixAccountsThreeDeleted,g as TenAccountsNoneDeleted,d as ThreeAccounts,l as UsingUseAccountHook,tt as __namedExportsOrder,et as default};
