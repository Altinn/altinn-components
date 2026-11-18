var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a6 as t,a9 as d,c as F}from"./iframe-Cf4UALw8.js";import{S as f}from"./SelectDateFilter-D0hNj62l.js";import{a as i,T as p}from"./Toolbar-D6KQC90D.js";import{i as c,t as g}from"./example.data-DLDeyLEo.js";import{a as u}from"./example.hooks-BtPo9NIB.js";import{S as x}from"./Section-B-7b4QAp.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-btKh04Ui.js";import"./MenuItem-CaK55ag2.js";import"./CheckboxUncheckedIcon-DFhHVdqs.js";import"./RadioUncheckedIcon-BM_T1ETq.js";import"./ItemMedia-BhGUpV92.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./ItemLabel-C9vfNdbz.js";import"./Heading-B2LEqvTq.js";import"./useHighlightedText-BGOVKO4Q.js";import"./ItemControls-C74k2R8j.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./ChevronRight-DcM2grMN.js";import"./ArrowUndo-ucfdJHsw.js";import"./MenuListDivider-CFCegYqH.js";import"./Fieldset-CpxHlq1s.js";import"./Field-t2hlVRTC.js";import"./Label-COfT1-eu.js";import"./Input-OKh8JSaI.js";import"./SearchField-CpDf3EHS.js";import"./MagnifyingGlass-Ckn3gk3A.js";import"./FieldBase-DSaLFDie.js";import"./Typography-CsGx0b_o.js";import"./useMenu-CfWidWjC.js";import"./InformationSquare-uRwoVJB-.js";import"./useDropdownMenuController-DWWF3mOW.js";import"./Dropdown-BbrYcScL.js";import"./Plus-sEq00D2Y.js";import"./ButtonGroup-Cw0djEV1.js";import"./ButtonGroupDivider-rSZ8QcFs.js";import"./ChevronUpDown-CYoTR3YM.js";import"./ToolbarMenu-BtMtO618.js";import"./ToolbarSearch-BNcqwGAT.js";import"./Paperclip-BlcRCygn.js";import"./Eye-BeIULvpA.js";import"./MenuHamburger-DwSFJE3g.js";import"./Flex-CiSMsFR7.js";const ue={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),Se=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
