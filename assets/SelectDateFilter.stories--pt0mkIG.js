var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a5 as t}from"./iframe-BfD7syly.js";import{S as m}from"./SelectDateFilter-5qvH8SVM.js";import{t as s}from"./example.data-CwXh_1JA.js";import{a as l}from"./example.hooks-CEg9mrJa.js";import{T as p,a as c}from"./Toolbar-u7iR49dR.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-Dz9ADW9D.js";import"./MenuListItem-DkdyT6s3.js";import"./MenuItem-yk1xWr1C.js";import"./ItemMedia-DHigLupS.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./Checkmark-DS2-cyTF.js";import"./ItemLabel-C4QOzGgW.js";import"./Heading-M_gD0nhY.js";import"./useHighlightedText-BiU1Xaf8.js";import"./ItemControls-CvMksNjC.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./ChevronRight-DeJMnotn.js";import"./ArrowUndo-C7PukArl.js";import"./MenuListDivider-VNatTLoD.js";import"./Fieldset-B79kwUcw.js";import"./Field-DGIr44pk.js";import"./Label-KYDdO5cS.js";import"./Input-BppbGARe.js";import"./Datepicker-CNd88sPL.js";import"./SearchField-CWWZLGm9.js";import"./MagnifyingGlass-ClZGDDqe.js";import"./MenuListHeading-BsDHC7at.js";import"./FieldBase-fk0uyKjd.js";import"./Typography-EJ3Vxj-4.js";import"./useMenu-o9JsDoVb.js";import"./InformationSquare-CmhaWIAD.js";import"./Paperclip-CM85Cu_i.js";import"./Eye-BBRH0E9c.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-COAJxrWW.js";import"./useDropdownMenuController-rxwan3om.js";import"./Dropdown-BRxpGVP6.js";import"./Plus-Oie_r0eR.js";import"./ButtonGroup-DFsWLoyK.js";import"./ButtonGroupDivider-CfD_ruqK.js";import"./ChevronUpDown-CjLJ_1zh.js";import"./ToolbarMenu-JEVAjleV.js";import"./ToolbarSearch-Carzb1Pu.js";const mt={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),lt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};export{a as CustomName,o as Datepicker,n as RemovableDatepicker,lt as __namedExportsOrder,mt as default};
