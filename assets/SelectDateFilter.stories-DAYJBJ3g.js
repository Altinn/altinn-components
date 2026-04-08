import{j as t}from"./iframe-BaUVsogD.js";import{S as a}from"./SelectDateFilter-r8dZC2rE.js";import{u as m,t as n}from"./example.hooks-CQLjbwEV.js";import{T as s,a as l}from"./Toolbar-DZAY8lvc.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-COPXkqMS.js";import"./useId-D8i_et7Z.js";import"./Datepicker-D_gIHhXH.js";import"./index-lARy5TPT.js";import"./ChevronRight-sVn034m6.js";import"./Button-mtd2C5dd.js";import"./button-BfXez8v8.js";import"./use-merge-refs-BV0MipOU.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-Bh_jPdY2.js";import"./MenuItem-6c1J0YV3.js";import"./ItemMedia-BVGZtNsE.js";import"./XMark-vPSUBj6u.js";import"./Avatar-u9iGVwtH.js";import"./Skeleton-yH6qNAEo.js";import"./AvatarGroup-DFVM-aUE.js";import"./Icon-7hKeNARf.js";import"./Checkmark-DTahSgDV.js";import"./Heading-Cdi1sqyd.js";import"./useHighlightedText-C23yE0pM.js";import"./Badge-DkZxiFUy.js";import"./MenuListHeading-B40v5QW5.js";import"./Fieldset-Btx1lmhQ.js";import"./index-D4SJX6je.js";import"./Label-Cge6OnF8.js";import"./Input-BHiIXP8Y.js";import"./input-C1CvvkMg.js";import"./SearchField-BG-HK4fX.js";import"./MagnifyingGlass-DyxA-WAG.js";import"./FieldBase-CZ-07bnd.js";import"./Typography-BHJ2EAGl.js";import"./useMenu-DnkwvAkg.js";import"./InformationSquare-CDbyjiK5.js";import"./Paperclip-CUEVdVsf.js";import"./Eye-D9s41kij.js";import"./MenuHamburger-Bwvpj7GR.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-u6nv9687.js";import"./Plus-CnR__6G5.js";import"./Dropdown-5b9N8l_a.js";import"./ChevronUpDown-C7TW0s4Z.js";import"./ButtonGroup-1O4V6IzI.js";import"./ButtonGroupDivider-BMhj8zcC.js";import"./Tooltip-WJW_Z0af.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-CtiiUfz3.js";import"./ToolbarSearch-DmgkuUXI.js";const ct={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
