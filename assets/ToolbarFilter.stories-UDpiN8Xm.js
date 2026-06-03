import{aa as c,a7 as t,c as u}from"./iframe-pmb13xcr.js";import{S as b}from"./SelectDateFilter-BeXKLX7t.js";import{a as s,T as l}from"./Toolbar-Cd7qBdTs.js";import{i as m,a as p,t as F}from"./example.hooks-DLJ0rkww.js";import{S}from"./Section-0UMzqVbn.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-DW-1hJGg.js";import"./MenuItem-D_bFc04X.js";import"./ItemMedia-BGgA1RRu.js";import"./Avatar-DgFMZdvt.js";import"./AvatarGroup-C5Tz0kQR.js";import"./Checkmark-Cm7hyVD6.js";import"./ItemLabel-0x089RNk.js";import"./Heading-sU40TroH.js";import"./useHighlightedText-By0gZF-u.js";import"./ItemControls-CCuuzoug.js";import"./Badge-CDoJNvMh.js";import"./Tooltip-BV9R0mmr.js";import"./ChevronRight-BcL3woie.js";import"./ArrowUndo-CIAjkSEj.js";import"./MenuListHeading-B2QtO_LB.js";import"./Fieldset-Ceo6stsg.js";import"./Field-Dm0MSPIi.js";import"./Label-CxwvdH9w.js";import"./Input-CJNvWYoB.js";import"./Datepicker-CzgpBEsa.js";import"./SearchField-xzT30cQx.js";import"./MagnifyingGlass-HRL7caCa.js";import"./FieldBase-DlkZCCjW.js";import"./Typography-BgUhg-DC.js";import"./useMenu-PFiIjJ-b.js";import"./index-B1Y0FrCw.js";import"./InformationSquare-Bin60tyG.js";import"./useDropdownMenuController-CLuQSoQG.js";import"./Dropdown-BPuWmM11.js";import"./Plus-CpF1S0sT.js";import"./ButtonGroup-DvNffpdA.js";import"./ButtonGroupDivider-rjyiDHvV.js";import"./ChevronUpDown-DIsXonMg.js";import"./ToolbarMenu-BEbkzDEI.js";import"./ToolbarSearch-D9wqlmos.js";import"./Paperclip-DcB5Ctck.js";import"./Eye-CkEdJxfZ.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Ml3xcBiW.js";import"./Flex-Bo48iBpz.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
