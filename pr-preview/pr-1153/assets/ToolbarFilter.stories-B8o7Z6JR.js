import{r as c,j as t}from"./iframe-CHILL5tZ.js";import{S as u}from"./SelectDateFilter-hAEINB_O.js";import{a as s,T as m}from"./Toolbar-wTmE4DS7.js";import{i as l,u as p,t as b}from"./example.hooks-BKlaNz1S.js";import{B as F}from"./Button-BhP7fHb4.js";import{S}from"./Section-DgehUQNo.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DLyXjA6N.js";import"./useId-CxjMVxT3.js";import"./Datepicker-wNJhqI9R.js";import"./index-D0JdUEkn.js";import"./ChevronRight-C2HiJ5JV.js";import"./MenuListItem-D8HsXFkE.js";import"./MenuItem-DaU4SSfC.js";import"./ItemMedia-BDXURQdO.js";import"./XMark-DQxCv5Yn.js";import"./Avatar-BEHn6hs3.js";import"./Skeleton-BX9QnUCy.js";import"./AvatarGroup-9Hd8MZfa.js";import"./Icon-DK0uLDnk.js";import"./Checkmark-nA2yaQnq.js";import"./Heading-B80Wap_u.js";import"./useHighlightedText-sycLCu80.js";import"./ItemControls-Okligr0R.js";import"./Badge-DHaboY8X.js";import"./Tooltip-gqkYQCXG.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BXZnV1dm.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-D8Av5awU.js";import"./Fieldset-Dl54YQ74.js";import"./index-ASxRsC3U.js";import"./Label-BmNpXiOX.js";import"./Input-F-jc7mgY.js";import"./input-BiYbaGgt.js";import"./SearchField-DpxDm5xW.js";import"./MagnifyingGlass-Z3jVe5X3.js";import"./FieldBase-DGrlYpX7.js";import"./Typography-BDbDV84g.js";import"./useMenu-CBS-gOUF.js";import"./InformationSquare-qW6C7jKR.js";import"./useDropdownMenuController-BYzUrJMj.js";import"./Plus-V3d-3j45.js";import"./Dropdown-riFJwjzV.js";import"./ChevronUpDown-D1AR4jxs.js";import"./ButtonGroup-85VHWPxh.js";import"./ButtonGroupDivider-BzY6J6Jz.js";import"./ToolbarMenu-CiEtpkyk.js";import"./ToolbarSearch-Ce8v13vg.js";import"./Paperclip-gwDySizp.js";import"./Eye-CDB98-Nu.js";import"./MenuHamburger-DS0wNl2W.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-BIgBCVIC.js";import"./Flex-A7S1F2F0.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
