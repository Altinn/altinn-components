import{s as c,p as t}from"./iframe-DrMVe4hJ.js";import{S as u}from"./SelectDateFilter-k_0kPOA5.js";import{a as s,T as m}from"./Toolbar-CRtbo8Qm.js";import{i as l,a as p,t as b}from"./example.hooks-BWhr0ElH.js";import{B as F}from"./Button-B40GVZAo.js";import{S}from"./Section-BOFb_opG.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-D8f5vRSf.js";import"./index-B2LUQ97G.js";import"./MenuItem-B27UidAs.js";import"./ItemMedia-B9-jRKLO.js";import"./XMark-BXMpu0Gf.js";import"./useId-CwrI0QJg.js";import"./Avatar-toOOZ7nf.js";import"./Skeleton-BKl0bJYN.js";import"./AvatarGroup-CVynWGO_.js";import"./Icon-CK8FcAiF.js";import"./Checkmark-OKWU0xmP.js";import"./ItemLabel-DjesYwl7.js";import"./Heading-DYwrq57L.js";import"./useHighlightedText-BA3QT9FH.js";import"./ItemControls-ztKmX_ZB.js";import"./Badge-BnCvYltQ.js";import"./Tooltip-BEnHuPi8.js";import"./tooltip-BY1BnveL.js";import"./ChevronRight-u16zgCRT.js";import"./ArrowUndo-DXCdgahn.js";import"./MenuListHeading-UZ0vr2Pr.js";import"./Fieldset-BZawVw2k.js";import"./Label-QaOAiYFD.js";import"./Input-kqR7j7M6.js";import"./Datepicker-DdWeq-qQ.js";import"./SearchField-BnuJ-svS.js";import"./MagnifyingGlass-BYmBhmCt.js";import"./FieldBase-C4Wnopmd.js";import"./Typography-BZD6V0ik.js";import"./useMenu-CrRt-E4f.js";import"./index-j3-eoKUd.js";import"./InformationSquare-J3q8zJp8.js";import"./useDropdownMenuController-BAGvidc8.js";import"./Dropdown-CG27uion.js";import"./Plus-CPTNbqFv.js";import"./ButtonGroup-Bxqmt3uG.js";import"./ButtonGroupDivider-t1hdeYZx.js";import"./ChevronUpDown-DxkeSRKc.js";import"./ToolbarMenu-D5qMSH42.js";import"./ToolbarSearch-DZ3dSuRw.js";import"./Paperclip-BDBVzmFe.js";import"./Eye-BZv16xjr.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DFEV7Ips.js";import"./Flex-Bv-_adYq.js";const St={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const ft=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,ft as __namedExportsOrder,St as default};
