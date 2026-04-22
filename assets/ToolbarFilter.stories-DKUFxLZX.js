import{r as c,j as t}from"./iframe-Bs6hWG43.js";import{S as u}from"./SelectDateFilter-H_0O5SET.js";import{a as s,T as m}from"./Toolbar-BoXZ-EZk.js";import{i as l,u as p,t as b}from"./example.hooks-BpmjGcQs.js";import{B as F}from"./Button-eHvnmE12.js";import{S}from"./Section-W4Lgx5KJ.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-aC05jVU6.js";import"./useId-eW1Sa_eP.js";import"./Datepicker-rZQKhUp-.js";import"./index-DbNSDn3W.js";import"./ChevronRight-Xe9lB9nu.js";import"./MenuListItem-CaCKNFL_.js";import"./MenuItem-BL3nnmC3.js";import"./ItemMedia-B6-8h9P0.js";import"./XMark-Cx14Anho.js";import"./Avatar-BN7VNN79.js";import"./Skeleton-7NyHq6Da.js";import"./AvatarGroup-DiHJ7hxR.js";import"./Icon-DjH00Hl5.js";import"./Checkmark-YSQh9b-J.js";import"./Heading-C3DAZ3La.js";import"./useHighlightedText-ByR3-iok.js";import"./ItemControls-CsoavSOP.js";import"./Badge-XV6ITEub.js";import"./Tooltip-8ajV2_Od.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CXrn4uAk.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-DBtCNSz-.js";import"./Fieldset-BwyKCbpr.js";import"./index--1NR6hdE.js";import"./Label-CqwIAbNx.js";import"./Input-eDTGHBrL.js";import"./input-DdjwQdrU.js";import"./SearchField-CTJqYruH.js";import"./MagnifyingGlass-ByFYxaCQ.js";import"./FieldBase-BwWmF8XK.js";import"./Typography-4Wb6MR64.js";import"./useMenu-Be0b91uO.js";import"./InformationSquare-C3jahF3t.js";import"./useDropdownMenuController-D42biJGY.js";import"./Plus-D6ext0KH.js";import"./Dropdown-z94Rg748.js";import"./ChevronUpDown-CVBqxrpS.js";import"./ButtonGroup-eeakMgVk.js";import"./ButtonGroupDivider-FKdNiVfP.js";import"./ToolbarMenu-CQxaskWs.js";import"./ToolbarSearch-BUhR0QTI.js";import"./Paperclip-C8Xj9F1x.js";import"./Eye-Bdit91ei.js";import"./MenuHamburger-C29TE0o8.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-BtRKSTW7.js";import"./Flex-DYzITT_K.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
