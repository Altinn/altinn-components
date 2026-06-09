import{a7 as e,aa as h,c as W,T as E,l as q}from"./iframe-D6Pw3lmv.js";import{b as O,a as u,i as m,u as z}from"./example.hooks-7AZ2i4q-.js";import{T as i,a as g}from"./Toolbar-u7Qg0RaM.js";import{S as R}from"./Bookmark-DaI5CD2v.js";import{T as F}from"./ToolbarMenu-Ct8b7bjn.js";import{T as S}from"./ToolbarSearch-wV0VxLX8.js";import{S as P}from"./Switch-DTtTZAwl.js";import{Q as x}from"./QueryLabel-DBYtGOs4.js";import"./preload-helper-PPVm8Dsz.js";import"./InformationSquare-D2Bd0bEl.js";import"./Paperclip-D_Cz5rNA.js";import"./Eye-Ci1-KX1b.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DaPB2oTh.js";import"./useDropdownMenuController-NInAg9dA.js";import"./Dropdown-DnYymeta.js";import"./SearchField-EcYIPpv0.js";import"./MagnifyingGlass-xEXh01wv.js";import"./FieldBase-q3f36oGg.js";import"./Typography-bPKdoJNM.js";import"./useHighlightedText-iOuYupmt.js";import"./Field-FWJUOm-g.js";import"./Label-DQDgnIdR.js";import"./Input-BPiAPMWI.js";import"./useMenu-AaKLsWFm.js";import"./MenuListItem-CdJ_uFA7.js";import"./MenuListHeading-CMCHjdRB.js";import"./MenuItem-4x07-Z8Y.js";import"./ItemMedia-BWttq_aD.js";import"./Avatar-BMlUzpXZ.js";import"./AvatarGroup-AckQ-RzX.js";import"./Checkmark-CdsVcBub.js";import"./ItemLabel-BLZeZ0XA.js";import"./Heading-Bsu5tLR0.js";import"./ItemControls-DN7HEIDI.js";import"./Badge-CVXUfZnL.js";import"./Tooltip-BRKe6VnT.js";import"./ChevronRight-DrJyRyMs.js";import"./index-CjPQDnhT.js";import"./Plus-yZ7u7aad.js";import"./ButtonGroup-BukNZ9_Z.js";import"./ButtonGroupDivider-w2z4C3RV.js";import"./ChevronUpDown-CFSIs9pS.js";const De={title:"Toolbar/Toolbar",component:i,parameters:{},decorators:[(l,n)=>{const t={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return e.jsx("div",{style:t,children:e.jsx(l,{})})}],args:{}},T=()=>e.jsxs(i,{children:[e.jsx(F,{items:[{title:"MenuItem 1"},{title:"MenuItem 2"},{title:"MenuItem 3"}],label:"Menu"}),e.jsx(S,{name:"search",placeholder:"Search"}),e.jsx(g,{filterState:{},filters:[{label:"Filter 1",name:"f1",items:[{role:"radio",name:"1",value:"1",label:"Filter 1"},{role:"radio",name:"2",value:"2",label:"Filter 2"},{role:"radio",name:"3",value:"3",label:"Filter 3"}]},{label:"Filter 2",name:"f2",items:[{role:"checkbox",name:"1",value:"1",label:"Filter 1"},{role:"checkbox",name:"2",value:"2",label:"Filter 2"},{role:"checkbox",name:"3",value:"3",label:"Filter 3"}]}]})]}),k=()=>e.jsxs(i,{children:[e.jsx(F,{label:"Menu",htmlTitle:"Velg en handling fra menyen",items:[{title:"MenuItem 1"},{title:"MenuItem 2"},{title:"MenuItem 3"}]}),e.jsx(S,{name:"search",placeholder:"Search",htmlTitle:"Søk i innboksen"}),e.jsx(g,{filterState:{},filters:[{label:"Filter 1",name:"f1",htmlTitle:"Filtrer på alternativ",items:[{role:"radio",name:"f1",htmlTitle:"valg 1",value:"1",label:"Filter 1"},{role:"radio",name:"f1",value:"2",htmlTitle:"valg 2",label:"Filter 2"}]},{label:"Filter 2",name:"f2",htmlTitle:"Filtrer på flere alternativer",removable:!0,items:[{role:"checkbox",name:"f2",value:"1",label:"Filter 1"},{role:"checkbox",name:"f2",value:"2",label:"Filter 2"}]}]})]}),I=()=>e.jsxs(i,{children:[e.jsx(S,{name:"search",placeholder:"Search"}),e.jsx(g,{virtualized:!0,filterState:{},filters:[{label:"Filter 1",name:"f1",items:[{role:"radio",name:"f1",value:"1",label:"Filter 1"},{role:"radio",name:"f1",value:"2",label:"Filter 2"},{role:"radio",name:"f1",value:"3",label:"Filter 3"}]},{label:"Filter 2",name:"f2",items:[{role:"checkbox",name:"f2",value:"1",label:"Filter 1"},{role:"checkbox",name:"f2",value:"2",label:"Filter 2"},{role:"checkbox",name:"f2",value:"3",label:"Filter 3"}]}]})]}),A=()=>{const[l,n]=h.useState({fruit:[]});return e.jsxs(i,{children:[e.jsx(S,{name:"search",placeholder:"Search"}),e.jsx(g,{filterState:l,onFilterStateChange:n,getFilterLabel:(t,a)=>!a?.length&&t==="fruit"?"Select Fruit":!a?.length&&t==="plan"?"Select plans":a?.join(","),filters:[{virtualized:!0,id:"fruit",label:"Choose a fruit",name:"fruit",items:[{groupId:"citrus",role:"radio",name:"fruit",value:"Orange",label:"Orange"},{groupId:"other",role:"radio",name:"fruit",value:"Apple",label:"Apple"},{groupId:"other",role:"radio",name:"fruit",value:"Kiwi",label:"Kiwi"}]},{id:"plan",label:"Choose plans",name:"plan",searchable:!0,groupId:"what-todo",groups:{"what-todo":{title:"What to do?"},other:{title:"Other"}},items:[{groupId:"what-todo",role:"checkbox",name:"plan",value:"Fishing",label:"Fishing",searchWords:["Fishing","guttastemning"]},{groupId:"what-todo",role:"checkbox",name:"plan",value:"Working",label:"Working",searchWords:["working","nine-to-five"]},{groupId:"other",role:"checkbox",name:"plan",value:"Sleeping",label:"Sleeping",searchWords:["Sleeping","zzz"]}]}]}),e.jsx(P,{label:"Switch",size:"sm"})]})},C=()=>{const l=u({filters:m?.map(n=>({...n}))});return e.jsx(i,{filter:l})},j=()=>{const l=u({filters:m});return e.jsxs(q.TriggerContext,{children:[e.jsx(q.Trigger,{children:"Open Dialog"}),e.jsx(q,{style:{height:"20rem"},children:e.jsx(i,{filter:l})})]})},y=()=>{const l=u({filters:m?.map(n=>({...n,removable:!0}))});return e.jsx(i,{filter:l})},M=()=>{const{menus:l}=O(),n=u({filters:m?.map(t=>({...t,removable:!0}))});return e.jsx(i,{menus:l,filter:n})},w=()=>{const{menus:l,search:n}=O(),t=u({filters:m?.map(a=>({...a,removable:!0}))});return e.jsx(i,{menus:l,search:{...n,collapsible:!0},filter:t})},D=()=>{const{menus:l}=O(),n=u({filters:m?.map(r=>({...r,removable:!0}))}),[t,a]=h.useState(""),o=[{groupId:"1",title:"Nytt søk",label:e.jsx(x,{params:[{type:"search",value:t,label:t}]}),linkIcon:!0,onClick:()=>{console.info("Search for new query:")}},{groupId:"1",title:"Søk + filter",label:e.jsx(x,{params:[{type:"search",value:t,label:t},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0,onClick:()=>{console.info("Search for new query + filters")}}],c={open:t.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[...o,{groupId:"2",title:"Lagret søk 1",label:e.jsx(x,{params:[{type:"search",value:t,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2","aria-label":"Lagret søk 2",label:e.jsx(x,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]},b={value:t,onChange:r=>a(r.target.value),onClear:()=>a(""),placeholder:"Søk",collapsible:!0,minLength:3,menu:c},f=()=>{a(""),n.onFilterStateChange?.({})},s=t||Object.values(n?.filterState??{}).some(r=>r?.length);return e.jsx(i,{menus:l,search:b,filter:{...n,showResetButton:!1},children:s&&e.jsxs(e.Fragment,{children:[e.jsxs(W,{onClick:f,variant:"ghost",children:[e.jsx(E,{"aria-hidden":"true"}),e.jsx("span",{children:"Nullstill"})]}),e.jsxs(W,{onClick:()=>alert("Lagre søk"),variant:"ghost",children:[e.jsx(R,{"aria-hidden":"true"}),e.jsx("span",{children:"Lagre"})]})]})})},L=()=>{const l=z("aa-1"),t=l.items?.find(r=>r.selected)?.icon?.isParent,a=u({filters:m?.map(r=>({...r,removable:!0}))}),o=a?.filterState,c=r=>{const d=r.target.type,p=r.target.value;d==="radio"?a?.onFilterStateChange?.({...o,subaccount:[p]}):o?.subaccount?.includes(p)?a?.onFilterStateChange?.({...o,subaccount:[...o?.subaccount?.filter(v=>v!==p)||[]]}):a?.onFilterStateChange?.({...o,subaccount:[...o?.subaccount?.filter(v=>v!=="all")||[],p]})},b=[{id:"1",groupId:"2",title:"Hovedenhet",description:"Org nr.",value:"hoved",name:"subaccount",role:"checkbox"},{id:"2",groupId:"2",title:"Underenhet",description:"Org nr.",name:"subaccount",value:"under",role:"checkbox"}].map(r=>({...r,checked:o?.subaccount?.includes(r.value),onChange:c})),f=[{id:"all",groupId:"1",title:"Alle enheter",name:"subaccount",value:"all",role:"radio",checked:o?.subaccount?.includes("all")||!o?.subaccount?.length,onChange:c},...b],s=()=>{const r=b?.filter(d=>o?.subaccount?.includes(d.value))?.length;return r===1?b?.find(d=>o?.subaccount?.includes(d.value))?.title:r?`${r} enheter`:`${b?.length} enheter`};return e.jsxs(i,{children:[e.jsx(F,{...l}),t&&e.jsx(F,{id:"subaccounts",items:f,label:s(),virtualized:!0}),e.jsx(g,{...a})]})},Q=()=>{const l=z("aa-1"),n=u({filters:m?.map(s=>({...s,removable:!0}))}),[t,a]=h.useState("");function o(s,r){const[d,p]=h.useState(s);return h.useEffect(()=>{const v=setTimeout(()=>{p(s)},r);return()=>{clearTimeout(v)}},[s,r]),d}const c=o(t,500),f=t!==c;return h.useEffect(()=>{c&&console.log("Fetching data for:",c)},[c]),e.jsxs(i,{children:[e.jsx(F,{...l}),e.jsx(S,{value:t,loading:f,onChange:s=>a(s.target.value),onClear:()=>a("")}),e.jsx(g,{...n})]})};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <Toolbar>
      <ToolbarMenu label="Menu" htmlTitle="Velg en handling fra menyen" items={[{
      title: 'MenuItem 1'
    }, {
      title: 'MenuItem 2'
    }, {
      title: 'MenuItem 3'
    }]} />
      <ToolbarSearch name="search" placeholder="Search" htmlTitle="Søk i innboksen" />
      <ToolbarFilter filterState={{}} filters={[{
      label: 'Filter 1',
      name: 'f1',
      htmlTitle: 'Filtrer på alternativ',
      items: [{
        role: 'radio',
        name: 'f1',
        htmlTitle: 'valg 1',
        value: '1',
        label: 'Filter 1'
      }, {
        role: 'radio',
        name: 'f1',
        value: '2',
        htmlTitle: 'valg 2',
        label: 'Filter 2'
      }]
    }, {
      label: 'Filter 2',
      name: 'f2',
      htmlTitle: 'Filtrer på flere alternativer',
      removable: true,
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
      }]
    }]} />
    </Toolbar>;
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const staticFilters = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item
    }))
  });
  return <Toolbar filter={staticFilters} />;
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const staticFilters = useInboxFilter({
    filters: inboxFilters
  });
  return <DsDialog.TriggerContext>
      <DsDialog.Trigger>Open Dialog</DsDialog.Trigger>
      <DsDialog style={{
      height: '20rem'
    }}>
        <Toolbar filter={staticFilters} />
      </DsDialog>
    </DsDialog.TriggerContext>;
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  return <Toolbar filter={removableFilter} />;
}`,...y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
  const handleReset = () => {
    setQ('');
    removableFilter.onFilterStateChange?.({});
  };
  const hasFilters = q || Object.values(removableFilter?.filterState ?? {}).some(v => v?.length);
  return <Toolbar menus={menus} search={search} filter={{
    ...removableFilter,
    showResetButton: false
  }}>
      {hasFilters && <>
          <Button onClick={handleReset} variant="ghost">
            <XMarkIcon aria-hidden="true" />
            <span>Nullstill</span>
          </Button>
          <Button onClick={() => alert('Lagre søk')} variant="ghost">
            <BookmarkIcon aria-hidden="true" />
            <span>Lagre</span>
          </Button>
        </>}
    </Toolbar>;
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
      {selectedIsParent && <ToolbarMenu id="subaccounts" items={subAccountsAndAll} label={getSubAccountLabel()} virtualized />}
      <ToolbarFilter {...removableFilter} />
    </Toolbar>;
}`,...L.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}};const Le=["Composition","WithHtmlTitle","SearchAndFilter","SearchAndSwitch","StaticFilters","StaticFiltersInDialog","RemovableFilters","AccountMenuAndFilters","AccountMenuAndSearch","AccountMenuAndSearchAutocomplete","AccountMenuAndSubmenu","DebouncedQuery"];export{M as AccountMenuAndFilters,w as AccountMenuAndSearch,D as AccountMenuAndSearchAutocomplete,L as AccountMenuAndSubmenu,T as Composition,Q as DebouncedQuery,y as RemovableFilters,I as SearchAndFilter,A as SearchAndSwitch,C as StaticFilters,j as StaticFiltersInDialog,k as WithHtmlTitle,Le as __namedExportsOrder,De as default};
