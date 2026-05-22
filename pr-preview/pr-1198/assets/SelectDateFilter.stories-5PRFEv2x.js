import{j as t}from"./iframe-C6Awlou2.js";import{S as a}from"./SelectDateFilter-CGNsyHNE.js";import{u as m,t as n}from"./example.hooks-Kj3drvHN.js";import{T as s,a as l}from"./Toolbar-BSEJGUYJ.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CHAtcjGp.js";import"./useId-InpKFtFj.js";import"./Datepicker-CtrbcAcB.js";import"./index-DlBZqmFk.js";import"./ChevronRight-BPFGJ1iV.js";import"./Button-xDUaTd0f.js";import"./tooltip-wBWP-9p3.js";import"./MenuListItem-DEkjbPAb.js";import"./MenuItem-DvRDzq7X.js";import"./ItemMedia-C094egTG.js";import"./XMark-BEbAfGHw.js";import"./Avatar-CJAvXADO.js";import"./Skeleton-Dzw9idTE.js";import"./AvatarGroup-CCkWNWoM.js";import"./Icon-DNxmTYNY.js";import"./Checkmark-dLQcEakJ.js";import"./Heading-CwC0m1gc.js";import"./useHighlightedText-BOeqc4_T.js";import"./ItemControls-vVSkFb-5.js";import"./Badge-4PTsP983.js";import"./Tooltip-CsuAugEU.js";import"./MenuListHeading-0XPhJCtv.js";import"./Fieldset-Dt4w9DES.js";import"./Label-C48-SpFn.js";import"./Input-DYyIZxUH.js";import"./SearchField-BUnYpq_7.js";import"./MagnifyingGlass-CS4fCaYb.js";import"./FieldBase-D62sKxwt.js";import"./Typography-B5eitD86.js";import"./useMenu-CAczdzUV.js";import"./index-C-MjzqYY.js";import"./InformationSquare-DNjiq8ws.js";import"./Paperclip-2zzMkfO0.js";import"./Eye-B6PTDSFS.js";import"./MenuHamburger-BcKlYS8F.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-lE7_h4w8.js";import"./Plus-CQfWxjRv.js";import"./Dropdown-A06NMf9H.js";import"./ChevronUpDown-ge_2OXZE.js";import"./ButtonGroup-wXquxLDR.js";import"./ButtonGroupDivider-o9_G-o4g.js";import"./ToolbarMenu-CPF48JxQ.js";import"./ToolbarSearch-BoGK01XM.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
