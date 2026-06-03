import{aa as c,a7 as t,c as u}from"./iframe-Dmn_-H53.js";import{S as b}from"./SelectDateFilter-WKxXdsXJ.js";import{a as s,T as l}from"./Toolbar-BusIapvv.js";import{i as m,a as p,t as F}from"./example.hooks-INZVBkTg.js";import{S}from"./Section-B0K1LM20.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CwZ16ivE.js";import"./MenuItem-C30u_q0-.js";import"./ItemMedia-D_bOU9XF.js";import"./Avatar-DRCSmXVk.js";import"./AvatarGroup-D0qXNceQ.js";import"./Checkmark-DzxOHVu0.js";import"./ItemLabel-ejtJzCEp.js";import"./Heading-mFrUmf7m.js";import"./useHighlightedText-CD-cx98y.js";import"./ItemControls-CbvyOb0R.js";import"./Badge-De6DPsXj.js";import"./Tooltip-CdtWGkOh.js";import"./ChevronRight-Wr9L-VUi.js";import"./ArrowUndo-bK1i10ui.js";import"./MenuListHeading-BrW5zaeP.js";import"./Fieldset-DkydaSct.js";import"./Field-1tw-cTWp.js";import"./Label-D7CtZtsQ.js";import"./Input-CiIUlzDr.js";import"./Datepicker-CU2ZrNSp.js";import"./SearchField-DeTed8Dk.js";import"./MagnifyingGlass-CJgpPnEh.js";import"./FieldBase-BLinraZG.js";import"./Typography-BUxrbwUx.js";import"./useMenu-B_9AoNot.js";import"./index-Qm016dy0.js";import"./InformationSquare-DAE6V11Y.js";import"./useDropdownMenuController-DHTHwr26.js";import"./Dropdown-DpD8qCpr.js";import"./Plus-CqXOqTKR.js";import"./ButtonGroup-CPlQwmGd.js";import"./ButtonGroupDivider-D0hGjblB.js";import"./ChevronUpDown-FEbwmu8E.js";import"./ToolbarMenu-BpYXaZ67.js";import"./ToolbarSearch-Dp9Vo43V.js";import"./Paperclip-CHL6y2ts.js";import"./Eye-BALC2GXS.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CSkbsTiY.js";import"./Flex-Dt5U6DKy.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
