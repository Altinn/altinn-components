import{r as c,j as t}from"./iframe-YdRL1NzV.js";import{S as u}from"./SelectDateFilter-DaMtOfeN.js";import{a as s,T as m}from"./Toolbar-BxpSoMXr.js";import{i as l,u as p,t as b}from"./example.hooks-Cz-pqyz8.js";import{B as F}from"./Button-BwQOxknK.js";import{S}from"./Section-Bmd_KobT.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DdxLKHJA.js";import"./useId-DxHKrSZ4.js";import"./Datepicker-CSQ_Z1Xs.js";import"./index-SoIsie1y.js";import"./ChevronRight-DrXpgbb_.js";import"./MenuListItem-CLQ7WBGF.js";import"./MenuItem-DdZPav2y.js";import"./ItemMedia-BNRd-cb6.js";import"./XMark-1l7ZvP46.js";import"./Avatar-02T2Z9c_.js";import"./Skeleton-C3i9Ug5T.js";import"./AvatarGroup-B9OCrS5P.js";import"./Icon-B4-srULI.js";import"./Checkmark-Ple-kG_b.js";import"./Heading-56B0sdRG.js";import"./useHighlightedText-DI-ykGTt.js";import"./ItemControls-CMhfwURs.js";import"./Badge-BSGPq3Hw.js";import"./Tooltip-cmmFu2mD.js";import"./tooltip-D0NJwlFT.js";import"./MenuListHeading-DregQKpB.js";import"./Fieldset-5n8FHCI7.js";import"./Label-CoBwam8t.js";import"./Input-Co3wY2OB.js";import"./SearchField-Cp2PZLrm.js";import"./MagnifyingGlass-C6-V8ObG.js";import"./FieldBase-KNsWphki.js";import"./Typography-CYgzLoEf.js";import"./useMenu-Cp2blUti.js";import"./index-zl5T2Fem.js";import"./InformationSquare-C3wG0Qjz.js";import"./useDropdownMenuController-CSEBkRU7.js";import"./Plus-BNGbhyZ6.js";import"./Dropdown-CFQlkMFa.js";import"./ChevronUpDown-DRTYtEui.js";import"./ButtonGroup-BTJ07o1P.js";import"./ButtonGroupDivider-Ccm8qlnp.js";import"./ToolbarMenu-4mCcshj8.js";import"./ToolbarSearch-BOpnVKBp.js";import"./Paperclip-DutSd5EV.js";import"./Eye-aCB71A3t.js";import"./MenuHamburger-B0s_IErD.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./Flex-8MCCOfGV.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
