var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a7 as t}from"./iframe-DliZ2j7V.js";import{S as m}from"./SelectDateFilter-Cx5kfD9m.js";import{t as s}from"./example.data-0bf3bMNf.js";import{a as l}from"./example.hooks-BYzTrnvX.js";import{T as p,a as c}from"./Toolbar-C6MKFKcQ.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-BVjgSMIG.js";import"./MenuListItem-eO1CqTCm.js";import"./MenuItem-BWlafNQ2.js";import"./ItemMedia-DsNtfucp.js";import"./Avatar-Bb13CEJH.js";import"./AvatarGroup-BP8b6NDq.js";import"./Checkmark-D4_xXQHC.js";import"./ItemLabel-ChEAFnfF.js";import"./Heading-CtKubyco.js";import"./useHighlightedText-D1lssxtb.js";import"./ItemControls-rcas_vti.js";import"./Badge-CXvbGuU6.js";import"./Tooltip-rTlSPEDx.js";import"./ChevronRight-_BaSemP0.js";import"./ArrowUndo-wAj8mUHm.js";import"./MenuListDivider-kl64fblZ.js";import"./Fieldset-CI0R91Ct.js";import"./Field-DYOclivh.js";import"./Label-F6glHlTT.js";import"./Input-BcFkd5TI.js";import"./Datepicker-CMFpUvrJ.js";import"./SearchField-CHTtqi8q.js";import"./MagnifyingGlass-BuxQzsSI.js";import"./FieldBase-CUazmIBl.js";import"./Typography-Oc42wyxk.js";import"./useMenu-Bhv2948N.js";import"./MenuListHeading-DGDFRB8j.js";import"./InformationSquare-Bli9QzR2.js";import"./Paperclip-Dmp4shMN.js";import"./Eye-B1obPNLR.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BOtrt7de.js";import"./useDropdownMenuController-X1T9D1nQ.js";import"./Dropdown-BbS2MxJj.js";import"./Plus-FziPzHrq.js";import"./ButtonGroup-CWxuOyOz.js";import"./ButtonGroupDivider-BLKYTiBF.js";import"./ChevronUpDown-DyAusyIW.js";import"./ToolbarMenu-BU5BBvEN.js";import"./ToolbarSearch-BnZAKpGD.js";const mt={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName");o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
