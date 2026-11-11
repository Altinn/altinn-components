var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a6 as t,a9 as d,c as F}from"./iframe-CJbVApVd.js";import{S as f}from"./SelectDateFilter-Dk1aHW37.js";import{a as i,T as p}from"./Toolbar-Bragk--_.js";import{i as c,t as g}from"./example.data-C9q_hQnU.js";import{a as u}from"./example.hooks-C3JtqxfB.js";import{S as x}from"./Section-senxxBaK.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-DZuqWt2h.js";import"./MenuItem-BZ7Fkp32.js";import"./CheckboxUncheckedIcon-mEYYc7FR.js";import"./RadioUncheckedIcon-BYKV7woP.js";import"./ItemMedia-zelbGl6j.js";import"./Avatar-D6kT48yy.js";import"./AvatarGroup-CEwn4f1y.js";import"./ItemLabel-BQOKZEUY.js";import"./Heading-DPlNKJG2.js";import"./useHighlightedText-ClD__BkG.js";import"./ItemControls-BlgjQohZ.js";import"./Badge-B0Oy6sks.js";import"./Tooltip-0Tcl_NyY.js";import"./ChevronRight-27VbzC_5.js";import"./ArrowUndo-s8spIZZt.js";import"./MenuListDivider-DHbKRw1S.js";import"./Fieldset-Fn3QHldD.js";import"./Field-YyxArrP0.js";import"./Label-BJanEfkF.js";import"./Input-DjgPtg5S.js";import"./SearchField-v7apZWbj.js";import"./MagnifyingGlass-ByOH_q-F.js";import"./FieldBase-DPozPxXp.js";import"./Typography-YiefWcUe.js";import"./useMenu-Le6NyqAV.js";import"./InformationSquare-COAmcV_p.js";import"./useDropdownMenuController-B6bebHA9.js";import"./Dropdown-F7ryxq5F.js";import"./Plus-C_JJ1fS4.js";import"./ButtonGroup-Ban15m4A.js";import"./ButtonGroupDivider-BEoSbrb-.js";import"./ChevronUpDown-CYzCA8Zj.js";import"./ToolbarMenu-BnWSZSo7.js";import"./ToolbarSearch-BOc9sO_2.js";import"./Paperclip-tR5UvI1V.js";import"./Eye-CPwzt_6h.js";import"./MenuHamburger-Drn1nU86.js";import"./Flex-DQBhfYN9.js";const ue={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),Se=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
