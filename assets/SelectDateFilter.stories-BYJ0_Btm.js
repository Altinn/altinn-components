import{a7 as t}from"./iframe-CvGAoPsc.js";import{S as a}from"./SelectDateFilter-DJkfSeMH.js";import{t as n,a as s}from"./example.hooks-BGAYq2EH.js";import{T as m,a as l}from"./Toolbar-CgjyJvyR.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CG5q7PCk.js";import"./MenuItem-CixWxF6L.js";import"./ItemMedia-CdB4UUVE.js";import"./Avatar-Bjc-Jmrn.js";import"./AvatarGroup-_sxbmMl3.js";import"./Checkmark-Db10x7b8.js";import"./ItemLabel-BBQQw1-7.js";import"./Heading--2u1ER42.js";import"./useHighlightedText-9vbrUFu0.js";import"./ItemControls-CFHaIVdN.js";import"./Badge-C_wE1QB8.js";import"./Tooltip-BfnkAeey.js";import"./ChevronRight-CMCEl43v.js";import"./ArrowUndo-BoaXS6mH.js";import"./MenuListHeading-CgytQ4SA.js";import"./Fieldset-Bn96NuVP.js";import"./Field-jyfGm65f.js";import"./Label-CufJDrgK.js";import"./Input-CQ0xvTw5.js";import"./Datepicker-DwFiCONq.js";import"./SearchField-BnKKet4K.js";import"./MagnifyingGlass-B5EFcWq7.js";import"./FieldBase-DoX_7GiJ.js";import"./Typography-BnX3Du0Y.js";import"./useMenu-CZTVrDBq.js";import"./index-CRXgSDNk.js";import"./InformationSquare-DmU_7K9H.js";import"./Paperclip-Dl4FRSdV.js";import"./Eye-qLUoBUwL.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CVGE1V0h.js";import"./useDropdownMenuController-DHE3Yfxx.js";import"./Dropdown-wMqb1yc7.js";import"./Plus-gM9Gdbeo.js";import"./ButtonGroup-CN_FlQBy.js";import"./ButtonGroupDivider-BlUvmc5K.js";import"./ChevronUpDown-C8ASwfc2.js";import"./ToolbarMenu-B2CC95NW.js";import"./ToolbarSearch-CgtFtLlX.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
