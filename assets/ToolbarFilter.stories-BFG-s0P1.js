import{r as c,j as t}from"./iframe-C32LkOFR.js";import{S as u}from"./SelectDateFilter-BU9JnkDy.js";import{a as s,T as m}from"./Toolbar-DtXUXRyF.js";import{i as l,u as p,t as b}from"./example.hooks-51JUGtWh.js";import{B as F}from"./Button-DJyTPLgL.js";import{S}from"./Section-BW54BVJv.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-C8csTNhw.js";import"./useId-C6VS968l.js";import"./Datepicker-vqReHSAq.js";import"./index-B41-Gq6i.js";import"./ChevronRight-BRam3foO.js";import"./MenuListItem-CpDZm8hJ.js";import"./MenuItem-B2ec7Awl.js";import"./ItemMedia-Bzb68dd0.js";import"./XMark-CJ_7TJfx.js";import"./Avatar-Bfhk-MsW.js";import"./Skeleton-BFp1Ns5z.js";import"./AvatarGroup-CngdFV9S.js";import"./Icon-ClcJ2Ugl.js";import"./Checkmark-Cohtyyf2.js";import"./Heading-C2AVc7ZV.js";import"./useHighlightedText-TWz6a-kb.js";import"./ItemControls-6sDFc5WV.js";import"./Badge-B5rN9dZh.js";import"./Tooltip-D2U0c2nY.js";import"./tooltip-C1z0ba6x.js";import"./MenuListHeading-DFXzzdQl.js";import"./Fieldset-DahoeTWf.js";import"./Label--g4FWuur.js";import"./Input-944JhKVs.js";import"./SearchField-CSvKC2kE.js";import"./MagnifyingGlass-WQhuuXQl.js";import"./FieldBase-C4PiPQJY.js";import"./Typography-BtAt1mkJ.js";import"./useMenu-CglJcFc3.js";import"./index-DD5_FiA2.js";import"./InformationSquare-BqsScoMm.js";import"./useDropdownMenuController-CToZfoEW.js";import"./Plus-BuKKYKtN.js";import"./Dropdown-3ScmWyOY.js";import"./ChevronUpDown-Dxpj943m.js";import"./ButtonGroup-C2Onw-9a.js";import"./ButtonGroupDivider-C3K0uMrd.js";import"./ToolbarMenu-DBsXgIzo.js";import"./ToolbarSearch-DVPrcmBl.js";import"./Paperclip-DSqVpQqK.js";import"./Eye-VpIxgA79.js";import"./MenuHamburger-CP22A_hy.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./Flex-BUJ7sT5C.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
