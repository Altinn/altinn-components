import{r as o,j as t}from"./iframe-YdRL1NzV.js";import{S as u}from"./SearchField-Cp2PZLrm.js";import{Q as c}from"./QueryLabel-BLfanfjW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SoIsie1y.js";import"./MagnifyingGlass-C6-V8ObG.js";import"./useId-DxHKrSZ4.js";import"./XMark-1l7ZvP46.js";import"./FieldBase-KNsWphki.js";import"./Typography-CYgzLoEf.js";import"./useHighlightedText-DI-ykGTt.js";import"./Skeleton-C3i9Ug5T.js";import"./Label-CoBwam8t.js";import"./tooltip-D0NJwlFT.js";import"./Input-Co3wY2OB.js";import"./Button-BwQOxknK.js";import"./MenuListItem-CLQ7WBGF.js";import"./MenuListHeading-DregQKpB.js";import"./MenuItem-DdZPav2y.js";import"./ItemMedia-BNRd-cb6.js";import"./Avatar-02T2Z9c_.js";import"./AvatarGroup-B9OCrS5P.js";import"./Icon-B4-srULI.js";import"./Checkmark-Ple-kG_b.js";import"./Heading-56B0sdRG.js";import"./ItemControls-CMhfwURs.js";import"./ChevronRight-DrXpgbb_.js";import"./Badge-BSGPq3Hw.js";import"./Tooltip-cmmFu2mD.js";import"./useMenu-Cp2blUti.js";import"./index-zl5T2Fem.js";import"./InformationSquare-C3wG0Qjz.js";import"./Plus-BNGbhyZ6.js";const te={title:"Forms/SearchField",component:u,tags:["autodocs"],parameters:{},args:{name:"search",placeholder:"Søk"}},i={args:{placeholder:"Søk"}},p={args:{label:"Search",hideLabel:!0,placeholder:"Søk"}},d={args:{placeholder:"Søk",value:"Test",onClear:()=>{console.log("Clear")}}},m=a=>{const[e,r]=o.useState("");function n(l,S){const[f,v]=o.useState(l);return o.useEffect(()=>{const k=setTimeout(()=>{v(l)},S);return()=>{clearTimeout(k)}},[l,S]),f}const s=n(e,500),y=e!==s;return o.useEffect(()=>{s&&console.log("Triggering API search for:",s)},[s]),t.jsx(u,{...a,loading:y,value:e,onChange:l=>r(l.target.value),onClear:()=>r("")})},g=a=>{const[e,r]=o.useState("");return t.jsx(u,{...a,value:e,onChange:n=>r(n.target.value),onClear:()=>r("")})},h=a=>{const[e,r]=o.useState("");return t.jsx(u,{...a,collapsible:!0,value:e,onChange:n=>r(n.target.value),onClear:()=>r("")})},b=a=>{const[e,r]=o.useState(""),n={open:e.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[{groupId:"1",title:"Nytt søk",label:t.jsx(c,{params:[{type:"search",value:e,label:e}]}),linkIcon:!0},{groupId:"1",title:"Nytt søk + filter",label:t.jsx(c,{params:[{type:"search",value:e,label:e},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 1",label:t.jsx(c,{params:[{type:"search",value:e,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 2",label:t.jsx(c,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]};return t.jsx(u,{...a,value:e,onChange:s=>r(s.target.value),onClear:()=>r(""),menu:n})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Søk'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    hideLabel: true,
    placeholder: 'Søk'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Søk',
    value: 'Test',
    onClear: () => {
      console.log('Clear');
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
  const [q, setQ] = useState('');
  return <SearchField {...args} value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />;
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
  const [q, setQ] = useState('');
  return <SearchField {...args} collapsible value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />;
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
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
}`,...b.parameters?.docs?.source}}};const ae=["Default","HiddenLabel","ClearButton","DebouncedQuery","Controlled","Collapsible","Autocomplete"];export{b as Autocomplete,d as ClearButton,h as Collapsible,g as Controlled,m as DebouncedQuery,i as Default,p as HiddenLabel,ae as __namedExportsOrder,te as default};
