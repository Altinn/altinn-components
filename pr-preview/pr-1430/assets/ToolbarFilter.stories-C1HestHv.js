var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a7 as t,aa as d,c as f}from"./iframe-Bv9y2YZF.js";import{S as F}from"./SelectDateFilter-BCoaYjPl.js";import{a as i,T as p}from"./Toolbar-5W-HZqc-.js";import{i as c,t as g}from"./example.data-DbGwyQlZ.js";import{a as u}from"./example.hooks-BzcaSdHj.js";import{S as x}from"./Section-SEwZH98m.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-B0jqswU1.js";import"./MenuListItem-DxCoBxPm.js";import"./MenuItem-CWh5VY2j.js";import"./ItemMedia-DqG5JuI7.js";import"./Avatar-CJwf9igj.js";import"./AvatarGroup-DorKIyuC.js";import"./Checkmark-CwfUY960.js";import"./ItemLabel-grT0gHhk.js";import"./Heading-CDZ3_iYV.js";import"./useHighlightedText-B3SRW8uR.js";import"./ItemControls-DeEkLGNj.js";import"./Badge-PIp_WKNx.js";import"./Tooltip-DATtufsq.js";import"./ChevronRight-B_ztNHmN.js";import"./ArrowUndo-BFPX-Hsc.js";import"./MenuListDivider-LPYMn92M.js";import"./Fieldset-Ddc92Ika.js";import"./Field-T8_evT5x.js";import"./Label-O9M7TqIt.js";import"./Input-C95LaLCm.js";import"./Datepicker-DXmGwxdZ.js";import"./SearchField-Bk5qe-oT.js";import"./MagnifyingGlass-rds0MzVJ.js";import"./FieldBase-qKDj-2_C.js";import"./Typography-AZvc429m.js";import"./useMenu-B94lF56c.js";import"./MenuListHeading--KYKPYxZ.js";import"./InformationSquare-BoyRK6zF.js";import"./useDropdownMenuController-BYwkMXkD.js";import"./Dropdown-DQyu8KYK.js";import"./Plus-vOPLkYgp.js";import"./ButtonGroup-DFBjPK-b.js";import"./ButtonGroupDivider-ZSZown_M.js";import"./ChevronUpDown-DgipHcom.js";import"./ToolbarMenu-DvYBhnPD.js";import"./ToolbarSearch-BvuzNCnf.js";import"./Paperclip-DJXpilAT.js";import"./Eye-D-Oiz91w.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Rv0EpLGA.js";import"./Flex-k0HwcErc.js";const fe={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(f,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),s=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),n=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:F}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker");l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
