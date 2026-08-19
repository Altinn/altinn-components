import{a7 as t}from"./iframe-F_FB4Yxl.js";import{S as a}from"./SelectDateFilter-BSGHJv8y.js";import{t as n}from"./example.data-ct0T1RuD.js";import{a as s}from"./example.hooks-D0DhCaML.js";import{T as m,a as l}from"./Toolbar-DMCznzw3.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CbTiEssn.js";import"./MenuListItem-X5TFO5En.js";import"./MenuItem-Cx2LMlDr.js";import"./ItemMedia-CoUbiAZN.js";import"./Avatar-DE7K7igg.js";import"./AvatarGroup-B7Qf-EGM.js";import"./Checkmark-CMCe3Dch.js";import"./ItemLabel-BJusrNMy.js";import"./Heading-Cj7rgSGX.js";import"./useHighlightedText-CJsPbXHy.js";import"./ItemControls-4PJArwOE.js";import"./Badge-C_852a7b.js";import"./Tooltip-B803JVqh.js";import"./ChevronRight-f1WSa4_L.js";import"./ArrowUndo-CzLdUdgc.js";import"./MenuListDivider-Cy2nuh7X.js";import"./Fieldset-CgBsiW-r.js";import"./Field-DOnuYCd0.js";import"./Label-DEw_iIGq.js";import"./Input-CADZ4I-X.js";import"./Datepicker-TJRO24PR.js";import"./SearchField-XLSYMjsy.js";import"./MagnifyingGlass-xYv1kWZx.js";import"./FieldBase-DKsxkZ_u.js";import"./Typography-BQdVTYYF.js";import"./useMenu-DGY2fmdm.js";import"./MenuListHeading-BlfnlMHy.js";import"./InformationSquare-DJU8cSbx.js";import"./Paperclip-DDdjob3E.js";import"./Eye-KK66zUsA.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-cCPt-O4j.js";import"./useDropdownMenuController-CALQpcRF.js";import"./Dropdown-Qibhj6Vz.js";import"./Plus-CvcVl1NJ.js";import"./ButtonGroup-BZH662VO.js";import"./ButtonGroupDivider-B3GCd1Sj.js";import"./ChevronUpDown-BuVJdU7e.js";import"./ToolbarMenu-bJax73tp.js";import"./ToolbarSearch-BPALWYFw.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
