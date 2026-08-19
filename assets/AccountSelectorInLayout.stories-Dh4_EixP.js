import{a7 as o,aa as n,x as F}from"./iframe-Dvni_u8W.js";import{u as w,g as C}from"./accountDataFetchers-C6MRsQbj.js";import{a as O}from"./inboxMenu-D19TiTN3.js";import{f as j}from"./footer-B2fN4P1E.js";import{h as z}from"./header-BnX1wtXY.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-BGl9isD0.js";import{u as x}from"./useLayout-DpUnBUb5.js";import{a as T}from"./useLocale-CsLYaACn.js";import{F as E}from"./Flex-C0xjv22N.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-DMsXss5A.js";import"./HeartFill-w0cCZ4hO.js";import"./InboxFill-D4425-Tc.js";import"./Plus-B_1zWORh.js";import"./PersonCircle-Wf4k0F8u.js";import"./Bookmark-CAZ-Lg_R.js";import"./Archive-D9xo3Eat.js";import"./Trash-0Q12wXYH.js";import"./InformationSquare-ZFR98d1q.js";import"./globalMenu-B4F5B7ue.js";import"./Buildings2-zpEfykWn.js";import"./MenuGrid-AGCS4OAi.js";import"./MagnifyingGlass-B8ciBt3W.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-hRoxc1kk.js";import"./CookieBanner-CeeBIT1G.js";import"./Heading-CzH7HB6a.js";import"./useHighlightedText-CLLTD9Wh.js";import"./Typography-UWzQw34I.js";import"./Banner-BoSTLP2u.js";import"./GlobalHeader-D5aJ-opJ.js";import"./GlobalAccountButton-BOXarTgy.js";import"./Avatar-BiSp7bMb.js";import"./ChevronDown-wy-_efuj.js";import"./Enter-91QmnNLS.js";import"./GlobalMenuButton-Dr-fNS4N.js";import"./MenuHamburger-CK-iwV4z.js";import"./Badge-COuasLz3.js";import"./Tooltip-C31Zzbir.js";import"./ChevronUp-B-cuVFt7.js";import"./Dropdown-BFgXRZ9P.js";import"./AccountSelector-C1nANC_E.js";import"./SearchField-CJEH8bYw.js";import"./FieldBase-ChKWoxnf.js";import"./Field-BLs2k9pR.js";import"./Label-BsuoA68K.js";import"./Input-B7CJ0KIf.js";import"./useMenu-wTmWM5n-.js";import"./MenuListItem-9RJKOuM7.js";import"./MenuListDivider-CKiSBLyr.js";import"./MenuListHeading-CHgDesLl.js";import"./MenuItem-DOQN-kDc.js";import"./ItemMedia-BulytyAO.js";import"./AvatarGroup-BKR8NZ9M.js";import"./Checkmark-BJLEGQFS.js";import"./ItemLabel-BnI0oSfj.js";import"./ItemControls-C8iXC4AM.js";import"./ChevronRight-CHz63rRB.js";import"./Switch-B4_rtYEL.js";import"./AccountMenu-m11kAcd8.js";import"./GlobalMenu-e9zJErKU.js";import"./ArrowUndo-CuxdBiYe.js";import"./Globe-B2BhyoCX.js";import"./BreadcrumbsLink-DAhEjbpJ.js";import"./ArrowRight-tjt3Q36Y.js";import"./Footer-DzMo6NBS.js";import"./useAccountMenu-DfIDvhOW.js";const Ze={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
