import{r as c,j as t}from"./iframe-DgiLb7Jh.js";import{S as u}from"./SelectDateFilter-BAn6Z5M1.js";import{a as s,T as m}from"./Toolbar-CEcHWW0U.js";import{i as l,u as p,t as b}from"./example.hooks-O91M4uLq.js";import{B as F}from"./Button-D7CoEZHH.js";import{S}from"./Section-BoeinIOl.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Dx5hHpGf.js";import"./useId-6J1VG5PF.js";import"./Datepicker-CeMj1Kju.js";import"./index-CzzvqmNv.js";import"./ChevronRight-B8GqJ6hU.js";import"./MenuListItem-BzaUHJzz.js";import"./MenuItem-CM4esdkj.js";import"./ItemMedia-BvSNOAVc.js";import"./XMark-DE16CL-6.js";import"./Avatar-D2ea3_hU.js";import"./Skeleton-CjXkBVSw.js";import"./AvatarGroup-BGNg7yRW.js";import"./Icon-uoDJWBW9.js";import"./Checkmark-49Lv_3MM.js";import"./Heading-CAIwUoS2.js";import"./useHighlightedText-C3KXFHAg.js";import"./Badge-DFo-bNGw.js";import"./MenuListHeading-BHx30WUA.js";import"./Fieldset-kjl2AGn_.js";import"./lite-DaUVFjkg.js";import"./index-Cu0iGtDM.js";import"./use-merge-refs-CpvzIuY-.js";import"./Label-6LQ7LXNA.js";import"./Input-Cmck_kaL.js";import"./input-BBC2L6cA.js";import"./SearchField-CTb1s1hd.js";import"./MagnifyingGlass-C5v4zKU0.js";import"./FieldBase-B0t89PB6.js";import"./Typography-Bp8CNLT3.js";import"./useMenu-7q5OpfBf.js";import"./InformationSquare-CZhEVvng.js";import"./useDropdownMenuController-fXPHld1D.js";import"./Plus-gYiwb3vr.js";import"./Dropdown-Bk4mNQmY.js";import"./ChevronUpDown-agMv5gvN.js";import"./ButtonGroup-Ds9mrFFQ.js";import"./ButtonGroupDivider-eHUmueO9.js";import"./Tooltip-00zSbMAL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DJQIA27l.js";import"./ToolbarSearch-OWdwBwH6.js";import"./Paperclip-DhNvEpcT.js";import"./Eye-mLzMfQ7W.js";import"./MenuHamburger-DsSm4Trc.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-2pQtb28r.js";import"./Flex-BfnRV8tR.js";const xt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
