import{r as c,j as t}from"./iframe-aFNUvxii.js";import{S as u}from"./SelectDateFilter-Q0ejds9M.js";import{a as s,T as m}from"./Toolbar-T05afgFJ.js";import{i as l,u as p,t as b}from"./example.hooks-BWnZHl05.js";import{B as F}from"./Button-cD6HSwip.js";import{S}from"./Section-BIq-JpVN.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CI1maQ0_.js";import"./useId-W_OLMGMd.js";import"./Datepicker-DYgTKv7d.js";import"./index-DmNdTbFH.js";import"./ChevronRight-B0RIPM-U.js";import"./MenuListItem-DkdKLAWt.js";import"./MenuItem-BFBnyLEl.js";import"./ItemMedia-Di01sVY_.js";import"./XMark-BNsj9R6R.js";import"./Avatar-DUHlMNex.js";import"./Skeleton-Cd5GNeeI.js";import"./AvatarGroup-GPJvZ4ub.js";import"./Icon-DC5Qp50u.js";import"./Checkmark-CrF1sW3U.js";import"./Heading-F0__TKrp.js";import"./useHighlightedText-DGtjyph8.js";import"./ItemControls-BgCWQjxP.js";import"./Badge-Di-Vgiqx.js";import"./Tooltip-e1n-OWVf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-C-1ExRDf.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-Bej_UvLn.js";import"./Fieldset-CjLDDJeI.js";import"./index-BLgLADsA.js";import"./Label-CFD6MxAu.js";import"./Input-KxxUuxk7.js";import"./input-Dq8WBvBp.js";import"./SearchField-CnqR4pyv.js";import"./MagnifyingGlass-D9TxgtgQ.js";import"./FieldBase-Bx4PyUkS.js";import"./Typography-Co9p8t4Z.js";import"./useMenu-Cpxr8t1F.js";import"./index-BwJjPBKb.js";import"./InformationSquare-WTyA5DCk.js";import"./useDropdownMenuController-MoNgRnPR.js";import"./Plus-BzMVfyBN.js";import"./Dropdown-C8yUJUHT.js";import"./ChevronUpDown-sl0ayiQO.js";import"./ButtonGroup-Cv-I5W75.js";import"./ButtonGroupDivider-BWsibbzd.js";import"./ToolbarMenu-BAz5qz2T.js";import"./ToolbarSearch-BNmVcsKD.js";import"./Paperclip-CY9V8ZeY.js";import"./Eye-CQBeI3AO.js";import"./MenuHamburger-CgxLJfBy.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-CWls7pzR.js";import"./Flex-DARe3czq.js";const Tt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
