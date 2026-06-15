import{a7 as o,aa as n,x as F}from"./iframe-Dr1YYpI1.js";import{u as w,g as C}from"./accountDataFetchers-DXZMnI4d.js";import{a as O}from"./inboxMenu-C5xhmJof.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-BD_wGJK2.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-5ZsbLQyX.js";import{u as x}from"./useLayout-BOBeQyoo.js";import{a as T}from"./useLocale-D7nAisI5.js";import{F as E}from"./Flex-DPnodwFD.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-Bu-RS-9i.js";import"./HeartFill-DvriOPQ7.js";import"./InboxFill-D3n7OuTs.js";import"./Plus-BM0HHz2J.js";import"./PersonCircle-BeVDU0B0.js";import"./Bookmark-BQiAINrt.js";import"./Archive-rT-9lkoM.js";import"./Trash-CnTRL0Pz.js";import"./InformationSquare-zR3kX6_5.js";import"./globalMenu-DvAzCUgM.js";import"./Buildings2-C2Nx_xcz.js";import"./MenuGrid-CYVKhLfM.js";import"./MagnifyingGlass-DOqx6Pwx.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-5VbJH3DU.js";import"./Banner-DCxFdlmr.js";import"./Heading-BD9oLNEa.js";import"./useHighlightedText-BV18x4ez.js";import"./Typography-CAIidHgh.js";import"./GlobalHeader-B6ogT5nG.js";import"./GlobalAccountButton-2zQ2__QA.js";import"./Avatar-5MYoUnaT.js";import"./ChevronDown-BBfddSx6.js";import"./Enter-CZIDW6VQ.js";import"./GlobalMenuButton-B8j437rz.js";import"./MenuHamburger-CtKmesiU.js";import"./Badge-DlA625G6.js";import"./Tooltip-CpSJxiAh.js";import"./ChevronUp-B_Smx25I.js";import"./Dropdown-CkHQtX7v.js";import"./AccountSelector-DmgFSS3z.js";import"./SearchField-Cir7dqyx.js";import"./FieldBase-CyLGbTYK.js";import"./Field-CFwGDJPk.js";import"./Label-CGK745vw.js";import"./Input-Brt0jiez.js";import"./useMenu-BbXnEU1n.js";import"./MenuListItem-BFvVa6a8.js";import"./MenuListDivider-DIxbGzVU.js";import"./MenuListHeading-BfYNlaNe.js";import"./MenuItem-CTIXytBa.js";import"./ItemMedia-BpxSm7tv.js";import"./AvatarGroup-qKVf7nyJ.js";import"./Checkmark-BLry8rVn.js";import"./ItemLabel-CM1gzuiQ.js";import"./ItemControls-DQl8k1jC.js";import"./ChevronRight-F0aXUvpz.js";import"./index-CjeWyC4B.js";import"./Switch-ClYJWXJa.js";import"./AccountMenu-D2X5yeug.js";import"./GlobalMenu-DFS905tY.js";import"./ArrowUndo-DGVtmQoj.js";import"./Globe-AL5Vn8Uk.js";import"./BreadcrumbsLink-TVyeKM67.js";import"./ArrowRight-BcHhXBIz.js";import"./Footer-B5MO7C7H.js";import"./useAccountMenu-Cjoj4a0n.js";const Ze={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
