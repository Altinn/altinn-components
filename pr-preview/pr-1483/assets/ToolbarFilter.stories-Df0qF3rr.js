var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a6 as t,a9 as d,c as F}from"./iframe-DmXJhoHi.js";import{S as f}from"./SelectDateFilter-7UEkxueB.js";import{a as i,T as p}from"./Toolbar-rxPbCSrn.js";import{i as c,t as g}from"./example.data-UpEj8d2L.js";import{a as u}from"./example.hooks-Ct6aYf_W.js";import{S as x}from"./Section-Db3Vzokt.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-fE8Z_sJw.js";import"./MenuItem-C_9NXDrO.js";import"./CheckboxUncheckedIcon-THpi2fsF.js";import"./RadioUncheckedIcon-HRy4h_Iy.js";import"./ItemMedia-BhUDoeQn.js";import"./Avatar-Ct1BUX51.js";import"./AvatarGroup-jJ6DuwRZ.js";import"./ItemLabel-D6letihH.js";import"./Heading-DMD9BytY.js";import"./useHighlightedText-PrDe8r-L.js";import"./ItemControls-CqWny7dI.js";import"./Badge-BPEkC0lf.js";import"./Tooltip-DWnRPb8d.js";import"./ChevronRight-BBhULSEW.js";import"./ArrowUndo-B2pBTWYN.js";import"./MenuListDivider-DKZNTDIg.js";import"./Fieldset-BJCIX1DR.js";import"./Field-x0yE1z9d.js";import"./Label-Dmk4_kaT.js";import"./Input-BP2xOaTX.js";import"./SearchField-CmQy5YNq.js";import"./MagnifyingGlass-CDTvYECp.js";import"./FieldBase-BmJ_0UFe.js";import"./Typography-TuByLUlM.js";import"./useMenu-CAAj79LJ.js";import"./InformationSquare-Cf67cLsl.js";import"./useDropdownMenuController-AOASv4wb.js";import"./Dropdown-CroQAroQ.js";import"./Plus-B95oMHgF.js";import"./ButtonGroup-BIAjr8pe.js";import"./ButtonGroupDivider-fZuIdyGO.js";import"./ChevronUpDown-CrXGIYV3.js";import"./ToolbarMenu-D0PhR2HF.js";import"./ToolbarSearch-BWP-lc8H.js";import"./Paperclip-BPNfytGj.js";import"./Eye-BrktvXse.js";import"./MenuHamburger-yvSkcOAR.js";import"./Flex-B-7ly2La.js";const ue={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),Se=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
