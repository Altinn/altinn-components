import{a7 as e,aa as S,c as b}from"./iframe-DH0sUlof.js";import{S as d}from"./SelectDateFilter-BI3pD9ok.js";import{a as r,T as m}from"./Toolbar-HeHqNSHM.js";import{i as p,a as c,t as f}from"./example.hooks-BXlxq2N6.js";import{S as F}from"./Section-DMcOoGW4.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-DWDx0q1Y.js";import"./MenuItem-BT1jodiz.js";import"./ItemMedia-BGZXzift.js";import"./Avatar-FXELAR9V.js";import"./AvatarGroup-CNi2rl48.js";import"./Checkmark-BQvK_vH6.js";import"./ItemLabel-BN4HDeMP.js";import"./Heading-CPu50xm5.js";import"./useHighlightedText-DycG_gS6.js";import"./ItemControls-BwbZayit.js";import"./Badge-DYSW2mf5.js";import"./Tooltip-2QW0kgPy.js";import"./ChevronRight-CNDn15vN.js";import"./ArrowUndo-CQw5ozEs.js";import"./MenuListHeading-DWFD_r7c.js";import"./Fieldset-Uk9Dbjei.js";import"./Field-CxaznmxG.js";import"./Label-Cf0ApS2G.js";import"./Input-CNoKo11u.js";import"./Datepicker-B_IG52Il.js";import"./SearchField-CPfjDOA9.js";import"./MagnifyingGlass-C4sPwF1v.js";import"./FieldBase-DCz4GC6j.js";import"./Typography-PtbhQdVx.js";import"./useMenu-CPWn58Ca.js";import"./index-DEktyI50.js";import"./InformationSquare-DDlxGHn9.js";import"./useDropdownMenuController-D_CHcGp2.js";import"./Dropdown-CKpYPgFT.js";import"./Plus-CKgq15mC.js";import"./ButtonGroup-0Z_3vx9e.js";import"./ButtonGroupDivider-BBL2yGKa.js";import"./ChevronUpDown-B5XSeaUw.js";import"./ToolbarMenu-CcQedFVY.js";import"./ToolbarSearch-kEJOG0uE.js";import"./Paperclip-B0MOorU6.js";import"./Eye-oUX4NOQ8.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Cn3ng886.js";import"./Flex-D6bQl7-N.js";const ce={title:"Toolbar/ToolbarFilter",component:r,parameters:{},args:{}},a=()=>{const[t,o]=S.useState({}),u=p.map(i=>({...i,removable:!0}));return e.jsxs(m,{children:[e.jsx(r,{addLabel:"Legg til filter",getFilterLabel:i=>t?.[i]?.join(",")||"Choose "+i,filterState:t,onFilterStateChange:o,filters:u}),e.jsx(b,{onClick:()=>o({}),children:"Reset"})]})},l=()=>{const t=c({filters:p?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return e.jsx(m,{children:e.jsx(r,{...t})})},s=()=>{const t=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return e.jsx(m,{children:e.jsx(r,{filters:t,addLabel:"Legg til filter"})})},n=()=>{const t=c({filters:[{...f,as:d}],defaultFilterState:{}});return e.jsxs(m,{children:[e.jsx(r,{...t}),e.jsxs(F,{margin:"section",children:["State: ",JSON.stringify(t.filterState)]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const ue=["Controlled","Removable","AccountFilter","Datepicker"];export{s as AccountFilter,a as Controlled,n as Datepicker,l as Removable,ue as __namedExportsOrder,ce as default};
