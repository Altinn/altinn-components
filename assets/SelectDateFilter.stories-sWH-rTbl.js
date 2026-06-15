import{a7 as t}from"./iframe-B7zm1HIO.js";import{S as a}from"./SelectDateFilter-BKLhSi71.js";import{t as n}from"./example.data-C4QZUb7l.js";import{a as s}from"./example.hooks-CylfSIjm.js";import{T as m,a as l}from"./Toolbar-DpCVbWdO.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-D62zbdz4.js";import"./MenuListItem-6z1MFl70.js";import"./MenuItem-B-gSoajH.js";import"./ItemMedia-DpKMg9GF.js";import"./Avatar-moSMPGHi.js";import"./AvatarGroup-BaLNA_5N.js";import"./Checkmark-BLhcN1Ai.js";import"./ItemLabel-CWIv-i-M.js";import"./Heading-C4G9hOYj.js";import"./useHighlightedText-DWzAFf8R.js";import"./ItemControls-Cwe9s8QR.js";import"./Badge-C4nIiofZ.js";import"./Tooltip-Cey7ITFK.js";import"./ChevronRight-BItcH0VL.js";import"./ArrowUndo-Cse4EeXq.js";import"./MenuListDivider-Bbe3EvM4.js";import"./Fieldset-DmGeVaah.js";import"./Field-09k_Fgnw.js";import"./Label-DrdmFEDz.js";import"./Input-w1DANTSA.js";import"./Datepicker-Bhi79_kD.js";import"./SearchField-DukYslSD.js";import"./MagnifyingGlass-CVQmLynz.js";import"./FieldBase-gSBe5vO6.js";import"./Typography-DnprxIFo.js";import"./useMenu-BJG43rHp.js";import"./MenuListHeading-Y6BZZd_3.js";import"./InformationSquare-ZkZeHusi.js";import"./Paperclip-Dn9d9bhb.js";import"./Eye-B67ED8HG.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-fk9ZJfiD.js";import"./useDropdownMenuController-CJ7JaMXA.js";import"./Dropdown-C9l14m04.js";import"./Plus-FoCTTomm.js";import"./ButtonGroup-DEQPq0-6.js";import"./ButtonGroupDivider-DmW0LByL.js";import"./ChevronUpDown-BUNtu_Ei.js";import"./ToolbarMenu-CyHXgfkz.js";import"./ToolbarSearch-Dg7pxinA.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
