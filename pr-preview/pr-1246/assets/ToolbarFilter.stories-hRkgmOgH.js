import{aa as c,a7 as t,c as u}from"./iframe-D6Pw3lmv.js";import{S as b}from"./SelectDateFilter-By1VUgyO.js";import{a as s,T as l}from"./Toolbar-u7Qg0RaM.js";import{i as m,a as p,t as F}from"./example.hooks-7AZ2i4q-.js";import{S}from"./Section-B6MiXL8W.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CdJ_uFA7.js";import"./MenuItem-4x07-Z8Y.js";import"./ItemMedia-BWttq_aD.js";import"./Avatar-BMlUzpXZ.js";import"./AvatarGroup-AckQ-RzX.js";import"./Checkmark-CdsVcBub.js";import"./ItemLabel-BLZeZ0XA.js";import"./Heading-Bsu5tLR0.js";import"./useHighlightedText-iOuYupmt.js";import"./ItemControls-DN7HEIDI.js";import"./Badge-CVXUfZnL.js";import"./Tooltip-BRKe6VnT.js";import"./ChevronRight-DrJyRyMs.js";import"./ArrowUndo-EhrKGXZn.js";import"./MenuListHeading-CMCHjdRB.js";import"./Fieldset-D2_QSSax.js";import"./Field-FWJUOm-g.js";import"./Label-DQDgnIdR.js";import"./Input-BPiAPMWI.js";import"./Datepicker-COiYVW7N.js";import"./SearchField-EcYIPpv0.js";import"./MagnifyingGlass-xEXh01wv.js";import"./FieldBase-q3f36oGg.js";import"./Typography-bPKdoJNM.js";import"./useMenu-AaKLsWFm.js";import"./index-CjPQDnhT.js";import"./InformationSquare-D2Bd0bEl.js";import"./useDropdownMenuController-NInAg9dA.js";import"./Dropdown-DnYymeta.js";import"./Plus-yZ7u7aad.js";import"./ButtonGroup-BukNZ9_Z.js";import"./ButtonGroupDivider-w2z4C3RV.js";import"./ChevronUpDown-CFSIs9pS.js";import"./ToolbarMenu-Ct8b7bjn.js";import"./ToolbarSearch-wV0VxLX8.js";import"./Paperclip-D_Cz5rNA.js";import"./Eye-Ci1-KX1b.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DaPB2oTh.js";import"./Flex-CRGRbwD2.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
