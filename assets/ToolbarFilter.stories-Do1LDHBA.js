import{s as c,p as t}from"./iframe-Ca1pxjCh.js";import{S as u}from"./SelectDateFilter-C3N_hWhf.js";import{a as s,T as m}from"./Toolbar-DwUNvZ3c.js";import{i as l,a as p,t as b}from"./example.hooks-zn4ljd05.js";import{B as F}from"./Button-BUoYLOjU.js";import{S}from"./Section-BSLTGuDV.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-ChEwMlMz.js";import"./index-qsemo-NB.js";import"./MenuItem-LhE1AhKQ.js";import"./ItemMedia-B1dbthGB.js";import"./XMark-D_G5yHBr.js";import"./useId-DKdvhqLE.js";import"./Avatar-D6lLgCNX.js";import"./Skeleton-CjJRr45L.js";import"./AvatarGroup-DbBgQl7c.js";import"./Icon-DX2teY26.js";import"./Checkmark-BNq65g6F.js";import"./Heading-BWtrIkld.js";import"./useHighlightedText-B4z3dUTF.js";import"./ItemControls-CcgtvJvT.js";import"./Badge-B7pvghgv.js";import"./Tooltip-CUaFdea7.js";import"./tooltip-DBInG_0S.js";import"./ChevronRight-Dx7-HhpA.js";import"./ArrowUndo-DzsN0CWU.js";import"./MenuListHeading-CfNBOaKJ.js";import"./Fieldset-Pq_bUFFC.js";import"./Label-Dpkw0Wq9.js";import"./Input-CnEzvrKf.js";import"./Datepicker-CV2m2IbV.js";import"./SearchField-CQtbSmEr.js";import"./MagnifyingGlass-DvaQ8jq-.js";import"./FieldBase-B_jWg1W2.js";import"./Typography-B47euKof.js";import"./useMenu-CVV4ErAO.js";import"./index-C_HyNp1D.js";import"./InformationSquare-vAQpVtYs.js";import"./useDropdownMenuController-D-Vc94VJ.js";import"./Dropdown-mQdbulVM.js";import"./Plus-C2mGPGYW.js";import"./ButtonGroup-Bt3kIkZr.js";import"./ButtonGroupDivider-BSgO7uL3.js";import"./ChevronUpDown-CtvN4UUP.js";import"./ToolbarMenu-BOs_syWP.js";import"./ToolbarSearch-D3IsrQwv.js";import"./Paperclip-Dpwn8Tkx.js";import"./Eye-hNVApuei.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-B57Oky4-.js";import"./Flex-CU26bbCS.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
