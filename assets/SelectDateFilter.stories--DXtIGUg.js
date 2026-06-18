import{a7 as t}from"./iframe-3eub8g81.js";import{S as a}from"./SelectDateFilter-Ck1jA08Z.js";import{t as n}from"./example.data-BT-sauY8.js";import{a as s}from"./example.hooks-bRSnlbhx.js";import{T as m,a as l}from"./Toolbar-BvyEDRF2.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-wMI9ZK2f.js";import"./MenuListItem-kYkVg98b.js";import"./MenuItem-CSF12lCK.js";import"./ItemMedia-BB_XOZ97.js";import"./Avatar-CwYCtPFD.js";import"./AvatarGroup-5atDHYqT.js";import"./Checkmark-CY-7WOxt.js";import"./ItemLabel-CEuTRmIa.js";import"./Heading-Cn9WCavo.js";import"./useHighlightedText-D_KrHTcm.js";import"./ItemControls-DXPiBYKt.js";import"./Badge-CMPSGpEc.js";import"./Tooltip-egZN2oaV.js";import"./ChevronRight-BS_VcXFa.js";import"./ArrowUndo-N8aO_0gv.js";import"./MenuListDivider-Bx6VzZCp.js";import"./Fieldset-BrkALp6v.js";import"./Field-BEYcEfWR.js";import"./Label-Dn1DYcv0.js";import"./Input-C_lNMvAW.js";import"./Datepicker-Csk2n7dg.js";import"./SearchField-DQomiBHs.js";import"./MagnifyingGlass-BjeT7HiQ.js";import"./FieldBase-C1gDTj8R.js";import"./Typography-BfGFMo_X.js";import"./useMenu-DENMRGmJ.js";import"./MenuListHeading-lAZfEwXv.js";import"./InformationSquare-CORGNNV5.js";import"./Paperclip-BAqZrYSe.js";import"./Eye-C_oKwPHJ.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CbSlFFZF.js";import"./useDropdownMenuController-F3dY1VLA.js";import"./Dropdown-D34Rh-FK.js";import"./Plus-BNfQnDLY.js";import"./ButtonGroup-D2aDB7np.js";import"./ButtonGroupDivider-CcfY_W-p.js";import"./ChevronUpDown-YFoeVuKi.js";import"./ToolbarMenu-D0u9Ba_c.js";import"./ToolbarSearch-BjmRNzox.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
