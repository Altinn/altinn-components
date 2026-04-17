import{j as e,r as f}from"./iframe-C30XMp4u.js";import{u as d,i as p,a as L,b as q}from"./example.hooks-d98w33kK.js";import{T as Q}from"./ToolbarSearch-wO_rsMns.js";import{T as i,a as v}from"./Toolbar-qbT0YoZ4.js";import{T as w}from"./ToolbarMenu-C0WyX5iw.js";import{S as W}from"./Switch-Bo_I4-2B.js";import{Q as S}from"./QueryLabel-DA3OdOzv.js";import"./preload-helper-PPVm8Dsz.js";import"./InformationSquare-Cu6RA9m9.js";import"./useId-k4Xjw1TB.js";import"./Paperclip-BzWyAbZP.js";import"./Eye-CAhWVSdJ.js";import"./MenuHamburger-C7Jlfysl.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./SearchField-GqHOGaRS.js";import"./index-Dfjgmy9H.js";import"./MagnifyingGlass-BcLoywmE.js";import"./XMark-ZCF0kQw6.js";import"./FieldBase-Cg7qaDyY.js";import"./Typography-C7Aiwmst.js";import"./useHighlightedText-BcdufPkD.js";import"./Skeleton-DYu3bsVd.js";import"./Label-CZ9Sm67x.js";import"./index-MPuYdx8K.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./Button-DDYo0e3Y.js";import"./button-vIDiYGt4.js";import"./MenuListItem-Dweo6pop.js";import"./MenuListHeading-0U1jptlM.js";import"./MenuItem-BItckqMb.js";import"./ItemMedia-DZiSht8H.js";import"./Avatar-md5Lcy6_.js";import"./AvatarGroup-BxUIiam6.js";import"./Icon-BW7eZq3t.js";import"./Checkmark-BHVaOMRl.js";import"./Heading-r7KrHQRq.js";import"./ItemControls-XLXkfke2.js";import"./ChevronRight-cMtudnfA.js";import"./Badge-BL5WZhsc.js";import"./useMenu-HLwWT2ab.js";import"./useDropdownMenuController-BEzXPzCy.js";import"./Plus-zIuJSXr8.js";import"./Dropdown-MMgMxLyt.js";import"./ChevronUpDown-7yy58H4K.js";import"./ButtonGroup-B8wqqWfc.js";import"./ButtonGroupDivider-BoJnk5BU.js";import"./Tooltip-BkHTwdrx.js";import"./floating-ui.dom-DCpi3RTt.js";const qe={title:"Toolbar/Toolbar",component:i,parameters:{},decorators:[(r,l)=>{const t={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return e.jsx("div",{style:t,children:e.jsx(r,{})})}],args:{}},F=()=>e.jsxs(i,{children:[e.jsx(w,{items:[{title:"MenuItem 1"},{title:"MenuItem 2"},{title:"MenuItem 3"}],label:"Menu"}),e.jsx(Q,{name:"search",placeholder:"Search"}),e.jsx(v,{filterState:{},filters:[{label:"Filter 1",name:"f1",items:[{role:"radio",name:"1",value:"1",label:"Filter 1"},{role:"radio",name:"2",value:"2",label:"Filter 2"},{role:"radio",name:"3",value:"3",label:"Filter 3"}]},{label:"Filter 2",name:"f2",items:[{role:"checkbox",name:"1",value:"1",label:"Filter 1"},{role:"checkbox",name:"2",value:"2",label:"Filter 2"},{role:"checkbox",name:"3",value:"3",label:"Filter 3"}]}]})]}),x=()=>e.jsxs(i,{children:[e.jsx(Q,{name:"search",placeholder:"Search"}),e.jsx(v,{virtualized:!0,filterState:{},filters:[{label:"Filter 1",name:"f1",items:[{role:"radio",name:"f1",value:"1",label:"Filter 1"},{role:"radio",name:"f1",value:"2",label:"Filter 2"},{role:"radio",name:"f1",value:"3",label:"Filter 3"}]},{label:"Filter 2",name:"f2",items:[{role:"checkbox",name:"f2",value:"1",label:"Filter 1"},{role:"checkbox",name:"f2",value:"2",label:"Filter 2"},{role:"checkbox",name:"f2",value:"3",label:"Filter 3"}]}]})]}),T=()=>{const[r,l]=f.useState({fruit:[]});return e.jsxs(i,{children:[e.jsx(Q,{name:"search",placeholder:"Search"}),e.jsx(v,{filterState:r,onFilterStateChange:l,getFilterLabel:(t,n)=>!n?.length&&t==="fruit"?"Select Fruit":!n?.length&&t==="plan"?"Select plans":n?.join(","),filters:[{virtualized:!0,id:"fruit",label:"Choose a fruit",name:"fruit",items:[{groupId:"citrus",role:"radio",name:"fruit",value:"Orange",label:"Orange"},{groupId:"other",role:"radio",name:"fruit",value:"Apple",label:"Apple"},{groupId:"other",role:"radio",name:"fruit",value:"Kiwi",label:"Kiwi"}]},{id:"plan",label:"Choose plans",name:"plan",searchable:!0,groupId:"what-todo",groups:{"what-todo":{title:"What to do?"},other:{title:"Other"}},items:[{groupId:"what-todo",role:"checkbox",name:"plan",value:"Fishing",label:"Fishing",searchWords:["Fishing","guttastemning"]},{groupId:"what-todo",role:"checkbox",name:"plan",value:"Working",label:"Working",searchWords:["working","nine-to-five"]},{groupId:"other",role:"checkbox",name:"plan",value:"Sleeping",label:"Sleeping",searchWords:["Sleeping","zzz"]}]}]}),e.jsx(W,{label:"Switch",size:"sm"})]})},k=()=>{const r=d({filters:p?.map(l=>({...l}))});return e.jsx(i,{filter:r})},I=()=>{const r=d({filters:p?.map(l=>({...l,removable:!0}))});return e.jsx(i,{filter:r})},A=()=>{const{menus:r}=L(),l=d({filters:p?.map(t=>({...t,removable:!0}))});return e.jsx(i,{menus:r,filter:l})},y=()=>{const{menus:r,search:l}=L(),t=d({filters:p?.map(n=>({...n,removable:!0}))});return e.jsx(i,{menus:r,search:{...l,collapsible:!0},filter:t})},C=()=>{const{menus:r}=L(),l=d({filters:p?.map(m=>({...m,removable:!0}))}),[t,n]=f.useState(""),o=[{groupId:"1",title:"Nytt søk",label:e.jsx(S,{params:[{type:"search",value:t,label:t}]}),linkIcon:!0,onClick:()=>{console.info("Search for new query:")}},{groupId:"1",title:"Søk + filter",label:e.jsx(S,{params:[{type:"search",value:t,label:t},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0,onClick:()=>{console.info("Search for new query + filters")}}],s={open:t.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[...o,{groupId:"2",title:"Lagret søk 1",label:e.jsx(S,{params:[{type:"search",value:t,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2","aria-label":"Lagret søk 2",label:e.jsx(S,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]},c={value:t,onChange:m=>n(m.target.value),onClear:()=>n(""),placeholder:"Søk",collapsible:!0,minLength:3,menu:s};return e.jsx(i,{menus:r,search:c,filter:l})},M=()=>{const r=q("aa-1"),t=r.items?.find(a=>a.selected)?.icon?.isParent,n=d({filters:p?.map(a=>({...a,removable:!0}))}),o=n?.filterState,s=a=>{const b=a.target.type,h=a.target.value;b==="radio"?n?.onFilterStateChange?.({...o,subaccount:[h]}):o?.subaccount?.includes(h)?n?.onFilterStateChange?.({...o,subaccount:[...o?.subaccount?.filter(g=>g!==h)||[]]}):n?.onFilterStateChange?.({...o,subaccount:[...o?.subaccount?.filter(g=>g!=="all")||[],h]})},c=[{id:"1",groupId:"2",title:"Hovedenhet",description:"Org nr.",value:"hoved",name:"subaccount",role:"checkbox"},{id:"2",groupId:"2",title:"Underenhet",description:"Org nr.",name:"subaccount",value:"under",role:"checkbox"}].map(a=>({...a,checked:o?.subaccount?.includes(a.value),onChange:s})),m=[{id:"all",groupId:"1",title:"Alle enheter",name:"subaccount",value:"all",role:"radio",checked:o?.subaccount?.includes("all")||!o?.subaccount?.length,onChange:s},...c],u=()=>{const a=c?.filter(b=>o?.subaccount?.includes(b.value))?.length;return a===1?c?.find(b=>o?.subaccount?.includes(b.value))?.title:a?`${a} enheter`:`${c?.length} enheter`};return e.jsxs(i,{children:[e.jsx(w,{...r}),t&&e.jsx(w,{id:"subaccounts",items:m,label:u()}),e.jsx(v,{...n})]})},j=()=>{const r=q("aa-1"),l=d({filters:p?.map(u=>({...u,removable:!0}))}),[t,n]=f.useState("");function o(u,a){const[b,h]=f.useState(u);return f.useEffect(()=>{const g=setTimeout(()=>{h(u)},a);return()=>{clearTimeout(g)}},[u,a]),b}const s=o(t,500),m=t!==s;return f.useEffect(()=>{s&&console.log("Fetching data for:",s)},[s]),e.jsxs(i,{children:[e.jsx(w,{...r}),e.jsx(Q,{value:t,loading:m,onChange:u=>n(u.target.value),onClear:()=>n("")}),e.jsx(v,{...l})]})};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <Toolbar>
      <ToolbarMenu items={[{
      title: 'MenuItem 1'
    }, {
      title: 'MenuItem 2'
    }, {
      title: 'MenuItem 3'
    }]} label="Menu" />
      <ToolbarSearch name="search" placeholder="Search" />
      <ToolbarFilter filterState={{}} filters={[{
      label: 'Filter 1',
      name: 'f1',
      items: [{
        role: 'radio',
        name: '1',
        value: '1',
        label: 'Filter 1'
      }, {
        role: 'radio',
        name: '2',
        value: '2',
        label: 'Filter 2'
      }, {
        role: 'radio',
        name: '3',
        value: '3',
        label: 'Filter 3'
      }]
    }, {
      label: 'Filter 2',
      name: 'f2',
      items: [{
        role: 'checkbox',
        name: '1',
        value: '1',
        label: 'Filter 1'
      }, {
        role: 'checkbox',
        name: '2',
        value: '2',
        label: 'Filter 2'
      }, {
        role: 'checkbox',
        name: '3',
        value: '3',
        label: 'Filter 3'
      }]
    }]} />
    </Toolbar>;
}`,...F.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <Toolbar>
      <ToolbarSearch name="search" placeholder="Search" />
      <ToolbarFilter virtualized filterState={{}} filters={[{
      label: 'Filter 1',
      name: 'f1',
      items: [{
        role: 'radio',
        name: 'f1',
        value: '1',
        label: 'Filter 1'
      }, {
        role: 'radio',
        name: 'f1',
        value: '2',
        label: 'Filter 2'
      }, {
        role: 'radio',
        name: 'f1',
        value: '3',
        label: 'Filter 3'
      }]
    }, {
      label: 'Filter 2',
      name: 'f2',
      items: [{
        role: 'checkbox',
        name: 'f2',
        value: '1',
        label: 'Filter 1'
      }, {
        role: 'checkbox',
        name: 'f2',
        value: '2',
        label: 'Filter 2'
      }, {
        role: 'checkbox',
        name: 'f2',
        value: '3',
        label: 'Filter 3'
      }]
    }]} />
    </Toolbar>;
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({
    fruit: []
  });
  return <Toolbar>
      <ToolbarSearch name="search" placeholder="Search" />
      <ToolbarFilter filterState={filterState} onFilterStateChange={setFilterState} getFilterLabel={(name, filterValues) => {
      if (!filterValues?.length && name === 'fruit') return 'Select Fruit';
      if (!filterValues?.length && name === 'plan') return 'Select plans';
      return filterValues?.join(',');
    }} filters={[{
      virtualized: true,
      id: 'fruit',
      label: 'Choose a fruit',
      name: 'fruit',
      items: [{
        groupId: 'citrus',
        role: 'radio',
        name: 'fruit',
        value: 'Orange',
        label: 'Orange'
      }, {
        groupId: 'other',
        role: 'radio',
        name: 'fruit',
        value: 'Apple',
        label: 'Apple'
      }, {
        groupId: 'other',
        role: 'radio',
        name: 'fruit',
        value: 'Kiwi',
        label: 'Kiwi'
      }]
    }, {
      id: 'plan',
      label: 'Choose plans',
      name: 'plan',
      searchable: true,
      groupId: 'what-todo',
      groups: {
        'what-todo': {
          title: 'What to do?'
        },
        other: {
          title: 'Other'
        }
      },
      items: [{
        groupId: 'what-todo',
        role: 'checkbox',
        name: 'plan',
        value: 'Fishing',
        label: 'Fishing',
        searchWords: ['Fishing', 'guttastemning']
      }, {
        groupId: 'what-todo',
        role: 'checkbox',
        name: 'plan',
        value: 'Working',
        label: 'Working',
        searchWords: ['working', 'nine-to-five']
      }, {
        groupId: 'other',
        role: 'checkbox',
        name: 'plan',
        value: 'Sleeping',
        label: 'Sleeping',
        searchWords: ['Sleeping', 'zzz']
      }]
    }]} />
      <Switch label="Switch" size="sm" />
    </Toolbar>;
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const staticFilters = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item
    }))
  });
  return <Toolbar filter={staticFilters} />;
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  return <Toolbar filter={removableFilter} />;
}`,...I.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const {
    menus
  } = useInboxToolbar();
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  return <Toolbar menus={menus} filter={removableFilter} />;
}`,...A.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const {
    menus,
    search
  } = useInboxToolbar();
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  return <Toolbar menus={menus} search={{
    ...search,
    collapsible: true
  }} filter={removableFilter} />;
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const {
    menus
  } = useInboxToolbar();
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  const [q, setQ] = useState('');
  const suggestions = [{
    groupId: '1',
    title: 'Nytt søk',
    label: <QueryLabel params={[{
      type: 'search',
      value: q,
      label: q
    }]} />,
    linkIcon: true,
    onClick: () => {
      console.info('Search for new query:');
    }
  }, {
    groupId: '1',
    title: 'Søk + filter',
    label: <QueryLabel params={[{
      type: 'search',
      value: q,
      label: q
    }, {
      type: 'filter',
      value: 'Test',
      label: '2 filter'
    }]} />,
    linkIcon: true,
    onClick: () => {
      console.info('Search for new query + filters');
    }
  }];
  const menu = {
    open: q.length >= 1,
    onClose: () => {
      console.log('Close');
    },
    groups: {
      '1': {
        title: ''
      },
      '2': {
        title: 'Lagrede søk'
      }
    },
    items: [...suggestions, {
      groupId: '2',
      title: 'Lagret søk 1',
      label: <QueryLabel params={[{
        type: 'search',
        value: q,
        label: 'Skattemelding'
      }, {
        type: 'filter',
        value: 'Test',
        label: '2 filter'
      }]} />,
      linkIcon: true
    }, {
      groupId: '2',
      'aria-label': 'Lagret søk 2',
      label: <QueryLabel params={[{
        type: 'filter',
        value: 'Test',
        label: 'Skatteetaten'
      }]} />,
      linkIcon: true
    }]
  };
  const search = {
    value: q,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value),
    onClear: () => setQ(''),
    placeholder: 'Søk',
    collapsible: true,
    minLength: 3,
    menu
  };
  return <Toolbar menus={menus} search={search} filter={removableFilter} />;
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const accountMenu = useAccountMenu('aa-1');
  const selectedAccount = accountMenu.items?.find(item => item.selected);
  const selectedIsParent = selectedAccount?.icon?.isParent;
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  const filterState = removableFilter?.filterState;
  const onSubAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.type;
    const value = e.target.value;
    if (type === 'radio') {
      removableFilter?.onFilterStateChange?.({
        ...filterState,
        subaccount: [value]
      });
    } else {
      if (filterState?.subaccount?.includes(value)) {
        removableFilter?.onFilterStateChange?.({
          ...filterState,
          subaccount: [...(filterState?.subaccount?.filter(v => v !== value) || [])]
        });
      } else {
        removableFilter?.onFilterStateChange?.({
          ...filterState,
          subaccount: [...(filterState?.subaccount?.filter(v => v !== 'all') || []), value]
        });
      }
    }
  };
  const subAccounts = [{
    id: '1',
    groupId: '2',
    title: 'Hovedenhet',
    description: 'Org nr.',
    value: 'hoved',
    name: 'subaccount',
    role: 'checkbox'
  }, {
    id: '2',
    groupId: '2',
    title: 'Underenhet',
    description: 'Org nr.',
    name: 'subaccount',
    value: 'under',
    role: 'checkbox'
  }]?.map(item => {
    return {
      ...item,
      checked: filterState?.subaccount?.includes(item.value),
      onChange: onSubAccountChange
    };
  });
  const subAccountsAndAll = [{
    id: 'all',
    groupId: '1',
    title: 'Alle enheter',
    name: 'subaccount',
    value: 'all',
    role: 'radio',
    checked: filterState?.subaccount?.includes('all') || !filterState?.subaccount?.length,
    onChange: onSubAccountChange
  }, ...subAccounts];
  const getSubAccountLabel = () => {
    const count = subAccounts?.filter(item => filterState?.subaccount?.includes(item.value))?.length;
    if (count === 1) {
      return subAccounts?.find(item => filterState?.subaccount?.includes(item.value))?.title;
    }
    if (count) {
      return \`\${count} enheter\`;
    }
    return \`\${subAccounts?.length} enheter\`;
  };
  return <Toolbar>
      <ToolbarMenu {...accountMenu as ToolbarMenuProps} />
      {selectedIsParent && <ToolbarMenu id="subaccounts" items={subAccountsAndAll} label={getSubAccountLabel()} />}
      <ToolbarFilter {...removableFilter} />
    </Toolbar>;
}`,...M.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const accountMenu = useAccountMenu('aa-1');
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  const [q, setQ] = useState('');
  function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel previous timeout if value changes
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    return debouncedValue;
  }
  const debouncedQuery = useDebounce(q, 500);

  // We are "loading" if the current text hasn't caught up to the debounced text
  // OR if an actual API call is in progress (args.loading)
  const isTyping = q !== debouncedQuery;
  const loading = isTyping;
  useEffect(() => {
    if (debouncedQuery) {
      console.log('Fetching data for:', debouncedQuery);
      // Simulate API call
      // setTimeout(() => {
      //   console.log('Data fetched for:', debouncedQuery);
      // }, 1000);
    }
  }, [debouncedQuery]);
  return <Toolbar>
      <ToolbarMenu {...accountMenu as ToolbarMenuProps} />
      <ToolbarSearch value={q} loading={loading} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />
      <ToolbarFilter {...removableFilter} />
    </Toolbar>;
}`,...j.parameters?.docs?.source}}};const We=["Composition","SearchAndFilter","SearchAndSwitch","StaticFilters","RemovableFilters","AccountMenuAndFilters","AccountMenuAndSearch","AccountMenuAndSearchAutocomplete","AccountMenuAndSubmenu","DebouncedQuery"];export{A as AccountMenuAndFilters,y as AccountMenuAndSearch,C as AccountMenuAndSearchAutocomplete,M as AccountMenuAndSubmenu,F as Composition,j as DebouncedQuery,I as RemovableFilters,x as SearchAndFilter,T as SearchAndSwitch,k as StaticFilters,We as __namedExportsOrder,qe as default};
