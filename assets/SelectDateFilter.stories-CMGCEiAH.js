import{j as t}from"./iframe-DgiLb7Jh.js";import{S as a}from"./SelectDateFilter-BAn6Z5M1.js";import{u as m,t as n}from"./example.hooks-O91M4uLq.js";import{T as s,a as l}from"./Toolbar-CEcHWW0U.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Dx5hHpGf.js";import"./useId-6J1VG5PF.js";import"./Datepicker-CeMj1Kju.js";import"./index-CzzvqmNv.js";import"./ChevronRight-B8GqJ6hU.js";import"./Button-D7CoEZHH.js";import"./button-2pQtb28r.js";import"./use-merge-refs-CpvzIuY-.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-BzaUHJzz.js";import"./MenuItem-CM4esdkj.js";import"./ItemMedia-BvSNOAVc.js";import"./XMark-DE16CL-6.js";import"./Avatar-D2ea3_hU.js";import"./Skeleton-CjXkBVSw.js";import"./AvatarGroup-BGNg7yRW.js";import"./Icon-uoDJWBW9.js";import"./Checkmark-49Lv_3MM.js";import"./Heading-CAIwUoS2.js";import"./useHighlightedText-C3KXFHAg.js";import"./Badge-DFo-bNGw.js";import"./MenuListHeading-BHx30WUA.js";import"./Fieldset-kjl2AGn_.js";import"./index-Cu0iGtDM.js";import"./Label-6LQ7LXNA.js";import"./Input-Cmck_kaL.js";import"./input-BBC2L6cA.js";import"./SearchField-CTb1s1hd.js";import"./MagnifyingGlass-C5v4zKU0.js";import"./FieldBase-B0t89PB6.js";import"./Typography-Bp8CNLT3.js";import"./useMenu-7q5OpfBf.js";import"./InformationSquare-CZhEVvng.js";import"./Paperclip-DhNvEpcT.js";import"./Eye-mLzMfQ7W.js";import"./MenuHamburger-DsSm4Trc.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-fXPHld1D.js";import"./Plus-gYiwb3vr.js";import"./Dropdown-Bk4mNQmY.js";import"./ChevronUpDown-agMv5gvN.js";import"./ButtonGroup-Ds9mrFFQ.js";import"./ButtonGroupDivider-eHUmueO9.js";import"./Tooltip-00zSbMAL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DJQIA27l.js";import"./ToolbarSearch-OWdwBwH6.js";const ct={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const dt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,dt as __namedExportsOrder,ct as default};
