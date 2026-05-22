import{r as c,j as t}from"./iframe-C6Awlou2.js";import{S as u}from"./SelectDateFilter-CGNsyHNE.js";import{a as s,T as m}from"./Toolbar-BSEJGUYJ.js";import{i as l,u as p,t as b}from"./example.hooks-Kj3drvHN.js";import{B as F}from"./Button-xDUaTd0f.js";import{S}from"./Section-Bo2XNiOH.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CHAtcjGp.js";import"./useId-InpKFtFj.js";import"./Datepicker-CtrbcAcB.js";import"./index-DlBZqmFk.js";import"./ChevronRight-BPFGJ1iV.js";import"./MenuListItem-DEkjbPAb.js";import"./MenuItem-DvRDzq7X.js";import"./ItemMedia-C094egTG.js";import"./XMark-BEbAfGHw.js";import"./Avatar-CJAvXADO.js";import"./Skeleton-Dzw9idTE.js";import"./AvatarGroup-CCkWNWoM.js";import"./Icon-DNxmTYNY.js";import"./Checkmark-dLQcEakJ.js";import"./Heading-CwC0m1gc.js";import"./useHighlightedText-BOeqc4_T.js";import"./ItemControls-vVSkFb-5.js";import"./Badge-4PTsP983.js";import"./Tooltip-CsuAugEU.js";import"./tooltip-wBWP-9p3.js";import"./MenuListHeading-0XPhJCtv.js";import"./Fieldset-Dt4w9DES.js";import"./Label-C48-SpFn.js";import"./Input-DYyIZxUH.js";import"./SearchField-BUnYpq_7.js";import"./MagnifyingGlass-CS4fCaYb.js";import"./FieldBase-D62sKxwt.js";import"./Typography-B5eitD86.js";import"./useMenu-CAczdzUV.js";import"./index-C-MjzqYY.js";import"./InformationSquare-DNjiq8ws.js";import"./useDropdownMenuController-lE7_h4w8.js";import"./Plus-CQfWxjRv.js";import"./Dropdown-A06NMf9H.js";import"./ChevronUpDown-ge_2OXZE.js";import"./ButtonGroup-wXquxLDR.js";import"./ButtonGroupDivider-o9_G-o4g.js";import"./ToolbarMenu-CPF48JxQ.js";import"./ToolbarSearch-BoGK01XM.js";import"./Paperclip-2zzMkfO0.js";import"./Eye-B6PTDSFS.js";import"./MenuHamburger-BcKlYS8F.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./Flex-CdwLgxBs.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
