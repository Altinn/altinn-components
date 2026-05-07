import{j as t}from"./iframe-Cqj3AiBb.js";import{S as a}from"./SelectDateFilter-B6lsLzAw.js";import{u as m,t as n}from"./example.hooks-CvDsTxaZ.js";import{T as s,a as l}from"./Toolbar-C1AG3cCG.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-zDsO2X_3.js";import"./useId-Bi-DL88I.js";import"./Datepicker-Bb_SOfY4.js";import"./index-CHG1hv9Q.js";import"./ChevronRight-CxmxTIkT.js";import"./Button-DYwdzfZG.js";import"./button-CcZ_KMhQ.js";import"./use-merge-refs-CZYKnUm1.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-BGLPSqCo.js";import"./MenuItem-BHtFBHA3.js";import"./ItemMedia-DihsrAKt.js";import"./XMark-ReENydG3.js";import"./Avatar-D1U6ps5a.js";import"./Skeleton-B33vAz-c.js";import"./AvatarGroup-CmMUwf3A.js";import"./Icon-CHi77IUK.js";import"./Checkmark-BFwQvgMU.js";import"./Heading-CJiOkJPI.js";import"./useHighlightedText-Cyl54eZj.js";import"./ItemControls-eJMUKPOH.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-CixMX2n6.js";import"./Fieldset-W2wGG_nr.js";import"./index-BZqr7PxG.js";import"./Label-URmODKr6.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./SearchField-qenOIdRZ.js";import"./MagnifyingGlass-fMCV_alc.js";import"./FieldBase-DDsWnoQi.js";import"./Typography-CV-E4tqG.js";import"./useMenu-CKPILulU.js";import"./index-hX5sl0T5.js";import"./InformationSquare-DK31GEUT.js";import"./Paperclip-DhIyBwic.js";import"./Eye-B2jzUGYg.js";import"./MenuHamburger-Cowy_Pyv.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-DF4yQiJ_.js";import"./Plus-U9ILyx0n.js";import"./Dropdown-Cx7yQmcU.js";import"./ChevronUpDown-DokNKEik.js";import"./ButtonGroup-HmC79Nv3.js";import"./ButtonGroupDivider-DRl2_qKh.js";import"./ToolbarMenu-CrdlAyWm.js";import"./ToolbarSearch-C6dAmVLU.js";const Ft={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const ut=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,ut as __namedExportsOrder,Ft as default};
