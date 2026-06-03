import{aa as c,a7 as t,c as u}from"./iframe-DxDA2A5n.js";import{S as b}from"./SelectDateFilter-VqFBxBEd.js";import{a as s,T as l}from"./Toolbar-D6hwWtls.js";import{i as m,a as p,t as F}from"./example.hooks-CBM1DU8e.js";import{S}from"./Section-BxDgugwi.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CLXsOloJ.js";import"./MenuItem-DvVfNxyY.js";import"./ItemMedia-CnqN7ZMq.js";import"./Avatar-CZW-u89b.js";import"./AvatarGroup-nVAkNLkO.js";import"./Checkmark-NOoe9XBa.js";import"./ItemLabel-pZuDHhkH.js";import"./Heading-CDQRp2wK.js";import"./useHighlightedText-CKLIlaha.js";import"./ItemControls-BB5vmDik.js";import"./Badge-DAAwIuMb.js";import"./Tooltip-ClLj-W4n.js";import"./ChevronRight-B7TpiReR.js";import"./ArrowUndo-kdrF5Cj9.js";import"./MenuListHeading-JM3VtJKJ.js";import"./Fieldset-Cs3n6A0e.js";import"./Field-DCiIS6vX.js";import"./Label-Du-ZQ2TI.js";import"./Input-DR3-2m3e.js";import"./Datepicker-BNw64ZTm.js";import"./SearchField-m29TWzvo.js";import"./MagnifyingGlass-CEr-rPcN.js";import"./FieldBase-D6edMMqi.js";import"./Typography-BpmyNFuo.js";import"./useMenu-CesabFz-.js";import"./index-BrQU956K.js";import"./InformationSquare-D_k5oT3G.js";import"./useDropdownMenuController-CF0cOpjK.js";import"./Dropdown-BtLUP2GJ.js";import"./Plus-BRpGG8-t.js";import"./ButtonGroup-BwP7xmaH.js";import"./ButtonGroupDivider-HP7rml0w.js";import"./ChevronUpDown-stIG4MLK.js";import"./ToolbarMenu-Dx4QRTRT.js";import"./ToolbarSearch-CQHsR4lb.js";import"./Paperclip-A-qYZix2.js";import"./Eye-Dt2zEOQg.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-SuiAu3Wg.js";import"./Flex-CfINokNW.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
