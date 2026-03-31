import{r as c,j as t}from"./iframe-CFpZEpOT.js";import{S as u}from"./SelectDateFilter-DrbLPKLu.js";import{a as s,T as m}from"./Toolbar-B8d2PW4V.js";import{i as l,u as p,t as b}from"./example.hooks-muB-ZRJ8.js";import{B as F}from"./Button-C0rUC1sb.js";import{S}from"./Section-0tWdfaTG.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-C9-6H0l6.js";import"./useId-Bpa1--zZ.js";import"./Datepicker-CZGkcVgy.js";import"./index-CMCH-iYZ.js";import"./ChevronRight-Ca_cSWgJ.js";import"./MenuListItem-DCTPpMWv.js";import"./MenuItem-BNeTh361.js";import"./ItemMedia-DMrQkYiw.js";import"./XMark-DsxdrTa7.js";import"./Avatar-BgJ1eR8E.js";import"./Skeleton-BxeTCVQ2.js";import"./AvatarGroup-CCJxayqM.js";import"./Icon-CcpuJg5J.js";import"./Checkmark-DLdUb-vP.js";import"./Heading-Biv3WsI7.js";import"./useHighlightedText-DHCy4ZgC.js";import"./Badge-CiO-ESqG.js";import"./MenuListHeading-BZULpIAa.js";import"./Fieldset-C3KeG6M-.js";import"./lite-DaUVFjkg.js";import"./index-CBNpaYnn.js";import"./use-merge-refs-DZRIBNsE.js";import"./Label-CTb5NEuA.js";import"./Input-D08OnHI6.js";import"./input-BOf7pxRD.js";import"./SearchField-7ltHAmFU.js";import"./MagnifyingGlass-C_OdGmS9.js";import"./FieldBase-BKE2EVCO.js";import"./Typography-CFFVnqbI.js";import"./useMenu-BHNp1hvr.js";import"./InformationSquare-DvM0m3_a.js";import"./useDropdownMenuController-e-RIKU4l.js";import"./Plus-BvInV0-S.js";import"./Dropdown-CxnqCSsD.js";import"./ChevronUpDown-B9L9cM3W.js";import"./ButtonGroup-ix1R0MqJ.js";import"./ButtonGroupDivider-BWSKwXfh.js";import"./Tooltip-D1tApwsv.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-XSpB5bAa.js";import"./ToolbarSearch-Dq1H2eUj.js";import"./Paperclip-DlUMDrUD.js";import"./Eye-D5FY-E5s.js";import"./MenuHamburger-DtdWoRM-.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-DcOM5j_b.js";import"./Flex-LzaqVov5.js";const xt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
