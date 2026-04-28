import{j as t}from"./iframe-DUgQHy5z.js";import{S as a}from"./SelectDateFilter-DOuaE_z1.js";import{u as m,t as n}from"./example.hooks-pdsu6u0F.js";import{T as s,a as l}from"./Toolbar-p94Aw-gr.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Dawpb3je.js";import"./useId-BEmmm-9F.js";import"./Datepicker-CbBkeULh.js";import"./index-CHKdKrFD.js";import"./ChevronRight-DcPr7c69.js";import"./Button-DAj4Vb1f.js";import"./button-D0axoqj3.js";import"./use-merge-refs-tN_UguZ4.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-Cobo65pu.js";import"./MenuItem-rAhK0ZP8.js";import"./ItemMedia-CtpZg4yw.js";import"./XMark-CIC6hSAY.js";import"./Avatar-CQy8D3NB.js";import"./Skeleton-BWHbMU5J.js";import"./AvatarGroup-DAp73R1d.js";import"./Icon-D31Usj2D.js";import"./Checkmark-CEKDqcfc.js";import"./Heading-CGuufgH4.js";import"./useHighlightedText-BXy_Fo0F.js";import"./ItemControls-eEEzDso3.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-USeQ6WLV.js";import"./Fieldset-BjkJQ7MW.js";import"./index-DtFuKRqq.js";import"./Label-B-nIzD7x.js";import"./Input-DxofbABb.js";import"./input-BKf2w74T.js";import"./SearchField-DrvAfAqD.js";import"./MagnifyingGlass-Bvm8HrPp.js";import"./FieldBase-B3m8Pe0B.js";import"./Typography-CInfIHKg.js";import"./useMenu-DKqXZTHj.js";import"./InformationSquare-C5uyE4ek.js";import"./Paperclip-D4bUtdbF.js";import"./Eye-BdTVDMAG.js";import"./MenuHamburger-BFRrh2Ww.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-DoVSojsp.js";import"./Plus-DMuAFtu8.js";import"./Dropdown-VwXyzPyy.js";import"./ChevronUpDown-qDB1OsEf.js";import"./ButtonGroup-Co0foBbC.js";import"./ButtonGroupDivider-DHIj-T3D.js";import"./ToolbarMenu-BzCt4Lt_.js";import"./ToolbarSearch-B9Ja8uVL.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
