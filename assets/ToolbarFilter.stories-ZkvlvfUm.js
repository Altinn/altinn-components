import{aa as u,a7 as t,c as b}from"./iframe-CH-Rf2AI.js";import{S as F}from"./SelectDateFilter-lpqhWrdf.js";import{a as l,T as n}from"./Toolbar-B5whV829.js";import{i as m,a as p,t as S}from"./example.hooks-kQrUwhyT.js";import{S as f}from"./Section-DzGR-IUh.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-GZMPCGGS.js";import"./MenuItem-BWxi170U.js";import"./ItemMedia-BczcOirL.js";import"./Avatar-BTqkjvF0.js";import"./AvatarGroup-l96vnRcp.js";import"./Checkmark-CzXEx9R6.js";import"./ItemLabel-B29_eOJn.js";import"./Heading-BVqV7FRe.js";import"./useHighlightedText-DIHcSE2r.js";import"./ItemControls-loNIR_kd.js";import"./Badge-D-8o5byA.js";import"./Tooltip-DbXMT4Wm.js";import"./ChevronRight-uifDbL9f.js";import"./ArrowUndo-DkUyPEkv.js";import"./MenuListHeading-DRQf-aXW.js";import"./Fieldset-RTv4sQps.js";import"./Field-D5PSE71G.js";import"./Label-D8E1gFAx.js";import"./Input-CCpKfFu1.js";import"./Datepicker-C9rz2_01.js";import"./SearchField-Dm3ERjlY.js";import"./MagnifyingGlass-CcgQ0D7w.js";import"./FieldBase-BRTqs99O.js";import"./Typography-CqA3kMNv.js";import"./useMenu-FkcUMU_-.js";import"./index-Bn39eRZ3.js";import"./InformationSquare-D0kDsS_w.js";import"./useDropdownMenuController-C7q1T2hK.js";import"./Dropdown-_OswQPQg.js";import"./Plus-BQYmFmTa.js";import"./ButtonGroup-6-1iOFaS.js";import"./ButtonGroupDivider-h_7e4qvH.js";import"./ChevronUpDown-D4KfXAKY.js";import"./ToolbarMenu-BA267ZrV.js";import"./ToolbarSearch-SraTjllo.js";import"./Paperclip-HsR2VBMP.js";import"./Eye-BoZFsIWT.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DrB2GaRw.js";import"./Flex-BtYwPl5t.js";const pt={title:"Toolbar/ToolbarFilter",component:l,parameters:{},args:{}},i=()=>{const[e,r]=u.useState({}),c=m.map(o=>({...o,removable:!0}));return t.jsxs(n,{children:[t.jsx(l,{addLabel:"Legg til filter",getFilterLabel:o=>e?.[o]?.join(",")||"Choose "+o,filterState:e,onFilterStateChange:r,filters:c}),t.jsx(b,{onClick:()=>r({}),children:"Reset"})]})},a=()=>{const e=p({filters:m?.map(r=>({...r,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(n,{children:t.jsx(l,{...e})})},s=()=>{const e=p({filters:[{...S,as:F}],defaultFilterState:{}});return t.jsxs(n,{children:[t.jsx(l,{...e}),t.jsxs(f,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
