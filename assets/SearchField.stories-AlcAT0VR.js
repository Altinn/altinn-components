import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./SearchField-Bjd6cmAs.js";import{t as i}from"./QueryLabel-MGWdpn2p.js";var a=e(t(),1),o=n(),s={title:`Forms/SearchField`,component:r,tags:[`autodocs`],parameters:{},args:{name:`search`,placeholder:`Søk`}},c={args:{placeholder:`Søk`}},l={args:{placeholder:`Søk`,value:`Test`,onClear:()=>{console.log(`Clear`)}}},u=e=>{let[t,n]=(0,a.useState)(``);function i(e,t){let[n,r]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let n=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(n)}},[e,t]),n}let s=i(t,500),c=t!==s;return(0,a.useEffect)(()=>{s&&console.log(`Triggering API search for:`,s)},[s]),(0,o.jsx)(r,{...e,loading:c,value:t,onChange:e=>n(e.target.value),onClear:()=>n(``)})},d=e=>{let[t,n]=(0,a.useState)(``);return(0,o.jsx)(r,{...e,value:t,onChange:e=>n(e.target.value),onClear:()=>n(``)})},f=e=>{let[t,n]=(0,a.useState)(``),s={open:t.length>=1,onClose:()=>{console.log(`Close`)},groups:{1:{title:``},2:{title:`Lagrede søk`}},items:[{groupId:`1`,title:`Nytt søk`,label:(0,o.jsx)(i,{params:[{type:`search`,value:t,label:t}]}),linkIcon:!0},{groupId:`1`,title:`Nytt søk + filter`,label:(0,o.jsx)(i,{params:[{type:`search`,value:t,label:t},{type:`filter`,value:`Test`,label:`2 filter`}]}),linkIcon:!0},{groupId:`2`,title:`Lagret søk 1`,label:(0,o.jsx)(i,{params:[{type:`search`,value:t,label:`Skattemelding`},{type:`filter`,value:`Test`,label:`2 filter`}]}),linkIcon:!0},{groupId:`2`,title:`Lagret søk 2`,label:(0,o.jsx)(i,{params:[{type:`filter`,value:`Test`,label:`Skatteetaten`}]}),linkIcon:!0}]};return(0,o.jsx)(r,{...e,value:t,onChange:e=>n(e.target.value),onClear:()=>n(``),menu:s})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Søk'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Søk',
    value: 'Test',
    onClear: () => {
      console.log('Clear');
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
  const [q, setQ] = useState('');
  function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(() => {
      // Set a timer to update the value after the delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // If the value changes (user types again), clear the previous timer
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    return debouncedValue;
  }

  // Use the hook with a 500ms delay
  const debouncedQuery = useDebounce(q, 500);

  // We are "loading" if the current text hasn't caught up to the debounced text
  // OR if an actual API call is in progress (args.loading)
  const isTyping = q !== debouncedQuery;
  const loading = isTyping;
  useEffect(() => {
    if (debouncedQuery) {
      console.log('Triggering API search for:', debouncedQuery);
      // Perform your fetch/search logic here
    }
  }, [debouncedQuery]);
  return <SearchField {...args} loading={loading} value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
  const [q, setQ] = useState('');
  return <SearchField {...args} value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
  const [q, setQ] = useState('');
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
    items: [{
      groupId: '1',
      title: 'Nytt søk',
      label: <QueryLabel params={[{
        type: 'search',
        value: q,
        label: q
      }]} />,
      linkIcon: true
    }, {
      groupId: '1',
      title: 'Nytt søk + filter',
      label: <QueryLabel params={[{
        type: 'search',
        value: q,
        label: q
      }, {
        type: 'filter',
        value: 'Test',
        label: '2 filter'
      }]} />,
      linkIcon: true
    }, {
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
      title: 'Lagret søk 2',
      label: <QueryLabel params={[{
        type: 'filter',
        value: 'Test',
        label: 'Skatteetaten'
      }]} />,
      linkIcon: true
    }]
  };
  return <SearchField {...args} value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} menu={menu} />;
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`ClearButton`,`DebouncedQuery`,`Controlled`,`Autocomplete`];export{f as Autocomplete,l as ClearButton,d as Controlled,u as DebouncedQuery,c as Default,p as __namedExportsOrder,s as default};