import{r as c,j as t}from"./iframe-CEV_bE_y.js";import{S as u}from"./SelectDateFilter-C6FQ9RDw.js";import{a as s,T as m}from"./Toolbar-ptKb3HCx.js";import{i as l,u as p,t as b}from"./example.hooks-C_hbB-rV.js";import{B as F}from"./Button-Camg-mBZ.js";import{S}from"./Section-BaBnzd0n.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DgeaLVju.js";import"./useId-BHfJgDBc.js";import"./Datepicker-DToF6dNa.js";import"./index-CGpVDQnA.js";import"./ChevronRight-Dck0Zh1j.js";import"./MenuListItem-DvZVWiZY.js";import"./MenuItem-D6Egs8SC.js";import"./ItemMedia-DIGN_0r9.js";import"./XMark-ByuttVGc.js";import"./Avatar-Cf5aI0ZG.js";import"./Skeleton-cNOPtI7P.js";import"./AvatarGroup-DHx4XjXe.js";import"./Icon-BwPDmLy2.js";import"./Checkmark-D-WBqViW.js";import"./Heading-CjHEKkoD.js";import"./useHighlightedText-DdOlAfmT.js";import"./ItemControls-Dsxd0fj6.js";import"./Badge-BVMw9Rw0.js";import"./MenuListHeading-BxT-phiC.js";import"./Fieldset-CfS3hy3F.js";import"./lite-DaUVFjkg.js";import"./index-Cr9j_S5O.js";import"./use-merge-refs-Dqc3iuE1.js";import"./Label-Cb-tqHHM.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./SearchField-C9XAkfHX.js";import"./MagnifyingGlass-D6I6hP_d.js";import"./FieldBase-D397wWlI.js";import"./Typography-BMVOyH8m.js";import"./useMenu-EIG5MfCS.js";import"./InformationSquare-C-romZo4.js";import"./useDropdownMenuController-COGXRvNW.js";import"./Plus-D1UdPMNR.js";import"./Dropdown--G_NTa0P.js";import"./ChevronUpDown-H9bThSVZ.js";import"./ButtonGroup-D8NAEtXB.js";import"./ButtonGroupDivider-BOlJgfYF.js";import"./Tooltip-CRnr2OHK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-BUbt3wjZ.js";import"./ToolbarSearch-lvv6sAqk.js";import"./Paperclip-CeF6R1tA.js";import"./Eye-CKo_iGje.js";import"./MenuHamburger-DBcPb8fU.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-B-6jfb5R.js";import"./Flex-BZtJmJL5.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
