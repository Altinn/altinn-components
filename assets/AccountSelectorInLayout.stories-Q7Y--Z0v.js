import{a7 as o,aa as n,x as F}from"./iframe-DdvxY_xq.js";import{u as w,g as C}from"./accountDataFetchers-C6djqtDJ.js";import{a as O}from"./inboxMenu-_ReLkSJC.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-BGZPtKoW.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-kQ_rAEUm.js";import{u as x}from"./useLayout-C79Rlsp8.js";import{a as T}from"./useLocale-CK3zT5V1.js";import{F as E}from"./Flex-Ban15jaQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-AGWoK93p.js";import"./HeartFill-eUvTfMnV.js";import"./InboxFill-BVaETFp9.js";import"./Plus-C9Ly1iUu.js";import"./PersonCircle-CdjUhda0.js";import"./Bookmark-DVzoDjOU.js";import"./Archive-DK4jYBW-.js";import"./Trash-CAj2zqGr.js";import"./InformationSquare-CvBtG7YX.js";import"./globalMenu-El17ckVw.js";import"./Buildings2-BpgQmtsT.js";import"./MenuGrid-y_SpFQ9X.js";import"./MagnifyingGlass-BNJradcO.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-B925TUjB.js";import"./Banner-BPzmz5Ks.js";import"./Heading-CE6yLC7h.js";import"./useHighlightedText-BFt57PCX.js";import"./Typography-CUBjJcUl.js";import"./GlobalHeader-B2QzOWd5.js";import"./GlobalAccountButton-7E-72DTR.js";import"./Avatar-BkRf-LcA.js";import"./ChevronDown-BoDhB4yd.js";import"./Enter-DptF4vYL.js";import"./GlobalMenuButton-BdSZ5wBl.js";import"./MenuHamburger-WeCbK5N8.js";import"./Badge-CGTcd0en.js";import"./Tooltip-BRmZYzim.js";import"./ChevronUp-C_S4jFxx.js";import"./Dropdown-DHo9FStr.js";import"./AccountSelector-cIA8f3j9.js";import"./SearchField-Cr3Gi8TV.js";import"./FieldBase-DD97eycm.js";import"./Field-Dc25EUil.js";import"./Label-CJtMWK76.js";import"./Input-2Gn2X0Ml.js";import"./useMenu-Cr8gFQCV.js";import"./MenuListItem-BiOJri4m.js";import"./MenuListHeading-CMTKGvH9.js";import"./MenuItem-L68RSDFn.js";import"./ItemMedia-DUTgrI06.js";import"./AvatarGroup-o6Z87nDX.js";import"./Checkmark-DJVRCLhU.js";import"./ItemLabel-C58CsJMo.js";import"./ItemControls-DoOKV45e.js";import"./ChevronRight-C3Cb2zNm.js";import"./index-BdOTeIXC.js";import"./Switch-C2kkkoTe.js";import"./AccountMenu-DkgyqEhD.js";import"./GlobalMenu-CNgP95TM.js";import"./ArrowUndo-D_q0f42e.js";import"./Globe-gp5NDpeK.js";import"./BreadcrumbsLink-BxvaO_FK.js";import"./ArrowRight-BaYUyriL.js";import"./Footer-DQaZIBie.js";import"./useAccountMenu--1Epqf63.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
