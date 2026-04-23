import{j as t}from"./iframe-CK12xbO6.js";import{S as a}from"./SelectDateFilter-tN7DXXJ7.js";import{u as m,t as n}from"./example.hooks-BqPvibRX.js";import{T as s,a as l}from"./Toolbar-DDYBFFby.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DOBtYJAt.js";import"./useId-CIOYGEMY.js";import"./Datepicker-CTWxbFUA.js";import"./index-DS2SSX1f.js";import"./ChevronRight-DxL2oOG5.js";import"./Button-DTrhNbku.js";import"./button-D6lkouap.js";import"./use-merge-refs-D5gu3XYQ.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-B_ethkwV.js";import"./MenuItem-DjmA2GJO.js";import"./ItemMedia-XHYq4GSc.js";import"./XMark-MadrIoK8.js";import"./Avatar-CjYl4qzD.js";import"./Skeleton-CLQkeaUO.js";import"./AvatarGroup-DIAmYFyU.js";import"./Icon-BHUPQGzt.js";import"./Checkmark-DQBecNO6.js";import"./Heading-Drr-of_9.js";import"./useHighlightedText-DdOMnBlO.js";import"./ItemControls-B1M2j2tm.js";import"./Badge-BBKRgbs4.js";import"./Tooltip-BdqmcG89.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-CCkIOc1e.js";import"./Fieldset-Dy0A-1z0.js";import"./index-BCgvi17I.js";import"./Label-CQOYgwqz.js";import"./Input-CN33OjmR.js";import"./input-CdhXBgWK.js";import"./SearchField-CfLtnFna.js";import"./MagnifyingGlass-qxU1ofSJ.js";import"./FieldBase-NrhOHdDA.js";import"./Typography-PIwVlbiP.js";import"./useMenu-BM6Zh5Qq.js";import"./InformationSquare-C5QsI1Pb.js";import"./Paperclip-B08sHd0a.js";import"./Eye-CStM5yWn.js";import"./MenuHamburger-CeM_4KvR.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController--WYsFZ5d.js";import"./Plus-LAYoRaA7.js";import"./Dropdown-CtQW7C8x.js";import"./ChevronUpDown-CGM66yE3.js";import"./ButtonGroup-BcyGdCwQ.js";import"./ButtonGroupDivider-Bk-HCSfX.js";import"./ToolbarMenu-mxw-7SZ4.js";import"./ToolbarSearch-CfeOST9x.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
