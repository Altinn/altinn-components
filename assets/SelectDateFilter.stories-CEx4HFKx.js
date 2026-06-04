import{a7 as t}from"./iframe-bg3nhc5C.js";import{S as a}from"./SelectDateFilter-DeZnUlvJ.js";import{t as n,a as s}from"./example.hooks-CVVbI-l0.js";import{T as m,a as l}from"./Toolbar-DWAoZWct.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-f8-xfgbP.js";import"./MenuItem-Dnd2bkX1.js";import"./ItemMedia-CxijgI7U.js";import"./Avatar-BnkW8VAf.js";import"./AvatarGroup-BUxzP8KS.js";import"./Checkmark-D_j4oKhD.js";import"./ItemLabel-D9bNrZqJ.js";import"./Heading-CqXKSZEg.js";import"./useHighlightedText-Ct2V138i.js";import"./ItemControls-vsK4YZNK.js";import"./Badge-hZ6rpuJP.js";import"./Tooltip-BG2MYXE2.js";import"./ChevronRight-fbKP0qVJ.js";import"./ArrowUndo-aIXjtX94.js";import"./MenuListHeading-CPNZr4rU.js";import"./Fieldset-CYHAvU6S.js";import"./Field-DXeetSkN.js";import"./Label-BY0S3EO2.js";import"./Input-ByvRROIc.js";import"./Datepicker-OlWXmFPj.js";import"./SearchField-CjXdfZ37.js";import"./MagnifyingGlass-C3fVRdM8.js";import"./FieldBase-CPws21pp.js";import"./Typography-Ci1MUa-H.js";import"./useMenu-DS82y3su.js";import"./index-cKgDDIaZ.js";import"./InformationSquare-BrXIcqKH.js";import"./Paperclip-8j0w26RA.js";import"./Eye-BWHJUVpL.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-COo8Z9YV.js";import"./useDropdownMenuController-CwIh1DiK.js";import"./Dropdown-CqGqZ6my.js";import"./Plus-T7SFOg3q.js";import"./ButtonGroup-BzB2tyZw.js";import"./ButtonGroupDivider-Cye-61mv.js";import"./ChevronUpDown-Bdm9ft9T.js";import"./ToolbarMenu-GuoKeltm.js";import"./ToolbarSearch-CA5X9J2B.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
