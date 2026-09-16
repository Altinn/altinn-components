import{a7 as t}from"./iframe-DJnynaCo.js";import{S as a}from"./SelectDateFilter-DHAdTn4H.js";import{t as n}from"./example.data-n_5oBxll.js";import{a as s}from"./example.hooks-V1xTw2pL.js";import{T as m,a as l}from"./Toolbar-C881DLJx.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-BNsjkgeY.js";import"./MenuListItem-Ci9AWxXv.js";import"./MenuItem-MEQzSQZF.js";import"./ItemMedia-UE0Xgjah.js";import"./Avatar-BkXKEErw.js";import"./AvatarGroup-C7fA72SD.js";import"./Checkmark-b-ALmYFM.js";import"./ItemLabel-CWPkZwXM.js";import"./Heading-DlyjjAZZ.js";import"./useHighlightedText-CYNOolzk.js";import"./ItemControls-CHuQfTIH.js";import"./Badge-CnaY1St8.js";import"./Tooltip-D6A63mE4.js";import"./ChevronRight-C7aaNXCF.js";import"./ArrowUndo-_eOhqtEM.js";import"./MenuListDivider-B4GlA6zr.js";import"./Fieldset-C2ojUX-O.js";import"./Field-CUMpXqzl.js";import"./Label-DeMCQWn2.js";import"./Input-BYb8Xo7l.js";import"./Datepicker-D0kWqTAi.js";import"./SearchField-DQ5LjUme.js";import"./MagnifyingGlass-D5ryHey3.js";import"./FieldBase-D0EiQS06.js";import"./Typography-CiLhkoi6.js";import"./useMenu-Dk5q8tzl.js";import"./MenuListHeading-DcFAqgb-.js";import"./InformationSquare-Bwpxsw1g.js";import"./Paperclip-BABKEy81.js";import"./Eye-B1BdvE2W.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-C7HX5DPN.js";import"./useDropdownMenuController-CZOriFGV.js";import"./Dropdown-DqJi5yfL.js";import"./Plus-Ddr8PqBX.js";import"./ButtonGroup-BNd80tZA.js";import"./ButtonGroupDivider-C1U5tzI_.js";import"./ChevronUpDown-C25m6wF8.js";import"./ToolbarMenu-CkVc3lpc.js";import"./ToolbarSearch-tduaXae_.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
