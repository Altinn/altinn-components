import{j as t}from"./iframe-DDirkHus.js";import{S as a}from"./SelectDateFilter-mHEZNlOL.js";import{u as m,t as n}from"./example.hooks-BZrgA45F.js";import{T as s,a as l}from"./Toolbar-CJNc-PPt.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-cRffdIA3.js";import"./useId-CVUrh2ea.js";import"./Datepicker-DKy07Xqq.js";import"./index-B2YDfdyU.js";import"./ChevronRight-BUOZMhwy.js";import"./Button-CdMyOsNo.js";import"./button-CnVt3gpj.js";import"./use-merge-refs-CIAaUVpb.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-DoS1mSfo.js";import"./MenuItem-BsaYehiV.js";import"./ItemMedia-ZkVlWcbo.js";import"./XMark-DldqIUES.js";import"./Avatar-DMl0Fglw.js";import"./Skeleton-0VOrezcL.js";import"./AvatarGroup-CxNYw_3L.js";import"./Icon-Cv1R39O2.js";import"./Checkmark-MQqJd3cN.js";import"./Heading-s9P5sHvn.js";import"./useHighlightedText-CWfqHJQe.js";import"./ItemControls-CqR56LSR.js";import"./Badge-BMZjltw3.js";import"./Tooltip-Di80zHO_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-7XRfXaU1.js";import"./Fieldset-D58mDId3.js";import"./index-F2gU6D0V.js";import"./Label-9QWpQ8Bw.js";import"./Input-C9yDHhzX.js";import"./input-CQTkCXgP.js";import"./SearchField-CByF2bQh.js";import"./MagnifyingGlass-BGbR81wS.js";import"./FieldBase-BNjKJDB0.js";import"./Typography-Do8CAd45.js";import"./useMenu-DLxXpcV8.js";import"./InformationSquare-D3Ojtweu.js";import"./Paperclip-CuA2Ouyz.js";import"./Eye-BKi6p1Ir.js";import"./MenuHamburger-lKI_Kf6L.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-2ed30dPc.js";import"./Plus-DXvjiSe3.js";import"./Dropdown-CtjdzYco.js";import"./ChevronUpDown-BLnWhBGi.js";import"./ButtonGroup-B-c85YOq.js";import"./ButtonGroupDivider-CS2WBK-e.js";import"./ToolbarMenu-qeE8mxHQ.js";import"./ToolbarSearch-q7CgcguI.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
