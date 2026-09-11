import{a7 as o,aa as n,x as F}from"./iframe-O8cJNgnH.js";import{u as w,g as C}from"./accountDataFetchers-BHNHBw82.js";import{a as O}from"./inboxMenu-DHWVY9pL.js";import{f as j}from"./footer-CHAipfpn.js";import{h as z}from"./header-DR6FzG8p.js";import{s as I}from"./skipLink-a-xnxnVi.js";import{L as v}from"./Layout-BPZkvh1k.js";import{u as x}from"./useLayout-D6g704Zu.js";import{a as T}from"./useLocale-CQTxYMzR.js";import{F as E}from"./Flex-oXvF6uEL.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-gKruwT8Z.js";import"./HeartFill-DZ0-_mJf.js";import"./InboxFill-D53jwawk.js";import"./Plus-B_TKpQ68.js";import"./PersonCircle-DFsXC4V2.js";import"./Bookmark-Dd-YmnKd.js";import"./Archive-DONFQzGx.js";import"./Trash-BjtjrgTY.js";import"./InformationSquare-CwO_8hH0.js";import"./globalMenu-slJXnYFc.js";import"./Buildings2-mGqV0IWF.js";import"./MenuGrid-d3TXurNa.js";import"./MagnifyingGlass-DHpnscJf.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./SkipLink-ZXmdgcQ7.js";import"./CookieBanner-JHp58kq2.js";import"./Heading-BdhLm3SL.js";import"./useHighlightedText-CnUjn7TA.js";import"./Typography-DU3EjiaL.js";import"./Banner-SKSmbGw2.js";import"./GlobalHeader-D7KpADKP.js";import"./GlobalAccountButton-WM-k1A8t.js";import"./Avatar-D8-vsJJv.js";import"./ChevronDown-D0blAyPo.js";import"./Enter-BjA-K0sq.js";import"./GlobalMenuButton-C-ic7Lpw.js";import"./MenuHamburger-D2jzHCCp.js";import"./Badge-BEBeTMrY.js";import"./Tooltip-BrWx-R_c.js";import"./ChevronUp-C3suJ612.js";import"./Dropdown-DmhW7MY5.js";import"./AccountSelector-BIznGGXq.js";import"./SearchField-bcjP3Rbv.js";import"./FieldBase-SXGcT6A1.js";import"./Field-C6gWhPtJ.js";import"./Label-Bx5yqb_Y.js";import"./Input-BfEZmvKD.js";import"./useMenu-BDnyYHA1.js";import"./MenuListItem-CQjZkQSb.js";import"./MenuListDivider-B5yo7PZG.js";import"./MenuListHeading-kFnOp7Lr.js";import"./MenuItem--4S_Ij0p.js";import"./ItemMedia-DQabxJtZ.js";import"./AvatarGroup-Ra_TR9_v.js";import"./Checkmark-dNVTYLgC.js";import"./ItemLabel-C8aE3_ka.js";import"./ItemControls-Crhi56hp.js";import"./ChevronRight-U0ooHRaY.js";import"./Switch-Bpp6Oj2m.js";import"./AccountMenu-BPF6z5-i.js";import"./GlobalMenu-Dg1_1F4i.js";import"./ArrowUndo-sS0AjGTk.js";import"./Globe-BXt_JmEe.js";import"./BreadcrumbsLink-BHwEYukp.js";import"./ArrowRight-CE4i7h6O.js";import"./Footer-BZWcJIYX.js";import"./useAccountMenu-yjPpXKdc.js";const Ze={title:"Layout/AccountSelector/In Layout",component:v,parameters:{layout:"fullscreen",docs:{description:{component:`AccountSelector demos rendered inside a full Layout, so you can see how the
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
