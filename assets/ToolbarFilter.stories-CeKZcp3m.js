import{r as c,j as t}from"./iframe-BbAJh2l_.js";import{S as u}from"./SelectDateFilter-7lafazA5.js";import{a as s,T as m}from"./Toolbar-DckTjw6O.js";import{i as l,u as p,t as b}from"./example.hooks-BbT7utNT.js";import{B as F}from"./Button-MneWcYDg.js";import{S}from"./Section-DKBhzXh6.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-pVsY4qWr.js";import"./useId-DlaeWOGU.js";import"./Datepicker-AFLKcv8r.js";import"./index-D4eFSvt3.js";import"./ChevronRight-C-emBdlp.js";import"./MenuListItem-DT3pt1_M.js";import"./MenuItem-CGPdVF_D.js";import"./ItemMedia-Cdf2Y2Gw.js";import"./XMark-CBD09dy-.js";import"./Avatar-j2CMQG5s.js";import"./Skeleton-DCAPmpFX.js";import"./AvatarGroup-D7oFGG3U.js";import"./Icon-BPIDnrjf.js";import"./Checkmark-DCzlJj3W.js";import"./Heading-DtMkhgFU.js";import"./useHighlightedText-Dxl-Q7I2.js";import"./ItemControls-B5jsMXbN.js";import"./Badge-Bayw0f9c.js";import"./MenuListHeading-CDqxI5H7.js";import"./Fieldset-CFvQhJLA.js";import"./lite-DaUVFjkg.js";import"./index-BNnwLbXZ.js";import"./use-merge-refs-B0vn2eeh.js";import"./Label-BPdBz656.js";import"./Input-3cVAucaE.js";import"./input-nlSK42jH.js";import"./SearchField-DsP_4HyY.js";import"./MagnifyingGlass-DGbwovi2.js";import"./FieldBase-DPxwAUyD.js";import"./Typography-Dc6esLAJ.js";import"./useMenu-YgVQ1Cwa.js";import"./InformationSquare-ina-Qzjq.js";import"./useDropdownMenuController-C3VaoHjC.js";import"./Plus-Db8QMMb0.js";import"./Dropdown-oBR_mdc3.js";import"./ChevronUpDown-CYRKV1V8.js";import"./ButtonGroup-CfWicBai.js";import"./ButtonGroupDivider-BKjt-F_a.js";import"./Tooltip-C777j_wE.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-d4Qk3RQU.js";import"./ToolbarSearch-BxmfpA3n.js";import"./Paperclip-DUfsEKsS.js";import"./Eye-DLDyRtc6.js";import"./MenuHamburger-DD5Albkt.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-BOk0ljv4.js";import"./Flex-c7I9zH32.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
