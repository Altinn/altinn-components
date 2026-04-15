import{j as t}from"./iframe-BWWyepKi.js";import{S as a}from"./SelectDateFilter-Xnq7AgxF.js";import{u as m,t as n}from"./example.hooks-CaPzDq_y.js";import{T as s,a as l}from"./Toolbar-C6C-MWA0.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-B3f9JFxf.js";import"./useId-CMCVT55W.js";import"./Datepicker-BS3gT8R8.js";import"./index-fkRlyifr.js";import"./ChevronRight-I2Pyvoyr.js";import"./Button-DaLP9UzX.js";import"./button-dq33hCwG.js";import"./use-merge-refs-CbLzoZkL.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-uASMHa_1.js";import"./MenuItem-Dk1uy6my.js";import"./ItemMedia-h4TQiEvV.js";import"./XMark-DJOirLMA.js";import"./Avatar-CiKCHN1S.js";import"./Skeleton-CYDyiFkf.js";import"./AvatarGroup-DPHuhQ41.js";import"./Icon-w9oNx8pI.js";import"./Checkmark-C84HjHaR.js";import"./Heading-DQYelGqr.js";import"./useHighlightedText-BYfI8EMJ.js";import"./ItemControls-jVI2cRmn.js";import"./Badge-CiufGa4u.js";import"./Tooltip-C4xENPhK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-CgclVl9k.js";import"./Fieldset-B2fp5dSJ.js";import"./index-2Prco8uk.js";import"./Label-DYc4A36I.js";import"./Input-BcqR7Mo_.js";import"./input-CuS4pR7j.js";import"./SearchField-BuZQEnM8.js";import"./MagnifyingGlass-B591vdqr.js";import"./FieldBase-DnRTsvox.js";import"./Typography-C9vgo_J4.js";import"./useMenu-BnIxk9FT.js";import"./InformationSquare-WPPzSpdY.js";import"./Paperclip-B931rBbb.js";import"./Eye-BUErm0To.js";import"./MenuHamburger-R6t8Z0iD.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-Dc9W55Rj.js";import"./Plus-i5lFDX1a.js";import"./Dropdown-BWKRG_29.js";import"./ChevronUpDown-DN9w9Cg8.js";import"./ButtonGroup-Bf6ZmgRN.js";import"./ButtonGroupDivider-DK_N-BQv.js";import"./ToolbarMenu-CvLeKUcU.js";import"./ToolbarSearch-DZekGqJO.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
