import{j as t}from"./iframe-DxKlu2kD.js";import{S as a}from"./SelectDateFilter-RkZG30gv.js";import{u as m,t as n}from"./example.hooks-DtvoKuZG.js";import{T as s,a as l}from"./Toolbar-DNndWGFg.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BeF4mKpq.js";import"./useId-_YfdAmsW.js";import"./Datepicker-ncZYoUZ9.js";import"./index-BWCSYHeO.js";import"./ChevronRight-DCeYx28-.js";import"./Button-D78I7hWM.js";import"./button-B-2CHja_.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-BTPFJyFs.js";import"./MenuItem-kNYALtyW.js";import"./ItemMedia-BBqBVaQK.js";import"./XMark-C1fx_pyo.js";import"./Avatar-BwF2spoI.js";import"./Skeleton-niSIm0IT.js";import"./AvatarGroup-D_QmYd99.js";import"./Icon-CrZKj0Yv.js";import"./Checkmark-C9NR0hmL.js";import"./Heading-m7XVygop.js";import"./useHighlightedText-DHBtHLKn.js";import"./Badge-4TJDD2P9.js";import"./MenuListHeading-BCVqt4go.js";import"./Fieldset-D7CglCuV.js";import"./index-sO6KcVLH.js";import"./Label-DPRrgAAI.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./SearchField-yItf8ktv.js";import"./MagnifyingGlass-BSd0JI5p.js";import"./FieldBase-DR6_g4FH.js";import"./Typography-iC77LYkz.js";import"./useMenu-DwMeQcTX.js";import"./InformationSquare-D9H1eLzz.js";import"./Paperclip-BykLFP04.js";import"./Eye-xoGFvx_M.js";import"./MenuHamburger-W1FDwBr8.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-cNOqav4I.js";import"./Plus-Dz67JQoo.js";import"./Dropdown-BlFnr1UG.js";import"./ChevronUpDown-C-rEKWde.js";import"./ButtonGroup-CKoZVXux.js";import"./ButtonGroupDivider-Dzf9jdTg.js";import"./Tooltip-DFu8-nHR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-Ccj2V8zi.js";import"./ToolbarSearch-6qQL0Quv.js";const ct={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const dt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,dt as __namedExportsOrder,ct as default};
