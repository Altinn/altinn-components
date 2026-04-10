import{j as t}from"./iframe-CEV_bE_y.js";import{S as a}from"./SelectDateFilter-C6FQ9RDw.js";import{u as m,t as n}from"./example.hooks-C_hbB-rV.js";import{T as s,a as l}from"./Toolbar-ptKb3HCx.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DgeaLVju.js";import"./useId-BHfJgDBc.js";import"./Datepicker-DToF6dNa.js";import"./index-CGpVDQnA.js";import"./ChevronRight-Dck0Zh1j.js";import"./Button-Camg-mBZ.js";import"./button-B-6jfb5R.js";import"./use-merge-refs-Dqc3iuE1.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-DvZVWiZY.js";import"./MenuItem-D6Egs8SC.js";import"./ItemMedia-DIGN_0r9.js";import"./XMark-ByuttVGc.js";import"./Avatar-Cf5aI0ZG.js";import"./Skeleton-cNOPtI7P.js";import"./AvatarGroup-DHx4XjXe.js";import"./Icon-BwPDmLy2.js";import"./Checkmark-D-WBqViW.js";import"./Heading-CjHEKkoD.js";import"./useHighlightedText-DdOlAfmT.js";import"./ItemControls-Dsxd0fj6.js";import"./Badge-BVMw9Rw0.js";import"./MenuListHeading-BxT-phiC.js";import"./Fieldset-CfS3hy3F.js";import"./index-Cr9j_S5O.js";import"./Label-Cb-tqHHM.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./SearchField-C9XAkfHX.js";import"./MagnifyingGlass-D6I6hP_d.js";import"./FieldBase-D397wWlI.js";import"./Typography-BMVOyH8m.js";import"./useMenu-EIG5MfCS.js";import"./InformationSquare-C-romZo4.js";import"./Paperclip-CeF6R1tA.js";import"./Eye-CKo_iGje.js";import"./MenuHamburger-DBcPb8fU.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-COGXRvNW.js";import"./Plus-D1UdPMNR.js";import"./Dropdown--G_NTa0P.js";import"./ChevronUpDown-H9bThSVZ.js";import"./ButtonGroup-D8NAEtXB.js";import"./ButtonGroupDivider-BOlJgfYF.js";import"./Tooltip-CRnr2OHK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-BUbt3wjZ.js";import"./ToolbarSearch-lvv6sAqk.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const Ft=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,Ft as __namedExportsOrder,dt as default};
