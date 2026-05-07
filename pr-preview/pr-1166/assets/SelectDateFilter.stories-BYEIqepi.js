import{j as t}from"./iframe-u1jxS1Oq.js";import{S as a}from"./SelectDateFilter-CwxgqZQc.js";import{u as m,t as n}from"./example.hooks-Dem1HePJ.js";import{T as s,a as l}from"./Toolbar-mSR30s4v.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-B6TGv3ww.js";import"./useId-MxiBxM6f.js";import"./Datepicker-B5_mksOB.js";import"./index-CuIYfQx6.js";import"./ChevronRight-Dx4m7R44.js";import"./Button-BY9-KzE0.js";import"./button-CanOz9MC.js";import"./use-merge-refs-DeN80SPN.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-BGYFPBt-.js";import"./MenuItem-CRFWvbZF.js";import"./ItemMedia-Dn5ydfd9.js";import"./XMark-Bsujigqn.js";import"./Avatar-DVgGPyAb.js";import"./Skeleton-vSjDGrjA.js";import"./AvatarGroup-B0Rqd5X-.js";import"./Icon-DjXLk3vD.js";import"./Checkmark-CapblMXW.js";import"./Heading-B6H8IHeT.js";import"./useHighlightedText-Cgx_Ij05.js";import"./ItemControls-GTSartAy.js";import"./Badge-DEnx77R3.js";import"./Tooltip-DbCog91V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-BoIZ0dV_.js";import"./Fieldset-BjznVQqm.js";import"./index-Cx6LUCQB.js";import"./Label-D4ujXpAq.js";import"./Input-BNqEyP7x.js";import"./input-y4RbUeVJ.js";import"./SearchField-BwnvpNr2.js";import"./MagnifyingGlass-5wf6qRdO.js";import"./FieldBase-BcXnInHB.js";import"./Typography-DJdlSKXp.js";import"./useMenu-CJJuJq3h.js";import"./InformationSquare-C97_OpNa.js";import"./Paperclip-DWGKTEMb.js";import"./Eye-CwI-KaLg.js";import"./MenuHamburger-DqxEpoux.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-CqFMkV_m.js";import"./Plus-DDBVjJkP.js";import"./Dropdown-CanQZVjK.js";import"./ChevronUpDown-pwUGRMmV.js";import"./ButtonGroup-DTQJ7yTP.js";import"./ButtonGroupDivider-BZKqv01B.js";import"./ToolbarMenu-Dt2RBqCD.js";import"./ToolbarSearch-DFrGVg-W.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
