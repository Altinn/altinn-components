import{a7 as t,x as l,aa as n}from"./iframe-pmb13xcr.js";import{A as a}from"./AccountSelector-BkvgFso3.js";import{u as x,g as j}from"./accountDataFetchers-CwOSP9OW.js";import{u as w}from"./useGlobalHeader-BqQ0Zy0y.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-xzT30cQx.js";import"./MagnifyingGlass-HRL7caCa.js";import"./FieldBase-DlkZCCjW.js";import"./Typography-BgUhg-DC.js";import"./useHighlightedText-By0gZF-u.js";import"./Field-Dm0MSPIi.js";import"./Label-CxwvdH9w.js";import"./Input-CJNvWYoB.js";import"./useMenu-PFiIjJ-b.js";import"./MenuListItem-DW-1hJGg.js";import"./MenuListHeading-B2QtO_LB.js";import"./MenuItem-D_bFc04X.js";import"./ItemMedia-BGgA1RRu.js";import"./Avatar-DgFMZdvt.js";import"./AvatarGroup-C5Tz0kQR.js";import"./Checkmark-Cm7hyVD6.js";import"./ItemLabel-0x089RNk.js";import"./Heading-sU40TroH.js";import"./ItemControls-CCuuzoug.js";import"./Badge-CDoJNvMh.js";import"./Tooltip-BV9R0mmr.js";import"./ChevronRight-BcL3woie.js";import"./index-B1Y0FrCw.js";import"./InformationSquare-Bin60tyG.js";import"./Switch-DZAPBem0.js";import"./AccountMenu-BVT6wVM-.js";import"./useIsDesktop-BFGrVHfV.js";import"./HeartFill-Ddbc5KTD.js";import"./useLocale-D_e-UmPn.js";import"./globalMenu-CkhnMgrT.js";import"./PersonCircle-BqGvUuVi.js";import"./Buildings2-C_uw4LoK.js";import"./InboxFill-DCRMqifj.js";import"./MenuGrid-X5OsbpOM.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-aVSt--9Q.js";import"./Archive-D80U9MMR.js";import"./Trash-IxXQM3-V.js";import"./useAccountMenu-DTYzum3k.js";const Oe={title:"Layout/AccountSelector",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},p=e=>{const r=w({}).accountSelector;return t.jsx(l,{children:t.jsx(a,{...r,forceOpenFullScreen:e.forceOpenFullScreen})})},m=e=>t.jsx(l,{children:t.jsx(a,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),g=e=>t.jsx(l,{children:t.jsx(a,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})}),i="167536b5-f8ed-4c5a-8f48-0279507e53ae",R={partyUuid:i,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},L=(e,r)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:r,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),D=(e,r=0)=>{const u=Array.from({length:e-1},(d,s)=>L(s+1,s<r));return[R,...u]},v=({args:e,parties:r})=>{const[u,d]=n.useState([]),[s,P]=n.useState(!0),[F,O]=n.useState(i),y=x({partyListDTO:r,favoriteAccountUuids:u,onToggleFavorite:o=>{d(c=>c.includes(o)?c.filter(b=>b!==o):[...c,o])},selfAccountUuid:i,currentAccountUuid:F,onSelectAccount:o=>{O(o)},languageCode:"nb",isLoading:!1,showDeletedUnits:s,onShowDeletedUnitsChange:o=>{P(o)}});return t.jsx(l,{languageCode:"nb",children:t.jsx(a,{...y,forceOpenFullScreen:e.forceOpenFullScreen})})},S=e=>{const[r,u]=n.useState([]),[d,s]=n.useState(!1),[P,F]=n.useState(i),O=j(),y=x({partyListDTO:O,favoriteAccountUuids:r,onToggleFavorite:o=>{u(c=>c.includes(o)?c.filter(b=>b!==o):[...c,o])},selfAccountUuid:i,currentAccountUuid:P,onSelectAccount:o=>{F(o)},languageCode:"nb",isLoading:!1,showDeletedUnits:d,onShowDeletedUnitsChange:o=>{s(o)}});return t.jsx(l,{languageCode:"nb",children:t.jsx(a,{...y,forceOpenFullScreen:e.forceOpenFullScreen})})},A=e=>t.jsx(v,{args:e,parties:D(3)}),f=e=>t.jsx(v,{args:e,parties:D(4,1)}),h=e=>t.jsx(v,{args:e,parties:D(6,3)}),U=e=>t.jsx(v,{args:e,parties:D(10)});p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  const accountSelector = useGlobalHeader({}).accountSelector as AccountSelectorProps;
  return <RootProvider>
      <AccountSelector {...accountSelector} forceOpenFullScreen={args.forceOpenFullScreen} />
    </RootProvider>;
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} />
    </RootProvider>;
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} loading />
    </RootProvider>;
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"(args: AccountSelectorProps) => <AccountSelectorDemo args={args} parties={buildParties(3)} />",...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"(args: AccountSelectorProps) => <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />",...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(args: AccountSelectorProps) => <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />",...h.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:"(args: AccountSelectorProps) => <AccountSelectorDemo args={args} parties={buildParties(10)} />",...U.parameters?.docs?.source}}};const ye=["WithAccounts","NoAccounts","Loading","UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];export{f as FourAccountsOneDeleted,g as Loading,m as NoAccounts,h as SixAccountsThreeDeleted,U as TenAccountsNoneDeleted,A as ThreeAccounts,S as UsingUseAccountHook,p as WithAccounts,ye as __namedExportsOrder,Oe as default};
