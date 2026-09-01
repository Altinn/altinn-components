import{a7 as o,aa as n,x as F}from"./iframe-CD11FhkO.js";import{u as w,g as C}from"./accountDataFetchers-CoeIlv6I.js";import{a as O}from"./inboxMenu-D__A0SDC.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-COqZBrde.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-BScoOvrU.js";import{u as x}from"./useLayout-25TaDnBR.js";import{a as T}from"./useLocale-snuTdBMR.js";import{F as E}from"./Flex-BFs7VkGF.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-DOnYt3KQ.js";import"./HeartFill-DrzRVXmd.js";import"./InboxFill-8fqvhhKE.js";import"./Plus-CAOm99TL.js";import"./PersonCircle-BWn3zrq3.js";import"./Bookmark-Du8iI8kI.js";import"./Archive-CgLppSoK.js";import"./Trash-wzs9uMoD.js";import"./InformationSquare-885_pUeZ.js";import"./globalMenu-B1dBP8Gq.js";import"./Buildings2-OONJku9z.js";import"./MenuGrid-RMwWwWT0.js";import"./MagnifyingGlass-DzHVnCkX.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-DCRaymoV.js";import"./CookieBanner-ud0JRUH0.js";import"./Heading-DRFiIxuE.js";import"./useHighlightedText-BLIWo84c.js";import"./Typography-CsSTPRBO.js";import"./Banner-BAvaKpH7.js";import"./GlobalHeader-uBaOBhlP.js";import"./GlobalAccountButton-CN7oEsou.js";import"./Avatar-DnWg8nkP.js";import"./ChevronDown-Z-rCEWMI.js";import"./Enter-BNdrBqs7.js";import"./GlobalMenuButton-SR9h2YBR.js";import"./MenuHamburger-D8TsZxA8.js";import"./Badge-C4mu-w43.js";import"./Tooltip-DHKVNtVP.js";import"./ChevronUp-BuZXJZ6x.js";import"./Dropdown-C71BxREr.js";import"./AccountSelector-BkHl2jam.js";import"./SearchField-DTHysOBi.js";import"./FieldBase-BjWFGCCi.js";import"./Field-D2tRhsyN.js";import"./Label-eTdXAbuC.js";import"./Input-By1HeiMt.js";import"./useMenu-PhHDaKm4.js";import"./MenuListItem-BXuXLU5Z.js";import"./MenuListDivider-C8FBE3A1.js";import"./MenuListHeading-CEMMnaXl.js";import"./MenuItem-Q62E5xuF.js";import"./ItemMedia-Da1KaWKQ.js";import"./AvatarGroup-D_FMhzL-.js";import"./Checkmark-1mKhNNmo.js";import"./ItemLabel-C4LW5Gzw.js";import"./ItemControls-BM5eXiWu.js";import"./ChevronRight-DorAbKkm.js";import"./Switch-UF2Hsrez.js";import"./AccountMenu-Be1YwfaQ.js";import"./GlobalMenu-CyQUTWaE.js";import"./ArrowUndo-U7c-XydM.js";import"./Globe-BiVm3Xkx.js";import"./BreadcrumbsLink-B3Oo2Zs_.js";import"./ArrowRight-B1BVxTuR.js";import"./Footer-C2EKRjZO.js";import"./useAccountMenu-BA2e4k1G.js";const Ze={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...g.parameters?.docs?.source}}};const et=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];export{p as FourAccountsOneDeleted,m as SixAccountsThreeDeleted,g as TenAccountsNoneDeleted,d as ThreeAccounts,l as UsingUseAccountHook,et as __namedExportsOrder,Ze as default};
