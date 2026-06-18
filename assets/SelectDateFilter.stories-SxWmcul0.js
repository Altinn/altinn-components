import{a7 as t}from"./iframe-DK-3qaH3.js";import{S as a}from"./SelectDateFilter-kJ8vZ3UP.js";import{t as n}from"./example.data-C69-gr9C.js";import{a as s}from"./example.hooks-8WCNn7Or.js";import{T as m,a as l}from"./Toolbar-CUmZXEuY.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-C88ynxb3.js";import"./MenuListItem-CwhP6zUQ.js";import"./MenuItem-CrLVrhNO.js";import"./ItemMedia-SL7nkuf2.js";import"./Avatar-CnYovcQa.js";import"./AvatarGroup-I06FKcbI.js";import"./Checkmark-BzKF2oQV.js";import"./ItemLabel-DjAxhpTi.js";import"./Heading-DNUoGPcg.js";import"./useHighlightedText-aZdhyhaW.js";import"./ItemControls-CxO-bUey.js";import"./Badge-D651myBu.js";import"./Tooltip-D_qaPfeL.js";import"./ChevronRight-DR_DMSPj.js";import"./ArrowUndo-CrYWH9zi.js";import"./MenuListDivider-gWW_DkP0.js";import"./Fieldset-8OHo4L89.js";import"./Field-DU2lFA0F.js";import"./Label-BEcshVOu.js";import"./Input-DJCzCnsD.js";import"./Datepicker-CRBr1Jls.js";import"./SearchField--OTsh4KX.js";import"./MagnifyingGlass-DGoMhHAJ.js";import"./FieldBase-CZ_e8plx.js";import"./Typography-B48kpFr9.js";import"./useMenu-Bn-ufHFt.js";import"./MenuListHeading-CObV-6CL.js";import"./InformationSquare-MLoftbJC.js";import"./Paperclip-C0W4M5q3.js";import"./Eye-BK_dEJ2x.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Cf_ch3tL.js";import"./useDropdownMenuController-CvLgPp7R.js";import"./Dropdown-PqayCWXB.js";import"./Plus-CUtJiv66.js";import"./ButtonGroup-DGe-ZwJP.js";import"./ButtonGroupDivider-DIDGM_5s.js";import"./ChevronUpDown-BbwakfRI.js";import"./ToolbarMenu-o6X6_Fdo.js";import"./ToolbarSearch-DOA0w3r_.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
