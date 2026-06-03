import{a7 as t}from"./iframe-Dmn_-H53.js";import{S as a}from"./SelectDateFilter-WKxXdsXJ.js";import{t as n,a as s}from"./example.hooks-INZVBkTg.js";import{T as m,a as l}from"./Toolbar-BusIapvv.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CwZ16ivE.js";import"./MenuItem-C30u_q0-.js";import"./ItemMedia-D_bOU9XF.js";import"./Avatar-DRCSmXVk.js";import"./AvatarGroup-D0qXNceQ.js";import"./Checkmark-DzxOHVu0.js";import"./ItemLabel-ejtJzCEp.js";import"./Heading-mFrUmf7m.js";import"./useHighlightedText-CD-cx98y.js";import"./ItemControls-CbvyOb0R.js";import"./Badge-De6DPsXj.js";import"./Tooltip-CdtWGkOh.js";import"./ChevronRight-Wr9L-VUi.js";import"./ArrowUndo-bK1i10ui.js";import"./MenuListHeading-BrW5zaeP.js";import"./Fieldset-DkydaSct.js";import"./Field-1tw-cTWp.js";import"./Label-D7CtZtsQ.js";import"./Input-CiIUlzDr.js";import"./Datepicker-CU2ZrNSp.js";import"./SearchField-DeTed8Dk.js";import"./MagnifyingGlass-CJgpPnEh.js";import"./FieldBase-BLinraZG.js";import"./Typography-BUxrbwUx.js";import"./useMenu-B_9AoNot.js";import"./index-Qm016dy0.js";import"./InformationSquare-DAE6V11Y.js";import"./Paperclip-CHL6y2ts.js";import"./Eye-BALC2GXS.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CSkbsTiY.js";import"./useDropdownMenuController-DHTHwr26.js";import"./Dropdown-DpD8qCpr.js";import"./Plus-CqXOqTKR.js";import"./ButtonGroup-CPlQwmGd.js";import"./ButtonGroupDivider-D0hGjblB.js";import"./ChevronUpDown-FEbwmu8E.js";import"./ToolbarMenu-BpYXaZ67.js";import"./ToolbarSearch-Dp9Vo43V.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
