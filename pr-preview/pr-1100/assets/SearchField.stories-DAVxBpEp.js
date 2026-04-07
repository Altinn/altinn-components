import{r as n,j as r}from"./iframe-BTgHnb1V.js";import{S as g}from"./SearchField-Dea1MzEn.js";import{Q as u}from"./QueryLabel-CdQVl2J-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-t_Anj6Qz.js";import"./MagnifyingGlass-DQ3ccb4H.js";import"./useId-DWidDjIe.js";import"./XMark-DMQzhoj3.js";import"./FieldBase-B5jTEalp.js";import"./Typography-CR3zr5Vv.js";import"./useHighlightedText-DrZCsmQU.js";import"./Skeleton-B3M39f3D.js";import"./Label-DOnz6ye3.js";import"./index-3lpPu1ww.js";import"./use-merge-refs-8A0H_t2p.js";import"./lite-DaUVFjkg.js";import"./Input-CFaRcvTR.js";import"./input-z_rArVKU.js";import"./Button-Ccau3b8T.js";import"./button-DAOqBeHz.js";import"./MenuListItem-DKnhIWL6.js";import"./MenuListHeading-CfRWVBZN.js";import"./MenuItem-DLwUzMv1.js";import"./ItemMedia-BOGO8xTn.js";import"./Avatar-DpDT0aNa.js";import"./AvatarGroup-4I2zgroj.js";import"./Icon-PY6OftAR.js";import"./Checkmark-jKAH024b.js";import"./Heading-Ca71xFkp.js";import"./ChevronRight-DEDRS1St.js";import"./Badge-sZl2g-is.js";import"./useMenu-DSfKnhCX.js";import"./InformationSquare-BM_VTFR-.js";import"./Plus-D5thgfNG.js";const te={title:"Forms/SearchField",component:g,tags:["autodocs"],parameters:{},args:{name:"search",placeholder:"Søk"}},c={args:{placeholder:"Søk"}},i={args:{placeholder:"Søk",value:"Test",onClear:()=>{console.log("Clear")}}},p=o=>{const[e,t]=n.useState("");function s(l,h){const[y,f]=n.useState(l);return n.useEffect(()=>{const S=setTimeout(()=>{f(l)},h);return()=>{clearTimeout(S)}},[l,h]),y}const a=s(e,500),b=e!==a;return n.useEffect(()=>{a&&console.log("Triggering API search for:",a)},[a]),r.jsx(g,{...o,loading:b,value:e,onChange:l=>t(l.target.value),onClear:()=>t("")})},m=o=>{const[e,t]=n.useState("");return r.jsx(g,{...o,value:e,onChange:s=>t(s.target.value),onClear:()=>t("")})},d=o=>{const[e,t]=n.useState(""),s={open:e.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[{groupId:"1",title:"Nytt søk",label:r.jsx(u,{params:[{type:"search",value:e,label:e}]}),linkIcon:!0},{groupId:"1",title:"Nytt søk + filter",label:r.jsx(u,{params:[{type:"search",value:e,label:e},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 1",label:r.jsx(u,{params:[{type:"search",value:e,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 2",label:r.jsx(u,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]};return r.jsx(g,{...o,value:e,onChange:a=>t(a.target.value),onClear:()=>t(""),menu:s})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
