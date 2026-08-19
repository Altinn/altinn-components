import{a7 as o,aa as n,x as F}from"./iframe-F_FB4Yxl.js";import{u as w,g as C}from"./accountDataFetchers-BVGOj9ff.js";import{a as O}from"./inboxMenu-4y1wgreP.js";import{f as j}from"./footer-CHBGdvQn.js";import{h as z}from"./header-DIu8mSNT.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-C-xnLMDU.js";import{u as x}from"./useLayout-DcLN0sAd.js";import{a as T}from"./useLocale-DSBVLvSd.js";import{F as E}from"./Flex-QNMJxvpD.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BZjyToB8.js";import"./HeartFill-sgqqxygE.js";import"./InboxFill-B14G7Rsc.js";import"./Plus-CvcVl1NJ.js";import"./PersonCircle-CpNckihI.js";import"./Bookmark-BCV92YUB.js";import"./Archive-CNHNV7Oe.js";import"./Trash-FK26Fd-e.js";import"./InformationSquare-DJU8cSbx.js";import"./globalMenu-CTQx_YjX.js";import"./Buildings2-BJinqt1L.js";import"./MenuGrid-C6fQQxLN.js";import"./MagnifyingGlass-xYv1kWZx.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-DRkv-qzt.js";import"./CookieBanner-CWO-Qf6C.js";import"./Heading-Cj7rgSGX.js";import"./useHighlightedText-CJsPbXHy.js";import"./Typography-BQdVTYYF.js";import"./Banner-JujsXbPS.js";import"./GlobalHeader-C811FLdV.js";import"./GlobalAccountButton-Bz1q1Nhp.js";import"./Avatar-DE7K7igg.js";import"./ChevronDown-CmhX0LZg.js";import"./Enter-0fKM4Pjc.js";import"./GlobalMenuButton-Dfx9Vmfc.js";import"./MenuHamburger-cCPt-O4j.js";import"./Badge-C_852a7b.js";import"./Tooltip-B803JVqh.js";import"./ChevronUp-BmFZO6Yq.js";import"./Dropdown-Qibhj6Vz.js";import"./AccountSelector-DLB9fvZP.js";import"./SearchField-XLSYMjsy.js";import"./FieldBase-DKsxkZ_u.js";import"./Field-DOnuYCd0.js";import"./Label-DEw_iIGq.js";import"./Input-CADZ4I-X.js";import"./useMenu-DGY2fmdm.js";import"./MenuListItem-X5TFO5En.js";import"./MenuListDivider-Cy2nuh7X.js";import"./MenuListHeading-BlfnlMHy.js";import"./MenuItem-Cx2LMlDr.js";import"./ItemMedia-CoUbiAZN.js";import"./AvatarGroup-B7Qf-EGM.js";import"./Checkmark-CMCe3Dch.js";import"./ItemLabel-BJusrNMy.js";import"./ItemControls-4PJArwOE.js";import"./ChevronRight-f1WSa4_L.js";import"./Switch-B1D8FZID.js";import"./AccountMenu-HO-m1uDR.js";import"./GlobalMenu-C5MEt6-0.js";import"./ArrowUndo-CzLdUdgc.js";import"./Globe-DJMPhBx_.js";import"./BreadcrumbsLink-CXp5PwcS.js";import"./ArrowRight-CeZ_RGfT.js";import"./Footer-vBhtvC1O.js";import"./useAccountMenu-CJ6lkNCJ.js";const Ze={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
