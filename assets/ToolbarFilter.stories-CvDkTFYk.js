import{r as c,j as t}from"./iframe-BM6RZuQM.js";import{S as u}from"./SelectDateFilter-CqF4z2QW.js";import{a as s,T as m}from"./Toolbar-jAy78YnB.js";import{i as l,u as p,t as b}from"./example.hooks-axL-CLro.js";import{B as F}from"./Button-DhtPu9_Y.js";import{S}from"./Section-h9TGEdkh.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Bmn4Nzqn.js";import"./useId-BYt_OYJh.js";import"./Datepicker-BkJPC1Si.js";import"./index-DAnedVDn.js";import"./ChevronRight-B7KHdEb3.js";import"./MenuListItem-CFW9Qx09.js";import"./MenuItem-CZgTJUho.js";import"./ItemMedia-qdtGx-k7.js";import"./XMark-EbOSJv8a.js";import"./Avatar-P_Ikblul.js";import"./Skeleton-DWzjK3h6.js";import"./AvatarGroup-pynF50Va.js";import"./Icon-m3ZEAfHU.js";import"./Checkmark-CVccove_.js";import"./Heading-aHWaPGZz.js";import"./useHighlightedText-Ctq_ta7p.js";import"./ItemControls-DdRx042_.js";import"./Badge-QT5oZygk.js";import"./Tooltip-BxiimWqz.js";import"./tooltip-DKLQ4JCb.js";import"./MenuListHeading-DdL3Lhhp.js";import"./Fieldset-N-D1ZQgj.js";import"./Label-C7IFl0uM.js";import"./Input-DsxiHlOc.js";import"./SearchField-BgkLBjBi.js";import"./MagnifyingGlass-D8QlnKcL.js";import"./FieldBase-lFVyN1xh.js";import"./Typography-CXaseqiH.js";import"./useMenu-DmjwUxq0.js";import"./index-CvxbdxgD.js";import"./InformationSquare-sR-zXHjU.js";import"./useDropdownMenuController-ChtSiN5l.js";import"./Plus-DESzxFez.js";import"./Dropdown-Cm6GAKAK.js";import"./ChevronUpDown-DfgLRSTr.js";import"./ButtonGroup-DLPKqiPP.js";import"./ButtonGroupDivider-BOAkNbb9.js";import"./ToolbarMenu-DB1ESAM1.js";import"./ToolbarSearch-es-DLOxw.js";import"./Paperclip-x0PjbURb.js";import"./Eye-D4DJj3ga.js";import"./MenuHamburger-BcfCqF_o.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./Flex-DCHL4VAz.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const St=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,St as __namedExportsOrder,Ft as default};
