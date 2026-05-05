import{r as c,j as t}from"./iframe-0tjTS8nX.js";import{S as u}from"./SelectDateFilter-BAfZ0Tq3.js";import{a as s,T as m}from"./Toolbar-BJdW15AL.js";import{i as l,u as p,t as b}from"./example.hooks-CSqkSUCz.js";import{B as F}from"./Button-CyTdDQsP.js";import{S}from"./Section-CVxfq1Zs.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CIy3NdIH.js";import"./useId-DNFZveVv.js";import"./Datepicker-Cq84Sa_A.js";import"./index-BHkRJabC.js";import"./ChevronRight-DKBz6hgL.js";import"./MenuListItem-B43Ld8oT.js";import"./MenuItem-Dq38BSWn.js";import"./ItemMedia-DYrXvlN2.js";import"./XMark-C6HGzv3s.js";import"./Avatar-DBihd_YJ.js";import"./Skeleton-CiSYBb75.js";import"./AvatarGroup-Cy536atj.js";import"./Icon-CEoRGh9j.js";import"./Checkmark-DcFVdWi8.js";import"./Heading-KoSbgrW3.js";import"./useHighlightedText-D9Q4aeek.js";import"./ItemControls-C9C9Xohr.js";import"./Badge-CK8WzVFg.js";import"./Tooltip-B5-oR0O6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-C-O5ch3n.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-BfXt7Oa1.js";import"./Fieldset-C-cEe-yh.js";import"./index-BkdSX7Id.js";import"./Label-DeD3NEAn.js";import"./Input-CT0ouBbN.js";import"./input-Ce5YvKqZ.js";import"./SearchField-AyG5Put8.js";import"./MagnifyingGlass-Djl9xGro.js";import"./FieldBase-B4LLLb6y.js";import"./Typography-dEwOKrOW.js";import"./useMenu-DGQxaY-L.js";import"./InformationSquare-j6Jk7iQg.js";import"./useDropdownMenuController-DtWTzaBl.js";import"./Plus-pc4KN7SW.js";import"./Dropdown-Cwwtm8XG.js";import"./ChevronUpDown-CwtBEqFM.js";import"./ButtonGroup-Rh1_zGFF.js";import"./ButtonGroupDivider-D8a_Wdd9.js";import"./ToolbarMenu-Dn1sARGg.js";import"./ToolbarSearch-CRnAJZip.js";import"./Paperclip-DA5GGRz-.js";import"./Eye-tfT7yxSX.js";import"./MenuHamburger-BCh4cxc2.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-Cld0y5Q3.js";import"./Flex-BjLBa1JB.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
