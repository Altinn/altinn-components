import{r as c,j as t}from"./iframe-0B_Yudin.js";import{S as u}from"./SelectDateFilter-B9BRTPZ9.js";import{a as s,T as m}from"./Toolbar-Bi8sxGeY.js";import{i as l,u as p,t as b}from"./example.hooks-ot6nu9FW.js";import{B as F}from"./Button-CFVlP8iN.js";import{S}from"./Section-byNAOZ7t.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BrRKnSKJ.js";import"./useId-BUxMg0Ir.js";import"./Datepicker-DdA_X5Rf.js";import"./index-bzqtFzN_.js";import"./ChevronRight-D1gjYegd.js";import"./MenuListItem-Dr-AzL0Y.js";import"./MenuItem-ByHw8468.js";import"./ItemMedia-DPzqoyVf.js";import"./XMark-4vnuAWTz.js";import"./Avatar-BGwRUT15.js";import"./Skeleton-CCW5QxrE.js";import"./AvatarGroup-VvayKp3V.js";import"./Icon-CbCRlB_g.js";import"./Checkmark-BmAdxrUQ.js";import"./Heading-iCNnL7gN.js";import"./useHighlightedText-1P3axs8E.js";import"./ItemControls-DGPFdAX4.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-ymJsCjoB.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-BRJCvMdb.js";import"./Fieldset-CcucJBMR.js";import"./index-DeiwrdtL.js";import"./Label-BawrqgTw.js";import"./Input-B4vKKvBG.js";import"./input-P8iU2s3c.js";import"./SearchField-aP7iZ-N9.js";import"./MagnifyingGlass-D-_dPVyR.js";import"./FieldBase-BRRzaSEH.js";import"./Typography-WSorE15D.js";import"./useMenu-G8FOBFFN.js";import"./InformationSquare-C3Az81Rf.js";import"./useDropdownMenuController-B1mLRZqh.js";import"./Plus-BmqtHu8-.js";import"./Dropdown-Ceu59hlm.js";import"./ChevronUpDown-oD2FsggY.js";import"./ButtonGroup-CSUZvsoD.js";import"./ButtonGroupDivider-BIa7C9rx.js";import"./ToolbarMenu-_dyMSq4G.js";import"./ToolbarSearch-DR8Q5FFl.js";import"./Paperclip-Dm48k2vH.js";import"./Eye-B-XCKYf4.js";import"./MenuHamburger-Dp9iHReE.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-B4QTcVhB.js";import"./Flex-CcsVAtXA.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
