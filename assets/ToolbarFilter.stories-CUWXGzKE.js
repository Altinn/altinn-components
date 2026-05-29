import{s as c,p as t}from"./iframe-D7BK96qe.js";import{S as u}from"./SelectDateFilter-CWQeL6hr.js";import{a as s,T as m}from"./Toolbar-BOGkIlzT.js";import{i as l,a as p,t as b}from"./example.hooks-INVDqIDa.js";import{B as F}from"./Button-UbmuloFB.js";import{S}from"./Section-G7MRDbZ9.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CLhEP-2O.js";import"./index-CL9j6gFH.js";import"./MenuItem-BkvPF8Fg.js";import"./ItemMedia-BmnjDO8T.js";import"./XMark-DKvmykI8.js";import"./useId-B1IjdNvC.js";import"./Avatar-BzaJ_tLr.js";import"./Skeleton-C-TQnNEe.js";import"./AvatarGroup-BXGOcJTt.js";import"./Icon-CXOWvudR.js";import"./Checkmark-BPQmQq7A.js";import"./ItemLabel-CTolDWEe.js";import"./Heading-Q-ep_pj6.js";import"./useHighlightedText-C3262gRX.js";import"./ItemControls-BZAZaWU9.js";import"./Badge-CP0to2q5.js";import"./Tooltip-BXZ0f-e8.js";import"./tooltip-B8elfXS-.js";import"./ChevronRight-B2Fr_XJI.js";import"./ArrowUndo-DBwwr2s1.js";import"./MenuListHeading-U2jvLcu6.js";import"./Fieldset-C4xZb4h_.js";import"./Label-DW0yr3EV.js";import"./Input-wwG44gvy.js";import"./Datepicker-BMAtgVnt.js";import"./SearchField-D67W67ub.js";import"./MagnifyingGlass-B3Q8Qlgl.js";import"./FieldBase-DmZ-AQhF.js";import"./Typography-CoOY9SxO.js";import"./useMenu-CRon1bQ1.js";import"./index-P9j8YxHr.js";import"./InformationSquare-BFNj1lbk.js";import"./useDropdownMenuController-D8oAtfoQ.js";import"./Dropdown-CHIS9Scb.js";import"./Plus-C-8iSYwG.js";import"./ButtonGroup-DiPjg2lm.js";import"./ButtonGroupDivider-CgeFqPtI.js";import"./ChevronUpDown-BANlVG6s.js";import"./ToolbarMenu-D4V0JlAe.js";import"./ToolbarSearch-DjyhuTHy.js";import"./Paperclip-BZfveaC4.js";import"./Eye-BETil9uI.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Bs0s8Y7O.js";import"./Flex-DKrdkBVD.js";const St={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const ft=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,ft as __namedExportsOrder,St as default};
