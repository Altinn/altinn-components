import{a7 as t}from"./iframe-D-JzFSbn.js";import{S as a}from"./SelectDateFilter-C95lVe0T.js";import{t as n}from"./example.data-DpSuS-yl.js";import{a as m}from"./example.hooks-1h6k5xbZ.js";import{T as s,a as l}from"./Toolbar-ic5DL5hr.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-B9RAZCrS.js";import"./MenuListItem-B4OcKy0A.js";import"./MenuItem-wkNgjJsE.js";import"./ItemMedia-CHlzWEIP.js";import"./Avatar-CPNNDSUm.js";import"./AvatarGroup-DlAxwCWG.js";import"./Checkmark-DBXA_uc3.js";import"./ItemLabel-BqeVkIUZ.js";import"./Heading-BuD5A-91.js";import"./useHighlightedText-kVudreWZ.js";import"./ItemControls-B8a9YN0L.js";import"./Badge-DZcjaRxr.js";import"./Tooltip-CY73UMt9.js";import"./ChevronRight-CnTD3zzq.js";import"./ArrowUndo-d5C4LDWT.js";import"./MenuListDivider-DzTLggx0.js";import"./Fieldset-BTeG8zGc.js";import"./Field-DohC7fWs.js";import"./Label-CCpB5jSj.js";import"./Input--gXn6N4P.js";import"./Datepicker-CK7O3GrB.js";import"./SearchField-Cu2rkG8b.js";import"./MagnifyingGlass-C1TVcE_3.js";import"./FieldBase-BAxlQmDt.js";import"./Typography-B37rH5fJ.js";import"./useMenu-DF0RLrk1.js";import"./MenuListHeading-B2S0HcdV.js";import"./index-DYYLOhVB.js";import"./InformationSquare-C8p8jAhr.js";import"./Paperclip-C-3fku1V.js";import"./Eye-DBkbZns5.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DoyVxZov.js";import"./useDropdownMenuController-dLXTUAgz.js";import"./Dropdown-CQOJCobW.js";import"./Plus-D_QwnLRF.js";import"./ButtonGroup-DM3FeQWD.js";import"./ButtonGroupDivider-tJv6yybS.js";import"./ChevronUpDown-DbbRNNdg.js";import"./ToolbarMenu-D4USdHwc.js";import"./ToolbarSearch-BKjsei65.js";const at={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const mt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,mt as __namedExportsOrder,at as default};
