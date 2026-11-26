var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a6 as t,a9 as d,c as F}from"./iframe-Dhr5kNpI.js";import{S as f}from"./SelectDateFilter-ix2CiD55.js";import{a as i,T as p}from"./Toolbar-DHeeC9bw.js";import{i as c,t as g}from"./example.data-ogxW_Zf8.js";import{a as u}from"./example.hooks-CBmREjd1.js";import{S as x}from"./Section-xZgyq4QZ.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-DSvu2y_O.js";import"./MenuItem-B7bCDHld.js";import"./CheckboxUncheckedIcon-CniL-5fW.js";import"./RadioUncheckedIcon-DgOCQagW.js";import"./ItemMedia-C0ReNhrI.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./ItemLabel-D7TXcLH5.js";import"./Heading-DmbuxGS8.js";import"./useHighlightedText-D3bt4yNA.js";import"./ItemControls-CiyO-qr-.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./ChevronRight-BnrL2uT7.js";import"./ArrowUndo-Cco96Qbs.js";import"./MenuListDivider-BDnQXOa-.js";import"./Fieldset-CYesrPaA.js";import"./Field-BxmDkK6m.js";import"./Label-DR9BIR4K.js";import"./Input-jpu5auKu.js";import"./SearchField-Daiwk--y.js";import"./MagnifyingGlass-qp743Sh-.js";import"./FieldBase-C_75hFZi.js";import"./Typography-CiPthQfi.js";import"./useMenu-BGMvW90K.js";import"./InformationSquare-B4yRDNra.js";import"./useDropdownMenuController-CYf_FFxY.js";import"./Dropdown-CYaHmHFx.js";import"./Plus-CJyVTS1m.js";import"./ButtonGroup-DjJP_8QL.js";import"./ButtonGroupDivider-xXSQP4fw.js";import"./ChevronUpDown-ClFjd4Wf.js";import"./ToolbarMenu-4nusd3Gy.js";import"./ToolbarSearch-Cs9or_Ii.js";import"./Paperclip-BfqrsLsb.js";import"./Eye-82Qs17rD.js";import"./MenuHamburger-CsHjEoZC.js";import"./Flex-CQB0dbJh.js";const ue={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),Se=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
