import{aa as c,a7 as t,c as u}from"./iframe-DzC97elN.js";import{S as b}from"./SelectDateFilter-DnVjUOdj.js";import{a as s,T as l}from"./Toolbar-DS85p_4H.js";import{i as m,a as p,t as F}from"./example.hooks-BcySyPOL.js";import{S}from"./Section-B7XqZvfR.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CXsNShPW.js";import"./MenuItem-D6uXh7L1.js";import"./ItemMedia-BZutnkw1.js";import"./Avatar-B0Bwnqej.js";import"./AvatarGroup-CKA1h7_5.js";import"./Checkmark-FE2XL59D.js";import"./ItemLabel-DpV5tQzf.js";import"./Heading-DiLLFIwR.js";import"./useHighlightedText-w8ugv_c2.js";import"./ItemControls-zCivkuXf.js";import"./Badge-XkpX5Mm7.js";import"./Tooltip-BXMPu0h3.js";import"./ChevronRight-DVYABLGR.js";import"./ArrowUndo-8H_Vm8H2.js";import"./MenuListHeading-BozM-APn.js";import"./Fieldset-7r9IZj1d.js";import"./Field-B6KkaL6q.js";import"./Label-CsRR5HcT.js";import"./Input-DIyKL79r.js";import"./Datepicker-SiUqgysO.js";import"./SearchField-D-nsUeta.js";import"./MagnifyingGlass-BRwTAYgV.js";import"./FieldBase-CCQqXbf-.js";import"./Typography-CtPp6NJn.js";import"./useMenu-BjgtGKwv.js";import"./index-lcqP_0Eh.js";import"./InformationSquare-B8cGLTDj.js";import"./useDropdownMenuController-w-DqwR3B.js";import"./Dropdown-BeW3qmVa.js";import"./Plus-CcwlUJc-.js";import"./ButtonGroup-BbJZX9rk.js";import"./ButtonGroupDivider-pKbXYIZI.js";import"./ChevronUpDown-COFy5lK_.js";import"./ToolbarMenu-quz7XEjO.js";import"./ToolbarSearch-D5CBxluS.js";import"./Paperclip-B3Ksk5xP.js";import"./Eye-BYI7IpUK.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BRGi738L.js";import"./Flex-CXtmXiNa.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const pt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,pt as __namedExportsOrder,mt as default};
