var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a7 as t,aa as d,c as f}from"./iframe-DZEBeon6.js";import{S as F}from"./SelectDateFilter-BEJjnkuE.js";import{a as i,T as p}from"./Toolbar-CGN-VVdg.js";import{i as c,t as g}from"./example.data-vECnLzCe.js";import{a as u}from"./example.hooks-Cm4oIL65.js";import{S as x}from"./Section-4shCViQn.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-zG_LXVAO.js";import"./MenuListItem-DfeXcHT9.js";import"./MenuItem-BGB4ycnF.js";import"./ItemMedia-6pV5l8vT.js";import"./Avatar-D6PHcyLs.js";import"./AvatarGroup-BkVQ_49o.js";import"./Checkmark-HYeuFO73.js";import"./ItemLabel-DltkMrM4.js";import"./Heading-DnxwPqg0.js";import"./useHighlightedText-C02Ewits.js";import"./ItemControls-uBubo23m.js";import"./Badge-DyKbmjLd.js";import"./Tooltip-DxZByRjV.js";import"./ChevronRight-USTqc2u1.js";import"./ArrowUndo-DkISv7pM.js";import"./MenuListDivider-C1mJKicD.js";import"./Fieldset-cSTydUoH.js";import"./Field-C3XB-y4b.js";import"./Label-BuWFr_Nf.js";import"./Input-mPEfjr4P.js";import"./Datepicker-BLQrm7ZK.js";import"./SearchField-GPsGdyh4.js";import"./MagnifyingGlass-CTxcpUID.js";import"./MenuListHeading-BypPBxNY.js";import"./FieldBase-Ba-trh_u.js";import"./Typography-4TCMsL9d.js";import"./useMenu-BVHVYpiB.js";import"./InformationSquare-YKe2AoWI.js";import"./useDropdownMenuController-D_jzgNs_.js";import"./Dropdown-CX71Aqrg.js";import"./Plus-CVzkbDMT.js";import"./ButtonGroup-DaIoZCPY.js";import"./ButtonGroupDivider-kCQDydAf.js";import"./ChevronUpDown--WwyvowO.js";import"./ToolbarMenu-aSovORQt.js";import"./ToolbarSearch-7Szf4uiX.js";import"./Paperclip-CedyfRTD.js";import"./Eye-HX1b22ye.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CTz_AmqV.js";import"./Flex-OuhsGVSH.js";const fe={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(f,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),s=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),n=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:F}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker");l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({});
  const filters = inboxFilters.map(item => ({
    ...item,
    removable: true
  }));
  return <Toolbar>
      <ToolbarFilter addLabel="Legg til filter" getFilterLabel={name => filterState?.[name]?.join(',') || 'Choose ' + name} filterState={filterState} onFilterStateChange={setFilterState} filters={filters} />
      <Button onClick={() => setFilterState({})}>Reset</Button>
    </Toolbar>;
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Fe=["Controlled","Removable","AccountFilter","Datepicker"];export{n as AccountFilter,l as Controlled,m as Datepicker,s as Removable,Fe as __namedExportsOrder,fe as default};
