import{r as c,j as t}from"./iframe-CULgtZWU.js";import{S as u}from"./SelectDateFilter-CFjfv19R.js";import{a as s,T as m}from"./Toolbar-BtiZHTnq.js";import{i as l,u as p,t as b}from"./example.hooks-CtFZqNVI.js";import{B as F}from"./Button-EDUaKVqz.js";import{S}from"./Section-CJ2BqCln.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Dr_lpKdM.js";import"./useId-COk2q28h.js";import"./Datepicker-B4k43Hsm.js";import"./index-BvBdYXxj.js";import"./ChevronRight-Q1coQceW.js";import"./MenuListItem-bQ_fc2Ge.js";import"./MenuItem-ByRPat9U.js";import"./ItemMedia-CstP66eQ.js";import"./XMark-BCb0_aBA.js";import"./Avatar-DIXtsktU.js";import"./Skeleton-B_F13Udl.js";import"./AvatarGroup-C5aSOTjU.js";import"./Icon-G4wS9E1h.js";import"./Checkmark-DEc7m9Qo.js";import"./Heading-QgrsV_VA.js";import"./useHighlightedText-BLw72BO7.js";import"./ItemControls-RibfoZmh.js";import"./Badge-CMQ7i3tF.js";import"./MenuListHeading-gj1aWH_N.js";import"./Fieldset-B5rXPjTC.js";import"./lite-DaUVFjkg.js";import"./index-DY3DIpTU.js";import"./use-merge-refs-BFFvRczq.js";import"./Label-TPhVVF1y.js";import"./Input-C5uL5M8v.js";import"./input-CIkisq6p.js";import"./SearchField-D5aR-gNH.js";import"./MagnifyingGlass-B-SEPcNi.js";import"./FieldBase-DGffeSDz.js";import"./Typography-BrN0KsEX.js";import"./useMenu-Do_nneWd.js";import"./InformationSquare-C8Qq6I-D.js";import"./useDropdownMenuController-BqzfaV4g.js";import"./Plus-Bkcc1EK1.js";import"./Dropdown-CNyPz2U1.js";import"./ChevronUpDown-zmPMeN0t.js";import"./ButtonGroup-CUeGctwp.js";import"./ButtonGroupDivider-CHK1_K1s.js";import"./Tooltip-Bn52Dko6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DyZjnBfk.js";import"./ToolbarSearch-xJqadeFi.js";import"./Paperclip-Ca_xrm4Q.js";import"./Eye-Bhn_FNva.js";import"./MenuHamburger-CkaaaQ8r.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-DZmMky1p.js";import"./Flex-CmyJ6DZP.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const Tt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,Tt as __namedExportsOrder,dt as default};
