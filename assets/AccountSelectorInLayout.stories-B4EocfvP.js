import{a7 as o,aa as n,x as F}from"./iframe-BZiA3Dc9.js";import{u as w,g as C}from"./accountDataFetchers-BaCEWx_M.js";import{a as O}from"./inboxMenu-Bx4GdxCf.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-597LU-In.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-Dh_gh_Ce.js";import{u as x}from"./useLayout--0xL-XzO.js";import{a as T}from"./useLocale-DGWmGDod.js";import{F as E}from"./Flex-DlKNIBbG.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-CSl4XLc7.js";import"./HeartFill-BEj4Jija.js";import"./InboxFill-BCgBfUTn.js";import"./Plus-DuB6ksxl.js";import"./PersonCircle-C_-LNb0c.js";import"./Bookmark-DaeAt-nZ.js";import"./Archive-BSbbJQpu.js";import"./Trash-DL-j6TXo.js";import"./InformationSquare-mZWip9WA.js";import"./globalMenu-6JyMBhMd.js";import"./Buildings2-BRuUUWGZ.js";import"./MenuGrid-DhGk5t1z.js";import"./MagnifyingGlass-CA7TYkUz.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-DWgdd-GE.js";import"./Banner-BtKZ61By.js";import"./Heading-DduTyBY0.js";import"./useHighlightedText-gnIxErVs.js";import"./Typography-HNFVi96c.js";import"./GlobalHeader-Cu8SF1ir.js";import"./GlobalAccountButton-UsxKQVTG.js";import"./Avatar-DghTGFEI.js";import"./ChevronDown-CNxF5VIu.js";import"./Enter-D45C4ZyH.js";import"./GlobalMenuButton-Du8ecgvS.js";import"./MenuHamburger-CH0SCgCh.js";import"./Badge-9d5TUG_K.js";import"./Tooltip-9A_N-nl8.js";import"./ChevronUp-BGK37JKw.js";import"./Dropdown-B6vO-ibc.js";import"./AccountSelector-B3eiELKb.js";import"./SearchField-CjnwN1Qm.js";import"./FieldBase-ueusd3rP.js";import"./Field-BBiYs4sk.js";import"./Label-DzltmVQl.js";import"./Input-F50qI-5v.js";import"./useMenu-S-ctNtGP.js";import"./MenuListItem-D6cNKdUH.js";import"./MenuListDivider-BVEnRF-b.js";import"./MenuListHeading-BOV_GCdf.js";import"./MenuItem-C8RiqVeE.js";import"./ItemMedia-DZA-TM72.js";import"./AvatarGroup-DPv09ZzM.js";import"./Checkmark-4XKWnN3Z.js";import"./ItemLabel-CJWHWa7G.js";import"./ItemControls-D3kvfvc9.js";import"./ChevronRight-CRJJFvsY.js";import"./Switch-BcTJiZEX.js";import"./AccountMenu-C_iFW4C2.js";import"./GlobalMenu-DkcK29pl.js";import"./ArrowUndo-DmjPkDTA.js";import"./Globe-D2JmmsD8.js";import"./BreadcrumbsLink-BfnL9fjg.js";import"./ArrowRight-W2FxJoMq.js";import"./Footer-BELR6Sl2.js";import"./useAccountMenu-BtgIASri.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
