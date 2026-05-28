import{p as t}from"./iframe-DrMVe4hJ.js";import{S as a}from"./SelectDateFilter-k_0kPOA5.js";import{t as n,a as m}from"./example.hooks-BWhr0ElH.js";import{T as s,a as l}from"./Toolbar-CRtbo8Qm.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-D8f5vRSf.js";import"./index-B2LUQ97G.js";import"./MenuItem-B27UidAs.js";import"./ItemMedia-B9-jRKLO.js";import"./XMark-BXMpu0Gf.js";import"./useId-CwrI0QJg.js";import"./Avatar-toOOZ7nf.js";import"./Skeleton-BKl0bJYN.js";import"./AvatarGroup-CVynWGO_.js";import"./Icon-CK8FcAiF.js";import"./Checkmark-OKWU0xmP.js";import"./ItemLabel-DjesYwl7.js";import"./Heading-DYwrq57L.js";import"./useHighlightedText-BA3QT9FH.js";import"./ItemControls-ztKmX_ZB.js";import"./Badge-BnCvYltQ.js";import"./Tooltip-BEnHuPi8.js";import"./tooltip-BY1BnveL.js";import"./ChevronRight-u16zgCRT.js";import"./ArrowUndo-DXCdgahn.js";import"./MenuListHeading-UZ0vr2Pr.js";import"./Fieldset-BZawVw2k.js";import"./Label-QaOAiYFD.js";import"./Input-kqR7j7M6.js";import"./Datepicker-DdWeq-qQ.js";import"./Button-B40GVZAo.js";import"./SearchField-BnuJ-svS.js";import"./MagnifyingGlass-BYmBhmCt.js";import"./FieldBase-C4Wnopmd.js";import"./Typography-BZD6V0ik.js";import"./useMenu-CrRt-E4f.js";import"./index-j3-eoKUd.js";import"./InformationSquare-J3q8zJp8.js";import"./Paperclip-BDBVzmFe.js";import"./Eye-BZv16xjr.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DFEV7Ips.js";import"./useDropdownMenuController-BAGvidc8.js";import"./Dropdown-CG27uion.js";import"./Plus-CPTNbqFv.js";import"./ButtonGroup-Bxqmt3uG.js";import"./ButtonGroupDivider-t1hdeYZx.js";import"./ChevronUpDown-DxkeSRKc.js";import"./ToolbarMenu-D5qMSH42.js";import"./ToolbarSearch-DZ3dSuRw.js";const lt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const pt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,pt as __namedExportsOrder,lt as default};
