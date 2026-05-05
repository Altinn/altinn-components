import{j as t}from"./iframe-0tjTS8nX.js";import{S as a}from"./SelectDateFilter-BAfZ0Tq3.js";import{u as m,t as n}from"./example.hooks-CSqkSUCz.js";import{T as s,a as l}from"./Toolbar-BJdW15AL.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CIy3NdIH.js";import"./useId-DNFZveVv.js";import"./Datepicker-Cq84Sa_A.js";import"./index-BHkRJabC.js";import"./ChevronRight-DKBz6hgL.js";import"./Button-CyTdDQsP.js";import"./button-Cld0y5Q3.js";import"./use-merge-refs-C-O5ch3n.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-B43Ld8oT.js";import"./MenuItem-Dq38BSWn.js";import"./ItemMedia-DYrXvlN2.js";import"./XMark-C6HGzv3s.js";import"./Avatar-DBihd_YJ.js";import"./Skeleton-CiSYBb75.js";import"./AvatarGroup-Cy536atj.js";import"./Icon-CEoRGh9j.js";import"./Checkmark-DcFVdWi8.js";import"./Heading-KoSbgrW3.js";import"./useHighlightedText-D9Q4aeek.js";import"./ItemControls-C9C9Xohr.js";import"./Badge-CK8WzVFg.js";import"./Tooltip-B5-oR0O6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-BfXt7Oa1.js";import"./Fieldset-C-cEe-yh.js";import"./index-BkdSX7Id.js";import"./Label-DeD3NEAn.js";import"./Input-CT0ouBbN.js";import"./input-Ce5YvKqZ.js";import"./SearchField-AyG5Put8.js";import"./MagnifyingGlass-Djl9xGro.js";import"./FieldBase-B4LLLb6y.js";import"./Typography-dEwOKrOW.js";import"./useMenu-DGQxaY-L.js";import"./InformationSquare-j6Jk7iQg.js";import"./Paperclip-DA5GGRz-.js";import"./Eye-tfT7yxSX.js";import"./MenuHamburger-BCh4cxc2.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-DtWTzaBl.js";import"./Plus-pc4KN7SW.js";import"./Dropdown-Cwwtm8XG.js";import"./ChevronUpDown-CwtBEqFM.js";import"./ButtonGroup-Rh1_zGFF.js";import"./ButtonGroupDivider-D8a_Wdd9.js";import"./ToolbarMenu-Dn1sARGg.js";import"./ToolbarSearch-CRnAJZip.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
