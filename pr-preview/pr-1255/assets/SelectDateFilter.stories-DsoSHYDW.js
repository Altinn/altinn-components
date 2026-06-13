import{a7 as t}from"./iframe-CTaNoWWa.js";import{S as a}from"./SelectDateFilter-CUpWFE_s.js";import{t as n}from"./example.data-BUvcpsq4.js";import{a as m}from"./example.hooks-BmvtVC6G.js";import{T as s,a as l}from"./Toolbar-CAqEr0l8.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CpzY6d4i.js";import"./MenuListItem-DQ_58J0s.js";import"./MenuItem-CimdO91p.js";import"./ItemMedia-wY5sofun.js";import"./Avatar-Jcwep2-d.js";import"./AvatarGroup-BYP40V--.js";import"./Checkmark-BhX8-1Sr.js";import"./ItemLabel-BrNBIEws.js";import"./Heading-C1mUjHlh.js";import"./useHighlightedText-B1ZF3HFO.js";import"./ItemControls-DMuz6Cbk.js";import"./Badge-Dtect8U8.js";import"./Tooltip-ClBwCS6W.js";import"./ChevronRight-CohjqIQG.js";import"./ArrowUndo-BPYh_xVN.js";import"./MenuListDivider-CkCLDcCQ.js";import"./Fieldset-DhuOPwxs.js";import"./Field-BInLTKbx.js";import"./Label-yw6hdd5b.js";import"./Input-CTz4y9O9.js";import"./Datepicker-hcanjWS3.js";import"./SearchField-ybvTeITK.js";import"./MagnifyingGlass-DGspW_mh.js";import"./FieldBase-CgdWEw7I.js";import"./Typography-CN45st3d.js";import"./useMenu-CpFtChbI.js";import"./MenuListHeading-Gc6ll2v1.js";import"./index-CftdW1E-.js";import"./InformationSquare-BkCx_Sj6.js";import"./Paperclip-BfYQtNin.js";import"./Eye-BAx-UScb.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BbgaFBH2.js";import"./useDropdownMenuController-BJZIrHL7.js";import"./Dropdown-CgaJWkpX.js";import"./Plus-B6k-0-JZ.js";import"./ButtonGroup-DcAUocsW.js";import"./ButtonGroupDivider-BHmhovsW.js";import"./ChevronUpDown-Cks1CcB0.js";import"./ToolbarMenu-DDc7FaQn.js";import"./ToolbarSearch-CAommeSk.js";const at={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
