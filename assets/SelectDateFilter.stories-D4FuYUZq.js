import{a7 as t}from"./iframe-DWxW88Wb.js";import{S as a}from"./SelectDateFilter-DB7xf8UT.js";import{t as n,a as s}from"./example.hooks-DLmMIRY0.js";import{T as m,a as l}from"./Toolbar-UK4EUwDV.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-CaAjdfCo.js";import"./MenuItem-CTR_r1KI.js";import"./ItemMedia-pWda_jSz.js";import"./Avatar-C1EBlka3.js";import"./AvatarGroup-BXtad5OG.js";import"./Checkmark-BMNSyflA.js";import"./ItemLabel-CjOWrvlD.js";import"./Heading-Dg7_b6ZQ.js";import"./useHighlightedText-Kme-_nwy.js";import"./ItemControls-uvaqS71K.js";import"./Badge-Dmc2yD_5.js";import"./Tooltip-Cxw5k6PG.js";import"./ChevronRight-CaZE672G.js";import"./ArrowUndo-BNbnSrnn.js";import"./MenuListHeading-COGZjwEu.js";import"./Fieldset-Bz92yUMt.js";import"./Field-nEx1TRai.js";import"./Label-EU_RFMoG.js";import"./Input-CPaqJzda.js";import"./Datepicker-D3lt4fe3.js";import"./SearchField-DiX0tG9c.js";import"./MagnifyingGlass-DeszhIH4.js";import"./FieldBase-CIL3pXPs.js";import"./Typography-Dvuik0pJ.js";import"./useMenu-DXA38xVt.js";import"./index-BBaxa0Qn.js";import"./InformationSquare-BIrp2N6S.js";import"./Paperclip-77VzahwE.js";import"./Eye-cMaAT_DO.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DJLRFmM-.js";import"./useDropdownMenuController-D6SwXekY.js";import"./Dropdown-CCIsf4ws.js";import"./Plus-DPgCKFUP.js";import"./ButtonGroup-2XmunmNq.js";import"./ButtonGroupDivider-yFjiJINn.js";import"./ChevronUpDown-BVSifUrF.js";import"./ToolbarMenu-BrBQHBGp.js";import"./ToolbarSearch-CEdhKPLF.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const ot=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,ot as __namedExportsOrder,it as default};
