import{j as t}from"./iframe-CHILL5tZ.js";import{S as a}from"./SelectDateFilter-hAEINB_O.js";import{u as m,t as n}from"./example.hooks-BKlaNz1S.js";import{T as s,a as l}from"./Toolbar-wTmE4DS7.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DLyXjA6N.js";import"./useId-CxjMVxT3.js";import"./Datepicker-wNJhqI9R.js";import"./index-D0JdUEkn.js";import"./ChevronRight-C2HiJ5JV.js";import"./Button-BhP7fHb4.js";import"./button-BIgBCVIC.js";import"./use-merge-refs-BXZnV1dm.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-D8HsXFkE.js";import"./MenuItem-DaU4SSfC.js";import"./ItemMedia-BDXURQdO.js";import"./XMark-DQxCv5Yn.js";import"./Avatar-BEHn6hs3.js";import"./Skeleton-BX9QnUCy.js";import"./AvatarGroup-9Hd8MZfa.js";import"./Icon-DK0uLDnk.js";import"./Checkmark-nA2yaQnq.js";import"./Heading-B80Wap_u.js";import"./useHighlightedText-sycLCu80.js";import"./ItemControls-Okligr0R.js";import"./Badge-DHaboY8X.js";import"./Tooltip-gqkYQCXG.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-D8Av5awU.js";import"./Fieldset-Dl54YQ74.js";import"./index-ASxRsC3U.js";import"./Label-BmNpXiOX.js";import"./Input-F-jc7mgY.js";import"./input-BiYbaGgt.js";import"./SearchField-DpxDm5xW.js";import"./MagnifyingGlass-Z3jVe5X3.js";import"./FieldBase-DGrlYpX7.js";import"./Typography-BDbDV84g.js";import"./useMenu-CBS-gOUF.js";import"./InformationSquare-qW6C7jKR.js";import"./Paperclip-gwDySizp.js";import"./Eye-CDB98-Nu.js";import"./MenuHamburger-DS0wNl2W.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-BYzUrJMj.js";import"./Plus-V3d-3j45.js";import"./Dropdown-riFJwjzV.js";import"./ChevronUpDown-D1AR4jxs.js";import"./ButtonGroup-85VHWPxh.js";import"./ButtonGroupDivider-BzY6J6Jz.js";import"./ToolbarMenu-CiEtpkyk.js";import"./ToolbarSearch-Ce8v13vg.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
