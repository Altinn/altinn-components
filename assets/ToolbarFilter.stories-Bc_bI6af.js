import{aa as u,a7 as t,c as b}from"./iframe-CvGAoPsc.js";import{S as F}from"./SelectDateFilter-DJkfSeMH.js";import{a as l,T as n}from"./Toolbar-CgjyJvyR.js";import{i as m,a as p,t as S}from"./example.hooks-BGAYq2EH.js";import{S as f}from"./Section-25rkGJ0B.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CG5q7PCk.js";import"./MenuItem-CixWxF6L.js";import"./ItemMedia-CdB4UUVE.js";import"./Avatar-Bjc-Jmrn.js";import"./AvatarGroup-_sxbmMl3.js";import"./Checkmark-Db10x7b8.js";import"./ItemLabel-BBQQw1-7.js";import"./Heading--2u1ER42.js";import"./useHighlightedText-9vbrUFu0.js";import"./ItemControls-CFHaIVdN.js";import"./Badge-C_wE1QB8.js";import"./Tooltip-BfnkAeey.js";import"./ChevronRight-CMCEl43v.js";import"./ArrowUndo-BoaXS6mH.js";import"./MenuListHeading-CgytQ4SA.js";import"./Fieldset-Bn96NuVP.js";import"./Field-jyfGm65f.js";import"./Label-CufJDrgK.js";import"./Input-CQ0xvTw5.js";import"./Datepicker-DwFiCONq.js";import"./SearchField-BnKKet4K.js";import"./MagnifyingGlass-B5EFcWq7.js";import"./FieldBase-DoX_7GiJ.js";import"./Typography-BnX3Du0Y.js";import"./useMenu-CZTVrDBq.js";import"./index-CRXgSDNk.js";import"./InformationSquare-DmU_7K9H.js";import"./useDropdownMenuController-DHE3Yfxx.js";import"./Dropdown-wMqb1yc7.js";import"./Plus-gM9Gdbeo.js";import"./ButtonGroup-CN_FlQBy.js";import"./ButtonGroupDivider-BlUvmc5K.js";import"./ChevronUpDown-C8ASwfc2.js";import"./ToolbarMenu-B2CC95NW.js";import"./ToolbarSearch-CgtFtLlX.js";import"./Paperclip-Dl4FRSdV.js";import"./Eye-qLUoBUwL.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CVGE1V0h.js";import"./Flex-DO5C4y-8.js";const pt={title:"Toolbar/ToolbarFilter",component:l,parameters:{},args:{}},i=()=>{const[e,r]=u.useState({}),c=m.map(o=>({...o,removable:!0}));return t.jsxs(n,{children:[t.jsx(l,{addLabel:"Legg til filter",getFilterLabel:o=>e?.[o]?.join(",")||"Choose "+o,filterState:e,onFilterStateChange:r,filters:c}),t.jsx(b,{onClick:()=>r({}),children:"Reset"})]})},a=()=>{const e=p({filters:m?.map(r=>({...r,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(n,{children:t.jsx(l,{...e})})},s=()=>{const e=p({filters:[{...S,as:F}],defaultFilterState:{}});return t.jsxs(n,{children:[t.jsx(l,{...e}),t.jsxs(f,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({});
  const filters = inboxFilters.map(item => ({
    ...item,
    removable: true
  }));
  return <Toolbar>
      <ToolbarFilter addLabel="Legg til filter" getFilterLabel={name => filterState?.[name]?.join(',') || 'Choose ' + name} filterState={filterState} onFilterStateChange={setFilterState} filters={filters} />
      <Button onClick={() => setFilterState({})}>Reset</Button>
    </Toolbar>;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const ct=["Controlled","Removable","Datepicker"];export{i as Controlled,s as Datepicker,a as Removable,ct as __namedExportsOrder,pt as default};
