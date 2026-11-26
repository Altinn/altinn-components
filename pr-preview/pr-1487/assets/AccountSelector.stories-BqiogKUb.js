var F=Object.defineProperty;var o=(t,n)=>F(t,"name",{value:n,configurable:!0});import{a6 as e,x as s,a9 as U}from"./iframe-DwHkmT0f.js";import{A as c}from"./AccountSelector-fntBMO38.js";import{b as g,S as D,u as R}from"./useAccountSelectorDemo-CKwuX0oA.js";import{u as w,g as z}from"./accountDataFetchers-D9CSe48D.js";import{u as C}from"./useGlobalHeader-CDoIeq7G.js";import"./preload-helper-Cc2_yIPf.js";import"./SearchField-BE9AHyrE.js";import"./MagnifyingGlass-BwHWlmqj.js";import"./MenuListItem-CtEoku_b.js";import"./MenuListDivider-CROwDY0z.js";import"./MenuItem-CZxJMuiO.js";import"./CheckboxUncheckedIcon-CVogy-dq.js";import"./RadioUncheckedIcon-DD-mj64d.js";import"./ItemMedia-CVGrPGLV.js";import"./Avatar-S5z4qvLu.js";import"./AvatarGroup-Cl1VUjUq.js";import"./ItemLabel-hjkm06Ot.js";import"./Heading-FTp623yO.js";import"./useHighlightedText-DRj0X6ck.js";import"./ItemControls-CCH_CI8A.js";import"./Badge-na_CnfyR.js";import"./Tooltip-DjcFah2J.js";import"./ChevronRight-B3vSh-CA.js";import"./FieldBase-CpcKIkx4.js";import"./Typography-BKrXxvhH.js";import"./Field-BDHCaXkr.js";import"./Label-B7Jjr_ur.js";import"./Input-D6xvIcky.js";import"./useMenu-D8t-dYWs.js";import"./InformationSquare-CaoePqPY.js";import"./Switch-BbEJ57Wz.js";import"./AccountMenu-COjSW_5W.js";import"./useIsDesktop-bDdggvni.js";import"./name-Dr5DH52l.js";import"./HeartFill-Dq4xiIhf.js";import"./useLocale-DRENSImX.js";import"./globalMenu-C-LBw6U_.js";import"./PersonCircle-C4drci5H.js";import"./Buildings2-CFScrem9.js";import"./InboxFill-Cj7OiwCb.js";import"./MenuGrid-qtVH-PgJ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-D8UAaNDA.js";import"./Archive-DDASx2ii.js";import"./Trash-B4bAWeXV.js";import"./useAccountMenu-DCIvS8dV.js";const Fe={title:"Layout/AccountSelector",component:c,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},loading:{control:"boolean"}}},a=o(()=>{const t=C({}).accountSelector;return e.jsx(s,{children:e.jsx(c,{...t})})},"WithAccounts"),u=o(t=>e.jsx(s,{children:e.jsx(c,{...t,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),"NoAccounts"),i=o(t=>e.jsx(s,{children:e.jsx(c,{...t,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})}),"Loading"),S=o(({parties:t})=>{const n=R(t);return e.jsx(s,{languageCode:"nb",children:e.jsx(c,{...n})})},"AccountSelectorDemo"),d=o(()=>{const[t,n]=U.useState([]),[v,P]=U.useState(!1),[f,x]=U.useState(D),T=z(),b=w({partyListDTO:T,favoriteAccountUuids:t,onToggleFavorite:o(r=>{n(h=>h.includes(r)?h.filter(j=>j!==r):[...h,r])},"onToggleFavorite"),selfAccountUuid:D,currentAccountUuid:f,onSelectAccount:o(r=>{x(r)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:v,onShowDeletedUnitsChange:o(r=>{P(r)},"onShowDeletedUnitsChange")});return e.jsx(s,{languageCode:"nb",children:e.jsx(c,{...b})})},"UsingUseAccountHook"),p=o(()=>e.jsx(S,{parties:g(3)}),"ThreeAccounts"),l=o(()=>e.jsx(S,{parties:g(4,1)}),"FourAccountsOneDeleted"),m=o(()=>e.jsx(S,{parties:g(6,3)}),"SixAccountsThreeDeleted"),A=o(()=>e.jsx(S,{parties:g(10)}),"TenAccountsNoneDeleted"),Re=["WithAccounts","NoAccounts","Loading","UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
