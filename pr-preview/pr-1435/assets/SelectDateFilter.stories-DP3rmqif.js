var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a7 as t}from"./iframe-uBWg0zsp.js";import{S as m}from"./SelectDateFilter-QuW-cPh8.js";import{t as s}from"./example.data-B2n8ZNKp.js";import{a as l}from"./example.hooks-B2IXkvGt.js";import{T as p,a as c}from"./Toolbar-B2g5Tm7E.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-Dr6CVdfC.js";import"./MenuListItem-CF8uHASG.js";import"./MenuItem-SLuK_1Or.js";import"./ItemMedia-DYHGe3r3.js";import"./Avatar-B2zjqVbH.js";import"./AvatarGroup-X4pMTDtc.js";import"./Checkmark-BMATBI43.js";import"./ItemLabel-BpKks5h0.js";import"./Heading-B2wyz-tz.js";import"./useHighlightedText-SyZl2q2q.js";import"./ItemControls-D7ku9ps1.js";import"./Badge-DNaQuN8i.js";import"./Tooltip-wSNkhPxH.js";import"./ChevronRight-Ci7fQup2.js";import"./ArrowUndo--sIB0AY5.js";import"./MenuListDivider-Dqpo6I2q.js";import"./Fieldset-CgObqsoW.js";import"./Field-CRhxlWe8.js";import"./Label-BasS1jKP.js";import"./Input-BX-kD412.js";import"./Datepicker-7fY5FeSE.js";import"./SearchField-CiFTLXk1.js";import"./MagnifyingGlass-BtelB3DZ.js";import"./FieldBase-Bze69qIO.js";import"./Typography-nYxE8-3g.js";import"./useMenu-CXJ-cLkO.js";import"./MenuListHeading-BKTLR-s3.js";import"./InformationSquare-D-wVMUGu.js";import"./Paperclip-Dmdj1641.js";import"./Eye-DgHVmCA9.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-mpc9gk08.js";import"./useDropdownMenuController-Bo6Cy3yx.js";import"./Dropdown-xncsPjss.js";import"./Plus-BMtrBUYo.js";import"./ButtonGroup-C6ZuBQRD.js";import"./ButtonGroupDivider-CGBPGrPK.js";import"./ChevronUpDown-bcIda0WI.js";import"./ToolbarMenu-CKPkRkYr.js";import"./ToolbarSearch-C5ps8JRx.js";const mt={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName");o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
