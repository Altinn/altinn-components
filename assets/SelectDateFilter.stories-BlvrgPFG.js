import{j as t}from"./iframe-CULgtZWU.js";import{S as a}from"./SelectDateFilter-CFjfv19R.js";import{u as m,t as n}from"./example.hooks-CtFZqNVI.js";import{T as s,a as l}from"./Toolbar-BtiZHTnq.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Dr_lpKdM.js";import"./useId-COk2q28h.js";import"./Datepicker-B4k43Hsm.js";import"./index-BvBdYXxj.js";import"./ChevronRight-Q1coQceW.js";import"./Button-EDUaKVqz.js";import"./button-DZmMky1p.js";import"./use-merge-refs-BFFvRczq.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-bQ_fc2Ge.js";import"./MenuItem-ByRPat9U.js";import"./ItemMedia-CstP66eQ.js";import"./XMark-BCb0_aBA.js";import"./Avatar-DIXtsktU.js";import"./Skeleton-B_F13Udl.js";import"./AvatarGroup-C5aSOTjU.js";import"./Icon-G4wS9E1h.js";import"./Checkmark-DEc7m9Qo.js";import"./Heading-QgrsV_VA.js";import"./useHighlightedText-BLw72BO7.js";import"./ItemControls-RibfoZmh.js";import"./Badge-CMQ7i3tF.js";import"./MenuListHeading-gj1aWH_N.js";import"./Fieldset-B5rXPjTC.js";import"./index-DY3DIpTU.js";import"./Label-TPhVVF1y.js";import"./Input-C5uL5M8v.js";import"./input-CIkisq6p.js";import"./SearchField-D5aR-gNH.js";import"./MagnifyingGlass-B-SEPcNi.js";import"./FieldBase-DGffeSDz.js";import"./Typography-BrN0KsEX.js";import"./useMenu-Do_nneWd.js";import"./InformationSquare-C8Qq6I-D.js";import"./Paperclip-Ca_xrm4Q.js";import"./Eye-Bhn_FNva.js";import"./MenuHamburger-CkaaaQ8r.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-BqzfaV4g.js";import"./Plus-Bkcc1EK1.js";import"./Dropdown-CNyPz2U1.js";import"./ChevronUpDown-zmPMeN0t.js";import"./ButtonGroup-CUeGctwp.js";import"./ButtonGroupDivider-CHK1_K1s.js";import"./Tooltip-Bn52Dko6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DyZjnBfk.js";import"./ToolbarSearch-xJqadeFi.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
