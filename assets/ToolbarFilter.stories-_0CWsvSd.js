import{aa as u,a7 as t,c as b}from"./iframe-DdvxY_xq.js";import{S as F}from"./SelectDateFilter-DtUyMq_C.js";import{a as l,T as n}from"./Toolbar-BQaudiHZ.js";import{i as m,a as p,t as S}from"./example.hooks-BXBdMblo.js";import{S as f}from"./Section-lr4hansN.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-BiOJri4m.js";import"./MenuItem-L68RSDFn.js";import"./ItemMedia-DUTgrI06.js";import"./Avatar-BkRf-LcA.js";import"./AvatarGroup-o6Z87nDX.js";import"./Checkmark-DJVRCLhU.js";import"./ItemLabel-C58CsJMo.js";import"./Heading-CE6yLC7h.js";import"./useHighlightedText-BFt57PCX.js";import"./ItemControls-DoOKV45e.js";import"./Badge-CGTcd0en.js";import"./Tooltip-BRmZYzim.js";import"./ChevronRight-C3Cb2zNm.js";import"./ArrowUndo-D_q0f42e.js";import"./MenuListHeading-CMTKGvH9.js";import"./Fieldset-DJUmo8lq.js";import"./Field-Dc25EUil.js";import"./Label-CJtMWK76.js";import"./Input-2Gn2X0Ml.js";import"./Datepicker-CEUZHrB9.js";import"./SearchField-Cr3Gi8TV.js";import"./MagnifyingGlass-BNJradcO.js";import"./FieldBase-DD97eycm.js";import"./Typography-CUBjJcUl.js";import"./useMenu-Cr8gFQCV.js";import"./index-BdOTeIXC.js";import"./InformationSquare-CvBtG7YX.js";import"./useDropdownMenuController-BKuLMBHY.js";import"./Dropdown-DHo9FStr.js";import"./Plus-C9Ly1iUu.js";import"./ButtonGroup-D_joR3q8.js";import"./ButtonGroupDivider-D9DaMehQ.js";import"./ChevronUpDown-COT69Dtr.js";import"./ToolbarMenu-DkMr-fU4.js";import"./ToolbarSearch-Bx-QPBkS.js";import"./Paperclip-DHuhvvk0.js";import"./Eye-CH1T9BmR.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-WeCbK5N8.js";import"./Flex-Ban15jaQ.js";const pt={title:"Toolbar/ToolbarFilter",component:l,parameters:{},args:{}},i=()=>{const[e,r]=u.useState({}),c=m.map(o=>({...o,removable:!0}));return t.jsxs(n,{children:[t.jsx(l,{addLabel:"Legg til filter",getFilterLabel:o=>e?.[o]?.join(",")||"Choose "+o,filterState:e,onFilterStateChange:r,filters:c}),t.jsx(b,{onClick:()=>r({}),children:"Reset"})]})},a=()=>{const e=p({filters:m?.map(r=>({...r,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(n,{children:t.jsx(l,{...e})})},s=()=>{const e=p({filters:[{...S,as:F}],defaultFilterState:{}});return t.jsxs(n,{children:[t.jsx(l,{...e}),t.jsxs(f,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({});
  const filters = inboxFilters.map(item => ({
    ...item,
    removable: true
  }));
  return <Toolbar>
      <ToolbarFilter addLabel="Legg til filter" getFilterLabel={name => filterState?.[name]?.join(',') || 'Choose ' + name} filterState={filterState} onFilterStateChange={setFilterState} filters={filters} />
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const ct=["Controlled","Removable","Datepicker"];export{i as Controlled,s as Datepicker,a as Removable,ct as __namedExportsOrder,pt as default};
