import{s as c,p as t}from"./iframe-43_RSSTf.js";import{S as u}from"./SelectDateFilter-DjxCdU9g.js";import{a as s,T as m}from"./Toolbar-DnruR9N2.js";import{i as l,a as p,t as b}from"./example.hooks-BbLrklp3.js";import{B as F}from"./Button-B83AdZGF.js";import{S}from"./Section-i7Bzbjq_.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CaaZlGvV.js";import"./index-D9XEmR3s.js";import"./MenuItem-DlVW2JuZ.js";import"./ItemMedia-C7TJfaPW.js";import"./XMark-Baw5EL5c.js";import"./useId-BLkk23cI.js";import"./Avatar-B5wzfTza.js";import"./Skeleton-C5aNvb_u.js";import"./AvatarGroup-vsY4p1Py.js";import"./Icon-DxaOlqJE.js";import"./Checkmark-DrnVUh8F.js";import"./ItemLabel-DnPKS4W6.js";import"./Heading-2vQl8tBj.js";import"./useHighlightedText-CH9gApkX.js";import"./ItemControls-DImp59Cc.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./tooltip-CaRi0lSN.js";import"./ChevronRight-DXBQR3xu.js";import"./ArrowUndo-B6CsLZ7N.js";import"./MenuListHeading-BUwMNUeX.js";import"./Fieldset-C5LDAjlI.js";import"./Label-DtAXMx4b.js";import"./Input-B-eeYerN.js";import"./Datepicker-CtjG8D5p.js";import"./SearchField-QwXAT1yz.js";import"./MagnifyingGlass-Bf1420VU.js";import"./FieldBase-DaCzydfk.js";import"./Typography-Ct8ipg3s.js";import"./useMenu-CLHDsGsG.js";import"./index-CwY-RffE.js";import"./InformationSquare-BgUnCFaX.js";import"./useDropdownMenuController-CrTcS9ep.js";import"./Dropdown-CGlaKjlH.js";import"./Plus-BQyf1Gxm.js";import"./ButtonGroup-w02pJMP9.js";import"./ButtonGroupDivider-ClE2vyad.js";import"./ChevronUpDown-BESXpFlz.js";import"./ToolbarMenu-C0bIZ2gU.js";import"./ToolbarSearch-BdeQ_kzd.js";import"./Paperclip-BTsZrMbs.js";import"./Eye-B_h9zvOR.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-aTqKFAcp.js";import"./Flex-CbLPS6D2.js";const St={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
