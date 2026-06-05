import{aa as c,a7 as t,c as u}from"./iframe-DWxW88Wb.js";import{S as b}from"./SelectDateFilter-DB7xf8UT.js";import{a as s,T as l}from"./Toolbar-UK4EUwDV.js";import{i as m,a as p,t as F}from"./example.hooks-DLmMIRY0.js";import{S}from"./Section-B1-gfm2g.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CaAjdfCo.js";import"./MenuItem-CTR_r1KI.js";import"./ItemMedia-pWda_jSz.js";import"./Avatar-C1EBlka3.js";import"./AvatarGroup-BXtad5OG.js";import"./Checkmark-BMNSyflA.js";import"./ItemLabel-CjOWrvlD.js";import"./Heading-Dg7_b6ZQ.js";import"./useHighlightedText-Kme-_nwy.js";import"./ItemControls-uvaqS71K.js";import"./Badge-Dmc2yD_5.js";import"./Tooltip-Cxw5k6PG.js";import"./ChevronRight-CaZE672G.js";import"./ArrowUndo-BNbnSrnn.js";import"./MenuListHeading-COGZjwEu.js";import"./Fieldset-Bz92yUMt.js";import"./Field-nEx1TRai.js";import"./Label-EU_RFMoG.js";import"./Input-CPaqJzda.js";import"./Datepicker-D3lt4fe3.js";import"./SearchField-DiX0tG9c.js";import"./MagnifyingGlass-DeszhIH4.js";import"./FieldBase-CIL3pXPs.js";import"./Typography-Dvuik0pJ.js";import"./useMenu-DXA38xVt.js";import"./index-BBaxa0Qn.js";import"./InformationSquare-BIrp2N6S.js";import"./useDropdownMenuController-D6SwXekY.js";import"./Dropdown-CCIsf4ws.js";import"./Plus-DPgCKFUP.js";import"./ButtonGroup-2XmunmNq.js";import"./ButtonGroupDivider-yFjiJINn.js";import"./ChevronUpDown-BVSifUrF.js";import"./ToolbarMenu-BrBQHBGp.js";import"./ToolbarSearch-CEdhKPLF.js";import"./Paperclip-77VzahwE.js";import"./Eye-cMaAT_DO.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DJLRFmM-.js";import"./Flex-DNJfc4Fp.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
