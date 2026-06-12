import{aa as u,a7 as t,c as b}from"./iframe-DWR_BPge.js";import{S as F}from"./SelectDateFilter-DaIBniVC.js";import{a as l,T as n}from"./Toolbar-CVDPeYru.js";import{i as m,a as p,t as S}from"./example.hooks-d0AQJrYH.js";import{S as f}from"./Section-BCFzX2B1.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-fkd7gaum.js";import"./MenuItem-hCzlas21.js";import"./ItemMedia-CNbHl28k.js";import"./Avatar-Cok-GZxK.js";import"./AvatarGroup-CXLQt8Ir.js";import"./Checkmark-DJ-994GJ.js";import"./ItemLabel-D6TsLy-F.js";import"./Heading-DZv3ITVf.js";import"./useHighlightedText-CxSGKcWS.js";import"./ItemControls-BuEVWR3X.js";import"./Badge-DkIfMZHe.js";import"./Tooltip-DTF1wjLo.js";import"./ChevronRight-Byhvri5k.js";import"./ArrowUndo-DNQ5VHUr.js";import"./MenuListHeading-CnnWm4Yf.js";import"./Fieldset-CmPgreUf.js";import"./Field-Ck35a6Qp.js";import"./Label-BsbeMro6.js";import"./Input-_0Vw9ldu.js";import"./Datepicker-CSM4U2Kx.js";import"./SearchField-MQHHZ8_3.js";import"./MagnifyingGlass-G_PIqG58.js";import"./FieldBase-BMAVe4Iy.js";import"./Typography-Ck9DnhQz.js";import"./useMenu-D6mVZHWX.js";import"./index-Cf984nsL.js";import"./InformationSquare-DScDoZl7.js";import"./useDropdownMenuController-CeHTZ23v.js";import"./Dropdown-DtgTj7aV.js";import"./Plus-F3v00gKT.js";import"./ButtonGroup-BQ7wgDtN.js";import"./ButtonGroupDivider-D4r8VyyV.js";import"./ChevronUpDown-CEWdRwRE.js";import"./ToolbarMenu-Ba6pimK-.js";import"./ToolbarSearch-D6eldHRT.js";import"./Paperclip-CZMsVYgy.js";import"./Eye-CF9VQ03O.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-LlREICSw.js";import"./Flex-6ZJb0CGr.js";const pt={title:"Toolbar/ToolbarFilter",component:l,parameters:{},args:{}},i=()=>{const[e,r]=u.useState({}),c=m.map(o=>({...o,removable:!0}));return t.jsxs(n,{children:[t.jsx(l,{addLabel:"Legg til filter",getFilterLabel:o=>e?.[o]?.join(",")||"Choose "+o,filterState:e,onFilterStateChange:r,filters:c}),t.jsx(b,{onClick:()=>r({}),children:"Reset"})]})},a=()=>{const e=p({filters:m?.map(r=>({...r,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(n,{children:t.jsx(l,{...e})})},s=()=>{const e=p({filters:[{...S,as:F}],defaultFilterState:{}});return t.jsxs(n,{children:[t.jsx(l,{...e}),t.jsxs(f,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
