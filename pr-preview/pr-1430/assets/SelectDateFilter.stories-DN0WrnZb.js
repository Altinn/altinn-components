var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a7 as t}from"./iframe-C7zNVDTT.js";import{S as m}from"./SelectDateFilter-JS68mGNg.js";import{t as s}from"./example.data-UFgyniWO.js";import{a as l}from"./example.hooks-dwyXqB4c.js";import{T as p,a as c}from"./Toolbar-D5UOIQbP.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-HpAaUcay.js";import"./MenuListItem-BTzpN6s4.js";import"./MenuItem-BFxBNv1B.js";import"./ItemMedia-89sj9-D5.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./Checkmark-BpQLEI_t.js";import"./ItemLabel-BTO4WUhi.js";import"./Heading-gv6s55oV.js";import"./useHighlightedText-CLjqXK08.js";import"./ItemControls-CUub_53H.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./ChevronRight-DIApXsrk.js";import"./ArrowUndo-nuZh3Ffr.js";import"./MenuListDivider-DPPFUY5F.js";import"./Fieldset-DG2W5MhA.js";import"./Field-C_oHAtV1.js";import"./Label-CAjho_cW.js";import"./Input-CFKt0A_s.js";import"./Datepicker-Daih5RPD.js";import"./SearchField-DGzlCViu.js";import"./MagnifyingGlass-D6hMH6h9.js";import"./FieldBase-CRVXDoio.js";import"./Typography-4gq5i4xU.js";import"./useMenu-CRscwWGI.js";import"./MenuListHeading-DE-GHA8Q.js";import"./InformationSquare-BvDWZ3oM.js";import"./Paperclip-Hm1oVg6A.js";import"./Eye-C9j4iDyb.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-PG0UCurc.js";import"./useDropdownMenuController-ClSzWlSO.js";import"./Dropdown-ONE2NNEY.js";import"./Plus-D2iqct3P.js";import"./ButtonGroup-CoqmCer7.js";import"./ButtonGroupDivider-CndRbUqR.js";import"./ChevronUpDown-R0HlDPZA.js";import"./ToolbarMenu-WfeXYafB.js";import"./ToolbarSearch-GE1ukijt.js";const mt={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName");o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
