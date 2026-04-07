import{r as c,j as t}from"./iframe-BTgHnb1V.js";import{S as u}from"./SelectDateFilter-C1aYvzG1.js";import{a as s,T as m}from"./Toolbar-DcawbsEg.js";import{i as l,u as p,t as b}from"./example.hooks-BCLpBqHH.js";import{B as F}from"./Button-Ccau3b8T.js";import{S}from"./Section-B92QpPhv.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-vJkbQsmL.js";import"./useId-DWidDjIe.js";import"./Datepicker-BG3qlN0m.js";import"./index-t_Anj6Qz.js";import"./ChevronRight-DEDRS1St.js";import"./MenuListItem-DKnhIWL6.js";import"./MenuItem-DLwUzMv1.js";import"./ItemMedia-BOGO8xTn.js";import"./XMark-DMQzhoj3.js";import"./Avatar-DpDT0aNa.js";import"./Skeleton-B3M39f3D.js";import"./AvatarGroup-4I2zgroj.js";import"./Icon-PY6OftAR.js";import"./Checkmark-jKAH024b.js";import"./Heading-Ca71xFkp.js";import"./useHighlightedText-DrZCsmQU.js";import"./Badge-sZl2g-is.js";import"./MenuListHeading-CfRWVBZN.js";import"./Fieldset-CUS2LJ5x.js";import"./lite-DaUVFjkg.js";import"./index-3lpPu1ww.js";import"./use-merge-refs-8A0H_t2p.js";import"./Label-DOnz6ye3.js";import"./Input-CFaRcvTR.js";import"./input-z_rArVKU.js";import"./SearchField-Dea1MzEn.js";import"./MagnifyingGlass-DQ3ccb4H.js";import"./FieldBase-B5jTEalp.js";import"./Typography-CR3zr5Vv.js";import"./useMenu-DSfKnhCX.js";import"./InformationSquare-BM_VTFR-.js";import"./useDropdownMenuController-DQ81-Fhy.js";import"./Plus-D5thgfNG.js";import"./Dropdown-Dca6GJ-b.js";import"./ChevronUpDown-Btx-mwnL.js";import"./ButtonGroup-CI4RwwaJ.js";import"./ButtonGroupDivider-DWFV_Mpd.js";import"./Tooltip-CnMb4V-4.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-CT8pNf2_.js";import"./ToolbarSearch-CMIi4eaQ.js";import"./Paperclip-_Rg2l9Nd.js";import"./Eye-BKDg19ej.js";import"./MenuHamburger-COTFwDMl.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-DAOqBeHz.js";import"./Flex-ujxLNWuk.js";const xt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const dt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,dt as __namedExportsOrder,xt as default};
