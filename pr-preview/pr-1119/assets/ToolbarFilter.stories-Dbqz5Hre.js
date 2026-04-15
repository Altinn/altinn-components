import{r as c,j as t}from"./iframe-BWWyepKi.js";import{S as u}from"./SelectDateFilter-Xnq7AgxF.js";import{a as s,T as m}from"./Toolbar-C6C-MWA0.js";import{i as l,u as p,t as b}from"./example.hooks-CaPzDq_y.js";import{B as F}from"./Button-DaLP9UzX.js";import{S}from"./Section-B8U8libR.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-B3f9JFxf.js";import"./useId-CMCVT55W.js";import"./Datepicker-BS3gT8R8.js";import"./index-fkRlyifr.js";import"./ChevronRight-I2Pyvoyr.js";import"./MenuListItem-uASMHa_1.js";import"./MenuItem-Dk1uy6my.js";import"./ItemMedia-h4TQiEvV.js";import"./XMark-DJOirLMA.js";import"./Avatar-CiKCHN1S.js";import"./Skeleton-CYDyiFkf.js";import"./AvatarGroup-DPHuhQ41.js";import"./Icon-w9oNx8pI.js";import"./Checkmark-C84HjHaR.js";import"./Heading-DQYelGqr.js";import"./useHighlightedText-BYfI8EMJ.js";import"./ItemControls-jVI2cRmn.js";import"./Badge-CiufGa4u.js";import"./Tooltip-C4xENPhK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CbLzoZkL.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-CgclVl9k.js";import"./Fieldset-B2fp5dSJ.js";import"./index-2Prco8uk.js";import"./Label-DYc4A36I.js";import"./Input-BcqR7Mo_.js";import"./input-CuS4pR7j.js";import"./SearchField-BuZQEnM8.js";import"./MagnifyingGlass-B591vdqr.js";import"./FieldBase-DnRTsvox.js";import"./Typography-C9vgo_J4.js";import"./useMenu-BnIxk9FT.js";import"./InformationSquare-WPPzSpdY.js";import"./useDropdownMenuController-Dc9W55Rj.js";import"./Plus-i5lFDX1a.js";import"./Dropdown-BWKRG_29.js";import"./ChevronUpDown-DN9w9Cg8.js";import"./ButtonGroup-Bf6ZmgRN.js";import"./ButtonGroupDivider-DK_N-BQv.js";import"./ToolbarMenu-CvLeKUcU.js";import"./ToolbarSearch-DZekGqJO.js";import"./Paperclip-B931rBbb.js";import"./Eye-BUErm0To.js";import"./MenuHamburger-R6t8Z0iD.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-dq33hCwG.js";import"./Flex-C8xEqik7.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
