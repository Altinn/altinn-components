import{a7 as e,aa as S,c as b}from"./iframe-DymAqe7-.js";import{S as d}from"./SelectDateFilter-Eu9TVXBk.js";import{a as r,T as m}from"./Toolbar-Drk7VyiP.js";import{i as p,t as f}from"./example.data-D1uu5fLb.js";import{a as c}from"./example.hooks-CBJdCnHF.js";import{S as F}from"./Section-VcJzw9XS.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-B6e9eoXK.js";import"./MenuListItem-tD-sg5OP.js";import"./MenuItem-Q0-LXmKI.js";import"./ItemMedia-BNXDJXQ4.js";import"./Avatar--eqxbK2x.js";import"./AvatarGroup-C7VtBu50.js";import"./Checkmark-BfyIm5TX.js";import"./ItemLabel-D1_6NRfu.js";import"./Heading-D0_eZ5cX.js";import"./useHighlightedText-CHgJbocK.js";import"./ItemControls-DPpG0bqy.js";import"./Badge-FB3xbQux.js";import"./Tooltip-BfF0ydp0.js";import"./ChevronRight-DBeZxa-Y.js";import"./ArrowUndo-CorOpU9E.js";import"./MenuListDivider-D_6Pn6hY.js";import"./Fieldset-Nm8-jnCQ.js";import"./Field-Ct7nmimk.js";import"./Label-jxhD3VW5.js";import"./Input-XXqZV2PD.js";import"./Datepicker-DZXLGW0O.js";import"./SearchField-BGWHdZv0.js";import"./MagnifyingGlass-DYyWgrew.js";import"./FieldBase-CV5Nsw3m.js";import"./Typography-CpmuPi_2.js";import"./useMenu-B3cy-uAB.js";import"./MenuListHeading-D0t38-BK.js";import"./InformationSquare-DzVIiFVQ.js";import"./useDropdownMenuController-DAEYpjlT.js";import"./Dropdown-Cp-0Evcf.js";import"./Plus-k9X7JJ5T.js";import"./ButtonGroup-Bmdo2OtQ.js";import"./ButtonGroupDivider-CV7n4r5d.js";import"./ChevronUpDown-DPWliHQQ.js";import"./ToolbarMenu-XDd7ybGb.js";import"./ToolbarSearch-BPkQx4lM.js";import"./Paperclip-f_jLHWkp.js";import"./Eye-qY8fuIU6.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Dd-pEmxt.js";import"./Flex-SVKdN4dv.js";const Se={title:"Toolbar/ToolbarFilter",component:r,parameters:{},args:{}},a=()=>{const[t,o]=S.useState({}),u=p.map(i=>({...i,removable:!0}));return e.jsxs(m,{children:[e.jsx(r,{addLabel:"Legg til filter",getFilterLabel:i=>t?.[i]?.join(",")||"Choose "+i,filterState:t,onFilterStateChange:o,filters:u}),e.jsx(b,{onClick:()=>o({}),children:"Reset"})]})},l=()=>{const t=c({filters:p?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return e.jsx(m,{children:e.jsx(r,{...t})})},s=()=>{const t=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return e.jsx(m,{children:e.jsx(r,{filters:t,addLabel:"Legg til filter"})})},n=()=>{const t=c({filters:[{...f,as:d}],defaultFilterState:{}});return e.jsxs(m,{children:[e.jsx(r,{...t}),e.jsxs(F,{margin:"section",children:["State: ",JSON.stringify(t.filterState)]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
