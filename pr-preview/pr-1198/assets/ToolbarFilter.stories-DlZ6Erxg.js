import{r as c,j as t}from"./iframe-DXwGEFZf.js";import{S as u}from"./SelectDateFilter-BncS65u4.js";import{a as s,T as m}from"./Toolbar-BV3vLwx2.js";import{i as l,u as p,t as b}from"./example.hooks-Dl8Q3EH_.js";import{B as F}from"./Button-BcOfKjgE.js";import{S}from"./Section-BSKZ_Frt.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BcOnJrBl.js";import"./useId-Df52yuGg.js";import"./Datepicker-CvmQWJ5_.js";import"./index-DpQTH4Pc.js";import"./ChevronRight-B7NrC3Rp.js";import"./MenuListItem-BMkFPPC3.js";import"./MenuItem-COBQQf6N.js";import"./ItemMedia-C0bSIjdI.js";import"./XMark-BspkucHC.js";import"./Avatar-OxvpOCq4.js";import"./Skeleton-CD7VUCi3.js";import"./AvatarGroup-vB7eodsE.js";import"./Icon-DEVqj2eM.js";import"./Checkmark-DpC6lRZL.js";import"./Heading-D1SypAUR.js";import"./useHighlightedText-NV3gg9HW.js";import"./ItemControls-DXxKFox6.js";import"./Badge-CBgj_4MY.js";import"./Tooltip-DxtRZp3O.js";import"./tooltip-OQNLf2nv.js";import"./MenuListHeading-G6YR-18r.js";import"./Fieldset-Cy33GwGY.js";import"./Label-ChoE5xRO.js";import"./Input-CjRvyA41.js";import"./SearchField-BCjbtpiQ.js";import"./MagnifyingGlass-CllD3bzP.js";import"./FieldBase-BwCMZAv_.js";import"./Typography-CegVoZkA.js";import"./useMenu-DnVZQPIX.js";import"./index-BmZUBcCg.js";import"./InformationSquare-CathhXXw.js";import"./useDropdownMenuController-3S7tUMR-.js";import"./Plus-6DEjvg57.js";import"./Dropdown-BZOF64eO.js";import"./ChevronUpDown-DoaPnXHw.js";import"./ButtonGroup-BgmjkJuw.js";import"./ButtonGroupDivider-Cg8WMtdf.js";import"./ToolbarMenu-DYrFr0_m.js";import"./ToolbarSearch-DigZ9geU.js";import"./Paperclip-DhRJlu28.js";import"./Eye-DCromwe3.js";import"./MenuHamburger-DYibhKnt.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./Flex-U6liI5ZR.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
