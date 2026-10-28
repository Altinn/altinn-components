var j=Object.defineProperty;var o=(e,c)=>j(e,"name",{value:c,configurable:!0});import{a5 as r,w as d,a8 as a}from"./iframe-zDfzPjQ-.js";import{A as u}from"./AccountSelector-BlqOghqB.js";import{u as T,g as R}from"./accountDataFetchers-CFDy7X5F.js";import{u as L}from"./useGlobalHeader-CQ7w-tUE.js";import"./preload-helper-Cc2_yIPf.js";import"./SearchField-BRYpM6iz.js";import"./MagnifyingGlass-D8qauCMU.js";import"./MenuListItem-C5YqUBJw.js";import"./MenuListHeading-adQ6tRoH.js";import"./MenuItem-BBg2qC2v.js";import"./ItemMedia-C2cNA_4j.js";import"./Avatar-D3LaL2hn.js";import"./AvatarGroup-CvMpJghk.js";import"./Checkmark-BOXV2bQM.js";import"./ItemLabel-CLN34YKw.js";import"./Heading-CKFRzaKs.js";import"./useHighlightedText-BKf3y1mD.js";import"./ItemControls-D2gn34WX.js";import"./Badge-aBFHXHYf.js";import"./Tooltip-B0sYZQl4.js";import"./ChevronRight-NBomJvaL.js";import"./FieldBase-DhhNDbiD.js";import"./Typography-D20OWptm.js";import"./Field-DD9eOhx2.js";import"./Label-D889KtIj.js";import"./Input-Cng2zass.js";import"./useMenu-D1ILj_Qw.js";import"./MenuListDivider-DUIlDVWP.js";import"./InformationSquare-DREHqyul.js";import"./Switch-DIWrH6AQ.js";import"./AccountMenu-SuH1iVbF.js";import"./useIsDesktop-CHtQ0585.js";import"./name-Dr5DH52l.js";import"./HeartFill-DWq4EM8k.js";import"./useLocale-ViVT72na.js";import"./globalMenu-CATmCGAI.js";import"./PersonCircle-BRcEdbYJ.js";import"./Buildings2-Cmv8W-Bb.js";import"./InboxFill-BQBSHFpa.js";import"./MenuGrid-YVJRjo8W.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-BunPpgRi.js";import"./Archive-CJqTsyOd.js";import"./Trash-BQPU0aQd.js";import"./useAccountMenu-KzwaMil7.js";const Te={title:"Layout/AccountSelector",component:u,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},m=o(e=>{const c=L({}).accountSelector;return r.jsx(d,{children:r.jsx(u,{...c,forceOpenFullScreen:e.forceOpenFullScreen})})},"WithAccounts"),g=o(e=>r.jsx(d,{children:r.jsx(u,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),"NoAccounts"),S=o(e=>r.jsx(d,{children:r.jsx(u,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})}),"Loading"),l="167536b5-f8ed-4c5a-8f48-0279507e53ae",C={partyUuid:l,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},z=o((e,c)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:c,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),"makeOrgParty"),v=o((e,c=0)=>{const i=Array.from({length:e-1},(p,s)=>z(s+1,s<c));return[C,...i]},"buildParties"),P=o(({args:e,parties:c})=>{const[i,p]=a.useState([]),[s,F]=a.useState(!0),[O,y]=a.useState(l),b=T({partyListDTO:c,favoriteAccountUuids:i,onToggleFavorite:o(t=>{p(n=>n.includes(t)?n.filter(x=>x!==t):[...n,t])},"onToggleFavorite"),selfAccountUuid:l,currentAccountUuid:O,onSelectAccount:o(t=>{y(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:s,onShowDeletedUnitsChange:o(t=>{F(t)},"onShowDeletedUnitsChange")});return r.jsx(d,{languageCode:"nb",children:r.jsx(u,{...b,forceOpenFullScreen:e.forceOpenFullScreen})})},"AccountSelectorDemo"),A=o(e=>{const[c,i]=a.useState([]),[p,s]=a.useState(!1),[F,O]=a.useState(l),y=R(),b=T({partyListDTO:y,favoriteAccountUuids:c,onToggleFavorite:o(t=>{i(n=>n.includes(t)?n.filter(x=>x!==t):[...n,t])},"onToggleFavorite"),selfAccountUuid:l,currentAccountUuid:F,onSelectAccount:o(t=>{O(t)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:p,onShowDeletedUnitsChange:o(t=>{s(t)},"onShowDeletedUnitsChange")});return r.jsx(d,{languageCode:"nb",children:r.jsx(u,{...b,forceOpenFullScreen:e.forceOpenFullScreen})})},"UsingUseAccountHook"),f=o(e=>r.jsx(P,{args:e,parties:v(3)}),"ThreeAccounts"),h=o(e=>r.jsx(P,{args:e,parties:v(4,1)}),"FourAccountsOneDeleted"),U=o(e=>r.jsx(P,{args:e,parties:v(6,3)}),"SixAccountsThreeDeleted"),D=o(e=>r.jsx(P,{args:e,parties:v(10)}),"TenAccountsNoneDeleted"),we=["WithAccounts","NoAccounts","Loading","UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"(args: AccountSelectorProps) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(args: AccountSelectorProps) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...h.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:"(args: AccountSelectorProps) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...U.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"(args: AccountSelectorProps) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...D.parameters?.docs?.source}}};export{h as FourAccountsOneDeleted,S as Loading,g as NoAccounts,U as SixAccountsThreeDeleted,D as TenAccountsNoneDeleted,f as ThreeAccounts,A as UsingUseAccountHook,m as WithAccounts,we as __namedExportsOrder,Te as default};
