var b=Object.defineProperty;var r=(e,o)=>b(e,"name",{value:o,configurable:!0});import{a7 as t,aa as d,c as f}from"./iframe-CtXhLetY.js";import{S as F}from"./SelectDateFilter-BqTBpGBO.js";import{a as i,T as p}from"./Toolbar-BBuaQHy6.js";import{i as c,t as g}from"./example.data-BbjQQguZ.js";import{a as u}from"./example.hooks-QcYA8tSQ.js";import{S as x}from"./Section-BY6ZWS4H.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-PA98zAVj.js";import"./MenuListItem-DIFzVMat.js";import"./MenuItem-Dg4o38tg.js";import"./ItemMedia-BiJdsWyj.js";import"./Avatar-C_nt_-qv.js";import"./AvatarGroup-BusGV1QQ.js";import"./Checkmark-Dh1g_xoQ.js";import"./ItemLabel-D2Lcyfj9.js";import"./Heading-B7X6yBjX.js";import"./useHighlightedText-CqB1D3Sj.js";import"./ItemControls-HM0P9mXN.js";import"./Badge-CvkF3r0_.js";import"./Tooltip-CnrvYiqd.js";import"./ChevronRight-S5R-64jg.js";import"./ArrowUndo-z5PUo7n9.js";import"./MenuListDivider-B0UBxccN.js";import"./Fieldset-n3UXKlTP.js";import"./Field-BtWy7god.js";import"./Label-Dko7GLwY.js";import"./Input-QpxxtH2z.js";import"./Datepicker-PMB25bra.js";import"./SearchField-DGLH3IXX.js";import"./MagnifyingGlass-BW7UTF9K.js";import"./MenuListHeading-6_KiCxEb.js";import"./FieldBase-CnqvqYs3.js";import"./Typography-BeyzbKvD.js";import"./useMenu-BNTP8R_q.js";import"./InformationSquare-o37slIGL.js";import"./useDropdownMenuController-iiDYFfhV.js";import"./Dropdown-D7OO9hIV.js";import"./Plus-CaMrdVwa.js";import"./ButtonGroup-BWN2lsHW.js";import"./ButtonGroupDivider-DY6cFDZa.js";import"./ChevronUpDown-dweat57-.js";import"./ToolbarMenu-BN4HJd0Y.js";import"./ToolbarSearch-BD6zThIa.js";import"./Paperclip-DAdiI9sj.js";import"./Eye-CcbJkz05.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-ClUS-mp3.js";import"./Flex-B2jEbRqX.js";const fe={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),S=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:S}),t.jsx(f,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),s=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),n=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:F}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker");l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({});
  const filters = inboxFilters.map(item => ({
    ...item,
    removable: true
  }));
  return <Toolbar>
      <ToolbarFilter addLabel="Legg til filter" getFilterLabel={name => filterState?.[name]?.join(',') || 'Choose ' + name} filterState={filterState} onFilterStateChange={setFilterState} filters={filters} />
      <Button onClick={() => setFilterState({})}>Reset</Button>
    </Toolbar>;
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Fe=["Controlled","Removable","AccountFilter","Datepicker"];export{n as AccountFilter,l as Controlled,m as Datepicker,s as Removable,Fe as __namedExportsOrder,fe as default};
