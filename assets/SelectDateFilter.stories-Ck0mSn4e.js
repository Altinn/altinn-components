import{a7 as t}from"./iframe-5uZaoZDv.js";import{S as a}from"./SelectDateFilter-DUI0D9h-.js";import{t as n}from"./example.data-e3pk5a6N.js";import{a as s}from"./example.hooks-Cwh02gyB.js";import{T as m,a as l}from"./Toolbar-D8fcB4sB.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CMT8wJwe.js";import"./MenuListItem-BbZ2xvN5.js";import"./MenuItem-CHpnlanL.js";import"./ItemMedia-CTN7-8P7.js";import"./Avatar-YMRiiHHf.js";import"./AvatarGroup-BGXl6ZDr.js";import"./Checkmark-j8exHh37.js";import"./ItemLabel-DdCL01OT.js";import"./Heading-B0bYr3fv.js";import"./useHighlightedText-SumDRzv0.js";import"./ItemControls-DqscoWhH.js";import"./Badge-CJMAUuOr.js";import"./Tooltip-BCm3h_Ql.js";import"./ChevronRight-Bm7ufgRx.js";import"./ArrowUndo-DYsQqSN_.js";import"./MenuListDivider-BVxqYtLY.js";import"./Fieldset-BWKj9imq.js";import"./Field-CjiYvts-.js";import"./Label-DkLrq_fL.js";import"./Input-C9_VoQpt.js";import"./Datepicker-B3KlujDu.js";import"./SearchField-BHTg7ejP.js";import"./MagnifyingGlass-BhHVps8f.js";import"./FieldBase-D-wimfjV.js";import"./Typography-DIry-l26.js";import"./useMenu-ihj2gTIo.js";import"./MenuListHeading-gwVAdWe6.js";import"./InformationSquare-DVWbDPiI.js";import"./Paperclip-Be3E3zxm.js";import"./Eye-f94ujOp8.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Dp4fYPBF.js";import"./useDropdownMenuController-CpFfsyiJ.js";import"./Dropdown-CDWM3_3M.js";import"./Plus-Niq-gKxO.js";import"./ButtonGroup-BERBX_Ni.js";import"./ButtonGroupDivider-yV4mnRPl.js";import"./ChevronUpDown-BXCeQqi8.js";import"./ToolbarMenu-Bf5nbfad.js";import"./ToolbarSearch-B44hYZzR.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
