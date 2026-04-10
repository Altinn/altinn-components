import{r as c,j as t}from"./iframe-bdb8MxAl.js";import{S as u}from"./SelectDateFilter-CHVQYKsx.js";import{a as s,T as m}from"./Toolbar-axYd7Hfl.js";import{i as l,u as p,t as b}from"./example.hooks-BbjCe2nu.js";import{B as F}from"./Button-CmmCg_X2.js";import{S}from"./Section-CT0nm1G-.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-IV-u59mp.js";import"./useId-m2lwd_Ct.js";import"./Datepicker-DNttD5Oy.js";import"./index-p3wA3m8m.js";import"./ChevronRight-Cnln8IKV.js";import"./MenuListItem-CqjGn-MF.js";import"./MenuItem-CkSmk6Ko.js";import"./ItemMedia-Bzsndyr0.js";import"./XMark-ml8n1JcF.js";import"./Avatar-Di5f2hN1.js";import"./Skeleton-BMmeChMq.js";import"./AvatarGroup-DeyVKu-1.js";import"./Icon-DDIx0qrc.js";import"./Checkmark-YAJv3o3m.js";import"./Heading-BV-bgYII.js";import"./useHighlightedText-BZip2xbp.js";import"./ItemControls-CoqYqtfq.js";import"./Badge-CZZ-T3gy.js";import"./MenuListHeading-DgV7uPAe.js";import"./Fieldset-2cmOdguu.js";import"./lite-DaUVFjkg.js";import"./index-Bm_5QTlm.js";import"./use-merge-refs-Xyc_Uo3E.js";import"./Label-DBSC-MMD.js";import"./Input-ClF74fUz.js";import"./input-ATX54hdE.js";import"./SearchField-Q9bTEqZH.js";import"./MagnifyingGlass-CUUYZIQ1.js";import"./FieldBase-DvRhg6xr.js";import"./Typography-BHyeW1q-.js";import"./useMenu-Dc6Nz6rI.js";import"./InformationSquare-nixk64HR.js";import"./useDropdownMenuController-CBF1KoVv.js";import"./Plus-B7BchYDv.js";import"./Dropdown-B41Ltmad.js";import"./ChevronUpDown-DUHc-x24.js";import"./ButtonGroup-BdDqNtW_.js";import"./ButtonGroupDivider-CZhGnBHU.js";import"./Tooltip-C9AV6ve2.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-BPcwkdao.js";import"./ToolbarSearch-BeZpFf7j.js";import"./Paperclip-CKCmzp7v.js";import"./Eye-BAVJ6LcY.js";import"./MenuHamburger-_0XpI-Lc.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-riuqcLff.js";import"./Flex-7ZoZ5Zdr.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
