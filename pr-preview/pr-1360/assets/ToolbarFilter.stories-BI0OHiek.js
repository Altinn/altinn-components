import{a7 as e,aa as S,c as b}from"./iframe-Drliw4W2.js";import{S as d}from"./SelectDateFilter-CTAsNijg.js";import{a as r,T as m}from"./Toolbar-CSaUgZ8v.js";import{i as p,t as f}from"./example.data-3CCFqYuU.js";import{a as c}from"./example.hooks-CS1_KH_T.js";import{S as F}from"./Section-zMN4ePg0.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-BsyMOfuK.js";import"./MenuListItem-BLBbt-OG.js";import"./MenuItem-CDxKhji-.js";import"./ItemMedia-BONexNJs.js";import"./Avatar-BwQy9G5d.js";import"./AvatarGroup-BRFSw4GH.js";import"./Checkmark-cWANswWC.js";import"./ItemLabel-L3oJYJ9M.js";import"./Heading-CnkMiV4w.js";import"./useHighlightedText-Cu370CX4.js";import"./ItemControls-CQnobUv3.js";import"./Badge-CrnK53sw.js";import"./Tooltip-DP9V_ar-.js";import"./ChevronRight-_-mAy6yU.js";import"./ArrowUndo-CD_-IZUE.js";import"./MenuListDivider-Bm7Xh7zM.js";import"./Fieldset-CZzTB-4T.js";import"./Field-m4myDHlq.js";import"./Label-B3MuHrJK.js";import"./Input-BD6Nzkxf.js";import"./Datepicker-D6T1KqGe.js";import"./SearchField-42vl3Hhr.js";import"./MagnifyingGlass-Dg8GT9AE.js";import"./FieldBase-XimphOI7.js";import"./Typography-DpltYWx0.js";import"./useMenu-DH_c0Y1A.js";import"./MenuListHeading-B-ydP8rv.js";import"./InformationSquare-DpTm6Ali.js";import"./useDropdownMenuController-CymhG5YZ.js";import"./Dropdown-B9PzuGtE.js";import"./Plus-gkf6Iyzi.js";import"./ButtonGroup-DIwL-jQY.js";import"./ButtonGroupDivider-DYGMewVM.js";import"./ChevronUpDown-CJxKDeGU.js";import"./ToolbarMenu-CyWFWZm7.js";import"./ToolbarSearch-D_P0L7QQ.js";import"./Paperclip-DKUSeylD.js";import"./Eye-B6cevlmU.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-YQBN9hOo.js";import"./Flex-Bge8S33P.js";const Se={title:"Toolbar/ToolbarFilter",component:r,parameters:{},args:{}},a=()=>{const[t,o]=S.useState({}),u=p.map(i=>({...i,removable:!0}));return e.jsxs(m,{children:[e.jsx(r,{addLabel:"Legg til filter",getFilterLabel:i=>t?.[i]?.join(",")||"Choose "+i,filterState:t,onFilterStateChange:o,filters:u}),e.jsx(b,{onClick:()=>o({}),children:"Reset"})]})},l=()=>{const t=c({filters:p?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return e.jsx(m,{children:e.jsx(r,{...t})})},s=()=>{const t=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return e.jsx(m,{children:e.jsx(r,{filters:t,addLabel:"Legg til filter"})})},n=()=>{const t=c({filters:[{...f,as:d}],defaultFilterState:{}});return e.jsxs(m,{children:[e.jsx(r,{...t}),e.jsxs(F,{margin:"section",children:["State: ",JSON.stringify(t.filterState)]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
