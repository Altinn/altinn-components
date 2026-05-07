import{r as c,j as t}from"./iframe-u1jxS1Oq.js";import{S as u}from"./SelectDateFilter-CwxgqZQc.js";import{a as s,T as m}from"./Toolbar-mSR30s4v.js";import{i as l,u as p,t as b}from"./example.hooks-Dem1HePJ.js";import{B as F}from"./Button-BY9-KzE0.js";import{S}from"./Section-Dvplgvae.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-B6TGv3ww.js";import"./useId-MxiBxM6f.js";import"./Datepicker-B5_mksOB.js";import"./index-CuIYfQx6.js";import"./ChevronRight-Dx4m7R44.js";import"./MenuListItem-BGYFPBt-.js";import"./MenuItem-CRFWvbZF.js";import"./ItemMedia-Dn5ydfd9.js";import"./XMark-Bsujigqn.js";import"./Avatar-DVgGPyAb.js";import"./Skeleton-vSjDGrjA.js";import"./AvatarGroup-B0Rqd5X-.js";import"./Icon-DjXLk3vD.js";import"./Checkmark-CapblMXW.js";import"./Heading-B6H8IHeT.js";import"./useHighlightedText-Cgx_Ij05.js";import"./ItemControls-GTSartAy.js";import"./Badge-DEnx77R3.js";import"./Tooltip-DbCog91V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-DeN80SPN.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-BoIZ0dV_.js";import"./Fieldset-BjznVQqm.js";import"./index-Cx6LUCQB.js";import"./Label-D4ujXpAq.js";import"./Input-BNqEyP7x.js";import"./input-y4RbUeVJ.js";import"./SearchField-BwnvpNr2.js";import"./MagnifyingGlass-5wf6qRdO.js";import"./FieldBase-BcXnInHB.js";import"./Typography-DJdlSKXp.js";import"./useMenu-CJJuJq3h.js";import"./InformationSquare-C97_OpNa.js";import"./useDropdownMenuController-CqFMkV_m.js";import"./Plus-DDBVjJkP.js";import"./Dropdown-CanQZVjK.js";import"./ChevronUpDown-pwUGRMmV.js";import"./ButtonGroup-DTQJ7yTP.js";import"./ButtonGroupDivider-BZKqv01B.js";import"./ToolbarMenu-Dt2RBqCD.js";import"./ToolbarSearch-DFrGVg-W.js";import"./Paperclip-DWGKTEMb.js";import"./Eye-CwI-KaLg.js";import"./MenuHamburger-DqxEpoux.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-CanOz9MC.js";import"./Flex-CjSLdTf-.js";const dt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
