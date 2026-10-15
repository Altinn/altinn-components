var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a7 as t,aa as d,c as f}from"./iframe-BaqLtPTs.js";import{S as F}from"./SelectDateFilter-DR83Breg.js";import{a as i,T as p}from"./Toolbar-Dj7s2NCM.js";import{i as c,t as g}from"./example.data-D2nYNUpA.js";import{a as u}from"./example.hooks-lquyqeQ_.js";import{S as x}from"./Section-C__1PXg0.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-DZ5KX6h3.js";import"./MenuListItem-sXMtvpJ-.js";import"./MenuItem-D9hVuXrM.js";import"./ItemMedia-CLNTwl7K.js";import"./Avatar-DvYNusc4.js";import"./AvatarGroup-BUa5IcMK.js";import"./Checkmark-B7wTOCbv.js";import"./ItemLabel-D68tVwEb.js";import"./Heading-CDNNIgnR.js";import"./useHighlightedText-sWqW6aCW.js";import"./ItemControls-BPS_hDHQ.js";import"./Badge-Dh4HGE2C.js";import"./Tooltip-DfSLGLjy.js";import"./ChevronRight-Dg4XRKaD.js";import"./ArrowUndo-pSENVqmS.js";import"./MenuListDivider-iw10_T6H.js";import"./Fieldset-BHd0mRZg.js";import"./Field-D5dVA89M.js";import"./Label-Wvr4cn-z.js";import"./Input-BbFz6Lbp.js";import"./Datepicker-7glC7U6B.js";import"./SearchField-BCMYwn2Y.js";import"./MagnifyingGlass-D84zuplr.js";import"./FieldBase-BEQqqs0u.js";import"./Typography-DwSVJfAa.js";import"./useMenu-C1bmwhZm.js";import"./MenuListHeading-Cp83ODWk.js";import"./InformationSquare-DB9gl9c1.js";import"./useDropdownMenuController-omw4CUeb.js";import"./Dropdown-BUS7xPa_.js";import"./Plus-C5MYAhCf.js";import"./ButtonGroup-BJPVaBTK.js";import"./ButtonGroupDivider-B_4k_KaA.js";import"./ChevronUpDown-BFdCo8HA.js";import"./ToolbarMenu-D6_pLKVW.js";import"./ToolbarSearch-BpBZ8xn1.js";import"./Paperclip-C9ePn1WV.js";import"./Eye-BRyL4UU8.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Be95533-.js";import"./Flex-DAfEpjHq.js";const fe={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(f,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),s=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),n=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:F}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker");l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({});
  const filters = inboxFilters.map(item => ({
    ...item,
    removable: true
  }));
  return <Toolbar>
      <ToolbarFilter addLabel="Legg til filter" getFilterLabel={name => filterState?.[name]?.join(',') || 'Choose ' + name} filterState={filterState} onFilterStateChange={setFilterState} filters={filters} />
      <Button onClick={() => setFilterState({})}>Reset</Button>
    </Toolbar>;
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Fe=["Controlled","Removable","AccountFilter","Datepicker"];export{n as AccountFilter,l as Controlled,m as Datepicker,s as Removable,Fe as __namedExportsOrder,fe as default};
