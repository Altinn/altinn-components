import{a7 as t}from"./iframe-BRgClhpr.js";import{S as a}from"./SelectDateFilter-DXW4P4MS.js";import{t as n}from"./example.data-UNQ08G6u.js";import{a as s}from"./example.hooks-CbYtRTN7.js";import{T as m,a as l}from"./Toolbar-BJcU2Rha.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-BjPyMWJZ.js";import"./MenuListItem-rBdScGXY.js";import"./MenuItem-jszC7nZR.js";import"./ItemMedia-DpaVUI33.js";import"./Avatar-X_UXtw_G.js";import"./AvatarGroup-Tv1EoB7j.js";import"./Checkmark-CT8uSN89.js";import"./ItemLabel-CvYCQ28O.js";import"./Heading-D9ujzuNV.js";import"./useHighlightedText-DTOSK592.js";import"./ItemControls-WDxokqHy.js";import"./Badge-DWERQKY0.js";import"./Tooltip-DwlyrKqO.js";import"./ChevronRight-BLIKQh_h.js";import"./ArrowUndo-Din4NvuX.js";import"./MenuListDivider-DSrBiGuI.js";import"./Fieldset-COg_KWLi.js";import"./Field-DqCTTwOm.js";import"./Label-BrO-Curr.js";import"./Input-C7r6_Ftd.js";import"./Datepicker-xPjpwJMS.js";import"./SearchField--IrWsBEa.js";import"./MagnifyingGlass-DQctf2To.js";import"./FieldBase-D8LAV1W4.js";import"./Typography-BKJ9hmvo.js";import"./useMenu-C_5VwfPF.js";import"./MenuListHeading-BqZAg_LU.js";import"./InformationSquare-DK9XnxPK.js";import"./Paperclip-CJIZduPz.js";import"./Eye-DmfViiBh.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-B9b99sAx.js";import"./useDropdownMenuController-CFHgccGy.js";import"./Dropdown-DgbN3_NI.js";import"./Plus-Bhd65Ctm.js";import"./ButtonGroup-Ce1vy6GX.js";import"./ButtonGroupDivider-DmROwXvK.js";import"./ChevronUpDown-B33S1emb.js";import"./ToolbarMenu-CHXvz521.js";import"./ToolbarSearch-CGitA5lw.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
