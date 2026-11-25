var F=Object.defineProperty;var o=(t,n)=>F(t,"name",{value:n,configurable:!0});import{a6 as e,x as s,a9 as U}from"./iframe-CjTVLX0J.js";import{A as c}from"./AccountSelector-D_UDBNlC.js";import{b as g,S as D,u as R}from"./useAccountSelectorDemo-BcTWtV95.js";import{u as w,g as z}from"./accountDataFetchers-CjwNm1rw.js";import{u as C}from"./useGlobalHeader-B_rTkdWv.js";import"./preload-helper-Cc2_yIPf.js";import"./SearchField-BoWCGyO9.js";import"./MagnifyingGlass-DkbBbRdW.js";import"./MenuListItem-Db90m9cT.js";import"./MenuListDivider-D1F-iYgs.js";import"./MenuItem-BHJaEqQ5.js";import"./CheckboxUncheckedIcon-BI8H0dji.js";import"./RadioUncheckedIcon-BkjXdcpz.js";import"./ItemMedia-DnpNAz5S.js";import"./Avatar-Bte94cY6.js";import"./AvatarGroup-C543ATGD.js";import"./ItemLabel-QKtbke7Z.js";import"./Heading-iGdZKzrq.js";import"./useHighlightedText-DSpkTug-.js";import"./ItemControls-DdDcRIJg.js";import"./Badge-5qYmbB4A.js";import"./Tooltip-D-ZO89_f.js";import"./ChevronRight-B7WfXeCo.js";import"./FieldBase-C5zYRo5L.js";import"./Typography-D5LJyQSI.js";import"./Field-DCjNXD15.js";import"./Label-em-S6i9n.js";import"./Input-B0rqselK.js";import"./useMenu-DyQl0UH7.js";import"./InformationSquare-DA1l9Dlv.js";import"./Switch-DudTedAR.js";import"./AccountMenu-BAN1_qc4.js";import"./useIsDesktop-CRXCxfgX.js";import"./name-Dr5DH52l.js";import"./HeartFill-Duwqd6aq.js";import"./useLocale-DY_Y1RPB.js";import"./localeSwitcher-BdJo1Izh.js";import"./InboxFill-B1_bEVcP.js";import"./PersonGroup-BwCOL2Gz.js";import"./MenuGrid-F8C2h4Pq.js";import"./Buildings2-DbrN1Cg2.js";import"./Bell-BL9bPd5p.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BBOY_v7Z.js";import"./Trash-f0oxT1Hh.js";import"./useAccountMenu-BvLo-JyS.js";const Fe={title:"Layout/AccountSelector",component:c,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},loading:{control:"boolean"}}},a=o(()=>{const t=C({}).accountSelector;return e.jsx(s,{children:e.jsx(c,{...t})})},"WithAccounts"),u=o(t=>e.jsx(s,{children:e.jsx(c,{...t,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),"NoAccounts"),i=o(t=>e.jsx(s,{children:e.jsx(c,{...t,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})}),"Loading"),S=o(({parties:t})=>{const n=R(t);return e.jsx(s,{languageCode:"nb",children:e.jsx(c,{...n})})},"AccountSelectorDemo"),d=o(()=>{const[t,n]=U.useState([]),[v,P]=U.useState(!1),[f,x]=U.useState(D),T=z(),b=w({partyListDTO:T,favoriteAccountUuids:t,onToggleFavorite:o(r=>{n(h=>h.includes(r)?h.filter(j=>j!==r):[...h,r])},"onToggleFavorite"),selfAccountUuid:D,currentAccountUuid:f,onSelectAccount:o(r=>{x(r)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:v,onShowDeletedUnitsChange:o(r=>{P(r)},"onShowDeletedUnitsChange")});return e.jsx(s,{languageCode:"nb",children:e.jsx(c,{...b})})},"UsingUseAccountHook"),p=o(()=>e.jsx(S,{parties:g(3)}),"ThreeAccounts"),l=o(()=>e.jsx(S,{parties:g(4,1)}),"FourAccountsOneDeleted"),m=o(()=>e.jsx(S,{parties:g(6,3)}),"SixAccountsThreeDeleted"),A=o(()=>e.jsx(S,{parties:g(10)}),"TenAccountsNoneDeleted"),Re=["WithAccounts","NoAccounts","Loading","UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
