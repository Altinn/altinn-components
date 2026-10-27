var O=Object.defineProperty;var o=(e,r)=>O(e,"name",{value:r,configurable:!0});import{a5 as s,a8 as i,w}from"./iframe-CplFPuE2.js";import{u as T,g as j}from"./accountDataFetchers-Cq9dl9Xh.js";import{a as z}from"./inboxMenu-BbwdQEZ1.js";import{f as I}from"./footer-w2jkxXbY.js";import{h as E}from"./header-OLW70M6w.js";import{s as M}from"./skipLink-a-xnxnVi.js";import{L as F}from"./Layout-DP26g9fu.js";import{u as x}from"./useLayout-eHGoyRSa.js";import{a as P}from"./useLocale-CFpX76Nf.js";import{F as R}from"./Flex-CoXKQauA.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-CmVRZlHm.js";import"./name-Dr5DH52l.js";import"./HeartFill-CCjIgyb1.js";import"./InboxFill-u0vQs3UT.js";import"./Plus-Cjvj3mBz.js";import"./PersonCircle-CYa0pHIh.js";import"./Bookmark-BJQ0a4vS.js";import"./Archive-YBefTHiT.js";import"./Trash-DVLYtG5v.js";import"./InformationSquare-CTMDR6or.js";import"./globalMenu-DRK-Ye3A.js";import"./Buildings2-BYsgmedO.js";import"./MenuGrid-vv6hTZbm.js";import"./MagnifyingGlass-BqSMzz0M.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-sK2faEPI.js";import"./CookieBanner-BgZliC6U.js";import"./Heading-H6e_lYEN.js";import"./useHighlightedText-BpzjnQwF.js";import"./Typography-pPFkmvZJ.js";import"./Link-CMftgIk_.js";import"./Banner-CzeU5Q0W.js";import"./GlobalHeader-SKQU1uDp.js";import"./GlobalAccountButton-BERkiVLH.js";import"./Avatar-B3ASgMQL.js";import"./ChevronDown-DzeGgGZr.js";import"./Enter-Cwjyt1wf.js";import"./GlobalMenuButton-BNydYUFB.js";import"./MenuHamburger-BPHgOQ4b.js";import"./Badge-BWoGIkg0.js";import"./Tooltip-Dh3mcs7O.js";import"./ChevronUp-Dm28ImCZ.js";import"./Dropdown-CIbRGvoU.js";import"./AccountSelector-BI05tbaS.js";import"./SearchField-4LhcGogw.js";import"./MenuListItem-Dyh-W5SZ.js";import"./MenuListHeading-9B-ZCwvC.js";import"./MenuItem-DVl7YcIV.js";import"./ItemMedia-BtRJ3M2I.js";import"./AvatarGroup-B9EoMI2b.js";import"./Checkmark-Cdr1Cy4X.js";import"./ItemLabel-B29_b0Yb.js";import"./ItemControls-KQk_c0UL.js";import"./ChevronRight-44eUUhYn.js";import"./FieldBase-BHrQkTmp.js";import"./Field-DmUVDlMz.js";import"./Label-C9lUUP0G.js";import"./Input-BNktXmCP.js";import"./useMenu-Ct0wDmor.js";import"./MenuListDivider-CcRb0ndu.js";import"./Switch-Bduvd3lO.js";import"./AccountMenu-BTd4-rYQ.js";import"./GlobalMenu-C49hRwgU.js";import"./ArrowUndo-D1R9ATiN.js";import"./Globe-N6PuO_kS.js";import"./BreadcrumbsLink-BPjCl2zG.js";import"./ArrowRight-BZ_DNn6R.js";import"./Footer-BSpnSp3p.js";import"./useAccountMenu-Dv4Sdotu.js";const st={title:"Layout/AccountSelector/In Layout",component:F,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
selector behaves alongside the header, sidebar and global menu. The same
cases are available as standalone-component stories under Layout/AccountSelector.`}}},args:{theme:"subtle",skipLink:M,header:E,footer:I,sidebar:{menu:z},children:s.jsxs(R,{align:"center",justify:"center",style:{border:"1px dashed",width:"100%",height:"100%",gap:5},children:["Content",s.jsx("a",{href:"https://altinn.no",children:"with a focusable item"})]}),color:"company",forceOpenFullScreen:void 0},argTypes:{color:{control:"select",options:["company","neutral","person"]},forceOpenFullScreen:{control:"select",options:[!0,!1,void 0]}}},u="167536b5-f8ed-4c5a-8f48-0279507e53ae",k={partyUuid:u,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},N=o((e,r)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:r,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),"makeOrgParty"),A=o((e,r=0)=>{const a=Array.from({length:e-1},(l,c)=>N(c+1,c<r));return[k,...a]},"buildParties"),S=o(({args:e,parties:r})=>{const a=x(e),l=P({accountId:"diaspora"}),[c,f]=i.useState([]),[y,U]=i.useState(!0),[D,b]=i.useState(u),L=T({partyListDTO:r,favoriteAccountUuids:c,onToggleFavorite:o(t=>{f(n=>n.includes(t)?n.filter(v=>v!==t):[...n,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:D,onSelectAccount:o(t=>{b(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:y,onShowDeletedUnitsChange:o(t=>{U(t)},"onShowDeletedUnitsChange")});return s.jsx(w,{languageCode:"nb",children:s.jsx(F,{...e,...a,header:{...a.header,accountSelector:L,globalMenu:l},children:e.children})})},"AccountSelectorDemo"),d=o(e=>{const r=x(e),a=P({accountId:"diaspora"}),[l,c]=i.useState([]),[f,y]=i.useState(!1),[U,D]=i.useState(u),b=j(),L=T({partyListDTO:b,favoriteAccountUuids:l,onToggleFavorite:o(t=>{c(n=>n.includes(t)?n.filter(v=>v!==t):[...n,t])},"onToggleFavorite"),selfAccountUuid:u,currentAccountUuid:U,onSelectAccount:o(t=>{D(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:f,onShowDeletedUnitsChange:o(t=>{y(t)},"onShowDeletedUnitsChange")});return s.jsx(w,{languageCode:"nb",children:s.jsx(F,{...e,...r,header:{...r.header,accountSelector:L,globalMenu:a},children:e.children})})},"UsingUseAccountHook"),p=o(e=>s.jsx(S,{args:e,parties:A(3)}),"ThreeAccounts"),m=o(e=>s.jsx(S,{args:e,parties:A(4,1)}),"FourAccountsOneDeleted"),g=o(e=>s.jsx(S,{args:e,parties:A(6,3)}),"SixAccountsThreeDeleted"),h=o(e=>s.jsx(S,{args:e,parties:A(10)}),"TenAccountsNoneDeleted"),nt=["UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: LayoutStoryArgs) => {
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...h.parameters?.docs?.source}}};export{m as FourAccountsOneDeleted,g as SixAccountsThreeDeleted,h as TenAccountsNoneDeleted,p as ThreeAccounts,d as UsingUseAccountHook,nt as __namedExportsOrder,st as default};
