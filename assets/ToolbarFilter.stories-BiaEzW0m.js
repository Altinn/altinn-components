import{r as c,j as t}from"./iframe-xsOFb0qB.js";import{S as u}from"./SelectDateFilter-Dcap-DmE.js";import{a as s,T as m}from"./Toolbar-CDDewou6.js";import{i as l,u as p,t as b}from"./example.hooks-DwBSne0_.js";import{B as F}from"./Button-BpTRR-R2.js";import{S}from"./Section-B92vWqdI.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Bgr0ttn6.js";import"./useId-BSkX16Wf.js";import"./Datepicker-B0DGXccs.js";import"./index-C2Njje4x.js";import"./ChevronRight-C-KQY4Ee.js";import"./MenuListItem-CT4_zUWw.js";import"./MenuItem-Dd-G4Q8o.js";import"./ItemMedia-J6PAjnJS.js";import"./XMark-CIyVPbna.js";import"./Avatar-n4A0Yiev.js";import"./Skeleton-DBfNAA4T.js";import"./AvatarGroup-D3a3Cvdg.js";import"./Icon-Bfs0jdaJ.js";import"./Checkmark-Bxt0Ippd.js";import"./Heading-CKV0OzUJ.js";import"./useHighlightedText-DlnkJmvJ.js";import"./ItemControls-a4lEiOE5.js";import"./Badge-BNd15I-A.js";import"./Tooltip-O5uJJY5C.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CVCJxog4.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-DQRtBG1I.js";import"./Fieldset-DgXA1yP2.js";import"./index-CZjeF-Ef.js";import"./Label-CiIlYW7w.js";import"./Input-CKQ98Ns6.js";import"./input-WCOpszOV.js";import"./SearchField-CkGqv4yc.js";import"./MagnifyingGlass--8bC5kd2.js";import"./FieldBase-CVHmMMmY.js";import"./Typography-Bx2c3_US.js";import"./useMenu-Cuq0hoPZ.js";import"./index-D7qBukkQ.js";import"./InformationSquare-DdLgqmyX.js";import"./useDropdownMenuController-B1fyKvdT.js";import"./Plus-CO7gw69x.js";import"./Dropdown-DSeVnfau.js";import"./ChevronUpDown-C9PCSFtE.js";import"./ButtonGroup-C6oYdo0U.js";import"./ButtonGroupDivider-Di2QHo3H.js";import"./ToolbarMenu-tkAvaKQM.js";import"./ToolbarSearch-B_S7wHi8.js";import"./Paperclip-7kfbi6pN.js";import"./Eye-DEFvM6nm.js";import"./MenuHamburger-C-E3l7C-.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-_KGDSi7k.js";import"./Flex-D9aEciRT.js";const Tt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
