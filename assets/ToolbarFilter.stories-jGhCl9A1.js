import{aa as c,a7 as t,c as u}from"./iframe-CAfDO4Rw.js";import{S as b}from"./SelectDateFilter-d4NjVjVB.js";import{a as s,T as l}from"./Toolbar-DD_Uz1Bk.js";import{i as m,a as p,t as F}from"./example.hooks-B48pgQpo.js";import{S}from"./Section-BoMEazBp.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-qxQn0xnV.js";import"./MenuItem-CDhdlBX8.js";import"./ItemMedia-C1xz5qH-.js";import"./Avatar-CgZyFHuO.js";import"./AvatarGroup-wzegiK4S.js";import"./Checkmark-DWkR78Cr.js";import"./ItemLabel-CW9F7Ljc.js";import"./Heading-YvXsCKAz.js";import"./useHighlightedText-D1Egz4xv.js";import"./ItemControls-DVGHNPwh.js";import"./Badge-2r7QR-Ea.js";import"./Tooltip-CnjxI-as.js";import"./ChevronRight-CMD5YJ4n.js";import"./ArrowUndo-C66w3eEr.js";import"./MenuListHeading-DQuMrLgT.js";import"./Fieldset-oOWDgLCT.js";import"./Field-CeOsIMBN.js";import"./Label-Dty_TUWJ.js";import"./Input-xoXFTL9F.js";import"./Datepicker-Bnn1or1p.js";import"./SearchField-CVnH2ZZ_.js";import"./MagnifyingGlass-CAS5EVy6.js";import"./FieldBase-E5ODadVE.js";import"./Typography-CTt20h0e.js";import"./useMenu-BpN0JSlm.js";import"./index-B1ZW1R_L.js";import"./InformationSquare-Dty64Wjx.js";import"./useDropdownMenuController-gEOrHOh0.js";import"./Dropdown-BLYLo4fX.js";import"./Plus-Do7Jzj4H.js";import"./ButtonGroup-CUCgVY-r.js";import"./ButtonGroupDivider-Zi5sOWHJ.js";import"./ChevronUpDown-PoStJVqJ.js";import"./ToolbarMenu-L9pheTCn.js";import"./ToolbarSearch-DOQYGg8j.js";import"./Paperclip-CyPZzteP.js";import"./Eye-bu1DBfls.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DLotVjoT.js";import"./Flex-T7A62cDZ.js";const mt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(l,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:m.map(o=>({...o,removable:!0}))}),t.jsx(u,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:m?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(l,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...F,as:b}],defaultFilterState:{}});return t.jsxs(l,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
