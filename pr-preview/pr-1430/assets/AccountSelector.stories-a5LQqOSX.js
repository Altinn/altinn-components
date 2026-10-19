var F=Object.defineProperty;var t=(e,c)=>F(e,"name",{value:c,configurable:!0});import{a7 as r,x as l,aa as a}from"./iframe-C7zNVDTT.js";import{A as u}from"./AccountSelector-Lplja8Da.js";import{u as j,g as R}from"./accountDataFetchers-DdXN4vVa.js";import{u as L}from"./useGlobalHeader-A6BnfiIM.js";import"./preload-helper-Cc2_yIPf.js";import"./SearchField-DGzlCViu.js";import"./MagnifyingGlass-D6hMH6h9.js";import"./FieldBase-CRVXDoio.js";import"./Typography-4gq5i4xU.js";import"./useHighlightedText-CLjqXK08.js";import"./Field-C_oHAtV1.js";import"./Label-CAjho_cW.js";import"./Input-CFKt0A_s.js";import"./useMenu-CRscwWGI.js";import"./MenuListItem-BTzpN6s4.js";import"./MenuListDivider-DPPFUY5F.js";import"./MenuListHeading-DE-GHA8Q.js";import"./MenuItem-BFxBNv1B.js";import"./ItemMedia-89sj9-D5.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./Checkmark-BpQLEI_t.js";import"./ItemLabel-BTO4WUhi.js";import"./Heading-gv6s55oV.js";import"./ItemControls-CUub_53H.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./ChevronRight-DIApXsrk.js";import"./InformationSquare-BvDWZ3oM.js";import"./Switch-BTuJol9o.js";import"./AccountMenu-3SdWfky9.js";import"./useIsDesktop-DvOzZNPR.js";import"./name-Dr5DH52l.js";import"./HeartFill-Be15i5fa.js";import"./useLocale-C47f_wVY.js";import"./globalMenu-DZwWJtIL.js";import"./PersonCircle-Dtb1J2KT.js";import"./Buildings2-C52yfc6A.js";import"./InboxFill-C72yjiaX.js";import"./MenuGrid-BCmbKjow.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-DMj8vedD.js";import"./Archive-k3j1nRib.js";import"./Trash-DXsDcsqv.js";import"./useAccountMenu-uA8btcNE.js";const je={title:"Layout/AccountSelector",component:u,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},loading:{control:"boolean"}}},m=t(()=>{const e=L({}).accountSelector;return r.jsx(l,{children:r.jsx(u,{...e})})},"WithAccounts"),g=t(e=>r.jsx(l,{children:r.jsx(u,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),"NoAccounts"),A=t(e=>r.jsx(l,{children:r.jsx(u,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})}),"Loading"),d="167536b5-f8ed-4c5a-8f48-0279507e53ae",C={partyUuid:d,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},z=t((e,c)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:c,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),"makeOrgParty"),v=t((e,c=0)=>{const i=Array.from({length:e-1},(p,n)=>z(n+1,n<c));return[C,...i]},"buildParties"),P=t(({parties:e})=>{const[c,i]=a.useState([]),[p,n]=a.useState(!0),[y,x]=a.useState(d),b=j({partyListDTO:e,favoriteAccountUuids:c,onToggleFavorite:t(o=>{i(s=>s.includes(o)?s.filter(T=>T!==o):[...s,o])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:y,onSelectAccount:t(o=>{x(o)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:p,onShowDeletedUnitsChange:t(o=>{n(o)},"onShowDeletedUnitsChange")});return r.jsx(l,{languageCode:"nb",children:r.jsx(u,{...b})})},"AccountSelectorDemo"),S=t(()=>{const[e,c]=a.useState([]),[i,p]=a.useState(!1),[n,y]=a.useState(d),x=R(),b=j({partyListDTO:x,favoriteAccountUuids:e,onToggleFavorite:t(o=>{c(s=>s.includes(o)?s.filter(T=>T!==o):[...s,o])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:n,onSelectAccount:t(o=>{y(o)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:i,onShowDeletedUnitsChange:t(o=>{p(o)},"onShowDeletedUnitsChange")});return r.jsx(l,{languageCode:"nb",children:r.jsx(u,{...b})})},"UsingUseAccountHook"),h=t(()=>r.jsx(P,{parties:v(3)}),"ThreeAccounts"),U=t(()=>r.jsx(P,{parties:v(4,1)}),"FourAccountsOneDeleted"),f=t(()=>r.jsx(P,{parties:v(6,3)}),"SixAccountsThreeDeleted"),D=t(()=>r.jsx(P,{parties:v(10)}),"TenAccountsNoneDeleted");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const accountSelector = useGlobalHeader({}).accountSelector as AccountSelectorProps;
  return <RootProvider>
      <AccountSelector {...accountSelector} />
    </RootProvider>;
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} />
    </RootProvider>;
}`,...g.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} loading />
    </RootProvider>;
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
      <AccountSelector {...accountSelector} />
    </RootProvider>;
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildParties(3)} />",...h.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildParties(4, 1)} />",...U.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildParties(6, 3)} />",...f.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildParties(10)} />",...D.parameters?.docs?.source}}};const we=["WithAccounts","NoAccounts","Loading","UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];export{U as FourAccountsOneDeleted,A as Loading,g as NoAccounts,f as SixAccountsThreeDeleted,D as TenAccountsNoneDeleted,h as ThreeAccounts,S as UsingUseAccountHook,m as WithAccounts,we as __namedExportsOrder,je as default};
