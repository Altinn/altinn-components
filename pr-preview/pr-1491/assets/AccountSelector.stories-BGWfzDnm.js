var F=Object.defineProperty;var o=(t,n)=>F(t,"name",{value:n,configurable:!0});import{a6 as e,x as s,a9 as U}from"./iframe-BYGPhf7N.js";import{A as c}from"./AccountSelector-B_Ngmqwk.js";import{b as g,S as D,u as R}from"./useAccountSelectorDemo-DFVMkeSB.js";import{u as w,g as z}from"./accountDataFetchers-BN0asI87.js";import{u as C}from"./useGlobalHeader-JkGglKWG.js";import"./preload-helper-Cc2_yIPf.js";import"./SearchField-BySPj-oD.js";import"./MagnifyingGlass-u7KFDhSG.js";import"./MenuListItem-Er-de1vm.js";import"./MenuListDivider-C-25gy3r.js";import"./MenuItem-BciZRIkx.js";import"./CheckboxUncheckedIcon-Bc2cW9fu.js";import"./RadioUncheckedIcon-xfigfStp.js";import"./ItemMedia-ApKMdvQL.js";import"./Avatar-B_FLCNK9.js";import"./AvatarGroup-BKwaFY6K.js";import"./ItemLabel-KBN1Srj3.js";import"./Heading-C5-vf6se.js";import"./useHighlightedText-B7c7eBDx.js";import"./ItemControls-1sBh4pPD.js";import"./Badge-qi425Zbf.js";import"./Tooltip-egmjN7rU.js";import"./ChevronRight-BckCGbec.js";import"./FieldBase-eqne-WwB.js";import"./Typography-BHNcIxxH.js";import"./Field-CZH9Low_.js";import"./Label-DXziafiV.js";import"./Input-C9cQp4bZ.js";import"./useMenu-r2OQI4uO.js";import"./InformationSquare-Cx25xyTl.js";import"./Switch-c6ueHKpQ.js";import"./AccountMenu-BmkVq2sD.js";import"./useIsDesktop-D4Aibili.js";import"./name-Dr5DH52l.js";import"./HeartFill-Djummj3_.js";import"./useLocale-DfM0gWBz.js";import"./localeSwitcher-BCkn9Xx-.js";import"./InboxFill-DWlAI5wH.js";import"./PersonGroup-Bxf-P3OI.js";import"./MenuGrid-CHEbnhS0.js";import"./Buildings2-BkCIy4EX.js";import"./Bell-BfrH_baH.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-wTNP5JWn.js";import"./Trash-Aw4yKrn_.js";import"./useAccountMenu-EtfLqtMZ.js";const Fe={title:"Layout/AccountSelector",component:c,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},loading:{control:"boolean"}}},a=o(()=>{const t=C({}).accountSelector;return e.jsx(s,{children:e.jsx(c,{...t})})},"WithAccounts"),u=o(t=>e.jsx(s,{children:e.jsx(c,{...t,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),"NoAccounts"),i=o(t=>e.jsx(s,{children:e.jsx(c,{...t,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})}),"Loading"),S=o(({parties:t})=>{const n=R(t);return e.jsx(s,{languageCode:"nb",children:e.jsx(c,{...n})})},"AccountSelectorDemo"),d=o(()=>{const[t,n]=U.useState([]),[v,P]=U.useState(!1),[f,x]=U.useState(D),T=z(),b=w({partyListDTO:T,favoriteAccountUuids:t,onToggleFavorite:o(r=>{n(h=>h.includes(r)?h.filter(j=>j!==r):[...h,r])},"onToggleFavorite"),selfAccountUuid:D,currentAccountUuid:f,onSelectAccount:o(r=>{x(r)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:v,onShowDeletedUnitsChange:o(r=>{P(r)},"onShowDeletedUnitsChange")});return e.jsx(s,{languageCode:"nb",children:e.jsx(c,{...b})})},"UsingUseAccountHook"),p=o(()=>e.jsx(S,{parties:g(3)}),"ThreeAccounts"),l=o(()=>e.jsx(S,{parties:g(4,1)}),"FourAccountsOneDeleted"),m=o(()=>e.jsx(S,{parties:g(6,3)}),"SixAccountsThreeDeleted"),A=o(()=>e.jsx(S,{parties:g(10)}),"TenAccountsNoneDeleted"),Re=["WithAccounts","NoAccounts","Loading","UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const accountSelector = useGlobalHeader({}).accountSelector as AccountSelectorProps;
  return <RootProvider>
      <AccountSelector {...accountSelector} />
    </RootProvider>;
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} />
    </RootProvider>;
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} loading />
    </RootProvider>;
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(false);
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(SELF_PARTY_UUID);
  const authorizedParties = getAuthorizedPartiesData();
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids(prev => prev.includes(uuid) ? prev.filter(id => id !== uuid) : [...prev, uuid]);
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid: SELF_PARTY_UUID,
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildAuthorizedParties(3)} />",...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildAuthorizedParties(4, 1)} />",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildAuthorizedParties(6, 3)} />",...m.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildAuthorizedParties(10)} />",...A.parameters?.docs?.source}}};export{l as FourAccountsOneDeleted,i as Loading,u as NoAccounts,m as SixAccountsThreeDeleted,A as TenAccountsNoneDeleted,p as ThreeAccounts,d as UsingUseAccountHook,a as WithAccounts,Re as __namedExportsOrder,Fe as default};
