import{j as t}from"./iframe-BJEbXdzo.js";import{S as a}from"./SelectDateFilter-DDcqlJyY.js";import{u as m,t as n}from"./example.hooks-DRxrm173.js";import{T as s,a as l}from"./Toolbar-CMrzLOzQ.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DaYXADnN.js";import"./useId-DgrNWXh_.js";import"./Datepicker-BAD85Cvy.js";import"./index-ChGHkNNv.js";import"./ChevronRight-CoSPx3Kv.js";import"./Button-DNsjk1zC.js";import"./button-3a31VMtF.js";import"./use-merge-refs-BwmZcoLX.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-U3U1VVBg.js";import"./MenuItem-CIe0tXLI.js";import"./ItemMedia-CiNZWpX-.js";import"./XMark-sTHnj54s.js";import"./Avatar-CcIuhVy2.js";import"./Skeleton-DWcIZ1wH.js";import"./AvatarGroup-Cpo75nCB.js";import"./Icon-msEkDcFf.js";import"./Checkmark-DLPFtMmB.js";import"./Heading-1LBL0JVO.js";import"./useHighlightedText-Chj_Mw3b.js";import"./ItemControls-CAq51EMf.js";import"./Badge-CNae3IUV.js";import"./Tooltip-Ct0E88k_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-BxpAf7GB.js";import"./Fieldset-Ber4vH34.js";import"./index-THETCITG.js";import"./Label-DQQXrne0.js";import"./Input-BI0TJMod.js";import"./input-CnbiDkgl.js";import"./SearchField-C43D0Bvg.js";import"./MagnifyingGlass-Dp61EhHj.js";import"./FieldBase-s2kWEUm7.js";import"./Typography-D85R78i7.js";import"./useMenu-9_PPaP-8.js";import"./InformationSquare-e9K9-Rpn.js";import"./Paperclip-Do9FRucA.js";import"./Eye-Bd51zfnO.js";import"./MenuHamburger-K1BgVp7W.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-DuWgBdSv.js";import"./Plus-DGG8hdRK.js";import"./Dropdown-BWrGCxZb.js";import"./ChevronUpDown-PFO21Y4O.js";import"./ButtonGroup-CbGBNNFa.js";import"./ButtonGroupDivider-CFce6icy.js";import"./ToolbarMenu-PoMokTMQ.js";import"./ToolbarSearch-DMcOXt6s.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
