import{a7 as e,aa as S,c as b}from"./iframe-CAjSv_nS.js";import{S as d}from"./SelectDateFilter-BGuifk_8.js";import{a as r,T as m}from"./Toolbar-BfqPKzCx.js";import{i as p,t as f}from"./example.data-Blv1zU9R.js";import{a as c}from"./example.hooks-C0Zu8iV2.js";import{S as F}from"./Section-QeF7xouO.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CdN28WM3.js";import"./MenuListItem-Cr3RaesB.js";import"./MenuItem-C500ZIIj.js";import"./ItemMedia-DCE7hmVr.js";import"./Avatar-CgMczA0n.js";import"./AvatarGroup-ujKKLt3E.js";import"./Checkmark-Da_1rBde.js";import"./ItemLabel-JZ_7_TI1.js";import"./Heading-Dl2CB_qz.js";import"./useHighlightedText-BhVVUcDt.js";import"./ItemControls-C86-eNC3.js";import"./Badge-Dlsqw5tH.js";import"./Tooltip-DmTt27sC.js";import"./ChevronRight-DBCR3hzH.js";import"./ArrowUndo-Dk2uggSE.js";import"./MenuListDivider-Cl5vSJ7C.js";import"./Fieldset-qE_JUP-E.js";import"./Field-D8Qe0uka.js";import"./Label-CjI2CUCN.js";import"./Input-BnE3VUoY.js";import"./Datepicker-aQnZ2Ti4.js";import"./SearchField-BeyrM52L.js";import"./MagnifyingGlass-BZEvKjAk.js";import"./FieldBase-B3aukQxa.js";import"./Typography-CP4EAHNP.js";import"./useMenu-DNlZtc9u.js";import"./MenuListHeading-DK632LaI.js";import"./InformationSquare-CA9knMPH.js";import"./useDropdownMenuController-13HA63ON.js";import"./Dropdown-CFFHqeqH.js";import"./Plus-BAe7a_fr.js";import"./ButtonGroup-CHaM1dTc.js";import"./ButtonGroupDivider-CHEKOlvW.js";import"./ChevronUpDown-pCQGyX3P.js";import"./ToolbarMenu-BZ58RiB_.js";import"./ToolbarSearch-CrDYY0to.js";import"./Paperclip-C798-5-B.js";import"./Eye-CGQWJv-o.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BbzPLYJ2.js";import"./Flex-Dkl3V3J_.js";const Se={title:"Toolbar/ToolbarFilter",component:r,parameters:{},args:{}},a=()=>{const[t,o]=S.useState({}),u=p.map(i=>({...i,removable:!0}));return e.jsxs(m,{children:[e.jsx(r,{addLabel:"Legg til filter",getFilterLabel:i=>t?.[i]?.join(",")||"Choose "+i,filterState:t,onFilterStateChange:o,filters:u}),e.jsx(b,{onClick:()=>o({}),children:"Reset"})]})},l=()=>{const t=c({filters:p?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return e.jsx(m,{children:e.jsx(r,{...t})})},s=()=>{const t=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return e.jsx(m,{children:e.jsx(r,{filters:t,addLabel:"Legg til filter"})})},n=()=>{const t=c({filters:[{...f,as:d}],defaultFilterState:{}});return e.jsxs(m,{children:[e.jsx(r,{...t}),e.jsxs(F,{margin:"section",children:["State: ",JSON.stringify(t.filterState)]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
