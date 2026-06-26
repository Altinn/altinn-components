import{a7 as t}from"./iframe-BlxKDeRn.js";import{S as a}from"./SelectDateFilter-qVWH8t5v.js";import{t as n}from"./example.data-UiU7QCDz.js";import{a as s}from"./example.hooks-DGkot99I.js";import{T as m,a as l}from"./Toolbar-20ioumdA.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CCeelThC.js";import"./MenuListItem-BhvFARid.js";import"./MenuItem-npmNxACF.js";import"./ItemMedia-DfJvZXBe.js";import"./Avatar-CNS7uviy.js";import"./AvatarGroup-Cv5UWI0K.js";import"./Checkmark-Bl2r91uW.js";import"./ItemLabel-BJ4TUmk_.js";import"./Heading-PlHpJzKQ.js";import"./useHighlightedText-Cf7684f7.js";import"./ItemControls-DiLtTH9A.js";import"./Badge-9tYEKd9T.js";import"./Tooltip-ZQ8pGHyK.js";import"./ChevronRight-DNG7F-LS.js";import"./ArrowUndo-DQ842Ieg.js";import"./MenuListDivider-Qd7Zv5zm.js";import"./Fieldset-DiToHbVn.js";import"./Field-043F-93h.js";import"./Label-DcRYrAWF.js";import"./Input-CXwaRbp1.js";import"./Datepicker-D28an4dY.js";import"./SearchField-CTOOlDoc.js";import"./MagnifyingGlass-7o9KBuEd.js";import"./FieldBase-_XE-YVEJ.js";import"./Typography-CdulF3LZ.js";import"./useMenu-BkS0Vn46.js";import"./MenuListHeading-yiM716YP.js";import"./InformationSquare-D-Ph66nw.js";import"./Paperclip-DHPCQAWG.js";import"./Eye-CAdnQSO5.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BYEHlw1B.js";import"./useDropdownMenuController-_els-HSa.js";import"./Dropdown-CwQ5F4MG.js";import"./Plus-D-AEmb15.js";import"./ButtonGroup-WgKm7hCp.js";import"./ButtonGroupDivider-BFRswpZA.js";import"./ChevronUpDown-Dd58bz3G.js";import"./ToolbarMenu-s_KCcZcj.js";import"./ToolbarSearch-CY6LsfTU.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
