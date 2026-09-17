import{a7 as t}from"./iframe-BlyVQ5Wf.js";import{S as a}from"./SelectDateFilter-D-fGdAqy.js";import{t as n}from"./example.data-DuU8u5_V.js";import{a as s}from"./example.hooks-DFO2DcR9.js";import{T as m,a as l}from"./Toolbar-DTl0cksr.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-Ch0VByOk.js";import"./MenuListItem-u2C1cR8C.js";import"./MenuItem-Bv74nrne.js";import"./ItemMedia-BlQhkodk.js";import"./Avatar-DQIgsQd2.js";import"./AvatarGroup-6IOgo5me.js";import"./Checkmark-CAhepm8i.js";import"./ItemLabel-CF-a0vLD.js";import"./Heading-hWvyrxAT.js";import"./useHighlightedText-DCg_XHxB.js";import"./ItemControls-B0XNXszg.js";import"./Badge-BWoBgQxU.js";import"./Tooltip-DIerloK1.js";import"./ChevronRight-C0zIwyjD.js";import"./ArrowUndo-Ds9fN1GT.js";import"./MenuListDivider-DBzJeO3_.js";import"./Fieldset-Cj-4eLGA.js";import"./Field-CitCeqKK.js";import"./Label-B4XhPvWK.js";import"./Input-7ZkrUdZt.js";import"./Datepicker-B9Pg5C_E.js";import"./SearchField-DB7B9m_1.js";import"./MagnifyingGlass-DUa4q_J4.js";import"./FieldBase-CZEUpIPU.js";import"./Typography-xETneU90.js";import"./useMenu-DUnPL890.js";import"./MenuListHeading-HVvc_FIB.js";import"./InformationSquare-CSNu4leW.js";import"./Paperclip-43gP-RI6.js";import"./Eye-CUQdiFCV.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-AxvsS4Qu.js";import"./useDropdownMenuController-9ebtaTAF.js";import"./Dropdown-D4yTY22u.js";import"./Plus-BtBVLn4K.js";import"./ButtonGroup-ksQ-pxhG.js";import"./ButtonGroupDivider-C6lBSkQo.js";import"./ChevronUpDown-sznE9W03.js";import"./ToolbarMenu-C3NvIh1-.js";import"./ToolbarSearch-IOkl3wPr.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
