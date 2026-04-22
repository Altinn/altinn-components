import{j as t}from"./iframe-Bs6hWG43.js";import{S as a}from"./SelectDateFilter-H_0O5SET.js";import{u as m,t as n}from"./example.hooks-BpmjGcQs.js";import{T as s,a as l}from"./Toolbar-BoXZ-EZk.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-aC05jVU6.js";import"./useId-eW1Sa_eP.js";import"./Datepicker-rZQKhUp-.js";import"./index-DbNSDn3W.js";import"./ChevronRight-Xe9lB9nu.js";import"./Button-eHvnmE12.js";import"./button-BtRKSTW7.js";import"./use-merge-refs-CXrn4uAk.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-CaCKNFL_.js";import"./MenuItem-BL3nnmC3.js";import"./ItemMedia-B6-8h9P0.js";import"./XMark-Cx14Anho.js";import"./Avatar-BN7VNN79.js";import"./Skeleton-7NyHq6Da.js";import"./AvatarGroup-DiHJ7hxR.js";import"./Icon-DjH00Hl5.js";import"./Checkmark-YSQh9b-J.js";import"./Heading-C3DAZ3La.js";import"./useHighlightedText-ByR3-iok.js";import"./ItemControls-CsoavSOP.js";import"./Badge-XV6ITEub.js";import"./Tooltip-8ajV2_Od.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-DBtCNSz-.js";import"./Fieldset-BwyKCbpr.js";import"./index--1NR6hdE.js";import"./Label-CqwIAbNx.js";import"./Input-eDTGHBrL.js";import"./input-DdjwQdrU.js";import"./SearchField-CTJqYruH.js";import"./MagnifyingGlass-ByFYxaCQ.js";import"./FieldBase-BwWmF8XK.js";import"./Typography-4Wb6MR64.js";import"./useMenu-Be0b91uO.js";import"./InformationSquare-C3jahF3t.js";import"./Paperclip-C8Xj9F1x.js";import"./Eye-Bdit91ei.js";import"./MenuHamburger-C29TE0o8.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-D42biJGY.js";import"./Plus-D6ext0KH.js";import"./Dropdown-z94Rg748.js";import"./ChevronUpDown-CVBqxrpS.js";import"./ButtonGroup-eeakMgVk.js";import"./ButtonGroupDivider-FKdNiVfP.js";import"./ToolbarMenu-CQxaskWs.js";import"./ToolbarSearch-BUhR0QTI.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const Ft=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,Ft as __namedExportsOrder,dt as default};
