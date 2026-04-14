import{r as n,j as r}from"./iframe-DolAyTrH.js";import{S as u}from"./SearchField-O-g-s0at.js";import{Q as c}from"./QueryLabel-C-7eU317.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGgdxP5s.js";import"./MagnifyingGlass-D6ZngSzY.js";import"./useId-CHjpN4lF.js";import"./XMark-DTdVjjyM.js";import"./FieldBase-Cd7L_EtW.js";import"./Typography-BxahTxrH.js";import"./useHighlightedText-DjzGplEp.js";import"./Skeleton-CgJZAB6S.js";import"./Label-B4hULeup.js";import"./index-Bcer_oBx.js";import"./use-merge-refs-D0JupAUo.js";import"./lite-DaUVFjkg.js";import"./Input-CbO5ihcQ.js";import"./input-BNW4iEHl.js";import"./Button-BnKV4VN-.js";import"./button-DvTcN5eG.js";import"./MenuListItem-V7gZGQwh.js";import"./MenuListHeading-ktY8lirO.js";import"./MenuItem-BC8KVIYh.js";import"./ItemMedia-feu0z7mp.js";import"./Avatar-koXMFN1u.js";import"./AvatarGroup-B7A0z_e3.js";import"./Icon-DyTdluPS.js";import"./Checkmark-CMV0hymD.js";import"./Heading-ytdfVfHq.js";import"./ItemControls-B_Hdv8nx.js";import"./ChevronRight-Duke-dAu.js";import"./Badge-XZ4zcUXX.js";import"./useMenu-BNSqPiQU.js";import"./InformationSquare-B_X3Ih6E.js";import"./Plus-J7cjNzSf.js";const ae={title:"Forms/SearchField",component:u,tags:["autodocs"],parameters:{},args:{name:"search",placeholder:"Søk"}},i={args:{placeholder:"Søk"}},p={args:{placeholder:"Søk",value:"Test",onClear:()=>{console.log("Clear")}}},m=a=>{const[e,t]=n.useState("");function o(l,b){const[f,S]=n.useState(l);return n.useEffect(()=>{const v=setTimeout(()=>{S(l)},b);return()=>{clearTimeout(v)}},[l,b]),f}const s=o(e,500),y=e!==s;return n.useEffect(()=>{s&&console.log("Triggering API search for:",s)},[s]),r.jsx(u,{...a,loading:y,value:e,onChange:l=>t(l.target.value),onClear:()=>t("")})},d=a=>{const[e,t]=n.useState("");return r.jsx(u,{...a,value:e,onChange:o=>t(o.target.value),onClear:()=>t("")})},g=a=>{const[e,t]=n.useState("");return r.jsx(u,{...a,collapsible:!0,value:e,onChange:o=>t(o.target.value),onClear:()=>t("")})},h=a=>{const[e,t]=n.useState(""),o={open:e.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[{groupId:"1",title:"Nytt søk",label:r.jsx(c,{params:[{type:"search",value:e,label:e}]}),linkIcon:!0},{groupId:"1",title:"Nytt søk + filter",label:r.jsx(c,{params:[{type:"search",value:e,label:e},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 1",label:r.jsx(c,{params:[{type:"search",value:e,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 2",label:r.jsx(c,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]};return r.jsx(u,{...a,value:e,onChange:s=>t(s.target.value),onClear:()=>t(""),menu:o})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Søk'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Søk',
    value: 'Test',
    onClear: () => {
      console.log('Clear');
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
  const [q, setQ] = useState('');
  return <SearchField {...args} value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />;
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
  const [q, setQ] = useState('');
  return <SearchField {...args} collapsible value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />;
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
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
}`,...h.parameters?.docs?.source}}};const oe=["Default","ClearButton","DebouncedQuery","Controlled","Collapsible","Autocomplete"];export{h as Autocomplete,p as ClearButton,g as Collapsible,d as Controlled,m as DebouncedQuery,i as Default,oe as __namedExportsOrder,ae as default};
