import{j as t}from"./iframe-CPVbSj3C.js";import{S as a}from"./SelectDateFilter-BHgFvch1.js";import{u as m,t as n}from"./example.hooks-CgMDk3nJ.js";import{T as s,a as l}from"./Toolbar-BbXH74iX.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BAwqFT7u.js";import"./useId-CeU55pH0.js";import"./Datepicker-CBVsGq_h.js";import"./index-B-yq3MoC.js";import"./ChevronRight-D8cN60Uo.js";import"./Button-D-Q0AT9s.js";import"./button-ChrWDnnK.js";import"./use-merge-refs-14k-yabz.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-BWz4VDTU.js";import"./MenuItem-CBTlmB_y.js";import"./ItemMedia-C5hW-xxB.js";import"./XMark-DWjKCZtX.js";import"./Avatar-Ctx52zko.js";import"./Skeleton-O-y9i0gG.js";import"./AvatarGroup-Dg-4Llzy.js";import"./Icon-DFTXBWnL.js";import"./Checkmark-D2vzhSBC.js";import"./Heading-Bxz0tryo.js";import"./useHighlightedText-cpJ8B6bV.js";import"./ItemControls-DA5Yy7AS.js";import"./Badge-DYvIbN7v.js";import"./Tooltip-B8o2LWCL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-2OJeU36d.js";import"./Fieldset-BN3377Nd.js";import"./index-DZJ03fJe.js";import"./Label-VN1m6SC8.js";import"./Input-BYE1y6gH.js";import"./input-fAELYQ1t.js";import"./SearchField-B-nnAALe.js";import"./MagnifyingGlass-BOvUZuLn.js";import"./FieldBase-COzHnWja.js";import"./Typography-CiUpHFvi.js";import"./useMenu-CE-qOAep.js";import"./index-B7mUU4Rd.js";import"./InformationSquare-y17ZYOyi.js";import"./Paperclip-CBI79N46.js";import"./Eye-ChvtAiWF.js";import"./MenuHamburger-CAdTjq6-.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-D8Yozs_o.js";import"./Plus-ChI102rs.js";import"./Dropdown-CWKVFS9V.js";import"./ChevronUpDown-Dyy32e_j.js";import"./ButtonGroup-Cm_Y-nHl.js";import"./ButtonGroupDivider-DGgAQ05Q.js";import"./ToolbarMenu---rWQzXB.js";import"./ToolbarSearch-DaAb4thF.js";const Ft={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
