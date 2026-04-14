import{j as t}from"./iframe-gnB9S1An.js";import{S as a}from"./SelectDateFilter-DxAfAMns.js";import{u as m,t as n}from"./example.hooks-BXV6hrEu.js";import{T as s,a as l}from"./Toolbar-BinhdMzm.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Bzf3zYG1.js";import"./useId-B9nFNwMW.js";import"./Datepicker-BKWmjb9D.js";import"./index-C4jL9APw.js";import"./ChevronRight-CmdeYhPT.js";import"./Button-Cf61aO7p.js";import"./button-CCpZP8rq.js";import"./use-merge-refs-W_EFMAqs.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-Cw2vF4tQ.js";import"./MenuItem-DVF0RjTG.js";import"./ItemMedia-B78XDhUs.js";import"./XMark-F0lxfgWB.js";import"./Avatar-otyGg43a.js";import"./Skeleton-_K166C5F.js";import"./AvatarGroup-CYAQOWwZ.js";import"./Icon-CL2c9__7.js";import"./Checkmark-D8iTH_Nd.js";import"./Heading-uoQ4E1Gx.js";import"./useHighlightedText-BAP0b8E_.js";import"./ItemControls-0hV_6Ao9.js";import"./Badge-D2lHyQ6d.js";import"./MenuListHeading-BN0bXZhY.js";import"./Fieldset-BCe99vhN.js";import"./index-DXeuHUJe.js";import"./Label-Bqs-eWs1.js";import"./Input-9fyov3Km.js";import"./input-DqrOL1yx.js";import"./SearchField-CW2AroNW.js";import"./MagnifyingGlass-LdJ8MC-9.js";import"./FieldBase-BbR80WA9.js";import"./Typography-uy1P5_7q.js";import"./useMenu-DEo-iQ-R.js";import"./InformationSquare-CRWfnij7.js";import"./Paperclip-YCmG63MU.js";import"./Eye-CG3xDgEv.js";import"./MenuHamburger-UwfHPvv0.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-4NcEcuey.js";import"./Plus-p8k1KwpY.js";import"./Dropdown-C0Ynf067.js";import"./ChevronUpDown-BsjklsEy.js";import"./ButtonGroup-b_-H3sds.js";import"./ButtonGroupDivider-CPu4IzmD.js";import"./Tooltip-D-gwYEuh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-UUZF6_sk.js";import"./ToolbarSearch-B98pYuNh.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
