import{r as c,j as t}from"./iframe-BJEbXdzo.js";import{S as u}from"./SelectDateFilter-DDcqlJyY.js";import{a as s,T as m}from"./Toolbar-CMrzLOzQ.js";import{i as l,u as p,t as b}from"./example.hooks-DRxrm173.js";import{B as F}from"./Button-DNsjk1zC.js";import{S}from"./Section-BfJWddEs.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DaYXADnN.js";import"./useId-DgrNWXh_.js";import"./Datepicker-BAD85Cvy.js";import"./index-ChGHkNNv.js";import"./ChevronRight-CoSPx3Kv.js";import"./MenuListItem-U3U1VVBg.js";import"./MenuItem-CIe0tXLI.js";import"./ItemMedia-CiNZWpX-.js";import"./XMark-sTHnj54s.js";import"./Avatar-CcIuhVy2.js";import"./Skeleton-DWcIZ1wH.js";import"./AvatarGroup-Cpo75nCB.js";import"./Icon-msEkDcFf.js";import"./Checkmark-DLPFtMmB.js";import"./Heading-1LBL0JVO.js";import"./useHighlightedText-Chj_Mw3b.js";import"./ItemControls-CAq51EMf.js";import"./Badge-CNae3IUV.js";import"./Tooltip-Ct0E88k_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BwmZcoLX.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-BxpAf7GB.js";import"./Fieldset-Ber4vH34.js";import"./index-THETCITG.js";import"./Label-DQQXrne0.js";import"./Input-BI0TJMod.js";import"./input-CnbiDkgl.js";import"./SearchField-C43D0Bvg.js";import"./MagnifyingGlass-Dp61EhHj.js";import"./FieldBase-s2kWEUm7.js";import"./Typography-D85R78i7.js";import"./useMenu-9_PPaP-8.js";import"./InformationSquare-e9K9-Rpn.js";import"./useDropdownMenuController-DuWgBdSv.js";import"./Plus-DGG8hdRK.js";import"./Dropdown-BWrGCxZb.js";import"./ChevronUpDown-PFO21Y4O.js";import"./ButtonGroup-CbGBNNFa.js";import"./ButtonGroupDivider-CFce6icy.js";import"./ToolbarMenu-PoMokTMQ.js";import"./ToolbarSearch-DMcOXt6s.js";import"./Paperclip-Do9FRucA.js";import"./Eye-Bd51zfnO.js";import"./MenuHamburger-K1BgVp7W.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-3a31VMtF.js";import"./Flex-DRE_amb0.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({});
  return <Toolbar>
      <ToolbarFilter getFilterLabel={name => filterState?.[name]?.join(',') || 'Choose ' + name} filterState={filterState} onFilterStateChange={setFilterState} filters={inboxFilters.map(item => ({
      ...item,
      removable: true
    }))} />
      <Button onClick={() => setFilterState({})}>Reset</Button>
    </Toolbar>;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const inboxFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    })),
    defaultFilterState: {
      status: ['requires-action'],
      unread: ['true']
    }
  });
  return <Toolbar>
      <ToolbarFilter {...inboxFilter} />
    </Toolbar>;
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const inboxFilter = useInboxFilter({
    filters: [{
      ...timeFilter,
      as: SelectDateFilter
    }],
    defaultFilterState: {}
  });
  return <Toolbar>
      <ToolbarFilter {...inboxFilter} />
      <Section margin="section">State: {JSON.stringify(inboxFilter.filterState)}</Section>
    </Toolbar>;
}`,...n.parameters?.docs?.source}}};const Tt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,Tt as __namedExportsOrder,dt as default};
