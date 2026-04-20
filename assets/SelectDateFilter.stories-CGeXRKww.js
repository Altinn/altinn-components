import{j as t}from"./iframe-yBEatwQ0.js";import{S as a}from"./SelectDateFilter-Den4T4YL.js";import{u as m,t as n}from"./example.hooks-CwQZhdVY.js";import{T as s,a as l}from"./Toolbar-pWkgRMwq.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-osocl8i7.js";import"./useId-DyCIbqyR.js";import"./Datepicker-BPS20S9C.js";import"./index-B7J_eA84.js";import"./ChevronRight-DNoffWLc.js";import"./Button-Du_F5DdO.js";import"./button-DDduZyu8.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-BYxhnGHY.js";import"./MenuItem-DG7ysQbI.js";import"./ItemMedia-po0tYTET.js";import"./XMark-DRdfunCf.js";import"./Avatar-BHAY-jNJ.js";import"./Skeleton-D2AOT5bt.js";import"./AvatarGroup-Em3MhneF.js";import"./Icon-m6GSRHhZ.js";import"./Checkmark-BOqpEP7R.js";import"./Heading-gNorXCZa.js";import"./useHighlightedText-Dt8J34OD.js";import"./ItemControls-CsC9idfH.js";import"./Badge-Bt5kdhhY.js";import"./MenuListHeading-CMUrUTJP.js";import"./Fieldset-Wydq2NK2.js";import"./index-4yM6tgpO.js";import"./Label-jtu-OMH2.js";import"./Input-BprGT-wl.js";import"./input-ByeiaQUe.js";import"./SearchField-Dq16b7ar.js";import"./MagnifyingGlass-SlzD67D9.js";import"./FieldBase-DJNauVgJ.js";import"./Typography-ggurnZ72.js";import"./useMenu-DUoC-ldr.js";import"./InformationSquare-CID74XMT.js";import"./Paperclip-BQfOcZQR.js";import"./Eye-RCRP_qEL.js";import"./MenuHamburger-LWrM74HE.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-DyufIMTt.js";import"./Plus-CN2BINNw.js";import"./Dropdown-Dt86DnuG.js";import"./ChevronUpDown-Bh4SS8Cp.js";import"./ButtonGroup-Cw-wKcaM.js";import"./ButtonGroupDivider-C6kpFR4l.js";import"./Tooltip-ncAjVCVs.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-CJIbYcPE.js";import"./ToolbarSearch-DDKzx7pj.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
