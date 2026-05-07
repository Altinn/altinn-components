import{r as c,j as t}from"./iframe-V8BRfBgT.js";import{S as u}from"./SelectDateFilter-e1UEyJSy.js";import{a as s,T as m}from"./Toolbar-COw40rPO.js";import{i as l,u as p,t as b}from"./example.hooks-BEGq6OnV.js";import{B as F}from"./Button-BlxzDMPI.js";import{S}from"./Section-BCm3_cLa.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-ZeGtF0l8.js";import"./useId-Cpax_hNq.js";import"./Datepicker-Z_2GnQNC.js";import"./index-Dg3z2A9f.js";import"./ChevronRight-Cz_uty1S.js";import"./MenuListItem-Ckqn-jsk.js";import"./MenuItem-DQUORZa0.js";import"./ItemMedia-C3tA4Zzy.js";import"./XMark-C45HvrEl.js";import"./Avatar-BDDvrYzF.js";import"./Skeleton-BQtaEJM-.js";import"./AvatarGroup-KHWc8S2T.js";import"./Icon-BWOTtVf8.js";import"./Checkmark-BKwfqVUb.js";import"./Heading-CGSCg4GY.js";import"./useHighlightedText-DnT87ATC.js";import"./ItemControls-BctCfWNT.js";import"./Badge-Bf3suXAP.js";import"./Tooltip-D0XBkrvV.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs--fAMpcSQ.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-nXDmyZ7G.js";import"./Fieldset-BnDieKGw.js";import"./index-ByKBsU4r.js";import"./Label-DdQ1zxpY.js";import"./Input-zOuJx9ZS.js";import"./input-1VpPOyjR.js";import"./SearchField-D2AXVYp0.js";import"./MagnifyingGlass-DvXaPbUD.js";import"./FieldBase-DENJ-wBn.js";import"./Typography-BiIpQq_S.js";import"./useMenu-D2cFOQcG.js";import"./index-84oeY8HP.js";import"./InformationSquare-Bxq9CYlT.js";import"./useDropdownMenuController-B5tdkj26.js";import"./Plus-DYqQ5ZW1.js";import"./Dropdown-ChJd6AE_.js";import"./ChevronUpDown-CFkX2GwM.js";import"./ButtonGroup-GmtwjaC0.js";import"./ButtonGroupDivider-DCIj-SRz.js";import"./ToolbarMenu-D3KQzrUC.js";import"./ToolbarSearch-6Fm-z8Bv.js";import"./Paperclip-mS0UE-dC.js";import"./Eye-DYkaa2lw.js";import"./MenuHamburger-BATPuSR-.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-2-meUg78.js";import"./Flex-Cr7oVI5u.js";const Tt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
