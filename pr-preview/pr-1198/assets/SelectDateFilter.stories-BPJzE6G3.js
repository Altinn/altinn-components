import{j as t}from"./iframe-YdRL1NzV.js";import{S as a}from"./SelectDateFilter-DaMtOfeN.js";import{u as m,t as n}from"./example.hooks-Cz-pqyz8.js";import{T as s,a as l}from"./Toolbar-BxpSoMXr.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DdxLKHJA.js";import"./useId-DxHKrSZ4.js";import"./Datepicker-CSQ_Z1Xs.js";import"./index-SoIsie1y.js";import"./ChevronRight-DrXpgbb_.js";import"./Button-BwQOxknK.js";import"./tooltip-D0NJwlFT.js";import"./MenuListItem-CLQ7WBGF.js";import"./MenuItem-DdZPav2y.js";import"./ItemMedia-BNRd-cb6.js";import"./XMark-1l7ZvP46.js";import"./Avatar-02T2Z9c_.js";import"./Skeleton-C3i9Ug5T.js";import"./AvatarGroup-B9OCrS5P.js";import"./Icon-B4-srULI.js";import"./Checkmark-Ple-kG_b.js";import"./Heading-56B0sdRG.js";import"./useHighlightedText-DI-ykGTt.js";import"./ItemControls-CMhfwURs.js";import"./Badge-BSGPq3Hw.js";import"./Tooltip-cmmFu2mD.js";import"./MenuListHeading-DregQKpB.js";import"./Fieldset-5n8FHCI7.js";import"./Label-CoBwam8t.js";import"./Input-Co3wY2OB.js";import"./SearchField-Cp2PZLrm.js";import"./MagnifyingGlass-C6-V8ObG.js";import"./FieldBase-KNsWphki.js";import"./Typography-CYgzLoEf.js";import"./useMenu-Cp2blUti.js";import"./index-zl5T2Fem.js";import"./InformationSquare-C3wG0Qjz.js";import"./Paperclip-DutSd5EV.js";import"./Eye-aCB71A3t.js";import"./MenuHamburger-B0s_IErD.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-CSEBkRU7.js";import"./Plus-BNGbhyZ6.js";import"./Dropdown-CFQlkMFa.js";import"./ChevronUpDown-DRTYtEui.js";import"./ButtonGroup-BTJ07o1P.js";import"./ButtonGroupDivider-Ccm8qlnp.js";import"./ToolbarMenu-4mCcshj8.js";import"./ToolbarSearch-BOpnVKBp.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const lt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,lt as __namedExportsOrder,st as default};
