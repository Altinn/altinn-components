import{r as c,j as t}from"./iframe-aW2Ivac6.js";import{S as u}from"./SelectDateFilter-CG4K9nyz.js";import{a as s,T as m}from"./Toolbar-Dh5S6ybd.js";import{i as l,u as p,t as b}from"./example.hooks-BpcUJafh.js";import{B as F}from"./Button-RX-ew4zS.js";import{S}from"./Section-BsfLh2yG.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BdzRHxUS.js";import"./useId-DH4aqM3h.js";import"./Datepicker-B2tb5YeO.js";import"./index-DWa6FdCb.js";import"./ChevronRight-Bcq_DMzy.js";import"./MenuListItem-Nc9dF1O6.js";import"./MenuItem-COYpbW6V.js";import"./ItemMedia-D2IPLDQS.js";import"./XMark-DUdkEKb2.js";import"./Avatar-C-j1g9mt.js";import"./Skeleton-it7stJ0Q.js";import"./AvatarGroup-Btn-kZJL.js";import"./Icon-CD7MnEv7.js";import"./Checkmark-BjMWNebU.js";import"./Heading-D9dg30ti.js";import"./useHighlightedText-ZQImmj57.js";import"./ItemControls-BfAmDR5q.js";import"./Badge-WunB0MzM.js";import"./Tooltip-DYC812UO.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CB7-Iow2.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-CkJcv2mm.js";import"./Fieldset-BjrKN_8t.js";import"./index-BzK4-cKk.js";import"./Label-UVt4ZlNT.js";import"./Input-S7hdVfLT.js";import"./input-DBhNK3CK.js";import"./SearchField-uUwTRA3v.js";import"./MagnifyingGlass-CZzm3B-3.js";import"./FieldBase-CdSvcvFX.js";import"./Typography-JHHWywcS.js";import"./useMenu-ChK92nmD.js";import"./index-CSsgmh7M.js";import"./InformationSquare-BtbGMdWt.js";import"./useDropdownMenuController-CJ9HEXOr.js";import"./Plus-Cg6CWYTT.js";import"./Dropdown-BOvlApQ8.js";import"./ChevronUpDown-BuexUABI.js";import"./ButtonGroup-BjSwpoTC.js";import"./ButtonGroupDivider-E_lmL3bb.js";import"./ToolbarMenu-KjkIcEDa.js";import"./ToolbarSearch-CiWeS0rY.js";import"./Paperclip-1Mg-mDDL.js";import"./Eye-BTh2sUw7.js";import"./MenuHamburger-5ynA6oKg.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-CCQIf2kf.js";import"./Flex-CJSQwJ4K.js";const Tt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
