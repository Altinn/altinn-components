import{aa as c,a7 as t,c as u}from"./iframe-C3-39QZn.js";import{S as b}from"./SelectDateFilter-CR0Uen82.js";import{a as s,T as l}from"./Toolbar-BgSEQM0z.js";import{i as m,a as p,t as F}from"./example.hooks-BBY_dP2n.js";import{S}from"./Section-B5UTl4N5.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-C_zHoz8h.js";import"./MenuItem-_nHd0yat.js";import"./ItemMedia-Dvk-rH5V.js";import"./Avatar-WM3RFSU5.js";import"./AvatarGroup-BCEXfOjH.js";import"./Checkmark-DcGYSDVC.js";import"./ItemLabel-EUoHzQAm.js";import"./Heading-B2KBSzP-.js";import"./useHighlightedText--t_r6ff3.js";import"./ItemControls-CvvFc83j.js";import"./Badge-D3xvyoOt.js";import"./Tooltip-DTSJdaMh.js";import"./ChevronRight-C8E9q9OI.js";import"./ArrowUndo-CTGuYn12.js";import"./MenuListHeading-BABwYJ-w.js";import"./Fieldset-D2YnPI2m.js";import"./Field-D-SteSQi.js";import"./Label-BXFq-CrQ.js";import"./Input-Ck9X-Ajd.js";import"./Datepicker-C9WRzYWf.js";import"./SearchField-BHCumu4V.js";import"./MagnifyingGlass-W4-YHK47.js";import"./FieldBase-CuUVQ-X3.js";import"./Typography-DzSxU3qn.js";import"./useMenu-PdCJBcPZ.js";import"./index-DsMJ5_O1.js";import"./InformationSquare-CikWmUv2.js";import"./useDropdownMenuController-Ch-gS0ya.js";import"./Dropdown-DwcIrTVC.js";import"./Plus-CD1Lx9Ec.js";import"./ButtonGroup-BudWnE7m.js";import"./ButtonGroupDivider-D5yx3I3q.js";import"./ChevronUpDown-DEBJ8CrN.js";import"./ToolbarMenu-BNlsOyu6.js";import"./ToolbarSearch-DQchSTEp.js";import"./Paperclip-B7l4T1Kq.js";import"./Eye-sZIwA-0p.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BX-oMAjS.js";import"./Flex-cOQ4YkiH.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
