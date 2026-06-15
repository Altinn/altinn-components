import{a7 as t}from"./iframe-DdvxY_xq.js";import{S as a}from"./SelectDateFilter-DtUyMq_C.js";import{t as n,a as s}from"./example.hooks-BXBdMblo.js";import{T as m,a as l}from"./Toolbar-BQaudiHZ.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-BiOJri4m.js";import"./MenuItem-L68RSDFn.js";import"./ItemMedia-DUTgrI06.js";import"./Avatar-BkRf-LcA.js";import"./AvatarGroup-o6Z87nDX.js";import"./Checkmark-DJVRCLhU.js";import"./ItemLabel-C58CsJMo.js";import"./Heading-CE6yLC7h.js";import"./useHighlightedText-BFt57PCX.js";import"./ItemControls-DoOKV45e.js";import"./Badge-CGTcd0en.js";import"./Tooltip-BRmZYzim.js";import"./ChevronRight-C3Cb2zNm.js";import"./ArrowUndo-D_q0f42e.js";import"./MenuListHeading-CMTKGvH9.js";import"./Fieldset-DJUmo8lq.js";import"./Field-Dc25EUil.js";import"./Label-CJtMWK76.js";import"./Input-2Gn2X0Ml.js";import"./Datepicker-CEUZHrB9.js";import"./SearchField-Cr3Gi8TV.js";import"./MagnifyingGlass-BNJradcO.js";import"./FieldBase-DD97eycm.js";import"./Typography-CUBjJcUl.js";import"./useMenu-Cr8gFQCV.js";import"./index-BdOTeIXC.js";import"./InformationSquare-CvBtG7YX.js";import"./Paperclip-DHuhvvk0.js";import"./Eye-CH1T9BmR.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-WeCbK5N8.js";import"./useDropdownMenuController-BKuLMBHY.js";import"./Dropdown-DHo9FStr.js";import"./Plus-C9Ly1iUu.js";import"./ButtonGroup-D_joR3q8.js";import"./ButtonGroupDivider-D9DaMehQ.js";import"./ChevronUpDown-COT69Dtr.js";import"./ToolbarMenu-DkMr-fU4.js";import"./ToolbarSearch-Bx-QPBkS.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const ot=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,ot as __namedExportsOrder,it as default};
