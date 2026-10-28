var S=Object.defineProperty;var r=(e,o)=>S(e,"name",{value:o,configurable:!0});import{a5 as t,a8 as d,b as F}from"./iframe-zDfzPjQ-.js";import{S as f}from"./SelectDateFilter-AF1PEfkQ.js";import{a as i,T as p}from"./Toolbar-BaJCxyi0.js";import{i as c,t as g}from"./example.data-D09VzXhD.js";import{a as u}from"./example.hooks-DeT6PhaB.js";import{S as x}from"./Section-BxkDhIq7.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-Ukp7yavL.js";import"./MenuListItem-C5YqUBJw.js";import"./MenuItem-BBg2qC2v.js";import"./ItemMedia-C2cNA_4j.js";import"./Avatar-D3LaL2hn.js";import"./AvatarGroup-CvMpJghk.js";import"./Checkmark-BOXV2bQM.js";import"./ItemLabel-CLN34YKw.js";import"./Heading-CKFRzaKs.js";import"./useHighlightedText-BKf3y1mD.js";import"./ItemControls-D2gn34WX.js";import"./Badge-aBFHXHYf.js";import"./Tooltip-B0sYZQl4.js";import"./ChevronRight-NBomJvaL.js";import"./ArrowUndo-DTnO_IVt.js";import"./MenuListDivider-DUIlDVWP.js";import"./Fieldset-BjvTqO2O.js";import"./Field-DD9eOhx2.js";import"./Label-D889KtIj.js";import"./Input-Cng2zass.js";import"./Datepicker-BI8XU1I9.js";import"./SearchField-BRYpM6iz.js";import"./MagnifyingGlass-D8qauCMU.js";import"./MenuListHeading-adQ6tRoH.js";import"./FieldBase-DhhNDbiD.js";import"./Typography-D20OWptm.js";import"./useMenu-D1ILj_Qw.js";import"./InformationSquare-DREHqyul.js";import"./useDropdownMenuController-DI7euvCu.js";import"./Dropdown-CgXp4lfy.js";import"./Plus-CbNnKwCf.js";import"./ButtonGroup-DS66Ru9T.js";import"./ButtonGroupDivider-DFK8qURn.js";import"./ChevronUpDown-DIWFTlwj.js";import"./ToolbarMenu-COc3PFIR.js";import"./ToolbarSearch-2wX6HJJ-.js";import"./Paperclip-DsRduUIE.js";import"./Eye-asaRFAyZ.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BTQ1djkk.js";import"./Flex-D4woKuNy.js";const Fe={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),b=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:b}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),fe=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{s as AccountFilter,l as Controlled,m as Datepicker,n as Removable,fe as __namedExportsOrder,Fe as default};
