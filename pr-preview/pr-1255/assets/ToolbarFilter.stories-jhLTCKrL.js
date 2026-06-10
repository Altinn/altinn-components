import{a7 as e,aa as S,c as b}from"./iframe-Dm8TtyEm.js";import{S as d}from"./SelectDateFilter-Bd6cvofG.js";import{a as r,T as m}from"./Toolbar-Cr4Ik5xT.js";import{i as p,a as c,t as f}from"./example.hooks-B8XrShgH.js";import{S as F}from"./Section-BrWI6aLb.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-DVBeGhr8.js";import"./MenuItem-BrCYHgzq.js";import"./ItemMedia-Cx5_mc3M.js";import"./Avatar-HtfurA5B.js";import"./AvatarGroup-BsqgGW-3.js";import"./Checkmark-BrBHBs34.js";import"./ItemLabel-dygaK8X7.js";import"./Heading-o839anme.js";import"./useHighlightedText-C_daNKpv.js";import"./ItemControls-DU_1Chfl.js";import"./Badge-BUZLj2O_.js";import"./Tooltip-CnXzuJ5u.js";import"./ChevronRight-C5Kx_riS.js";import"./ArrowUndo-DB164unm.js";import"./MenuListHeading-B94v3TIt.js";import"./Fieldset-BSTaf93F.js";import"./Field-C6fjvq8K.js";import"./Label-CNUH_E96.js";import"./Input-CDGaFfUN.js";import"./Datepicker-B8n93SAs.js";import"./SearchField-BpAQrR42.js";import"./MagnifyingGlass-CNs4qd9f.js";import"./FieldBase-CGX4UQb4.js";import"./Typography-DQcL3Ryl.js";import"./useMenu-C6oFKHtp.js";import"./index-nln3YNzx.js";import"./InformationSquare-DpmHVTHW.js";import"./useDropdownMenuController-CfwueQUn.js";import"./Dropdown-CZ-eIzfb.js";import"./Plus-C1QsrUU0.js";import"./ButtonGroup-Cvq3R7p4.js";import"./ButtonGroupDivider-DZY-jAP1.js";import"./ChevronUpDown-WNhFs5tk.js";import"./ToolbarMenu-B0ka5Fx1.js";import"./ToolbarSearch-jDeYxRSL.js";import"./Paperclip-Csih7qXz.js";import"./Eye-DFLKX6Ek.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-B-zrC2zx.js";import"./Flex-Cpk93h3c.js";const ce={title:"Toolbar/ToolbarFilter",component:r,parameters:{},args:{}},a=()=>{const[t,o]=S.useState({}),u=p.map(i=>({...i,removable:!0}));return e.jsxs(m,{children:[e.jsx(r,{addLabel:"Legg til filter",getFilterLabel:i=>t?.[i]?.join(",")||"Choose "+i,filterState:t,onFilterStateChange:o,filters:u}),e.jsx(b,{onClick:()=>o({}),children:"Reset"})]})},l=()=>{const t=c({filters:p?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return e.jsx(m,{children:e.jsx(r,{...t})})},n=()=>{const t=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return e.jsx(m,{children:e.jsx(r,{filters:t,addLabel:"Legg til filter"})})},s=()=>{const t=c({filters:[{...f,as:d}],defaultFilterState:{}});return e.jsxs(m,{children:[e.jsx(r,{...t}),e.jsxs(F,{margin:"section",children:["State: ",JSON.stringify(t.filterState)]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const filters = [{
    "name": "partyScope",
    "label": "Legg til filter",
    "title": "Velg aktør",
    "items": [{
      "role": "radio",
      "name": "partyScope",
      "groupId": "1",
      "label": "Alle aktører",
      "value": "ALL_PARTIES"
    }, {
      "role": "radio",
      "name": "partyScope",
      "groupId": "2",
      "label": "Personer",
      "value": "PERSONS"
    }, {
      "role": "radio",
      "name": "partyScope",
      "groupId": "2",
      "label": "Virksomheter",
      "value": "COMPANIES"
    }]
  }];
  return <Toolbar>
            <ToolbarFilter filters={filters} addLabel="Legg til filter" />
        </Toolbar>;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const ue=["Controlled","Removable","AccountFilter","Datepicker"];export{n as AccountFilter,a as Controlled,s as Datepicker,l as Removable,ue as __namedExportsOrder,ce as default};
