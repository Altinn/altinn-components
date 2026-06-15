import{a7 as t}from"./iframe-h3kpEY-8.js";import{S as a}from"./SelectDateFilter-CzIPKQiZ.js";import{t as n}from"./example.data-B9CqrhZU.js";import{a as m}from"./example.hooks-CxiNILiZ.js";import{T as s,a as l}from"./Toolbar-C0o-ji2j.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-C_W9OCg0.js";import"./MenuListItem-DdKH3BDS.js";import"./MenuItem-CJxVZTG4.js";import"./ItemMedia-DOHb0jsR.js";import"./Avatar-xrrnEYLD.js";import"./AvatarGroup-COWd8M-x.js";import"./Checkmark-qxd_V6S7.js";import"./ItemLabel-DwG1GkVg.js";import"./Heading-Dn7fEFx7.js";import"./useHighlightedText-Lwubglq6.js";import"./ItemControls-DTSXitWE.js";import"./Badge-DXobaynz.js";import"./Tooltip-DgP5yGn4.js";import"./ChevronRight-zeeAR8pp.js";import"./ArrowUndo-BNIaEQ0f.js";import"./MenuListDivider-BDzgWude.js";import"./Fieldset-Qc4yIYek.js";import"./Field-BzJVbJyd.js";import"./Label-DRrcRV0r.js";import"./Input-BilJ5YTK.js";import"./Datepicker-B2hXBx-d.js";import"./SearchField-pLL_WmAV.js";import"./MagnifyingGlass-Df6AiRyH.js";import"./FieldBase-CnX5WdHy.js";import"./Typography-ByLPxgtz.js";import"./useMenu-DIh14msT.js";import"./MenuListHeading-B8DJ5av2.js";import"./index-BRnuOkic.js";import"./InformationSquare-TM9O4ixW.js";import"./Paperclip-BQH5LpcS.js";import"./Eye-j1llmHwA.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-OG4LFxGd.js";import"./useDropdownMenuController-BHvOgZtq.js";import"./Dropdown-BZC5Raej.js";import"./Plus-BtMtwdOE.js";import"./ButtonGroup-CTYKvx28.js";import"./ButtonGroupDivider-7RlVPC7z.js";import"./ChevronUpDown-D0qg38RZ.js";import"./ToolbarMenu-6AaXxf6K.js";import"./ToolbarSearch-BN1CRQMc.js";const at={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const mt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,mt as __namedExportsOrder,at as default};
