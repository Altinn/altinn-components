import{a7 as t}from"./iframe-C2dzRmjh.js";import{S as a}from"./SelectDateFilter-CE8m0we8.js";import{t as n}from"./example.data-MRhGdyvm.js";import{a as s}from"./example.hooks-prm3WGx0.js";import{T as m,a as l}from"./Toolbar-BTyAQSx8.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CviRUKqZ.js";import"./MenuListItem-4Fso0lef.js";import"./MenuItem-BNIi9g5E.js";import"./ItemMedia-BDW8lmrL.js";import"./Avatar-JufbU_Wx.js";import"./AvatarGroup-Dco4ceHR.js";import"./Checkmark-BherDihq.js";import"./ItemLabel-dXZ3Y_Gg.js";import"./Heading-CfKKA19E.js";import"./useHighlightedText-DV4hS6Cx.js";import"./ItemControls-dnLa86IT.js";import"./Badge-BtitS9Rx.js";import"./Tooltip-yHxi1dML.js";import"./ChevronRight-DtjNYNu3.js";import"./ArrowUndo-e1ZOBjb3.js";import"./MenuListDivider-F2YAa9H7.js";import"./Fieldset-f7lBh5K_.js";import"./Field-B-1S4h3H.js";import"./Label-_M2OAFvX.js";import"./Input-DA-lDvIm.js";import"./Datepicker-BBNbNWxE.js";import"./SearchField-uOvA63Zf.js";import"./MagnifyingGlass-D4s7mQ1G.js";import"./FieldBase-Dvh5lIYF.js";import"./Typography-DJs4mnKu.js";import"./useMenu-BFtnvp_l.js";import"./MenuListHeading-C9cVAuQ-.js";import"./InformationSquare-D0pKd-n8.js";import"./Paperclip-CFnS3zPL.js";import"./Eye-BuuGbkX-.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-oqzJhj6q.js";import"./useDropdownMenuController-BTTkoYGq.js";import"./Dropdown-DtS9S0hY.js";import"./Plus-CZi1FHk4.js";import"./ButtonGroup-BU_SIQJX.js";import"./ButtonGroupDivider-BtZGHb7R.js";import"./ChevronUpDown-fwYk0Kt7.js";import"./ToolbarMenu-Bvvgne6n.js";import"./ToolbarSearch-DNn3XfK0.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
