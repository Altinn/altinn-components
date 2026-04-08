import{r as c,j as t}from"./iframe-BaUVsogD.js";import{S as u}from"./SelectDateFilter-r8dZC2rE.js";import{a as s,T as m}from"./Toolbar-DZAY8lvc.js";import{i as l,u as p,t as b}from"./example.hooks-CQLjbwEV.js";import{B as F}from"./Button-mtd2C5dd.js";import{S}from"./Section-HLTaZdun.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-COPXkqMS.js";import"./useId-D8i_et7Z.js";import"./Datepicker-D_gIHhXH.js";import"./index-lARy5TPT.js";import"./ChevronRight-sVn034m6.js";import"./MenuListItem-Bh_jPdY2.js";import"./MenuItem-6c1J0YV3.js";import"./ItemMedia-BVGZtNsE.js";import"./XMark-vPSUBj6u.js";import"./Avatar-u9iGVwtH.js";import"./Skeleton-yH6qNAEo.js";import"./AvatarGroup-DFVM-aUE.js";import"./Icon-7hKeNARf.js";import"./Checkmark-DTahSgDV.js";import"./Heading-Cdi1sqyd.js";import"./useHighlightedText-C23yE0pM.js";import"./Badge-DkZxiFUy.js";import"./MenuListHeading-B40v5QW5.js";import"./Fieldset-Btx1lmhQ.js";import"./lite-DaUVFjkg.js";import"./index-D4SJX6je.js";import"./use-merge-refs-BV0MipOU.js";import"./Label-Cge6OnF8.js";import"./Input-BHiIXP8Y.js";import"./input-C1CvvkMg.js";import"./SearchField-BG-HK4fX.js";import"./MagnifyingGlass-DyxA-WAG.js";import"./FieldBase-CZ-07bnd.js";import"./Typography-BHJ2EAGl.js";import"./useMenu-DnkwvAkg.js";import"./InformationSquare-CDbyjiK5.js";import"./useDropdownMenuController-u6nv9687.js";import"./Plus-CnR__6G5.js";import"./Dropdown-5b9N8l_a.js";import"./ChevronUpDown-C7TW0s4Z.js";import"./ButtonGroup-1O4V6IzI.js";import"./ButtonGroupDivider-BMhj8zcC.js";import"./Tooltip-WJW_Z0af.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-CtiiUfz3.js";import"./ToolbarSearch-DmgkuUXI.js";import"./Paperclip-CUEVdVsf.js";import"./Eye-D9s41kij.js";import"./MenuHamburger-Bwvpj7GR.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-BfXez8v8.js";import"./Flex-CpmusUMb.js";const xt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const dt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,dt as __namedExportsOrder,xt as default};
