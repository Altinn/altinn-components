import{a7 as o,aa as n,x as F}from"./iframe-BidFzEoe.js";import{u as w,g as C}from"./accountDataFetchers-DKZrtFl6.js";import{a as O}from"./inboxMenu--UyNAzxq.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-BeAQYOS4.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-CAx9I1ic.js";import{u as x}from"./useLayout-Bzdtl3lG.js";import{a as T}from"./useLocale-2WXLzB0v.js";import{F as E}from"./Flex-BXtaAm49.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BByF6i9k.js";import"./name-DC2ocV39.js";import"./HeartFill-Cfr6L_PQ.js";import"./InboxFill-CYJ9gU7o.js";import"./Plus-CSCOqkzm.js";import"./PersonCircle-Dm7gHbnY.js";import"./Bookmark-RR8CNBdJ.js";import"./Archive-C8P_Y27w.js";import"./Trash-C23skxme.js";import"./InformationSquare-B1R5HfkF.js";import"./globalMenu-DJEUhv__.js";import"./Buildings2-iagZ2VSt.js";import"./MenuGrid-lRt3N-mO.js";import"./MagnifyingGlass-B4YFwzX0.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-COreVlY2.js";import"./CookieBanner-DEV0FYTb.js";import"./Heading-XBMlN0kz.js";import"./useHighlightedText-B2dzt3_l.js";import"./Typography-BKRo6hXJ.js";import"./Banner-DCdYuMmA.js";import"./GlobalHeader-D1MHX3-T.js";import"./GlobalAccountButton-C3gkEtyl.js";import"./Avatar-BEQBdv4x.js";import"./ChevronDown-7vjdyvrh.js";import"./Enter-CW4T_Zkd.js";import"./GlobalMenuButton-Cj1DPElc.js";import"./MenuHamburger-LvFc9XlM.js";import"./Badge-mEF_BcRe.js";import"./Tooltip-CttrX-ml.js";import"./ChevronUp-CbJE0St5.js";import"./Dropdown-BZ5Wwg_Y.js";import"./AccountSelector-FENHL-hW.js";import"./SearchField-CPTH-dMf.js";import"./FieldBase-q2Ok1lDz.js";import"./Field-BqmdGdCd.js";import"./Label-BzAQ2d9C.js";import"./Input-D8eTVnZO.js";import"./useMenu-BgtGmMWX.js";import"./MenuListItem-DeTWeA9p.js";import"./MenuListDivider-2FWQFBqh.js";import"./MenuListHeading-C3S-0AcD.js";import"./MenuItem-YZR9Jx1u.js";import"./ItemMedia-DzAOMVpV.js";import"./AvatarGroup-D1zH3sob.js";import"./Checkmark-DMx9NJHb.js";import"./ItemLabel-NxjhrgwT.js";import"./ItemControls-5057Wt3J.js";import"./ChevronRight-B3flyXKQ.js";import"./Switch-Ip2cuLJk.js";import"./AccountMenu-fTIvtAv1.js";import"./GlobalMenu-Byt-GCQY.js";import"./ArrowUndo-CcknOss5.js";import"./Globe-CT8tZHs-.js";import"./BreadcrumbsLink-BjaXo9b0.js";import"./ArrowRight-B6fMiaoa.js";import"./Footer-BZTJiDjO.js";import"./useAccountMenu-CxsgFQxq.js";const et={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
