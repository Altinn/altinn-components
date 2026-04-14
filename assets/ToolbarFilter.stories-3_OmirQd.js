import{r as c,j as t}from"./iframe-DolAyTrH.js";import{S as u}from"./SelectDateFilter-w_dvAADZ.js";import{a as s,T as m}from"./Toolbar-Q6Cuss0u.js";import{i as l,u as p,t as b}from"./example.hooks-3-1UdGlW.js";import{B as F}from"./Button-BnKV4VN-.js";import{S}from"./Section-B969stp2.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-C7YcKz4U.js";import"./useId-CHjpN4lF.js";import"./Datepicker-XJoareLN.js";import"./index-BGgdxP5s.js";import"./ChevronRight-Duke-dAu.js";import"./MenuListItem-V7gZGQwh.js";import"./MenuItem-BC8KVIYh.js";import"./ItemMedia-feu0z7mp.js";import"./XMark-DTdVjjyM.js";import"./Avatar-koXMFN1u.js";import"./Skeleton-CgJZAB6S.js";import"./AvatarGroup-B7A0z_e3.js";import"./Icon-DyTdluPS.js";import"./Checkmark-CMV0hymD.js";import"./Heading-ytdfVfHq.js";import"./useHighlightedText-DjzGplEp.js";import"./ItemControls-B_Hdv8nx.js";import"./Badge-XZ4zcUXX.js";import"./MenuListHeading-ktY8lirO.js";import"./Fieldset-VDMCFkLM.js";import"./lite-DaUVFjkg.js";import"./index-Bcer_oBx.js";import"./use-merge-refs-D0JupAUo.js";import"./Label-B4hULeup.js";import"./Input-CbO5ihcQ.js";import"./input-BNW4iEHl.js";import"./SearchField-O-g-s0at.js";import"./MagnifyingGlass-D6ZngSzY.js";import"./FieldBase-Cd7L_EtW.js";import"./Typography-BxahTxrH.js";import"./useMenu-BNSqPiQU.js";import"./InformationSquare-B_X3Ih6E.js";import"./useDropdownMenuController-Bq_IdB92.js";import"./Plus-J7cjNzSf.js";import"./Dropdown-ByKasinV.js";import"./ChevronUpDown-IW27C65d.js";import"./ButtonGroup-D7dkSlZP.js";import"./ButtonGroupDivider-oAJG58yN.js";import"./Tooltip-kZb4i6VJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-CfsUc7jD.js";import"./ToolbarSearch-dNxgL2uN.js";import"./Paperclip-QEXeBZFB.js";import"./Eye-je_CUsR4.js";import"./MenuHamburger-vJW3XQDF.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-DvTcN5eG.js";import"./Flex-DJLVkQLj.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
