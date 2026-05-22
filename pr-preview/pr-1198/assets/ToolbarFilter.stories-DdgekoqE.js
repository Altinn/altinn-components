import{r as c,j as t}from"./iframe-CbC-fLaY.js";import{S as u}from"./SelectDateFilter-DgCzfX1L.js";import{a as s,T as m}from"./Toolbar-CFq1284o.js";import{i as l,u as p,t as b}from"./example.hooks-B3iXDVBk.js";import{B as F}from"./Button-B0m1rUs2.js";import{S}from"./Section-DypEBfCX.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CJcERi05.js";import"./useId-C2JQsT24.js";import"./Datepicker-D3wyvF8V.js";import"./index-Ds9VDGIC.js";import"./ChevronRight-CThQJEOF.js";import"./MenuListItem-DBiuOcpf.js";import"./MenuItem-BUq3aL73.js";import"./ItemMedia-CsSXB_1W.js";import"./XMark-DvUzU3_h.js";import"./Avatar-CmrLTlqi.js";import"./Skeleton-D8kEQByH.js";import"./AvatarGroup-CtTcTi_X.js";import"./Icon-DW3Nd0-m.js";import"./Checkmark-8GuDUS8U.js";import"./Heading-Bl7p7Gle.js";import"./useHighlightedText-BssbQrxH.js";import"./ItemControls-gQT1qCQ5.js";import"./Badge-BwpPXd0u.js";import"./Tooltip-BulSRtpn.js";import"./tooltip-BtbQ4KG6.js";import"./MenuListHeading-C1HjQPPY.js";import"./Fieldset-CJX25waV.js";import"./Label-DN-jQPwh.js";import"./Input-BNbo7Vjn.js";import"./SearchField-yE8KzlZV.js";import"./MagnifyingGlass-CyeXkGZ3.js";import"./FieldBase-D2jwyGQb.js";import"./Typography-BWnrNFau.js";import"./useMenu-a79SM2ar.js";import"./index-DDRVeLeZ.js";import"./InformationSquare-CQq7uvJQ.js";import"./useDropdownMenuController-B89zAjpv.js";import"./Plus-BGo0JvDh.js";import"./Dropdown-5e6GLlMG.js";import"./ChevronUpDown-r1RoSoyE.js";import"./ButtonGroup-BE0BnYMw.js";import"./ButtonGroupDivider-Bt-Y-uw7.js";import"./ToolbarMenu-DpWlAcTs.js";import"./ToolbarSearch-BzaPO5IS.js";import"./Paperclip-BgCIsMPj.js";import"./Eye-BQcT7gvw.js";import"./MenuHamburger-CSe5Jiwx.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./Flex-DahTG4Th.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
