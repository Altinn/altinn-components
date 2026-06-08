import{aa as c,a7 as t,c as u}from"./iframe-BtrieXtc.js";import{S as b}from"./SelectDateFilter-Dy24VcBA.js";import{a as s,T as l}from"./Toolbar-Dv9dytwQ.js";import{i as m,a as p,t as F}from"./example.hooks-DQvyEQ6J.js";import{S}from"./Section-UNmwoB7j.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-BMqPUKCV.js";import"./MenuItem-CHl6gjJ7.js";import"./ItemMedia-eBYq579p.js";import"./Avatar-CpJVuKGv.js";import"./AvatarGroup-B_fE5muE.js";import"./Checkmark-W3qwARKA.js";import"./ItemLabel-5cZaNnaj.js";import"./Heading-CdtnAJEW.js";import"./useHighlightedText-B6dVubhR.js";import"./ItemControls-DyiOoqOz.js";import"./Badge-BaL1X3jx.js";import"./Tooltip-CavTLnec.js";import"./ChevronRight-DjbS-LPA.js";import"./ArrowUndo-DhKnKyUU.js";import"./MenuListHeading-D0-5HT2_.js";import"./Fieldset-o-8Piykq.js";import"./Field-D8_JVLdM.js";import"./Label-ERyazbFa.js";import"./Input-BbNTIeCv.js";import"./Datepicker-NVwORXlo.js";import"./SearchField-Du6Gz1k6.js";import"./MagnifyingGlass-C5aguymI.js";import"./FieldBase-CTDBNJ5K.js";import"./Typography-BRa08Jyj.js";import"./useMenu-BNfzuibe.js";import"./index-DyGDkSgg.js";import"./InformationSquare-BnFcng2B.js";import"./useDropdownMenuController-DeNWB_nX.js";import"./Dropdown-CPgwwZJ7.js";import"./Plus-AauV6il6.js";import"./ButtonGroup-CVtevVNY.js";import"./ButtonGroupDivider-DgYHqz8l.js";import"./ChevronUpDown-XBntiFIi.js";import"./ToolbarMenu-DJrp1f2j.js";import"./ToolbarSearch-BIXCj26p.js";import"./Paperclip-uvdNiF3m.js";import"./Eye-CmrdHzy5.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-INT75Sb9.js";import"./Flex-Dld0WRRq.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const pt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,pt as __namedExportsOrder,mt as default};
