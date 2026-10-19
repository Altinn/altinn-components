var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a7 as t}from"./iframe-C_3qWz8U.js";import{S as m}from"./SelectDateFilter-C7uyrQqw.js";import{t as s}from"./example.data-Bcm349cO.js";import{a as l}from"./example.hooks--XHG3lMS.js";import{T as p,a as c}from"./Toolbar-BaN42SjD.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-Dd4l2l4-.js";import"./MenuListItem-BXhczEyE.js";import"./MenuItem-Dx8f33T4.js";import"./ItemMedia-Cj3xkQia.js";import"./Avatar-DoTE2KMY.js";import"./AvatarGroup-CYCsQlmU.js";import"./Checkmark-BxM9iGty.js";import"./ItemLabel-D1WDG3AN.js";import"./Heading-mFc3Xe1m.js";import"./useHighlightedText-ChiMW-L8.js";import"./ItemControls-B-e7R4IL.js";import"./Badge-BBubxNU6.js";import"./Tooltip-oYeDkYvf.js";import"./ChevronRight-Cfc1KVT6.js";import"./ArrowUndo-VSyd97tJ.js";import"./MenuListDivider-HcjopcmV.js";import"./Fieldset-DuTv6cVj.js";import"./Field-D_aQ-GwQ.js";import"./Label-El1js8iZ.js";import"./Input-BnIvU9G4.js";import"./Datepicker-DTSg-vmh.js";import"./SearchField-wVxLElBM.js";import"./MagnifyingGlass-h5bwwa2w.js";import"./FieldBase-2HPCGFYx.js";import"./Typography-BcJ8Dd08.js";import"./useMenu-DHyqVfH8.js";import"./MenuListHeading-CcIf8Q21.js";import"./InformationSquare-BJVzaHsz.js";import"./Paperclip-DT1sJhpr.js";import"./Eye-CE1cd7I2.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DihebW8m.js";import"./useDropdownMenuController-B_MLek_v.js";import"./Dropdown-C4WgdX01.js";import"./Plus-DHsDmPUd.js";import"./ButtonGroup-Byo6nBQS.js";import"./ButtonGroupDivider-DCxTBizd.js";import"./ChevronUpDown-bCOc7Q_P.js";import"./ToolbarMenu-DOZ8j3Oa.js";import"./ToolbarSearch-CauYnztQ.js";const mt={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName");o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
