import{a7 as t}from"./iframe-DMrRMxbq.js";import{S as a}from"./SelectDateFilter-BMrCoNpR.js";import{t as n}from"./example.data-C3BT-CIC.js";import{a as s}from"./example.hooks-CkB9GfTy.js";import{T as m,a as l}from"./Toolbar-BZH1bADA.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CGne6KzY.js";import"./MenuListItem-CATFKnlr.js";import"./MenuItem-DLpEa2I6.js";import"./ItemMedia-Dx1IKYEg.js";import"./Avatar-C6i6C6T9.js";import"./AvatarGroup-DVS-_6qx.js";import"./Checkmark-BUuDcLZs.js";import"./ItemLabel-DavwL6MJ.js";import"./Heading-BhmjWuIr.js";import"./useHighlightedText-qcaYlVq2.js";import"./ItemControls-DNnHu-Ez.js";import"./Badge-CzHyduDR.js";import"./Tooltip-1SJQbRAy.js";import"./ChevronRight-ngEBzgMu.js";import"./ArrowUndo-DjzOQXeb.js";import"./MenuListDivider-CzVCr-XK.js";import"./Fieldset-a_L6rLok.js";import"./Field-DxDkeKhB.js";import"./Label-CB0_8IHy.js";import"./Input-CZPP85wE.js";import"./Datepicker-BEftbQFy.js";import"./SearchField-nNatmuZA.js";import"./MagnifyingGlass-DofikZhZ.js";import"./FieldBase-BwVJ7Sfq.js";import"./Typography-z164oB1T.js";import"./useMenu-CNg8vInV.js";import"./MenuListHeading-B9JHXv6C.js";import"./InformationSquare-C88VQYSr.js";import"./Paperclip-COVpyOlK.js";import"./Eye-CAHGcl5A.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-LUIk6x4-.js";import"./useDropdownMenuController-V_PAwfJs.js";import"./Dropdown-B5Bg-WA0.js";import"./Plus-CNvKeQn4.js";import"./ButtonGroup-DGYAXoph.js";import"./ButtonGroupDivider-DpZQ_MzX.js";import"./ChevronUpDown-Di7rRHlK.js";import"./ToolbarMenu-CV-0yait.js";import"./ToolbarSearch-DVFNc1wI.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
