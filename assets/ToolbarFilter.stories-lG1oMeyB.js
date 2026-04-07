import{r as c,j as t}from"./iframe-B1AqnzaQ.js";import{S as u}from"./SelectDateFilter-DOTXS8NX.js";import{a as s,T as m}from"./Toolbar-Dx8Mk40W.js";import{i as l,u as p,t as b}from"./example.hooks-BhbiHell.js";import{B as F}from"./Button-7DVHhPF2.js";import{S}from"./Section-BiNpoqqK.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Co9BHkhM.js";import"./useId-D3sFZbtB.js";import"./Datepicker-Bq0PIoA0.js";import"./index-Ddi2Dmvi.js";import"./ChevronRight-BOPTtlba.js";import"./MenuListItem-D8LYIepd.js";import"./MenuItem-DJwKVNs9.js";import"./ItemMedia-D13Mes1V.js";import"./XMark-COJVLPGF.js";import"./Avatar-Dhw0Atsj.js";import"./Skeleton-6Posg2tf.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Icon-68Gi_xA8.js";import"./Checkmark-Ci7lq5dQ.js";import"./Heading-Rbp_06UC.js";import"./useHighlightedText-D6JE0bc4.js";import"./Badge-DUhzLQsC.js";import"./MenuListHeading-DjQ5LdsQ.js";import"./Fieldset-RuWcFVb6.js";import"./lite-DaUVFjkg.js";import"./index-DvbpjXY1.js";import"./use-merge-refs-BdRYIeb-.js";import"./Label-CufZoml2.js";import"./Input-DvVIUV_H.js";import"./input-CzzL8SnL.js";import"./SearchField-BEy1JMqM.js";import"./MagnifyingGlass-CXhi_3qD.js";import"./FieldBase-BfQZNQHG.js";import"./Typography-lvuy6SF3.js";import"./useMenu-5Lc1jfY6.js";import"./InformationSquare-DK3EJIq8.js";import"./useDropdownMenuController-BCLdmaKN.js";import"./Plus-DnGMnLWk.js";import"./Dropdown-CFvQqfeA.js";import"./ChevronUpDown-By7A9_Yz.js";import"./ButtonGroup-Kwyl4wzf.js";import"./ButtonGroupDivider-DeeJoG6r.js";import"./Tooltip-CmJVhKqX.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-E66ZXYok.js";import"./ToolbarSearch-BAP8C2qn.js";import"./Paperclip-BC4CQte1.js";import"./Eye-oWBsEYVn.js";import"./MenuHamburger-lneezgpH.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-HgPz3r79.js";import"./Flex-DsTgjl9e.js";const xt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const dt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,dt as __namedExportsOrder,xt as default};
