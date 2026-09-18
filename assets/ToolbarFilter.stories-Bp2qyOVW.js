import{a7 as e,aa as S,c as b}from"./iframe-CId_qj2z.js";import{S as d}from"./SelectDateFilter-BRRoIF2B.js";import{a as r,T as m}from"./Toolbar-OBZrE28V.js";import{i as p,t as f}from"./example.data-CxAPb69E.js";import{a as c}from"./example.hooks-BllvD4E8.js";import{S as F}from"./Section-B4HJGPR6.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-DzgJQjWZ.js";import"./MenuListItem-Bza4K3Vz.js";import"./MenuItem-D69ypsbK.js";import"./ItemMedia-DATZMrih.js";import"./Avatar-qewy70Fx.js";import"./AvatarGroup-DDqOMRUz.js";import"./Checkmark-CV_uUhR-.js";import"./ItemLabel-ezryvk3W.js";import"./Heading-sNyVbkrk.js";import"./useHighlightedText-B-8pDdyK.js";import"./ItemControls-s3x5r9Y_.js";import"./Badge-DHd56Np2.js";import"./Tooltip-B4yZ0kY7.js";import"./ChevronRight-CD2F4Mmq.js";import"./ArrowUndo-BYpV408O.js";import"./MenuListDivider-CndLXr4L.js";import"./Fieldset-CmK-0hU8.js";import"./Field-C9CrCSTd.js";import"./Label-Bri1HqH-.js";import"./Input-qq9zM3Qu.js";import"./Datepicker-UHorm5KC.js";import"./SearchField-CLqhaeqA.js";import"./MagnifyingGlass-C7MrVWIP.js";import"./FieldBase-BhNxXsJd.js";import"./Typography-DeDqtkyf.js";import"./useMenu-CkWSpni-.js";import"./MenuListHeading-Dgk_gmcd.js";import"./InformationSquare-DbymG94h.js";import"./useDropdownMenuController-B3cgP-Sn.js";import"./Dropdown-C5rYnJno.js";import"./Plus-D70awSlJ.js";import"./ButtonGroup-BzI-lfVi.js";import"./ButtonGroupDivider-BtLQULBS.js";import"./ChevronUpDown-C_zb2SKw.js";import"./ToolbarMenu-D6PkpSLh.js";import"./ToolbarSearch-BuFV-ar4.js";import"./Paperclip-Cb2_NTDV.js";import"./Eye-ZxUA4YSK.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Dw1f-W1K.js";import"./Flex-CPV4Eexm.js";const Se={title:"Toolbar/ToolbarFilter",component:r,parameters:{},args:{}},a=()=>{const[t,o]=S.useState({}),u=p.map(i=>({...i,removable:!0}));return e.jsxs(m,{children:[e.jsx(r,{addLabel:"Legg til filter",getFilterLabel:i=>t?.[i]?.join(",")||"Choose "+i,filterState:t,onFilterStateChange:o,filters:u}),e.jsx(b,{onClick:()=>o({}),children:"Reset"})]})},l=()=>{const t=c({filters:p?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return e.jsx(m,{children:e.jsx(r,{...t})})},s=()=>{const t=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return e.jsx(m,{children:e.jsx(r,{filters:t,addLabel:"Legg til filter"})})},n=()=>{const t=c({filters:[{...f,as:d}],defaultFilterState:{}});return e.jsxs(m,{children:[e.jsx(r,{...t}),e.jsxs(F,{margin:"section",children:["State: ",JSON.stringify(t.filterState)]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
