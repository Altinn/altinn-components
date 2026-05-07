import{r as c,j as t}from"./iframe-BakMcPB9.js";import{S as u}from"./SelectDateFilter-BnCx0vZZ.js";import{a as s,T as m}from"./Toolbar-B_CGAfU5.js";import{i as l,u as p,t as b}from"./example.hooks-DP3iCOif.js";import{B as F}from"./Button-BJ-P2q8B.js";import{S}from"./Section-C3ywv7P2.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-B1TPuteg.js";import"./useId-Btw-Kuqp.js";import"./Datepicker-C6fj9J4x.js";import"./index-DAwqyEdM.js";import"./ChevronRight-C2TalX8u.js";import"./MenuListItem-DLQbcaMe.js";import"./MenuItem-DOoZvP8c.js";import"./ItemMedia-CMtvzv_T.js";import"./XMark-D8cLqedS.js";import"./Avatar-bwZt4czp.js";import"./Skeleton-CIZGLt5B.js";import"./AvatarGroup-DgPgqKip.js";import"./Icon-D4ysQTre.js";import"./Checkmark-Bv6xEUnW.js";import"./Heading-Dpm-6zaj.js";import"./useHighlightedText-nzhiVGnc.js";import"./ItemControls-BIaUvdXD.js";import"./Badge-ChbpCNVq.js";import"./Tooltip-CQ3DXIuJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CJ9f1t94.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-BYFBzopx.js";import"./Fieldset-BUm26vBg.js";import"./index-Dmny_mDx.js";import"./Label-D58ijrT7.js";import"./Input-Csjd-e9P.js";import"./input-DNwUo5r_.js";import"./SearchField-rHpPiKo0.js";import"./MagnifyingGlass-BCCA0_9u.js";import"./FieldBase-B35pktZu.js";import"./Typography-BzplxmiV.js";import"./useMenu-BaGtO6Vm.js";import"./InformationSquare-XaKmtjKI.js";import"./useDropdownMenuController-CClYSj1T.js";import"./Plus-CsNf283B.js";import"./Dropdown-UmxICHKp.js";import"./ChevronUpDown-BQWoe1O9.js";import"./ButtonGroup-4RnrqVmD.js";import"./ButtonGroupDivider-BxtMkVsF.js";import"./ToolbarMenu-B3EEzWoM.js";import"./ToolbarSearch-CKv0R1zR.js";import"./Paperclip-dw8uMOP-.js";import"./Eye-e_0T4QTz.js";import"./MenuHamburger-ChSiVscJ.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-Dqq-cscz.js";import"./Flex-73Lku4Kd.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
