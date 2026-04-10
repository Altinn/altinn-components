import{r as c,j as t}from"./iframe-DRbAvM8B.js";import{S as u}from"./SelectDateFilter-DBY_ime1.js";import{a as s,T as m}from"./Toolbar-C_9YDRG2.js";import{i as l,u as p,t as b}from"./example.hooks-XPoSgkwp.js";import{B as F}from"./Button-DXRH0CtL.js";import{S}from"./Section-eG7NPuGp.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-HRSWa3P-.js";import"./useId-p3Uu13R2.js";import"./Datepicker-B55e0e9V.js";import"./index-Dpt5RUeZ.js";import"./ChevronRight-BIwAZUpi.js";import"./MenuListItem-CLLuPs6D.js";import"./MenuItem-GZbX5NAK.js";import"./ItemMedia-DLqoeXZM.js";import"./XMark-BeNK6Eym.js";import"./Avatar-DHw0Umd5.js";import"./Skeleton-C6w0Fovi.js";import"./AvatarGroup-BZTkgKpW.js";import"./Icon-BB196-C1.js";import"./Checkmark-BwvmX3W_.js";import"./Heading-aiLobBhZ.js";import"./useHighlightedText-DaUYVTi5.js";import"./Badge-B0bOgxTq.js";import"./MenuListHeading-DYidFrGe.js";import"./Fieldset-DWXEpDF1.js";import"./lite-DaUVFjkg.js";import"./index-Vs8aUpKw.js";import"./use-merge-refs-BRHMCtFk.js";import"./Label-Zr8dB_9-.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./SearchField-Q4hKdicz.js";import"./MagnifyingGlass-Byb6dLEO.js";import"./FieldBase-_93TCpK5.js";import"./Typography-Da6zx1kt.js";import"./useMenu-BNYBCPCQ.js";import"./InformationSquare-Lr6VUhuh.js";import"./useDropdownMenuController-OmQMIEvc.js";import"./Plus-frPGag5G.js";import"./Dropdown-VBO2OC6w.js";import"./ChevronUpDown-Zah_l3Hs.js";import"./ButtonGroup-r6m6YA7P.js";import"./ButtonGroupDivider-Bl0yWe10.js";import"./Tooltip-CJtJf-6I.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-BYSdvxKQ.js";import"./ToolbarSearch-BG9uhSKV.js";import"./Paperclip-BUnfw_md.js";import"./Eye-Dtm3rmmu.js";import"./MenuHamburger-BigbFIZ4.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-DB6SpB_q.js";import"./Flex-DfEZbiAr.js";const xt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const dt=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,dt as __namedExportsOrder,xt as default};
