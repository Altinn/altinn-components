import{r as c,j as t}from"./iframe-D-ID03Ik.js";import{S as u}from"./SelectDateFilter-B9mF_XgT.js";import{a as s,T as m}from"./Toolbar-D_32k6lF.js";import{i as l,u as p,t as b}from"./example.hooks-CnMtMJi6.js";import{B as F}from"./Button-CO1zFGa4.js";import{S}from"./Section-Df_v2ciX.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-C5nWWLI0.js";import"./useId-DxZoCrQU.js";import"./Datepicker-DiQBl0Pv.js";import"./index-DpFyEq-2.js";import"./ChevronRight-CxM-6AgC.js";import"./MenuListItem-Ba7wKRG_.js";import"./MenuItem-Czug_8v9.js";import"./ItemMedia-BTzF80jS.js";import"./XMark-DAr8sgUQ.js";import"./Avatar-CUF81_T9.js";import"./Skeleton--3bwKnDN.js";import"./AvatarGroup-ZBmyex5T.js";import"./Icon-CER3YkDn.js";import"./Checkmark-WbwQiDGB.js";import"./Heading-BD0s_Obx.js";import"./useHighlightedText-Db1ksA0v.js";import"./ItemControls-Bpd8WrWV.js";import"./Badge-BH60Kfyy.js";import"./Tooltip-DuVvkEGb.js";import"./tooltip-CH7-mov_.js";import"./MenuListHeading-D9YSE4Po.js";import"./Fieldset-CPq1hID8.js";import"./Label-DsF9mxAr.js";import"./Input-BflTpPuJ.js";import"./SearchField-D--HBqax.js";import"./MagnifyingGlass-DWkFIUI5.js";import"./FieldBase-DmpPz6xV.js";import"./Typography-COzCTzPW.js";import"./useMenu-OLkOIIh8.js";import"./index-B-QoLJUi.js";import"./InformationSquare-BLDef__3.js";import"./useDropdownMenuController-CvvhEQZ7.js";import"./Plus-DTGwq1FZ.js";import"./Dropdown-CPTBx2eu.js";import"./ChevronUpDown-BHEUhOzV.js";import"./ButtonGroup-vd8KP0y5.js";import"./ButtonGroupDivider-DHMyJatP.js";import"./ToolbarMenu-B1E5Clfm.js";import"./ToolbarSearch-DH92-z9I.js";import"./Paperclip-CR_ArcLu.js";import"./Eye-oHc2-Not.js";import"./MenuHamburger-DWdWswT9.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./Flex-pOoXofWS.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
