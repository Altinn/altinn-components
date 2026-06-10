import{aa as u,a7 as t,c as b}from"./iframe-BBxI6Qoj.js";import{S as F}from"./SelectDateFilter-CwDJpjp7.js";import{a as l,T as n}from"./Toolbar-qUq-gTSU.js";import{i as m,a as p,t as S}from"./example.hooks-DO0_9_gP.js";import{S as f}from"./Section-2oE2jyh4.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-D68tduCT.js";import"./MenuItem-B1Q66lNx.js";import"./ItemMedia-vu0P71y8.js";import"./Avatar-DrVCUDP7.js";import"./AvatarGroup-D15nbx4o.js";import"./Checkmark-CSwkO33y.js";import"./ItemLabel-2sb7Udx3.js";import"./Heading-D61lhVl1.js";import"./useHighlightedText-CESRz6Ap.js";import"./ItemControls-BooS5V5d.js";import"./Badge-BWCWk7xl.js";import"./Tooltip-DgvofOl5.js";import"./ChevronRight-DVToFFYf.js";import"./ArrowUndo-pEhOslZu.js";import"./MenuListHeading-lkQwQf3s.js";import"./Fieldset-SUe31Z_t.js";import"./Field-CklQ3uRY.js";import"./Label-DAepOqrA.js";import"./Input-C6iRvbsc.js";import"./Datepicker-vyR1o3OR.js";import"./SearchField-CTzRwjSn.js";import"./MagnifyingGlass-BMZG2bcC.js";import"./FieldBase-De9CwOeM.js";import"./Typography-DsE98WBK.js";import"./useMenu-B76EeFEP.js";import"./index-CrzqWcTU.js";import"./InformationSquare-DpMeWUxz.js";import"./useDropdownMenuController-BP3UF-Yt.js";import"./Dropdown-BGDRJ2sL.js";import"./Plus-CVz3L4Fh.js";import"./ButtonGroup-xNpv9tyz.js";import"./ButtonGroupDivider-Cu1p1-tn.js";import"./ChevronUpDown-C605i_Hb.js";import"./ToolbarMenu-B0A53xiZ.js";import"./ToolbarSearch-CTaIjpv4.js";import"./Paperclip-Bo0nfGg_.js";import"./Eye-CE1KBsxC.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CvD6asOf.js";import"./Flex-DehNIx1U.js";const pt={title:"Toolbar/ToolbarFilter",component:l,parameters:{},args:{}},i=()=>{const[e,r]=u.useState({}),c=m.map(o=>({...o,removable:!0}));return t.jsxs(n,{children:[t.jsx(l,{addLabel:"Legg til filter",getFilterLabel:o=>e?.[o]?.join(",")||"Choose "+o,filterState:e,onFilterStateChange:r,filters:c}),t.jsx(b,{onClick:()=>r({}),children:"Reset"})]})},a=()=>{const e=p({filters:m?.map(r=>({...r,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(n,{children:t.jsx(l,{...e})})},s=()=>{const e=p({filters:[{...S,as:F}],defaultFilterState:{}});return t.jsxs(n,{children:[t.jsx(l,{...e}),t.jsxs(f,{margin:"section",children:["State: ",JSON.stringify(e.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
