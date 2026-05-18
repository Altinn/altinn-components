import{r as c,j as t}from"./iframe-Bk_HwK4l.js";import{S as u}from"./SelectDateFilter-CJ4l1HlR.js";import{a as s,T as m}from"./Toolbar-DnSydSf5.js";import{i as l,u as p,t as b}from"./example.hooks-Crri7oQp.js";import{B as F}from"./Button-DXv-zg1S.js";import{S}from"./Section-DaLGW2Wx.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DFEq1-Ux.js";import"./useId-WArpTTRC.js";import"./Datepicker-DanvzkQG.js";import"./index-Bj80ru-z.js";import"./ChevronRight-BEdxYQXL.js";import"./MenuListItem-p80RBs_A.js";import"./MenuItem-BW0J3eqZ.js";import"./ItemMedia-QvgC3e5a.js";import"./XMark-BlM7H2uk.js";import"./Avatar-B1R5c004.js";import"./Skeleton-CZ4GHxMp.js";import"./AvatarGroup-CkGvw6sL.js";import"./Icon-BbsTdu7G.js";import"./Checkmark-BwmprQFp.js";import"./Heading-D6li-Zgs.js";import"./useHighlightedText-BjD5CEaG.js";import"./ItemControls-DoACt_K_.js";import"./Badge-s1Xx1f1P.js";import"./Tooltip-B6sw6IF5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BQmlI6PU.js";import"./lite-DaUVFjkg.js";import"./MenuListHeading-RVi62nau.js";import"./Fieldset-C8Kk6o8J.js";import"./index-RvDLUlZV.js";import"./Label-D1l41OtR.js";import"./Input-kPMzbuYu.js";import"./input-6lO9tGv_.js";import"./SearchField-CcfOce7B.js";import"./MagnifyingGlass-BtHw2Y5y.js";import"./FieldBase-zuKERQJx.js";import"./Typography-9_XA-VKE.js";import"./useMenu-BNIm_aif.js";import"./index-BL_SwWgZ.js";import"./InformationSquare-D1WxufmY.js";import"./useDropdownMenuController--BMHU_Uw.js";import"./Plus-Db6y3gEP.js";import"./Dropdown-DDGzAAFH.js";import"./ChevronUpDown-xq3F75kC.js";import"./ButtonGroup-IyhiSPmN.js";import"./ButtonGroupDivider-Cky36suu.js";import"./ToolbarMenu-C9Ek9car.js";import"./ToolbarSearch-D1BZ8Hq2.js";import"./Paperclip-D1BNdJQZ.js";import"./Eye-vY4zSgG6.js";import"./MenuHamburger-CKMlqnsy.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./button-DRIhbrAI.js";import"./Flex-CqtyDzLK.js";const Tt={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
