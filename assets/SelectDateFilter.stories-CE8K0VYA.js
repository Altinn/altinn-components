import{j as t}from"./iframe-D8UVhXtj.js";import{S as a}from"./SelectDateFilter-BYltMfU-.js";import{u as m,t as n}from"./example.hooks-BKCRuW9Z.js";import{T as s,a as l}from"./Toolbar-BFKVtVdg.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-D71UVseq.js";import"./useId-B_5z_sER.js";import"./Datepicker-vTTzh9HT.js";import"./index-DZ6CWLt4.js";import"./ChevronRight-BBMrC_JJ.js";import"./Button-C1dDhU4f.js";import"./button-BAeX-ygn.js";import"./use-merge-refs-PJHuZtY5.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-D2rOlDhJ.js";import"./MenuItem-D_QGB2bx.js";import"./ItemMedia-D1B_6Nv6.js";import"./XMark-RzwOtF1Q.js";import"./Avatar-DcRqiXhT.js";import"./Skeleton-DuOqXwDT.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Icon-DPTwfvyC.js";import"./Checkmark-DOivg6Pe.js";import"./Heading-BAduz1Vr.js";import"./useHighlightedText-CniNcpSk.js";import"./Badge-FbSzRhwU.js";import"./MenuListHeading-BCjwSnwp.js";import"./Fieldset-DwRGvrNJ.js";import"./index-B_UnVtHx.js";import"./Label-b2Pkfnmh.js";import"./Input-CeOaqFsx.js";import"./input-Dh6CJXOW.js";import"./SearchField-DrqRDMva.js";import"./MagnifyingGlass-Dwu8NLc_.js";import"./FieldBase-DzrGcQVO.js";import"./Typography-n-xWt5s-.js";import"./useMenu-Bi-E8KDv.js";import"./InformationSquare-BUh6v1hF.js";import"./Paperclip-ctSduXzx.js";import"./Eye-Co5XTG_V.js";import"./MenuHamburger-Bl4YfJVQ.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-DzAqcIMc.js";import"./Plus-DWBglMau.js";import"./Dropdown-DCJfu5rP.js";import"./ChevronUpDown-DLYhoYYJ.js";import"./ButtonGroup-o1ngc8Xw.js";import"./ButtonGroupDivider-D-j9u71T.js";import"./Tooltip-Z_wNKmlw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DHhsFI4W.js";import"./ToolbarSearch--8LKLWyf.js";const ct={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
