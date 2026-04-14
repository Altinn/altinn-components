import{r as c,j as t}from"./iframe-gnB9S1An.js";import{S as u}from"./SelectDateFilter-DxAfAMns.js";import{a as s,T as m}from"./Toolbar-BinhdMzm.js";import{i as l,u as p,t as b}from"./example.hooks-BXV6hrEu.js";import{B as F}from"./Button-Cf61aO7p.js";import{S}from"./Section-0HIHqGS0.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Bzf3zYG1.js";import"./useId-B9nFNwMW.js";import"./Datepicker-BKWmjb9D.js";import"./index-C4jL9APw.js";import"./ChevronRight-CmdeYhPT.js";import"./MenuListItem-Cw2vF4tQ.js";import"./MenuItem-DVF0RjTG.js";import"./ItemMedia-B78XDhUs.js";import"./XMark-F0lxfgWB.js";import"./Avatar-otyGg43a.js";import"./Skeleton-_K166C5F.js";import"./AvatarGroup-CYAQOWwZ.js";import"./Icon-CL2c9__7.js";import"./Checkmark-D8iTH_Nd.js";import"./Heading-uoQ4E1Gx.js";import"./useHighlightedText-BAP0b8E_.js";import"./ItemControls-0hV_6Ao9.js";import"./Badge-D2lHyQ6d.js";import"./MenuListHeading-BN0bXZhY.js";import"./Fieldset-BCe99vhN.js";import"./lite-DaUVFjkg.js";import"./index-DXeuHUJe.js";import"./use-merge-refs-W_EFMAqs.js";import"./Label-Bqs-eWs1.js";import"./Input-9fyov3Km.js";import"./input-DqrOL1yx.js";import"./SearchField-CW2AroNW.js";import"./MagnifyingGlass-LdJ8MC-9.js";import"./FieldBase-BbR80WA9.js";import"./Typography-uy1P5_7q.js";import"./useMenu-DEo-iQ-R.js";import"./InformationSquare-CRWfnij7.js";import"./useDropdownMenuController-4NcEcuey.js";import"./Plus-p8k1KwpY.js";import"./Dropdown-C0Ynf067.js";import"./ChevronUpDown-BsjklsEy.js";import"./ButtonGroup-b_-H3sds.js";import"./ButtonGroupDivider-CPu4IzmD.js";import"./Tooltip-D-gwYEuh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-UUZF6_sk.js";import"./ToolbarSearch-B98pYuNh.js";import"./Paperclip-YCmG63MU.js";import"./Eye-CG3xDgEv.js";import"./MenuHamburger-UwfHPvv0.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-CCpZP8rq.js";import"./Flex-Dhq417nc.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const Tt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,Tt as __namedExportsOrder,dt as default};
