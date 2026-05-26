import{r as c,j as t}from"./iframe-DU0n7__8.js";import{S as u}from"./SelectDateFilter-jZ0D60ln.js";import{a as s,T as m}from"./Toolbar-qFeKz95G.js";import{i as l,u as p,t as b}from"./example.hooks-D7CzRhMv.js";import{B as F}from"./Button-pXyw-iqn.js";import{S}from"./Section-DwU7Gyqo.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Bx0cXSI_.js";import"./useId-DCXiBgwp.js";import"./Datepicker-Dv0LBvwU.js";import"./index-sAFX08uI.js";import"./ChevronRight-B4fDZY6k.js";import"./MenuListItem-C1_3DGyN.js";import"./MenuItem--8QkhFJ4.js";import"./ItemMedia-yH6oBbwQ.js";import"./XMark-DGVnrVrT.js";import"./Avatar-Bsgd2iIp.js";import"./Skeleton-etbnaSOo.js";import"./AvatarGroup-BpsuUsFp.js";import"./Icon-Dg7nJLrw.js";import"./Checkmark-CCpN8hs9.js";import"./Heading-BrrIdLRc.js";import"./useHighlightedText-Wa_y882s.js";import"./ItemControls-BwQhe1K-.js";import"./Badge-DWaei4kj.js";import"./Tooltip-DMnOwjPw.js";import"./tooltip-UENHGvJl.js";import"./MenuListHeading-iogtqFYg.js";import"./Fieldset-CU0WOUwA.js";import"./Label-DSFEyVbW.js";import"./Input-Cjh3ClWU.js";import"./SearchField-B4KuSSyF.js";import"./MagnifyingGlass-COVfkIqf.js";import"./FieldBase-BIV16XC5.js";import"./Typography-DOUoXZCv.js";import"./useMenu-CrvHU43k.js";import"./index-Cyw62YTk.js";import"./InformationSquare-Bfq2NTGF.js";import"./useDropdownMenuController-BCWUKN9Y.js";import"./Plus-BxZePwQm.js";import"./Dropdown-Bvq9VpIR.js";import"./ChevronUpDown-DOKppJjP.js";import"./ButtonGroup-rBVDnBd_.js";import"./ButtonGroupDivider-B64rjX68.js";import"./ToolbarMenu-DIvagWDA.js";import"./ToolbarSearch-DkHlFmo7.js";import"./Paperclip-vQzd0cK8.js";import"./Eye-rXBIJWK8.js";import"./MenuHamburger--Lo7F4E1.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./Flex-C_O_eubX.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
