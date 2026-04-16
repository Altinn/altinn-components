import{r as c,j as t}from"./iframe-qDHSBZ_X.js";import{S as u}from"./SelectDateFilter-CzBFoFex.js";import{a as s,T as m}from"./Toolbar-iWE8b0_i.js";import{i as l,u as p,t as b}from"./example.hooks-CXadrKLq.js";import{B as F}from"./Button-DJMfIG2l.js";import{S}from"./Section-BGNwMxU-.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CMxvcs3T.js";import"./useId-DLE_nI5l.js";import"./Datepicker-CceKwhBG.js";import"./index-DTh2bawh.js";import"./ChevronRight-Dusr5JiS.js";import"./MenuListItem-BPMBfOBa.js";import"./MenuItem-CYIZHSHo.js";import"./ItemMedia-p3tZByS2.js";import"./XMark-D8iHP3Cp.js";import"./Avatar-BNcU10On.js";import"./Skeleton-CJ3n2_6V.js";import"./AvatarGroup-CDcb8Qnp.js";import"./Icon-BDVkMuHy.js";import"./Checkmark-BOxDKZpX.js";import"./Heading-D2BacHeJ.js";import"./useHighlightedText-D75SWcvd.js";import"./ItemControls-Bd_Ry2Op.js";import"./Badge-CmtcZ1do.js";import"./MenuListHeading-CFSESgmr.js";import"./Fieldset-fceRu4C4.js";import"./lite-DaUVFjkg.js";import"./index-C32uHHVZ.js";import"./use-merge-refs-BMfrfQuo.js";import"./Label-UpgatIiv.js";import"./Input-ChlNPyEa.js";import"./input-CNv7eEBO.js";import"./SearchField-owOVnt34.js";import"./MagnifyingGlass-52kli1F6.js";import"./FieldBase-36tTBvzs.js";import"./Typography-DhQz7tKb.js";import"./useMenu-5iviLK-9.js";import"./InformationSquare-ClYcp41K.js";import"./useDropdownMenuController-CkPbLtTM.js";import"./Plus-BXcVwr4C.js";import"./Dropdown-zJkG990V.js";import"./ChevronUpDown-BxTSf755.js";import"./ButtonGroup-D3OFsAa4.js";import"./ButtonGroupDivider-DDSk5KKM.js";import"./Tooltip-gFU6qfTf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-C-L-fQJX.js";import"./ToolbarSearch-C00ib8cC.js";import"./Paperclip-C3GpGrWg.js";import"./Eye-krQJbsJx.js";import"./MenuHamburger-DzXQ83g6.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-CfQ7EAt1.js";import"./Flex-BTOiCOb2.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
