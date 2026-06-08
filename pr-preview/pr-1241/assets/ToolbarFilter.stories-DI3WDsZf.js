import{aa as c,a7 as t,c as u}from"./iframe-KbHODQgb.js";import{S as b}from"./SelectDateFilter-C8r4WWgU.js";import{a as s,T as l}from"./Toolbar-BJYj1e1Y.js";import{i as m,a as p,t as F}from"./example.hooks-CSD0Pnub.js";import{S}from"./Section-BQYKGPm8.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-D3mLd2IU.js";import"./MenuItem-BP2R6FfU.js";import"./ItemMedia-vwuqAhM8.js";import"./Avatar-DL544SyI.js";import"./AvatarGroup-CCjx5RK0.js";import"./Checkmark-CO83o23q.js";import"./ItemLabel-BW6ywGNt.js";import"./Heading-jxV4Y0yK.js";import"./useHighlightedText-uGguOCwY.js";import"./ItemControls-BYcmr1lT.js";import"./Badge-MoiWNolG.js";import"./Tooltip-BDxQfQSw.js";import"./ChevronRight-wplb_UH2.js";import"./ArrowUndo-Czf3yvOi.js";import"./MenuListHeading-BPNZa_yh.js";import"./Fieldset-B1O7F_Xf.js";import"./Field-B8zKs9Bz.js";import"./Label-C3jcdxRS.js";import"./Input-DwLHHyGz.js";import"./Datepicker-usnz-QCk.js";import"./SearchField-BOprvfZ0.js";import"./MagnifyingGlass-Db52e0Xc.js";import"./FieldBase-Vfg8qV6A.js";import"./Typography-C9K693Jo.js";import"./useMenu-veT1adJt.js";import"./index-DNTFCYRR.js";import"./InformationSquare-DCyKofJQ.js";import"./useDropdownMenuController-C2TGyR2O.js";import"./Dropdown-2MkuZ1sA.js";import"./Plus-DWfYvBf0.js";import"./ButtonGroup-D1R72gzy.js";import"./ButtonGroupDivider-Bgv434RO.js";import"./ChevronUpDown-DI9yxsG7.js";import"./ToolbarMenu-CXd-6wki.js";import"./ToolbarSearch-DkxFBCXf.js";import"./Paperclip-B3Sy7vLj.js";import"./Eye-Dz5mEoYJ.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CMlucM-D.js";import"./Flex-DJYB_We1.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
