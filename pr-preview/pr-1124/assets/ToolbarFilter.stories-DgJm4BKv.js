import{r as c,j as t}from"./iframe-C30XMp4u.js";import{S as u}from"./SelectDateFilter-B7BM-lIb.js";import{a as s,T as m}from"./Toolbar-qbT0YoZ4.js";import{i as l,u as p,t as b}from"./example.hooks-d98w33kK.js";import{B as F}from"./Button-DDYo0e3Y.js";import{S}from"./Section-DJhGIaQb.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DCkDtO0Z.js";import"./useId-k4Xjw1TB.js";import"./Datepicker-BtGlYbX3.js";import"./index-Dfjgmy9H.js";import"./ChevronRight-cMtudnfA.js";import"./MenuListItem-Dweo6pop.js";import"./MenuItem-BItckqMb.js";import"./ItemMedia-DZiSht8H.js";import"./XMark-ZCF0kQw6.js";import"./Avatar-md5Lcy6_.js";import"./Skeleton-DYu3bsVd.js";import"./AvatarGroup-BxUIiam6.js";import"./Icon-BW7eZq3t.js";import"./Checkmark-BHVaOMRl.js";import"./Heading-r7KrHQRq.js";import"./useHighlightedText-BcdufPkD.js";import"./ItemControls-XLXkfke2.js";import"./Badge-BL5WZhsc.js";import"./MenuListHeading-0U1jptlM.js";import"./Fieldset-DDNOg6Y7.js";import"./lite-DaUVFjkg.js";import"./index-MPuYdx8K.js";import"./use-merge-refs-DdAPjJhd.js";import"./Label-CZ9Sm67x.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./SearchField-GqHOGaRS.js";import"./MagnifyingGlass-BcLoywmE.js";import"./FieldBase-Cg7qaDyY.js";import"./Typography-C7Aiwmst.js";import"./useMenu-HLwWT2ab.js";import"./InformationSquare-Cu6RA9m9.js";import"./useDropdownMenuController-BEzXPzCy.js";import"./Plus-zIuJSXr8.js";import"./Dropdown-MMgMxLyt.js";import"./ChevronUpDown-7yy58H4K.js";import"./ButtonGroup-B8wqqWfc.js";import"./ButtonGroupDivider-BoJnk5BU.js";import"./Tooltip-BkHTwdrx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-C0WyX5iw.js";import"./ToolbarSearch-wO_rsMns.js";import"./Paperclip-BzWyAbZP.js";import"./Eye-CAhWVSdJ.js";import"./MenuHamburger-C7Jlfysl.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-vIDiYGt4.js";import"./Flex-Olz8YtsP.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
