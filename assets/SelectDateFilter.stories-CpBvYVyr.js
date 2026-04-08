import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,t as n}from"./Toolbar-CmziBAS7.js";import{t as r}from"./SelectDateFilter-Dq5kCJRs.js";import{a as i,n as a}from"./example.hooks-CGrxcgX5.js";var o=e(),s={title:`Toolbar/SelectDateFilter`,component:r,parameters:{},args:{}},c=()=>{let e=a({filters:[{...i,as:r}],defaultFilterState:{}});return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(n,{children:(0,o.jsx)(t,{...e})}),(0,o.jsx)(`hr`,{}),JSON.stringify(e.filterState)]})},l=()=>{let e=a({filters:[{...i,as:r,removable:!0}],defaultFilterState:{}});return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(n,{children:(0,o.jsx)(t,{...e})}),(0,o.jsx)(`hr`,{}),JSON.stringify(e.filterState)]})},u=()=>{let e=i.items.map(e=>({...e,name:`date`})),s=a({filters:[{...i,items:e,name:`date`,as:r}],defaultFilterState:{}});return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(n,{children:(0,o.jsx)(t,{...s})}),(0,o.jsx)(`hr`,{}),JSON.stringify(s.filterState)]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};var d=[`Datepicker`,`RemovableDatepicker`,`CustomName`];export{u as CustomName,c as Datepicker,l as RemovableDatepicker,d as __namedExportsOrder,s as default};