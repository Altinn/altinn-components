import{a7 as t}from"./iframe-CENvAP26.js";import{S as a}from"./SelectDateFilter-BGtuSQBA.js";import{t as n,a as s}from"./example.hooks-CJTuBAzl.js";import{T as m,a as l}from"./Toolbar-DpO9GV8k.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-BT-iZ3cq.js";import"./MenuItem-Fa6rC5wV.js";import"./ItemMedia-C5TE1h6m.js";import"./Avatar-D1pW8xSr.js";import"./AvatarGroup-CTCyh_uW.js";import"./Checkmark-D1ifpvt_.js";import"./ItemLabel-CqdC7zrv.js";import"./Heading-mra_L4pQ.js";import"./useHighlightedText-BwOLK-i3.js";import"./ItemControls-DaWh-3zk.js";import"./Badge-DDGgDt_B.js";import"./Tooltip-B6qNZOKm.js";import"./ChevronRight-CqCnB5Zg.js";import"./ArrowUndo-DxMsWBCJ.js";import"./MenuListHeading-BD0rgLCP.js";import"./Fieldset-Be_GI-q1.js";import"./Field-oHEtcERA.js";import"./Label-N53R6xsN.js";import"./Input-CMkEMAO8.js";import"./Datepicker-F5cMPM52.js";import"./SearchField-B76VS5jy.js";import"./MagnifyingGlass-DDkWwcsn.js";import"./FieldBase-IIcWSE0k.js";import"./Typography-BK5AylHP.js";import"./useMenu-DmwlujsT.js";import"./index-BzTqrnLh.js";import"./InformationSquare-DfDfuKua.js";import"./Paperclip-C8W8HItg.js";import"./Eye-UuKaNYky.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-acEhsrwC.js";import"./useDropdownMenuController-BbdnPNgS.js";import"./Dropdown-BZVY_4Wm.js";import"./Plus-CWY-kAGj.js";import"./ButtonGroup-C4l5taXG.js";import"./ButtonGroupDivider-1X3Nwv0w.js";import"./ChevronUpDown-Ca6IZrDH.js";import"./ToolbarMenu-CsmlAKby.js";import"./ToolbarSearch-Ds1gk2xh.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
