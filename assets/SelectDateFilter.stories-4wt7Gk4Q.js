import{j as t}from"./iframe-BakMcPB9.js";import{S as a}from"./SelectDateFilter-BnCx0vZZ.js";import{u as m,t as n}from"./example.hooks-DP3iCOif.js";import{T as s,a as l}from"./Toolbar-B_CGAfU5.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-B1TPuteg.js";import"./useId-Btw-Kuqp.js";import"./Datepicker-C6fj9J4x.js";import"./index-DAwqyEdM.js";import"./ChevronRight-C2TalX8u.js";import"./Button-BJ-P2q8B.js";import"./button-Dqq-cscz.js";import"./use-merge-refs-CJ9f1t94.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-DLQbcaMe.js";import"./MenuItem-DOoZvP8c.js";import"./ItemMedia-CMtvzv_T.js";import"./XMark-D8cLqedS.js";import"./Avatar-bwZt4czp.js";import"./Skeleton-CIZGLt5B.js";import"./AvatarGroup-DgPgqKip.js";import"./Icon-D4ysQTre.js";import"./Checkmark-Bv6xEUnW.js";import"./Heading-Dpm-6zaj.js";import"./useHighlightedText-nzhiVGnc.js";import"./ItemControls-BIaUvdXD.js";import"./Badge-ChbpCNVq.js";import"./Tooltip-CQ3DXIuJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-BYFBzopx.js";import"./Fieldset-BUm26vBg.js";import"./index-Dmny_mDx.js";import"./Label-D58ijrT7.js";import"./Input-Csjd-e9P.js";import"./input-DNwUo5r_.js";import"./SearchField-rHpPiKo0.js";import"./MagnifyingGlass-BCCA0_9u.js";import"./FieldBase-B35pktZu.js";import"./Typography-BzplxmiV.js";import"./useMenu-BaGtO6Vm.js";import"./InformationSquare-XaKmtjKI.js";import"./Paperclip-dw8uMOP-.js";import"./Eye-e_0T4QTz.js";import"./MenuHamburger-ChSiVscJ.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-CClYSj1T.js";import"./Plus-CsNf283B.js";import"./Dropdown-UmxICHKp.js";import"./ChevronUpDown-BQWoe1O9.js";import"./ButtonGroup-4RnrqVmD.js";import"./ButtonGroupDivider-BxtMkVsF.js";import"./ToolbarMenu-B3EEzWoM.js";import"./ToolbarSearch-CKv0R1zR.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
