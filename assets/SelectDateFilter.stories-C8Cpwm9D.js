import{a7 as t}from"./iframe-CeD8DZF_.js";import{S as a}from"./SelectDateFilter-DjOa7oTr.js";import{t as n}from"./example.data-BGDqbh5C.js";import{a as s}from"./example.hooks-DuZsZ60D.js";import{T as m,a as l}from"./Toolbar-KphS47Kc.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CY0_0UQq.js";import"./MenuListItem-dRCDziUR.js";import"./MenuItem-D5qCw848.js";import"./ItemMedia-CjD5QxWk.js";import"./Avatar-D8aGqJlF.js";import"./AvatarGroup-fNYoTzyx.js";import"./Checkmark-C90PiZqs.js";import"./ItemLabel-CBqRB1sq.js";import"./Heading-CqEhdWlY.js";import"./useHighlightedText-qfj7RnMw.js";import"./ItemControls-CphkAdhU.js";import"./Badge-BzMsK0Kj.js";import"./Tooltip-DJy5VenJ.js";import"./ChevronRight-B8wcZ9md.js";import"./ArrowUndo-CY16ifDv.js";import"./MenuListDivider-CA69mol6.js";import"./Fieldset-DqX6oZCC.js";import"./Field-DdzYX5Hl.js";import"./Label-DgGQ1tMX.js";import"./Input-B6Hxr8dW.js";import"./Datepicker-BeeqvB0A.js";import"./SearchField-D9P8-rjO.js";import"./MagnifyingGlass-DbRqyBnQ.js";import"./FieldBase-BbgmrWIh.js";import"./Typography-D10BEJyK.js";import"./useMenu-Cr0Tzvrf.js";import"./MenuListHeading-C1lg1_sH.js";import"./InformationSquare-CNpr0xiM.js";import"./Paperclip-ULO1SvYD.js";import"./Eye-D8IM2gMH.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-5i5jT7Mb.js";import"./useDropdownMenuController-D9gVQRIM.js";import"./Dropdown-gDr2Qds9.js";import"./Plus-StvQ1Urq.js";import"./ButtonGroup-C3-Lq824.js";import"./ButtonGroupDivider-NSvDX-n9.js";import"./ChevronUpDown-DlSnRGyJ.js";import"./ToolbarMenu-XloUNX45.js";import"./ToolbarSearch-C9iC4-kO.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
