import{a7 as t}from"./iframe-C7E9hFuS.js";import{S as a}from"./SelectDateFilter-DzV5T9ds.js";import{t as n}from"./example.data-8Q6DGqmk.js";import{a as s}from"./example.hooks-CcxQrM_F.js";import{T as m,a as l}from"./Toolbar-DyUKive3.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CCnKixCn.js";import"./MenuListItem-pCzMW7B2.js";import"./MenuItem-CJIUM84a.js";import"./ItemMedia-CHApnQjH.js";import"./Avatar-e0O_nUjf.js";import"./AvatarGroup-BbNCgDjh.js";import"./Checkmark-MJ8Dy75D.js";import"./ItemLabel-BqMYiWLj.js";import"./Heading-BjzdT1Qv.js";import"./useHighlightedText-BVZd64N7.js";import"./ItemControls-BSxWin7C.js";import"./Badge-xAKlFUBi.js";import"./Tooltip-C3MHB6KB.js";import"./ChevronRight-BkycUKsy.js";import"./ArrowUndo-DzBP3Rj-.js";import"./MenuListDivider-cJmmi06P.js";import"./Fieldset-B8hQzqcs.js";import"./Field-BOE10Mp_.js";import"./Label-C4cGfl6D.js";import"./Input-aQKngZ0n.js";import"./Datepicker-uB98ovdE.js";import"./SearchField-B7eNYfaD.js";import"./MagnifyingGlass-K55ud6sH.js";import"./FieldBase-C9YC6jMS.js";import"./Typography-BHaJGqRT.js";import"./useMenu-D_e4EtIh.js";import"./MenuListHeading-anY2tX0X.js";import"./InformationSquare-CD5xLXKd.js";import"./Paperclip-D8Ms5lhg.js";import"./Eye-y4G6pivy.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-abx8EBUu.js";import"./useDropdownMenuController-DFRzn_Ll.js";import"./Dropdown-CODOojNF.js";import"./Plus-oNsn4BMp.js";import"./ButtonGroup-CAvVorAa.js";import"./ButtonGroupDivider-DZziluJn.js";import"./ChevronUpDown-BhvVfdq3.js";import"./ToolbarMenu-DHCyWtoQ.js";import"./ToolbarSearch-DvisyZkQ.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const inboxFilter = useInboxFilter({
    filters: [{
      ...timeFilter,
      as: SelectDateFilter
    }],
    defaultFilterState: {}
  });
  return <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>;
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const inboxFilter = useInboxFilter({
    filters: [{
      ...timeFilter,
      as: SelectDateFilter,
      removable: true
    }],
    defaultFilterState: {}
  });
  return <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>;
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const items = timeFilter.items.map(item => {
    return {
      ...item,
      name: 'date'
    };
  });
  const inboxFilter = useInboxFilter({
    filters: [{
      ...timeFilter,
      items,
      name: 'date',
      as: SelectDateFilter
    }],
    defaultFilterState: {}
  });
  return <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>;
}`,...o.parameters?.docs?.source}}};const at=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,at as __namedExportsOrder,nt as default};
