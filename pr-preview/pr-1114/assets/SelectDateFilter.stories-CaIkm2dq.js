import{j as t}from"./iframe-COdTICiz.js";import{S as a}from"./SelectDateFilter-BfKg7llZ.js";import{u as m,t as n}from"./example.hooks-CPKsCo9m.js";import{T as s,a as l}from"./Toolbar-Cg4ziSof.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BLH3jHa2.js";import"./useId-lT615UMD.js";import"./Datepicker-C4pd_Qqy.js";import"./index-eHSiAaoN.js";import"./ChevronRight-tPPKpYH4.js";import"./Button-Dqoqvefk.js";import"./button-BvBLLivB.js";import"./use-merge-refs-DMOZr-G2.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-BVxiRmRE.js";import"./MenuItem-Pij9KqE-.js";import"./ItemMedia-BN92MYHv.js";import"./XMark-CpgXVK2Q.js";import"./Avatar-30_b1gUS.js";import"./Skeleton-DCT9M7tY.js";import"./AvatarGroup-DMJoFLAP.js";import"./Icon-CpwjhC7D.js";import"./Checkmark-D_NJmpQs.js";import"./Heading-BXn08xBV.js";import"./useHighlightedText-FFYshbql.js";import"./ItemControls-DRloD8XX.js";import"./Badge-CTG2EWNm.js";import"./MenuListHeading-C74FO8PH.js";import"./Fieldset-B6uNUkGg.js";import"./index-zPL8uGVu.js";import"./Label-Bw83ICjW.js";import"./Input-Dmsj72wJ.js";import"./input-DYzXaufk.js";import"./SearchField-DQWZ98wb.js";import"./MagnifyingGlass-BjGJbcBP.js";import"./FieldBase-CQukmgiw.js";import"./Typography-CRI9HVXo.js";import"./useMenu-C9hrnnrl.js";import"./InformationSquare-BF6iEl5i.js";import"./Paperclip-BfNNDqa4.js";import"./Eye-DR8-FhJ1.js";import"./MenuHamburger-CqtO9W0U.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-BmS2V_T_.js";import"./Plus-D6hG0ghA.js";import"./Dropdown-riK9lB0y.js";import"./ChevronUpDown-B9jBdQ1p.js";import"./ButtonGroup-BKCkWJMA.js";import"./ButtonGroupDivider-BGHFJh1m.js";import"./Tooltip-CFVYTWjg.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-D_qwmHta.js";import"./ToolbarSearch-BjQxAllS.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const Ft=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,Ft as __namedExportsOrder,dt as default};
