import{a7 as e,aa as S,c as b}from"./iframe-D-JzFSbn.js";import{S as d}from"./SelectDateFilter-C95lVe0T.js";import{a as r,T as m}from"./Toolbar-ic5DL5hr.js";import{i as p,t as f}from"./example.data-DpSuS-yl.js";import{a as c}from"./example.hooks-1h6k5xbZ.js";import{S as F}from"./Section-C7pnuU7Y.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-B9RAZCrS.js";import"./MenuListItem-B4OcKy0A.js";import"./MenuItem-wkNgjJsE.js";import"./ItemMedia-CHlzWEIP.js";import"./Avatar-CPNNDSUm.js";import"./AvatarGroup-DlAxwCWG.js";import"./Checkmark-DBXA_uc3.js";import"./ItemLabel-BqeVkIUZ.js";import"./Heading-BuD5A-91.js";import"./useHighlightedText-kVudreWZ.js";import"./ItemControls-B8a9YN0L.js";import"./Badge-DZcjaRxr.js";import"./Tooltip-CY73UMt9.js";import"./ChevronRight-CnTD3zzq.js";import"./ArrowUndo-d5C4LDWT.js";import"./MenuListDivider-DzTLggx0.js";import"./Fieldset-BTeG8zGc.js";import"./Field-DohC7fWs.js";import"./Label-CCpB5jSj.js";import"./Input--gXn6N4P.js";import"./Datepicker-CK7O3GrB.js";import"./SearchField-Cu2rkG8b.js";import"./MagnifyingGlass-C1TVcE_3.js";import"./FieldBase-BAxlQmDt.js";import"./Typography-B37rH5fJ.js";import"./useMenu-DF0RLrk1.js";import"./MenuListHeading-B2S0HcdV.js";import"./index-DYYLOhVB.js";import"./InformationSquare-C8p8jAhr.js";import"./useDropdownMenuController-dLXTUAgz.js";import"./Dropdown-CQOJCobW.js";import"./Plus-D_QwnLRF.js";import"./ButtonGroup-DM3FeQWD.js";import"./ButtonGroupDivider-tJv6yybS.js";import"./ChevronUpDown-DbbRNNdg.js";import"./ToolbarMenu-D4USdHwc.js";import"./ToolbarSearch-BKjsei65.js";import"./Paperclip-C-3fku1V.js";import"./Eye-DBkbZns5.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DoyVxZov.js";import"./Flex-LyiOw0eI.js";const be={title:"Toolbar/ToolbarFilter",component:r,parameters:{},args:{}},a=()=>{const[t,o]=S.useState({}),u=p.map(i=>({...i,removable:!0}));return e.jsxs(m,{children:[e.jsx(r,{addLabel:"Legg til filter",getFilterLabel:i=>t?.[i]?.join(",")||"Choose "+i,filterState:t,onFilterStateChange:o,filters:u}),e.jsx(b,{onClick:()=>o({}),children:"Reset"})]})},l=()=>{const t=c({filters:p?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return e.jsx(m,{children:e.jsx(r,{...t})})},s=()=>{const t=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return e.jsx(m,{children:e.jsx(r,{filters:t,addLabel:"Legg til filter"})})},n=()=>{const t=c({filters:[{...f,as:d}],defaultFilterState:{}});return e.jsxs(m,{children:[e.jsx(r,{...t}),e.jsxs(F,{margin:"section",children:["State: ",JSON.stringify(t.filterState)]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const de=["Controlled","Removable","AccountFilter","Datepicker"];export{s as AccountFilter,a as Controlled,n as Datepicker,l as Removable,de as __namedExportsOrder,be as default};
