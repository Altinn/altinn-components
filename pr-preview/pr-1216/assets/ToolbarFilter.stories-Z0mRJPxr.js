import{s as c,p as t}from"./iframe-B0raGbVc.js";import{S as u}from"./SelectDateFilter-8bO5CPXZ.js";import{a as s,T as m}from"./Toolbar-6EUbBPiv.js";import{i as l,a as p,t as b}from"./example.hooks-DFpfAUIK.js";import{B as F}from"./Button-DaZ5Xj9O.js";import{S}from"./Section-DlNTQI-0.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-Cqp8gCsN.js";import"./index-BFPoepm_.js";import"./MenuItem-CO5pm5KV.js";import"./ItemMedia-vIK6hHXj.js";import"./XMark-Vu63tlKp.js";import"./useId-DjmMrSjF.js";import"./Avatar-C_p7vVVJ.js";import"./Skeleton-Bie46BNt.js";import"./AvatarGroup-CCFl7ITU.js";import"./Icon-CkGS8ofh.js";import"./Checkmark-w1Y8-xSD.js";import"./ItemLabel-WiIVldH2.js";import"./Heading-HwRbtbil.js";import"./useHighlightedText-Cy927kZm.js";import"./ItemControls-0LHp_bwC.js";import"./Badge-LVeKbEwp.js";import"./Tooltip-drcV-Psw.js";import"./tooltip-C563LrpG.js";import"./ChevronRight-B1cS3dE4.js";import"./ArrowUndo-Chz8G1hW.js";import"./MenuListHeading-BOiM7js_.js";import"./Fieldset-DDHpvEYt.js";import"./Label-BU6sA0x8.js";import"./Input-DWL065bb.js";import"./Datepicker-BCp-QZA8.js";import"./SearchField-x-7DN5Df.js";import"./MagnifyingGlass-M1myOHdK.js";import"./FieldBase-COYRg4qt.js";import"./Typography-aMX_Xall.js";import"./useMenu-DBDHaupH.js";import"./index-BdK8fp8H.js";import"./InformationSquare-C1Z5-XLz.js";import"./useDropdownMenuController-CZGIg3GD.js";import"./Dropdown-XaITxOJ1.js";import"./Plus-Ddu_AJ6f.js";import"./ButtonGroup-DlKQjFoe.js";import"./ButtonGroupDivider-CTCa-xOS.js";import"./ChevronUpDown-qlXOm32U.js";import"./ToolbarMenu-Cu99lGNg.js";import"./ToolbarSearch-2vQT56rz.js";import"./Paperclip-DwprE3KU.js";import"./Eye-DEeNlDrF.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Dba65Zbz.js";import"./Flex-DAM9Vgpa.js";const St={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
