import{a7 as t}from"./iframe-O8cJNgnH.js";import{S as a}from"./SelectDateFilter-DlVsWfOE.js";import{t as n}from"./example.data-E1TDVUmQ.js";import{a as s}from"./example.hooks-81iIWPuh.js";import{T as m,a as l}from"./Toolbar-EBTCyCZX.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-zM4nCWyc.js";import"./MenuListItem-CQjZkQSb.js";import"./MenuItem--4S_Ij0p.js";import"./ItemMedia-DQabxJtZ.js";import"./Avatar-D8-vsJJv.js";import"./AvatarGroup-Ra_TR9_v.js";import"./Checkmark-dNVTYLgC.js";import"./ItemLabel-C8aE3_ka.js";import"./Heading-BdhLm3SL.js";import"./useHighlightedText-CnUjn7TA.js";import"./ItemControls-Crhi56hp.js";import"./Badge-BEBeTMrY.js";import"./Tooltip-BrWx-R_c.js";import"./ChevronRight-U0ooHRaY.js";import"./ArrowUndo-sS0AjGTk.js";import"./MenuListDivider-B5yo7PZG.js";import"./Fieldset-B8vixfU8.js";import"./Field-C6gWhPtJ.js";import"./Label-Bx5yqb_Y.js";import"./Input-BfEZmvKD.js";import"./Datepicker-DkuzZeCS.js";import"./SearchField-bcjP3Rbv.js";import"./MagnifyingGlass-DHpnscJf.js";import"./FieldBase-SXGcT6A1.js";import"./Typography-DU3EjiaL.js";import"./useMenu-BDnyYHA1.js";import"./MenuListHeading-kFnOp7Lr.js";import"./InformationSquare-CwO_8hH0.js";import"./Paperclip-BHEobVqN.js";import"./Eye-BUZMkOsU.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-D2jzHCCp.js";import"./useDropdownMenuController-MyvXNyzM.js";import"./Dropdown-DmhW7MY5.js";import"./Plus-B_TKpQ68.js";import"./ButtonGroup-BrPvP3j_.js";import"./ButtonGroupDivider-yVY2TaYN.js";import"./ChevronUpDown-Dclr-mmb.js";import"./ToolbarMenu-B1c3rNz-.js";import"./ToolbarSearch-BRF92hG5.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
