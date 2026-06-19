import{a7 as e,aa as S,c as b}from"./iframe-DmJr8_aG.js";import{S as d}from"./SelectDateFilter-kBC8MhYl.js";import{a as r,T as m}from"./Toolbar-Ow0gw22j.js";import{i as p,t as f}from"./example.data-DWKtXyiU.js";import{a as c}from"./example.hooks-sTVmDTSd.js";import{S as F}from"./Section-xPiqNpLG.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-ByaWH-ma.js";import"./MenuListItem-CfwtrDuI.js";import"./MenuItem-BAlZe3i8.js";import"./ItemMedia-BAIJH8U4.js";import"./Avatar-CCqY5Lgk.js";import"./AvatarGroup-DMmx4iVX.js";import"./Checkmark-DdnTh1PT.js";import"./ItemLabel-BZFwI3Qg.js";import"./Heading-I9-B5g1d.js";import"./useHighlightedText-CDpmDje8.js";import"./ItemControls-C3FVXvI0.js";import"./Badge-BVYKJFB5.js";import"./Tooltip-DijYReqr.js";import"./ChevronRight-kR30sXpx.js";import"./ArrowUndo-oxrOyorJ.js";import"./MenuListDivider-DxYIfIoZ.js";import"./Fieldset-DGWXTvMx.js";import"./Field-z2_rHtRr.js";import"./Label-C9gCQCNv.js";import"./Input-CMjX-VJR.js";import"./Datepicker-B-gyiEND.js";import"./SearchField-DIEgnIKm.js";import"./MagnifyingGlass-CtP3bCTw.js";import"./FieldBase-B-b_vsUI.js";import"./Typography-B5vyFnSY.js";import"./useMenu-DCAZlAYS.js";import"./MenuListHeading-D4ODluyz.js";import"./InformationSquare-BDz-_K2o.js";import"./useDropdownMenuController-C3IF3Z6L.js";import"./Dropdown-CSc8TyC7.js";import"./Plus-CfdwKNmJ.js";import"./ButtonGroup-ps_HIdpu.js";import"./ButtonGroupDivider-Cq1pylXQ.js";import"./ChevronUpDown-7NIglTvp.js";import"./ToolbarMenu-BNi9oIII.js";import"./ToolbarSearch-_x_uSUqx.js";import"./Paperclip-DJ1TOqbh.js";import"./Eye-Do4L6uio.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-EwCvIS65.js";import"./Flex-D91Qf6jp.js";const Se={title:"Toolbar/ToolbarFilter",component:r,parameters:{},args:{}},a=()=>{const[t,o]=S.useState({}),u=p.map(i=>({...i,removable:!0}));return e.jsxs(m,{children:[e.jsx(r,{addLabel:"Legg til filter",getFilterLabel:i=>t?.[i]?.join(",")||"Choose "+i,filterState:t,onFilterStateChange:o,filters:u}),e.jsx(b,{onClick:()=>o({}),children:"Reset"})]})},l=()=>{const t=c({filters:p?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return e.jsx(m,{children:e.jsx(r,{...t})})},s=()=>{const t=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return e.jsx(m,{children:e.jsx(r,{filters:t,addLabel:"Legg til filter"})})},n=()=>{const t=c({filters:[{...f,as:d}],defaultFilterState:{}});return e.jsxs(m,{children:[e.jsx(r,{...t}),e.jsxs(F,{margin:"section",children:["State: ",JSON.stringify(t.filterState)]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const be=["Controlled","Removable","AccountFilter","Datepicker"];export{s as AccountFilter,a as Controlled,n as Datepicker,l as Removable,be as __namedExportsOrder,Se as default};
