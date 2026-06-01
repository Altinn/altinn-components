import{aa as c,a7 as t,c as u}from"./iframe-cf7ESM3q.js";import{S as b}from"./SelectDateFilter-DTcwPq84.js";import{a as s,T as l}from"./Toolbar-DhaaRTbo.js";import{i as m,a as p,t as F}from"./example.hooks-wQanRc9l.js";import{S}from"./Section-DoG5yznh.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-DNMoEwuU.js";import"./MenuItem-CoaVEq9r.js";import"./ItemMedia-AVOIN5K1.js";import"./Avatar-0G-pd6NH.js";import"./AvatarGroup-Y1BTiBK0.js";import"./Checkmark-DdKsblJH.js";import"./ItemLabel-DJAOCnpM.js";import"./Heading-CpNWi06X.js";import"./useHighlightedText-D_wbJNXZ.js";import"./ItemControls-D6SRHxpV.js";import"./Badge-CCa-9q1v.js";import"./Tooltip-B9_Ir4Cy.js";import"./ChevronRight-Dy1T7Tgm.js";import"./ArrowUndo-CMsTXw-F.js";import"./MenuListHeading-0GDPIxXY.js";import"./Fieldset-D5MaAmbj.js";import"./Field-DXqmeB6L.js";import"./Label-8tLoYVxb.js";import"./Input-DT4mbTp0.js";import"./Datepicker-DwsQxHUS.js";import"./SearchField-B1yhNL-S.js";import"./MagnifyingGlass-BpT1SLqI.js";import"./FieldBase-D5M9JHnI.js";import"./Typography-C5h-r7_j.js";import"./useMenu-_swqW8No.js";import"./index-BVMz6Wm9.js";import"./InformationSquare-DtaIp5wP.js";import"./useDropdownMenuController-BITRw-0y.js";import"./Dropdown-pCaEySNe.js";import"./Plus-DZ3k40hQ.js";import"./ButtonGroup-7_JFosKC.js";import"./ButtonGroupDivider-C563b8RX.js";import"./ChevronUpDown-hVantTNu.js";import"./ToolbarMenu-Blr6fS0j.js";import"./ToolbarSearch-ByrsgbD8.js";import"./Paperclip-BpZjcFPO.js";import"./Eye-C8rWw0oW.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-34tTEjhH.js";import"./Flex-BG_p9pKV.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
