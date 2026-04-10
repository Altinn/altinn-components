import{j as t}from"./iframe-CfpleAaJ.js";import{S as a}from"./SelectDateFilter-CkY8dxBl.js";import{u as m,t as n}from"./example.hooks-Pa8rvmbq.js";import{T as s,a as l}from"./Toolbar-CeA2H0SG.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DqxrSKWI.js";import"./useId-CRfl8v3D.js";import"./Datepicker-BYYQd0rd.js";import"./index-C-ZlSrx2.js";import"./ChevronRight-F6vNJ-SN.js";import"./Button-DKJP6EaO.js";import"./button-bjClnooE.js";import"./use-merge-refs-0CqQhLRb.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-Brl922Zx.js";import"./MenuItem-BvkuTBxq.js";import"./ItemMedia-BjhAIHdo.js";import"./XMark-Mr05NtnF.js";import"./Avatar-BBkC-qEC.js";import"./Skeleton-mkQz_xZ6.js";import"./AvatarGroup-vSwCjNL5.js";import"./Icon-DFklvQ48.js";import"./Checkmark-CwtLsQnH.js";import"./Heading-SalYmhoh.js";import"./useHighlightedText-Cf92T70c.js";import"./Badge-BZbseZdr.js";import"./MenuListHeading-BxaazMkW.js";import"./Fieldset-Bi9idR3x.js";import"./index-CyGYnAy8.js";import"./Label-BNnaJGt0.js";import"./Input-B030prVc.js";import"./input-DZJGjPia.js";import"./SearchField-DaxLmgu-.js";import"./MagnifyingGlass-BxOwsnNq.js";import"./FieldBase-CjTWVBCf.js";import"./Typography-KZreLO9a.js";import"./useMenu-DmjfRwxC.js";import"./InformationSquare-H_9f907d.js";import"./Paperclip-j9WxE5UR.js";import"./Eye-xw8vy0ud.js";import"./MenuHamburger-CyesAGLw.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-D3ykFK6E.js";import"./Plus-Bt3Z18iu.js";import"./Dropdown-C9n-MsJ3.js";import"./ChevronUpDown-Cbzggt2f.js";import"./ButtonGroup-BCc6e8WW.js";import"./ButtonGroupDivider-C4vvU_mH.js";import"./Tooltip-Da4m4fbj.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DWCsc7RF.js";import"./ToolbarSearch-08sXOvBH.js";const ct={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const dt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,dt as __namedExportsOrder,ct as default};
