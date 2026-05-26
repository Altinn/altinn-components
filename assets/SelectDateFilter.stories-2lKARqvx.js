import{p as t}from"./iframe-a6n42jIx.js";import{S as a}from"./SelectDateFilter-Ceg5z9Xm.js";import{t as n,a as m}from"./example.hooks-DXy9NmH3.js";import{T as s,a as l}from"./Toolbar-CIlW7YHV.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-BG5nT3q2.js";import"./index-D2z1-3lt.js";import"./MenuItem-DlDQtEmE.js";import"./ItemMedia-9TYJyMgm.js";import"./XMark-ENWUN_kz.js";import"./useId-JsUrCC3L.js";import"./Avatar-DDS_Cv_Z.js";import"./Skeleton-BMznOa58.js";import"./AvatarGroup-BaunAvi6.js";import"./Icon-C2KYL6xM.js";import"./Checkmark-NdO0COsu.js";import"./Heading-Dza3pExo.js";import"./useHighlightedText-Bq-Ej33u.js";import"./ItemControls-vHjq0nAG.js";import"./Badge-BmuPJ3WS.js";import"./Tooltip-CHTkUxru.js";import"./tooltip-D8RdZxwd.js";import"./ChevronRight-DzQRiVjQ.js";import"./ArrowUndo-BXKQsB65.js";import"./MenuListHeading-Bp0V-0Ne.js";import"./Fieldset-DQYus6I2.js";import"./Label-CP4RT8OS.js";import"./Input-BUxVKC9v.js";import"./Datepicker-tnVWsN5v.js";import"./Button-DYhT04-k.js";import"./SearchField-Cpk_dpFX.js";import"./MagnifyingGlass-CsfVCXI1.js";import"./FieldBase-BOMRGuHX.js";import"./Typography-K_BS0H0I.js";import"./useMenu-BnSKl7OB.js";import"./index-Bc5QqnLi.js";import"./InformationSquare-DAX_zw-n.js";import"./Paperclip-BRGVjuSY.js";import"./Eye-CrHnsRDH.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CET8gFNo.js";import"./useDropdownMenuController-ChUHZsVx.js";import"./Dropdown-MBw9TKMx.js";import"./Plus-DWNwY5kK.js";import"./ButtonGroup-r8c9eAn-.js";import"./ButtonGroupDivider-Bgl5eh5n.js";import"./ChevronUpDown-jw4Svc_J.js";import"./ToolbarMenu-Dv5AKmqP.js";import"./ToolbarSearch-y1cFyJwK.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const lt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,lt as __namedExportsOrder,st as default};
