import{r as c,j as t}from"./iframe-JDDu8qct.js";import{S as u}from"./SelectDateFilter-C2hzavjA.js";import{a as s,T as m}from"./Toolbar-CSWi7enA.js";import{i as l,u as p,t as b}from"./example.hooks-DatiwtdT.js";import{B as F}from"./Button-DJdKIqrT.js";import{S}from"./Section-0xRJEQzM.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-OD1mDHyP.js";import"./useId-BWG34Gxg.js";import"./Datepicker-MEn1P8kt.js";import"./index--LOES4hQ.js";import"./ChevronRight-CAXd-oaR.js";import"./MenuListItem-CSWiIfGI.js";import"./MenuItem-C4GbvFyO.js";import"./ItemMedia-Xjox6rUV.js";import"./XMark-YkWOq4QK.js";import"./Avatar-C90IY9ut.js";import"./Skeleton-CG77vT0k.js";import"./AvatarGroup-iM9HxeRB.js";import"./Icon-DIHT6axv.js";import"./Checkmark-D1rpd2hz.js";import"./Heading-DTbUzRnV.js";import"./useHighlightedText-CEk7sGm4.js";import"./ItemControls-_7JFqe2W.js";import"./Badge-mnqqv4hK.js";import"./Tooltip-DdVbMRYJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-Dm0wt9US.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-5MWZ1R2O.js";import"./Fieldset-iAmu4r9v.js";import"./index-BaWoKolw.js";import"./Label-D5tTdPwy.js";import"./Input-BYdHuux7.js";import"./input-qV3rGBnT.js";import"./SearchField-CPeUZoGo.js";import"./MagnifyingGlass-DxjT3S7Z.js";import"./FieldBase-D3HPIoAl.js";import"./Typography-yaBddsX3.js";import"./useMenu-DwkqWK9f.js";import"./InformationSquare-CibJvFTt.js";import"./useDropdownMenuController-Dq4qSJid.js";import"./Plus-B0ASUJ6t.js";import"./Dropdown-C4SP0e_D.js";import"./ChevronUpDown-BaZBG0n4.js";import"./ButtonGroup-BtRMC3LR.js";import"./ButtonGroupDivider-CHx564QR.js";import"./ToolbarMenu-CCel9zNZ.js";import"./ToolbarSearch-BlqHRjKZ.js";import"./Paperclip-8FnOlKFn.js";import"./Eye-ClYhzeVq.js";import"./MenuHamburger-D7z-4ipp.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-xt_-egYh.js";import"./Flex-BxwOuuQR.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
