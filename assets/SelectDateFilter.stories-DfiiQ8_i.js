import{j as t}from"./iframe-aW2Ivac6.js";import{S as a}from"./SelectDateFilter-CG4K9nyz.js";import{u as m,t as n}from"./example.hooks-BpcUJafh.js";import{T as s,a as l}from"./Toolbar-Dh5S6ybd.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BdzRHxUS.js";import"./useId-DH4aqM3h.js";import"./Datepicker-B2tb5YeO.js";import"./index-DWa6FdCb.js";import"./ChevronRight-Bcq_DMzy.js";import"./Button-RX-ew4zS.js";import"./button-CCQIf2kf.js";import"./use-merge-refs-CB7-Iow2.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-Nc9dF1O6.js";import"./MenuItem-COYpbW6V.js";import"./ItemMedia-D2IPLDQS.js";import"./XMark-DUdkEKb2.js";import"./Avatar-C-j1g9mt.js";import"./Skeleton-it7stJ0Q.js";import"./AvatarGroup-Btn-kZJL.js";import"./Icon-CD7MnEv7.js";import"./Checkmark-BjMWNebU.js";import"./Heading-D9dg30ti.js";import"./useHighlightedText-ZQImmj57.js";import"./ItemControls-BfAmDR5q.js";import"./Badge-WunB0MzM.js";import"./Tooltip-DYC812UO.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-CkJcv2mm.js";import"./Fieldset-BjrKN_8t.js";import"./index-BzK4-cKk.js";import"./Label-UVt4ZlNT.js";import"./Input-S7hdVfLT.js";import"./input-DBhNK3CK.js";import"./SearchField-uUwTRA3v.js";import"./MagnifyingGlass-CZzm3B-3.js";import"./FieldBase-CdSvcvFX.js";import"./Typography-JHHWywcS.js";import"./useMenu-ChK92nmD.js";import"./index-CSsgmh7M.js";import"./InformationSquare-BtbGMdWt.js";import"./Paperclip-1Mg-mDDL.js";import"./Eye-BTh2sUw7.js";import"./MenuHamburger-5ynA6oKg.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-CJ9HEXOr.js";import"./Plus-Cg6CWYTT.js";import"./Dropdown-BOvlApQ8.js";import"./ChevronUpDown-BuexUABI.js";import"./ButtonGroup-BjSwpoTC.js";import"./ButtonGroupDivider-E_lmL3bb.js";import"./ToolbarMenu-KjkIcEDa.js";import"./ToolbarSearch-CiWeS0rY.js";const Ft={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const ut=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,ut as __namedExportsOrder,Ft as default};
