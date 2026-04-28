import{r as c,j as t}from"./iframe-DUgQHy5z.js";import{S as u}from"./SelectDateFilter-DOuaE_z1.js";import{a as s,T as m}from"./Toolbar-p94Aw-gr.js";import{i as l,u as p,t as b}from"./example.hooks-pdsu6u0F.js";import{B as F}from"./Button-DAj4Vb1f.js";import{S}from"./Section-BJevJr8H.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Dawpb3je.js";import"./useId-BEmmm-9F.js";import"./Datepicker-CbBkeULh.js";import"./index-CHKdKrFD.js";import"./ChevronRight-DcPr7c69.js";import"./MenuListItem-Cobo65pu.js";import"./MenuItem-rAhK0ZP8.js";import"./ItemMedia-CtpZg4yw.js";import"./XMark-CIC6hSAY.js";import"./Avatar-CQy8D3NB.js";import"./Skeleton-BWHbMU5J.js";import"./AvatarGroup-DAp73R1d.js";import"./Icon-D31Usj2D.js";import"./Checkmark-CEKDqcfc.js";import"./Heading-CGuufgH4.js";import"./useHighlightedText-BXy_Fo0F.js";import"./ItemControls-eEEzDso3.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-tN_UguZ4.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-USeQ6WLV.js";import"./Fieldset-BjkJQ7MW.js";import"./index-DtFuKRqq.js";import"./Label-B-nIzD7x.js";import"./Input-DxofbABb.js";import"./input-BKf2w74T.js";import"./SearchField-DrvAfAqD.js";import"./MagnifyingGlass-Bvm8HrPp.js";import"./FieldBase-B3m8Pe0B.js";import"./Typography-CInfIHKg.js";import"./useMenu-DKqXZTHj.js";import"./InformationSquare-C5uyE4ek.js";import"./useDropdownMenuController-DoVSojsp.js";import"./Plus-DMuAFtu8.js";import"./Dropdown-VwXyzPyy.js";import"./ChevronUpDown-qDB1OsEf.js";import"./ButtonGroup-Co0foBbC.js";import"./ButtonGroupDivider-DHIj-T3D.js";import"./ToolbarMenu-BzCt4Lt_.js";import"./ToolbarSearch-B9Ja8uVL.js";import"./Paperclip-D4bUtdbF.js";import"./Eye-BdTVDMAG.js";import"./MenuHamburger-BFRrh2Ww.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-D0axoqj3.js";import"./Flex-CL-SSZvT.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
