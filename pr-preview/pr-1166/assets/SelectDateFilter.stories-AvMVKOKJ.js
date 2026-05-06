import{j as t}from"./iframe-Cppd0qv6.js";import{S as a}from"./SelectDateFilter-di6IER3e.js";import{u as m,t as n}from"./example.hooks-BwNKgA1Z.js";import{T as s,a as l}from"./Toolbar-YVNpZ2Vv.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo--v4Yl1wb.js";import"./useId-BBgZM5Xr.js";import"./Datepicker-CYxUKe0V.js";import"./index-BRImx9w3.js";import"./ChevronRight-CWvUN_3J.js";import"./Button-DZtlkh8w.js";import"./button-DXqTFqXv.js";import"./use-merge-refs-BVudX8AY.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-BHtHmzZq.js";import"./MenuItem-DujpBTEw.js";import"./ItemMedia-B28DyjI4.js";import"./XMark-xtLLERRk.js";import"./Avatar-C8BEFMoW.js";import"./Skeleton-DZL_2b5i.js";import"./AvatarGroup-CkQ-nr_4.js";import"./Icon-DYZqEJGr.js";import"./Checkmark-Ci2lQnJg.js";import"./Heading-CVWk1BMK.js";import"./useHighlightedText-CnlmbfHa.js";import"./ItemControls-D1uxt3OD.js";import"./Badge-DKrs0UA7.js";import"./Tooltip-B3YY3plR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-DGbRdhBr.js";import"./Fieldset-DRaBeFp8.js";import"./index-DZ9ad6Vq.js";import"./Label-BZYzljw4.js";import"./Input-BKVpgPJL.js";import"./input-DhtF3MwF.js";import"./SearchField-Cfz4mYX1.js";import"./MagnifyingGlass-D5_sNBXy.js";import"./FieldBase-AUbtsXZu.js";import"./Typography-CFy91Abt.js";import"./useMenu-Dh0AdFxf.js";import"./InformationSquare-C6gp2qmA.js";import"./Paperclip-Bz_MQKsG.js";import"./Eye-DWFBDohX.js";import"./MenuHamburger-DXfg8QpW.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-BL3HRjvJ.js";import"./Plus-Budqe_al.js";import"./Dropdown-CazJ30ul.js";import"./ChevronUpDown-wLjF1tcy.js";import"./ButtonGroup-DWofFi2X.js";import"./ButtonGroupDivider-Cf7MVCnb.js";import"./ToolbarMenu-DDpAUS1K.js";import"./ToolbarSearch-DA4J89oG.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
