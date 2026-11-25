var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-BYGPhf7N.js";import{S as m}from"./SelectDateFilter-CmxrY5Yu.js";import{t as s}from"./example.data-C4dcLo6q.js";import{a as l}from"./example.hooks-Cq3qbj0O.js";import{T as p,a as c}from"./Toolbar-D2rcCLvV.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-Er-de1vm.js";import"./MenuItem-BciZRIkx.js";import"./CheckboxUncheckedIcon-Bc2cW9fu.js";import"./RadioUncheckedIcon-xfigfStp.js";import"./ItemMedia-ApKMdvQL.js";import"./Avatar-B_FLCNK9.js";import"./AvatarGroup-BKwaFY6K.js";import"./ItemLabel-KBN1Srj3.js";import"./Heading-C5-vf6se.js";import"./useHighlightedText-B7c7eBDx.js";import"./ItemControls-1sBh4pPD.js";import"./Badge-qi425Zbf.js";import"./Tooltip-egmjN7rU.js";import"./ChevronRight-BckCGbec.js";import"./ArrowUndo-BhG5BbM5.js";import"./MenuListDivider-C-25gy3r.js";import"./Fieldset-e8AZdZvX.js";import"./Field-CZH9Low_.js";import"./Label-DXziafiV.js";import"./Input-C9cQp4bZ.js";import"./SearchField-BySPj-oD.js";import"./MagnifyingGlass-u7KFDhSG.js";import"./FieldBase-eqne-WwB.js";import"./Typography-BHNcIxxH.js";import"./useMenu-r2OQI4uO.js";import"./InformationSquare-Cx25xyTl.js";import"./Paperclip-Bhm0B4MW.js";import"./Eye-BEO-r5xc.js";import"./MenuHamburger-BBEPorEN.js";import"./useDropdownMenuController-C82Fl8tQ.js";import"./Dropdown-0Y8H4iVy.js";import"./Plus-ChNYXBRv.js";import"./ButtonGroup-c8ZaNYEQ.js";import"./ButtonGroupDivider-DnlyYy1d.js";import"./ChevronUpDown-CsEkO8Vj.js";import"./ToolbarMenu-D39-x6U3.js";import"./ToolbarSearch-DEixWMHC.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
