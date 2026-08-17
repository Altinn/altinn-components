import{a7 as o,aa as n,x as F}from"./iframe-DE6S9aZ4.js";import{u as w,g as C}from"./accountDataFetchers-OlpZGOAf.js";import{a as O}from"./inboxMenu-BFe0nYBJ.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-C-tjfCRs.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-XNEmL6rw.js";import{u as x}from"./useLayout-CZUoCv3d.js";import{a as T}from"./useLocale-d4xmw1zl.js";import{F as E}from"./Flex-DAi1mqH2.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-DHn9NFnV.js";import"./HeartFill-CYZ6uHxs.js";import"./InboxFill-D-YvJq3L.js";import"./Plus-CwXksV0j.js";import"./PersonCircle-DeHyrgma.js";import"./Bookmark-BKq-XjV2.js";import"./Archive-vICIit_T.js";import"./Trash-DzwQmE5W.js";import"./InformationSquare-BoTINEEI.js";import"./globalMenu-tuXyNd2K.js";import"./Buildings2-gHtbheYR.js";import"./MenuGrid-XXwj7s95.js";import"./MagnifyingGlass-Cw9dgxbo.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-CMJXTqeb.js";import"./Banner-CgGn4ld8.js";import"./Heading-BDklncvD.js";import"./useHighlightedText-C20f3R5e.js";import"./Typography-Cfn_aMgf.js";import"./GlobalHeader-Cul3_W4N.js";import"./GlobalAccountButton-B1iyWna8.js";import"./Avatar-CNN7KBYB.js";import"./ChevronDown-BW8AfmI4.js";import"./Enter-BYRDYIIB.js";import"./GlobalMenuButton-CT08G8W9.js";import"./MenuHamburger-DXcMtlZO.js";import"./Badge-BKORQsmw.js";import"./Tooltip-B3xZNbnc.js";import"./ChevronUp-DiUn2hCV.js";import"./Dropdown-CtTBKP-C.js";import"./AccountSelector-_JFmhpGC.js";import"./SearchField-DLpVp_NL.js";import"./FieldBase-Dqt8MJKx.js";import"./Field-CqVl0h_R.js";import"./Label-MWSbEF7h.js";import"./Input-DHBuxbkq.js";import"./useMenu-BnFUnl7r.js";import"./MenuListItem-CLQjAJhf.js";import"./MenuListDivider-TgKUiY6a.js";import"./MenuListHeading-C_U_JJdE.js";import"./MenuItem-DIQqnyL7.js";import"./ItemMedia-CpnAVdfr.js";import"./AvatarGroup-kG5dzOiP.js";import"./Checkmark-DE4sJMpI.js";import"./ItemLabel-BuYlysP4.js";import"./ItemControls-BOAqxChM.js";import"./ChevronRight-CaR2K8Z7.js";import"./Switch-D8OUSpth.js";import"./AccountMenu-CCss5l2L.js";import"./GlobalMenu-Dnq16ZSP.js";import"./ArrowUndo-0nTHxWEP.js";import"./Globe-I7v1GZNV.js";import"./BreadcrumbsLink-Bfs8jBLi.js";import"./ArrowRight-CYzhC7P8.js";import"./Footer-BFW489-_.js";import"./useAccountMenu-DFjoHscU.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
