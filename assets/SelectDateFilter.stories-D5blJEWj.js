import{a7 as t}from"./iframe-RnExGCnN.js";import{S as a}from"./SelectDateFilter-s_SjyRdL.js";import{t as n}from"./example.data-CfdCVLcr.js";import{a as s}from"./example.hooks-DJXibcx6.js";import{T as m,a as l}from"./Toolbar-DT0kqj_Z.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-Cky9-Efn.js";import"./MenuListItem-Dqpn2neg.js";import"./MenuItem-BDAEKbBK.js";import"./ItemMedia-D368mX5y.js";import"./Avatar-BUNCqCk4.js";import"./AvatarGroup-fOMA9ogc.js";import"./Checkmark-DIw4FkIE.js";import"./ItemLabel-B7AwZTmi.js";import"./Heading-Ds8TW_p4.js";import"./useHighlightedText-wXuVfUlk.js";import"./ItemControls-g4j5xbWR.js";import"./Badge-DH0HalVo.js";import"./Tooltip-CrL6AlY-.js";import"./ChevronRight-CN6Km5wu.js";import"./ArrowUndo-DTXf9uKE.js";import"./MenuListDivider-CHRqqpSn.js";import"./Fieldset-TS2HgrjI.js";import"./Field-CSEfWH1k.js";import"./Label-DfG8fS43.js";import"./Input--YjiHlpM.js";import"./Datepicker-CdNfAw_i.js";import"./SearchField-vIwRNxpu.js";import"./MagnifyingGlass-t8Md0lZx.js";import"./FieldBase-DiJ4iC98.js";import"./Typography-C0LI4Nld.js";import"./useMenu-ZXSzWhmh.js";import"./MenuListHeading-Cn6qeGor.js";import"./InformationSquare-CRikKN32.js";import"./Paperclip-D3-3B1Jl.js";import"./Eye-Da5HpfRE.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CljCR6Je.js";import"./useDropdownMenuController-BoOePyNF.js";import"./Dropdown-B88VU_C4.js";import"./Plus-BRt8-Ub-.js";import"./ButtonGroup-CxEAmlK5.js";import"./ButtonGroupDivider-DH04zCn7.js";import"./ChevronUpDown-D19eKQQj.js";import"./ToolbarMenu-Bxnz5zkf.js";import"./ToolbarSearch-ummq6BtR.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
