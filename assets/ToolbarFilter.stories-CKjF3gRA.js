var S=Object.defineProperty;var r=(e,o)=>S(e,"name",{value:o,configurable:!0});import{a5 as t,a8 as d,b as F}from"./iframe-CplFPuE2.js";import{S as f}from"./SelectDateFilter-CddUz_6W.js";import{a as i,T as p}from"./Toolbar-DU79cBAf.js";import{i as c,t as g}from"./example.data-CvgA0GH7.js";import{a as u}from"./example.hooks-dyqInSOu.js";import{S as x}from"./Section-CaXjLAlu.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-xfD0Bfpg.js";import"./MenuListItem-Dyh-W5SZ.js";import"./MenuItem-DVl7YcIV.js";import"./ItemMedia-BtRJ3M2I.js";import"./Avatar-B3ASgMQL.js";import"./AvatarGroup-B9EoMI2b.js";import"./Checkmark-Cdr1Cy4X.js";import"./ItemLabel-B29_b0Yb.js";import"./Heading-H6e_lYEN.js";import"./useHighlightedText-BpzjnQwF.js";import"./ItemControls-KQk_c0UL.js";import"./Badge-BWoGIkg0.js";import"./Tooltip-Dh3mcs7O.js";import"./ChevronRight-44eUUhYn.js";import"./ArrowUndo-D1R9ATiN.js";import"./MenuListDivider-CcRb0ndu.js";import"./Fieldset-CiT8uuvj.js";import"./Field-DmUVDlMz.js";import"./Label-C9lUUP0G.js";import"./Input-BNktXmCP.js";import"./Datepicker-D02LMsso.js";import"./SearchField-4LhcGogw.js";import"./MagnifyingGlass-BqSMzz0M.js";import"./MenuListHeading-9B-ZCwvC.js";import"./FieldBase-BHrQkTmp.js";import"./Typography-pPFkmvZJ.js";import"./useMenu-Ct0wDmor.js";import"./InformationSquare-CTMDR6or.js";import"./useDropdownMenuController-Ctb07B4f.js";import"./Dropdown-CIbRGvoU.js";import"./Plus-Cjvj3mBz.js";import"./ButtonGroup-BYs_As_u.js";import"./ButtonGroupDivider-CKEVKxff.js";import"./ChevronUpDown-6RtyQlti.js";import"./ToolbarMenu-C1bI1EOA.js";import"./ToolbarSearch-BJxiTUIW.js";import"./Paperclip-C4CP5GZf.js";import"./Eye-CXIk-29c.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BPHgOQ4b.js";import"./Flex-CoXKQauA.js";const Fe={title:"Toolbar/ToolbarFilter",component:i,parameters:{},args:{}},l=r(()=>{const[e,o]=d.useState({}),b=c.map(a=>({...a,removable:!0}));return t.jsxs(p,{children:[t.jsx(i,{addLabel:"Legg til filter",getFilterLabel:r(a=>e?.[a]?.join(",")||"Choose "+a,"getFilterLabel"),filterState:e,onFilterStateChange:o,filters:b}),t.jsx(F,{onClick:r(()=>o({}),"onClick"),children:"Reset"})]})},"Controlled"),n=r(()=>{const e=u({filters:c?.map(o=>({...o,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(p,{children:t.jsx(i,{...e})})},"Removable"),s=r(()=>{const e=[{name:"partyScope",label:"Legg til filter",title:"Velg aktør",items:[{role:"radio",name:"partyScope",groupId:"1",label:"Alle aktører",value:"ALL_PARTIES"},{role:"radio",name:"partyScope",groupId:"2",label:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",label:"Virksomheter",value:"COMPANIES"}]}];return t.jsx(p,{children:t.jsx(i,{filters:e,addLabel:"Legg til filter"})})},"AccountFilter"),m=r(()=>{const e=u({filters:[{...g,as:f}],defaultFilterState:{}});return t.jsxs(p,{children:[t.jsx(i,{...e}),t.jsxs(x,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})},"Datepicker"),fe=["Controlled","Removable","AccountFilter","Datepicker"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
