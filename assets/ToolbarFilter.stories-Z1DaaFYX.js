import{r as c,j as t}from"./iframe-BFO1Hsm7.js";import{S as u}from"./SelectDateFilter-BCmpe1jv.js";import{a as s,T as m}from"./Toolbar-eYS2EjXg.js";import{i as l,u as p,t as b}from"./example.hooks-CwOwHjlV.js";import{B as F}from"./Button-D67YnkXJ.js";import{S}from"./Section-D_8M4GBJ.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CSUnA5tv.js";import"./useId-Bk4Ffxqs.js";import"./Datepicker-DcxHZcwO.js";import"./index-q4P8UESO.js";import"./ChevronRight-CdUbwk3C.js";import"./MenuListItem-DzO3mXQV.js";import"./MenuItem-C9MWQovM.js";import"./ItemMedia-C5bbkB29.js";import"./XMark-DHT-JiZe.js";import"./Avatar-KSmNIbNE.js";import"./Skeleton-BRac3_14.js";import"./AvatarGroup-V6EVtbEK.js";import"./Icon-B4PZu81w.js";import"./Checkmark-BeWey6nu.js";import"./Heading-BaJonbem.js";import"./useHighlightedText-BBNMb3RU.js";import"./ItemControls-Dko-TfIa.js";import"./Badge-DsEojOp1.js";import"./Tooltip-rGuNyqhX.js";import"./tooltip-DUJ67ouq.js";import"./MenuListHeading-D6MF194z.js";import"./Fieldset-DYYh48wP.js";import"./Label-D5tsUrXq.js";import"./Input-D60Cokb5.js";import"./SearchField-BsaRMZXP.js";import"./MagnifyingGlass-BT5t3YH7.js";import"./FieldBase-BLwJwwaJ.js";import"./Typography-Bd9N_lP-.js";import"./useMenu-kKDgIapy.js";import"./index-CzpMp7Co.js";import"./InformationSquare-Csa1evZE.js";import"./useDropdownMenuController-CDJC1UYs.js";import"./Plus-CzDIu3KD.js";import"./Dropdown-DNakKmHK.js";import"./ChevronUpDown-X5lIP4sr.js";import"./ButtonGroup-VRxYnWM6.js";import"./ButtonGroupDivider-uQMX6KWa.js";import"./ToolbarMenu-BHkHtwFy.js";import"./ToolbarSearch-Dyliippy.js";import"./Paperclip-dS4z7Edu.js";import"./Eye-BpkaW8HI.js";import"./MenuHamburger-rt2ExzIR.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./Flex-QSO1QCFn.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const St=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,St as __namedExportsOrder,Ft as default};
