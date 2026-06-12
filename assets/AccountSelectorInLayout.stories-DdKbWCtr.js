import{a7 as o,aa as n,x as F}from"./iframe-DWR_BPge.js";import{u as w,g as C}from"./accountDataFetchers-Tpxpf2JG.js";import{a as O}from"./inboxMenu-Bw9GXWAI.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-DAalrbo9.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-DTTJ7Xp4.js";import{u as x}from"./useLayout-CQS2umG3.js";import{a as T}from"./useLocale-DJa2LSIP.js";import{F as E}from"./Flex-6ZJb0CGr.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-DdH_mZZT.js";import"./HeartFill-fRtY9Ved.js";import"./InboxFill-BSccVKoO.js";import"./Plus-F3v00gKT.js";import"./PersonCircle-DvPby5ZL.js";import"./Bookmark-CIzhTlww.js";import"./Archive-t07JtCRk.js";import"./Trash-D3VLDrQo.js";import"./InformationSquare-DScDoZl7.js";import"./globalMenu-yo8b4zDp.js";import"./Buildings2-Bsk7OURA.js";import"./MenuGrid-DM9DMxk5.js";import"./MagnifyingGlass-G_PIqG58.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-D0EPO6S4.js";import"./Banner-CCPjbEN-.js";import"./Heading-DZv3ITVf.js";import"./useHighlightedText-CxSGKcWS.js";import"./Typography-Ck9DnhQz.js";import"./GlobalHeader-BYtDyOx9.js";import"./GlobalAccountButton-DUBOmq2b.js";import"./Avatar-Cok-GZxK.js";import"./ChevronDown-DyMHpH4k.js";import"./Enter-BY3t1N2F.js";import"./GlobalMenuButton-BTKROSAX.js";import"./MenuHamburger-LlREICSw.js";import"./Badge-DkIfMZHe.js";import"./Tooltip-DTF1wjLo.js";import"./ChevronUp-B_nN6-rE.js";import"./Dropdown-DtgTj7aV.js";import"./AccountSelector-BBcM0hG1.js";import"./SearchField-MQHHZ8_3.js";import"./FieldBase-BMAVe4Iy.js";import"./Field-Ck35a6Qp.js";import"./Label-BsbeMro6.js";import"./Input-_0Vw9ldu.js";import"./useMenu-D6mVZHWX.js";import"./MenuListItem-fkd7gaum.js";import"./MenuListHeading-CnnWm4Yf.js";import"./MenuItem-hCzlas21.js";import"./ItemMedia-CNbHl28k.js";import"./AvatarGroup-CXLQt8Ir.js";import"./Checkmark-DJ-994GJ.js";import"./ItemLabel-D6TsLy-F.js";import"./ItemControls-BuEVWR3X.js";import"./ChevronRight-Byhvri5k.js";import"./index-Cf984nsL.js";import"./Switch-Cw7BxWBg.js";import"./AccountMenu-9n885YDY.js";import"./GlobalMenu-DyiBiW-8.js";import"./ArrowUndo-DNQ5VHUr.js";import"./Globe-C2nJg-Wj.js";import"./BreadcrumbsLink-DNn7cUlp.js";import"./ArrowRight-BDGEOzRy.js";import"./Footer-zRZEA-p5.js";import"./useAccountMenu-BUhzrhNb.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
