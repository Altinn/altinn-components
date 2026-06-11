import{a7 as o,aa as n,x as F}from"./iframe-CdYVD6SD.js";import{u as w,g as C}from"./accountDataFetchers-C9LitglT.js";import{a as O}from"./inboxMenu-D9t4qhnc.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-qr9J34YH.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-CZ_In_81.js";import{u as x}from"./useLayout-By-YK9_2.js";import{a as T}from"./useLocale-BCuJtcFt.js";import{F as E}from"./Flex-Cyvp2qjC.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-CGsWRej5.js";import"./HeartFill-CmLcNOlW.js";import"./InboxFill-k1CfrU4d.js";import"./Plus-CF5KtJsD.js";import"./PersonCircle-BQAyRg-e.js";import"./Bookmark-Dso49p_W.js";import"./Archive-NYL17u-9.js";import"./Trash-Xory4lRl.js";import"./InformationSquare-Bk7KLwd3.js";import"./globalMenu--h0pgNpu.js";import"./Buildings2-MhpQ8iPs.js";import"./MenuGrid-B9dkkC61.js";import"./MagnifyingGlass-Cgduw8_l.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-Cq8Mr_v_.js";import"./Banner-E-71tcaO.js";import"./Heading-Kaqd1h94.js";import"./useHighlightedText-DItA3cBY.js";import"./Typography-Dba7VpUA.js";import"./GlobalHeader-BNaFizL7.js";import"./GlobalAccountButton-rBopz-2t.js";import"./Avatar-fMwGn-3G.js";import"./ChevronDown-C8P1GjsS.js";import"./Enter-DyFWDY5O.js";import"./GlobalMenuButton-3a6h5dYA.js";import"./MenuHamburger-DVdV74ok.js";import"./Badge-DuyiKzKp.js";import"./Tooltip-Vr6xk2hm.js";import"./ChevronUp-BrRMdaLP.js";import"./Dropdown-BNNn4VPY.js";import"./AccountSelector-CJPB1L0a.js";import"./SearchField-B_NM7GXp.js";import"./FieldBase-NvZtAXfB.js";import"./Field-DkF-iZgl.js";import"./Label-lXTSTWmW.js";import"./Input-CF984aoc.js";import"./useMenu-CR8oLL1i.js";import"./MenuListItem-LpLMf6qu.js";import"./MenuListDivider-BO0zxfeS.js";import"./MenuListHeading-CKDNZjFs.js";import"./MenuItem-CJ_NtT0h.js";import"./ItemMedia-BIl5Wxj2.js";import"./AvatarGroup-BXTj0nvd.js";import"./Checkmark-DT64LcTm.js";import"./ItemLabel-DvFew2uy.js";import"./ItemControls-vidWw2G8.js";import"./ChevronRight-Dr5zJkhS.js";import"./index-D2d8PfjQ.js";import"./Switch-1ygURg1t.js";import"./AccountMenu-D6O9HHCN.js";import"./GlobalMenu-hyil8AaF.js";import"./ArrowUndo-Q9Mx-gbh.js";import"./Globe-BO9Vpc3p.js";import"./BreadcrumbsLink-BYbHpSOZ.js";import"./ArrowRight-Tr7SFlLA.js";import"./Footer-kqDHEZKV.js";import"./useAccountMenu-A8Qr3ZoP.js";const Ze={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
