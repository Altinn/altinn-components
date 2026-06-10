import{a7 as t}from"./iframe-B8reGtNb.js";import{S as a}from"./SelectDateFilter-BJoghwu7.js";import{t as n,a as s}from"./example.hooks-rAOvp4tq.js";import{T as m,a as l}from"./Toolbar-D2RYFt88.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-DvV5RcWS.js";import"./MenuItem-b6Fzjl6t.js";import"./ItemMedia-B3mE-krC.js";import"./Avatar-DjLw-5ab.js";import"./AvatarGroup-CBquJS0s.js";import"./Checkmark-7r8S-fkf.js";import"./ItemLabel-OlP1i4ZU.js";import"./Heading-Cybus3jr.js";import"./useHighlightedText-ZBcygk0-.js";import"./ItemControls-CBTS8zxi.js";import"./Badge-DzttLmt8.js";import"./Tooltip-fMVkBgtC.js";import"./ChevronRight-BRSkVVAW.js";import"./ArrowUndo-CqT7_P72.js";import"./MenuListHeading-BEkIHHSP.js";import"./Fieldset-Cs_hCs0Q.js";import"./Field-BHSHIm9D.js";import"./Label-D9DJQymt.js";import"./Input-DOKzz0Tj.js";import"./Datepicker-SaULyn6H.js";import"./SearchField-CW2nl4m_.js";import"./MagnifyingGlass-CBDfQb5g.js";import"./FieldBase-DDJWfLpA.js";import"./Typography-Dxv9MSbD.js";import"./useMenu-G7RJHCVr.js";import"./index-BuUpoUlL.js";import"./InformationSquare-t8wgbWET.js";import"./Paperclip-eBxaxihm.js";import"./Eye-CUNHx0yb.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CHdAjUqn.js";import"./useDropdownMenuController-pbON2RCT.js";import"./Dropdown-mf9EWUWK.js";import"./Plus-Ck-NVedy.js";import"./ButtonGroup-LpI9N8Q_.js";import"./ButtonGroupDivider-U6otbiA_.js";import"./ChevronUpDown-DMiF3376.js";import"./ToolbarMenu-Byul9EYL.js";import"./ToolbarSearch-BwAYIpys.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
