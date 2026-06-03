import{a7 as t}from"./iframe-pmb13xcr.js";import{S as a}from"./SelectDateFilter-BeXKLX7t.js";import{t as n,a as s}from"./example.hooks-DLJ0rkww.js";import{T as m,a as l}from"./Toolbar-Cd7qBdTs.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-DW-1hJGg.js";import"./MenuItem-D_bFc04X.js";import"./ItemMedia-BGgA1RRu.js";import"./Avatar-DgFMZdvt.js";import"./AvatarGroup-C5Tz0kQR.js";import"./Checkmark-Cm7hyVD6.js";import"./ItemLabel-0x089RNk.js";import"./Heading-sU40TroH.js";import"./useHighlightedText-By0gZF-u.js";import"./ItemControls-CCuuzoug.js";import"./Badge-CDoJNvMh.js";import"./Tooltip-BV9R0mmr.js";import"./ChevronRight-BcL3woie.js";import"./ArrowUndo-CIAjkSEj.js";import"./MenuListHeading-B2QtO_LB.js";import"./Fieldset-Ceo6stsg.js";import"./Field-Dm0MSPIi.js";import"./Label-CxwvdH9w.js";import"./Input-CJNvWYoB.js";import"./Datepicker-CzgpBEsa.js";import"./SearchField-xzT30cQx.js";import"./MagnifyingGlass-HRL7caCa.js";import"./FieldBase-DlkZCCjW.js";import"./Typography-BgUhg-DC.js";import"./useMenu-PFiIjJ-b.js";import"./index-B1Y0FrCw.js";import"./InformationSquare-Bin60tyG.js";import"./Paperclip-DcB5Ctck.js";import"./Eye-CkEdJxfZ.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Ml3xcBiW.js";import"./useDropdownMenuController-CLuQSoQG.js";import"./Dropdown-BPuWmM11.js";import"./Plus-CpF1S0sT.js";import"./ButtonGroup-DvNffpdA.js";import"./ButtonGroupDivider-rjyiDHvV.js";import"./ChevronUpDown-DIsXonMg.js";import"./ToolbarMenu-BEbkzDEI.js";import"./ToolbarSearch-D9wqlmos.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
