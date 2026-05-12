import{r as c,j as t}from"./iframe-CU9tIbvZ.js";import{S as u}from"./SelectDateFilter-BuNdUykd.js";import{a as s,T as m}from"./Toolbar-DLn5d2hq.js";import{i as l,u as p,t as b}from"./example.hooks-icaOX6OY.js";import{B as F}from"./Button-DwluG-LJ.js";import{S}from"./Section-BozmV6Om.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-C5gTjs_w.js";import"./useId-BEikXtHv.js";import"./Datepicker-dOzptF7O.js";import"./index-Bd_n44R2.js";import"./ChevronRight-XlyxhDjC.js";import"./MenuListItem-DwYyHEmE.js";import"./MenuItem-B01BWq_H.js";import"./ItemMedia-DuuCC0AM.js";import"./XMark-DTYd927G.js";import"./Avatar-CPYUWVLR.js";import"./Skeleton-WB8_C3gk.js";import"./AvatarGroup-D82OEK4D.js";import"./Icon-BBvHNxu7.js";import"./Checkmark-DOBFSC3X.js";import"./Heading-DKJvmFhb.js";import"./useHighlightedText-okRrJvjD.js";import"./ItemControls-BgF8Asgd.js";import"./Badge-C-yjP1nL.js";import"./Tooltip-Gn5m6ZxQ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BZYQG8M3.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-kMHXlGu4.js";import"./Fieldset-DDJhEhLX.js";import"./index-ByNurdCO.js";import"./Label-BURQuXSo.js";import"./Input-C4CEDonn.js";import"./input-BB0Zu-vu.js";import"./SearchField-CWeqUa0W.js";import"./MagnifyingGlass-CpZlhX9q.js";import"./FieldBase-Bc5lvX-i.js";import"./Typography-w6SEqUo0.js";import"./useMenu-CLh8gMuU.js";import"./index-DdmkzICU.js";import"./InformationSquare-Dq6QQdGV.js";import"./useDropdownMenuController-DyTNGBZv.js";import"./Plus-3VXDUyQo.js";import"./Dropdown-DgULA5TZ.js";import"./ChevronUpDown-BkTcHWzp.js";import"./ButtonGroup-Bc7spR1E.js";import"./ButtonGroupDivider-Dbxz7H96.js";import"./ToolbarMenu-DNG-wyC8.js";import"./ToolbarSearch-DpBsUYzd.js";import"./Paperclip-ClDtZHFp.js";import"./Eye-DXAmrRzZ.js";import"./MenuHamburger-Cl0yoDLg.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-DfPuT9nv.js";import"./Flex-Aa4xg00u.js";const Tt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const gt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,gt as __namedExportsOrder,Tt as default};
