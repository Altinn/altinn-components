import{a7 as t}from"./iframe-Cj7V21km.js";import{S as a}from"./SelectDateFilter-DjWfQJqY.js";import{t as n}from"./example.data-CM7-WKTB.js";import{a as s}from"./example.hooks-Dn2Y7qLN.js";import{T as m,a as l}from"./Toolbar-DOfma81y.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-Bb5WPP5f.js";import"./MenuListItem-CO0eoNuC.js";import"./MenuItem-CHAPJdhJ.js";import"./ItemMedia-CT1Qhol1.js";import"./Avatar-D_h-dTDE.js";import"./AvatarGroup-WUTqusx8.js";import"./Checkmark-CVZzCtvU.js";import"./ItemLabel-C1bWOeuh.js";import"./Heading-BRQOSuW8.js";import"./useHighlightedText-gdz5u-yJ.js";import"./ItemControls-C0hj5koB.js";import"./Badge-DmpmaSED.js";import"./Tooltip-D-lEMjLJ.js";import"./ChevronRight-DWxpnRfX.js";import"./ArrowUndo-CNZhAEE7.js";import"./MenuListDivider-Cd6IMkL-.js";import"./Fieldset-xASk12Hc.js";import"./Field-Cnt4wz2p.js";import"./Label-Bl6bhyHp.js";import"./Input-DnU3MXtK.js";import"./Datepicker-BtAjBf28.js";import"./SearchField-BEMeTu2B.js";import"./MagnifyingGlass-B8zavmyI.js";import"./FieldBase-D_BM9i5X.js";import"./Typography-B3pfG5kD.js";import"./useMenu-DM-7OZIV.js";import"./MenuListHeading-CRxb5-RD.js";import"./InformationSquare-NQW98JPt.js";import"./Paperclip-UD4vQLZC.js";import"./Eye-DS9yMiZ5.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DoaqNjt8.js";import"./useDropdownMenuController-Dx7Ua8eg.js";import"./Dropdown-BCb8vxkT.js";import"./Plus-ubcjdf5p.js";import"./ButtonGroup--sivQYNz.js";import"./ButtonGroupDivider-L0Fo_y8t.js";import"./ChevronUpDown-DfEfO8Hn.js";import"./ToolbarMenu-DB02q_aj.js";import"./ToolbarSearch-kz-nh4xu.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
