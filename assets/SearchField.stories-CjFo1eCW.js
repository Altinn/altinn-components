import{r as n,j as r}from"./iframe-CU9tIbvZ.js";import{S as u}from"./SearchField-CWeqUa0W.js";import{Q as c}from"./QueryLabel-B_RPNkEN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bd_n44R2.js";import"./MagnifyingGlass-CpZlhX9q.js";import"./useId-BEikXtHv.js";import"./XMark-DTYd927G.js";import"./FieldBase-Bc5lvX-i.js";import"./Typography-w6SEqUo0.js";import"./useHighlightedText-okRrJvjD.js";import"./Skeleton-WB8_C3gk.js";import"./Label-BURQuXSo.js";import"./index-ByNurdCO.js";import"./use-merge-refs-BZYQG8M3.js";import"./lite-DaUVFjkg.js";import"./Input-C4CEDonn.js";import"./input-BB0Zu-vu.js";import"./Button-DwluG-LJ.js";import"./button-DfPuT9nv.js";import"./MenuListItem-DwYyHEmE.js";import"./MenuListHeading-kMHXlGu4.js";import"./MenuItem-B01BWq_H.js";import"./ItemMedia-DuuCC0AM.js";import"./Avatar-CPYUWVLR.js";import"./AvatarGroup-D82OEK4D.js";import"./Icon-BBvHNxu7.js";import"./Checkmark-DOBFSC3X.js";import"./Heading-DKJvmFhb.js";import"./ItemControls-BgF8Asgd.js";import"./ChevronRight-XlyxhDjC.js";import"./Badge-C-yjP1nL.js";import"./Tooltip-Gn5m6ZxQ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CLh8gMuU.js";import"./index-DdmkzICU.js";import"./InformationSquare-Dq6QQdGV.js";import"./Plus-3VXDUyQo.js";const se={title:"Forms/SearchField",component:u,tags:["autodocs"],parameters:{},args:{name:"search",placeholder:"Søk"}},i={args:{placeholder:"Søk"}},p={args:{placeholder:"Søk",value:"Test",onClear:()=>{console.log("Clear")}}},m=a=>{const[e,t]=n.useState("");function o(l,b){const[f,S]=n.useState(l);return n.useEffect(()=>{const v=setTimeout(()=>{S(l)},b);return()=>{clearTimeout(v)}},[l,b]),f}const s=o(e,500),y=e!==s;return n.useEffect(()=>{s&&console.log("Triggering API search for:",s)},[s]),r.jsx(u,{...a,loading:y,value:e,onChange:l=>t(l.target.value),onClear:()=>t("")})},d=a=>{const[e,t]=n.useState("");return r.jsx(u,{...a,value:e,onChange:o=>t(o.target.value),onClear:()=>t("")})},g=a=>{const[e,t]=n.useState("");return r.jsx(u,{...a,collapsible:!0,value:e,onChange:o=>t(o.target.value),onClear:()=>t("")})},h=a=>{const[e,t]=n.useState(""),o={open:e.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[{groupId:"1",title:"Nytt søk",label:r.jsx(c,{params:[{type:"search",value:e,label:e}]}),linkIcon:!0},{groupId:"1",title:"Nytt søk + filter",label:r.jsx(c,{params:[{type:"search",value:e,label:e},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 1",label:r.jsx(c,{params:[{type:"search",value:e,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 2",label:r.jsx(c,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]};return r.jsx(u,{...a,value:e,onChange:s=>t(s.target.value),onClear:()=>t(""),menu:o})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const le=["Default","ClearButton","DebouncedQuery","Controlled","Collapsible","Autocomplete"];export{h as Autocomplete,p as ClearButton,g as Collapsible,d as Controlled,m as DebouncedQuery,i as Default,le as __namedExportsOrder,se as default};
