var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a5 as t}from"./iframe-k-5ppgch.js";import{S as s}from"./SelectDateFilter-BNWd7Mgb.js";import{t as m}from"./example.data-DMXeUyZs.js";import{a as l}from"./example.hooks-D4bTYdqz.js";import{T as p,a as c}from"./Toolbar-CKwW_XWH.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-DHOu9Aw4.js";import"./MenuListItem-NGcm-BoJ.js";import"./MenuItem-BXSsa0TG.js";import"./CheckboxUncheckedIcon-427e4rUe.js";import"./RadioUncheckedIcon-DLopOulv.js";import"./ItemMedia-DxNh8EKr.js";import"./Avatar-Bkj70cv6.js";import"./AvatarGroup-CF7XuR93.js";import"./ItemLabel-D5iTgQt_.js";import"./Heading-DFDwpHPM.js";import"./useHighlightedText-DchtrGpj.js";import"./ItemControls-ByMwyA6J.js";import"./Badge-GfdRI08Y.js";import"./Tooltip-tkuEOqTN.js";import"./ChevronRight-CDNE03o8.js";import"./ArrowUndo-B3MWpO9H.js";import"./MenuListDivider-BXcHHiOJ.js";import"./Fieldset-XGcIUQA1.js";import"./Field-BTpPk25O.js";import"./Label-D-n8lPTZ.js";import"./Input-fDrubqKv.js";import"./Datepicker-CmPQGXEL.js";import"./SearchField-BRPq9oj8.js";import"./MagnifyingGlass-B6a_F1T2.js";import"./MenuListHeading-DOGIQowl.js";import"./FieldBase-CXS3Sevu.js";import"./Typography-CYRWqnkB.js";import"./useMenu-DQYhP48A.js";import"./InformationSquare-C8JQXppp.js";import"./Paperclip-B3DjPXiP.js";import"./Eye-BYYh3WW8.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Bo7vD2QW.js";import"./useDropdownMenuController-OiRVKnjj.js";import"./Dropdown-CPtynmaA.js";import"./Plus-BfzF3o2K.js";import"./ButtonGroup-B2jA2Tqh.js";import"./ButtonGroupDivider-DLj-EhPK.js";import"./ChevronUpDown--im5d_9E.js";import"./ToolbarMenu-DzTNbp1B.js";import"./ToolbarSearch-B8EDoxRH.js";const lt={title:"Toolbar/SelectDateFilter",component:s,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...m,as:s}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...m,as:s,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=m.items.map(d=>({...d,name:"date"})),e=l({filters:[{...m,items:r,name:"date",as:s}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),pt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};export{a as CustomName,o as Datepicker,n as RemovableDatepicker,pt as __namedExportsOrder,lt as default};
