import{r as c,j as t}from"./iframe-BLYnYdJi.js";import{S as u}from"./SelectDateFilter-BBbPv8j3.js";import{a as s,T as m}from"./Toolbar-CewnHVzf.js";import{i as l,u as p,t as b}from"./example.hooks-Ds1P7WTy.js";import{B as F}from"./Button-DA7PTG8V.js";import{S}from"./Section-B5XykhYf.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-nSuILEr9.js";import"./useId-X7maRfkh.js";import"./Datepicker-ByaX6VWY.js";import"./index-B87fQ9Ty.js";import"./ChevronRight-BKn9ueoN.js";import"./MenuListItem-4EzyMnJz.js";import"./MenuItem-QRksz61A.js";import"./ItemMedia-PaceHGjP.js";import"./XMark-Df3dBUtr.js";import"./Avatar-R2BW9KiJ.js";import"./Skeleton-DVFvYbaO.js";import"./AvatarGroup-Bj4w1IxT.js";import"./Icon-BBgjdpk7.js";import"./Checkmark-DfNuFQY9.js";import"./Heading-BbPallRO.js";import"./useHighlightedText-omqdYwyr.js";import"./ItemControls-lA3CDM6n.js";import"./Badge-C8IaAeJ7.js";import"./Tooltip-C4gqbQ4g.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-FLCzGq2C.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-CHqHsXip.js";import"./Fieldset-4oddqKsb.js";import"./index-CJAPncw7.js";import"./Label-Br4cyMgU.js";import"./Input-6k10kXxt.js";import"./input-D5lGbDkw.js";import"./SearchField-BrbRKSJg.js";import"./MagnifyingGlass-vVGrqHq4.js";import"./FieldBase-CvSJrP7q.js";import"./Typography-CnODk9AP.js";import"./useMenu-DImJoMjP.js";import"./InformationSquare-OOV4URoX.js";import"./useDropdownMenuController--K-V2jGb.js";import"./Plus-BP2D1YPb.js";import"./Dropdown-B_CqShRd.js";import"./ChevronUpDown-Bi5y66ZT.js";import"./ButtonGroup-CEDbAWnm.js";import"./ButtonGroupDivider-CvTb59sy.js";import"./ToolbarMenu-2H_l_H82.js";import"./ToolbarSearch-Cwhqz22J.js";import"./Paperclip-BRG3sxHl.js";import"./Eye-CdC36Qhm.js";import"./MenuHamburger-C7T2DwIu.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-B4GPokGl.js";import"./Flex-CND7PM33.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
