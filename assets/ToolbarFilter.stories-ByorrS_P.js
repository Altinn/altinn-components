import{a7 as e,aa as S,c as b}from"./iframe-5uZaoZDv.js";import{S as d}from"./SelectDateFilter-DUI0D9h-.js";import{a as r,T as m}from"./Toolbar-D8fcB4sB.js";import{i as p,t as f}from"./example.data-e3pk5a6N.js";import{a as c}from"./example.hooks-Cwh02gyB.js";import{S as F}from"./Section-BAWmKTu0.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CMT8wJwe.js";import"./MenuListItem-BbZ2xvN5.js";import"./MenuItem-CHpnlanL.js";import"./ItemMedia-CTN7-8P7.js";import"./Avatar-YMRiiHHf.js";import"./AvatarGroup-BGXl6ZDr.js";import"./Checkmark-j8exHh37.js";import"./ItemLabel-DdCL01OT.js";import"./Heading-B0bYr3fv.js";import"./useHighlightedText-SumDRzv0.js";import"./ItemControls-DqscoWhH.js";import"./Badge-CJMAUuOr.js";import"./Tooltip-BCm3h_Ql.js";import"./ChevronRight-Bm7ufgRx.js";import"./ArrowUndo-DYsQqSN_.js";import"./MenuListDivider-BVxqYtLY.js";import"./Fieldset-BWKj9imq.js";import"./Field-CjiYvts-.js";import"./Label-DkLrq_fL.js";import"./Input-C9_VoQpt.js";import"./Datepicker-B3KlujDu.js";import"./SearchField-BHTg7ejP.js";import"./MagnifyingGlass-BhHVps8f.js";import"./FieldBase-D-wimfjV.js";import"./Typography-DIry-l26.js";import"./useMenu-ihj2gTIo.js";import"./MenuListHeading-gwVAdWe6.js";import"./InformationSquare-DVWbDPiI.js";import"./useDropdownMenuController-CpFfsyiJ.js";import"./Dropdown-CDWM3_3M.js";import"./Plus-Niq-gKxO.js";import"./ButtonGroup-BERBX_Ni.js";import"./ButtonGroupDivider-yV4mnRPl.js";import"./ChevronUpDown-BXCeQqi8.js";import"./ToolbarMenu-Bf5nbfad.js";import"./ToolbarSearch-B44hYZzR.js";import"./Paperclip-Be3E3zxm.js";import"./Eye-f94ujOp8.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Dp4fYPBF.js";import"./Flex-n4FQi775.js";const Se={title:"Toolbar/ToolbarFilter",component:r,parameters:{},args:{}},a=()=>{const[t,o]=S.useState({}),u=p.map(i=>({...i,removable:!0}));return e.jsxs(m,{children:[e.jsx(r,{addLabel:"Legg til filter",getFilterLabel:i=>t?.[i]?.join(",")||"Choose "+i,filterState:t,onFilterStateChange:o,filters:u}),e.jsx(b,{onClick:()=>o({}),children:"Reset"})]})},l=()=>{const t=c({filters:p?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return e.jsx(m,{children:e.jsx(r,{...t})})},s=()=>{const t=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return e.jsx(m,{children:e.jsx(r,{filters:t,addLabel:"Legg til filter"})})},n=()=>{const t=c({filters:[{...f,as:d}],defaultFilterState:{}});return e.jsxs(m,{children:[e.jsx(r,{...t}),e.jsxs(F,{margin:"section",children:["State: ",JSON.stringify(t.filterState)]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
