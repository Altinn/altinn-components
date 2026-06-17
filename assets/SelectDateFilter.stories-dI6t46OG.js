import{a7 as t}from"./iframe-CGVyzYP6.js";import{S as a}from"./SelectDateFilter-BziyEqQV.js";import{t as n}from"./example.data-Ct1I-smw.js";import{a as s}from"./example.hooks-B_t9gRcB.js";import{T as m,a as l}from"./Toolbar-BpWwufEX.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-D5zF0axt.js";import"./MenuListItem-BZZ7Na45.js";import"./MenuItem-D-GQTJGG.js";import"./ItemMedia-DPok0_Uu.js";import"./Avatar-DDHY9yxs.js";import"./AvatarGroup-B_UwXOMR.js";import"./Checkmark-pskdQzRC.js";import"./ItemLabel-C1oepsPk.js";import"./Heading-EfRG8byd.js";import"./useHighlightedText-Bh9EAdhA.js";import"./ItemControls-DA3hAeY8.js";import"./Badge-DjC88ORp.js";import"./Tooltip-BCyYy-oX.js";import"./ChevronRight-_qaR5Ukf.js";import"./ArrowUndo-Cdz_QOzf.js";import"./MenuListDivider-rcUBnQ13.js";import"./Fieldset-Ctqi5BL-.js";import"./Field-D0ZvmoXg.js";import"./Label-Cy3PFObt.js";import"./Input-ChwQfPxo.js";import"./Datepicker-SSEk4ABz.js";import"./SearchField-Dki50BLg.js";import"./MagnifyingGlass-Vm5pwk0c.js";import"./FieldBase-CPq342qa.js";import"./Typography-CpGYIokR.js";import"./useMenu-DakKUenW.js";import"./MenuListHeading-Dp87R0C9.js";import"./InformationSquare-CCTfPPnt.js";import"./Paperclip-e2rEPEnE.js";import"./Eye-Mvrh6DKd.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DPcE0NSO.js";import"./useDropdownMenuController-_RUVZb-i.js";import"./Dropdown-85NQ92f7.js";import"./Plus-BK1pztAq.js";import"./ButtonGroup-C56yvq46.js";import"./ButtonGroupDivider-BmBJUz1Y.js";import"./ChevronUpDown-Cauwl_uS.js";import"./ToolbarMenu-C2-ft2MN.js";import"./ToolbarSearch-vqzXRpQW.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
