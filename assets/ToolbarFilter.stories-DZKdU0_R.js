import{r as c,j as t}from"./iframe-B56t8i7v.js";import{S as u}from"./SelectDateFilter-DFjtGtRo.js";import{a as s,T as m}from"./Toolbar-DR_5CA-a.js";import{i as l,u as p,t as b}from"./example.hooks-Pzg6OUGa.js";import{B as F}from"./Button-x4ugPYkx.js";import{S}from"./Section-DXg-mnVx.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BZ7sluk3.js";import"./useId-Ce_44NzT.js";import"./Datepicker-CqE-iwdw.js";import"./index-CHgNdXFp.js";import"./ChevronRight-VYKVaZtU.js";import"./MenuListItem-D1jjv5iI.js";import"./MenuItem-CtKw3GMz.js";import"./ItemMedia-DJxakqLL.js";import"./XMark-CQR84vCO.js";import"./Avatar-_1995Z8x.js";import"./Skeleton-Cer98cLN.js";import"./AvatarGroup-kqIJtB4O.js";import"./Icon-CgN9F-ql.js";import"./Checkmark-cFLQXWmW.js";import"./Heading-B0k14T1s.js";import"./useHighlightedText-YMvuFtwb.js";import"./ItemControls-DurpuKFn.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CJ3sV19d.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-B46vfCnX.js";import"./Fieldset-DqVnc9xR.js";import"./index-pNH6Tvi1.js";import"./Label-Bx5THtMF.js";import"./Input-DqVNSGAW.js";import"./input-CtI4L4z7.js";import"./SearchField-BtQfQfgA.js";import"./MagnifyingGlass-U17pnqdh.js";import"./FieldBase-BkGCBc8B.js";import"./Typography-C36VcWyw.js";import"./useMenu-Bz8Gr0jh.js";import"./InformationSquare-TMwz5OzD.js";import"./useDropdownMenuController-C8fBo27X.js";import"./Plus-DP2GFhc-.js";import"./Dropdown-CjWcilfw.js";import"./ChevronUpDown-txj3YvMU.js";import"./ButtonGroup-DUjF8sgK.js";import"./ButtonGroupDivider-CubiqsGU.js";import"./ToolbarMenu-njzPQ2Ae.js";import"./ToolbarSearch-DgzvuyjV.js";import"./Paperclip-CfzmQspy.js";import"./Eye-CxDHSw-5.js";import"./MenuHamburger-CjzDwfM6.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-BSGP1CSM.js";import"./Flex-BSViFEWJ.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
