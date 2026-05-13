import{r as c,j as t}from"./iframe-CpLxKnDM.js";import{S as u}from"./SelectDateFilter-D47Tx5EN.js";import{a as s,T as m}from"./Toolbar-CK9c0ysy.js";import{i as l,u as p,t as b}from"./example.hooks-Bb6Nq6t-.js";import{B as F}from"./Button-DKJNFoHr.js";import{S}from"./Section-cnHf2d7L.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-kJzW9ldV.js";import"./useId-Dk2QO8VQ.js";import"./Datepicker-ob1TF1mK.js";import"./index-BZrYlxzi.js";import"./ChevronRight-16z1B_cb.js";import"./MenuListItem-D6BVyzxR.js";import"./MenuItem-Da2X9VsT.js";import"./ItemMedia-DT3PutY3.js";import"./XMark-BkFwP2BW.js";import"./Avatar-Bh6xe4Ys.js";import"./Skeleton-B2kLb9z1.js";import"./AvatarGroup-DwxSIihj.js";import"./Icon-xH6stteC.js";import"./Checkmark-DpqhZdZ_.js";import"./Heading-Dmt1Hp0l.js";import"./useHighlightedText-De1FlINf.js";import"./ItemControls-SBEzslTa.js";import"./Badge-BprayW1R.js";import"./Tooltip-BKj7GKZF.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-g_590vId.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-CtFt3nNd.js";import"./Fieldset-B3qzU0ZI.js";import"./index-DjVenMls.js";import"./Label-C0kuzyFW.js";import"./Input-Cnu7Dubv.js";import"./input-CwcuNrJh.js";import"./SearchField-DF0MNejq.js";import"./MagnifyingGlass-DhzKRFoX.js";import"./FieldBase-zLQdXhmX.js";import"./Typography-jv3_dxzw.js";import"./useMenu-CCk7NyHy.js";import"./index-B76D54i4.js";import"./InformationSquare-xpUpd4lr.js";import"./useDropdownMenuController-0qeRnWl5.js";import"./Plus-7ibbtH5p.js";import"./Dropdown-gyW_V0cZ.js";import"./ChevronUpDown-BAZWnllU.js";import"./ButtonGroup-MGSBAJb-.js";import"./ButtonGroupDivider-BLjzTaaF.js";import"./ToolbarMenu-Br84Gbgk.js";import"./ToolbarSearch-DkBEzL5A.js";import"./Paperclip-DO71C6ra.js";import"./Eye-CIuKAz7x.js";import"./MenuHamburger-BOYVbGjH.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-DZ9B7a50.js";import"./Flex-DdRay9SF.js";const Tt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
