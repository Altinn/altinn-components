var w=Object.defineProperty;var o=(e,c)=>w(e,"name",{value:c,configurable:!0});import{a7 as r,x as d,aa as a}from"./iframe-C_3qWz8U.js";import{A as u}from"./AccountSelector-6kku4Vx_.js";import{u as T,g as R}from"./accountDataFetchers-KRvrNrA7.js";import{u as L}from"./useGlobalHeader-DsvIxCVo.js";import"./preload-helper-Cc2_yIPf.js";import"./SearchField-wVxLElBM.js";import"./MagnifyingGlass-h5bwwa2w.js";import"./FieldBase-2HPCGFYx.js";import"./Typography-BcJ8Dd08.js";import"./useHighlightedText-ChiMW-L8.js";import"./Field-D_aQ-GwQ.js";import"./Label-El1js8iZ.js";import"./Input-BnIvU9G4.js";import"./useMenu-DHyqVfH8.js";import"./MenuListItem-BXhczEyE.js";import"./MenuListDivider-HcjopcmV.js";import"./MenuListHeading-CcIf8Q21.js";import"./MenuItem-Dx8f33T4.js";import"./ItemMedia-Cj3xkQia.js";import"./Avatar-DoTE2KMY.js";import"./AvatarGroup-CYCsQlmU.js";import"./Checkmark-BxM9iGty.js";import"./ItemLabel-D1WDG3AN.js";import"./Heading-mFc3Xe1m.js";import"./ItemControls-B-e7R4IL.js";import"./Badge-BBubxNU6.js";import"./Tooltip-oYeDkYvf.js";import"./ChevronRight-Cfc1KVT6.js";import"./InformationSquare-BJVzaHsz.js";import"./Switch-Br6FtIP2.js";import"./AccountMenu-BoZildmP.js";import"./useIsDesktop-DKESkq3h.js";import"./name-Dr5DH52l.js";import"./HeartFill-hsfVC7cP.js";import"./useLocale-D4eqsiYd.js";import"./globalMenu-BpzYzkGb.js";import"./PersonCircle-B6fG4_ys.js";import"./Buildings2-DI2Qx4qD.js";import"./InboxFill-BXPi7rH2.js";import"./MenuGrid-DrCpJymH.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-CQqchivH.js";import"./Archive-BEuDz18x.js";import"./Trash-CF3fiEwO.js";import"./useAccountMenu-DyAD_b2o.js";const Te={title:"Layout/AccountSelector",component:u,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},m=o(e=>{const c=L({}).accountSelector;return r.jsx(d,{children:r.jsx(u,{...c,forceOpenFullScreen:e.forceOpenFullScreen})})},"WithAccounts"),g=o(e=>r.jsx(d,{children:r.jsx(u,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),"NoAccounts"),S=o(e=>r.jsx(d,{children:r.jsx(u,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})}),"Loading"),l="167536b5-f8ed-4c5a-8f48-0279507e53ae",C={partyUuid:l,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},z=o((e,c)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:c,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),"makeOrgParty"),v=o((e,c=0)=>{const i=Array.from({length:e-1},(p,n)=>z(n+1,n<c));return[C,...i]},"buildParties"),P=o(({args:e,parties:c})=>{const[i,p]=a.useState([]),[n,F]=a.useState(!0),[O,y]=a.useState(l),b=T({partyListDTO:c,favoriteAccountUuids:i,onToggleFavorite:o(t=>{p(s=>s.includes(t)?s.filter(x=>x!==t):[...s,t])},"onToggleFavorite"),selfAccountUuid:l,currentAccountUuid:O,onSelectAccount:o(t=>{y(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:n,onShowDeletedUnitsChange:o(t=>{F(t)},"onShowDeletedUnitsChange")});return r.jsx(d,{languageCode:"nb",children:r.jsx(u,{...b,forceOpenFullScreen:e.forceOpenFullScreen})})},"AccountSelectorDemo"),A=o(e=>{const[c,i]=a.useState([]),[p,n]=a.useState(!1),[F,O]=a.useState(l),y=R(),b=T({partyListDTO:y,favoriteAccountUuids:c,onToggleFavorite:o(t=>{i(s=>s.includes(t)?s.filter(x=>x!==t):[...s,t])},"onToggleFavorite"),selfAccountUuid:l,currentAccountUuid:F,onSelectAccount:o(t=>{O(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:p,onShowDeletedUnitsChange:o(t=>{n(t)},"onShowDeletedUnitsChange")});return r.jsx(d,{languageCode:"nb",children:r.jsx(u,{...b,forceOpenFullScreen:e.forceOpenFullScreen})})},"UsingUseAccountHook"),f=o(e=>r.jsx(P,{args:e,parties:v(3)}),"ThreeAccounts"),h=o(e=>r.jsx(P,{args:e,parties:v(4,1)}),"FourAccountsOneDeleted"),U=o(e=>r.jsx(P,{args:e,parties:v(6,3)}),"SixAccountsThreeDeleted"),D=o(e=>r.jsx(P,{args:e,parties:v(10)}),"TenAccountsNoneDeleted");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  const accountSelector = useGlobalHeader({}).accountSelector as AccountSelectorProps;
  return <RootProvider>
      <AccountSelector {...accountSelector} forceOpenFullScreen={args.forceOpenFullScreen} />
    </RootProvider>;
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} />
    </RootProvider>;
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} loading />
    </RootProvider>;
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(false);
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(SELF_UUID);
  const authorizedParties = getAuthorizedPartiesData();
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
      <AccountSelector {...accountSelector} forceOpenFullScreen={args.forceOpenFullScreen} />
    </RootProvider>;
}`,...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"(args: AccountSelectorProps) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(args: AccountSelectorProps) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...h.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:"(args: AccountSelectorProps) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...U.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"(args: AccountSelectorProps) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...D.parameters?.docs?.source}}};const je=["WithAccounts","NoAccounts","Loading","UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];export{h as FourAccountsOneDeleted,S as Loading,g as NoAccounts,U as SixAccountsThreeDeleted,D as TenAccountsNoneDeleted,f as ThreeAccounts,A as UsingUseAccountHook,m as WithAccounts,je as __namedExportsOrder,Te as default};
