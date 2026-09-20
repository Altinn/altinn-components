import{a7 as e,aa as S,c as b}from"./iframe-ypmT5Gk0.js";import{S as d}from"./SelectDateFilter-DHnT35p1.js";import{a as r,T as m}from"./Toolbar-DUTfZxxY.js";import{i as p,t as f}from"./example.data-CO6bIvJK.js";import{a as c}from"./example.hooks-EUiKdy2C.js";import{S as F}from"./Section-DHk6b8dD.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-AjB4ENZt.js";import"./MenuListItem-aY-AAikt.js";import"./MenuItem-CZo5oRhh.js";import"./ItemMedia-4IfksOuS.js";import"./Avatar-CjSTwin0.js";import"./AvatarGroup-SlU2nii8.js";import"./Checkmark-kMy6EMLN.js";import"./ItemLabel-BlYQpqbv.js";import"./Heading-DYP7M4_m.js";import"./useHighlightedText-BRp5NYS8.js";import"./ItemControls-Bqvxib6z.js";import"./Badge-X9Z0TOu_.js";import"./Tooltip-Blob_TyK.js";import"./ChevronRight-3_fnpscT.js";import"./ArrowUndo-BZUngnyS.js";import"./MenuListDivider-p3sa3VdL.js";import"./Fieldset-Ig_vm91K.js";import"./Field-fCHogA_W.js";import"./Label-CuLDpT5S.js";import"./Input-CoYipzRW.js";import"./Datepicker-CJ-HRSP8.js";import"./SearchField-gC-2ROHv.js";import"./MagnifyingGlass-BsJL0696.js";import"./FieldBase-BZNWpkh0.js";import"./Typography-D_BM_-lf.js";import"./useMenu-Roya_qW1.js";import"./MenuListHeading-j9n_Lc05.js";import"./InformationSquare-BGmi6Zvl.js";import"./useDropdownMenuController-Bdups_kS.js";import"./Dropdown-DooXOQKf.js";import"./Plus-Dbutg6U0.js";import"./ButtonGroup-CRz61zp4.js";import"./ButtonGroupDivider-C43QU8jH.js";import"./ChevronUpDown-H2BJflUM.js";import"./ToolbarMenu-D5mSoK9Q.js";import"./ToolbarSearch-BRF9cRq9.js";import"./Paperclip-EVKWH_aP.js";import"./Eye-D3X4TJZb.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DnW-FkzB.js";import"./Flex-Chd0QM3i.js";const Se={title:"Toolbar/ToolbarFilter",component:r,parameters:{},args:{}},a=()=>{const[t,o]=S.useState({}),u=p.map(i=>({...i,removable:!0}));return e.jsxs(m,{children:[e.jsx(r,{addLabel:"Legg til filter",getFilterLabel:i=>t?.[i]?.join(",")||"Choose "+i,filterState:t,onFilterStateChange:o,filters:u}),e.jsx(b,{onClick:()=>o({}),children:"Reset"})]})},l=()=>{const t=c({filters:p?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return e.jsx(m,{children:e.jsx(r,{...t})})},s=()=>{const t=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return e.jsx(m,{children:e.jsx(r,{filters:t,addLabel:"Legg til filter"})})},n=()=>{const t=c({filters:[{...f,as:d}],defaultFilterState:{}});return e.jsxs(m,{children:[e.jsx(r,{...t}),e.jsxs(F,{margin:"section",children:["State: ",JSON.stringify(t.filterState)]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
