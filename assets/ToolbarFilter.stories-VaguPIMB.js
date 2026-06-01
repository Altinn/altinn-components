import{s as c,p as t}from"./iframe-HmDeAVAp.js";import{S as u}from"./SelectDateFilter-ChkSDNLF.js";import{a as s,T as m}from"./Toolbar-BKE4Y_qG.js";import{i as l,a as p,t as b}from"./example.hooks-BSO-qc4d.js";import{B as F}from"./Button-SB9AH0kY.js";import{S}from"./Section-0rDkal-t.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-DjeDZ_MF.js";import"./index-CDtevUxF.js";import"./MenuItem-C_rMT9NN.js";import"./ItemMedia-CLlob8fs.js";import"./XMark-DFSmJjac.js";import"./useId-BNhfXdUV.js";import"./Avatar-CUX9SLHz.js";import"./Skeleton-C_Dxe6ID.js";import"./AvatarGroup-CpvcYsvD.js";import"./Icon-DE5JaAj2.js";import"./Checkmark-_BupHaSE.js";import"./ItemLabel-DIku2iz8.js";import"./Heading-CYuK0FXt.js";import"./useHighlightedText-CVbcsWEJ.js";import"./ItemControls-dRm3u7Mm.js";import"./Badge-DVsrmVw9.js";import"./Tooltip-DFVNjhLt.js";import"./tooltip-DaXe8rKK.js";import"./ChevronRight-Cqfpq8PE.js";import"./ArrowUndo-5PN4IUrs.js";import"./MenuListHeading-Bby608mu.js";import"./Fieldset-CwIulh6B.js";import"./Field-D-jjHIb3.js";import"./Label-Bwfk_b4F.js";import"./Input-Dd7kdPyi.js";import"./Datepicker-DFyeScJe.js";import"./SearchField-jJndU2uH.js";import"./MagnifyingGlass-BBPHMis4.js";import"./FieldBase-DgiW3HLY.js";import"./Typography-C3y2BBzr.js";import"./useMenu-l9Wd3rxx.js";import"./index-4vigTm9p.js";import"./InformationSquare-C8JPrkni.js";import"./useDropdownMenuController-DyRpfBpv.js";import"./Dropdown-DitJK_eU.js";import"./Plus-DQEVi2NZ.js";import"./ButtonGroup-IIZdVlDD.js";import"./ButtonGroupDivider-CnzTkYJc.js";import"./ChevronUpDown-CWSZq7_s.js";import"./ToolbarMenu-CsI2k66_.js";import"./ToolbarSearch-6PZ1R0uh.js";import"./Paperclip-C8xe1fL3.js";import"./Eye-SZ3J1_6O.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DdsOhgur.js";import"./Flex-CKAWkLAd.js";const ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const xt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,xt as __namedExportsOrder,ft as default};
