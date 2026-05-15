import{j as t}from"./iframe-CZMLD2fe.js";import{S as a}from"./SelectDateFilter-CY9fZNx9.js";import{u as m,t as n}from"./example.hooks-CzPGo2Bl.js";import{T as s,a as l}from"./Toolbar-BFeDuU1G.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CgL76AqI.js";import"./useId-Dmu9AgSD.js";import"./Datepicker-CVi4mSy6.js";import"./index-iGjPLQV7.js";import"./ChevronRight-7zRCvc5i.js";import"./Button-z0ZioQWK.js";import"./button-CZknkFMR.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-DDLkxBzW.js";import"./MenuItem-BQTFtYYp.js";import"./ItemMedia-CE_zTi22.js";import"./XMark-BBRiAlI8.js";import"./Avatar-DzGFAhDt.js";import"./Skeleton-D52MvI5U.js";import"./AvatarGroup-sNwukvT8.js";import"./Icon-CbE8dCFV.js";import"./Checkmark-CgCD7cxb.js";import"./Heading-5rlhad8Q.js";import"./useHighlightedText-CmlayFSP.js";import"./ItemControls-CSi2HZsx.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-BJ84Vv6-.js";import"./Fieldset-CaCWnSVo.js";import"./index-DZ8nICMn.js";import"./Label-C0JPWrbN.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./SearchField-hPGSgF9W.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./FieldBase-bsYRos9m.js";import"./Typography-BegW4Ytw.js";import"./useMenu-CEG7UMF2.js";import"./index-CQNCMx5k.js";import"./InformationSquare-BauCIT4L.js";import"./Paperclip-D3K3BZed.js";import"./Eye-B_n82EES.js";import"./MenuHamburger-CM7Wkn6q.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-Dm3dzHc4.js";import"./Plus-2Q0T7s3R.js";import"./Dropdown-Bx0d8Qo_.js";import"./ChevronUpDown-CYrJfMm2.js";import"./ButtonGroup-lppFG0T2.js";import"./ButtonGroupDivider-Bg56f6eB.js";import"./ToolbarMenu-Dtr-9pM9.js";import"./ToolbarSearch-Bxg4abWw.js";const Ft={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const ut=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,ut as __namedExportsOrder,Ft as default};
