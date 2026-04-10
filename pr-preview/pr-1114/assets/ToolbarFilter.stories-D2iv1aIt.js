import{r as c,j as t}from"./iframe-BmFIVBn_.js";import{S as u}from"./SelectDateFilter-DDQYl4fK.js";import{a as s,T as m}from"./Toolbar-CRRgGZLn.js";import{i as l,u as p,t as b}from"./example.hooks-CpX1juYF.js";import{B as F}from"./Button-qEoy6ct0.js";import{S}from"./Section-8wZRyHWu.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Bbp1RnaE.js";import"./useId-ClegSKnE.js";import"./Datepicker-4pE9-gbw.js";import"./index-3BUTcXKg.js";import"./ChevronRight-DcRWf4tm.js";import"./MenuListItem-INuSyNfv.js";import"./MenuItem-BvPBRlig.js";import"./ItemMedia-CCYQNyqL.js";import"./XMark-DPeWQ31a.js";import"./Avatar-Zvdkk7EN.js";import"./Skeleton-DRn19mA6.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Icon-zZDqlwOf.js";import"./Checkmark-DWNi5SDl.js";import"./Heading-D2Zb4ZMb.js";import"./useHighlightedText-Dq-XqtYP.js";import"./ItemControls-B2xjI1HN.js";import"./Badge-DoiHwmxA.js";import"./MenuListHeading-D4ZyNWhk.js";import"./Fieldset-K6715TbB.js";import"./lite-DaUVFjkg.js";import"./index-32OlLxJ9.js";import"./use-merge-refs-C8jIJdDy.js";import"./Label-D7uBca_a.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./SearchField-BQQnPaDG.js";import"./MagnifyingGlass-B0C_9vni.js";import"./FieldBase-Cx6yKeh2.js";import"./Typography-CMiy0gec.js";import"./useMenu-BRAeQdeQ.js";import"./InformationSquare-Ct2wAfNF.js";import"./useDropdownMenuController-D8IQ0jaC.js";import"./Plus-DVwzyLY6.js";import"./Dropdown-OBdyljPV.js";import"./ChevronUpDown-iLgQoNlh.js";import"./ButtonGroup-DOYzKGQP.js";import"./ButtonGroupDivider-J3W78A7-.js";import"./Tooltip-B1Uxs2J8.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-BPgqnzLX.js";import"./ToolbarSearch-CFeP4OJs.js";import"./Paperclip-CwWA-SCq.js";import"./Eye-Lits53gm.js";import"./MenuHamburger-DON02Xtn.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-DKdxIprw.js";import"./Flex-CFezmhlL.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const Tt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,Tt as __namedExportsOrder,dt as default};
