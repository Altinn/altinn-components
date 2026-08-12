import{a7 as t}from"./iframe-BOq385O8.js";import{S as a}from"./SelectDateFilter-CoHSVRNy.js";import{t as n}from"./example.data-CPmZIlyN.js";import{a as s}from"./example.hooks-B-sInu0t.js";import{T as m,a as l}from"./Toolbar-CCwQQMc7.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-Bn4kOck_.js";import"./MenuListItem-C3dH633T.js";import"./MenuItem-C887Ld9X.js";import"./ItemMedia-BFjKYKIC.js";import"./Avatar-DGnXzkTF.js";import"./AvatarGroup-C-pwgfnB.js";import"./Checkmark-BfJs351m.js";import"./ItemLabel-32-F56Tw.js";import"./Heading-BGbBHiZX.js";import"./useHighlightedText-COTrDIB8.js";import"./ItemControls-qKJDjHzO.js";import"./Badge-IhlpDjWl.js";import"./Tooltip-HwSyglqV.js";import"./ChevronRight-8gth-Lkl.js";import"./ArrowUndo-BRAjq8UN.js";import"./MenuListDivider-DW1VkhOq.js";import"./Fieldset-w6tzHqQD.js";import"./Field-BAObIoZk.js";import"./Label-CJalMe_4.js";import"./Input-B8j-6nyc.js";import"./Datepicker-BnpZLW2z.js";import"./SearchField-1cIkQLXt.js";import"./MagnifyingGlass-DLwuof1g.js";import"./FieldBase-SENAbJS5.js";import"./Typography-DYb-ep--.js";import"./useMenu-RUc5K2KC.js";import"./MenuListHeading-B04brtcm.js";import"./InformationSquare-ChpInVUG.js";import"./Paperclip-CSv1KO86.js";import"./Eye-hqQ9WqO7.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-5u_HMvvr.js";import"./useDropdownMenuController-Bc426jVC.js";import"./Dropdown-B3R21JXo.js";import"./Plus-7pPCm0cp.js";import"./ButtonGroup-D8WIpAHE.js";import"./ButtonGroupDivider-DKejejps.js";import"./ChevronUpDown-DSbXmavj.js";import"./ToolbarMenu-CZ_z23OY.js";import"./ToolbarSearch-BEGqVCJy.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
