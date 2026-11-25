var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a6 as t,a9 as d,c as F}from"./iframe-Df5nkPs8.js";import{S as f}from"./SelectDateFilter-cZKRcJ0S.js";import{a as i,T as p}from"./Toolbar-DCmKrXGS.js";import{i as c,t as g}from"./example.data-DFMMwSIU.js";import{a as u}from"./example.hooks-BHCXDYE0.js";import{S as x}from"./Section-CNSG608H.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-C4bbk3e4.js";import"./MenuItem-9AmdLb1n.js";import"./CheckboxUncheckedIcon-DFwabWeH.js";import"./RadioUncheckedIcon-CNGez86b.js";import"./ItemMedia-B1kmhXWg.js";import"./Avatar-CUeqTW6a.js";import"./AvatarGroup-CtyhIC1k.js";import"./ItemLabel-DuyLbrJx.js";import"./Heading-CPiHedua.js";import"./useHighlightedText-BM0MIdsX.js";import"./ItemControls-Bd_Lnueh.js";import"./Badge-m24uQYgz.js";import"./Tooltip-KOhXDwFj.js";import"./ChevronRight-DJP358BJ.js";import"./ArrowUndo-BBF4w0in.js";import"./MenuListDivider-BMCtCld-.js";import"./Fieldset-BA1tDqKw.js";import"./Field-DfhUv83u.js";import"./Label-D4wdB9xq.js";import"./Input-B9TaRlMe.js";import"./SearchField-C0Yxe_69.js";import"./MagnifyingGlass-3vGCvjJD.js";import"./FieldBase-C4nTzDS1.js";import"./Typography-W78b6WhV.js";import"./useMenu-gk-Zv7NC.js";import"./InformationSquare-CXwkU926.js";import"./useDropdownMenuController-DC3QZLRb.js";import"./Dropdown-DRbHVqgW.js";import"./Plus-BaDdjZ6L.js";import"./ButtonGroup-C09nr3gY.js";import"./ButtonGroupDivider-DI05vaV_.js";import"./ChevronUpDown-BtgQLPpc.js";import"./ToolbarMenu-COF1T52x.js";import"./ToolbarSearch-CYkSODkX.js";import"./Paperclip-Y7ewBKuG.js";import"./Eye-CdnVhqKD.js";import"./MenuHamburger-BHNimgxZ.js";import"./Flex-CYtO0dFj.js";const ue={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),Se=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
