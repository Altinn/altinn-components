import{r as c,j as t}from"./iframe-CK12xbO6.js";import{S as u}from"./SelectDateFilter-tN7DXXJ7.js";import{a as s,T as m}from"./Toolbar-DDYBFFby.js";import{i as l,u as p,t as b}from"./example.hooks-BqPvibRX.js";import{B as F}from"./Button-DTrhNbku.js";import{S}from"./Section-BZGNeHVH.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DOBtYJAt.js";import"./useId-CIOYGEMY.js";import"./Datepicker-CTWxbFUA.js";import"./index-DS2SSX1f.js";import"./ChevronRight-DxL2oOG5.js";import"./MenuListItem-B_ethkwV.js";import"./MenuItem-DjmA2GJO.js";import"./ItemMedia-XHYq4GSc.js";import"./XMark-MadrIoK8.js";import"./Avatar-CjYl4qzD.js";import"./Skeleton-CLQkeaUO.js";import"./AvatarGroup-DIAmYFyU.js";import"./Icon-BHUPQGzt.js";import"./Checkmark-DQBecNO6.js";import"./Heading-Drr-of_9.js";import"./useHighlightedText-DdOMnBlO.js";import"./ItemControls-B1M2j2tm.js";import"./Badge-BBKRgbs4.js";import"./Tooltip-BdqmcG89.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-D5gu3XYQ.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-CCkIOc1e.js";import"./Fieldset-Dy0A-1z0.js";import"./index-BCgvi17I.js";import"./Label-CQOYgwqz.js";import"./Input-CN33OjmR.js";import"./input-CdhXBgWK.js";import"./SearchField-CfLtnFna.js";import"./MagnifyingGlass-qxU1ofSJ.js";import"./FieldBase-NrhOHdDA.js";import"./Typography-PIwVlbiP.js";import"./useMenu-BM6Zh5Qq.js";import"./InformationSquare-C5QsI1Pb.js";import"./useDropdownMenuController--WYsFZ5d.js";import"./Plus-LAYoRaA7.js";import"./Dropdown-CtQW7C8x.js";import"./ChevronUpDown-CGM66yE3.js";import"./ButtonGroup-BcyGdCwQ.js";import"./ButtonGroupDivider-Bk-HCSfX.js";import"./ToolbarMenu-mxw-7SZ4.js";import"./ToolbarSearch-CfeOST9x.js";import"./Paperclip-B08sHd0a.js";import"./Eye-CStM5yWn.js";import"./MenuHamburger-CeM_4KvR.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-D6lkouap.js";import"./Flex-DQqIzFyb.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
