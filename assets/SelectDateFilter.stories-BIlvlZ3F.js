import{j as t}from"./iframe-Nkxls2w0.js";import{S as a}from"./SelectDateFilter-DCgLTJJR.js";import{u as m,t as n}from"./example.hooks-CEyrLc0z.js";import{T as s,a as l}from"./Toolbar-D-GGCzOD.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DCCluNxu.js";import"./useId-C8J5yFeN.js";import"./Datepicker-DMzYWJ0Y.js";import"./index-M4TkGQLb.js";import"./ChevronRight-Bcpq3qt2.js";import"./Button-Ds9vuGVD.js";import"./button-CK59nDyy.js";import"./use-merge-refs-NASGeav9.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-Cfh5A6HZ.js";import"./MenuItem-edMrv6Qw.js";import"./ItemMedia-CsEr1Zw1.js";import"./XMark-D-ALqV0n.js";import"./Avatar-BDGJojEv.js";import"./Skeleton-DNS4c1Rp.js";import"./AvatarGroup-BM9A-Bel.js";import"./Icon-qDX4JAC4.js";import"./Checkmark-DHusaxnp.js";import"./Heading-AZ4WQ_-Y.js";import"./useHighlightedText-BtUjP4Uj.js";import"./ItemControls-BH6jrH_o.js";import"./Badge-Ipym1qsE.js";import"./Tooltip-sxtJg_qK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-CEofuJGo.js";import"./Fieldset-D6B-Qjte.js";import"./index-Bvwkp7W_.js";import"./Label-DRBFvXSF.js";import"./Input-BDHdvqI3.js";import"./input-MPZybUVd.js";import"./SearchField-Bb3Ffka2.js";import"./MagnifyingGlass-k_g2FxNc.js";import"./FieldBase-Drb41XPf.js";import"./Typography-CZZfCvh6.js";import"./useMenu-WCeLZ4vF.js";import"./InformationSquare-zR5D--CT.js";import"./Paperclip-CSwfMlvx.js";import"./Eye-CfWY8lE0.js";import"./MenuHamburger-RVcJ4Btq.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-BB48Tjgy.js";import"./Plus-DIAMQcGN.js";import"./Dropdown-D5aFsl9a.js";import"./ChevronUpDown-Cc1V6X6m.js";import"./ButtonGroup-HCy2ouFP.js";import"./ButtonGroupDivider-BRcd2kIA.js";import"./ToolbarMenu-D2G4eQ7e.js";import"./ToolbarSearch-Bt1qoil4.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
