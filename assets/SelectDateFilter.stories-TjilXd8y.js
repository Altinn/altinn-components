var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a7 as t}from"./iframe-BaqLtPTs.js";import{S as m}from"./SelectDateFilter-DR83Breg.js";import{t as s}from"./example.data-D2nYNUpA.js";import{a as l}from"./example.hooks-lquyqeQ_.js";import{T as p,a as c}from"./Toolbar-Dj7s2NCM.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-DZ5KX6h3.js";import"./MenuListItem-sXMtvpJ-.js";import"./MenuItem-D9hVuXrM.js";import"./ItemMedia-CLNTwl7K.js";import"./Avatar-DvYNusc4.js";import"./AvatarGroup-BUa5IcMK.js";import"./Checkmark-B7wTOCbv.js";import"./ItemLabel-D68tVwEb.js";import"./Heading-CDNNIgnR.js";import"./useHighlightedText-sWqW6aCW.js";import"./ItemControls-BPS_hDHQ.js";import"./Badge-Dh4HGE2C.js";import"./Tooltip-DfSLGLjy.js";import"./ChevronRight-Dg4XRKaD.js";import"./ArrowUndo-pSENVqmS.js";import"./MenuListDivider-iw10_T6H.js";import"./Fieldset-BHd0mRZg.js";import"./Field-D5dVA89M.js";import"./Label-Wvr4cn-z.js";import"./Input-BbFz6Lbp.js";import"./Datepicker-7glC7U6B.js";import"./SearchField-BCMYwn2Y.js";import"./MagnifyingGlass-D84zuplr.js";import"./FieldBase-BEQqqs0u.js";import"./Typography-DwSVJfAa.js";import"./useMenu-C1bmwhZm.js";import"./MenuListHeading-Cp83ODWk.js";import"./InformationSquare-DB9gl9c1.js";import"./Paperclip-C9ePn1WV.js";import"./Eye-BRyL4UU8.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Be95533-.js";import"./useDropdownMenuController-omw4CUeb.js";import"./Dropdown-BUS7xPa_.js";import"./Plus-C5MYAhCf.js";import"./ButtonGroup-BJPVaBTK.js";import"./ButtonGroupDivider-B_4k_KaA.js";import"./ChevronUpDown-BFdCo8HA.js";import"./ToolbarMenu-D6_pLKVW.js";import"./ToolbarSearch-BpBZ8xn1.js";const mt={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName");o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};const lt=["Datepicker","RemovableDatepicker","CustomName"];export{a as CustomName,o as Datepicker,n as RemovableDatepicker,lt as __namedExportsOrder,mt as default};
