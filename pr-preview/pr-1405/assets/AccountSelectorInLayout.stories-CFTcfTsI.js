import{a7 as o,aa as n,x as F}from"./iframe-C7-WWuUz.js";import{u as w,g as C}from"./accountDataFetchers-B5aaXZjh.js";import{a as O}from"./inboxMenu-DRJDWss_.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-CEnSgff3.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-DIXbiTlz.js";import{u as x}from"./useLayout-vzbnRWIQ.js";import{a as T}from"./useLocale-wUj_8iqi.js";import{F as E}from"./Flex-C-tyhriT.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BO3ypbFb.js";import"./name-DC2ocV39.js";import"./HeartFill-BW3phxWL.js";import"./InboxFill-DWrgjppA.js";import"./Plus-0EP1hD2t.js";import"./PersonCircle-BXpOhlUJ.js";import"./Bookmark-CfAOe5Tb.js";import"./Archive-Bk9dVWFf.js";import"./Trash-CI7Eo6ji.js";import"./InformationSquare-B8uck3iJ.js";import"./globalMenu-lwDJX4wa.js";import"./Buildings2-3Xc5bDcm.js";import"./MenuGrid-Bv9H-Uln.js";import"./MagnifyingGlass-DZeq_z0m.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-C10n5deD.js";import"./CookieBanner-Dqir6s-3.js";import"./Heading-Fd09NSi6.js";import"./useHighlightedText-DgrX0qZ_.js";import"./Typography-BeOUX7s0.js";import"./Banner-CEgVlJCV.js";import"./GlobalHeader-Irv8IwSt.js";import"./GlobalAccountButton-BH_ckUBo.js";import"./Avatar-DglSEPrl.js";import"./ChevronDown-BuDxjQRv.js";import"./Enter-CeJcfmZn.js";import"./GlobalMenuButton-C2qNbC_k.js";import"./MenuHamburger-C7i5GpCo.js";import"./Badge-BbkNQ9iQ.js";import"./Tooltip-Bvj4CCJp.js";import"./ChevronUp-DrJugmYh.js";import"./Dropdown-3ZYKEzsd.js";import"./AccountSelector-Bu1LZWRw.js";import"./SearchField-B35ZfRWV.js";import"./FieldBase-V8CxIyK2.js";import"./Field-D-AdTR5I.js";import"./Label-BjNI2Oja.js";import"./Input-DA__wV57.js";import"./useMenu-pD-uRv9Z.js";import"./MenuListItem-DIEDNnJ4.js";import"./MenuListDivider-FRFmhjs8.js";import"./MenuListHeading-BO147Bx-.js";import"./MenuItem-kril0LwU.js";import"./ItemMedia-CBTlpYQC.js";import"./AvatarGroup-BEa8YAn4.js";import"./Checkmark-CVmHJGo_.js";import"./ItemLabel-IzbVhm7b.js";import"./ItemControls-Bq7352tZ.js";import"./ChevronRight-C0CFQIi6.js";import"./Switch-DS82YZ2E.js";import"./AccountMenu-FX98JFSa.js";import"./GlobalMenu-BP7yPdzZ.js";import"./ArrowUndo-DA-0LlcY.js";import"./Globe-CH73ipzD.js";import"./BreadcrumbsLink-EkGWZDE-.js";import"./ArrowRight-FMDeHOzK.js";import"./Footer-zFs8rlyI.js";import"./useAccountMenu-DWUOOAkf.js";const et={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
