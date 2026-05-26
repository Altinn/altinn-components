import{j as t}from"./iframe-C32LkOFR.js";import{S as a}from"./SelectDateFilter-BU9JnkDy.js";import{u as m,t as n}from"./example.hooks-51JUGtWh.js";import{T as s,a as l}from"./Toolbar-DtXUXRyF.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-C8csTNhw.js";import"./useId-C6VS968l.js";import"./Datepicker-vqReHSAq.js";import"./index-B41-Gq6i.js";import"./ChevronRight-BRam3foO.js";import"./Button-DJyTPLgL.js";import"./tooltip-C1z0ba6x.js";import"./MenuListItem-CpDZm8hJ.js";import"./MenuItem-B2ec7Awl.js";import"./ItemMedia-Bzb68dd0.js";import"./XMark-CJ_7TJfx.js";import"./Avatar-Bfhk-MsW.js";import"./Skeleton-BFp1Ns5z.js";import"./AvatarGroup-CngdFV9S.js";import"./Icon-ClcJ2Ugl.js";import"./Checkmark-Cohtyyf2.js";import"./Heading-C2AVc7ZV.js";import"./useHighlightedText-TWz6a-kb.js";import"./ItemControls-6sDFc5WV.js";import"./Badge-B5rN9dZh.js";import"./Tooltip-D2U0c2nY.js";import"./MenuListHeading-DFXzzdQl.js";import"./Fieldset-DahoeTWf.js";import"./Label--g4FWuur.js";import"./Input-944JhKVs.js";import"./SearchField-CSvKC2kE.js";import"./MagnifyingGlass-WQhuuXQl.js";import"./FieldBase-C4PiPQJY.js";import"./Typography-BtAt1mkJ.js";import"./useMenu-CglJcFc3.js";import"./index-DD5_FiA2.js";import"./InformationSquare-BqsScoMm.js";import"./Paperclip-DSqVpQqK.js";import"./Eye-VpIxgA79.js";import"./MenuHamburger-CP22A_hy.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-CToZfoEW.js";import"./Plus-BuKKYKtN.js";import"./Dropdown-3ScmWyOY.js";import"./ChevronUpDown-Dxpj943m.js";import"./ButtonGroup-C2Onw-9a.js";import"./ButtonGroupDivider-C3K0uMrd.js";import"./ToolbarMenu-DBsXgIzo.js";import"./ToolbarSearch-DVPrcmBl.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
