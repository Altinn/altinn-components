import{a7 as o,aa as n,x as F}from"./iframe-ypmT5Gk0.js";import{u as w,g as C}from"./accountDataFetchers-CR_p0wu7.js";import{a as O}from"./inboxMenu-DtkIlY5e.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-UaYRDxqS.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-DE_9T14a.js";import{u as x}from"./useLayout-BGmzdy0R.js";import{a as T}from"./useLocale-D2edR3nY.js";import{F as E}from"./Flex-Chd0QM3i.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-PxNvtLHb.js";import"./name-DC2ocV39.js";import"./HeartFill-LtBxKwOH.js";import"./InboxFill-LG7okZXt.js";import"./Plus-Dbutg6U0.js";import"./PersonCircle-CEK5UvVl.js";import"./Bookmark-DWMKWQlk.js";import"./Archive-D57uYDfd.js";import"./Trash-CccdzDMj.js";import"./InformationSquare-BGmi6Zvl.js";import"./globalMenu-DQIbpZOu.js";import"./Buildings2-yVipb-QE.js";import"./MenuGrid-SC6SaCbf.js";import"./MagnifyingGlass-BsJL0696.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-Dmj6XsAN.js";import"./CookieBanner-B8k1HGdM.js";import"./Heading-DYP7M4_m.js";import"./useHighlightedText-BRp5NYS8.js";import"./Typography-D_BM_-lf.js";import"./Banner-DMBV7tds.js";import"./GlobalHeader-DK4fbfP6.js";import"./GlobalAccountButton-CQvD92YT.js";import"./Avatar-CjSTwin0.js";import"./ChevronDown-BK7qLjN-.js";import"./Enter-BI3IQ34V.js";import"./GlobalMenuButton-BribFtYh.js";import"./MenuHamburger-DnW-FkzB.js";import"./Badge-X9Z0TOu_.js";import"./Tooltip-Blob_TyK.js";import"./ChevronUp-BtRg68CV.js";import"./Dropdown-DooXOQKf.js";import"./AccountSelector-oX6erb_P.js";import"./SearchField-gC-2ROHv.js";import"./FieldBase-BZNWpkh0.js";import"./Field-fCHogA_W.js";import"./Label-CuLDpT5S.js";import"./Input-CoYipzRW.js";import"./useMenu-Roya_qW1.js";import"./MenuListItem-aY-AAikt.js";import"./MenuListDivider-p3sa3VdL.js";import"./MenuListHeading-j9n_Lc05.js";import"./MenuItem-CZo5oRhh.js";import"./ItemMedia-4IfksOuS.js";import"./AvatarGroup-SlU2nii8.js";import"./Checkmark-kMy6EMLN.js";import"./ItemLabel-BlYQpqbv.js";import"./ItemControls-Bqvxib6z.js";import"./ChevronRight-3_fnpscT.js";import"./Switch-CfqPQUwK.js";import"./AccountMenu-s3Se8P3c.js";import"./GlobalMenu-BPOeGTHR.js";import"./ArrowUndo-BZUngnyS.js";import"./Globe-CcZbALqM.js";import"./BreadcrumbsLink-B-_mNzdJ.js";import"./ArrowRight-onOHfT1O.js";import"./Footer-BF-O6qkt.js";import"./useAccountMenu-DMo6V2Lc.js";const et={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
