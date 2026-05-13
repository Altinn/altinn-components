import{j as t}from"./iframe-CpLxKnDM.js";import{S as a}from"./SelectDateFilter-D47Tx5EN.js";import{u as m,t as n}from"./example.hooks-Bb6Nq6t-.js";import{T as s,a as l}from"./Toolbar-CK9c0ysy.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-kJzW9ldV.js";import"./useId-Dk2QO8VQ.js";import"./Datepicker-ob1TF1mK.js";import"./index-BZrYlxzi.js";import"./ChevronRight-16z1B_cb.js";import"./Button-DKJNFoHr.js";import"./button-DZ9B7a50.js";import"./use-merge-refs-g_590vId.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-D6BVyzxR.js";import"./MenuItem-Da2X9VsT.js";import"./ItemMedia-DT3PutY3.js";import"./XMark-BkFwP2BW.js";import"./Avatar-Bh6xe4Ys.js";import"./Skeleton-B2kLb9z1.js";import"./AvatarGroup-DwxSIihj.js";import"./Icon-xH6stteC.js";import"./Checkmark-DpqhZdZ_.js";import"./Heading-Dmt1Hp0l.js";import"./useHighlightedText-De1FlINf.js";import"./ItemControls-SBEzslTa.js";import"./Badge-BprayW1R.js";import"./Tooltip-BKj7GKZF.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-CtFt3nNd.js";import"./Fieldset-B3qzU0ZI.js";import"./index-DjVenMls.js";import"./Label-C0kuzyFW.js";import"./Input-Cnu7Dubv.js";import"./input-CwcuNrJh.js";import"./SearchField-DF0MNejq.js";import"./MagnifyingGlass-DhzKRFoX.js";import"./FieldBase-zLQdXhmX.js";import"./Typography-jv3_dxzw.js";import"./useMenu-CCk7NyHy.js";import"./index-B76D54i4.js";import"./InformationSquare-xpUpd4lr.js";import"./Paperclip-DO71C6ra.js";import"./Eye-CIuKAz7x.js";import"./MenuHamburger-BOYVbGjH.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-0qeRnWl5.js";import"./Plus-7ibbtH5p.js";import"./Dropdown-gyW_V0cZ.js";import"./ChevronUpDown-BAZWnllU.js";import"./ButtonGroup-MGSBAJb-.js";import"./ButtonGroupDivider-BLjzTaaF.js";import"./ToolbarMenu-Br84Gbgk.js";import"./ToolbarSearch-DkBEzL5A.js";const Ft={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const ut=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,ut as __namedExportsOrder,Ft as default};
