import{a7 as o,aa as n,x as F}from"./iframe-BOq385O8.js";import{u as w,g as C}from"./accountDataFetchers-C4tASAXU.js";import{a as O}from"./inboxMenu-C35aHZ4v.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-B0l7eVM_.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-wudQ00uA.js";import{u as x}from"./useLayout-BIjq-Klh.js";import{a as T}from"./useLocale-VXx8l_GV.js";import{F as E}from"./Flex-CyZuoM67.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BmRCZ7jt.js";import"./HeartFill-DYBbyooL.js";import"./InboxFill-BeEst1Ss.js";import"./Plus-7pPCm0cp.js";import"./PersonCircle-BQ4R8HqN.js";import"./Bookmark-2lecxZEi.js";import"./Archive-EAW4hj1t.js";import"./Trash-CZ2Z9NgZ.js";import"./InformationSquare-ChpInVUG.js";import"./globalMenu-Cu4d-lyI.js";import"./Buildings2-D7iJzXxT.js";import"./MenuGrid-n6_sTm_u.js";import"./MagnifyingGlass-DLwuof1g.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-B8bToWK4.js";import"./Banner-C6NPmyVy.js";import"./Heading-BGbBHiZX.js";import"./useHighlightedText-COTrDIB8.js";import"./Typography-DYb-ep--.js";import"./GlobalHeader-DQ-2Yj6f.js";import"./GlobalAccountButton-a3opwitw.js";import"./Avatar-DGnXzkTF.js";import"./ChevronDown-ByPuuZmk.js";import"./Enter-C9D2pmVO.js";import"./GlobalMenuButton-D2eY6o_d.js";import"./MenuHamburger-5u_HMvvr.js";import"./Badge-IhlpDjWl.js";import"./Tooltip-HwSyglqV.js";import"./ChevronUp-DtZBQ8_H.js";import"./Dropdown-B3R21JXo.js";import"./AccountSelector-S6whGXp2.js";import"./SearchField-1cIkQLXt.js";import"./FieldBase-SENAbJS5.js";import"./Field-BAObIoZk.js";import"./Label-CJalMe_4.js";import"./Input-B8j-6nyc.js";import"./useMenu-RUc5K2KC.js";import"./MenuListItem-C3dH633T.js";import"./MenuListDivider-DW1VkhOq.js";import"./MenuListHeading-B04brtcm.js";import"./MenuItem-C887Ld9X.js";import"./ItemMedia-BFjKYKIC.js";import"./AvatarGroup-C-pwgfnB.js";import"./Checkmark-BfJs351m.js";import"./ItemLabel-32-F56Tw.js";import"./ItemControls-qKJDjHzO.js";import"./ChevronRight-8gth-Lkl.js";import"./Switch-kVfS8bk3.js";import"./AccountMenu-TCts2bcC.js";import"./GlobalMenu-CUwxN7Bm.js";import"./ArrowUndo-BRAjq8UN.js";import"./Globe-D6RnMHjZ.js";import"./BreadcrumbsLink-D9VGLC8K.js";import"./ArrowRight-DwCygRAD.js";import"./Footer-BgqROVlF.js";import"./useAccountMenu-zilSzJ3H.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
