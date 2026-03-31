import{r as c,j as t}from"./iframe-CRyMHjBa.js";import{S as u}from"./SelectDateFilter-geybnG6D.js";import{a as s,T as m}from"./Toolbar-Zxw1BHY7.js";import{i as l,u as p,t as b}from"./example.hooks-D0cNPxw0.js";import{B as F}from"./Button-CrFbX_o6.js";import{S}from"./Section-CFSk5LUB.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Cf7oOlPP.js";import"./useId-Gvikg1Q9.js";import"./Datepicker-DSt4yBEu.js";import"./index-DHHnxdIx.js";import"./ChevronRight-CBrYYsjR.js";import"./MenuListItem-DntYuD8P.js";import"./MenuItem-BP5FkdDy.js";import"./ItemMedia-C-5aGPRT.js";import"./XMark-Bzo2iZ4y.js";import"./Avatar-CTjQUhWB.js";import"./Skeleton-CU7lBKK8.js";import"./AvatarGroup-B0xdyHS8.js";import"./Icon-BfxILC1T.js";import"./Checkmark-DF0LRIQJ.js";import"./Heading-DKMjfDI1.js";import"./useHighlightedText-Bmeo4cMl.js";import"./Badge-DxjDnsAp.js";import"./MenuListHeading-BM8Os7Ca.js";import"./Fieldset-g577H5k-.js";import"./lite-DaUVFjkg.js";import"./index-DK7gfoBf.js";import"./use-merge-refs-BY8NGhF3.js";import"./Label-BTqPQVQX.js";import"./Input-Dhhr3RHW.js";import"./input-BbNQnC6I.js";import"./SearchField-DHI_G06y.js";import"./MagnifyingGlass-XVKvC6WT.js";import"./FieldBase-CJQ_rSUH.js";import"./Typography-KJ3duhAj.js";import"./useMenu-lx2RC1HO.js";import"./InformationSquare-BIUK32sG.js";import"./useDropdownMenuController-7zQVYc9O.js";import"./Plus-OcRWzOJe.js";import"./Dropdown-BU08g0A_.js";import"./ChevronUpDown-iXCDP4yz.js";import"./ButtonGroup-Be2TeWIw.js";import"./ButtonGroupDivider-uVMrpMEY.js";import"./Tooltip-BOYFMKfm.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-C2eqF5ne.js";import"./ToolbarSearch-D95q0rEB.js";import"./Paperclip-C4p5z3e9.js";import"./Eye-fG0hzg9_.js";import"./MenuHamburger-DmjW5Kyi.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-W5jAAf--.js";import"./Flex-B-FAPRYp.js";const xt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
