import{r as c,j as t}from"./iframe-DxKlu2kD.js";import{S as u}from"./SelectDateFilter-RkZG30gv.js";import{a as s,T as m}from"./Toolbar-DNndWGFg.js";import{i as l,u as p,t as b}from"./example.hooks-DtvoKuZG.js";import{B as F}from"./Button-D78I7hWM.js";import{S}from"./Section-5cGBq3ET.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BeF4mKpq.js";import"./useId-_YfdAmsW.js";import"./Datepicker-ncZYoUZ9.js";import"./index-BWCSYHeO.js";import"./ChevronRight-DCeYx28-.js";import"./MenuListItem-BTPFJyFs.js";import"./MenuItem-kNYALtyW.js";import"./ItemMedia-BBqBVaQK.js";import"./XMark-C1fx_pyo.js";import"./Avatar-BwF2spoI.js";import"./Skeleton-niSIm0IT.js";import"./AvatarGroup-D_QmYd99.js";import"./Icon-CrZKj0Yv.js";import"./Checkmark-C9NR0hmL.js";import"./Heading-m7XVygop.js";import"./useHighlightedText-DHBtHLKn.js";import"./Badge-4TJDD2P9.js";import"./MenuListHeading-BCVqt4go.js";import"./Fieldset-D7CglCuV.js";import"./lite-DaUVFjkg.js";import"./index-sO6KcVLH.js";import"./use-merge-refs-CvQTDNhp.js";import"./Label-DPRrgAAI.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./SearchField-yItf8ktv.js";import"./MagnifyingGlass-BSd0JI5p.js";import"./FieldBase-DR6_g4FH.js";import"./Typography-iC77LYkz.js";import"./useMenu-DwMeQcTX.js";import"./InformationSquare-D9H1eLzz.js";import"./useDropdownMenuController-cNOqav4I.js";import"./Plus-Dz67JQoo.js";import"./Dropdown-BlFnr1UG.js";import"./ChevronUpDown-C-rEKWde.js";import"./ButtonGroup-CKoZVXux.js";import"./ButtonGroupDivider-Dzf9jdTg.js";import"./Tooltip-DFu8-nHR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-Ccj2V8zi.js";import"./ToolbarSearch-6qQL0Quv.js";import"./Paperclip-BykLFP04.js";import"./Eye-xoGFvx_M.js";import"./MenuHamburger-W1FDwBr8.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-B-2CHja_.js";import"./Flex-CFZAXqgp.js";const xt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const dt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,dt as __namedExportsOrder,xt as default};
