import{a7 as o,aa as n,x as F}from"./iframe-CSiNS2_t.js";import{u as w,g as C}from"./accountDataFetchers-Bd6vVp9P.js";import{a as O}from"./inboxMenu-C_5qKV6H.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-6gG4Ffg7.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-4MupU4k4.js";import{u as x}from"./useLayout-YlZbobqw.js";import{a as T}from"./useLocale-RVVlzlne.js";import{F as E}from"./Flex-DavaSday.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BcvSdZS0.js";import"./name-DC2ocV39.js";import"./HeartFill-l42OMgCw.js";import"./InboxFill-B8orx56-.js";import"./Plus-BIfsBTTp.js";import"./PersonCircle-Cvr_mKYq.js";import"./Bookmark-C2oWAO5H.js";import"./Archive-Mf-Uju2B.js";import"./Trash-BcSvu00l.js";import"./InformationSquare-BVqQ7zdO.js";import"./globalMenu-DqJvrWgo.js";import"./Buildings2-Bb2Esj9m.js";import"./MenuGrid-DWQDEhAW.js";import"./MagnifyingGlass-L16wMwR7.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-D3iJ7k61.js";import"./CookieBanner-CKWZWaYc.js";import"./Heading-BPvQUGVy.js";import"./useHighlightedText-Cb4_TuQn.js";import"./Typography-tfUHPeKu.js";import"./Banner-C2EalFdP.js";import"./GlobalHeader-Y06F2DwT.js";import"./GlobalAccountButton-DmQDN0wu.js";import"./Avatar-BZjVPcts.js";import"./ChevronDown-Cyaskzrl.js";import"./Enter-BYyrWS8h.js";import"./GlobalMenuButton-QBNdcfTe.js";import"./MenuHamburger-BIDisRNk.js";import"./Badge-CCAu-QUf.js";import"./Tooltip-CTn3iU7H.js";import"./ChevronUp-DkTPAx2G.js";import"./Dropdown-DvIMOq-U.js";import"./AccountSelector-BGy-SGuD.js";import"./SearchField-404uhg7e.js";import"./FieldBase-rPqTSW37.js";import"./Field-dYgOH5Kq.js";import"./Label-p2f33G11.js";import"./Input-BUqwhKEV.js";import"./useMenu-DQhM8YBj.js";import"./MenuListItem-BphPPZ1-.js";import"./MenuListDivider-DaQR_cA_.js";import"./MenuListHeading-oP2DliYX.js";import"./MenuItem-EWHoKTTM.js";import"./ItemMedia-DGv-wSpo.js";import"./AvatarGroup-By7Dr3dC.js";import"./Checkmark-BXugcN3r.js";import"./ItemLabel-C0x86jDQ.js";import"./ItemControls-Cqj4-f4C.js";import"./ChevronRight-dChxZgZA.js";import"./Switch-DY1HilNX.js";import"./AccountMenu-BhWC5WRF.js";import"./GlobalMenu-BRJU6Z52.js";import"./ArrowUndo-BadzpM_H.js";import"./Globe-i9VwEU5k.js";import"./BreadcrumbsLink-Cu-H3rN3.js";import"./ArrowRight-Dz8Z6Xxm.js";import"./Footer-CLRP89pe.js";import"./useAccountMenu-CNsB7N2U.js";const et={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
