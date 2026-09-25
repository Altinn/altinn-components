import{a7 as t}from"./iframe-vkxhbe5D.js";import{S as a}from"./SelectDateFilter-Dwt85ubw.js";import{t as n}from"./example.data-DM0nO1wp.js";import{a as s}from"./example.hooks-Ce5Aze5f.js";import{T as m,a as l}from"./Toolbar-DvOjf0om.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-DQcXI5HR.js";import"./MenuListItem-BToT8FwM.js";import"./MenuItem-CzOEvYQv.js";import"./ItemMedia-iOETwWXj.js";import"./Avatar-DCCKPKpG.js";import"./AvatarGroup-73OlPczV.js";import"./Checkmark-DIeTkJdw.js";import"./ItemLabel-C5WGMqIp.js";import"./Heading-BheO61Dl.js";import"./useHighlightedText-DzpG-WJS.js";import"./ItemControls-Dt4HN_B7.js";import"./Badge-B0jqz-MR.js";import"./Tooltip-BAvCNtSf.js";import"./ChevronRight-BjSUzT6t.js";import"./ArrowUndo-Bf20gtxc.js";import"./MenuListDivider-DNPFWOP3.js";import"./Fieldset-DmG9BQOf.js";import"./Field-BcGRggAS.js";import"./Label-DJ_rl2vz.js";import"./Input-B9GDLkmV.js";import"./Datepicker-IKVntiSJ.js";import"./SearchField-CsfKU_3v.js";import"./MagnifyingGlass-BUxkWaxO.js";import"./FieldBase-BW43HWjL.js";import"./Typography-CiocPTHR.js";import"./useMenu-pP3xGIIj.js";import"./MenuListHeading-DcoOXLFk.js";import"./InformationSquare-BqHcnGOZ.js";import"./Paperclip-CqBUMo5b.js";import"./Eye-Ci0jSOpI.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BFbOeUvX.js";import"./useDropdownMenuController-Bj71dSIy.js";import"./Dropdown-DT6AevuE.js";import"./Plus-DvLwQ2c5.js";import"./ButtonGroup-Bd7c8rmX.js";import"./ButtonGroupDivider-DyDsKVxf.js";import"./ChevronUpDown-BC1Pg9KM.js";import"./ToolbarMenu-DOn-kGHm.js";import"./ToolbarSearch-S1S0N9X0.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
