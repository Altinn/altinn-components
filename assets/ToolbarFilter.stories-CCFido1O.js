import{r as c,j as t}from"./iframe-Dj7Cj6th.js";import{S as u}from"./SelectDateFilter-BdHiSIf7.js";import{a as s,T as m}from"./Toolbar-PeLOXVy6.js";import{i as l,u as p,t as b}from"./example.hooks-CzkhgRfi.js";import{B as F}from"./Button-CSjIyK1w.js";import{S}from"./Section-H920sslu.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BweBUO2a.js";import"./useId-ByPI58ip.js";import"./Datepicker-C8RPueCa.js";import"./index-CddsnUaU.js";import"./ChevronRight-DoyD_DMf.js";import"./MenuListItem-DHv3z0ag.js";import"./MenuItem-jJDtIeVN.js";import"./ItemMedia-ClCn_Pwn.js";import"./XMark-CFOHUWx0.js";import"./Avatar-BthLZDba.js";import"./Skeleton-D2EJPpRT.js";import"./AvatarGroup-CKpZaMLG.js";import"./Icon-ClXNgiA2.js";import"./Checkmark-BGb3abOV.js";import"./Heading-CYqNNVt0.js";import"./useHighlightedText-BEM-o_8x.js";import"./ItemControls-Dm3s3qCz.js";import"./Badge-CSrzMhOz.js";import"./Tooltip-DHRUZs7M.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-YImFlbky.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-BcZUdaLF.js";import"./Fieldset-5pp9MIr3.js";import"./index-DyfHnAhP.js";import"./Label-knK18nOg.js";import"./Input-xlo_b8Ui.js";import"./input-Dg3xXmgC.js";import"./SearchField-IAcAy2TF.js";import"./MagnifyingGlass-CkAWdXLw.js";import"./FieldBase-1wPahpAR.js";import"./Typography-NJpqcBZB.js";import"./useMenu-CZ8hjrPb.js";import"./InformationSquare-BF5i3vGC.js";import"./useDropdownMenuController-BLxYI4kb.js";import"./Plus-CoZtisp_.js";import"./Dropdown-DRhtJuEv.js";import"./ChevronUpDown-B9vT5o0M.js";import"./ButtonGroup-FtWKGzEG.js";import"./ButtonGroupDivider-BXtv9C3u.js";import"./ToolbarMenu-DolwSrkD.js";import"./ToolbarSearch-wYmwOicS.js";import"./Paperclip-DnvKAF-u.js";import"./Eye-j3RHtwGN.js";import"./MenuHamburger-B1BfC5RA.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-BKLxmUvr.js";import"./Flex-BFoeedqd.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
