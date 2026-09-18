import{a7 as t}from"./iframe-DXZBp66t.js";import{S as a}from"./SelectDateFilter-_hPI4qp5.js";import{t as n}from"./example.data-CSyuuvuU.js";import{a as s}from"./example.hooks-DWYBi1Eq.js";import{T as m,a as l}from"./Toolbar-U_4b8oLd.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CRFgIgrE.js";import"./MenuListItem-Clm2r-Mx.js";import"./MenuItem-iQrBISbT.js";import"./ItemMedia-C0bdVmnE.js";import"./Avatar-DCOejOD4.js";import"./AvatarGroup-BwSN7x0U.js";import"./Checkmark-B8V7JmGk.js";import"./ItemLabel-ErnjkFel.js";import"./Heading-Dabq2F6t.js";import"./useHighlightedText-D_TdPqyJ.js";import"./ItemControls-CKEXZGvE.js";import"./Badge-CBM-v4IH.js";import"./Tooltip-kyFcP-VK.js";import"./ChevronRight-Cf4DVjz-.js";import"./ArrowUndo-BqzKGiFR.js";import"./MenuListDivider-CFvZmzp8.js";import"./Fieldset-BBf9diXL.js";import"./Field-awsdGPJZ.js";import"./Label-Byvm_JcV.js";import"./Input--Cg-6oUs.js";import"./Datepicker-BKzv5IdP.js";import"./SearchField-Bxud3zBq.js";import"./MagnifyingGlass-D2DSD_Zc.js";import"./FieldBase-Cs4Gpo93.js";import"./Typography-YwBvvLgA.js";import"./useMenu-CLawwFGJ.js";import"./MenuListHeading-vVix4BjR.js";import"./InformationSquare-CBzXkt4t.js";import"./Paperclip-DOUailIe.js";import"./Eye-BKNKFWAZ.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DnF-IkV4.js";import"./useDropdownMenuController-DlFwuKli.js";import"./Dropdown-C18yy08p.js";import"./Plus-k_IuB4VT.js";import"./ButtonGroup-B2DxSKEE.js";import"./ButtonGroupDivider-KugHPTHu.js";import"./ChevronUpDown-CSDbZbQS.js";import"./ToolbarMenu-M0l-PgER.js";import"./ToolbarSearch-DrcE0qqN.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
