import{a7 as o,aa as n,x as F}from"./iframe-h3kpEY-8.js";import{u as w,g as C}from"./accountDataFetchers-BDe881YP.js";import{a as O}from"./inboxMenu-Cjhe17Ns.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-BmC7qRva.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-DtfClpX6.js";import{u as x}from"./useLayout-Cb9G7jMN.js";import{a as T}from"./useLocale-CPJmUzGF.js";import{F as E}from"./Flex-BmiGVQGS.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-CEwRenMP.js";import"./HeartFill-fTOJiR6e.js";import"./InboxFill-DlXWZCU5.js";import"./Plus-BtMtwdOE.js";import"./PersonCircle-Cn0FE5Om.js";import"./Bookmark-CWAgOJEC.js";import"./Archive-C2zjgILp.js";import"./Trash-Bbf21dp0.js";import"./InformationSquare-TM9O4ixW.js";import"./globalMenu-C72TUtoX.js";import"./Buildings2-D5h7QkaG.js";import"./MenuGrid-F-d7_tsE.js";import"./MagnifyingGlass-Df6AiRyH.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-BTrrVk3o.js";import"./Banner-D3CUVGr2.js";import"./Heading-Dn7fEFx7.js";import"./useHighlightedText-Lwubglq6.js";import"./Typography-ByLPxgtz.js";import"./GlobalHeader-DbONu3gK.js";import"./GlobalAccountButton-TxNOomJT.js";import"./Avatar-xrrnEYLD.js";import"./ChevronDown-lfOvIfMJ.js";import"./Enter-CRzvfXkr.js";import"./GlobalMenuButton-DtmAQ8dT.js";import"./MenuHamburger-OG4LFxGd.js";import"./Badge-DXobaynz.js";import"./Tooltip-DgP5yGn4.js";import"./ChevronUp-ChyOGEvh.js";import"./Dropdown-BZC5Raej.js";import"./AccountSelector-BUDTnCJ0.js";import"./SearchField-pLL_WmAV.js";import"./FieldBase-CnX5WdHy.js";import"./Field-BzJVbJyd.js";import"./Label-DRrcRV0r.js";import"./Input-BilJ5YTK.js";import"./useMenu-DIh14msT.js";import"./MenuListItem-DdKH3BDS.js";import"./MenuListDivider-BDzgWude.js";import"./MenuListHeading-B8DJ5av2.js";import"./MenuItem-CJxVZTG4.js";import"./ItemMedia-DOHb0jsR.js";import"./AvatarGroup-COWd8M-x.js";import"./Checkmark-qxd_V6S7.js";import"./ItemLabel-DwG1GkVg.js";import"./ItemControls-DTSXitWE.js";import"./ChevronRight-zeeAR8pp.js";import"./index-BRnuOkic.js";import"./Switch-JWXrNjhf.js";import"./AccountMenu-4WhElmsX.js";import"./GlobalMenu-BAElCxZm.js";import"./ArrowUndo-BNIaEQ0f.js";import"./Globe-D5GaK9AD.js";import"./BreadcrumbsLink-DDRIWfdO.js";import"./ArrowRight-BHwxkP2p.js";import"./Footer-CZO8bq-d.js";import"./useAccountMenu-0SZwhbez.js";const Ze={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
