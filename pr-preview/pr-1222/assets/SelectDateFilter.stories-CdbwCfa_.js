import{a7 as t}from"./iframe-D3QbR5Le.js";import{S as a}from"./SelectDateFilter-FGuEJm1Y.js";import{t as n,a as s}from"./example.hooks-WDFC9B9l.js";import{T as m,a as l}from"./Toolbar-C1DupJ55.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CIRSIckJ.js";import"./MenuItem-p2P7kMgy.js";import"./ItemMedia-By1N_mbL.js";import"./Avatar-0HMs51Xi.js";import"./AvatarGroup-BqAJnN7l.js";import"./Checkmark-DPa9YJ2d.js";import"./ItemLabel-D38lX0bX.js";import"./Heading-D807jdih.js";import"./useHighlightedText-Cs6VCP7b.js";import"./ItemControls-UDFYeL-1.js";import"./Badge-D-6Sz0uL.js";import"./Tooltip-r3UZaGLO.js";import"./ChevronRight-CW8WMRnL.js";import"./ArrowUndo-K62ELgv2.js";import"./MenuListHeading-CUGWWC4c.js";import"./Fieldset-5LTqSg2E.js";import"./Field-CmklkMP8.js";import"./Label-1ernyuR0.js";import"./Input-fbRgifOV.js";import"./Datepicker-BGmNo8Xc.js";import"./SearchField-C1oRwJ9X.js";import"./MagnifyingGlass-odaglt7B.js";import"./FieldBase-BVisqjo6.js";import"./Typography-Dc0CQRXO.js";import"./useMenu-CKRyFifW.js";import"./index-1UUqftsp.js";import"./InformationSquare-B-kAc2gK.js";import"./Paperclip-BjsLwjoT.js";import"./Eye-bQD8N6fQ.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-LJWJnc75.js";import"./useDropdownMenuController-DUFIDFh-.js";import"./Dropdown-DfrU0yXs.js";import"./Plus-CH4rOE0f.js";import"./ButtonGroup-BYb3YlMN.js";import"./ButtonGroupDivider-TW74zNhR.js";import"./ChevronUpDown-Djy0J9Oq.js";import"./ToolbarMenu-BTFX5aP6.js";import"./ToolbarSearch-pEOyeeVn.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const ot=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,ot as __namedExportsOrder,it as default};
