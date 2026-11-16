var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-DmXJhoHi.js";import{S as m}from"./SelectDateFilter-7UEkxueB.js";import{t as s}from"./example.data-UpEj8d2L.js";import{a as l}from"./example.hooks-Ct6aYf_W.js";import{T as p,a as c}from"./Toolbar-rxPbCSrn.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-fE8Z_sJw.js";import"./MenuItem-C_9NXDrO.js";import"./CheckboxUncheckedIcon-THpi2fsF.js";import"./RadioUncheckedIcon-HRy4h_Iy.js";import"./ItemMedia-BhUDoeQn.js";import"./Avatar-Ct1BUX51.js";import"./AvatarGroup-jJ6DuwRZ.js";import"./ItemLabel-D6letihH.js";import"./Heading-DMD9BytY.js";import"./useHighlightedText-PrDe8r-L.js";import"./ItemControls-CqWny7dI.js";import"./Badge-BPEkC0lf.js";import"./Tooltip-DWnRPb8d.js";import"./ChevronRight-BBhULSEW.js";import"./ArrowUndo-B2pBTWYN.js";import"./MenuListDivider-DKZNTDIg.js";import"./Fieldset-BJCIX1DR.js";import"./Field-x0yE1z9d.js";import"./Label-Dmk4_kaT.js";import"./Input-BP2xOaTX.js";import"./SearchField-CmQy5YNq.js";import"./MagnifyingGlass-CDTvYECp.js";import"./FieldBase-BmJ_0UFe.js";import"./Typography-TuByLUlM.js";import"./useMenu-CAAj79LJ.js";import"./InformationSquare-Cf67cLsl.js";import"./Paperclip-BPNfytGj.js";import"./Eye-BrktvXse.js";import"./MenuHamburger-yvSkcOAR.js";import"./useDropdownMenuController-AOASv4wb.js";import"./Dropdown-CroQAroQ.js";import"./Plus-B95oMHgF.js";import"./ButtonGroup-BIAjr8pe.js";import"./ButtonGroupDivider-fZuIdyGO.js";import"./ChevronUpDown-CrXGIYV3.js";import"./ToolbarMenu-D0PhR2HF.js";import"./ToolbarSearch-BWP-lc8H.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};export{a as CustomName,o as Datepicker,n as RemovableDatepicker,nt as __namedExportsOrder,ot as default};
