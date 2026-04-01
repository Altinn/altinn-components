import{j as t}from"./iframe-DxxW_Hah.js";import{S as a}from"./SelectDateFilter-xe4WhZPw.js";import{u as m,t as n}from"./example.hooks-Bwy2qIW1.js";import{T as s,a as l}from"./Toolbar-D_GIfmV4.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CDTBG5mK.js";import"./useId-CckRU7I8.js";import"./Datepicker-qgq8bd4E.js";import"./index-pOAXHZ6n.js";import"./ChevronRight-CqOTbusb.js";import"./Button-CcwbSiKg.js";import"./button-BBYE_PPH.js";import"./use-merge-refs-BbTz5JXs.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-BWh93a_i.js";import"./MenuItem-SOEG9Ke8.js";import"./ItemMedia-DDT4_MLi.js";import"./XMark-ChXBbXGN.js";import"./Avatar--rA6gsID.js";import"./Skeleton-DiRARuJ9.js";import"./AvatarGroup-C6j_8VXQ.js";import"./Icon-Cf03fdWw.js";import"./Checkmark-pZi8btQa.js";import"./Heading-Bejow2zA.js";import"./useHighlightedText-C9OLcmcP.js";import"./Badge-CQ9EBUDZ.js";import"./MenuListHeading-CIz6aOLR.js";import"./Fieldset-CXGM5LTr.js";import"./index-D2WP85Bl.js";import"./Label-YFmv6AXl.js";import"./Input-Cs8lujA3.js";import"./input-B30SugQD.js";import"./SearchField-ptc2QeHn.js";import"./MagnifyingGlass-B8dYO_M2.js";import"./FieldBase-ttSv04zw.js";import"./Typography-CfTPPq_a.js";import"./useMenu-DMxEdeKU.js";import"./InformationSquare-CuO8i3VE.js";import"./Paperclip-BvNde2e8.js";import"./Eye-CMu0w_nr.js";import"./MenuHamburger-Be4YtaYC.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-BAV-gCcK.js";import"./Plus-CScsMow9.js";import"./Dropdown-_zFGDkyY.js";import"./ChevronUpDown-CXtDHS57.js";import"./ButtonGroup-wgVYayc9.js";import"./ButtonGroupDivider-i0Wffh1Y.js";import"./Tooltip-DIHoftUf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-I3DkE7Ax.js";import"./ToolbarSearch-C2CyTcgn.js";const ct={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
