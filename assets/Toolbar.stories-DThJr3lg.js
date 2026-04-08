import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./Switch-8Dpd7HT2.js";import{n as i,t as a}from"./Toolbar-CmziBAS7.js";import{t as o}from"./ToolbarMenu-AiiKAr17.js";import{t as s}from"./ToolbarSearch-CCN1tOTa.js";import{i as c,n as l,r as u,t as d}from"./example.hooks-CGrxcgX5.js";import{t as f}from"./QueryLabel-MGWdpn2p.js";var p=e(t(),1),m=n(),h={title:`Toolbar/Toolbar`,component:a,parameters:{},decorators:[(e,t)=>(0,m.jsx)(`div`,{style:{backgroundColor:`var(--ds-color-background-tinted)`,padding:`.5em`},children:(0,m.jsx)(e,{})})],args:{}},g=()=>(0,m.jsxs)(a,{children:[(0,m.jsx)(o,{items:[{title:`MenuItem 1`},{title:`MenuItem 2`},{title:`MenuItem 3`}],label:`Menu`}),(0,m.jsx)(s,{name:`search`,placeholder:`Search`}),(0,m.jsx)(i,{filterState:{},filters:[{label:`Filter 1`,name:`f1`,items:[{role:`radio`,name:`1`,value:`1`,label:`Filter 1`},{role:`radio`,name:`2`,value:`2`,label:`Filter 2`},{role:`radio`,name:`3`,value:`3`,label:`Filter 3`}]},{label:`Filter 2`,name:`f2`,items:[{role:`checkbox`,name:`1`,value:`1`,label:`Filter 1`},{role:`checkbox`,name:`2`,value:`2`,label:`Filter 2`},{role:`checkbox`,name:`3`,value:`3`,label:`Filter 3`}]}]})]}),_=()=>(0,m.jsxs)(a,{children:[(0,m.jsx)(s,{name:`search`,placeholder:`Search`}),(0,m.jsx)(i,{virtualized:!0,filterState:{},filters:[{label:`Filter 1`,name:`f1`,items:[{role:`radio`,name:`f1`,value:`1`,label:`Filter 1`},{role:`radio`,name:`f1`,value:`2`,label:`Filter 2`},{role:`radio`,name:`f1`,value:`3`,label:`Filter 3`}]},{label:`Filter 2`,name:`f2`,items:[{role:`checkbox`,name:`f2`,value:`1`,label:`Filter 1`},{role:`checkbox`,name:`f2`,value:`2`,label:`Filter 2`},{role:`checkbox`,name:`f2`,value:`3`,label:`Filter 3`}]}]})]}),v=()=>{let[e,t]=(0,p.useState)({fruit:[]});return(0,m.jsxs)(a,{children:[(0,m.jsx)(s,{name:`search`,placeholder:`Search`}),(0,m.jsx)(i,{filterState:e,onFilterStateChange:t,getFilterLabel:(e,t)=>!t?.length&&e===`fruit`?`Select Fruit`:!t?.length&&e===`plan`?`Select plans`:t?.join(`,`),filters:[{virtualized:!0,id:`fruit`,label:`Choose a fruit`,name:`fruit`,items:[{groupId:`citrus`,role:`radio`,name:`fruit`,value:`Orange`,label:`Orange`},{groupId:`other`,role:`radio`,name:`fruit`,value:`Apple`,label:`Apple`},{groupId:`other`,role:`radio`,name:`fruit`,value:`Kiwi`,label:`Kiwi`}]},{id:`plan`,label:`Choose plans`,name:`plan`,searchable:!0,groupId:`what-todo`,groups:{"what-todo":{title:`What to do?`},other:{title:`Other`}},items:[{groupId:`what-todo`,role:`checkbox`,name:`plan`,value:`Fishing`,label:`Fishing`,searchWords:[`Fishing`,`guttastemning`]},{groupId:`what-todo`,role:`checkbox`,name:`plan`,value:`Working`,label:`Working`,searchWords:[`working`,`nine-to-five`]},{groupId:`other`,role:`checkbox`,name:`plan`,value:`Sleeping`,label:`Sleeping`,searchWords:[`Sleeping`,`zzz`]}]}]}),(0,m.jsx)(r,{label:`Switch`,size:`sm`})]})},y=()=>(0,m.jsx)(a,{filter:l({filters:c?.map(e=>({...e}))})}),b=()=>(0,m.jsx)(a,{filter:l({filters:c?.map(e=>({...e,removable:!0}))})}),x=()=>{let{menus:e}=u();return(0,m.jsx)(a,{menus:e,filter:l({filters:c?.map(e=>({...e,removable:!0}))})})},S=()=>{let{menus:e,search:t}=u(),n=l({filters:c?.map(e=>({...e,removable:!0}))});return(0,m.jsx)(a,{menus:e,search:{...t,collapsible:!0},filter:n})},C=()=>{let{menus:e}=u(),t=l({filters:c?.map(e=>({...e,removable:!0}))}),[n,r]=(0,p.useState)(``),i=[{groupId:`1`,title:`Nytt søk`,label:(0,m.jsx)(f,{params:[{type:`search`,value:n,label:n}]}),linkIcon:!0,onClick:()=>{console.info(`Search for new query:`)}},{groupId:`1`,title:`Søk + filter`,label:(0,m.jsx)(f,{params:[{type:`search`,value:n,label:n},{type:`filter`,value:`Test`,label:`2 filter`}]}),linkIcon:!0,onClick:()=>{console.info(`Search for new query + filters`)}}];return(0,m.jsx)(a,{menus:e,search:{value:n,onChange:e=>r(e.target.value),onClear:()=>r(``),placeholder:`Søk`,collapsible:!0,minLength:3,menu:{open:n.length>=1,onClose:()=>{console.log(`Close`)},groups:{1:{title:``},2:{title:`Lagrede søk`}},items:[...i,{groupId:`2`,title:`Lagret søk 1`,label:(0,m.jsx)(f,{params:[{type:`search`,value:n,label:`Skattemelding`},{type:`filter`,value:`Test`,label:`2 filter`}]}),linkIcon:!0},{groupId:`2`,"aria-label":`Lagret søk 2`,label:(0,m.jsx)(f,{params:[{type:`filter`,value:`Test`,label:`Skatteetaten`}]}),linkIcon:!0}]}},filter:t})},w=()=>{let e=d(`aa-1`),t=(e.items?.find(e=>e.selected))?.icon?.isParent,n=l({filters:c?.map(e=>({...e,removable:!0}))}),r=n?.filterState,s=e=>{let t=e.target.type,i=e.target.value;t===`radio`?n?.onFilterStateChange?.({...r,subaccount:[i]}):r?.subaccount?.includes(i)?n?.onFilterStateChange?.({...r,subaccount:[...r?.subaccount?.filter(e=>e!==i)||[]]}):n?.onFilterStateChange?.({...r,subaccount:[...r?.subaccount?.filter(e=>e!==`all`)||[],i]})},u=[{id:`1`,groupId:`2`,title:`Hovedenhet`,description:`Org nr.`,value:`hoved`,name:`subaccount`,role:`checkbox`},{id:`2`,groupId:`2`,title:`Underenhet`,description:`Org nr.`,name:`subaccount`,value:`under`,role:`checkbox`}]?.map(e=>({...e,checked:r?.subaccount?.includes(e.value),onChange:s})),f=[{id:`all`,groupId:`1`,title:`Alle enheter`,name:`subaccount`,value:`all`,role:`radio`,checked:r?.subaccount?.includes(`all`)||!r?.subaccount?.length,onChange:s},...u],p=()=>{let e=u?.filter(e=>r?.subaccount?.includes(e.value))?.length;return e===1?u?.find(e=>r?.subaccount?.includes(e.value))?.title:e?`${e} enheter`:`${u?.length} enheter`};return(0,m.jsxs)(a,{children:[(0,m.jsx)(o,{...e}),t&&(0,m.jsx)(o,{id:`subaccounts`,items:f,label:p()}),(0,m.jsx)(i,{...n})]})},T=()=>{let e=d(`aa-1`),t=l({filters:c?.map(e=>({...e,removable:!0}))}),[n,r]=(0,p.useState)(``);function u(e,t){let[n,r]=(0,p.useState)(e);return(0,p.useEffect)(()=>{let n=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(n)}},[e,t]),n}let f=u(n,500),h=n!==f;return(0,p.useEffect)(()=>{f&&console.log(`Fetching data for:`,f)},[f]),(0,m.jsxs)(a,{children:[(0,m.jsx)(o,{...e}),(0,m.jsx)(s,{value:n,loading:h,onChange:e=>r(e.target.value),onClear:()=>r(``)}),(0,m.jsx)(i,{...t})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const staticFilters = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item
    }))
  });
  return <Toolbar filter={staticFilters} />;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  return <Toolbar filter={removableFilter} />;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};var E=[`Composition`,`SearchAndFilter`,`SearchAndSwitch`,`StaticFilters`,`RemovableFilters`,`AccountMenuAndFilters`,`AccountMenuAndSearch`,`AccountMenuAndSearchAutocomplete`,`AccountMenuAndSubmenu`,`DebouncedQuery`];export{x as AccountMenuAndFilters,S as AccountMenuAndSearch,C as AccountMenuAndSearchAutocomplete,w as AccountMenuAndSubmenu,g as Composition,T as DebouncedQuery,b as RemovableFilters,_ as SearchAndFilter,v as SearchAndSwitch,y as StaticFilters,E as __namedExportsOrder,h as default};