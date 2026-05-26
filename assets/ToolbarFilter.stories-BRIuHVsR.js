import{s as c,p as t}from"./iframe-a6n42jIx.js";import{S as u}from"./SelectDateFilter-Ceg5z9Xm.js";import{a as s,T as m}from"./Toolbar-CIlW7YHV.js";import{i as l,a as p,t as b}from"./example.hooks-DXy9NmH3.js";import{B as F}from"./Button-DYhT04-k.js";import{S}from"./Section-SbJC69tZ.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-BG5nT3q2.js";import"./index-D2z1-3lt.js";import"./MenuItem-DlDQtEmE.js";import"./ItemMedia-9TYJyMgm.js";import"./XMark-ENWUN_kz.js";import"./useId-JsUrCC3L.js";import"./Avatar-DDS_Cv_Z.js";import"./Skeleton-BMznOa58.js";import"./AvatarGroup-BaunAvi6.js";import"./Icon-C2KYL6xM.js";import"./Checkmark-NdO0COsu.js";import"./Heading-Dza3pExo.js";import"./useHighlightedText-Bq-Ej33u.js";import"./ItemControls-vHjq0nAG.js";import"./Badge-BmuPJ3WS.js";import"./Tooltip-CHTkUxru.js";import"./tooltip-D8RdZxwd.js";import"./ChevronRight-DzQRiVjQ.js";import"./ArrowUndo-BXKQsB65.js";import"./MenuListHeading-Bp0V-0Ne.js";import"./Fieldset-DQYus6I2.js";import"./Label-CP4RT8OS.js";import"./Input-BUxVKC9v.js";import"./Datepicker-tnVWsN5v.js";import"./SearchField-Cpk_dpFX.js";import"./MagnifyingGlass-CsfVCXI1.js";import"./FieldBase-BOMRGuHX.js";import"./Typography-K_BS0H0I.js";import"./useMenu-BnSKl7OB.js";import"./index-Bc5QqnLi.js";import"./InformationSquare-DAX_zw-n.js";import"./useDropdownMenuController-ChUHZsVx.js";import"./Dropdown-MBw9TKMx.js";import"./Plus-DWNwY5kK.js";import"./ButtonGroup-r8c9eAn-.js";import"./ButtonGroupDivider-Bgl5eh5n.js";import"./ChevronUpDown-jw4Svc_J.js";import"./ToolbarMenu-Dv5AKmqP.js";import"./ToolbarSearch-y1cFyJwK.js";import"./Paperclip-BRGVjuSY.js";import"./Eye-CrHnsRDH.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CET8gFNo.js";import"./Flex-BTGTFkLF.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({});
  return <Toolbar>
      <ToolbarFilter getFilterLabel={name => filterState?.[name]?.join(',') || 'Choose ' + name} filterState={filterState} onFilterStateChange={setFilterState} filters={inboxFilters.map(item => ({
      ...item,
      removable: true
    }))} />
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const St=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,St as __namedExportsOrder,Ft as default};
