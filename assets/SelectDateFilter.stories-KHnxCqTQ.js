import{j as t}from"./iframe-qDHSBZ_X.js";import{S as a}from"./SelectDateFilter-CzBFoFex.js";import{u as m,t as n}from"./example.hooks-CXadrKLq.js";import{T as s,a as l}from"./Toolbar-iWE8b0_i.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CMxvcs3T.js";import"./useId-DLE_nI5l.js";import"./Datepicker-CceKwhBG.js";import"./index-DTh2bawh.js";import"./ChevronRight-Dusr5JiS.js";import"./Button-DJMfIG2l.js";import"./button-CfQ7EAt1.js";import"./use-merge-refs-BMfrfQuo.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-BPMBfOBa.js";import"./MenuItem-CYIZHSHo.js";import"./ItemMedia-p3tZByS2.js";import"./XMark-D8iHP3Cp.js";import"./Avatar-BNcU10On.js";import"./Skeleton-CJ3n2_6V.js";import"./AvatarGroup-CDcb8Qnp.js";import"./Icon-BDVkMuHy.js";import"./Checkmark-BOxDKZpX.js";import"./Heading-D2BacHeJ.js";import"./useHighlightedText-D75SWcvd.js";import"./ItemControls-Bd_Ry2Op.js";import"./Badge-CmtcZ1do.js";import"./MenuListHeading-CFSESgmr.js";import"./Fieldset-fceRu4C4.js";import"./index-C32uHHVZ.js";import"./Label-UpgatIiv.js";import"./Input-ChlNPyEa.js";import"./input-CNv7eEBO.js";import"./SearchField-owOVnt34.js";import"./MagnifyingGlass-52kli1F6.js";import"./FieldBase-36tTBvzs.js";import"./Typography-DhQz7tKb.js";import"./useMenu-5iviLK-9.js";import"./InformationSquare-ClYcp41K.js";import"./Paperclip-C3GpGrWg.js";import"./Eye-krQJbsJx.js";import"./MenuHamburger-DzXQ83g6.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-CkPbLtTM.js";import"./Plus-BXcVwr4C.js";import"./Dropdown-zJkG990V.js";import"./ChevronUpDown-BxTSf755.js";import"./ButtonGroup-D3OFsAa4.js";import"./ButtonGroupDivider-DDSk5KKM.js";import"./Tooltip-gFU6qfTf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-C-L-fQJX.js";import"./ToolbarSearch-C00ib8cC.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
