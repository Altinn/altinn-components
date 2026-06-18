import{aa as o,a7 as r}from"./iframe-3eub8g81.js";import{S as u}from"./SearchField-DQomiBHs.js";import{Q as c}from"./QueryLabel-CYu5-yfM.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BjeT7HiQ.js";import"./FieldBase-C1gDTj8R.js";import"./Typography-BfGFMo_X.js";import"./useHighlightedText-D_KrHTcm.js";import"./Field-BEYcEfWR.js";import"./Label-Dn1DYcv0.js";import"./Input-C_lNMvAW.js";import"./useMenu-DENMRGmJ.js";import"./MenuListItem-kYkVg98b.js";import"./MenuListDivider-Bx6VzZCp.js";import"./MenuListHeading-lAZfEwXv.js";import"./MenuItem-CSF12lCK.js";import"./ItemMedia-BB_XOZ97.js";import"./Avatar-CwYCtPFD.js";import"./AvatarGroup-5atDHYqT.js";import"./Checkmark-CY-7WOxt.js";import"./ItemLabel-CEuTRmIa.js";import"./Heading-Cn9WCavo.js";import"./ItemControls-DXPiBYKt.js";import"./Badge-CMPSGpEc.js";import"./Tooltip-egZN2oaV.js";import"./ChevronRight-BS_VcXFa.js";import"./InformationSquare-CORGNNV5.js";import"./Plus-BNfQnDLY.js";const Y={title:"Forms/SearchField",component:u,tags:["autodocs"],parameters:{},args:{name:"search",placeholder:"Søk"}},i={args:{placeholder:"Søk"}},p={args:{label:"Search",hideLabel:!0,placeholder:"Søk"}},d={args:{placeholder:"Søk",value:"Test",onClear:()=>{console.log("Clear")}}},m=a=>{const[e,t]=o.useState("");function n(l,S){const[f,v]=o.useState(l);return o.useEffect(()=>{const k=setTimeout(()=>{v(l)},S);return()=>{clearTimeout(k)}},[l,S]),f}const s=n(e,500),y=e!==s;return o.useEffect(()=>{s&&console.log("Triggering API search for:",s)},[s]),r.jsx(u,{...a,loading:y,value:e,onChange:l=>t(l.target.value),onClear:()=>t("")})},g=a=>{const[e,t]=o.useState("");return r.jsx(u,{...a,value:e,onChange:n=>t(n.target.value),onClear:()=>t("")})},h=a=>{const[e,t]=o.useState("");return r.jsx(u,{...a,collapsible:!0,value:e,onChange:n=>t(n.target.value),onClear:()=>t("")})},b=a=>{const[e,t]=o.useState(""),n={open:e.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[{groupId:"1",title:"Nytt søk",label:r.jsx(c,{params:[{type:"search",value:e,label:e}]}),linkIcon:!0},{groupId:"1",title:"Nytt søk + filter",label:r.jsx(c,{params:[{type:"search",value:e,label:e},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 1",label:r.jsx(c,{params:[{type:"search",value:e,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 2",label:r.jsx(c,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]};return r.jsx(u,{...a,value:e,onChange:s=>t(s.target.value),onClear:()=>t(""),menu:n})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const Z=["Default","HiddenLabel","ClearButton","DebouncedQuery","Controlled","Collapsible","Autocomplete"];export{b as Autocomplete,d as ClearButton,h as Collapsible,g as Controlled,m as DebouncedQuery,i as Default,p as HiddenLabel,Z as __namedExportsOrder,Y as default};
