import{r as c,j as t}from"./iframe-DDirkHus.js";import{S as u}from"./SelectDateFilter-mHEZNlOL.js";import{a as s,T as m}from"./Toolbar-CJNc-PPt.js";import{i as l,u as p,t as b}from"./example.hooks-BZrgA45F.js";import{B as F}from"./Button-CdMyOsNo.js";import{S}from"./Section-CUHbf36A.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-cRffdIA3.js";import"./useId-CVUrh2ea.js";import"./Datepicker-DKy07Xqq.js";import"./index-B2YDfdyU.js";import"./ChevronRight-BUOZMhwy.js";import"./MenuListItem-DoS1mSfo.js";import"./MenuItem-BsaYehiV.js";import"./ItemMedia-ZkVlWcbo.js";import"./XMark-DldqIUES.js";import"./Avatar-DMl0Fglw.js";import"./Skeleton-0VOrezcL.js";import"./AvatarGroup-CxNYw_3L.js";import"./Icon-Cv1R39O2.js";import"./Checkmark-MQqJd3cN.js";import"./Heading-s9P5sHvn.js";import"./useHighlightedText-CWfqHJQe.js";import"./ItemControls-CqR56LSR.js";import"./Badge-BMZjltw3.js";import"./Tooltip-Di80zHO_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CIAaUVpb.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-7XRfXaU1.js";import"./Fieldset-D58mDId3.js";import"./index-F2gU6D0V.js";import"./Label-9QWpQ8Bw.js";import"./Input-C9yDHhzX.js";import"./input-CQTkCXgP.js";import"./SearchField-CByF2bQh.js";import"./MagnifyingGlass-BGbR81wS.js";import"./FieldBase-BNjKJDB0.js";import"./Typography-Do8CAd45.js";import"./useMenu-DLxXpcV8.js";import"./InformationSquare-D3Ojtweu.js";import"./useDropdownMenuController-2ed30dPc.js";import"./Plus-DXvjiSe3.js";import"./Dropdown-CtjdzYco.js";import"./ChevronUpDown-BLnWhBGi.js";import"./ButtonGroup-B-c85YOq.js";import"./ButtonGroupDivider-CS2WBK-e.js";import"./ToolbarMenu-qeE8mxHQ.js";import"./ToolbarSearch-q7CgcguI.js";import"./Paperclip-CuA2Ouyz.js";import"./Eye-BKi6p1Ir.js";import"./MenuHamburger-lKI_Kf6L.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-CnVt3gpj.js";import"./Flex-CKMYHSxr.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
