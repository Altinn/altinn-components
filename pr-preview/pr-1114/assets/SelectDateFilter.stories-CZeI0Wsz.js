import{j as t}from"./iframe-BmFIVBn_.js";import{S as a}from"./SelectDateFilter-DDQYl4fK.js";import{u as m,t as n}from"./example.hooks-CpX1juYF.js";import{T as s,a as l}from"./Toolbar-CRRgGZLn.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Bbp1RnaE.js";import"./useId-ClegSKnE.js";import"./Datepicker-4pE9-gbw.js";import"./index-3BUTcXKg.js";import"./ChevronRight-DcRWf4tm.js";import"./Button-qEoy6ct0.js";import"./button-DKdxIprw.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-INuSyNfv.js";import"./MenuItem-BvPBRlig.js";import"./ItemMedia-CCYQNyqL.js";import"./XMark-DPeWQ31a.js";import"./Avatar-Zvdkk7EN.js";import"./Skeleton-DRn19mA6.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Icon-zZDqlwOf.js";import"./Checkmark-DWNi5SDl.js";import"./Heading-D2Zb4ZMb.js";import"./useHighlightedText-Dq-XqtYP.js";import"./ItemControls-B2xjI1HN.js";import"./Badge-DoiHwmxA.js";import"./MenuListHeading-D4ZyNWhk.js";import"./Fieldset-K6715TbB.js";import"./index-32OlLxJ9.js";import"./Label-D7uBca_a.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./SearchField-BQQnPaDG.js";import"./MagnifyingGlass-B0C_9vni.js";import"./FieldBase-Cx6yKeh2.js";import"./Typography-CMiy0gec.js";import"./useMenu-BRAeQdeQ.js";import"./InformationSquare-Ct2wAfNF.js";import"./Paperclip-CwWA-SCq.js";import"./Eye-Lits53gm.js";import"./MenuHamburger-DON02Xtn.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-D8IQ0jaC.js";import"./Plus-DVwzyLY6.js";import"./Dropdown-OBdyljPV.js";import"./ChevronUpDown-iLgQoNlh.js";import"./ButtonGroup-DOYzKGQP.js";import"./ButtonGroupDivider-J3W78A7-.js";import"./Tooltip-B1Uxs2J8.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-BPgqnzLX.js";import"./ToolbarSearch-CFeP4OJs.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
