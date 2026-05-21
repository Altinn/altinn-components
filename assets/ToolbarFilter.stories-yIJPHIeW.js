import{r as c,j as t}from"./iframe-BDpWuaMs.js";import{S as u}from"./SelectDateFilter-BSXSplQn.js";import{a as s,T as m}from"./Toolbar-pR_aG4Pb.js";import{i as l,u as p,t as b}from"./example.hooks-DlucJHwt.js";import{B as F}from"./Button-m_FXpHGO.js";import{S}from"./Section-B9Daowr7.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-B7yB7xi-.js";import"./useId-BKmV9YxM.js";import"./Datepicker-8fAwqIgE.js";import"./index-DVPUayQ0.js";import"./ChevronRight-BJTZ2o3o.js";import"./MenuListItem-Cx4K7HTt.js";import"./MenuItem-BH8ygUTz.js";import"./ItemMedia-CHwsaJTx.js";import"./XMark-Cx5Omj8e.js";import"./Avatar-CT8r-oMP.js";import"./Skeleton-DC_TZb2p.js";import"./AvatarGroup-C5RQzawa.js";import"./Icon-4_NTN6mD.js";import"./Checkmark-DDYvLrrH.js";import"./Heading-D4nA4ZwT.js";import"./useHighlightedText-B13W4IFy.js";import"./ItemControls-BtUdj5a9.js";import"./Badge-DPODtVho.js";import"./Tooltip-X0E0nlNG.js";import"./tooltip-DLcd2lCg.js";import"./MenuListHeading-XsWTeeVe.js";import"./Fieldset-DcdEioN4.js";import"./Label-7jR2lGh9.js";import"./Input-BoCHA0_0.js";import"./SearchField-D16JUOzv.js";import"./MagnifyingGlass-ItUM1KfV.js";import"./FieldBase-CGSHeWph.js";import"./Typography-DZRyPYmV.js";import"./useMenu-CniiHJSE.js";import"./index-BHwG3h0W.js";import"./InformationSquare-CS8D_BUZ.js";import"./useDropdownMenuController-P2ixjEDe.js";import"./Plus-CPPR_4GW.js";import"./Dropdown-COTBq4xu.js";import"./ChevronUpDown-DV5kcrkO.js";import"./ButtonGroup-DdOFFFWL.js";import"./ButtonGroupDivider-koOAE-Up.js";import"./ToolbarMenu-DPri2kgb.js";import"./ToolbarSearch-BoGKCEjI.js";import"./Paperclip-Dm-BZpbK.js";import"./Eye-CswPk-T8.js";import"./MenuHamburger-B-lY5jCd.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./Flex-zEgiMRQg.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
