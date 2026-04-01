import{r as n,j as r}from"./iframe-DxKlu2kD.js";import{S as g}from"./SearchField-yItf8ktv.js";import{Q as u}from"./QueryLabel-9PVapst6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWCSYHeO.js";import"./MagnifyingGlass-BSd0JI5p.js";import"./useId-_YfdAmsW.js";import"./XMark-C1fx_pyo.js";import"./FieldBase-DR6_g4FH.js";import"./Typography-iC77LYkz.js";import"./useHighlightedText-DHBtHLKn.js";import"./Skeleton-niSIm0IT.js";import"./Label-DPRrgAAI.js";import"./index-sO6KcVLH.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./Button-D78I7hWM.js";import"./button-B-2CHja_.js";import"./MenuListItem-BTPFJyFs.js";import"./MenuListHeading-BCVqt4go.js";import"./MenuItem-kNYALtyW.js";import"./ItemMedia-BBqBVaQK.js";import"./Avatar-BwF2spoI.js";import"./AvatarGroup-D_QmYd99.js";import"./Icon-CrZKj0Yv.js";import"./Checkmark-C9NR0hmL.js";import"./Heading-m7XVygop.js";import"./ChevronRight-DCeYx28-.js";import"./Badge-4TJDD2P9.js";import"./useMenu-DwMeQcTX.js";import"./InformationSquare-D9H1eLzz.js";import"./Plus-Dz67JQoo.js";const te={title:"Forms/SearchField",component:g,tags:["autodocs"],parameters:{},args:{name:"search",placeholder:"Søk"}},c={args:{placeholder:"Søk"}},i={args:{placeholder:"Søk",value:"Test",onClear:()=>{console.log("Clear")}}},p=o=>{const[e,t]=n.useState("");function s(l,h){const[y,f]=n.useState(l);return n.useEffect(()=>{const S=setTimeout(()=>{f(l)},h);return()=>{clearTimeout(S)}},[l,h]),y}const a=s(e,500),b=e!==a;return n.useEffect(()=>{a&&console.log("Triggering API search for:",a)},[a]),r.jsx(g,{...o,loading:b,value:e,onChange:l=>t(l.target.value),onClear:()=>t("")})},m=o=>{const[e,t]=n.useState("");return r.jsx(g,{...o,value:e,onChange:s=>t(s.target.value),onClear:()=>t("")})},d=o=>{const[e,t]=n.useState(""),s={open:e.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[{groupId:"1",title:"Nytt søk",label:r.jsx(u,{params:[{type:"search",value:e,label:e}]}),linkIcon:!0},{groupId:"1",title:"Nytt søk + filter",label:r.jsx(u,{params:[{type:"search",value:e,label:e},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 1",label:r.jsx(u,{params:[{type:"search",value:e,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 2",label:r.jsx(u,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]};return r.jsx(g,{...o,value:e,onChange:a=>t(a.target.value),onClear:()=>t(""),menu:s})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
