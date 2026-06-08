import{aa as c,a7 as t,c as u}from"./iframe-BkdCVhNa.js";import{S as b}from"./SelectDateFilter-DZalDsQa.js";import{a as s,T as l}from"./Toolbar-B10IL9NB.js";import{i as m,a as p,t as F}from"./example.hooks-D7tXAtoJ.js";import{S}from"./Section-CCbnuMor.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-pRWVrCNm.js";import"./MenuItem-DLDMkBQ4.js";import"./ItemMedia-ZGWW7sv6.js";import"./Avatar-BIkq-2V8.js";import"./AvatarGroup-M5GjbKZV.js";import"./Checkmark-ChhRzFzd.js";import"./ItemLabel-DCGYjoAC.js";import"./Heading-CYb_rmks.js";import"./useHighlightedText-THgW7xGA.js";import"./ItemControls-Bpk8CkC-.js";import"./Badge-Do4_FWGT.js";import"./Tooltip-wNk76VVd.js";import"./ChevronRight-BWpY3hyQ.js";import"./ArrowUndo-BT2qWUsa.js";import"./MenuListHeading-ITzk-OYW.js";import"./Fieldset-fTfNvo7o.js";import"./Field-nzKcMOXI.js";import"./Label-DHWqz8jc.js";import"./Input-Bk6KAWUZ.js";import"./Datepicker-C4hTVi3v.js";import"./SearchField-ClkEO99z.js";import"./MagnifyingGlass-Dy-txje3.js";import"./FieldBase-DIosJ8GZ.js";import"./Typography-BbYlnfM1.js";import"./useMenu-Dy3YaaUo.js";import"./index-CvtktNDj.js";import"./InformationSquare-D9_tzfnx.js";import"./useDropdownMenuController-fgAyTcqj.js";import"./Dropdown-CAWWJNvU.js";import"./Plus-1oHAiQB4.js";import"./ButtonGroup-BeLY82P-.js";import"./ButtonGroupDivider-DDdfhEZd.js";import"./ChevronUpDown-CBG_zYJo.js";import"./ToolbarMenu-dcLUQQlo.js";import"./ToolbarSearch-DSW05ZOw.js";import"./Paperclip-NMLrrGRJ.js";import"./Eye-BO3KOX7j.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-C33_VoLZ.js";import"./Flex-0kNayUnl.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
