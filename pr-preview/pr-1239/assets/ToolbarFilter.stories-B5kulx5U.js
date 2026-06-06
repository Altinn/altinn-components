import{aa as c,a7 as t,c as u}from"./iframe-azCfu0oF.js";import{S as b}from"./SelectDateFilter-BEuU_aRn.js";import{a as s,T as l}from"./Toolbar-B5WPJejb.js";import{i as m,a as p,t as F}from"./example.hooks-DH2sGl96.js";import{S}from"./Section-cdVnHieS.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-BqMqYYtc.js";import"./MenuItem-DQe7kQkg.js";import"./ItemMedia-BlulKlBL.js";import"./Avatar-B6mgyHuO.js";import"./AvatarGroup-BFb9xeKa.js";import"./Checkmark-DMfmeL08.js";import"./ItemLabel-CkTR7bil.js";import"./Heading-BxIru1wm.js";import"./useHighlightedText-BA5UWeOm.js";import"./ItemControls-D1geOcjK.js";import"./Badge-CtmzFrHa.js";import"./Tooltip-DFhjbzqi.js";import"./ChevronRight-DmbA9yvG.js";import"./ArrowUndo-DFHXaMj5.js";import"./MenuListHeading-Be6eRNXB.js";import"./Fieldset-Cpu1NhxZ.js";import"./Field-DqJ_4ymP.js";import"./Label-Fg6nLSp0.js";import"./Input-B4WsPqAp.js";import"./Datepicker-BjCCPfmL.js";import"./SearchField-BxcNLwFn.js";import"./MagnifyingGlass-sqIKuSMh.js";import"./FieldBase-CGNAcfuA.js";import"./Typography-CWMVViTm.js";import"./useMenu-BCjKWSQ9.js";import"./index-BVE0v-uN.js";import"./InformationSquare-jmbeCJCU.js";import"./useDropdownMenuController-Ds5tbgH_.js";import"./Dropdown-CZ8Ag1Ok.js";import"./Plus-BRb5Dr-V.js";import"./ButtonGroup-n2_tAFRz.js";import"./ButtonGroupDivider-pw-6OYtl.js";import"./ChevronUpDown-BeVvnKq-.js";import"./ToolbarMenu-CZsZgWTt.js";import"./ToolbarSearch-WBGy0rj6.js";import"./Paperclip-zjNVtAuJ.js";import"./Eye-D74jgDxM.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-8q16ML3A.js";import"./Flex-Dtc9ln1d.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
