import{a7 as t}from"./iframe-B0WoJH5H.js";import{S as a}from"./SelectDateFilter-BnaLHELe.js";import{t as n,a as s}from"./example.hooks-DukhLw_U.js";import{T as m,a as l}from"./Toolbar-Dy5c9lMa.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-DBrd4sth.js";import"./MenuItem-DWXRYnde.js";import"./ItemMedia-BWZiVBkm.js";import"./Avatar-DoqQG8m_.js";import"./AvatarGroup-CareQQNx.js";import"./Checkmark-szHKU0qA.js";import"./ItemLabel-3EoqOPb2.js";import"./Heading-DxONre_z.js";import"./useHighlightedText-BkoAp9J_.js";import"./ItemControls-AxIj9K4z.js";import"./Badge-D2udDyy3.js";import"./Tooltip-KSMOwJOX.js";import"./ChevronRight-DJgUHhg2.js";import"./ArrowUndo-CQUYnDVr.js";import"./MenuListHeading-Czl8ffQE.js";import"./Fieldset-B1ydRpet.js";import"./Field-CdETmOUd.js";import"./Label-CQqygcqp.js";import"./Input-CGgDhHHk.js";import"./Datepicker-B7kZnopQ.js";import"./SearchField-B4XHRk25.js";import"./MagnifyingGlass-BMHKxaiy.js";import"./FieldBase-HmzGYXkl.js";import"./Typography-BsE1w5gb.js";import"./useMenu-BEojsPyg.js";import"./index-BYFLACqY.js";import"./InformationSquare-C2uJAFQZ.js";import"./Paperclip-BbrjzgEe.js";import"./Eye-Cp93npSp.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-B-sBFcFJ.js";import"./useDropdownMenuController-CzjMq5Jo.js";import"./Dropdown-trRXYlHt.js";import"./Plus-teIaH_CW.js";import"./ButtonGroup-DflqcQYY.js";import"./ButtonGroupDivider-Dra4Ourz.js";import"./ChevronUpDown-CnUW0Fwm.js";import"./ToolbarMenu-BvyEK670.js";import"./ToolbarSearch-CNaUMIKd.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
