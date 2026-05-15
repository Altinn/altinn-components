import{r as c,j as t}from"./iframe-CZMLD2fe.js";import{S as u}from"./SelectDateFilter-CY9fZNx9.js";import{a as s,T as m}from"./Toolbar-BFeDuU1G.js";import{i as l,u as p,t as b}from"./example.hooks-CzPGo2Bl.js";import{B as F}from"./Button-z0ZioQWK.js";import{S}from"./Section-B1dSFwPq.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CgL76AqI.js";import"./useId-Dmu9AgSD.js";import"./Datepicker-CVi4mSy6.js";import"./index-iGjPLQV7.js";import"./ChevronRight-7zRCvc5i.js";import"./MenuListItem-DDLkxBzW.js";import"./MenuItem-BQTFtYYp.js";import"./ItemMedia-CE_zTi22.js";import"./XMark-BBRiAlI8.js";import"./Avatar-DzGFAhDt.js";import"./Skeleton-D52MvI5U.js";import"./AvatarGroup-sNwukvT8.js";import"./Icon-CbE8dCFV.js";import"./Checkmark-CgCD7cxb.js";import"./Heading-5rlhad8Q.js";import"./useHighlightedText-CmlayFSP.js";import"./ItemControls-CSi2HZsx.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-BJ84Vv6-.js";import"./Fieldset-CaCWnSVo.js";import"./index-DZ8nICMn.js";import"./Label-C0JPWrbN.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./SearchField-hPGSgF9W.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./FieldBase-bsYRos9m.js";import"./Typography-BegW4Ytw.js";import"./useMenu-CEG7UMF2.js";import"./index-CQNCMx5k.js";import"./InformationSquare-BauCIT4L.js";import"./useDropdownMenuController-Dm3dzHc4.js";import"./Plus-2Q0T7s3R.js";import"./Dropdown-Bx0d8Qo_.js";import"./ChevronUpDown-CYrJfMm2.js";import"./ButtonGroup-lppFG0T2.js";import"./ButtonGroupDivider-Bg56f6eB.js";import"./ToolbarMenu-Dtr-9pM9.js";import"./ToolbarSearch-Bxg4abWw.js";import"./Paperclip-D3K3BZed.js";import"./Eye-B_n82EES.js";import"./MenuHamburger-CM7Wkn6q.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-CZknkFMR.js";import"./Flex-oWhCvzqt.js";const Tt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const gt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,gt as __namedExportsOrder,Tt as default};
