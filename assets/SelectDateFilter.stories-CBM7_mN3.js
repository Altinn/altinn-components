var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a7 as t}from"./iframe-Ck42qOx1.js";import{S as m}from"./SelectDateFilter-DCxSOFSP.js";import{t as s}from"./example.data-CAP98Os1.js";import{a as l}from"./example.hooks-BLSC_F-V.js";import{T as p,a as c}from"./Toolbar-DlQHJZIq.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-BKpUJg5t.js";import"./MenuListItem-BIqpRdYe.js";import"./MenuItem-BT6sfN7d.js";import"./ItemMedia-Br8-csYo.js";import"./Avatar-BGxIkqoE.js";import"./AvatarGroup-47nQolqa.js";import"./Checkmark-Di95vAnU.js";import"./ItemLabel-BKKQ8yMh.js";import"./Heading-CWc2O27X.js";import"./useHighlightedText-BgClQYDl.js";import"./ItemControls-3hwzA3sg.js";import"./Badge-Cjd2AmoZ.js";import"./Tooltip-CTYi4ppJ.js";import"./ChevronRight-DWZnEevf.js";import"./ArrowUndo-BORXbKBL.js";import"./MenuListDivider-CthpKcql.js";import"./Fieldset-_Y7gbmZ4.js";import"./Field-DflaqZhu.js";import"./Label-BQ9ZPq2G.js";import"./Input-DGLuCKOz.js";import"./Datepicker-CuoZTTgB.js";import"./SearchField-B8KiDBUc.js";import"./MagnifyingGlass-CxCtlPHN.js";import"./MenuListHeading-C_C2TzXD.js";import"./FieldBase-ly-5mtcw.js";import"./Typography-nObbjg0R.js";import"./useMenu-BBAeNj9K.js";import"./InformationSquare-CGuPpOub.js";import"./Paperclip-ChaYZWb4.js";import"./Eye-BIcFQGrG.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CF5_JoaO.js";import"./useDropdownMenuController-BwkDFTz9.js";import"./Dropdown-Dfag5WSr.js";import"./Plus-1EeeSaLT.js";import"./ButtonGroup-ChpwNZu9.js";import"./ButtonGroupDivider-CJV6LKqZ.js";import"./ChevronUpDown-DmZkFijA.js";import"./ToolbarMenu-CQihSIrV.js";import"./ToolbarSearch-DTrO7UQI.js";const mt={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName");o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
