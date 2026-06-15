import{a7 as t}from"./iframe-CH-Rf2AI.js";import{S as a}from"./SelectDateFilter-lpqhWrdf.js";import{t as n,a as s}from"./example.hooks-kQrUwhyT.js";import{T as m,a as l}from"./Toolbar-B5whV829.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-GZMPCGGS.js";import"./MenuItem-BWxi170U.js";import"./ItemMedia-BczcOirL.js";import"./Avatar-BTqkjvF0.js";import"./AvatarGroup-l96vnRcp.js";import"./Checkmark-CzXEx9R6.js";import"./ItemLabel-B29_eOJn.js";import"./Heading-BVqV7FRe.js";import"./useHighlightedText-DIHcSE2r.js";import"./ItemControls-loNIR_kd.js";import"./Badge-D-8o5byA.js";import"./Tooltip-DbXMT4Wm.js";import"./ChevronRight-uifDbL9f.js";import"./ArrowUndo-DkUyPEkv.js";import"./MenuListHeading-DRQf-aXW.js";import"./Fieldset-RTv4sQps.js";import"./Field-D5PSE71G.js";import"./Label-D8E1gFAx.js";import"./Input-CCpKfFu1.js";import"./Datepicker-C9rz2_01.js";import"./SearchField-Dm3ERjlY.js";import"./MagnifyingGlass-CcgQ0D7w.js";import"./FieldBase-BRTqs99O.js";import"./Typography-CqA3kMNv.js";import"./useMenu-FkcUMU_-.js";import"./index-Bn39eRZ3.js";import"./InformationSquare-D0kDsS_w.js";import"./Paperclip-HsR2VBMP.js";import"./Eye-BoZFsIWT.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DrB2GaRw.js";import"./useDropdownMenuController-C7q1T2hK.js";import"./Dropdown-_OswQPQg.js";import"./Plus-BQYmFmTa.js";import"./ButtonGroup-6-1iOFaS.js";import"./ButtonGroupDivider-h_7e4qvH.js";import"./ChevronUpDown-D4KfXAKY.js";import"./ToolbarMenu-BA267ZrV.js";import"./ToolbarSearch-SraTjllo.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
