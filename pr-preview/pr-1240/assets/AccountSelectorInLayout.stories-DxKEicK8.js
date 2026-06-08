import{a7 as o,aa as n,x as F}from"./iframe-B0WoJH5H.js";import{u as w,g as C}from"./accountDataFetchers-D_WfSeEg.js";import{a as O}from"./inboxMenu-cAjJiCDB.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-DMM4WHA9.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-DGCVZQKH.js";import{u as x}from"./useLayout-DxWRATKo.js";import{a as T}from"./useLocale-D7SS4IEK.js";import{F as E}from"./Flex-DKCofw-s.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BaLceTDX.js";import"./HeartFill-hNWkwNox.js";import"./InboxFill-CIDIOQ77.js";import"./Plus-teIaH_CW.js";import"./PersonCircle-bbVAK5SY.js";import"./Bookmark-DO9fKdzq.js";import"./Archive-BFiK2iNm.js";import"./Trash-CO6lVbOZ.js";import"./InformationSquare-C2uJAFQZ.js";import"./globalMenu-CU3Nq1bS.js";import"./Buildings2-CqbLLczn.js";import"./MenuGrid-KEKsXkIK.js";import"./MagnifyingGlass-BMHKxaiy.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-LmebWvIJ.js";import"./Banner-D4f37DfM.js";import"./Heading-DxONre_z.js";import"./useHighlightedText-BkoAp9J_.js";import"./Typography-BsE1w5gb.js";import"./GlobalHeader-B0T11nh9.js";import"./GlobalAccountButton-Dc0u35gL.js";import"./Avatar-DoqQG8m_.js";import"./ChevronDown-BDG9HWsL.js";import"./Enter-BHXFCvcD.js";import"./GlobalMenuButton-BkQpp6do.js";import"./MenuHamburger-B-sBFcFJ.js";import"./Badge-D2udDyy3.js";import"./Tooltip-KSMOwJOX.js";import"./ChevronUp-DUEhyOAc.js";import"./Dropdown-trRXYlHt.js";import"./AccountSelector-B1Wfa091.js";import"./SearchField-B4XHRk25.js";import"./FieldBase-HmzGYXkl.js";import"./Field-CdETmOUd.js";import"./Label-CQqygcqp.js";import"./Input-CGgDhHHk.js";import"./useMenu-BEojsPyg.js";import"./MenuListItem-DBrd4sth.js";import"./MenuListHeading-Czl8ffQE.js";import"./MenuItem-DWXRYnde.js";import"./ItemMedia-BWZiVBkm.js";import"./AvatarGroup-CareQQNx.js";import"./Checkmark-szHKU0qA.js";import"./ItemLabel-3EoqOPb2.js";import"./ItemControls-AxIj9K4z.js";import"./ChevronRight-DJgUHhg2.js";import"./index-BYFLACqY.js";import"./Switch-C4u2FFt0.js";import"./AccountMenu-CZ5u86yO.js";import"./GlobalMenu-BLzK7Uw6.js";import"./ArrowUndo-CQUYnDVr.js";import"./Globe-CURRM6pv.js";import"./BreadcrumbsLink-DpOnqGiT.js";import"./ArrowRight-D_Xst9rm.js";import"./Footer-CCgWVmVA.js";import"./useAccountMenu-D1gjhGAY.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...g.parameters?.docs?.source}}};const Ze=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];export{p as FourAccountsOneDeleted,m as SixAccountsThreeDeleted,g as TenAccountsNoneDeleted,d as ThreeAccounts,l as UsingUseAccountHook,Ze as __namedExportsOrder,Ye as default};
