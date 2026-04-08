import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./Button-L6T5IVdq.js";import{n as i,t as a}from"./Toolbar-CmziBAS7.js";import{t as o}from"./SelectDateFilter-Dq5kCJRs.js";import{a as s,i as c,n as l}from"./example.hooks-CGrxcgX5.js";import{t as u}from"./Section-DYB-4Xyp.js";var d=e(t(),1),f=n(),p={title:`Toolbar/ToolbarFilter`,component:i,parameters:{},args:{}},m=()=>{let[e,t]=(0,d.useState)({});return(0,f.jsxs)(a,{children:[(0,f.jsx)(i,{getFilterLabel:t=>e?.[t]?.join(`,`)||`Choose `+t,filterState:e,onFilterStateChange:t,filters:c.map(e=>({...e,removable:!0}))}),(0,f.jsx)(r,{onClick:()=>t({}),children:`Reset`})]})},h=()=>(0,f.jsx)(a,{children:(0,f.jsx)(i,{...l({filters:c?.map(e=>({...e,removable:!0})),defaultFilterState:{status:[`requires-action`],unread:[`true`]}})})}),g=()=>{let e=l({filters:[{...s,as:o}],defaultFilterState:{}});return(0,f.jsxs)(a,{children:[(0,f.jsx)(i,{...e}),(0,f.jsxs)(u,{margin:`section`,children:[`State: `,JSON.stringify(e.filterState)]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({});
  return <Toolbar>
      <ToolbarFilter getFilterLabel={name => filterState?.[name]?.join(',') || 'Choose ' + name} filterState={filterState} onFilterStateChange={setFilterState} filters={inboxFilters.map(item => ({
      ...item,
      removable: true
    }))} />
      <Button onClick={() => setFilterState({})}>Reset</Button>
    </Toolbar>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}};var _=[`Controlled`,`Removable`,`Datepicker`];export{m as Controlled,g as Datepicker,h as Removable,_ as __namedExportsOrder,p as default};