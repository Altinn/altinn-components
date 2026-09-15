import{a7 as e,aa as S,c as b}from"./iframe-C-THn91T.js";import{S as d}from"./SelectDateFilter-vG5JK0lU.js";import{a as r,T as m}from"./Toolbar-CIlcvG9j.js";import{i as p,t as f}from"./example.data-CWLSYxVZ.js";import{a as c}from"./example.hooks-BiQr4fdR.js";import{S as F}from"./Section-BoYAWl0A.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-BY_739pp.js";import"./MenuListItem-BtLexDfB.js";import"./MenuItem-B98ufrdD.js";import"./ItemMedia-DiPL1djx.js";import"./Avatar-CLhHIcAr.js";import"./AvatarGroup-FJy6c_cG.js";import"./Checkmark-CKSWNkLN.js";import"./ItemLabel-DD7gOu3Q.js";import"./Heading-Bt4tEn1t.js";import"./useHighlightedText-LohBehUX.js";import"./ItemControls-AJskvBhb.js";import"./Badge-lAjlx4fW.js";import"./Tooltip-DrV4DRir.js";import"./ChevronRight-SDiRgKYv.js";import"./ArrowUndo-_3NlNhzo.js";import"./MenuListDivider-C2y_tXgh.js";import"./Fieldset-BiZ5NkwF.js";import"./Field-BN4IysmT.js";import"./Label-Cj2m8vPc.js";import"./Input-DSL2dtsJ.js";import"./Datepicker-BHlRg3qe.js";import"./SearchField-3MMOEmrN.js";import"./MagnifyingGlass-DcHLZgKH.js";import"./FieldBase-3tu8AQku.js";import"./Typography-BHSdNY0l.js";import"./useMenu-CEKxQFuP.js";import"./MenuListHeading-Djui1q9T.js";import"./InformationSquare-DjaHtlyP.js";import"./useDropdownMenuController-CYkklUYZ.js";import"./Dropdown-DGlWBLGp.js";import"./Plus-CP2q7sax.js";import"./ButtonGroup-CfikcDtR.js";import"./ButtonGroupDivider-DgRXATze.js";import"./ChevronUpDown-WJVhX2g4.js";import"./ToolbarMenu-0H_I-5xh.js";import"./ToolbarSearch-D7dNHVel.js";import"./Paperclip-CsdFHAca.js";import"./Eye-O-0k6PYr.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DEQ-9aGN.js";import"./Flex-C1ZLhAqe.js";const Se={title:"Toolbar/ToolbarFilter",component:r,parameters:{},args:{}},a=()=>{const[t,o]=S.useState({}),u=p.map(i=>({...i,removable:!0}));return e.jsxs(m,{children:[e.jsx(r,{addLabel:"Legg til filter",getFilterLabel:i=>t?.[i]?.join(",")||"Choose "+i,filterState:t,onFilterStateChange:o,filters:u}),e.jsx(b,{onClick:()=>o({}),children:"Reset"})]})},l=()=>{const t=c({filters:p?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return e.jsx(m,{children:e.jsx(r,{...t})})},s=()=>{const t=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return e.jsx(m,{children:e.jsx(r,{filters:t,addLabel:"Legg til filter"})})},n=()=>{const t=c({filters:[{...f,as:d}],defaultFilterState:{}});return e.jsxs(m,{children:[e.jsx(r,{...t}),e.jsxs(F,{margin:"section",children:["State: ",JSON.stringify(t.filterState)]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
