import{r as c,j as t}from"./iframe-Bka3lqwZ.js";import{S as u}from"./SelectDateFilter-DvTMRnCZ.js";import{a as s,T as m}from"./Toolbar-DhjLmBa8.js";import{i as l,u as p,t as b}from"./example.hooks-CrWKXXXr.js";import{B as F}from"./Button-DIVYOCsY.js";import{S}from"./Section-DgAAlgWN.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DmOTw-PR.js";import"./useId-BOUKUp4S.js";import"./Datepicker-0qEwfsgW.js";import"./index-97QH58ax.js";import"./ChevronRight-1C-HJkAE.js";import"./MenuListItem-DQuvdYRk.js";import"./MenuItem-CQZjBmzk.js";import"./ItemMedia-Ca3m8l5m.js";import"./XMark-BopKFElT.js";import"./Avatar-DUWR3kRV.js";import"./Skeleton-ECUY2hPc.js";import"./AvatarGroup-mAK5Ma76.js";import"./Icon-DoXRGO_6.js";import"./Checkmark-Bf4nZE-q.js";import"./Heading-BxCaPg4n.js";import"./useHighlightedText-DGjnrdw2.js";import"./ItemControls-abhSx9yX.js";import"./Badge-Dr-ny6rj.js";import"./MenuListHeading-g29dlFn5.js";import"./Fieldset-CsRJap2-.js";import"./lite-DaUVFjkg.js";import"./index-CQEQ6FSB.js";import"./use-merge-refs-CTw0OEaY.js";import"./Label-Bo_SdTne.js";import"./Input-tSTkuC7Q.js";import"./input-Dit64xtC.js";import"./SearchField-CSZgV0pa.js";import"./MagnifyingGlass-ohRS00MN.js";import"./FieldBase-BlSXl2oz.js";import"./Typography-CMwGEMpO.js";import"./useMenu-Cu8ej4cj.js";import"./InformationSquare-BNmERE6I.js";import"./useDropdownMenuController-DQoP6UHy.js";import"./Plus-Cr5OOVFj.js";import"./Dropdown-BPOECmw-.js";import"./ChevronUpDown-BuMNK9b7.js";import"./ButtonGroup-DnIZGAD0.js";import"./ButtonGroupDivider-CRf9txov.js";import"./Tooltip-tPkJ6t7_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DxiQcjG0.js";import"./ToolbarSearch-uDp7PokP.js";import"./Paperclip-D_7uE9LG.js";import"./Eye-1G-XdHUO.js";import"./MenuHamburger-Jx8psQzX.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-CqWrgnGb.js";import"./Flex-CDu7UET9.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
