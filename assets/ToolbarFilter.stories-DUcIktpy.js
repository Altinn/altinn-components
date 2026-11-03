var S=Object.defineProperty;var r=(e,o)=>S(e,"name",{value:o,configurable:!0});import{a5 as t,a8 as d,b as F}from"./iframe-C2TXN9Gt.js";import{S as f}from"./SelectDateFilter-C9BPDeXc.js";import{a as i,T as p}from"./Toolbar-BrgKDmLN.js";import{i as c,t as g}from"./example.data-CTnAE6Rd.js";import{a as u}from"./example.hooks-BCOeNpim.js";import{S as x}from"./Section-SNWVUlRZ.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-C32AO9Wo.js";import"./MenuListItem-BZm8a22V.js";import"./MenuItem-fN7KVjMo.js";import"./CheckboxUncheckedIcon-DbFdcG4a.js";import"./RadioUncheckedIcon-BGT6n-0U.js";import"./ItemMedia-DvL0nIvI.js";import"./Avatar-FtVJWfDO.js";import"./AvatarGroup-Dp8bZnxk.js";import"./ItemLabel-zq6K58HK.js";import"./Heading-DUZOSHF_.js";import"./useHighlightedText-rpsh5ryi.js";import"./ItemControls-BNQjxOXY.js";import"./Badge-BBkduo-x.js";import"./Tooltip-DGaFfrCO.js";import"./ChevronRight-B3qMZH3P.js";import"./ArrowUndo-DzLQVWV6.js";import"./MenuListDivider-DUsmtn09.js";import"./Fieldset-CLVQO_9S.js";import"./Field-B9ILzcp7.js";import"./Label-C63o_NPU.js";import"./Input-DCxTW5af.js";import"./Datepicker-C8vMH9RI.js";import"./SearchField-BhmsKdsU.js";import"./MagnifyingGlass-yE6CRZNo.js";import"./MenuListHeading-KNqUpgh4.js";import"./FieldBase-RJLhkwbG.js";import"./Typography-DMeULRXh.js";import"./useMenu-PLj8_L9k.js";import"./InformationSquare-CbcqUQld.js";import"./useDropdownMenuController-DrcWKor_.js";import"./Dropdown-ClxCQ_oE.js";import"./Plus-B0fUlCfQ.js";import"./ButtonGroup-BxGjQybR.js";import"./ButtonGroupDivider-CvcVcX9T.js";import"./ChevronUpDown-B3bkzlBg.js";import"./ToolbarMenu-PlMmn1Tj.js";import"./ToolbarSearch-Cqu5RvvX.js";import"./Paperclip-CsMFdJqH.js";import"./Eye-J-HTiEIt.js";import"./MenuHamburger-C2-afPRI.js";import"./Flex-DqWQ_o-P.js";const de={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),b=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:b}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),Fe=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{s as AccountFilter,l as Controlled,m as Datepicker,n as Removable,Fe as __namedExportsOrder,de as default};
