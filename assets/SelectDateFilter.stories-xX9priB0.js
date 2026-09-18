import{a7 as t}from"./iframe-ypmT5Gk0.js";import{S as a}from"./SelectDateFilter-DHnT35p1.js";import{t as n}from"./example.data-CO6bIvJK.js";import{a as s}from"./example.hooks-EUiKdy2C.js";import{T as m,a as l}from"./Toolbar-DUTfZxxY.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-AjB4ENZt.js";import"./MenuListItem-aY-AAikt.js";import"./MenuItem-CZo5oRhh.js";import"./ItemMedia-4IfksOuS.js";import"./Avatar-CjSTwin0.js";import"./AvatarGroup-SlU2nii8.js";import"./Checkmark-kMy6EMLN.js";import"./ItemLabel-BlYQpqbv.js";import"./Heading-DYP7M4_m.js";import"./useHighlightedText-BRp5NYS8.js";import"./ItemControls-Bqvxib6z.js";import"./Badge-X9Z0TOu_.js";import"./Tooltip-Blob_TyK.js";import"./ChevronRight-3_fnpscT.js";import"./ArrowUndo-BZUngnyS.js";import"./MenuListDivider-p3sa3VdL.js";import"./Fieldset-Ig_vm91K.js";import"./Field-fCHogA_W.js";import"./Label-CuLDpT5S.js";import"./Input-CoYipzRW.js";import"./Datepicker-CJ-HRSP8.js";import"./SearchField-gC-2ROHv.js";import"./MagnifyingGlass-BsJL0696.js";import"./FieldBase-BZNWpkh0.js";import"./Typography-D_BM_-lf.js";import"./useMenu-Roya_qW1.js";import"./MenuListHeading-j9n_Lc05.js";import"./InformationSquare-BGmi6Zvl.js";import"./Paperclip-EVKWH_aP.js";import"./Eye-D3X4TJZb.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DnW-FkzB.js";import"./useDropdownMenuController-Bdups_kS.js";import"./Dropdown-DooXOQKf.js";import"./Plus-Dbutg6U0.js";import"./ButtonGroup-CRz61zp4.js";import"./ButtonGroupDivider-C43QU8jH.js";import"./ChevronUpDown-H2BJflUM.js";import"./ToolbarMenu-D5mSoK9Q.js";import"./ToolbarSearch-BRF9cRq9.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
