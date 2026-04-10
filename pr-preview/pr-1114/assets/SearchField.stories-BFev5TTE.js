import{r as n,j as r}from"./iframe-CEV_bE_y.js";import{S as u}from"./SearchField-C9XAkfHX.js";import{Q as c}from"./QueryLabel-DfLFOOHP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGpVDQnA.js";import"./MagnifyingGlass-D6I6hP_d.js";import"./useId-BHfJgDBc.js";import"./XMark-ByuttVGc.js";import"./FieldBase-D397wWlI.js";import"./Typography-BMVOyH8m.js";import"./useHighlightedText-DdOlAfmT.js";import"./Skeleton-cNOPtI7P.js";import"./Label-Cb-tqHHM.js";import"./index-Cr9j_S5O.js";import"./use-merge-refs-Dqc3iuE1.js";import"./lite-DaUVFjkg.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./Button-Camg-mBZ.js";import"./button-B-6jfb5R.js";import"./MenuListItem-DvZVWiZY.js";import"./MenuListHeading-BxT-phiC.js";import"./MenuItem-D6Egs8SC.js";import"./ItemMedia-DIGN_0r9.js";import"./Avatar-Cf5aI0ZG.js";import"./AvatarGroup-DHx4XjXe.js";import"./Icon-BwPDmLy2.js";import"./Checkmark-D-WBqViW.js";import"./Heading-CjHEKkoD.js";import"./ItemControls-Dsxd0fj6.js";import"./ChevronRight-Dck0Zh1j.js";import"./Badge-BVMw9Rw0.js";import"./useMenu-EIG5MfCS.js";import"./InformationSquare-C-romZo4.js";import"./Plus-D1UdPMNR.js";const ae={title:"Forms/SearchField",component:u,tags:["autodocs"],parameters:{},args:{name:"search",placeholder:"Søk"}},i={args:{placeholder:"Søk"}},p={args:{placeholder:"Søk",value:"Test",onClear:()=>{console.log("Clear")}}},m=a=>{const[e,t]=n.useState("");function o(l,b){const[f,S]=n.useState(l);return n.useEffect(()=>{const v=setTimeout(()=>{S(l)},b);return()=>{clearTimeout(v)}},[l,b]),f}const s=o(e,500),y=e!==s;return n.useEffect(()=>{s&&console.log("Triggering API search for:",s)},[s]),r.jsx(u,{...a,loading:y,value:e,onChange:l=>t(l.target.value),onClear:()=>t("")})},d=a=>{const[e,t]=n.useState("");return r.jsx(u,{...a,value:e,onChange:o=>t(o.target.value),onClear:()=>t("")})},g=a=>{const[e,t]=n.useState("");return r.jsx(u,{...a,collapsible:!0,value:e,onChange:o=>t(o.target.value),onClear:()=>t("")})},h=a=>{const[e,t]=n.useState(""),o={open:e.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[{groupId:"1",title:"Nytt søk",label:r.jsx(c,{params:[{type:"search",value:e,label:e}]}),linkIcon:!0},{groupId:"1",title:"Nytt søk + filter",label:r.jsx(c,{params:[{type:"search",value:e,label:e},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 1",label:r.jsx(c,{params:[{type:"search",value:e,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 2",label:r.jsx(c,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]};return r.jsx(u,{...a,value:e,onChange:s=>t(s.target.value),onClear:()=>t(""),menu:o})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
