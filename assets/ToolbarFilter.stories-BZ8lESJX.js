import{aa as c,a7 as t,c as u}from"./iframe-bg3nhc5C.js";import{S as b}from"./SelectDateFilter-DeZnUlvJ.js";import{a as s,T as l}from"./Toolbar-DWAoZWct.js";import{i as m,a as p,t as F}from"./example.hooks-CVVbI-l0.js";import{S}from"./Section-0QuSZB3S.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-f8-xfgbP.js";import"./MenuItem-Dnd2bkX1.js";import"./ItemMedia-CxijgI7U.js";import"./Avatar-BnkW8VAf.js";import"./AvatarGroup-BUxzP8KS.js";import"./Checkmark-D_j4oKhD.js";import"./ItemLabel-D9bNrZqJ.js";import"./Heading-CqXKSZEg.js";import"./useHighlightedText-Ct2V138i.js";import"./ItemControls-vsK4YZNK.js";import"./Badge-hZ6rpuJP.js";import"./Tooltip-BG2MYXE2.js";import"./ChevronRight-fbKP0qVJ.js";import"./ArrowUndo-aIXjtX94.js";import"./MenuListHeading-CPNZr4rU.js";import"./Fieldset-CYHAvU6S.js";import"./Field-DXeetSkN.js";import"./Label-BY0S3EO2.js";import"./Input-ByvRROIc.js";import"./Datepicker-OlWXmFPj.js";import"./SearchField-CjXdfZ37.js";import"./MagnifyingGlass-C3fVRdM8.js";import"./FieldBase-CPws21pp.js";import"./Typography-Ci1MUa-H.js";import"./useMenu-DS82y3su.js";import"./index-cKgDDIaZ.js";import"./InformationSquare-BrXIcqKH.js";import"./useDropdownMenuController-CwIh1DiK.js";import"./Dropdown-CqGqZ6my.js";import"./Plus-T7SFOg3q.js";import"./ButtonGroup-BzB2tyZw.js";import"./ButtonGroupDivider-Cye-61mv.js";import"./ChevronUpDown-Bdm9ft9T.js";import"./ToolbarMenu-GuoKeltm.js";import"./ToolbarSearch-CA5X9J2B.js";import"./Paperclip-8j0w26RA.js";import"./Eye-BWHJUVpL.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-COo8Z9YV.js";import"./Flex-CxgPTFrH.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const pt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,pt as __namedExportsOrder,mt as default};
