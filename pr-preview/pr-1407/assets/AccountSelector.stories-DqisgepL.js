var F=Object.defineProperty;var t=(e,c)=>F(e,"name",{value:c,configurable:!0});import{a5 as r,w as l,a8 as a}from"./iframe-CmcSEjvS.js";import{A as u}from"./AccountSelector-DJEPs5Gp.js";import{u as w,g as R}from"./accountDataFetchers-D4DxHn0X.js";import{u as L}from"./useGlobalHeader-ud1F6c9Z.js";import"./preload-helper-Cc2_yIPf.js";import"./SearchField-DQeX1ZYV.js";import"./MagnifyingGlass-C2kDbxXn.js";import"./MenuListItem-BL-id_u-.js";import"./MenuListHeading-BKPqFrC5.js";import"./MenuItem-BJhn9r_O.js";import"./CheckboxUncheckedIcon-BBoJFSSq.js";import"./RadioUncheckedIcon-VgJlolIv.js";import"./ItemMedia-BefRyocx.js";import"./Avatar-e7KasoHp.js";import"./AvatarGroup-CK0XwNSh.js";import"./ItemLabel-s_xPF5R8.js";import"./Heading-vmMoflPs.js";import"./useHighlightedText-DJAL4JcK.js";import"./ItemControls-YGZP0Vjk.js";import"./Badge-DDzGMVSy.js";import"./Tooltip-BzKHjYiv.js";import"./ChevronRight-B5wtiA4y.js";import"./FieldBase-C-IkhlpM.js";import"./Typography-sASlV-kd.js";import"./Field-00i3_VLV.js";import"./Label-C2oW91xs.js";import"./Input-C0nOO2ZR.js";import"./useMenu-C4pen0si.js";import"./MenuListDivider-wZXMjqHS.js";import"./InformationSquare-6xY-3cyl.js";import"./Switch-DKqmfKoy.js";import"./AccountMenu-B1ePtIqN.js";import"./useIsDesktop-BjBT6U_c.js";import"./name-Dr5DH52l.js";import"./HeartFill-vDdmUGil.js";import"./useLocale-CclKqTdY.js";import"./globalMenu-D38oQQCP.js";import"./PersonCircle-DdJu216P.js";import"./Buildings2-BSYY2HHr.js";import"./InboxFill-DULM9wRD.js";import"./MenuGrid-jTVAZ9Ee.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-fmnCZLUz.js";import"./Archive-B4hgbdr3.js";import"./Trash-BCBK84Mw.js";import"./useAccountMenu-CqdFGhFb.js";const je={title:"Layout/AccountSelector",component:u,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},loading:{control:"boolean"}}},m=t(()=>{const e=L({}).accountSelector;return r.jsx(l,{children:r.jsx(u,{...e})})},"WithAccounts"),g=t(e=>r.jsx(l,{children:r.jsx(u,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),"NoAccounts"),A=t(e=>r.jsx(l,{children:r.jsx(u,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})}),"Loading"),d="167536b5-f8ed-4c5a-8f48-0279507e53ae",C={partyUuid:d,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},z=t((e,c)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:c,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),"makeOrgParty"),v=t((e,c=0)=>{const i=Array.from({length:e-1},(p,s)=>z(s+1,s<c));return[C,...i]},"buildParties"),P=t(({parties:e})=>{const[c,i]=a.useState([]),[p,s]=a.useState(!0),[y,b]=a.useState(d),x=w({partyListDTO:e,favoriteAccountUuids:c,onToggleFavorite:t(o=>{i(n=>n.includes(o)?n.filter(T=>T!==o):[...n,o])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:y,onSelectAccount:t(o=>{b(o)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:p,onShowDeletedUnitsChange:t(o=>{s(o)},"onShowDeletedUnitsChange")});return r.jsx(l,{languageCode:"nb",children:r.jsx(u,{...x})})},"AccountSelectorDemo"),S=t(()=>{const[e,c]=a.useState([]),[i,p]=a.useState(!1),[s,y]=a.useState(d),b=R(),x=w({partyListDTO:b,favoriteAccountUuids:e,onToggleFavorite:t(o=>{c(n=>n.includes(o)?n.filter(T=>T!==o):[...n,o])},"onToggleFavorite"),selfAccountUuid:d,currentAccountUuid:s,onSelectAccount:t(o=>{y(o)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:i,onShowDeletedUnitsChange:t(o=>{p(o)},"onShowDeletedUnitsChange")});return r.jsx(l,{languageCode:"nb",children:r.jsx(u,{...x})})},"UsingUseAccountHook"),h=t(()=>r.jsx(P,{parties:v(3)}),"ThreeAccounts"),U=t(()=>r.jsx(P,{parties:v(4,1)}),"FourAccountsOneDeleted"),f=t(()=>r.jsx(P,{parties:v(6,3)}),"SixAccountsThreeDeleted"),D=t(()=>r.jsx(P,{parties:v(10)}),"TenAccountsNoneDeleted"),Fe=["WithAccounts","NoAccounts","Loading","UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildParties(3)} />",...h.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildParties(4, 1)} />",...U.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildParties(6, 3)} />",...f.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildParties(10)} />",...D.parameters?.docs?.source}}};export{U as FourAccountsOneDeleted,A as Loading,g as NoAccounts,f as SixAccountsThreeDeleted,D as TenAccountsNoneDeleted,h as ThreeAccounts,S as UsingUseAccountHook,m as WithAccounts,Fe as __namedExportsOrder,je as default};
