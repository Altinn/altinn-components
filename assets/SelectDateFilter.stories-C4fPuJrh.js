import{a7 as t}from"./iframe-CSiNS2_t.js";import{S as a}from"./SelectDateFilter-DrhofRct.js";import{t as n}from"./example.data-BPP_7m10.js";import{a as s}from"./example.hooks-BhNZjdcu.js";import{T as m,a as l}from"./Toolbar-Dbt9jT0e.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CyWVmjHP.js";import"./MenuListItem-BphPPZ1-.js";import"./MenuItem-EWHoKTTM.js";import"./ItemMedia-DGv-wSpo.js";import"./Avatar-BZjVPcts.js";import"./AvatarGroup-By7Dr3dC.js";import"./Checkmark-BXugcN3r.js";import"./ItemLabel-C0x86jDQ.js";import"./Heading-BPvQUGVy.js";import"./useHighlightedText-Cb4_TuQn.js";import"./ItemControls-Cqj4-f4C.js";import"./Badge-CCAu-QUf.js";import"./Tooltip-CTn3iU7H.js";import"./ChevronRight-dChxZgZA.js";import"./ArrowUndo-BadzpM_H.js";import"./MenuListDivider-DaQR_cA_.js";import"./Fieldset-CQqLZfCg.js";import"./Field-dYgOH5Kq.js";import"./Label-p2f33G11.js";import"./Input-BUqwhKEV.js";import"./Datepicker-BQpja_FY.js";import"./SearchField-404uhg7e.js";import"./MagnifyingGlass-L16wMwR7.js";import"./FieldBase-rPqTSW37.js";import"./Typography-tfUHPeKu.js";import"./useMenu-DQhM8YBj.js";import"./MenuListHeading-oP2DliYX.js";import"./InformationSquare-BVqQ7zdO.js";import"./Paperclip-D01utT8q.js";import"./Eye-DPyOhO7V.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BIDisRNk.js";import"./useDropdownMenuController-BLzkNBR-.js";import"./Dropdown-DvIMOq-U.js";import"./Plus-BIfsBTTp.js";import"./ButtonGroup-D1fEqQ1N.js";import"./ButtonGroupDivider-DfTuAjlw.js";import"./ChevronUpDown-C_MVpDOS.js";import"./ToolbarMenu-Dh3kZ0-W.js";import"./ToolbarSearch-DJCiNHBT.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
