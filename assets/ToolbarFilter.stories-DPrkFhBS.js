import{aa as u,a7 as t,c as b}from"./iframe-CENvAP26.js";import{S as F}from"./SelectDateFilter-BGtuSQBA.js";import{a as l,T as n}from"./Toolbar-DpO9GV8k.js";import{i as m,a as p,t as S}from"./example.hooks-CJTuBAzl.js";import{S as f}from"./Section-Dfl51lKI.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-BT-iZ3cq.js";import"./MenuItem-Fa6rC5wV.js";import"./ItemMedia-C5TE1h6m.js";import"./Avatar-D1pW8xSr.js";import"./AvatarGroup-CTCyh_uW.js";import"./Checkmark-D1ifpvt_.js";import"./ItemLabel-CqdC7zrv.js";import"./Heading-mra_L4pQ.js";import"./useHighlightedText-BwOLK-i3.js";import"./ItemControls-DaWh-3zk.js";import"./Badge-DDGgDt_B.js";import"./Tooltip-B6qNZOKm.js";import"./ChevronRight-CqCnB5Zg.js";import"./ArrowUndo-DxMsWBCJ.js";import"./MenuListHeading-BD0rgLCP.js";import"./Fieldset-Be_GI-q1.js";import"./Field-oHEtcERA.js";import"./Label-N53R6xsN.js";import"./Input-CMkEMAO8.js";import"./Datepicker-F5cMPM52.js";import"./SearchField-B76VS5jy.js";import"./MagnifyingGlass-DDkWwcsn.js";import"./FieldBase-IIcWSE0k.js";import"./Typography-BK5AylHP.js";import"./useMenu-DmwlujsT.js";import"./index-BzTqrnLh.js";import"./InformationSquare-DfDfuKua.js";import"./useDropdownMenuController-BbdnPNgS.js";import"./Dropdown-BZVY_4Wm.js";import"./Plus-CWY-kAGj.js";import"./ButtonGroup-C4l5taXG.js";import"./ButtonGroupDivider-1X3Nwv0w.js";import"./ChevronUpDown-Ca6IZrDH.js";import"./ToolbarMenu-CsmlAKby.js";import"./ToolbarSearch-Ds1gk2xh.js";import"./Paperclip-C8W8HItg.js";import"./Eye-UuKaNYky.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-acEhsrwC.js";import"./Flex-yTAvUoR1.js";const pt={title:"Toolbar/ToolbarFilter",component:l,parameters:{},args:{}},i=()=>{const[e,r]=u.useState({}),c=m.map(o=>({...o,removable:!0}));return t.jsxs(n,{children:[t.jsx(l,{addLabel:"Legg til filter",getFilterLabel:o=>e?.[o]?.join(",")||"Choose "+o,filterState:e,onFilterStateChange:r,filters:c}),t.jsx(b,{onClick:()=>r({}),children:"Reset"})]})},a=()=>{const e=p({filters:m?.map(r=>({...r,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(n,{children:t.jsx(l,{...e})})},s=()=>{const e=p({filters:[{...S,as:F}],defaultFilterState:{}});return t.jsxs(n,{children:[t.jsx(l,{...e}),t.jsxs(f,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
