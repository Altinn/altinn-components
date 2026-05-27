import{s as c,p as t}from"./iframe-WHERbRNQ.js";import{S as u}from"./SelectDateFilter-CKoNPJ9U.js";import{a as s,T as m}from"./Toolbar-CbThJBzB.js";import{i as l,a as p,t as b}from"./example.hooks-BuyIo-WP.js";import{B as F}from"./Button-DkTjWAj1.js";import{S}from"./Section-D-Yeh31t.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-Gq-dCZ2a.js";import"./index-CPQpJFkN.js";import"./MenuItem-BN2QDxa4.js";import"./ItemMedia-CZ4j0uoG.js";import"./XMark-5kXogJ_J.js";import"./useId-BfbJ7PbP.js";import"./Avatar-BsRLrsxS.js";import"./Skeleton-rNcUZaAx.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Icon-jpLauUO9.js";import"./Checkmark-DwlfhjiK.js";import"./ItemLabel-CGpASln7.js";import"./Heading-POmwd9W2.js";import"./useHighlightedText-CCsQk8zm.js";import"./ItemControls-CXMEe70O.js";import"./Badge-DPxfDcUM.js";import"./Tooltip-C3iERcDF.js";import"./tooltip-C7TGaz5I.js";import"./ChevronRight-HD9xUhWG.js";import"./ArrowUndo-C_T3lMra.js";import"./MenuListHeading-B72ED6_O.js";import"./Fieldset-P-4sGzUV.js";import"./Label-DoBAei1C.js";import"./Input-D2AEap14.js";import"./Datepicker-BjGmarcU.js";import"./SearchField-CjOGKjR9.js";import"./MagnifyingGlass-DkwRxD0r.js";import"./FieldBase-9wEEVFHi.js";import"./Typography-CVWBmure.js";import"./useMenu-DdbFwnvU.js";import"./index-Cy4S4a6-.js";import"./InformationSquare-DqU7vShm.js";import"./useDropdownMenuController-BgP7AVfL.js";import"./Dropdown-BvAU1fs3.js";import"./Plus-CNY0bkRi.js";import"./ButtonGroup-BZN8TM8O.js";import"./ButtonGroupDivider-B8E39iWl.js";import"./ChevronUpDown-DVQYeyQk.js";import"./ToolbarMenu-BLQwX8jB.js";import"./ToolbarSearch-vndqWzs1.js";import"./Paperclip-BEqO3Wfb.js";import"./Eye-CdP9e7BO.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-bKOv5Y63.js";import"./Flex-DJNl6q2s.js";const St={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const ft=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,ft as __namedExportsOrder,St as default};
