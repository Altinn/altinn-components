import{j as t}from"./iframe-CRyMHjBa.js";import{S as a}from"./SelectDateFilter-geybnG6D.js";import{u as m,t as n}from"./example.hooks-D0cNPxw0.js";import{T as s,a as l}from"./Toolbar-Zxw1BHY7.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Cf7oOlPP.js";import"./useId-Gvikg1Q9.js";import"./Datepicker-DSt4yBEu.js";import"./index-DHHnxdIx.js";import"./ChevronRight-CBrYYsjR.js";import"./Button-CrFbX_o6.js";import"./button-W5jAAf--.js";import"./use-merge-refs-BY8NGhF3.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-DntYuD8P.js";import"./MenuItem-BP5FkdDy.js";import"./ItemMedia-C-5aGPRT.js";import"./XMark-Bzo2iZ4y.js";import"./Avatar-CTjQUhWB.js";import"./Skeleton-CU7lBKK8.js";import"./AvatarGroup-B0xdyHS8.js";import"./Icon-BfxILC1T.js";import"./Checkmark-DF0LRIQJ.js";import"./Heading-DKMjfDI1.js";import"./useHighlightedText-Bmeo4cMl.js";import"./Badge-DxjDnsAp.js";import"./MenuListHeading-BM8Os7Ca.js";import"./Fieldset-g577H5k-.js";import"./index-DK7gfoBf.js";import"./Label-BTqPQVQX.js";import"./Input-Dhhr3RHW.js";import"./input-BbNQnC6I.js";import"./SearchField-DHI_G06y.js";import"./MagnifyingGlass-XVKvC6WT.js";import"./FieldBase-CJQ_rSUH.js";import"./Typography-KJ3duhAj.js";import"./useMenu-lx2RC1HO.js";import"./InformationSquare-BIUK32sG.js";import"./Paperclip-C4p5z3e9.js";import"./Eye-fG0hzg9_.js";import"./MenuHamburger-DmjW5Kyi.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-7zQVYc9O.js";import"./Plus-OcRWzOJe.js";import"./Dropdown-BU08g0A_.js";import"./ChevronUpDown-iXCDP4yz.js";import"./ButtonGroup-Be2TeWIw.js";import"./ButtonGroupDivider-uVMrpMEY.js";import"./Tooltip-BOYFMKfm.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-C2eqF5ne.js";import"./ToolbarSearch-D95q0rEB.js";const ct={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const dt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,dt as __namedExportsOrder,ct as default};
