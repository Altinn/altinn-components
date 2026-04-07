import{r as c,j as t}from"./iframe-D8UVhXtj.js";import{S as u}from"./SelectDateFilter-BYltMfU-.js";import{a as s,T as m}from"./Toolbar-BFKVtVdg.js";import{i as l,u as p,t as b}from"./example.hooks-BKCRuW9Z.js";import{B as F}from"./Button-C1dDhU4f.js";import{S}from"./Section-CECOJo4z.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-D71UVseq.js";import"./useId-B_5z_sER.js";import"./Datepicker-vTTzh9HT.js";import"./index-DZ6CWLt4.js";import"./ChevronRight-BBMrC_JJ.js";import"./MenuListItem-D2rOlDhJ.js";import"./MenuItem-D_QGB2bx.js";import"./ItemMedia-D1B_6Nv6.js";import"./XMark-RzwOtF1Q.js";import"./Avatar-DcRqiXhT.js";import"./Skeleton-DuOqXwDT.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Icon-DPTwfvyC.js";import"./Checkmark-DOivg6Pe.js";import"./Heading-BAduz1Vr.js";import"./useHighlightedText-CniNcpSk.js";import"./Badge-FbSzRhwU.js";import"./MenuListHeading-BCjwSnwp.js";import"./Fieldset-DwRGvrNJ.js";import"./lite-DaUVFjkg.js";import"./index-B_UnVtHx.js";import"./use-merge-refs-PJHuZtY5.js";import"./Label-b2Pkfnmh.js";import"./Input-CeOaqFsx.js";import"./input-Dh6CJXOW.js";import"./SearchField-DrqRDMva.js";import"./MagnifyingGlass-Dwu8NLc_.js";import"./FieldBase-DzrGcQVO.js";import"./Typography-n-xWt5s-.js";import"./useMenu-Bi-E8KDv.js";import"./InformationSquare-BUh6v1hF.js";import"./useDropdownMenuController-DzAqcIMc.js";import"./Plus-DWBglMau.js";import"./Dropdown-DCJfu5rP.js";import"./ChevronUpDown-DLYhoYYJ.js";import"./ButtonGroup-o1ngc8Xw.js";import"./ButtonGroupDivider-D-j9u71T.js";import"./Tooltip-Z_wNKmlw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DHhsFI4W.js";import"./ToolbarSearch--8LKLWyf.js";import"./Paperclip-ctSduXzx.js";import"./Eye-Co5XTG_V.js";import"./MenuHamburger-Bl4YfJVQ.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-BAeX-ygn.js";import"./Flex-C6te8drU.js";const xt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
