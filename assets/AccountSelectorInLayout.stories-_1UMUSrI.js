var O=Object.defineProperty;var o=(e,r)=>O(e,"name",{value:r,configurable:!0});import{a5 as s,a8 as i,w}from"./iframe-zDfzPjQ-.js";import{u as T,g as j}from"./accountDataFetchers-CFDy7X5F.js";import{a as z}from"./inboxMenu-Be_qSTBE.js";import{f as I}from"./footer-w2jkxXbY.js";import{h as E}from"./header-CRfS1HMY.js";import{s as M}from"./skipLink-a-xnxnVi.js";import{L as F}from"./Layout-vglnJcol.js";import{u as x}from"./useLayout-B2QbmWB-.js";import{a as P}from"./useLocale-ViVT72na.js";import{F as R}from"./Flex-D4woKuNy.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-CHtQ0585.js";import"./name-Dr5DH52l.js";import"./HeartFill-DWq4EM8k.js";import"./InboxFill-BQBSHFpa.js";import"./Plus-CbNnKwCf.js";import"./PersonCircle-BRcEdbYJ.js";import"./Bookmark-BunPpgRi.js";import"./Archive-CJqTsyOd.js";import"./Trash-BQPU0aQd.js";import"./InformationSquare-DREHqyul.js";import"./globalMenu-CATmCGAI.js";import"./Buildings2-Cmv8W-Bb.js";import"./MenuGrid-YVJRjo8W.js";import"./MagnifyingGlass-D8qauCMU.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./SkipLink-B0UTbIld.js";import"./CookieBanner--YWLAuhK.js";import"./Heading-CKFRzaKs.js";import"./useHighlightedText-BKf3y1mD.js";import"./Typography-D20OWptm.js";import"./Link-CuRpULv0.js";import"./Banner-BTGqFQQN.js";import"./GlobalHeader-BcYMQlI_.js";import"./GlobalAccountButton-O-pPWwwx.js";import"./Avatar-D3LaL2hn.js";import"./ChevronDown-D8vGjyTz.js";import"./Enter-DgRxpL9L.js";import"./GlobalMenuButton-CfqvwCN8.js";import"./MenuHamburger-BTQ1djkk.js";import"./Badge-aBFHXHYf.js";import"./Tooltip-B0sYZQl4.js";import"./ChevronUp-0LePS4pY.js";import"./Dropdown-CgXp4lfy.js";import"./AccountSelector-BlqOghqB.js";import"./SearchField-BRYpM6iz.js";import"./MenuListItem-C5YqUBJw.js";import"./MenuListHeading-adQ6tRoH.js";import"./MenuItem-BBg2qC2v.js";import"./ItemMedia-C2cNA_4j.js";import"./AvatarGroup-CvMpJghk.js";import"./Checkmark-BOXV2bQM.js";import"./ItemLabel-CLN34YKw.js";import"./ItemControls-D2gn34WX.js";import"./ChevronRight-NBomJvaL.js";import"./FieldBase-DhhNDbiD.js";import"./Field-DD9eOhx2.js";import"./Label-D889KtIj.js";import"./Input-Cng2zass.js";import"./useMenu-D1ILj_Qw.js";import"./MenuListDivider-DUIlDVWP.js";import"./Switch-DIWrH6AQ.js";import"./AccountMenu-SuH1iVbF.js";import"./GlobalMenu-DP6fa-WF.js";import"./ArrowUndo-DTnO_IVt.js";import"./Globe-EZ3f66Yc.js";import"./BreadcrumbsLink-D_kHep3B.js";import"./ArrowRight-Ce_4bhkg.js";import"./Footer-BbNaOC5C.js";import"./useAccountMenu-KzwaMil7.js";const st={title:"Layout/AccountSelector/In Layout",component:F,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
