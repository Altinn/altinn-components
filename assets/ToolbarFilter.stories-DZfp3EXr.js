import{a7 as e,aa as S,c as b}from"./iframe-Cj7V21km.js";import{S as d}from"./SelectDateFilter-DjWfQJqY.js";import{a as r,T as m}from"./Toolbar-DOfma81y.js";import{i as p,t as f}from"./example.data-CM7-WKTB.js";import{a as c}from"./example.hooks-Dn2Y7qLN.js";import{S as F}from"./Section-fD1somlY.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-Bb5WPP5f.js";import"./MenuListItem-CO0eoNuC.js";import"./MenuItem-CHAPJdhJ.js";import"./ItemMedia-CT1Qhol1.js";import"./Avatar-D_h-dTDE.js";import"./AvatarGroup-WUTqusx8.js";import"./Checkmark-CVZzCtvU.js";import"./ItemLabel-C1bWOeuh.js";import"./Heading-BRQOSuW8.js";import"./useHighlightedText-gdz5u-yJ.js";import"./ItemControls-C0hj5koB.js";import"./Badge-DmpmaSED.js";import"./Tooltip-D-lEMjLJ.js";import"./ChevronRight-DWxpnRfX.js";import"./ArrowUndo-CNZhAEE7.js";import"./MenuListDivider-Cd6IMkL-.js";import"./Fieldset-xASk12Hc.js";import"./Field-Cnt4wz2p.js";import"./Label-Bl6bhyHp.js";import"./Input-DnU3MXtK.js";import"./Datepicker-BtAjBf28.js";import"./SearchField-BEMeTu2B.js";import"./MagnifyingGlass-B8zavmyI.js";import"./FieldBase-D_BM9i5X.js";import"./Typography-B3pfG5kD.js";import"./useMenu-DM-7OZIV.js";import"./MenuListHeading-CRxb5-RD.js";import"./InformationSquare-NQW98JPt.js";import"./useDropdownMenuController-Dx7Ua8eg.js";import"./Dropdown-BCb8vxkT.js";import"./Plus-ubcjdf5p.js";import"./ButtonGroup--sivQYNz.js";import"./ButtonGroupDivider-L0Fo_y8t.js";import"./ChevronUpDown-DfEfO8Hn.js";import"./ToolbarMenu-DB02q_aj.js";import"./ToolbarSearch-kz-nh4xu.js";import"./Paperclip-UD4vQLZC.js";import"./Eye-DS9yMiZ5.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DoaqNjt8.js";import"./Flex-CMfzrDGq.js";const Se={title:"Toolbar/ToolbarFilter",component:r,parameters:{},args:{}},a=()=>{const[t,o]=S.useState({}),u=p.map(i=>({...i,removable:!0}));return e.jsxs(m,{children:[e.jsx(r,{addLabel:"Legg til filter",getFilterLabel:i=>t?.[i]?.join(",")||"Choose "+i,filterState:t,onFilterStateChange:o,filters:u}),e.jsx(b,{onClick:()=>o({}),children:"Reset"})]})},l=()=>{const t=c({filters:p?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return e.jsx(m,{children:e.jsx(r,{...t})})},s=()=>{const t=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return e.jsx(m,{children:e.jsx(r,{filters:t,addLabel:"Legg til filter"})})},n=()=>{const t=c({filters:[{...f,as:d}],defaultFilterState:{}});return e.jsxs(m,{children:[e.jsx(r,{...t}),e.jsxs(F,{margin:"section",children:["State: ",JSON.stringify(t.filterState)]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({});
  const filters = inboxFilters.map(item => ({
    ...item,
    removable: true
  }));
  return <Toolbar>
      <ToolbarFilter addLabel="Legg til filter" getFilterLabel={name => filterState?.[name]?.join(',') || 'Choose ' + name} filterState={filterState} onFilterStateChange={setFilterState} filters={filters} />
      <Button onClick={() => setFilterState({})}>Reset</Button>
    </Toolbar>;
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const be=["Controlled","Removable","AccountFilter","Datepicker"];export{s as AccountFilter,a as Controlled,n as Datepicker,l as Removable,be as __namedExportsOrder,Se as default};
