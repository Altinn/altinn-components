var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-DvHKorxQ.js";import{S as m}from"./SelectDateFilter-Cn8u5Kwz.js";import{t as s}from"./example.data-Dif2Vevi.js";import{a as l}from"./example.hooks-FVB0G3Aj.js";import{T as p,a as c}from"./Toolbar-xFDEvkSb.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-sxF_Fdo2.js";import"./MenuItem-BKT_WeeP.js";import"./CheckboxUncheckedIcon-DfhKN-kl.js";import"./RadioUncheckedIcon-02hVvrUJ.js";import"./ItemMedia-D3TRsre4.js";import"./Avatar-Cz88DWwK.js";import"./AvatarGroup-DG05vr_h.js";import"./ItemLabel-BPqR0X1V.js";import"./Heading-Cl1YAvvB.js";import"./useHighlightedText-BTXbLxcU.js";import"./ItemControls--z7ByJD8.js";import"./Badge-DzOSp-VL.js";import"./Tooltip-B5VcyW21.js";import"./ChevronRight-BUHnh-Yw.js";import"./ArrowUndo-q1AmrM8c.js";import"./MenuListDivider-CVAdbPBV.js";import"./Fieldset-BG064z_d.js";import"./Field-DZglScdH.js";import"./Label-bDy8LqNB.js";import"./Input-Bgd0BScM.js";import"./SearchField-BU96PyeS.js";import"./MagnifyingGlass-BXEQkXVn.js";import"./FieldBase-BZwhXyPC.js";import"./Typography-CvxYC9sf.js";import"./useMenu-DmIIMIa0.js";import"./InformationSquare-dQI1I0JD.js";import"./Paperclip-Bc6lA6oS.js";import"./Eye-BAoCH8Q-.js";import"./MenuHamburger-DBDIkqls.js";import"./useDropdownMenuController-IkMO0B8E.js";import"./Dropdown-CZm18rgm.js";import"./Plus-BlCIA3TM.js";import"./ButtonGroup-HA7R6Ya1.js";import"./ButtonGroupDivider-CnFbpfz5.js";import"./ChevronUpDown-BbMnjmgS.js";import"./ToolbarMenu-EKz1rDZF.js";import"./ToolbarSearch-CcewJSVV.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
