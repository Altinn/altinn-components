import{aa as c,a7 as t,c as u}from"./iframe-D3QbR5Le.js";import{S as b}from"./SelectDateFilter-FGuEJm1Y.js";import{a as s,T as l}from"./Toolbar-C1DupJ55.js";import{i as m,a as p,t as F}from"./example.hooks-WDFC9B9l.js";import{S}from"./Section-C8MEyA5r.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CIRSIckJ.js";import"./MenuItem-p2P7kMgy.js";import"./ItemMedia-By1N_mbL.js";import"./Avatar-0HMs51Xi.js";import"./AvatarGroup-BqAJnN7l.js";import"./Checkmark-DPa9YJ2d.js";import"./ItemLabel-D38lX0bX.js";import"./Heading-D807jdih.js";import"./useHighlightedText-Cs6VCP7b.js";import"./ItemControls-UDFYeL-1.js";import"./Badge-D-6Sz0uL.js";import"./Tooltip-r3UZaGLO.js";import"./ChevronRight-CW8WMRnL.js";import"./ArrowUndo-K62ELgv2.js";import"./MenuListHeading-CUGWWC4c.js";import"./Fieldset-5LTqSg2E.js";import"./Field-CmklkMP8.js";import"./Label-1ernyuR0.js";import"./Input-fbRgifOV.js";import"./Datepicker-BGmNo8Xc.js";import"./SearchField-C1oRwJ9X.js";import"./MagnifyingGlass-odaglt7B.js";import"./FieldBase-BVisqjo6.js";import"./Typography-Dc0CQRXO.js";import"./useMenu-CKRyFifW.js";import"./index-1UUqftsp.js";import"./InformationSquare-B-kAc2gK.js";import"./useDropdownMenuController-DUFIDFh-.js";import"./Dropdown-DfrU0yXs.js";import"./Plus-CH4rOE0f.js";import"./ButtonGroup-BYb3YlMN.js";import"./ButtonGroupDivider-TW74zNhR.js";import"./ChevronUpDown-Djy0J9Oq.js";import"./ToolbarMenu-BTFX5aP6.js";import"./ToolbarSearch-pEOyeeVn.js";import"./Paperclip-BjsLwjoT.js";import"./Eye-bQD8N6fQ.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-LJWJnc75.js";import"./Flex-Dql3tqb8.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
