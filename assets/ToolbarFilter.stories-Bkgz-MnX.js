import{r as c,j as t}from"./iframe-Dip44woq.js";import{S as u}from"./SelectDateFilter-C4ACRgds.js";import{a as s,T as m}from"./Toolbar-DHuCBxNe.js";import{i as l,u as p,t as b}from"./example.hooks-DSiRCv7v.js";import{B as F}from"./Button-afp2Zwog.js";import{S}from"./Section-DCVufQoJ.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Bg7IEuKV.js";import"./useId-CMLjH0Fx.js";import"./Datepicker-1uScTVsg.js";import"./index-B24kaf2B.js";import"./ChevronRight-DRGzZC3s.js";import"./MenuListItem-miXGiz4v.js";import"./MenuItem-BJUggRUL.js";import"./ItemMedia-5XSAaYKs.js";import"./XMark-CynTM0oO.js";import"./Avatar-kiiFl4Mz.js";import"./Skeleton-CxN7sZWy.js";import"./AvatarGroup-sgYryoRH.js";import"./Icon-B7B4bUSp.js";import"./Checkmark-DnUC-Av1.js";import"./Heading-BGLknJpX.js";import"./useHighlightedText-DVvgBsxZ.js";import"./ItemControls-CIGgXmTN.js";import"./Badge-Bm1FFy1R.js";import"./Tooltip-D3ALbI7V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BdW2KKDT.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-BQZIqP1w.js";import"./Fieldset-JHw30Nxr.js";import"./index-kI5T7Faz.js";import"./Label-BJSes-CJ.js";import"./Input-BEs0_VSa.js";import"./input-BsOq1nZd.js";import"./SearchField-B2BM1-WP.js";import"./MagnifyingGlass-B4ceu0rd.js";import"./FieldBase-BLO6-Mjz.js";import"./Typography-9n0VU0yu.js";import"./useMenu-BX85xV5m.js";import"./InformationSquare-Cyt3NFHk.js";import"./useDropdownMenuController-NZ0hfOf3.js";import"./Plus-C3AvEGJ3.js";import"./Dropdown-CRmvDx32.js";import"./ChevronUpDown-DLZkoK61.js";import"./ButtonGroup-BAe3FIfN.js";import"./ButtonGroupDivider-hf3rR7Nz.js";import"./ToolbarMenu-DpL5aYJ9.js";import"./ToolbarSearch-a70kL4eJ.js";import"./Paperclip-CD6nbP7E.js";import"./Eye-CMMm6oF_.js";import"./MenuHamburger-C9PbWBPt.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-CZ5tfceY.js";import"./Flex-DHvZRHuw.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
