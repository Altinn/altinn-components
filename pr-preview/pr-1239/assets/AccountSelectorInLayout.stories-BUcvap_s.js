import{a7 as o,aa as n,x as F}from"./iframe-azCfu0oF.js";import{u as w,g as C}from"./accountDataFetchers-CYOodVYu.js";import{a as O}from"./inboxMenu-CdbkDalU.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-MhIhlDaj.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-DYtuN4Mv.js";import{u as x}from"./useLayout-CClZvm5q.js";import{a as T}from"./useLocale-B046KNXg.js";import{F as E}from"./Flex-Dtc9ln1d.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-VQy6LI36.js";import"./HeartFill-CKB0G2IA.js";import"./InboxFill-CwRadsxH.js";import"./Plus-BRb5Dr-V.js";import"./PersonCircle-DtDFP3uD.js";import"./Bookmark-DpB-3DiS.js";import"./Archive-Brae8BXQ.js";import"./Trash-4gML0aCb.js";import"./InformationSquare-jmbeCJCU.js";import"./globalMenu-CbTnY7g_.js";import"./Buildings2-vZnco-8R.js";import"./MenuGrid-CpQuJPtt.js";import"./MagnifyingGlass-sqIKuSMh.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-Dd0mmfHI.js";import"./Banner-CAZ4bFf-.js";import"./Heading-BxIru1wm.js";import"./useHighlightedText-BA5UWeOm.js";import"./Typography-CWMVViTm.js";import"./GlobalHeader-Di3unPEh.js";import"./GlobalAccountButton-CK8T4LQh.js";import"./Avatar-B6mgyHuO.js";import"./ChevronDown-D-2Ujwox.js";import"./Enter-tZOygt0a.js";import"./GlobalMenuButton-Cj8YDFpo.js";import"./MenuHamburger-8q16ML3A.js";import"./Badge-CtmzFrHa.js";import"./Tooltip-DFhjbzqi.js";import"./ChevronUp-_1tTwlgk.js";import"./Dropdown-CZ8Ag1Ok.js";import"./AccountSelector-BSoQQv0t.js";import"./SearchField-BxcNLwFn.js";import"./FieldBase-CGNAcfuA.js";import"./Field-DqJ_4ymP.js";import"./Label-Fg6nLSp0.js";import"./Input-B4WsPqAp.js";import"./useMenu-BCjKWSQ9.js";import"./MenuListItem-BqMqYYtc.js";import"./MenuListHeading-Be6eRNXB.js";import"./MenuItem-DQe7kQkg.js";import"./ItemMedia-BlulKlBL.js";import"./AvatarGroup-BFb9xeKa.js";import"./Checkmark-DMfmeL08.js";import"./ItemLabel-CkTR7bil.js";import"./ItemControls-D1geOcjK.js";import"./ChevronRight-DmbA9yvG.js";import"./index-BVE0v-uN.js";import"./Switch-CLshW7kB.js";import"./AccountMenu-l9LBS8EX.js";import"./GlobalMenu-gYE2kqRH.js";import"./ArrowUndo-DFHXaMj5.js";import"./Globe-fNOxnyKD.js";import"./BreadcrumbsLink-BjLFHRtF.js";import"./ArrowRight-2WuhP0xh.js";import"./Footer-DkE5zY5y.js";import"./useAccountMenu-Boy03MvL.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
