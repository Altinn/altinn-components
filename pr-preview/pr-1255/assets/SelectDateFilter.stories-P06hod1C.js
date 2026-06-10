import{a7 as t}from"./iframe-Dm8TtyEm.js";import{S as a}from"./SelectDateFilter-Bd6cvofG.js";import{t as n,a as s}from"./example.hooks-B8XrShgH.js";import{T as m,a as l}from"./Toolbar-Cr4Ik5xT.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-DVBeGhr8.js";import"./MenuItem-BrCYHgzq.js";import"./ItemMedia-Cx5_mc3M.js";import"./Avatar-HtfurA5B.js";import"./AvatarGroup-BsqgGW-3.js";import"./Checkmark-BrBHBs34.js";import"./ItemLabel-dygaK8X7.js";import"./Heading-o839anme.js";import"./useHighlightedText-C_daNKpv.js";import"./ItemControls-DU_1Chfl.js";import"./Badge-BUZLj2O_.js";import"./Tooltip-CnXzuJ5u.js";import"./ChevronRight-C5Kx_riS.js";import"./ArrowUndo-DB164unm.js";import"./MenuListHeading-B94v3TIt.js";import"./Fieldset-BSTaf93F.js";import"./Field-C6fjvq8K.js";import"./Label-CNUH_E96.js";import"./Input-CDGaFfUN.js";import"./Datepicker-B8n93SAs.js";import"./SearchField-BpAQrR42.js";import"./MagnifyingGlass-CNs4qd9f.js";import"./FieldBase-CGX4UQb4.js";import"./Typography-DQcL3Ryl.js";import"./useMenu-C6oFKHtp.js";import"./index-nln3YNzx.js";import"./InformationSquare-DpmHVTHW.js";import"./Paperclip-Csih7qXz.js";import"./Eye-DFLKX6Ek.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-B-zrC2zx.js";import"./useDropdownMenuController-CfwueQUn.js";import"./Dropdown-CZ-eIzfb.js";import"./Plus-C1QsrUU0.js";import"./ButtonGroup-Cvq3R7p4.js";import"./ButtonGroupDivider-DZY-jAP1.js";import"./ChevronUpDown-WNhFs5tk.js";import"./ToolbarMenu-B0ka5Fx1.js";import"./ToolbarSearch-jDeYxRSL.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
