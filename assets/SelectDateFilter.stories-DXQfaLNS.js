import{j as t}from"./iframe-V8BRfBgT.js";import{S as a}from"./SelectDateFilter-e1UEyJSy.js";import{u as m,t as n}from"./example.hooks-BEGq6OnV.js";import{T as s,a as l}from"./Toolbar-COw40rPO.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-ZeGtF0l8.js";import"./useId-Cpax_hNq.js";import"./Datepicker-Z_2GnQNC.js";import"./index-Dg3z2A9f.js";import"./ChevronRight-Cz_uty1S.js";import"./Button-BlxzDMPI.js";import"./button-2-meUg78.js";import"./use-merge-refs--fAMpcSQ.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-Ckqn-jsk.js";import"./MenuItem-DQUORZa0.js";import"./ItemMedia-C3tA4Zzy.js";import"./XMark-C45HvrEl.js";import"./Avatar-BDDvrYzF.js";import"./Skeleton-BQtaEJM-.js";import"./AvatarGroup-KHWc8S2T.js";import"./Icon-BWOTtVf8.js";import"./Checkmark-BKwfqVUb.js";import"./Heading-CGSCg4GY.js";import"./useHighlightedText-DnT87ATC.js";import"./ItemControls-BctCfWNT.js";import"./Badge-Bf3suXAP.js";import"./Tooltip-D0XBkrvV.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-nXDmyZ7G.js";import"./Fieldset-BnDieKGw.js";import"./index-ByKBsU4r.js";import"./Label-DdQ1zxpY.js";import"./Input-zOuJx9ZS.js";import"./input-1VpPOyjR.js";import"./SearchField-D2AXVYp0.js";import"./MagnifyingGlass-DvXaPbUD.js";import"./FieldBase-DENJ-wBn.js";import"./Typography-BiIpQq_S.js";import"./useMenu-D2cFOQcG.js";import"./index-84oeY8HP.js";import"./InformationSquare-Bxq9CYlT.js";import"./Paperclip-mS0UE-dC.js";import"./Eye-DYkaa2lw.js";import"./MenuHamburger-BATPuSR-.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-B5tdkj26.js";import"./Plus-DYqQ5ZW1.js";import"./Dropdown-ChJd6AE_.js";import"./ChevronUpDown-CFkX2GwM.js";import"./ButtonGroup-GmtwjaC0.js";import"./ButtonGroupDivider-DCIj-SRz.js";import"./ToolbarMenu-D3KQzrUC.js";import"./ToolbarSearch-6Fm-z8Bv.js";const Ft={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
