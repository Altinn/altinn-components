import{aa as u,a7 as t,c as b}from"./iframe-Da53zzTq.js";import{S as F}from"./SelectDateFilter-C3nYhOxR.js";import{a as l,T as n}from"./Toolbar-WPt-0zLw.js";import{i as m,a as p,t as S}from"./example.hooks-DEWM6k8i.js";import{S as f}from"./Section-CfHJUgK6.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-miRB5bIM.js";import"./MenuItem-CyggXvzt.js";import"./ItemMedia-DBIH2IUr.js";import"./Avatar-CNmsZKUa.js";import"./AvatarGroup-CiKX_xpR.js";import"./Checkmark-y0isgIvR.js";import"./ItemLabel-DluBJ4yx.js";import"./Heading-DscqP9Yc.js";import"./useHighlightedText-CRKmbQjK.js";import"./ItemControls-ohsHtP8K.js";import"./Badge-Cz-Xpmja.js";import"./Tooltip-Ovi09slt.js";import"./ChevronRight-R352om1g.js";import"./ArrowUndo-G4gIgZFZ.js";import"./MenuListHeading-DpZURBIT.js";import"./Fieldset-D12O3Gzy.js";import"./Field-BfWcyiGr.js";import"./Label-BttEpvGq.js";import"./Input-CoMQYpcI.js";import"./Datepicker-C-_--s0K.js";import"./SearchField-C_K7QMu3.js";import"./MagnifyingGlass-bfd6ClVE.js";import"./FieldBase-BU_zP5Yv.js";import"./Typography-Dy4MqSc4.js";import"./useMenu-DY0SSfK5.js";import"./index-nqILkJZM.js";import"./InformationSquare-B_LCnSe8.js";import"./useDropdownMenuController-XTqI9DN8.js";import"./Dropdown-CHEaMzgw.js";import"./Plus-D8GF-Tra.js";import"./ButtonGroup-D9Sva-zY.js";import"./ButtonGroupDivider-9oaQ3ONq.js";import"./ChevronUpDown-B6NVOUD7.js";import"./ToolbarMenu-D1PuGl8y.js";import"./ToolbarSearch-XHPG1jch.js";import"./Paperclip-BL7UJNU7.js";import"./Eye-BX9ZXkhF.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-C3wVymzF.js";import"./Flex-D2KvdX5w.js";const pt={title:"Toolbar/ToolbarFilter",component:l,parameters:{},args:{}},i=()=>{const[e,r]=u.useState({}),c=m.map(o=>({...o,removable:!0}));return t.jsxs(n,{children:[t.jsx(l,{addLabel:"Legg til filter",getFilterLabel:o=>e?.[o]?.join(",")||"Choose "+o,filterState:e,onFilterStateChange:r,filters:c}),t.jsx(b,{onClick:()=>r({}),children:"Reset"})]})},a=()=>{const e=p({filters:m?.map(r=>({...r,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(n,{children:t.jsx(l,{...e})})},s=()=>{const e=p({filters:[{...S,as:F}],defaultFilterState:{}});return t.jsxs(n,{children:[t.jsx(l,{...e}),t.jsxs(f,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({});
  const filters = inboxFilters.map(item => ({
    ...item,
    removable: true
  }));
  return <Toolbar>
      <ToolbarFilter addLabel="Legg til filter" getFilterLabel={name => filterState?.[name]?.join(',') || 'Choose ' + name} filterState={filterState} onFilterStateChange={setFilterState} filters={filters} />
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const ct=["Controlled","Removable","Datepicker"];export{i as Controlled,s as Datepicker,a as Removable,ct as __namedExportsOrder,pt as default};
