var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a7 as t,aa as d,c as F}from"./iframe-r-PzxnFG.js";import{S as f}from"./SelectDateFilter-7z5KWOoM.js";import{a as i,T as p}from"./Toolbar-Be6Tch-c.js";import{i as c,t as g}from"./example.data-JXRBO0CT.js";import{a as u}from"./example.hooks-CJzF6ukF.js";import{S as x}from"./Section-DH0F_yu4.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-IXmILE2K.js";import"./MenuItem-Cmtt-77v.js";import"./CheckboxUncheckedIcon-CL3G4Xwm.js";import"./RadioUncheckedIcon-D0JrFl2l.js";import"./ItemMedia-BFk5syHA.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./ItemLabel-DE7oETkr.js";import"./Heading-qFKPv3xm.js";import"./useHighlightedText-D1CHWYs6.js";import"./ItemControls-Di1aFGjk.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./ChevronRight-DoF3revo.js";import"./ArrowUndo-BHFoGQzk.js";import"./MenuListDivider-DjMXmyAN.js";import"./Fieldset-CZCpLVdS.js";import"./Field-C8va_Ig3.js";import"./Label-dzQU0Yg2.js";import"./Input-BYbvd3yE.js";import"./SearchField-Cn8qUcxo.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-7vnMkGiQ.js";import"./FieldBase-D95hzyfr.js";import"./Typography-DZA02yZr.js";import"./useMenu-BMl9Yb_c.js";import"./InformationSquare-x0k9ph8l.js";import"./useDropdownMenuController-D2Eauaak.js";import"./useIsDesktop-Di7DAkKs.js";import"./Dropdown-tD-rtn-3.js";import"./Plus-C3gc2Iai.js";import"./ButtonGroup-tpSmkUGs.js";import"./ButtonGroupDivider-B1E5WcaK.js";import"./ChevronUpDown-HPDH3mEH.js";import"./ToolbarMenu-BxyYmvJJ.js";import"./ToolbarSearch-JhKmYWK0.js";import"./Paperclip-oc5U4BkP.js";import"./Eye-BC_-1Aae.js";import"./MenuHamburger-BBbrRald.js";import"./Flex-DRLqoZbu.js";const be={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),de=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{s as AccountFilter,l as Controlled,m as Datepicker,n as Removable,de as __namedExportsOrder,be as default};
