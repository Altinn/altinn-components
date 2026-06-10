import{aa as u,a7 as t,c as b}from"./iframe-B8reGtNb.js";import{S as F}from"./SelectDateFilter-BJoghwu7.js";import{a as l,T as n}from"./Toolbar-D2RYFt88.js";import{i as m,a as p,t as S}from"./example.hooks-rAOvp4tq.js";import{S as f}from"./Section-DovdLmcg.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-DvV5RcWS.js";import"./MenuItem-b6Fzjl6t.js";import"./ItemMedia-B3mE-krC.js";import"./Avatar-DjLw-5ab.js";import"./AvatarGroup-CBquJS0s.js";import"./Checkmark-7r8S-fkf.js";import"./ItemLabel-OlP1i4ZU.js";import"./Heading-Cybus3jr.js";import"./useHighlightedText-ZBcygk0-.js";import"./ItemControls-CBTS8zxi.js";import"./Badge-DzttLmt8.js";import"./Tooltip-fMVkBgtC.js";import"./ChevronRight-BRSkVVAW.js";import"./ArrowUndo-CqT7_P72.js";import"./MenuListHeading-BEkIHHSP.js";import"./Fieldset-Cs_hCs0Q.js";import"./Field-BHSHIm9D.js";import"./Label-D9DJQymt.js";import"./Input-DOKzz0Tj.js";import"./Datepicker-SaULyn6H.js";import"./SearchField-CW2nl4m_.js";import"./MagnifyingGlass-CBDfQb5g.js";import"./FieldBase-DDJWfLpA.js";import"./Typography-Dxv9MSbD.js";import"./useMenu-G7RJHCVr.js";import"./index-BuUpoUlL.js";import"./InformationSquare-t8wgbWET.js";import"./useDropdownMenuController-pbON2RCT.js";import"./Dropdown-mf9EWUWK.js";import"./Plus-Ck-NVedy.js";import"./ButtonGroup-LpI9N8Q_.js";import"./ButtonGroupDivider-U6otbiA_.js";import"./ChevronUpDown-DMiF3376.js";import"./ToolbarMenu-Byul9EYL.js";import"./ToolbarSearch-BwAYIpys.js";import"./Paperclip-eBxaxihm.js";import"./Eye-CUNHx0yb.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CHdAjUqn.js";import"./Flex-qoZntq9f.js";const pt={title:"Toolbar/ToolbarFilter",component:l,parameters:{},args:{}},i=()=>{const[e,r]=u.useState({}),c=m.map(o=>({...o,removable:!0}));return t.jsxs(n,{children:[t.jsx(l,{addLabel:"Legg til filter",getFilterLabel:o=>e?.[o]?.join(",")||"Choose "+o,filterState:e,onFilterStateChange:r,filters:c}),t.jsx(b,{onClick:()=>r({}),children:"Reset"})]})},a=()=>{const e=p({filters:m?.map(r=>({...r,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(n,{children:t.jsx(l,{...e})})},s=()=>{const e=p({filters:[{...S,as:F}],defaultFilterState:{}});return t.jsxs(n,{children:[t.jsx(l,{...e}),t.jsxs(f,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
