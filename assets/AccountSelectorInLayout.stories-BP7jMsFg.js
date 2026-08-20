import{a7 as o,aa as n,x as F}from"./iframe-CfUrJ-sW.js";import{u as w,g as C}from"./accountDataFetchers-DmiI8yJU.js";import{a as O}from"./inboxMenu-DEDQ_u05.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-DkQ1_w7m.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-Bil_AZO5.js";import{u as x}from"./useLayout-9FhoFmFf.js";import{a as T}from"./useLocale-N8U5qQK9.js";import{F as E}from"./Flex-DpzfZDgd.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-EUyJ7Rb8.js";import"./HeartFill-C9PtCQcp.js";import"./InboxFill-DU7gG0NH.js";import"./Plus-hdfH71QK.js";import"./PersonCircle-B9JPpazK.js";import"./Bookmark-DcThm6lj.js";import"./Archive-wjpNkncI.js";import"./Trash-4BxU-ya0.js";import"./InformationSquare-BZJWkHLO.js";import"./globalMenu-vMstmbBJ.js";import"./Buildings2-TPdQjHRO.js";import"./MenuGrid-DLkNgGOt.js";import"./MagnifyingGlass-DeqXe_2Y.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-DGjmzuof.js";import"./CookieBanner-DTijFDql.js";import"./Heading-CC1NzZuf.js";import"./useHighlightedText-DCiIYobu.js";import"./Typography-CAlmT_0b.js";import"./Banner-BGFyNT7Z.js";import"./GlobalHeader-DAjm9Rgo.js";import"./GlobalAccountButton-giQ1XW_l.js";import"./Avatar-CQ8_o-yu.js";import"./ChevronDown-BqQbWOs1.js";import"./Enter-SQD6s3z_.js";import"./GlobalMenuButton-DDBjx-Lc.js";import"./MenuHamburger-HF5Rvs2-.js";import"./Badge-Cy4UcitB.js";import"./Tooltip-DV6u4Pgt.js";import"./ChevronUp-rhZxrOkp.js";import"./Dropdown-Dwhf6SNg.js";import"./AccountSelector-CFo21Sbu.js";import"./SearchField-D230b6Yn.js";import"./FieldBase-CrwLGD3E.js";import"./Field-6dtFYXL2.js";import"./Label-sGHyqM38.js";import"./Input-CJlrdXWO.js";import"./useMenu-VNE_nv00.js";import"./MenuListItem-CpLdOTrv.js";import"./MenuListDivider-BCZC89qs.js";import"./MenuListHeading-C_KnsA5D.js";import"./MenuItem-Dw5geetP.js";import"./ItemMedia-BbdQksB6.js";import"./AvatarGroup-BJfCcue9.js";import"./Checkmark-8dE5LNjt.js";import"./ItemLabel-7ZtyJqf1.js";import"./ItemControls-K0n5tZKI.js";import"./ChevronRight-BQqjok9o.js";import"./Switch-BF3XxZeS.js";import"./AccountMenu-DN41d1Ye.js";import"./GlobalMenu-3rOHIzxk.js";import"./ArrowUndo-B07mJyDj.js";import"./Globe-CHeOGe9p.js";import"./BreadcrumbsLink-Y8DFAxAq.js";import"./ArrowRight-D1yP_5S1.js";import"./Footer-Cz8S3nNy.js";import"./useAccountMenu-BRlkc5pq.js";const Ze={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
