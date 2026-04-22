import{r as c,j as t}from"./iframe-C5YDQF8t.js";import{S as u}from"./SelectDateFilter-ushNxWKl.js";import{a as s,T as m}from"./Toolbar-CTeUhJlX.js";import{i as l,u as p,t as b}from"./example.hooks-DSUGvcOm.js";import{B as F}from"./Button-BZAGm3c0.js";import{S}from"./Section-Dr7qREfG.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CoYWG19L.js";import"./useId-D8_RB8wa.js";import"./Datepicker-CLsIJF3I.js";import"./index-Wv9BNi45.js";import"./ChevronRight-N4TcqxLw.js";import"./MenuListItem-Dn26XcpH.js";import"./MenuItem-WQ9gCGs0.js";import"./ItemMedia-FRtQjDq_.js";import"./XMark-DdTqeOk-.js";import"./Avatar-BGjXXmrj.js";import"./Skeleton-Drx-E9Fo.js";import"./AvatarGroup-DQC0T1Vh.js";import"./Icon-CecLgcvt.js";import"./Checkmark-B_9eKN07.js";import"./Heading-DpfkgbSv.js";import"./useHighlightedText-n06FiY88.js";import"./ItemControls-B4P5BjHw.js";import"./Badge-BloMeVT9.js";import"./Tooltip-BhYnScUh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-C8sdFhVy.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-b0m4AzBM.js";import"./Fieldset-CdSmZIIj.js";import"./index-B1UWFYtY.js";import"./Label-DtjEPZjV.js";import"./Input-CBT5zBbT.js";import"./input-D6WzUQ9f.js";import"./SearchField-DhRNQpTW.js";import"./MagnifyingGlass-CEZChhW1.js";import"./FieldBase-BeNWnE8F.js";import"./Typography-yp9Qf0rT.js";import"./useMenu-BhI6CQre.js";import"./InformationSquare-BnjsTJI5.js";import"./useDropdownMenuController-BRCJdC3F.js";import"./Plus-Dly6Qmjb.js";import"./Dropdown-r5WY9yG7.js";import"./ChevronUpDown-DdGlDybH.js";import"./ButtonGroup-Z2Cev14m.js";import"./ButtonGroupDivider-7keb6YJA.js";import"./ToolbarMenu-De6HvAf9.js";import"./ToolbarSearch-CnP_5iK4.js";import"./Paperclip-CumVX6Ac.js";import"./Eye-C7fKJvBF.js";import"./MenuHamburger-CzLGV6Fr.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-CCJ82TCy.js";import"./Flex-6suuLzFU.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
