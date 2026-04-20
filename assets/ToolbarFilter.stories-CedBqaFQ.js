import{r as c,j as t}from"./iframe-yBEatwQ0.js";import{S as u}from"./SelectDateFilter-Den4T4YL.js";import{a as s,T as m}from"./Toolbar-pWkgRMwq.js";import{i as l,u as p,t as b}from"./example.hooks-CwQZhdVY.js";import{B as F}from"./Button-Du_F5DdO.js";import{S}from"./Section-CLhotqus.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-osocl8i7.js";import"./useId-DyCIbqyR.js";import"./Datepicker-BPS20S9C.js";import"./index-B7J_eA84.js";import"./ChevronRight-DNoffWLc.js";import"./MenuListItem-BYxhnGHY.js";import"./MenuItem-DG7ysQbI.js";import"./ItemMedia-po0tYTET.js";import"./XMark-DRdfunCf.js";import"./Avatar-BHAY-jNJ.js";import"./Skeleton-D2AOT5bt.js";import"./AvatarGroup-Em3MhneF.js";import"./Icon-m6GSRHhZ.js";import"./Checkmark-BOqpEP7R.js";import"./Heading-gNorXCZa.js";import"./useHighlightedText-Dt8J34OD.js";import"./ItemControls-CsC9idfH.js";import"./Badge-Bt5kdhhY.js";import"./MenuListHeading-CMUrUTJP.js";import"./Fieldset-Wydq2NK2.js";import"./lite-DaUVFjkg.js";import"./index-4yM6tgpO.js";import"./use-merge-refs-BCyRe6aJ.js";import"./Label-jtu-OMH2.js";import"./Input-BprGT-wl.js";import"./input-ByeiaQUe.js";import"./SearchField-Dq16b7ar.js";import"./MagnifyingGlass-SlzD67D9.js";import"./FieldBase-DJNauVgJ.js";import"./Typography-ggurnZ72.js";import"./useMenu-DUoC-ldr.js";import"./InformationSquare-CID74XMT.js";import"./useDropdownMenuController-DyufIMTt.js";import"./Plus-CN2BINNw.js";import"./Dropdown-Dt86DnuG.js";import"./ChevronUpDown-Bh4SS8Cp.js";import"./ButtonGroup-Cw-wKcaM.js";import"./ButtonGroupDivider-C6kpFR4l.js";import"./Tooltip-ncAjVCVs.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-CJIbYcPE.js";import"./ToolbarSearch-DDKzx7pj.js";import"./Paperclip-BQfOcZQR.js";import"./Eye-RCRP_qEL.js";import"./MenuHamburger-LWrM74HE.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-DDduZyu8.js";import"./Flex-Co0GST2J.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
