import{aa as c,a7 as t,c as u}from"./iframe-CDUjh_2z.js";import{S as b}from"./SelectDateFilter-BZL5R1De.js";import{a as s,T as l}from"./Toolbar-BmDWl1Wb.js";import{i as m,a as p,t as F}from"./example.hooks-DTmujC0X.js";import{S}from"./Section-xHms6zkB.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CGgNB0ZA.js";import"./MenuItem-GdPNBIG6.js";import"./ItemMedia-Bai-Urcu.js";import"./Avatar-CxwAqCY2.js";import"./AvatarGroup-BYI_T_-3.js";import"./Checkmark-DLLLSSlc.js";import"./ItemLabel-Cz51yrrd.js";import"./Heading-DX7LPsCl.js";import"./useHighlightedText-DcMy2tkL.js";import"./ItemControls-Kup6bLJb.js";import"./Badge-9wdqlOC-.js";import"./Tooltip-rnvLebTi.js";import"./ChevronRight-CG3NwLwQ.js";import"./ArrowUndo-CzbSWIbd.js";import"./MenuListHeading-DztGiWDu.js";import"./Fieldset-CluJDwfI.js";import"./Field-BLni3K_t.js";import"./Label-BeOd8owz.js";import"./Input-CyWHlPcl.js";import"./Datepicker-RfG7K7YJ.js";import"./SearchField-D9cu5VJD.js";import"./MagnifyingGlass-Dn7hqdrb.js";import"./FieldBase-CC2tJByH.js";import"./Typography-HCvo8I75.js";import"./useMenu-CCO_lxMe.js";import"./index-BAc6HH-X.js";import"./InformationSquare-CT1i7ej7.js";import"./useDropdownMenuController-DBEdm3zN.js";import"./Dropdown-Cq9y5l3q.js";import"./Plus-BtkWHSVH.js";import"./ButtonGroup-Bu9UDZzJ.js";import"./ButtonGroupDivider-BvQ9mykg.js";import"./ChevronUpDown-XOGKv2jc.js";import"./ToolbarMenu-D8UlXWTF.js";import"./ToolbarSearch-DW2NN7vI.js";import"./Paperclip-DngzOU4W.js";import"./Eye-T93h4iqA.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CKCKhSKS.js";import"./Flex-Bc1_yHC5.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
