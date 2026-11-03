var S=Object.defineProperty;var r=(e,o)=>S(e,"name",{value:o,configurable:!0});import{a5 as t,a8 as d,b as F}from"./iframe-CQ8LzMHp.js";import{S as f}from"./SelectDateFilter-__BbRVk8.js";import{a as i,T as p}from"./Toolbar-mdn2f44t.js";import{i as c,t as g}from"./example.data-BV1VqwnI.js";import{a as u}from"./example.hooks-JvNJaxZf.js";import{S as x}from"./Section-NN2pd56z.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-Cec0Dpv9.js";import"./MenuListItem-BuDRebVM.js";import"./MenuItem-DNZJHOTT.js";import"./CheckboxUncheckedIcon-DodbdVRp.js";import"./RadioUncheckedIcon-QGnejBkB.js";import"./ItemMedia-BTxysFbk.js";import"./Avatar-cvm5lBsk.js";import"./AvatarGroup-DeE95cBJ.js";import"./ItemLabel-CgsktDzP.js";import"./Heading-Bqh3Rpnn.js";import"./useHighlightedText-X_Pa7Sct.js";import"./ItemControls--xlpWt8t.js";import"./Badge-DUcHOS9Y.js";import"./Tooltip-Eed-mcd2.js";import"./ChevronRight-ywpt7Pxk.js";import"./ArrowUndo-CXl7zYNM.js";import"./MenuListDivider-n9hRAznf.js";import"./Fieldset-CcTuSIpm.js";import"./Field-I35AXfO5.js";import"./Label-BS-vPhzZ.js";import"./Input-BKSTqttN.js";import"./Datepicker-CWzTsinM.js";import"./SearchField-0g3sCasv.js";import"./MagnifyingGlass-cYMoIKgd.js";import"./MenuListHeading-CsWBJhah.js";import"./FieldBase-wKpsF2Qr.js";import"./Typography-C0hb-rov.js";import"./useMenu-CDI-E8wX.js";import"./InformationSquare-BtVNFzkX.js";import"./useDropdownMenuController-9HzeHRnC.js";import"./Dropdown-AuOHSehb.js";import"./Plus-DLJWKiOB.js";import"./ButtonGroup-CwiMzic7.js";import"./ButtonGroupDivider-DMMhIRDu.js";import"./ChevronUpDown-7ntYmY5l.js";import"./ToolbarMenu-BRsFP4k1.js";import"./ToolbarSearch-CdJiqLBS.js";import"./Paperclip-DgktZDXP.js";import"./Eye-BbHrpMpQ.js";import"./MenuHamburger-BaFe5b5h.js";import"./Flex-DjPJH1VJ.js";const de={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),b=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:b}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),Fe=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{s as AccountFilter,l as Controlled,m as Datepicker,n as Removable,Fe as __namedExportsOrder,de as default};
