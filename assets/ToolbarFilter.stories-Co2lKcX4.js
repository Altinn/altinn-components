import{s as c,p as t}from"./iframe-BBbEwSaq.js";import{S as u}from"./SelectDateFilter-CtwON2Ch.js";import{a as s,T as m}from"./Toolbar-Bjujq1Yn.js";import{i as l,a as p,t as b}from"./example.hooks-Dm6optpP.js";import{B as F}from"./Button-DpW4Pu6O.js";import{S}from"./Section-Dq0xs0Y_.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-UbII8Q2r.js";import"./index-awH0sXcw.js";import"./MenuItem-CL2l3rp8.js";import"./ItemMedia-DR-yuWlq.js";import"./XMark-Dw8JSfSd.js";import"./useId-DZp72-eX.js";import"./Avatar-RSQnlVTq.js";import"./Skeleton-DFF9p8Mx.js";import"./AvatarGroup-DM7mpZJM.js";import"./Icon-Cx6QAjG2.js";import"./Checkmark-BcTHEh83.js";import"./ItemLabel-B9gTJ9up.js";import"./Heading-DDkqEyV3.js";import"./useHighlightedText-DORd4ETJ.js";import"./ItemControls-DaNsbzwN.js";import"./Badge-CZZB9VpQ.js";import"./Tooltip-BL1y86OR.js";import"./tooltip-D3G3Ewte.js";import"./ChevronRight-Bj8DUJ8P.js";import"./ArrowUndo-B9HC4bPd.js";import"./MenuListHeading-C7xt4T8q.js";import"./Fieldset-D2PHhPJw.js";import"./Label-DdMEJ83A.js";import"./Input-lqau07kD.js";import"./Datepicker-DXwSPiN3.js";import"./SearchField-D1R32ak6.js";import"./MagnifyingGlass-B6FIAadU.js";import"./FieldBase-CbyxT5SM.js";import"./Typography-41mT2wo8.js";import"./useMenu-CP6B3JUk.js";import"./index-BBId2cwS.js";import"./InformationSquare-BNlJiT0G.js";import"./useDropdownMenuController-e_G_Gi4i.js";import"./Dropdown-CQPIYrWf.js";import"./Plus-CmpsnneT.js";import"./ButtonGroup-oq7iIeFJ.js";import"./ButtonGroupDivider-DFu7SRn8.js";import"./ChevronUpDown-qfg5q5aR.js";import"./ToolbarMenu-lZoPJ6OZ.js";import"./ToolbarSearch-aJlGHfoZ.js";import"./Paperclip-CTYUfIdt.js";import"./Eye-DjmH3mmf.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CaVnn13l.js";import"./Flex-Cc0Ueohf.js";const St={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
