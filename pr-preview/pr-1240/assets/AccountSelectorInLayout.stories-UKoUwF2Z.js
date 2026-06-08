import{a7 as o,aa as n,x as F}from"./iframe-C3-39QZn.js";import{u as w,g as C}from"./accountDataFetchers-D782qS-g.js";import{a as O}from"./inboxMenu-DBDFMTil.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-Ck4A6r18.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-_ZyhwWen.js";import{u as x}from"./useLayout-52C-kp2p.js";import{a as T}from"./useLocale-QoBpgrnu.js";import{F as E}from"./Flex-cOQ4YkiH.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-B_nl_2PG.js";import"./HeartFill-l3zYTDm7.js";import"./InboxFill-Ce5E9EzM.js";import"./Plus-CD1Lx9Ec.js";import"./PersonCircle-Bo-Vu_zy.js";import"./Bookmark-CRjD1-8F.js";import"./Archive-B4YJqA48.js";import"./Trash-Daess6ZY.js";import"./InformationSquare-CikWmUv2.js";import"./globalMenu-DFm9P4A4.js";import"./Buildings2-CvXVAbl-.js";import"./MenuGrid-DYQYeL5Z.js";import"./MagnifyingGlass-W4-YHK47.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-DI6dmZ0z.js";import"./Banner-CuBpCwm7.js";import"./Heading-B2KBSzP-.js";import"./useHighlightedText--t_r6ff3.js";import"./Typography-DzSxU3qn.js";import"./GlobalHeader-BxC2Kzt0.js";import"./GlobalAccountButton-1c1oP4o_.js";import"./Avatar-WM3RFSU5.js";import"./ChevronDown-C_O64CkH.js";import"./Enter-FSzNSatz.js";import"./GlobalMenuButton-lnjvOmqB.js";import"./MenuHamburger-BX-oMAjS.js";import"./Badge-D3xvyoOt.js";import"./Tooltip-DTSJdaMh.js";import"./ChevronUp-CNTxwGY1.js";import"./Dropdown-DwcIrTVC.js";import"./AccountSelector-I9R229FX.js";import"./SearchField-BHCumu4V.js";import"./FieldBase-CuUVQ-X3.js";import"./Field-D-SteSQi.js";import"./Label-BXFq-CrQ.js";import"./Input-Ck9X-Ajd.js";import"./useMenu-PdCJBcPZ.js";import"./MenuListItem-C_zHoz8h.js";import"./MenuListHeading-BABwYJ-w.js";import"./MenuItem-_nHd0yat.js";import"./ItemMedia-Dvk-rH5V.js";import"./AvatarGroup-BCEXfOjH.js";import"./Checkmark-DcGYSDVC.js";import"./ItemLabel-EUoHzQAm.js";import"./ItemControls-CvvFc83j.js";import"./ChevronRight-C8E9q9OI.js";import"./index-DsMJ5_O1.js";import"./Switch-DF_iO8hw.js";import"./AccountMenu-CjG9lWO_.js";import"./GlobalMenu-LPr3bcCu.js";import"./ArrowUndo-CTGuYn12.js";import"./Globe-DapnUHe0.js";import"./BreadcrumbsLink-DDNJ-ZYG.js";import"./ArrowRight-CyqZHc8N.js";import"./Footer-DsHCDHEm.js";import"./useAccountMenu-Bs3BLusA.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
