import{r as c,j as t}from"./iframe-BUZW8AMM.js";import{S as u}from"./SelectDateFilter-DEHVKV6y.js";import{a as s,T as m}from"./Toolbar-44ANOcfq.js";import{i as l,u as p,t as b}from"./example.hooks-DyAg_4Hr.js";import{B as F}from"./Button-gpqpzK6E.js";import{S}from"./Section-DQEzrtai.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DP3wQisr.js";import"./useId-CoMggIDA.js";import"./Datepicker-BZxP-CcT.js";import"./index-DDG5Qp_D.js";import"./ChevronRight-Be2F8dIE.js";import"./MenuListItem-DOB3vVPI.js";import"./MenuItem-B9Qpze_W.js";import"./ItemMedia-lV46z_8W.js";import"./XMark-N_5CtkVA.js";import"./Avatar-VmI9f2FC.js";import"./Skeleton-2WT-jYKy.js";import"./AvatarGroup-BSpRcNGO.js";import"./Icon-pO_LYxKU.js";import"./Checkmark-B1cvuYYq.js";import"./Heading-BBJzhiZm.js";import"./useHighlightedText-Df1F8nSN.js";import"./ItemControls-CILw3fe6.js";import"./Badge-CcUYqUUV.js";import"./Tooltip-4HkvDlDY.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-Cq-TarIz.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-BbGKJ44d.js";import"./Fieldset-D6j_8XE-.js";import"./index-BxrYGQ_D.js";import"./Label-EV3PcI6g.js";import"./Input-xWxScOYP.js";import"./input-Dl9c_xvZ.js";import"./SearchField-DOgIBcSC.js";import"./MagnifyingGlass-e5Ddvpo2.js";import"./FieldBase-D0VPfoZq.js";import"./Typography-DPxU9lqg.js";import"./useMenu-DzfOGhde.js";import"./index-B1N1jCNu.js";import"./InformationSquare-D87nn8LZ.js";import"./useDropdownMenuController-ocgtyANg.js";import"./Plus-BWMMx9bM.js";import"./Dropdown-B9D2leTq.js";import"./ChevronUpDown-DyYbhZIM.js";import"./ButtonGroup-BdRMlEte.js";import"./ButtonGroupDivider-DSjna6gU.js";import"./ToolbarMenu-1Q9tH7De.js";import"./ToolbarSearch-D2snndR4.js";import"./Paperclip-DiBOowVE.js";import"./Eye-DQI7Yw7a.js";import"./MenuHamburger-BwbXv_3L.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-Bzfkec0d.js";import"./Flex-ErkwFvdj.js";const Tt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
