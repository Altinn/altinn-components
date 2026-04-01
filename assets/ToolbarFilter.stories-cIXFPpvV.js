import{r as c,j as t}from"./iframe-DxxW_Hah.js";import{S as u}from"./SelectDateFilter-xe4WhZPw.js";import{a as s,T as m}from"./Toolbar-D_GIfmV4.js";import{i as l,u as p,t as b}from"./example.hooks-Bwy2qIW1.js";import{B as F}from"./Button-CcwbSiKg.js";import{S}from"./Section-DDQuxuHV.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CDTBG5mK.js";import"./useId-CckRU7I8.js";import"./Datepicker-qgq8bd4E.js";import"./index-pOAXHZ6n.js";import"./ChevronRight-CqOTbusb.js";import"./MenuListItem-BWh93a_i.js";import"./MenuItem-SOEG9Ke8.js";import"./ItemMedia-DDT4_MLi.js";import"./XMark-ChXBbXGN.js";import"./Avatar--rA6gsID.js";import"./Skeleton-DiRARuJ9.js";import"./AvatarGroup-C6j_8VXQ.js";import"./Icon-Cf03fdWw.js";import"./Checkmark-pZi8btQa.js";import"./Heading-Bejow2zA.js";import"./useHighlightedText-C9OLcmcP.js";import"./Badge-CQ9EBUDZ.js";import"./MenuListHeading-CIz6aOLR.js";import"./Fieldset-CXGM5LTr.js";import"./lite-DaUVFjkg.js";import"./index-D2WP85Bl.js";import"./use-merge-refs-BbTz5JXs.js";import"./Label-YFmv6AXl.js";import"./Input-Cs8lujA3.js";import"./input-B30SugQD.js";import"./SearchField-ptc2QeHn.js";import"./MagnifyingGlass-B8dYO_M2.js";import"./FieldBase-ttSv04zw.js";import"./Typography-CfTPPq_a.js";import"./useMenu-DMxEdeKU.js";import"./InformationSquare-CuO8i3VE.js";import"./useDropdownMenuController-BAV-gCcK.js";import"./Plus-CScsMow9.js";import"./Dropdown-_zFGDkyY.js";import"./ChevronUpDown-CXtDHS57.js";import"./ButtonGroup-wgVYayc9.js";import"./ButtonGroupDivider-i0Wffh1Y.js";import"./Tooltip-DIHoftUf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-I3DkE7Ax.js";import"./ToolbarSearch-C2CyTcgn.js";import"./Paperclip-BvNde2e8.js";import"./Eye-CMu0w_nr.js";import"./MenuHamburger-Be4YtaYC.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-BBYE_PPH.js";import"./Flex-CRmH3H-L.js";const xt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const dt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,dt as __namedExportsOrder,xt as default};
