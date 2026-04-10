import{r as c,j as t}from"./iframe-CfpleAaJ.js";import{S as u}from"./SelectDateFilter-CkY8dxBl.js";import{a as s,T as m}from"./Toolbar-CeA2H0SG.js";import{i as l,u as p,t as b}from"./example.hooks-Pa8rvmbq.js";import{B as F}from"./Button-DKJP6EaO.js";import{S}from"./Section-BT3IVwl3.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DqxrSKWI.js";import"./useId-CRfl8v3D.js";import"./Datepicker-BYYQd0rd.js";import"./index-C-ZlSrx2.js";import"./ChevronRight-F6vNJ-SN.js";import"./MenuListItem-Brl922Zx.js";import"./MenuItem-BvkuTBxq.js";import"./ItemMedia-BjhAIHdo.js";import"./XMark-Mr05NtnF.js";import"./Avatar-BBkC-qEC.js";import"./Skeleton-mkQz_xZ6.js";import"./AvatarGroup-vSwCjNL5.js";import"./Icon-DFklvQ48.js";import"./Checkmark-CwtLsQnH.js";import"./Heading-SalYmhoh.js";import"./useHighlightedText-Cf92T70c.js";import"./Badge-BZbseZdr.js";import"./MenuListHeading-BxaazMkW.js";import"./Fieldset-Bi9idR3x.js";import"./lite-DaUVFjkg.js";import"./index-CyGYnAy8.js";import"./use-merge-refs-0CqQhLRb.js";import"./Label-BNnaJGt0.js";import"./Input-B030prVc.js";import"./input-DZJGjPia.js";import"./SearchField-DaxLmgu-.js";import"./MagnifyingGlass-BxOwsnNq.js";import"./FieldBase-CjTWVBCf.js";import"./Typography-KZreLO9a.js";import"./useMenu-DmjfRwxC.js";import"./InformationSquare-H_9f907d.js";import"./useDropdownMenuController-D3ykFK6E.js";import"./Plus-Bt3Z18iu.js";import"./Dropdown-C9n-MsJ3.js";import"./ChevronUpDown-Cbzggt2f.js";import"./ButtonGroup-BCc6e8WW.js";import"./ButtonGroupDivider-C4vvU_mH.js";import"./Tooltip-Da4m4fbj.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DWCsc7RF.js";import"./ToolbarSearch-08sXOvBH.js";import"./Paperclip-j9WxE5UR.js";import"./Eye-xw8vy0ud.js";import"./MenuHamburger-CyesAGLw.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-bjClnooE.js";import"./Flex-Buw28yn5.js";const xt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
