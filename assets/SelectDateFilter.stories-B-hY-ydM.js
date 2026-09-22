import{a7 as t}from"./iframe-COBbWeA3.js";import{S as a}from"./SelectDateFilter-D8Baxik9.js";import{t as n}from"./example.data-BOUopZq4.js";import{a as s}from"./example.hooks-BKEm4PxI.js";import{T as m,a as l}from"./Toolbar-ftI-9u8b.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-V1dp77vo.js";import"./MenuListItem-BpH-lOdT.js";import"./MenuItem-nArOW8Hu.js";import"./ItemMedia-CVZylXEj.js";import"./Avatar-DxGMGD7I.js";import"./AvatarGroup-AOdZQtKF.js";import"./Checkmark-nzyjGA6l.js";import"./ItemLabel-BFAcVwUa.js";import"./Heading-Cmg-mUrR.js";import"./useHighlightedText-CaUkEEvw.js";import"./ItemControls-DB9Qd_W5.js";import"./Badge-0q-IE2XW.js";import"./Tooltip-DupjxGOM.js";import"./ChevronRight-gAwtmJAo.js";import"./ArrowUndo-CNM4Ftfy.js";import"./MenuListDivider-C_auds-g.js";import"./Fieldset-Bd8hl9hh.js";import"./Field-QFb6ZZM4.js";import"./Label-C-viX-1h.js";import"./Input-BuLWJ9G8.js";import"./Datepicker-_Y377o_a.js";import"./SearchField-C1W3zbfq.js";import"./MagnifyingGlass-BZ6J5iab.js";import"./FieldBase-DRB9b-3z.js";import"./Typography-BEwm6wl9.js";import"./useMenu-C3_JQO79.js";import"./MenuListHeading-BpdGMS_N.js";import"./InformationSquare-DlnV5Jxm.js";import"./Paperclip-Bcvr-q7P.js";import"./Eye-BCU1b-Xd.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Bzaj4enJ.js";import"./useDropdownMenuController-BLmBdG76.js";import"./Dropdown-B2n1P303.js";import"./Plus-CZeME9An.js";import"./ButtonGroup-BLVUIK36.js";import"./ButtonGroupDivider-D67s8T3a.js";import"./ChevronUpDown-CuqQlHBf.js";import"./ToolbarMenu-DoP9WLYF.js";import"./ToolbarSearch-BZyEJJt0.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
