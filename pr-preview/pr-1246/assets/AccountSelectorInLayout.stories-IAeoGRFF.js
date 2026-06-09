import{a7 as o,aa as n,x as F}from"./iframe-D6Pw3lmv.js";import{u as w,g as C}from"./accountDataFetchers-BS99Uo4u.js";import{a as O}from"./inboxMenu-Mnnjx20K.js";import{f as j}from"./footer-C_FbMSyz.js";import{h as z}from"./header-CnTAJo3E.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-CwNHuIGl.js";import{u as x}from"./useLayout-LfG23pH5.js";import{a as T}from"./useLocale-CckT707P.js";import{F as E}from"./Flex-CRGRbwD2.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-7_H-1XDj.js";import"./HeartFill-CgHy8U4l.js";import"./InboxFill-j6jQxy97.js";import"./Plus-yZ7u7aad.js";import"./PersonCircle-BTLC5Zvt.js";import"./Bookmark-DaI5CD2v.js";import"./Archive-CA4pjqQu.js";import"./Trash-B3d5chwP.js";import"./InformationSquare-D2Bd0bEl.js";import"./globalMenu-D0sKesKO.js";import"./Buildings2-BaIjKe8w.js";import"./MenuGrid-DNKVbrWb.js";import"./MagnifyingGlass-xEXh01wv.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-Dr2pSQlS.js";import"./Banner-sn-Q5tmD.js";import"./Heading-Bsu5tLR0.js";import"./useHighlightedText-iOuYupmt.js";import"./Typography-bPKdoJNM.js";import"./GlobalHeader-q-BY9sFU.js";import"./GlobalAccountButton-FshSIaE5.js";import"./Avatar-BMlUzpXZ.js";import"./ChevronDown-CBhAS_PQ.js";import"./Enter-BA1biyqm.js";import"./GlobalMenuButton-Cp5uiN-M.js";import"./MenuHamburger-DaPB2oTh.js";import"./Badge-CVXUfZnL.js";import"./Tooltip-BRKe6VnT.js";import"./ChevronUp-vVDQNUNf.js";import"./Dropdown-DnYymeta.js";import"./AccountSelector-CtJq3hwS.js";import"./SearchField-EcYIPpv0.js";import"./FieldBase-q3f36oGg.js";import"./Field-FWJUOm-g.js";import"./Label-DQDgnIdR.js";import"./Input-BPiAPMWI.js";import"./useMenu-AaKLsWFm.js";import"./MenuListItem-CdJ_uFA7.js";import"./MenuListHeading-CMCHjdRB.js";import"./MenuItem-4x07-Z8Y.js";import"./ItemMedia-BWttq_aD.js";import"./AvatarGroup-AckQ-RzX.js";import"./Checkmark-CdsVcBub.js";import"./ItemLabel-BLZeZ0XA.js";import"./ItemControls-DN7HEIDI.js";import"./ChevronRight-DrJyRyMs.js";import"./index-CjPQDnhT.js";import"./Switch-DTtTZAwl.js";import"./AccountMenu-CyGLqcYr.js";import"./GlobalMenu-Cw_AcEfT.js";import"./ArrowUndo-EhrKGXZn.js";import"./Globe-BCYHihqy.js";import"./BreadcrumbsLink-DxLhd7PP.js";import"./ArrowRight-C4ZxVRSW.js";import"./Footer-YZCYtUnl.js";import"./useAccountMenu-Qoe42D3Q.js";const Ye={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
