var w=Object.defineProperty;var o=(e,c)=>w(e,"name",{value:c,configurable:!0});import{a7 as r,x as d,aa as a}from"./iframe-BhbNl8M-.js";import{A as u}from"./AccountSelector-Bq_sOzpk.js";import{u as T,g as R}from"./accountDataFetchers-DyyjmHcG.js";import{u as L}from"./useGlobalHeader-B7_97Kyy.js";import"./preload-helper-Cc2_yIPf.js";import"./SearchField-ClYBiZmS.js";import"./MagnifyingGlass-CzKquxqQ.js";import"./FieldBase--SCvu2WQ.js";import"./Typography-DcyIPmTi.js";import"./useHighlightedText-LhTntwcL.js";import"./Field-Qg24LC8p.js";import"./Label-BJPwmzpN.js";import"./Input-jGspNcB3.js";import"./useMenu-6KerkDf-.js";import"./MenuListItem-CmOECRgU.js";import"./MenuListDivider-DzxdVQ89.js";import"./MenuListHeading-DAQ9yky2.js";import"./MenuItem-C2AE0J9V.js";import"./ItemMedia-1lh8-vEh.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./Checkmark-CzAA5vNN.js";import"./ItemLabel-BJSi7rzf.js";import"./Heading-Cykhux0L.js";import"./ItemControls-Enh4UL9O.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./ChevronRight-DG59p-Nv.js";import"./InformationSquare-9qL3pT6L.js";import"./Switch-HPZGYIQM.js";import"./AccountMenu-C1XnEBmu.js";import"./useIsDesktop-CoNfvEt7.js";import"./name-Dr5DH52l.js";import"./HeartFill-DKoAVF2-.js";import"./useLocale-4qyXxddG.js";import"./globalMenu-DLp0UzhL.js";import"./PersonCircle-CSh1iTk6.js";import"./Buildings2-4YKnHmoY.js";import"./InboxFill-C-Gznw1O.js";import"./MenuGrid-DTjxVVPA.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-fWw4PRdh.js";import"./Archive-CfOkFSG4.js";import"./Trash-Df4Pkq18.js";import"./useAccountMenu-CB1eDk4k.js";const Te={title:"Layout/AccountSelector",component:u,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},m=o(e=>{const c=L({}).accountSelector;return r.jsx(d,{children:r.jsx(u,{...c,forceOpenFullScreen:e.forceOpenFullScreen})})},"WithAccounts"),g=o(e=>r.jsx(d,{children:r.jsx(u,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),"NoAccounts"),S=o(e=>r.jsx(d,{children:r.jsx(u,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})}),"Loading"),l="167536b5-f8ed-4c5a-8f48-0279507e53ae",C={partyUuid:l,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},z=o((e,c)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:c,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),"makeOrgParty"),v=o((e,c=0)=>{const i=Array.from({length:e-1},(p,n)=>z(n+1,n<c));return[C,...i]},"buildParties"),P=o(({args:e,parties:c})=>{const[i,p]=a.useState([]),[n,F]=a.useState(!0),[O,y]=a.useState(l),b=T({partyListDTO:c,favoriteAccountUuids:i,onToggleFavorite:o(t=>{p(s=>s.includes(t)?s.filter(x=>x!==t):[...s,t])},"onToggleFavorite"),selfAccountUuid:l,currentAccountUuid:O,onSelectAccount:o(t=>{y(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:n,onShowDeletedUnitsChange:o(t=>{F(t)},"onShowDeletedUnitsChange")});return r.jsx(d,{languageCode:"nb",children:r.jsx(u,{...b,forceOpenFullScreen:e.forceOpenFullScreen})})},"AccountSelectorDemo"),A=o(e=>{const[c,i]=a.useState([]),[p,n]=a.useState(!1),[F,O]=a.useState(l),y=R(),b=T({partyListDTO:y,favoriteAccountUuids:c,onToggleFavorite:o(t=>{i(s=>s.includes(t)?s.filter(x=>x!==t):[...s,t])},"onToggleFavorite"),selfAccountUuid:l,currentAccountUuid:F,onSelectAccount:o(t=>{O(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:p,onShowDeletedUnitsChange:o(t=>{n(t)},"onShowDeletedUnitsChange")});return r.jsx(d,{languageCode:"nb",children:r.jsx(u,{...b,forceOpenFullScreen:e.forceOpenFullScreen})})},"UsingUseAccountHook"),f=o(e=>r.jsx(P,{args:e,parties:v(3)}),"ThreeAccounts"),h=o(e=>r.jsx(P,{args:e,parties:v(4,1)}),"FourAccountsOneDeleted"),U=o(e=>r.jsx(P,{args:e,parties:v(6,3)}),"SixAccountsThreeDeleted"),D=o(e=>r.jsx(P,{args:e,parties:v(10)}),"TenAccountsNoneDeleted");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
