var F=Object.defineProperty;var o=(t,n)=>F(t,"name",{value:n,configurable:!0});import{a6 as e,x as s,a9 as U}from"./iframe-HroKCH1i.js";import{A as c}from"./AccountSelector-DFjKkW66.js";import{b as g,S as D,u as R}from"./useAccountSelectorDemo-tdLzhmRI.js";import{u as w,g as z}from"./accountDataFetchers-CYYceYgl.js";import{u as C}from"./useGlobalHeader-CKg_tDTp.js";import"./preload-helper-Cc2_yIPf.js";import"./SearchField-DdJVtzp5.js";import"./MagnifyingGlass-GwJB8-P4.js";import"./MenuListItem-DW9PJpJL.js";import"./MenuListDivider-DtrGkUUW.js";import"./MenuItem-CIYGtEiF.js";import"./CheckboxUncheckedIcon-HP_EJry3.js";import"./RadioUncheckedIcon-Ds8PcFs2.js";import"./ItemMedia-BGnaafVo.js";import"./Avatar-DknIY_wN.js";import"./AvatarGroup-CajaM-Bn.js";import"./ItemLabel-BExOJJ8K.js";import"./Heading-ButwX4Fz.js";import"./useHighlightedText-BR2lgM5a.js";import"./ItemControls-P_AZ0k9Y.js";import"./Badge-6DoOsqKK.js";import"./Tooltip-3zva_1pJ.js";import"./ChevronRight-CnU_-vpz.js";import"./FieldBase-Dy7F34xJ.js";import"./Typography-mUXdli5h.js";import"./Field-A9TpZ5Q4.js";import"./Label-3I9SdFhT.js";import"./Input-KntdUcqG.js";import"./useMenu-DLxClmSr.js";import"./InformationSquare-uPdk22J8.js";import"./Switch-CjSSR8lu.js";import"./AccountMenu-Dghf-kj5.js";import"./useIsDesktop-BTCUyq0Y.js";import"./name-Dr5DH52l.js";import"./HeartFill-CZHOmC4o.js";import"./useLocale-X1Z3kdXY.js";import"./localeSwitcher-PZoiL7mz.js";import"./InboxFill-Dwv2ZDno.js";import"./PersonGroup-WrhwV8_x.js";import"./MenuGrid-DMFQx4_O.js";import"./Buildings2-Isc-I77e.js";import"./Bell-BbNhDS7V.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-CzrN7IRQ.js";import"./Trash-CnguooS_.js";import"./useAccountMenu-DLFye4nI.js";const Fe={title:"Layout/AccountSelector",component:c,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},loading:{control:"boolean"}}},a=o(()=>{const t=C({}).accountSelector;return e.jsx(s,{children:e.jsx(c,{...t})})},"WithAccounts"),u=o(t=>e.jsx(s,{children:e.jsx(c,{...t,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),"NoAccounts"),i=o(t=>e.jsx(s,{children:e.jsx(c,{...t,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})}),"Loading"),S=o(({parties:t})=>{const n=R(t);return e.jsx(s,{languageCode:"nb",children:e.jsx(c,{...n})})},"AccountSelectorDemo"),d=o(()=>{const[t,n]=U.useState([]),[v,P]=U.useState(!1),[f,x]=U.useState(D),T=z(),b=w({partyListDTO:T,favoriteAccountUuids:t,onToggleFavorite:o(r=>{n(h=>h.includes(r)?h.filter(j=>j!==r):[...h,r])},"onToggleFavorite"),selfAccountUuid:D,currentAccountUuid:f,onSelectAccount:o(r=>{x(r)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:v,onShowDeletedUnitsChange:o(r=>{P(r)},"onShowDeletedUnitsChange")});return e.jsx(s,{languageCode:"nb",children:e.jsx(c,{...b})})},"UsingUseAccountHook"),p=o(()=>e.jsx(S,{parties:g(3)}),"ThreeAccounts"),l=o(()=>e.jsx(S,{parties:g(4,1)}),"FourAccountsOneDeleted"),m=o(()=>e.jsx(S,{parties:g(6,3)}),"SixAccountsThreeDeleted"),A=o(()=>e.jsx(S,{parties:g(10)}),"TenAccountsNoneDeleted"),Re=["WithAccounts","NoAccounts","Loading","UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
