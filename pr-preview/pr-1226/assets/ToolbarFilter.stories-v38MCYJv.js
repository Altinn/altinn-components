import{aa as c,a7 as t,c as u}from"./iframe-Ci8DJ-6R.js";import{S as b}from"./SelectDateFilter-orGdOmRf.js";import{a as s,T as l}from"./Toolbar-Buvwt5DY.js";import{i as m,a as p,t as F}from"./example.hooks-Ds8p9E2u.js";import{S}from"./Section-C3vz0YaC.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-Cpkt8LLi.js";import"./MenuItem-CLCRatEV.js";import"./ItemMedia-D2PQb4gS.js";import"./Avatar-D3AIreGS.js";import"./AvatarGroup-D3N3OV8x.js";import"./Checkmark-V7YKXO-0.js";import"./ItemLabel-D6hw0WzI.js";import"./Heading-CWZTf72r.js";import"./useHighlightedText-CMND7wU2.js";import"./ItemControls-DXMoT8B2.js";import"./Badge-CVr9GptX.js";import"./Tooltip-CGvNbStB.js";import"./ChevronRight-BEnuMmPo.js";import"./ArrowUndo-vXvPRQCY.js";import"./MenuListHeading-CkHpUapY.js";import"./Fieldset-B4ioRMev.js";import"./Field-C7mGyyvw.js";import"./Label-BZiKx0Le.js";import"./Input-DWxDHqSK.js";import"./Datepicker-BnPTOA_o.js";import"./SearchField-BI6hQSM3.js";import"./MagnifyingGlass--VnpSKzI.js";import"./FieldBase-CJmJ_FUR.js";import"./Typography-C-nn41yV.js";import"./useMenu-7RMszhcf.js";import"./index-dwvgmSh8.js";import"./InformationSquare-CEM0wkOI.js";import"./useDropdownMenuController-C7yQw1zK.js";import"./Dropdown-DPTyogAf.js";import"./Plus-5W3QRt0z.js";import"./ButtonGroup-BYverAEg.js";import"./ButtonGroupDivider-CbGS_QDF.js";import"./ChevronUpDown-B2xWlDPi.js";import"./ToolbarMenu--3FAbZwG.js";import"./ToolbarSearch-Bs15t96k.js";import"./Paperclip-C3-qst4O.js";import"./Eye-D7P8toDb.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-wLQDd0FF.js";import"./Flex-UXtVwom-.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const pt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,pt as __namedExportsOrder,mt as default};
