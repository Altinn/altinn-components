import{r as c,j as t}from"./iframe-Cppd0qv6.js";import{S as u}from"./SelectDateFilter-di6IER3e.js";import{a as s,T as m}from"./Toolbar-YVNpZ2Vv.js";import{i as l,u as p,t as b}from"./example.hooks-BwNKgA1Z.js";import{B as F}from"./Button-DZtlkh8w.js";import{S}from"./Section-B6Kfhq0f.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo--v4Yl1wb.js";import"./useId-BBgZM5Xr.js";import"./Datepicker-CYxUKe0V.js";import"./index-BRImx9w3.js";import"./ChevronRight-CWvUN_3J.js";import"./MenuListItem-BHtHmzZq.js";import"./MenuItem-DujpBTEw.js";import"./ItemMedia-B28DyjI4.js";import"./XMark-xtLLERRk.js";import"./Avatar-C8BEFMoW.js";import"./Skeleton-DZL_2b5i.js";import"./AvatarGroup-CkQ-nr_4.js";import"./Icon-DYZqEJGr.js";import"./Checkmark-Ci2lQnJg.js";import"./Heading-CVWk1BMK.js";import"./useHighlightedText-CnlmbfHa.js";import"./ItemControls-D1uxt3OD.js";import"./Badge-DKrs0UA7.js";import"./Tooltip-B3YY3plR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BVudX8AY.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-DGbRdhBr.js";import"./Fieldset-DRaBeFp8.js";import"./index-DZ9ad6Vq.js";import"./Label-BZYzljw4.js";import"./Input-BKVpgPJL.js";import"./input-DhtF3MwF.js";import"./SearchField-Cfz4mYX1.js";import"./MagnifyingGlass-D5_sNBXy.js";import"./FieldBase-AUbtsXZu.js";import"./Typography-CFy91Abt.js";import"./useMenu-Dh0AdFxf.js";import"./InformationSquare-C6gp2qmA.js";import"./useDropdownMenuController-BL3HRjvJ.js";import"./Plus-Budqe_al.js";import"./Dropdown-CazJ30ul.js";import"./ChevronUpDown-wLjF1tcy.js";import"./ButtonGroup-DWofFi2X.js";import"./ButtonGroupDivider-Cf7MVCnb.js";import"./ToolbarMenu-DDpAUS1K.js";import"./ToolbarSearch-DA4J89oG.js";import"./Paperclip-Bz_MQKsG.js";import"./Eye-DWFBDohX.js";import"./MenuHamburger-DXfg8QpW.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-DXqTFqXv.js";import"./Flex-BPZu7a_-.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
