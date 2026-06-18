import{a7 as o,aa as n,x as F}from"./iframe-DK-3qaH3.js";import{u as w,g as C}from"./accountDataFetchers-rgFvpMrR.js";import{a as O}from"./inboxMenu-OYwcQLXk.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-CLH6jJLx.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-za07xPSl.js";import{u as x}from"./useLayout-CTVxbYti.js";import{a as T}from"./useLocale-U-3CtAWw.js";import{F as E}from"./Flex-BBCXBNec.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BSQHhrxG.js";import"./HeartFill-1h63XNfU.js";import"./InboxFill-BhLOvJ8J.js";import"./Plus-CUtJiv66.js";import"./PersonCircle-CvFeQ7Oq.js";import"./Bookmark-DeXjUqMQ.js";import"./Archive-BmVCa9zu.js";import"./Trash-CT5ztRaN.js";import"./InformationSquare-MLoftbJC.js";import"./globalMenu-Ck_iSX4F.js";import"./Buildings2-KVjXbMSL.js";import"./MenuGrid-CPHcsF2L.js";import"./MagnifyingGlass-DGoMhHAJ.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-BvzC-Wpl.js";import"./Banner-CbeZAjMD.js";import"./Heading-DNUoGPcg.js";import"./useHighlightedText-aZdhyhaW.js";import"./Typography-B48kpFr9.js";import"./GlobalHeader-CFDgcWxf.js";import"./GlobalAccountButton-BU5q9YWA.js";import"./Avatar-CnYovcQa.js";import"./ChevronDown-DHOBL84L.js";import"./Enter-B9VAMW5w.js";import"./GlobalMenuButton-BX7pcybW.js";import"./MenuHamburger-Cf_ch3tL.js";import"./Badge-D651myBu.js";import"./Tooltip-D_qaPfeL.js";import"./ChevronUp-Clh2aWfB.js";import"./Dropdown-PqayCWXB.js";import"./AccountSelector-LRgVrzxj.js";import"./SearchField--OTsh4KX.js";import"./FieldBase-CZ_e8plx.js";import"./Field-DU2lFA0F.js";import"./Label-BEcshVOu.js";import"./Input-DJCzCnsD.js";import"./useMenu-Bn-ufHFt.js";import"./MenuListItem-CwhP6zUQ.js";import"./MenuListDivider-gWW_DkP0.js";import"./MenuListHeading-CObV-6CL.js";import"./MenuItem-CrLVrhNO.js";import"./ItemMedia-SL7nkuf2.js";import"./AvatarGroup-I06FKcbI.js";import"./Checkmark-BzKF2oQV.js";import"./ItemLabel-DjAxhpTi.js";import"./ItemControls-CxO-bUey.js";import"./ChevronRight-DR_DMSPj.js";import"./Switch-B1M2WIXB.js";import"./AccountMenu-BNJzO9LN.js";import"./GlobalMenu-CGaNvQmU.js";import"./ArrowUndo-CrYWH9zi.js";import"./Globe-CA-i3fto.js";import"./BreadcrumbsLink-XlKumBTt.js";import"./ArrowRight-tgP-i77C.js";import"./Footer-DjZb6qbB.js";import"./useAccountMenu-CWmcAL28.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
