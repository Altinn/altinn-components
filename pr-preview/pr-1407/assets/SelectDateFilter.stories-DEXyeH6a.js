var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a5 as t}from"./iframe-CmcSEjvS.js";import{S as m}from"./SelectDateFilter-C7TKKH-X.js";import{t as s}from"./example.data-b1MmvhRQ.js";import{a as l}from"./example.hooks-YlNz5HeC.js";import{T as p,a as c}from"./Toolbar-CvLmVBs-.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-B5N7S_-C.js";import"./MenuListItem-BL-id_u-.js";import"./MenuItem-BJhn9r_O.js";import"./CheckboxUncheckedIcon-BBoJFSSq.js";import"./RadioUncheckedIcon-VgJlolIv.js";import"./ItemMedia-BefRyocx.js";import"./Avatar-e7KasoHp.js";import"./AvatarGroup-CK0XwNSh.js";import"./ItemLabel-s_xPF5R8.js";import"./Heading-vmMoflPs.js";import"./useHighlightedText-DJAL4JcK.js";import"./ItemControls-YGZP0Vjk.js";import"./Badge-DDzGMVSy.js";import"./Tooltip-BzKHjYiv.js";import"./ChevronRight-B5wtiA4y.js";import"./ArrowUndo-iwGs3R4E.js";import"./MenuListDivider-wZXMjqHS.js";import"./Fieldset-DTtqGaAE.js";import"./Field-00i3_VLV.js";import"./Label-C2oW91xs.js";import"./Input-C0nOO2ZR.js";import"./Datepicker-Ch0KBn82.js";import"./SearchField-DQeX1ZYV.js";import"./MagnifyingGlass-C2kDbxXn.js";import"./MenuListHeading-BKPqFrC5.js";import"./FieldBase-C-IkhlpM.js";import"./Typography-sASlV-kd.js";import"./useMenu-C4pen0si.js";import"./InformationSquare-6xY-3cyl.js";import"./Paperclip-kSmXwm27.js";import"./Eye-BGGU7QHB.js";import"./MenuHamburger-C5VZ8Cb8.js";import"./useDropdownMenuController-CjF5utG_.js";import"./Dropdown-BXdn9jDY.js";import"./Plus-DVOeMTJ7.js";import"./ButtonGroup-Cpml5GDI.js";import"./ButtonGroupDivider-BTw_i8uf.js";import"./ChevronUpDown-DU_qA88P.js";import"./ToolbarMenu-D_cRkqA5.js";import"./ToolbarSearch-B-k21Sb5.js";const st={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),mt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};export{a as CustomName,o as Datepicker,n as RemovableDatepicker,mt as __namedExportsOrder,st as default};
