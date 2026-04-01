import{r as n,j as r}from"./iframe-DxxW_Hah.js";import{S as g}from"./SearchField-ptc2QeHn.js";import{Q as u}from"./QueryLabel-DBDpIjTe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-pOAXHZ6n.js";import"./MagnifyingGlass-B8dYO_M2.js";import"./useId-CckRU7I8.js";import"./XMark-ChXBbXGN.js";import"./FieldBase-ttSv04zw.js";import"./Typography-CfTPPq_a.js";import"./useHighlightedText-C9OLcmcP.js";import"./Skeleton-DiRARuJ9.js";import"./Label-YFmv6AXl.js";import"./index-D2WP85Bl.js";import"./use-merge-refs-BbTz5JXs.js";import"./lite-DaUVFjkg.js";import"./Input-Cs8lujA3.js";import"./input-B30SugQD.js";import"./Button-CcwbSiKg.js";import"./button-BBYE_PPH.js";import"./MenuListItem-BWh93a_i.js";import"./MenuListHeading-CIz6aOLR.js";import"./MenuItem-SOEG9Ke8.js";import"./ItemMedia-DDT4_MLi.js";import"./Avatar--rA6gsID.js";import"./AvatarGroup-C6j_8VXQ.js";import"./Icon-Cf03fdWw.js";import"./Checkmark-pZi8btQa.js";import"./Heading-Bejow2zA.js";import"./ChevronRight-CqOTbusb.js";import"./Badge-CQ9EBUDZ.js";import"./useMenu-DMxEdeKU.js";import"./InformationSquare-CuO8i3VE.js";import"./Plus-CScsMow9.js";const te={title:"Forms/SearchField",component:g,tags:["autodocs"],parameters:{},args:{name:"search",placeholder:"Søk"}},c={args:{placeholder:"Søk"}},i={args:{placeholder:"Søk",value:"Test",onClear:()=>{console.log("Clear")}}},p=o=>{const[e,t]=n.useState("");function s(l,h){const[y,f]=n.useState(l);return n.useEffect(()=>{const S=setTimeout(()=>{f(l)},h);return()=>{clearTimeout(S)}},[l,h]),y}const a=s(e,500),b=e!==a;return n.useEffect(()=>{a&&console.log("Triggering API search for:",a)},[a]),r.jsx(g,{...o,loading:b,value:e,onChange:l=>t(l.target.value),onClear:()=>t("")})},m=o=>{const[e,t]=n.useState("");return r.jsx(g,{...o,value:e,onChange:s=>t(s.target.value),onClear:()=>t("")})},d=o=>{const[e,t]=n.useState(""),s={open:e.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[{groupId:"1",title:"Nytt søk",label:r.jsx(u,{params:[{type:"search",value:e,label:e}]}),linkIcon:!0},{groupId:"1",title:"Nytt søk + filter",label:r.jsx(u,{params:[{type:"search",value:e,label:e},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 1",label:r.jsx(u,{params:[{type:"search",value:e,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 2",label:r.jsx(u,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]};return r.jsx(g,{...o,value:e,onChange:a=>t(a.target.value),onClear:()=>t(""),menu:s})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Søk'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Søk',
    value: 'Test',
    onClear: () => {
      console.log('Clear');
    }
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
  const [q, setQ] = useState('');
  return <SearchField {...args} value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />;
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
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
}`,...d.parameters?.docs?.source}}};const re=["Default","ClearButton","DebouncedQuery","Controlled","Autocomplete"];export{d as Autocomplete,i as ClearButton,m as Controlled,p as DebouncedQuery,c as Default,re as __namedExportsOrder,te as default};
