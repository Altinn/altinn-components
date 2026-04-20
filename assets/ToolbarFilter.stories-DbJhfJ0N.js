import{r as c,j as t}from"./iframe-BqnZkKPi.js";import{S as u}from"./SelectDateFilter-DSelMJak.js";import{a as s,T as m}from"./Toolbar-BMYgF2JI.js";import{i as l,u as p,t as b}from"./example.hooks-D5-O-WJs.js";import{B as F}from"./Button-BhHmd_Fm.js";import{S}from"./Section-CvCvg2MJ.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DUL77TcE.js";import"./useId-9kVvsXig.js";import"./Datepicker-BKERqzuO.js";import"./index-DAuAfjpD.js";import"./ChevronRight-DE1wtPln.js";import"./MenuListItem-AlO17G_F.js";import"./MenuItem-kT58Bpcm.js";import"./ItemMedia-BIsU1ixF.js";import"./XMark-Y2_85_oc.js";import"./Avatar-DNgE8Mou.js";import"./Skeleton-1qnYSSLw.js";import"./AvatarGroup-CjT1qNUB.js";import"./Icon-CnWjusVH.js";import"./Checkmark-BnBY066L.js";import"./Heading-BxNd6ZSD.js";import"./useHighlightedText-Clj8nPui.js";import"./ItemControls-CZQ275uO.js";import"./Badge-wAZ__xuM.js";import"./MenuListHeading-CYx60jB_.js";import"./Fieldset-Cg5MupaB.js";import"./lite-DaUVFjkg.js";import"./index-wnzGLxld.js";import"./use-merge-refs-Dh9pzmOc.js";import"./Label-CWCdrO7p.js";import"./Input-C33ZQCyq.js";import"./input-xJWBoVha.js";import"./SearchField-ufWryraF.js";import"./MagnifyingGlass-BqeXJqhd.js";import"./FieldBase-BELBUfOz.js";import"./Typography-DM76If-Q.js";import"./useMenu-b_BS_LFk.js";import"./InformationSquare-BrOKqXok.js";import"./useDropdownMenuController-C-uznlxU.js";import"./Plus-7ff66Hwu.js";import"./Dropdown-hZuchDzz.js";import"./ChevronUpDown-5tAc1KRM.js";import"./ButtonGroup-DF4p7rG3.js";import"./ButtonGroupDivider-CAMhuJv0.js";import"./Tooltip-DKFSfnhf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DmfDcC0J.js";import"./ToolbarSearch-osdkSdWZ.js";import"./Paperclip-BNaRk59O.js";import"./Eye-BjK7HgG_.js";import"./MenuHamburger-CS_46M_p.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-CeqU6--G.js";import"./Flex-Dfcm_wdC.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
