import{a7 as t}from"./iframe-CD11FhkO.js";import{S as a}from"./SelectDateFilter-RM54W0SH.js";import{t as n}from"./example.data-CL16hkHn.js";import{a as s}from"./example.hooks-C4fbBlBz.js";import{T as m,a as l}from"./Toolbar-Ctm_hHq7.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-BjjHHxzb.js";import"./MenuListItem-BXuXLU5Z.js";import"./MenuItem-Q62E5xuF.js";import"./ItemMedia-Da1KaWKQ.js";import"./Avatar-DnWg8nkP.js";import"./AvatarGroup-D_FMhzL-.js";import"./Checkmark-1mKhNNmo.js";import"./ItemLabel-C4LW5Gzw.js";import"./Heading-DRFiIxuE.js";import"./useHighlightedText-BLIWo84c.js";import"./ItemControls-BM5eXiWu.js";import"./Badge-C4mu-w43.js";import"./Tooltip-DHKVNtVP.js";import"./ChevronRight-DorAbKkm.js";import"./ArrowUndo-U7c-XydM.js";import"./MenuListDivider-C8FBE3A1.js";import"./Fieldset-Zo9Qa911.js";import"./Field-D2tRhsyN.js";import"./Label-eTdXAbuC.js";import"./Input-By1HeiMt.js";import"./Datepicker-DMl-bYQK.js";import"./SearchField-DTHysOBi.js";import"./MagnifyingGlass-DzHVnCkX.js";import"./FieldBase-BjWFGCCi.js";import"./Typography-CsSTPRBO.js";import"./useMenu-PhHDaKm4.js";import"./MenuListHeading-CEMMnaXl.js";import"./InformationSquare-885_pUeZ.js";import"./Paperclip-f4OOSp0t.js";import"./Eye-C-UBsLKN.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-D8TsZxA8.js";import"./useDropdownMenuController-Ggnaqgq1.js";import"./Dropdown-C71BxREr.js";import"./Plus-CAOm99TL.js";import"./ButtonGroup-CI_suWzv.js";import"./ButtonGroupDivider-BUTcHO9a.js";import"./ChevronUpDown-6dF5NEjt.js";import"./ToolbarMenu-B1QzZXoN.js";import"./ToolbarSearch-Cm8Epghk.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
