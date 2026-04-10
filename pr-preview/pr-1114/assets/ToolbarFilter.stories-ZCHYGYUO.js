import{r as c,j as t}from"./iframe-COdTICiz.js";import{S as u}from"./SelectDateFilter-BfKg7llZ.js";import{a as s,T as m}from"./Toolbar-Cg4ziSof.js";import{i as l,u as p,t as b}from"./example.hooks-CPKsCo9m.js";import{B as F}from"./Button-Dqoqvefk.js";import{S}from"./Section-Cld6nU2J.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BLH3jHa2.js";import"./useId-lT615UMD.js";import"./Datepicker-C4pd_Qqy.js";import"./index-eHSiAaoN.js";import"./ChevronRight-tPPKpYH4.js";import"./MenuListItem-BVxiRmRE.js";import"./MenuItem-Pij9KqE-.js";import"./ItemMedia-BN92MYHv.js";import"./XMark-CpgXVK2Q.js";import"./Avatar-30_b1gUS.js";import"./Skeleton-DCT9M7tY.js";import"./AvatarGroup-DMJoFLAP.js";import"./Icon-CpwjhC7D.js";import"./Checkmark-D_NJmpQs.js";import"./Heading-BXn08xBV.js";import"./useHighlightedText-FFYshbql.js";import"./ItemControls-DRloD8XX.js";import"./Badge-CTG2EWNm.js";import"./MenuListHeading-C74FO8PH.js";import"./Fieldset-B6uNUkGg.js";import"./lite-DaUVFjkg.js";import"./index-zPL8uGVu.js";import"./use-merge-refs-DMOZr-G2.js";import"./Label-Bw83ICjW.js";import"./Input-Dmsj72wJ.js";import"./input-DYzXaufk.js";import"./SearchField-DQWZ98wb.js";import"./MagnifyingGlass-BjGJbcBP.js";import"./FieldBase-CQukmgiw.js";import"./Typography-CRI9HVXo.js";import"./useMenu-C9hrnnrl.js";import"./InformationSquare-BF6iEl5i.js";import"./useDropdownMenuController-BmS2V_T_.js";import"./Plus-D6hG0ghA.js";import"./Dropdown-riK9lB0y.js";import"./ChevronUpDown-B9jBdQ1p.js";import"./ButtonGroup-BKCkWJMA.js";import"./ButtonGroupDivider-BGHFJh1m.js";import"./Tooltip-CFVYTWjg.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-D_qwmHta.js";import"./ToolbarSearch-BjQxAllS.js";import"./Paperclip-BfNNDqa4.js";import"./Eye-DR8-FhJ1.js";import"./MenuHamburger-CqtO9W0U.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-BvBLLivB.js";import"./Flex-BH1BXZbH.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
