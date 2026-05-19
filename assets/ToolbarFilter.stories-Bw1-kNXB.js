import{r as c,j as t}from"./iframe-CPVbSj3C.js";import{S as u}from"./SelectDateFilter-BHgFvch1.js";import{a as s,T as m}from"./Toolbar-BbXH74iX.js";import{i as l,u as p,t as b}from"./example.hooks-CgMDk3nJ.js";import{B as F}from"./Button-D-Q0AT9s.js";import{S}from"./Section-D88C7V2M.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BAwqFT7u.js";import"./useId-CeU55pH0.js";import"./Datepicker-CBVsGq_h.js";import"./index-B-yq3MoC.js";import"./ChevronRight-D8cN60Uo.js";import"./MenuListItem-BWz4VDTU.js";import"./MenuItem-CBTlmB_y.js";import"./ItemMedia-C5hW-xxB.js";import"./XMark-DWjKCZtX.js";import"./Avatar-Ctx52zko.js";import"./Skeleton-O-y9i0gG.js";import"./AvatarGroup-Dg-4Llzy.js";import"./Icon-DFTXBWnL.js";import"./Checkmark-D2vzhSBC.js";import"./Heading-Bxz0tryo.js";import"./useHighlightedText-cpJ8B6bV.js";import"./ItemControls-DA5Yy7AS.js";import"./Badge-DYvIbN7v.js";import"./Tooltip-B8o2LWCL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-14k-yabz.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-2OJeU36d.js";import"./Fieldset-BN3377Nd.js";import"./index-DZJ03fJe.js";import"./Label-VN1m6SC8.js";import"./Input-BYE1y6gH.js";import"./input-fAELYQ1t.js";import"./SearchField-B-nnAALe.js";import"./MagnifyingGlass-BOvUZuLn.js";import"./FieldBase-COzHnWja.js";import"./Typography-CiUpHFvi.js";import"./useMenu-CE-qOAep.js";import"./index-B7mUU4Rd.js";import"./InformationSquare-y17ZYOyi.js";import"./useDropdownMenuController-D8Yozs_o.js";import"./Plus-ChI102rs.js";import"./Dropdown-CWKVFS9V.js";import"./ChevronUpDown-Dyy32e_j.js";import"./ButtonGroup-Cm_Y-nHl.js";import"./ButtonGroupDivider-DGgAQ05Q.js";import"./ToolbarMenu---rWQzXB.js";import"./ToolbarSearch-DaAb4thF.js";import"./Paperclip-CBI79N46.js";import"./Eye-ChvtAiWF.js";import"./MenuHamburger-CAdTjq6-.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-ChrWDnnK.js";import"./Flex-DcepQHCt.js";const Tt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const gt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,gt as __namedExportsOrder,Tt as default};
