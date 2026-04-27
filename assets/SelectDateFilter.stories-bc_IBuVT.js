import{j as t}from"./iframe-B56t8i7v.js";import{S as a}from"./SelectDateFilter-DFjtGtRo.js";import{u as m,t as n}from"./example.hooks-Pzg6OUGa.js";import{T as s,a as l}from"./Toolbar-DR_5CA-a.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BZ7sluk3.js";import"./useId-Ce_44NzT.js";import"./Datepicker-CqE-iwdw.js";import"./index-CHgNdXFp.js";import"./ChevronRight-VYKVaZtU.js";import"./Button-x4ugPYkx.js";import"./button-BSGP1CSM.js";import"./use-merge-refs-CJ3sV19d.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-D1jjv5iI.js";import"./MenuItem-CtKw3GMz.js";import"./ItemMedia-DJxakqLL.js";import"./XMark-CQR84vCO.js";import"./Avatar-_1995Z8x.js";import"./Skeleton-Cer98cLN.js";import"./AvatarGroup-kqIJtB4O.js";import"./Icon-CgN9F-ql.js";import"./Checkmark-cFLQXWmW.js";import"./Heading-B0k14T1s.js";import"./useHighlightedText-YMvuFtwb.js";import"./ItemControls-DurpuKFn.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-B46vfCnX.js";import"./Fieldset-DqVnc9xR.js";import"./index-pNH6Tvi1.js";import"./Label-Bx5THtMF.js";import"./Input-DqVNSGAW.js";import"./input-CtI4L4z7.js";import"./SearchField-BtQfQfgA.js";import"./MagnifyingGlass-U17pnqdh.js";import"./FieldBase-BkGCBc8B.js";import"./Typography-C36VcWyw.js";import"./useMenu-Bz8Gr0jh.js";import"./InformationSquare-TMwz5OzD.js";import"./Paperclip-CfzmQspy.js";import"./Eye-CxDHSw-5.js";import"./MenuHamburger-CjzDwfM6.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-C8fBo27X.js";import"./Plus-DP2GFhc-.js";import"./Dropdown-CjWcilfw.js";import"./ChevronUpDown-txj3YvMU.js";import"./ButtonGroup-DUjF8sgK.js";import"./ButtonGroupDivider-CubiqsGU.js";import"./ToolbarMenu-njzPQ2Ae.js";import"./ToolbarSearch-DgzvuyjV.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
