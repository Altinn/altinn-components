import{r as c,j as t}from"./iframe-BNDruhPA.js";import{S as u}from"./SelectDateFilter-B4oLSVgd.js";import{a as s,T as m}from"./Toolbar-BZloikbE.js";import{i as l,u as p,t as b}from"./example.hooks-C7j_gVXn.js";import{B as F}from"./Button-CaDKAluY.js";import{S}from"./Section-CcOIv3Qj.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-TNM9HjKV.js";import"./useId-28rL4Hsl.js";import"./Datepicker-BtKQHcKp.js";import"./index-JM42q3xD.js";import"./ChevronRight-Bcu8s-U3.js";import"./MenuListItem-DJZ7kLfZ.js";import"./MenuItem-Zvnz-i4w.js";import"./ItemMedia-C5U6F78e.js";import"./XMark-vbUnhqfT.js";import"./Avatar-Bc7K3VQ6.js";import"./Skeleton-3vFplc_z.js";import"./AvatarGroup-CBYJn5rG.js";import"./Icon-Ch0vKaKK.js";import"./Checkmark-BnLjHgWq.js";import"./Heading-C1Pb_LrU.js";import"./useHighlightedText-Bss46XCz.js";import"./ItemControls-nx23Lp4C.js";import"./Badge-e7-dfLSt.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-DHcrFN31.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-CJCU8c8j.js";import"./Fieldset-DP0tXg_B.js";import"./index-BuvBvGLs.js";import"./Label-DEPud0Ho.js";import"./Input-Bq2zza5V.js";import"./input-CeK3s4nJ.js";import"./SearchField-BS2BtTJs.js";import"./MagnifyingGlass-BEj5aS_0.js";import"./FieldBase-CqddQ4KB.js";import"./Typography-0VzQ_bGw.js";import"./useMenu-BrVLonhI.js";import"./InformationSquare-BrTKrkbD.js";import"./useDropdownMenuController-C1OwOjFZ.js";import"./Plus-BN_WRMVc.js";import"./Dropdown-nm23L0U7.js";import"./ChevronUpDown-Biv7c8Vz.js";import"./ButtonGroup-Cj9A7v4t.js";import"./ButtonGroupDivider-B-Z71K8b.js";import"./ToolbarMenu-DOZLhIwW.js";import"./ToolbarSearch-CEz8Ql-T.js";import"./Paperclip-CE94lwKo.js";import"./Eye-BZ0msvGF.js";import"./MenuHamburger-DxE3fxe3.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-Bu4lXR2T.js";import"./Flex-DdLGZodm.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
