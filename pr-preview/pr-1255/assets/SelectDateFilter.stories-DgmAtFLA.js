import{a7 as t}from"./iframe-2h8IP8d3.js";import{S as a}from"./SelectDateFilter-DcJnKRkD.js";import{t as n,a as s}from"./example.hooks-xQJNC1Vn.js";import{T as m,a as l}from"./Toolbar-Ca_cruzG.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-Hai_8lyR.js";import"./MenuListItem-Bu8N3gRa.js";import"./MenuItem-Cg_2HM56.js";import"./ItemMedia-F0nN_YEB.js";import"./Avatar-C_KS8ezx.js";import"./AvatarGroup-ChTLLSw-.js";import"./Checkmark-kZsld0tw.js";import"./ItemLabel-DAuWzgED.js";import"./Heading-DXu-0NAz.js";import"./useHighlightedText-CelzCUqF.js";import"./ItemControls-F7yjZiAX.js";import"./Badge-Pn_S1ZTN.js";import"./Tooltip-D08FTuVb.js";import"./ChevronRight-Bz8Cr0I4.js";import"./ArrowUndo-P3YakjFB.js";import"./MenuListDivider-C4ZS-zxE.js";import"./Fieldset-CceoEhXA.js";import"./Field-BxD7Ql4y.js";import"./Label-ZzFKhgKK.js";import"./Input-CcSuNkw7.js";import"./Datepicker-C116a800.js";import"./SearchField-_MN_HrdV.js";import"./MagnifyingGlass-CI0_p9bj.js";import"./FieldBase-DGYDbbnf.js";import"./Typography-DY06DO0f.js";import"./useMenu-DBT0rzRb.js";import"./MenuListHeading-CFPiwF83.js";import"./index-CQmnZsg3.js";import"./InformationSquare-DAAIm6NS.js";import"./Paperclip-CxHIuIvc.js";import"./Eye-CIUoiCOO.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-t7pO2iZ9.js";import"./useDropdownMenuController--HjFekig.js";import"./Dropdown-BKTHH5xT.js";import"./Plus-VIPYJ0p2.js";import"./ButtonGroup-Ct8EhDC8.js";import"./ButtonGroupDivider-DKSeMAf-.js";import"./ChevronUpDown-_l_w1G-T.js";import"./ToolbarMenu-CllNiYX6.js";import"./ToolbarSearch-D8P9irAY.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
