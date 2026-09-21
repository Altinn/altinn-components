import{a7 as e,aa as S,c as b}from"./iframe-DJfn40-D.js";import{S as d}from"./SelectDateFilter-BrGMgNmK.js";import{a as r,T as m}from"./Toolbar-DkOXbGD0.js";import{i as p,t as f}from"./example.data-mslLay8S.js";import{a as c}from"./example.hooks-B1fEZuxN.js";import{S as F}from"./Section-DRGrLW1j.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-Cay1ipf9.js";import"./MenuListItem-BFRz4ttp.js";import"./MenuItem-BcYTRISI.js";import"./ItemMedia-KuTtS6so.js";import"./Avatar-DCvRzqvr.js";import"./AvatarGroup-3CBvuGfY.js";import"./Checkmark-DXbNx-Gj.js";import"./ItemLabel-GD3MG7Wk.js";import"./Heading-DGmFcP6K.js";import"./useHighlightedText-Bup2uSoT.js";import"./ItemControls-fheO_qcA.js";import"./Badge-DwpsZD4L.js";import"./Tooltip-D_0KZq3E.js";import"./ChevronRight-DB6kCZkt.js";import"./ArrowUndo-B2-52xOX.js";import"./MenuListDivider-D98MnUWk.js";import"./Fieldset-BCNeRbXw.js";import"./Field-Dse2Pgmw.js";import"./Label-BgUgSPLd.js";import"./Input-1D4-_m0T.js";import"./Datepicker-DMUNeGJ2.js";import"./SearchField-BCijVFY-.js";import"./MagnifyingGlass-DE-iQbgW.js";import"./FieldBase-D1U1BxD2.js";import"./Typography-XfwuV3u8.js";import"./useMenu-CxHWIKXS.js";import"./MenuListHeading-DOsHnXss.js";import"./InformationSquare-TILYX_Pd.js";import"./useDropdownMenuController-CsyOSzoH.js";import"./Dropdown-D88HD4zP.js";import"./Plus-CBmVVX8g.js";import"./ButtonGroup-HFpGrSBK.js";import"./ButtonGroupDivider-B1RwbsMj.js";import"./ChevronUpDown-D_O75hLp.js";import"./ToolbarMenu-D_o4oXU9.js";import"./ToolbarSearch-rTgpQV-h.js";import"./Paperclip-OMBVgScI.js";import"./Eye-4UKD6XFj.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-C0Qf3lmv.js";import"./Flex-BuCXAFdl.js";const Se={title:"Toolbar/ToolbarFilter",component:r,parameters:{},args:{}},a=()=>{const[t,o]=S.useState({}),u=p.map(i=>({...i,removable:!0}));return e.jsxs(m,{children:[e.jsx(r,{addLabel:"Legg til filter",getFilterLabel:i=>t?.[i]?.join(",")||"Choose "+i,filterState:t,onFilterStateChange:o,filters:u}),e.jsx(b,{onClick:()=>o({}),children:"Reset"})]})},l=()=>{const t=c({filters:p?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return e.jsx(m,{children:e.jsx(r,{...t})})},s=()=>{const t=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return e.jsx(m,{children:e.jsx(r,{filters:t,addLabel:"Legg til filter"})})},n=()=>{const t=c({filters:[{...f,as:d}],defaultFilterState:{}});return e.jsxs(m,{children:[e.jsx(r,{...t}),e.jsxs(F,{margin:"section",children:["State: ",JSON.stringify(t.filterState)]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
