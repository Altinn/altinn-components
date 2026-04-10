import{r as c,j as t}from"./iframe-DpqvNfuX.js";import{S as u}from"./SelectDateFilter-CMFdUw4l.js";import{a as s,T as m}from"./Toolbar-Bv75vAlz.js";import{i as l,u as p,t as b}from"./example.hooks-Dd1CVuUr.js";import{B as F}from"./Button-2gJDIHFD.js";import{S}from"./Section-CtbhQhiL.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Bd_HvD5c.js";import"./useId-BXmkKvJa.js";import"./Datepicker-D2lK--xS.js";import"./index-Ct2h27FF.js";import"./ChevronRight-l4sUB0S3.js";import"./MenuListItem-ydSncMmo.js";import"./MenuItem-DsVjpCyh.js";import"./ItemMedia-UuJJBLbY.js";import"./XMark-D5GqdRxj.js";import"./Avatar-BnDDwZQL.js";import"./Skeleton-CUXlhXSK.js";import"./AvatarGroup-fDT9dP8b.js";import"./Icon-DaddCVMS.js";import"./Checkmark-B0EPfKD4.js";import"./Heading-CsYSWfhV.js";import"./useHighlightedText-CsoqNVCh.js";import"./Badge-DH_aKElc.js";import"./MenuListHeading-C8YiegkQ.js";import"./Fieldset-BL2k2th9.js";import"./lite-DaUVFjkg.js";import"./index-C4Ss_iIN.js";import"./use-merge-refs-C3UJEavz.js";import"./Label-DGyVWTo1.js";import"./Input-CtghcgQm.js";import"./input-AC6H3fN5.js";import"./SearchField-B4PsSxTf.js";import"./MagnifyingGlass-oMKY7BYp.js";import"./FieldBase-CwbZRzDX.js";import"./Typography-7MtHaiXa.js";import"./useMenu-CL8JxMzd.js";import"./InformationSquare-x_nyg8Lo.js";import"./useDropdownMenuController-BsIinftt.js";import"./Plus-i3IwH-31.js";import"./Dropdown-g5xLWPPm.js";import"./ChevronUpDown-C9vO7jrH.js";import"./ButtonGroup-DLg5nJZL.js";import"./ButtonGroupDivider-DJwUN8yr.js";import"./Tooltip-BWGqnLO5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-CKcLoAWM.js";import"./ToolbarSearch-BKrHqiRC.js";import"./Paperclip-C-wMqTaU.js";import"./Eye-ztLu6AXR.js";import"./MenuHamburger-CdFk3dXA.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-B0qBlS1p.js";import"./Flex-BVIzbH2w.js";const xt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
