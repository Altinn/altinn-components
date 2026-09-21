import{a7 as t}from"./iframe-DJfn40-D.js";import{S as a}from"./SelectDateFilter-BrGMgNmK.js";import{t as n}from"./example.data-mslLay8S.js";import{a as s}from"./example.hooks-B1fEZuxN.js";import{T as m,a as l}from"./Toolbar-DkOXbGD0.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-Cay1ipf9.js";import"./MenuListItem-BFRz4ttp.js";import"./MenuItem-BcYTRISI.js";import"./ItemMedia-KuTtS6so.js";import"./Avatar-DCvRzqvr.js";import"./AvatarGroup-3CBvuGfY.js";import"./Checkmark-DXbNx-Gj.js";import"./ItemLabel-GD3MG7Wk.js";import"./Heading-DGmFcP6K.js";import"./useHighlightedText-Bup2uSoT.js";import"./ItemControls-fheO_qcA.js";import"./Badge-DwpsZD4L.js";import"./Tooltip-D_0KZq3E.js";import"./ChevronRight-DB6kCZkt.js";import"./ArrowUndo-B2-52xOX.js";import"./MenuListDivider-D98MnUWk.js";import"./Fieldset-BCNeRbXw.js";import"./Field-Dse2Pgmw.js";import"./Label-BgUgSPLd.js";import"./Input-1D4-_m0T.js";import"./Datepicker-DMUNeGJ2.js";import"./SearchField-BCijVFY-.js";import"./MagnifyingGlass-DE-iQbgW.js";import"./FieldBase-D1U1BxD2.js";import"./Typography-XfwuV3u8.js";import"./useMenu-CxHWIKXS.js";import"./MenuListHeading-DOsHnXss.js";import"./InformationSquare-TILYX_Pd.js";import"./Paperclip-OMBVgScI.js";import"./Eye-4UKD6XFj.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-C0Qf3lmv.js";import"./useDropdownMenuController-CsyOSzoH.js";import"./Dropdown-D88HD4zP.js";import"./Plus-CBmVVX8g.js";import"./ButtonGroup-HFpGrSBK.js";import"./ButtonGroupDivider-B1RwbsMj.js";import"./ChevronUpDown-D_O75hLp.js";import"./ToolbarMenu-D_o4oXU9.js";import"./ToolbarSearch-rTgpQV-h.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
