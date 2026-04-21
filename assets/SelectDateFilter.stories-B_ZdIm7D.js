import{j as t}from"./iframe-BNDruhPA.js";import{S as a}from"./SelectDateFilter-B4oLSVgd.js";import{u as m,t as n}from"./example.hooks-C7j_gVXn.js";import{T as s,a as l}from"./Toolbar-BZloikbE.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-TNM9HjKV.js";import"./useId-28rL4Hsl.js";import"./Datepicker-BtKQHcKp.js";import"./index-JM42q3xD.js";import"./ChevronRight-Bcu8s-U3.js";import"./Button-CaDKAluY.js";import"./button-Bu4lXR2T.js";import"./use-merge-refs-DHcrFN31.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-DJZ7kLfZ.js";import"./MenuItem-Zvnz-i4w.js";import"./ItemMedia-C5U6F78e.js";import"./XMark-vbUnhqfT.js";import"./Avatar-Bc7K3VQ6.js";import"./Skeleton-3vFplc_z.js";import"./AvatarGroup-CBYJn5rG.js";import"./Icon-Ch0vKaKK.js";import"./Checkmark-BnLjHgWq.js";import"./Heading-C1Pb_LrU.js";import"./useHighlightedText-Bss46XCz.js";import"./ItemControls-nx23Lp4C.js";import"./Badge-e7-dfLSt.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-CJCU8c8j.js";import"./Fieldset-DP0tXg_B.js";import"./index-BuvBvGLs.js";import"./Label-DEPud0Ho.js";import"./Input-Bq2zza5V.js";import"./input-CeK3s4nJ.js";import"./SearchField-BS2BtTJs.js";import"./MagnifyingGlass-BEj5aS_0.js";import"./FieldBase-CqddQ4KB.js";import"./Typography-0VzQ_bGw.js";import"./useMenu-BrVLonhI.js";import"./InformationSquare-BrTKrkbD.js";import"./Paperclip-CE94lwKo.js";import"./Eye-BZ0msvGF.js";import"./MenuHamburger-DxE3fxe3.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-C1OwOjFZ.js";import"./Plus-BN_WRMVc.js";import"./Dropdown-nm23L0U7.js";import"./ChevronUpDown-Biv7c8Vz.js";import"./ButtonGroup-Cj9A7v4t.js";import"./ButtonGroupDivider-B-Z71K8b.js";import"./ToolbarMenu-DOZLhIwW.js";import"./ToolbarSearch-CEz8Ql-T.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
