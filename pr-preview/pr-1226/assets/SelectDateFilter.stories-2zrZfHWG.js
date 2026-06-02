import{a7 as t}from"./iframe-Ci8DJ-6R.js";import{S as a}from"./SelectDateFilter-orGdOmRf.js";import{t as n,a as s}from"./example.hooks-Ds8p9E2u.js";import{T as m,a as l}from"./Toolbar-Buvwt5DY.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-Cpkt8LLi.js";import"./MenuItem-CLCRatEV.js";import"./ItemMedia-D2PQb4gS.js";import"./Avatar-D3AIreGS.js";import"./AvatarGroup-D3N3OV8x.js";import"./Checkmark-V7YKXO-0.js";import"./ItemLabel-D6hw0WzI.js";import"./Heading-CWZTf72r.js";import"./useHighlightedText-CMND7wU2.js";import"./ItemControls-DXMoT8B2.js";import"./Badge-CVr9GptX.js";import"./Tooltip-CGvNbStB.js";import"./ChevronRight-BEnuMmPo.js";import"./ArrowUndo-vXvPRQCY.js";import"./MenuListHeading-CkHpUapY.js";import"./Fieldset-B4ioRMev.js";import"./Field-C7mGyyvw.js";import"./Label-BZiKx0Le.js";import"./Input-DWxDHqSK.js";import"./Datepicker-BnPTOA_o.js";import"./SearchField-BI6hQSM3.js";import"./MagnifyingGlass--VnpSKzI.js";import"./FieldBase-CJmJ_FUR.js";import"./Typography-C-nn41yV.js";import"./useMenu-7RMszhcf.js";import"./index-dwvgmSh8.js";import"./InformationSquare-CEM0wkOI.js";import"./Paperclip-C3-qst4O.js";import"./Eye-D7P8toDb.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-wLQDd0FF.js";import"./useDropdownMenuController-C7yQw1zK.js";import"./Dropdown-DPTyogAf.js";import"./Plus-5W3QRt0z.js";import"./ButtonGroup-BYverAEg.js";import"./ButtonGroupDivider-CbGS_QDF.js";import"./ChevronUpDown-B2xWlDPi.js";import"./ToolbarMenu--3FAbZwG.js";import"./ToolbarSearch-Bs15t96k.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
