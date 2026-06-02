import{a7 as o,aa as n,x as F}from"./iframe-DxDA2A5n.js";import{u as w,g as C}from"./accountDataFetchers-Dz-4kllD.js";import{a as O}from"./inboxMenu-CL_n87Gs.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-DtzApzwV.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-BAI3eunZ.js";import{u as x}from"./useLayout-C1wJccUe.js";import{a as T}from"./useLocale-CjscI9ov.js";import{F as E}from"./Flex-CfINokNW.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-RJ_PrM3C.js";import"./HeartFill-D6SH56Jk.js";import"./InboxFill-DcUbEHeg.js";import"./Plus-BRpGG8-t.js";import"./PersonCircle-Cl8qDIya.js";import"./Bookmark-DPqwRFOB.js";import"./Archive-BP8GRpZJ.js";import"./Trash-Cq15ZLAx.js";import"./InformationSquare-D_k5oT3G.js";import"./globalMenu-DA45JJBH.js";import"./Buildings2-BHAYTXA3.js";import"./MenuGrid-BnnvUGyZ.js";import"./MagnifyingGlass-CEr-rPcN.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-CR6gNYnp.js";import"./Banner-BoWc2ajf.js";import"./Heading-CDQRp2wK.js";import"./useHighlightedText-CKLIlaha.js";import"./Typography-BpmyNFuo.js";import"./GlobalHeader-nX9Hnel7.js";import"./GlobalAccountButton-BxZcOP3U.js";import"./Avatar-CZW-u89b.js";import"./ChevronDown-Cl8SGDa2.js";import"./Enter-BtGZyTuG.js";import"./GlobalMenuButton-BEhXHvT6.js";import"./MenuHamburger-SuiAu3Wg.js";import"./Badge-DAAwIuMb.js";import"./Tooltip-ClLj-W4n.js";import"./ChevronUp-ChUSKAgV.js";import"./Dropdown-BtLUP2GJ.js";import"./AccountSelector-C-M1O6Hc.js";import"./SearchField-m29TWzvo.js";import"./FieldBase-D6edMMqi.js";import"./Field-DCiIS6vX.js";import"./Label-Du-ZQ2TI.js";import"./Input-DR3-2m3e.js";import"./useMenu-CesabFz-.js";import"./MenuListItem-CLXsOloJ.js";import"./MenuListHeading-JM3VtJKJ.js";import"./MenuItem-DvVfNxyY.js";import"./ItemMedia-CnqN7ZMq.js";import"./AvatarGroup-nVAkNLkO.js";import"./Checkmark-NOoe9XBa.js";import"./ItemLabel-pZuDHhkH.js";import"./ItemControls-BB5vmDik.js";import"./ChevronRight-B7TpiReR.js";import"./index-BrQU956K.js";import"./Switch-yAEuxwZz.js";import"./AccountMenu-Rflthn1L.js";import"./GlobalMenu-DAsJ4E4k.js";import"./ArrowUndo-kdrF5Cj9.js";import"./Globe-Cj3PifZU.js";import"./BreadcrumbsLink-Dll_MhVD.js";import"./ArrowRight-BGnV3_uY.js";import"./Footer-xUhwf7dH.js";import"./useAccountMenu-CLz_Znrm.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
