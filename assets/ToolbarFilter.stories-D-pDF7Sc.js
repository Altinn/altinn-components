var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a6 as t,a9 as d,c as F}from"./iframe-CXqMdlCC.js";import{S as f}from"./SelectDateFilter-DFPgqAdJ.js";import{a as i,T as p}from"./Toolbar-B02SdnYJ.js";import{i as c,t as g}from"./example.data-DWVEJ08L.js";import{a as u}from"./example.hooks-dDRERIOT.js";import{S as x}from"./Section-CK-XPJWb.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-upw9R9gQ.js";import"./MenuItem-D2UkRxiZ.js";import"./CheckboxUncheckedIcon-DWMJmCdE.js";import"./RadioUncheckedIcon-DsZbsVcQ.js";import"./ItemMedia-CHMaO1_z.js";import"./Avatar-DmiiS68f.js";import"./AvatarGroup-Chz5d9SY.js";import"./ItemLabel-DvzzIYMd.js";import"./Heading-Bc_OkYLY.js";import"./useHighlightedText-DHwhs_hr.js";import"./ItemControls-CAvLGz5J.js";import"./Badge-DLWRsvj2.js";import"./Tooltip-ra4jscVD.js";import"./ChevronRight-DltnHqdC.js";import"./ArrowUndo-CO4CQkvC.js";import"./MenuListDivider-CmJPINW2.js";import"./Fieldset-BBT5CTWQ.js";import"./Field-BA8wlTFM.js";import"./Label-D7XOgbuq.js";import"./Input-D8RpuIgN.js";import"./SearchField-BQG9p1mb.js";import"./MagnifyingGlass-C2E3OXTe.js";import"./FieldBase-0KjilGfX.js";import"./Typography-B65oo-6B.js";import"./useMenu-CqtkU6S6.js";import"./InformationSquare-ZHKJrQSE.js";import"./useDropdownMenuController-DJrTGQ-R.js";import"./Dropdown-D-iF0FQf.js";import"./Plus-BUwnjirz.js";import"./ButtonGroup-ilSUnB_k.js";import"./ButtonGroupDivider-C7a4yusM.js";import"./ChevronUpDown-Yhvc0qNs.js";import"./ToolbarMenu-DH70VUiH.js";import"./ToolbarSearch-BwJEUjel.js";import"./Paperclip-BBOTeAje.js";import"./Eye-jabUUKsX.js";import"./MenuHamburger-BUucDG4Z.js";import"./Flex-C0b8jFL9.js";const ue={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),Se=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({});
  const filters = inboxFilters.map(item => ({
    ...item,
    removable: true
  }));
  return <Toolbar>
      <ToolbarFilter addLabel="Legg til filter" getFilterLabel={name => filterState?.[name]?.join(',') || 'Choose ' + name} filterState={filterState} onFilterStateChange={setFilterState} filters={filters} />
      <Button onClick={() => setFilterState({})}>Reset</Button>
    </Toolbar>;
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const filters = [{
    name: 'partyScope',
    label: 'Legg til filter',
    title: 'Velg aktør',
    items: [{
      role: 'radio',
      name: 'partyScope',
      groupId: '1',
      label: 'Alle aktører',
      value: 'ALL_PARTIES'
    }, {
      role: 'radio',
      name: 'partyScope',
      groupId: '2',
      label: 'Personer',
      value: 'PERSONS'
    }, {
      role: 'radio',
      name: 'partyScope',
      groupId: '2',
      label: 'Virksomheter',
      value: 'COMPANIES'
    }]
  }];
  return <Toolbar>
      <ToolbarFilter filters={filters} addLabel="Legg til filter" />
    </Toolbar>;
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{s as AccountFilter,l as Controlled,m as Datepicker,n as Removable,Se as __namedExportsOrder,ue as default};
