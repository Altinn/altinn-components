var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a6 as t,a9 as d,c as F}from"./iframe-M-0W2Kc9.js";import{S as f}from"./SelectDateFilter-BWyJWeyC.js";import{a as i,T as p}from"./Toolbar-CvbJikzK.js";import{i as c,t as g}from"./example.data-gzcHg1gk.js";import{a as u}from"./example.hooks-CYW1ZGZu.js";import{S as x}from"./Section-BRRFv94H.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-liqRqbPT.js";import"./MenuItem-Bm0vldGL.js";import"./CheckboxUncheckedIcon-D1N0JUmQ.js";import"./RadioUncheckedIcon-DihvZmzM.js";import"./ItemMedia-BNntQAQS.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./ItemLabel-lDW_MVeZ.js";import"./Heading-BiiiOHzW.js";import"./useHighlightedText-DPRacH3N.js";import"./ItemControls-CUY2SrAL.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./ChevronRight-e5zm3v6Y.js";import"./ArrowUndo-BbhWyJt8.js";import"./MenuListDivider-5CZ-K279.js";import"./Fieldset-Bscmb-Eq.js";import"./Field-CJDObndh.js";import"./Label-BfAsqjGj.js";import"./Input-PR-EPUfC.js";import"./SearchField-IrO9fkpT.js";import"./MagnifyingGlass-BCQWJszI.js";import"./FieldBase-Bv-PdLp_.js";import"./Typography-xHph4zf_.js";import"./useMenu-D1I6Xbj7.js";import"./InformationSquare-DDYjH-iE.js";import"./useDropdownMenuController-B592g0FD.js";import"./useIsDesktop-Cn7t9tR4.js";import"./Dropdown-DeOVVvS3.js";import"./Plus-DyAe2qPf.js";import"./ButtonGroup-C-A48uAy.js";import"./ButtonGroupDivider-BumEVR6W.js";import"./ChevronUpDown-CXgasQ1o.js";import"./ToolbarMenu-CSjJL_Ps.js";import"./ToolbarSearch-thdeVilr.js";import"./Paperclip-DpctCjls.js";import"./Eye-mvdxRCiO.js";import"./MenuHamburger-C2Da0bEq.js";import"./Flex-CvQqYnnc.js";const Se={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),be=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{s as AccountFilter,l as Controlled,m as Datepicker,n as Removable,be as __namedExportsOrder,Se as default};
