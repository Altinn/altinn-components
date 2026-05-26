import{r as c,j as t}from"./iframe-CdkbiINU.js";import{S as u}from"./SelectDateFilter-RS0uOGqb.js";import{a as s,T as m}from"./Toolbar-FEoFjgSu.js";import{i as l,u as p,t as b}from"./example.hooks-DCHacmuk.js";import{B as F}from"./Button-DbqBa2Ra.js";import{S}from"./Section-CxpgG4VY.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-C2yeCY3h.js";import"./useId-BBNwfwR-.js";import"./Datepicker-Dx6uf6xx.js";import"./index-ClUlC5r_.js";import"./ChevronRight-WcqCaCSB.js";import"./MenuListItem-CwD3vAur.js";import"./MenuItem-DuLXc_4R.js";import"./ItemMedia-Mj1KUH0F.js";import"./XMark-CXTea0I2.js";import"./Avatar-Dqj4y4ce.js";import"./Skeleton-DNrLKFK9.js";import"./AvatarGroup-XhgZMwS_.js";import"./Icon-Cn1mWE7M.js";import"./Checkmark-B8HStk1Z.js";import"./Heading-pV_B_Yzg.js";import"./useHighlightedText-Z8eL_Nst.js";import"./ItemControls-2WNlOUKw.js";import"./Badge-Nnj4VnpH.js";import"./Tooltip-CkfZKf5K.js";import"./tooltip-ClrKYCC2.js";import"./MenuListHeading-DRaOclWG.js";import"./Fieldset-CiaDAd-z.js";import"./Label-DOiiUdXJ.js";import"./Input-CXgAq3E9.js";import"./SearchField-D9zkHyRI.js";import"./MagnifyingGlass-MF_Zjyww.js";import"./FieldBase-CADFK9ds.js";import"./Typography-CbNgqrog.js";import"./useMenu-Cw7IEDma.js";import"./index-D4P432Vi.js";import"./InformationSquare-lXhFqiHS.js";import"./useDropdownMenuController-DY23hdKX.js";import"./Plus-BlZ2V0ro.js";import"./Dropdown-B3ZWUXYU.js";import"./ChevronUpDown-B4AZ7UWd.js";import"./ButtonGroup-rFZEcV2R.js";import"./ButtonGroupDivider-Buidn4Ls.js";import"./ToolbarMenu-Bc9cebGQ.js";import"./ToolbarSearch-DGxkCR-N.js";import"./Paperclip-BlHBNGLa.js";import"./Eye-CfgAd0P-.js";import"./MenuHamburger-CYCqXYse.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./Flex-B60SO79o.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const St=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,St as __namedExportsOrder,Ft as default};
