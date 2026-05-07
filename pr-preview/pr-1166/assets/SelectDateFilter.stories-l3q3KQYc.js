import{j as t}from"./iframe-BLYnYdJi.js";import{S as a}from"./SelectDateFilter-BBbPv8j3.js";import{u as m,t as n}from"./example.hooks-Ds1P7WTy.js";import{T as s,a as l}from"./Toolbar-CewnHVzf.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-nSuILEr9.js";import"./useId-X7maRfkh.js";import"./Datepicker-ByaX6VWY.js";import"./index-B87fQ9Ty.js";import"./ChevronRight-BKn9ueoN.js";import"./Button-DA7PTG8V.js";import"./button-B4GPokGl.js";import"./use-merge-refs-FLCzGq2C.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-4EzyMnJz.js";import"./MenuItem-QRksz61A.js";import"./ItemMedia-PaceHGjP.js";import"./XMark-Df3dBUtr.js";import"./Avatar-R2BW9KiJ.js";import"./Skeleton-DVFvYbaO.js";import"./AvatarGroup-Bj4w1IxT.js";import"./Icon-BBgjdpk7.js";import"./Checkmark-DfNuFQY9.js";import"./Heading-BbPallRO.js";import"./useHighlightedText-omqdYwyr.js";import"./ItemControls-lA3CDM6n.js";import"./Badge-C8IaAeJ7.js";import"./Tooltip-C4gqbQ4g.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-CHqHsXip.js";import"./Fieldset-4oddqKsb.js";import"./index-CJAPncw7.js";import"./Label-Br4cyMgU.js";import"./Input-6k10kXxt.js";import"./input-D5lGbDkw.js";import"./SearchField-BrbRKSJg.js";import"./MagnifyingGlass-vVGrqHq4.js";import"./FieldBase-CvSJrP7q.js";import"./Typography-CnODk9AP.js";import"./useMenu-DImJoMjP.js";import"./InformationSquare-OOV4URoX.js";import"./Paperclip-BRG3sxHl.js";import"./Eye-CdC36Qhm.js";import"./MenuHamburger-C7T2DwIu.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController--K-V2jGb.js";import"./Plus-BP2D1YPb.js";import"./Dropdown-B_CqShRd.js";import"./ChevronUpDown-Bi5y66ZT.js";import"./ButtonGroup-CEDbAWnm.js";import"./ButtonGroupDivider-CvTb59sy.js";import"./ToolbarMenu-2H_l_H82.js";import"./ToolbarSearch-Cwhqz22J.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
