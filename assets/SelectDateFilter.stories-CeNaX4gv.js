import{j as t}from"./iframe-D-ID03Ik.js";import{S as a}from"./SelectDateFilter-B9mF_XgT.js";import{u as m,t as n}from"./example.hooks-CnMtMJi6.js";import{T as s,a as l}from"./Toolbar-D_32k6lF.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-C5nWWLI0.js";import"./useId-DxZoCrQU.js";import"./Datepicker-DiQBl0Pv.js";import"./index-DpFyEq-2.js";import"./ChevronRight-CxM-6AgC.js";import"./Button-CO1zFGa4.js";import"./tooltip-CH7-mov_.js";import"./MenuListItem-Ba7wKRG_.js";import"./MenuItem-Czug_8v9.js";import"./ItemMedia-BTzF80jS.js";import"./XMark-DAr8sgUQ.js";import"./Avatar-CUF81_T9.js";import"./Skeleton--3bwKnDN.js";import"./AvatarGroup-ZBmyex5T.js";import"./Icon-CER3YkDn.js";import"./Checkmark-WbwQiDGB.js";import"./Heading-BD0s_Obx.js";import"./useHighlightedText-Db1ksA0v.js";import"./ItemControls-Bpd8WrWV.js";import"./Badge-BH60Kfyy.js";import"./Tooltip-DuVvkEGb.js";import"./MenuListHeading-D9YSE4Po.js";import"./Fieldset-CPq1hID8.js";import"./Label-DsF9mxAr.js";import"./Input-BflTpPuJ.js";import"./SearchField-D--HBqax.js";import"./MagnifyingGlass-DWkFIUI5.js";import"./FieldBase-DmpPz6xV.js";import"./Typography-COzCTzPW.js";import"./useMenu-OLkOIIh8.js";import"./index-B-QoLJUi.js";import"./InformationSquare-BLDef__3.js";import"./Paperclip-CR_ArcLu.js";import"./Eye-oHc2-Not.js";import"./MenuHamburger-DWdWswT9.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-CvvhEQZ7.js";import"./Plus-DTGwq1FZ.js";import"./Dropdown-CPTBx2eu.js";import"./ChevronUpDown-BHEUhOzV.js";import"./ButtonGroup-vd8KP0y5.js";import"./ButtonGroupDivider-DHMyJatP.js";import"./ToolbarMenu-B1E5Clfm.js";import"./ToolbarSearch-DH92-z9I.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
