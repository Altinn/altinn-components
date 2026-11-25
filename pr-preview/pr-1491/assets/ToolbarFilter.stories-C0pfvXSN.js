var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a6 as t,a9 as d,c as F}from"./iframe-BYGPhf7N.js";import{S as f}from"./SelectDateFilter-CmxrY5Yu.js";import{a as i,T as p}from"./Toolbar-D2rcCLvV.js";import{i as c,t as g}from"./example.data-C4dcLo6q.js";import{a as u}from"./example.hooks-Cq3qbj0O.js";import{S as x}from"./Section-BRaGuhHv.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-Er-de1vm.js";import"./MenuItem-BciZRIkx.js";import"./CheckboxUncheckedIcon-Bc2cW9fu.js";import"./RadioUncheckedIcon-xfigfStp.js";import"./ItemMedia-ApKMdvQL.js";import"./Avatar-B_FLCNK9.js";import"./AvatarGroup-BKwaFY6K.js";import"./ItemLabel-KBN1Srj3.js";import"./Heading-C5-vf6se.js";import"./useHighlightedText-B7c7eBDx.js";import"./ItemControls-1sBh4pPD.js";import"./Badge-qi425Zbf.js";import"./Tooltip-egmjN7rU.js";import"./ChevronRight-BckCGbec.js";import"./ArrowUndo-BhG5BbM5.js";import"./MenuListDivider-C-25gy3r.js";import"./Fieldset-e8AZdZvX.js";import"./Field-CZH9Low_.js";import"./Label-DXziafiV.js";import"./Input-C9cQp4bZ.js";import"./SearchField-BySPj-oD.js";import"./MagnifyingGlass-u7KFDhSG.js";import"./FieldBase-eqne-WwB.js";import"./Typography-BHNcIxxH.js";import"./useMenu-r2OQI4uO.js";import"./InformationSquare-Cx25xyTl.js";import"./useDropdownMenuController-C82Fl8tQ.js";import"./Dropdown-0Y8H4iVy.js";import"./Plus-ChNYXBRv.js";import"./ButtonGroup-c8ZaNYEQ.js";import"./ButtonGroupDivider-DnlyYy1d.js";import"./ChevronUpDown-CsEkO8Vj.js";import"./ToolbarMenu-D39-x6U3.js";import"./ToolbarSearch-DEixWMHC.js";import"./Paperclip-Bhm0B4MW.js";import"./Eye-BEO-r5xc.js";import"./MenuHamburger-BBEPorEN.js";import"./Flex-DJhBIPT8.js";const ue={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),Se=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
