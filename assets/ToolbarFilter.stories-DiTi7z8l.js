import{r as c,j as t}from"./iframe-Cqj3AiBb.js";import{S as u}from"./SelectDateFilter-B6lsLzAw.js";import{a as s,T as m}from"./Toolbar-C1AG3cCG.js";import{i as l,u as p,t as b}from"./example.hooks-CvDsTxaZ.js";import{B as F}from"./Button-DYwdzfZG.js";import{S}from"./Section-BsXiOSXS.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-zDsO2X_3.js";import"./useId-Bi-DL88I.js";import"./Datepicker-Bb_SOfY4.js";import"./index-CHG1hv9Q.js";import"./ChevronRight-CxmxTIkT.js";import"./MenuListItem-BGLPSqCo.js";import"./MenuItem-BHtFBHA3.js";import"./ItemMedia-DihsrAKt.js";import"./XMark-ReENydG3.js";import"./Avatar-D1U6ps5a.js";import"./Skeleton-B33vAz-c.js";import"./AvatarGroup-CmMUwf3A.js";import"./Icon-CHi77IUK.js";import"./Checkmark-BFwQvgMU.js";import"./Heading-CJiOkJPI.js";import"./useHighlightedText-Cyl54eZj.js";import"./ItemControls-eJMUKPOH.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CZYKnUm1.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-CixMX2n6.js";import"./Fieldset-W2wGG_nr.js";import"./index-BZqr7PxG.js";import"./Label-URmODKr6.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./SearchField-qenOIdRZ.js";import"./MagnifyingGlass-fMCV_alc.js";import"./FieldBase-DDsWnoQi.js";import"./Typography-CV-E4tqG.js";import"./useMenu-CKPILulU.js";import"./index-hX5sl0T5.js";import"./InformationSquare-DK31GEUT.js";import"./useDropdownMenuController-DF4yQiJ_.js";import"./Plus-U9ILyx0n.js";import"./Dropdown-Cx7yQmcU.js";import"./ChevronUpDown-DokNKEik.js";import"./ButtonGroup-HmC79Nv3.js";import"./ButtonGroupDivider-DRl2_qKh.js";import"./ToolbarMenu-CrdlAyWm.js";import"./ToolbarSearch-C6dAmVLU.js";import"./Paperclip-DhIyBwic.js";import"./Eye-B2jzUGYg.js";import"./MenuHamburger-Cowy_Pyv.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-CcZ_KMhQ.js";import"./Flex-DFnlILDc.js";const Tt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const gt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,gt as __namedExportsOrder,Tt as default};
