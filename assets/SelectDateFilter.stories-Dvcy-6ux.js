import{a7 as t}from"./iframe-BKcGtkf2.js";import{S as a}from"./SelectDateFilter-CqCdZ03s.js";import{t as n}from"./example.data-g92UEImX.js";import{a as s}from"./example.hooks-C1VXrb9K.js";import{T as m,a as l}from"./Toolbar-CmbdYE5N.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-DBPfPmaH.js";import"./MenuListItem-q_h-S_lZ.js";import"./MenuItem-BPSVutJE.js";import"./ItemMedia-DmxCD2ZI.js";import"./Avatar-BD71BIVo.js";import"./AvatarGroup-Chghs2c1.js";import"./Checkmark-57W1Byq3.js";import"./ItemLabel-DZ6-a4p7.js";import"./Heading-iI-qniD3.js";import"./useHighlightedText-Qdo-jqVR.js";import"./ItemControls-sjDYc_Mm.js";import"./Badge-CPABd3pg.js";import"./Tooltip-PYsK9SJI.js";import"./ChevronRight-Bik0Rfts.js";import"./ArrowUndo-B99YefQU.js";import"./MenuListDivider-BA6y76AD.js";import"./Fieldset-Cr7vbZSd.js";import"./Field-DGa34R2s.js";import"./Label-D5VJqQJd.js";import"./Input-C7NN4jQM.js";import"./Datepicker-B-ndGbR8.js";import"./SearchField-c4c7eBD1.js";import"./MagnifyingGlass-CBFBCqg8.js";import"./FieldBase-kOxFDexg.js";import"./Typography-CpSlwMZW.js";import"./useMenu-D9Zi9nWU.js";import"./MenuListHeading-MK0rACd0.js";import"./InformationSquare-7aD0sTi5.js";import"./Paperclip-DPPeRLwK.js";import"./Eye-DhzEO1a4.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-8h-PJWWI.js";import"./useDropdownMenuController-BPyTaE6X.js";import"./Dropdown-CApDEdpz.js";import"./Plus-Rs3Q664C.js";import"./ButtonGroup-Cf_eaZSI.js";import"./ButtonGroupDivider-T3tUyezT.js";import"./ChevronUpDown-D8QQ0L64.js";import"./ToolbarMenu-IJxC4fhW.js";import"./ToolbarSearch-ByP9jwcr.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const at=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,at as __namedExportsOrder,nt as default};
