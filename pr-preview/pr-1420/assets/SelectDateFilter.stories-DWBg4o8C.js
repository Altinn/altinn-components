import{a7 as t}from"./iframe-BidFzEoe.js";import{S as a}from"./SelectDateFilter-DCSvuWtv.js";import{t as n}from"./example.data-DW5fxR4d.js";import{a as s}from"./example.hooks-BRdzLTas.js";import{T as m,a as l}from"./Toolbar-BlCY5v7I.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CNbNKfRd.js";import"./MenuListItem-DeTWeA9p.js";import"./MenuItem-YZR9Jx1u.js";import"./ItemMedia-DzAOMVpV.js";import"./Avatar-BEQBdv4x.js";import"./AvatarGroup-D1zH3sob.js";import"./Checkmark-DMx9NJHb.js";import"./ItemLabel-NxjhrgwT.js";import"./Heading-XBMlN0kz.js";import"./useHighlightedText-B2dzt3_l.js";import"./ItemControls-5057Wt3J.js";import"./Badge-mEF_BcRe.js";import"./Tooltip-CttrX-ml.js";import"./ChevronRight-B3flyXKQ.js";import"./ArrowUndo-CcknOss5.js";import"./MenuListDivider-2FWQFBqh.js";import"./Fieldset-BWu0GvMP.js";import"./Field-BqmdGdCd.js";import"./Label-BzAQ2d9C.js";import"./Input-D8eTVnZO.js";import"./Datepicker-BYrbJEXS.js";import"./SearchField-CPTH-dMf.js";import"./MagnifyingGlass-B4YFwzX0.js";import"./FieldBase-q2Ok1lDz.js";import"./Typography-BKRo6hXJ.js";import"./useMenu-BgtGmMWX.js";import"./MenuListHeading-C3S-0AcD.js";import"./InformationSquare-B1R5HfkF.js";import"./Paperclip-CpW1nOOW.js";import"./Eye-CMjHzZTm.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-LvFc9XlM.js";import"./useDropdownMenuController-Bpv270d-.js";import"./Dropdown-BZ5Wwg_Y.js";import"./Plus-CSCOqkzm.js";import"./ButtonGroup-BDN4dAIH.js";import"./ButtonGroupDivider-C72zn4Mf.js";import"./ChevronUpDown-g9jyYsW3.js";import"./ToolbarMenu-iJHxXbHY.js";import"./ToolbarSearch-DSQ8BUNU.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
