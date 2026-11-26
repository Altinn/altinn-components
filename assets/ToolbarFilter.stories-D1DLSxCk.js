var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a6 as t,a9 as d,c as F}from"./iframe-ZrU_khjL.js";import{S as f}from"./SelectDateFilter-c_UGBckt.js";import{a as i,T as p}from"./Toolbar-CQ34NIIN.js";import{i as c,t as g}from"./example.data-DWL09qyM.js";import{a as u}from"./example.hooks-MyRtGcbF.js";import{S as x}from"./Section-dsTDEP7F.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-UylFm72-.js";import"./MenuItem-Cnq3lS8W.js";import"./CheckboxUncheckedIcon-D5_rz1Ju.js";import"./RadioUncheckedIcon-DY3mbg0B.js";import"./ItemMedia-RrQv9WL4.js";import"./Avatar-Cz72QNux.js";import"./AvatarGroup-Bva3vDjZ.js";import"./ItemLabel-Dkx3E56O.js";import"./Heading-CifG33hf.js";import"./useHighlightedText-CDx2rO1x.js";import"./ItemControls-BPrmzCX9.js";import"./Badge-CRj8wKrC.js";import"./Tooltip-Dbgfurbn.js";import"./ChevronRight-I-BGQZW2.js";import"./ArrowUndo-DApzQjif.js";import"./MenuListDivider-Frk75rx_.js";import"./Fieldset-CU6TXOhl.js";import"./Field-DiIDUIXB.js";import"./Label-C-OC1u9M.js";import"./Input-pcnWwkdM.js";import"./SearchField-BKf2_wz5.js";import"./MagnifyingGlass-Daj1V0tq.js";import"./FieldBase-Bti6f0lr.js";import"./Typography-FbkShcFO.js";import"./useMenu-D1AoRPPj.js";import"./InformationSquare-v_Dcjud5.js";import"./useDropdownMenuController-BciGPL7q.js";import"./Dropdown-CeljIqa3.js";import"./Plus-DonfkQJy.js";import"./ButtonGroup-5s3aXo0U.js";import"./ButtonGroupDivider-BU9C7KH5.js";import"./ChevronUpDown-CE-Sc-55.js";import"./ToolbarMenu-CyEZ65ux.js";import"./ToolbarSearch-BeAEDhwm.js";import"./Paperclip-CUXuu9KH.js";import"./Eye-BngehXyN.js";import"./MenuHamburger-Bmp7ovD_.js";import"./Flex-DJ1B1xxZ.js";const ue={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),Se=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
