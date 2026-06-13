import{a7 as o,aa as n,x as F}from"./iframe-2h8IP8d3.js";import{u as w,g as C}from"./accountDataFetchers-BwF-ZTab.js";import{a as O}from"./inboxMenu-tJl8nIkJ.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-BwPRCujU.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-C20X-NGx.js";import{u as x}from"./useLayout-B4ltJvHt.js";import{a as T}from"./useLocale-DDIWQZ_s.js";import{F as E}from"./Flex-CMEhZHn2.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BpM9fvc4.js";import"./HeartFill-Bde1mNCW.js";import"./InboxFill-CIWkkWbP.js";import"./Plus-VIPYJ0p2.js";import"./PersonCircle-j2njej4H.js";import"./Bookmark-CqFiT2_q.js";import"./Archive-CTNGH1CU.js";import"./Trash-DgElRFQM.js";import"./InformationSquare-DAAIm6NS.js";import"./globalMenu-DmQUpBD7.js";import"./Buildings2-BG0DPNVQ.js";import"./MenuGrid-Cp-_AIhY.js";import"./MagnifyingGlass-CI0_p9bj.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-akMj12yM.js";import"./Banner-DAp-HVvT.js";import"./Heading-DXu-0NAz.js";import"./useHighlightedText-CelzCUqF.js";import"./Typography-DY06DO0f.js";import"./GlobalHeader-Dewm9U2Z.js";import"./GlobalAccountButton-CiVU53Gm.js";import"./Avatar-C_KS8ezx.js";import"./ChevronDown-D2-mCLBn.js";import"./Enter-DM5C-XCw.js";import"./GlobalMenuButton-ITQ51a2a.js";import"./MenuHamburger-t7pO2iZ9.js";import"./Badge-Pn_S1ZTN.js";import"./Tooltip-D08FTuVb.js";import"./ChevronUp-BQbblg8y.js";import"./Dropdown-BKTHH5xT.js";import"./AccountSelector-LB0WlrvF.js";import"./SearchField-_MN_HrdV.js";import"./FieldBase-DGYDbbnf.js";import"./Field-BxD7Ql4y.js";import"./Label-ZzFKhgKK.js";import"./Input-CcSuNkw7.js";import"./useMenu-DBT0rzRb.js";import"./MenuListItem-Bu8N3gRa.js";import"./MenuListDivider-C4ZS-zxE.js";import"./MenuListHeading-CFPiwF83.js";import"./MenuItem-Cg_2HM56.js";import"./ItemMedia-F0nN_YEB.js";import"./AvatarGroup-ChTLLSw-.js";import"./Checkmark-kZsld0tw.js";import"./ItemLabel-DAuWzgED.js";import"./ItemControls-F7yjZiAX.js";import"./ChevronRight-Bz8Cr0I4.js";import"./index-CQmnZsg3.js";import"./Switch-CggvXl6Z.js";import"./AccountMenu-b-xdAwhQ.js";import"./GlobalMenu-gyGuqkpR.js";import"./ArrowUndo-P3YakjFB.js";import"./Globe-BK_-3aK-.js";import"./BreadcrumbsLink-BPPepTBp.js";import"./ArrowRight-DN3sEIAa.js";import"./Footer-BbDKvcxQ.js";import"./useAccountMenu-DsZ-X426.js";const Ze={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
