import{a7 as t,x as l,aa as n}from"./iframe-B7zm1HIO.js";import{A as a}from"./AccountSelector-CEIjM3_I.js";import{u as x,g as j}from"./accountDataFetchers-5mtGekJn.js";import{u as w}from"./useGlobalHeader-DZawOFJf.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-DukYslSD.js";import"./MagnifyingGlass-CVQmLynz.js";import"./FieldBase-gSBe5vO6.js";import"./Typography-DnprxIFo.js";import"./useHighlightedText-DWzAFf8R.js";import"./Field-09k_Fgnw.js";import"./Label-DrdmFEDz.js";import"./Input-w1DANTSA.js";import"./useMenu-BJG43rHp.js";import"./MenuListItem-6z1MFl70.js";import"./MenuListDivider-Bbe3EvM4.js";import"./MenuListHeading-Y6BZZd_3.js";import"./MenuItem-B-gSoajH.js";import"./ItemMedia-DpKMg9GF.js";import"./Avatar-moSMPGHi.js";import"./AvatarGroup-BaLNA_5N.js";import"./Checkmark-BLhcN1Ai.js";import"./ItemLabel-CWIv-i-M.js";import"./Heading-C4G9hOYj.js";import"./ItemControls-Cwe9s8QR.js";import"./Badge-C4nIiofZ.js";import"./Tooltip-Cey7ITFK.js";import"./ChevronRight-BItcH0VL.js";import"./InformationSquare-ZkZeHusi.js";import"./Switch-C9KZAM8P.js";import"./AccountMenu-Hj1w0XqH.js";import"./useIsDesktop-Ch8zfKuk.js";import"./HeartFill-C8fhVq4A.js";import"./useLocale-N67pTwCc.js";import"./globalMenu-C15J_TzK.js";import"./PersonCircle-DXrw5zTF.js";import"./Buildings2-7HqIq_go.js";import"./InboxFill-D_MJIPoO.js";import"./MenuGrid-Ds8_htGC.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-B2h1OSuG.js";import"./Archive-C46OZ0Wp.js";import"./Trash-RuS005b0.js";import"./useAccountMenu-D7fZnHGH.js";const Oe={title:"Layout/AccountSelector",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},p=e=>{const r=w({}).accountSelector;return t.jsx(l,{children:t.jsx(a,{...r,forceOpenFullScreen:e.forceOpenFullScreen})})},m=e=>t.jsx(l,{children:t.jsx(a,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),g=e=>t.jsx(l,{children:t.jsx(a,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})}),i="167536b5-f8ed-4c5a-8f48-0279507e53ae",R={partyUuid:i,name:"SITRONGUL MEDALJONG",partyId:"0",type:"Person",dateOfBirth:"1985-05-17",isDeleted:!1,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]},L=(e,r)=>({partyUuid:`synthetic-party-${e}`,name:`Aktør AS ${e}`,organizationNumber:`${912345670+e}`,partyId:`${e}`,type:"Organization",isDeleted:r,onlyHierarchyElementWithNoAccess:!1,authorizedResources:[],authorizedRoles:[]}),D=(e,r=0)=>{const u=Array.from({length:e-1},(d,s)=>L(s+1,s<r));return[R,...u]},v=({args:e,parties:r})=>{const[u,d]=n.useState([]),[s,P]=n.useState(!0),[F,O]=n.useState(i),y=x({partyListDTO:r,favoriteAccountUuids:u,onToggleFavorite:o=>{d(c=>c.includes(o)?c.filter(b=>b!==o):[...c,o])},selfAccountUuid:i,currentAccountUuid:F,onSelectAccount:o=>{O(o)},languageCode:"nb",isLoading:!1,showDeletedUnits:s,onShowDeletedUnitsChange:o=>{P(o)}});return t.jsx(l,{languageCode:"nb",children:t.jsx(a,{...y,forceOpenFullScreen:e.forceOpenFullScreen})})},S=e=>{const[r,u]=n.useState([]),[d,s]=n.useState(!1),[P,F]=n.useState(i),O=j(),y=x({partyListDTO:O,favoriteAccountUuids:r,onToggleFavorite:o=>{u(c=>c.includes(o)?c.filter(b=>b!==o):[...c,o])},selfAccountUuid:i,currentAccountUuid:P,onSelectAccount:o=>{F(o)},languageCode:"nb",isLoading:!1,showDeletedUnits:d,onShowDeletedUnitsChange:o=>{s(o)}});return t.jsx(l,{languageCode:"nb",children:t.jsx(a,{...y,forceOpenFullScreen:e.forceOpenFullScreen})})},A=e=>t.jsx(v,{args:e,parties:D(3)}),f=e=>t.jsx(v,{args:e,parties:D(4,1)}),h=e=>t.jsx(v,{args:e,parties:D(6,3)}),U=e=>t.jsx(v,{args:e,parties:D(10)});p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
