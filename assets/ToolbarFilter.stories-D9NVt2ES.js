import{r as c,j as t}from"./iframe-GJv3-kpe.js";import{S as u}from"./SelectDateFilter-B26Puc_f.js";import{a as s,T as m}from"./Toolbar-CyofLDtD.js";import{i as l,u as p,t as b}from"./example.hooks-NIblRq6L.js";import{B as F}from"./Button-XgEODhFb.js";import{S}from"./Section-BvBlt0Cn.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DCdXG6nd.js";import"./useId-B1GQrjht.js";import"./Datepicker-Lv0-DNws.js";import"./index-D19pPnAw.js";import"./ChevronRight-C3wqtQo3.js";import"./MenuListItem-BuleDevk.js";import"./MenuItem-CRhKMxAm.js";import"./ItemMedia-45ogcwRE.js";import"./XMark-D7blLnze.js";import"./Avatar-CGv-fnY8.js";import"./Skeleton-dVNdeapn.js";import"./AvatarGroup-DxuzyW4n.js";import"./Icon-DKgAzIsH.js";import"./Checkmark-DXLqUvZZ.js";import"./Heading-CiHDuood.js";import"./useHighlightedText-ClfYglU-.js";import"./ItemControls-3C4JbZ3m.js";import"./Badge-CyLczarF.js";import"./Tooltip-Dv6bEDCe.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-oF7p1rqv.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-w-EtPB4c.js";import"./Fieldset-Dcg2wbOC.js";import"./index-OoPsm9QB.js";import"./Label-Bx3ShTJ6.js";import"./Input-WbVs78EM.js";import"./input-B1NrCnvc.js";import"./SearchField-D4OrqN5V.js";import"./MagnifyingGlass-a5jU8Ia_.js";import"./FieldBase-D2hpNZAE.js";import"./Typography-XN79jGlV.js";import"./useMenu-D_O6qRR4.js";import"./index-CNHiDjij.js";import"./InformationSquare-Crm3l9Sr.js";import"./useDropdownMenuController-CTnnTueZ.js";import"./Plus-9DzdC6C4.js";import"./Dropdown-CFn-KtHz.js";import"./ChevronUpDown-BiWl0_hb.js";import"./ButtonGroup-CkGxccE7.js";import"./ButtonGroupDivider-DWQ-x5Lg.js";import"./ToolbarMenu-dhwcTxdK.js";import"./ToolbarSearch-D4YvEV4z.js";import"./Paperclip-BmatJD4L.js";import"./Eye-DOWoVlQV.js";import"./MenuHamburger-5Bxt9Ko4.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-5jjXov6B.js";import"./Flex-CxS25VqD.js";const Tt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const gt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,gt as __namedExportsOrder,Tt as default};
