import{r as c,j as t}from"./iframe-DkQPO9ro.js";import{S as u}from"./SelectDateFilter-BPod2Ykq.js";import{a as s,T as m}from"./Toolbar-DGgwFwWk.js";import{i as l,u as p,t as b}from"./example.hooks-GhZcElQY.js";import{B as F}from"./Button-OKMeorO5.js";import{S}from"./Section-DUH4Cyq_.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CchR6_Y_.js";import"./useId-CwF4wxTL.js";import"./Datepicker-D7SDyIeL.js";import"./index-BrTdOUlk.js";import"./ChevronRight-Ddmldm4v.js";import"./MenuListItem-BEjobN4X.js";import"./MenuItem-BCrg9AvC.js";import"./ItemMedia-CHWY5IG3.js";import"./XMark-5G2rqhrX.js";import"./Avatar-DlrsSRUv.js";import"./Skeleton-8DklmnzK.js";import"./AvatarGroup-DkXzBnSr.js";import"./Icon-Dao4TSf9.js";import"./Checkmark-JWLDNW8H.js";import"./Heading-Otl-Ib-S.js";import"./useHighlightedText-BlkM7iRt.js";import"./ItemControls-Czqw_jtP.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-DNdWEvDL.js";import"./Fieldset-CcK7G4vk.js";import"./index-BCCMT4X2.js";import"./Label-DNmTNqvr.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./SearchField-BFSdJUV0.js";import"./MagnifyingGlass-DLwDZfMD.js";import"./FieldBase-BPqKon2e.js";import"./Typography-cgJeIGtL.js";import"./useMenu-BKpTfeOo.js";import"./index-DaA-2TAn.js";import"./InformationSquare-DS3QJ89x.js";import"./useDropdownMenuController-tv24Gc_I.js";import"./Plus-DTlIM-KK.js";import"./Dropdown-DDoGMqNi.js";import"./ChevronUpDown-CVYa19Ee.js";import"./ButtonGroup-3KQzrPQQ.js";import"./ButtonGroupDivider-ff9B_AjZ.js";import"./ToolbarMenu-BM3yaZDN.js";import"./ToolbarSearch-6B-Iqxad.js";import"./Paperclip-C9Fsh0Rf.js";import"./Eye-Dd_FvVr9.js";import"./MenuHamburger-CDbgLMEh.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-Byovksc3.js";import"./Flex-Cy28VffD.js";const Tt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
