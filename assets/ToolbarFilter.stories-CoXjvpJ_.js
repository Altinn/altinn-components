import{r as c,j as t}from"./iframe-Nkxls2w0.js";import{S as u}from"./SelectDateFilter-DCgLTJJR.js";import{a as s,T as m}from"./Toolbar-D-GGCzOD.js";import{i as l,u as p,t as b}from"./example.hooks-CEyrLc0z.js";import{B as F}from"./Button-Ds9vuGVD.js";import{S}from"./Section-DtOfuDKh.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DCCluNxu.js";import"./useId-C8J5yFeN.js";import"./Datepicker-DMzYWJ0Y.js";import"./index-M4TkGQLb.js";import"./ChevronRight-Bcpq3qt2.js";import"./MenuListItem-Cfh5A6HZ.js";import"./MenuItem-edMrv6Qw.js";import"./ItemMedia-CsEr1Zw1.js";import"./XMark-D-ALqV0n.js";import"./Avatar-BDGJojEv.js";import"./Skeleton-DNS4c1Rp.js";import"./AvatarGroup-BM9A-Bel.js";import"./Icon-qDX4JAC4.js";import"./Checkmark-DHusaxnp.js";import"./Heading-AZ4WQ_-Y.js";import"./useHighlightedText-BtUjP4Uj.js";import"./ItemControls-BH6jrH_o.js";import"./Badge-Ipym1qsE.js";import"./Tooltip-sxtJg_qK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-NASGeav9.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-CEofuJGo.js";import"./Fieldset-D6B-Qjte.js";import"./index-Bvwkp7W_.js";import"./Label-DRBFvXSF.js";import"./Input-BDHdvqI3.js";import"./input-MPZybUVd.js";import"./SearchField-Bb3Ffka2.js";import"./MagnifyingGlass-k_g2FxNc.js";import"./FieldBase-Drb41XPf.js";import"./Typography-CZZfCvh6.js";import"./useMenu-WCeLZ4vF.js";import"./InformationSquare-zR5D--CT.js";import"./useDropdownMenuController-BB48Tjgy.js";import"./Plus-DIAMQcGN.js";import"./Dropdown-D5aFsl9a.js";import"./ChevronUpDown-Cc1V6X6m.js";import"./ButtonGroup-HCy2ouFP.js";import"./ButtonGroupDivider-BRcd2kIA.js";import"./ToolbarMenu-D2G4eQ7e.js";import"./ToolbarSearch-Bt1qoil4.js";import"./Paperclip-CSwfMlvx.js";import"./Eye-CfWY8lE0.js";import"./MenuHamburger-RVcJ4Btq.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-CK59nDyy.js";import"./Flex-BbiGghB8.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
