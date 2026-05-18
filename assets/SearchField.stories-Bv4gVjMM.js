import{r as n,j as t}from"./iframe-Bk_HwK4l.js";import{S as u}from"./SearchField-CcfOce7B.js";import{Q as c}from"./QueryLabel-CZc9dsnK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj80ru-z.js";import"./MagnifyingGlass-BtHw2Y5y.js";import"./useId-WArpTTRC.js";import"./XMark-BlM7H2uk.js";import"./FieldBase-zuKERQJx.js";import"./Typography-9_XA-VKE.js";import"./useHighlightedText-BjD5CEaG.js";import"./Skeleton-CZ4GHxMp.js";import"./Label-D1l41OtR.js";import"./index-RvDLUlZV.js";import"./use-merge-refs-BQmlI6PU.js";import"./lite-DaUVFjkg.js";import"./Input-kPMzbuYu.js";import"./input-6lO9tGv_.js";import"./Button-DXv-zg1S.js";import"./button-DRIhbrAI.js";import"./MenuListItem-p80RBs_A.js";import"./MenuListHeading-RVi62nau.js";import"./MenuItem-BW0J3eqZ.js";import"./ItemMedia-QvgC3e5a.js";import"./Avatar-B1R5c004.js";import"./AvatarGroup-CkGvw6sL.js";import"./Icon-BbsTdu7G.js";import"./Checkmark-BwmprQFp.js";import"./Heading-D6li-Zgs.js";import"./ItemControls-DoACt_K_.js";import"./ChevronRight-BEdxYQXL.js";import"./Badge-s1Xx1f1P.js";import"./Tooltip-B6sw6IF5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BNIm_aif.js";import"./index-BL_SwWgZ.js";import"./InformationSquare-D1WxufmY.js";import"./Plus-Db6y3gEP.js";const le={title:"Forms/SearchField",component:u,tags:["autodocs"],parameters:{},args:{name:"search",placeholder:"Søk"}},i={args:{placeholder:"Søk"}},p={args:{label:"Search",hideLabel:!0,placeholder:"Søk"}},m={args:{placeholder:"Søk",value:"Test",onClear:()=>{console.log("Clear")}}},d=a=>{const[e,r]=n.useState("");function o(l,S){const[f,v]=n.useState(l);return n.useEffect(()=>{const k=setTimeout(()=>{v(l)},S);return()=>{clearTimeout(k)}},[l,S]),f}const s=o(e,500),y=e!==s;return n.useEffect(()=>{s&&console.log("Triggering API search for:",s)},[s]),t.jsx(u,{...a,loading:y,value:e,onChange:l=>r(l.target.value),onClear:()=>r("")})},g=a=>{const[e,r]=n.useState("");return t.jsx(u,{...a,value:e,onChange:o=>r(o.target.value),onClear:()=>r("")})},h=a=>{const[e,r]=n.useState("");return t.jsx(u,{...a,collapsible:!0,value:e,onChange:o=>r(o.target.value),onClear:()=>r("")})},b=a=>{const[e,r]=n.useState(""),o={open:e.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[{groupId:"1",title:"Nytt søk",label:t.jsx(c,{params:[{type:"search",value:e,label:e}]}),linkIcon:!0},{groupId:"1",title:"Nytt søk + filter",label:t.jsx(c,{params:[{type:"search",value:e,label:e},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 1",label:t.jsx(c,{params:[{type:"search",value:e,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 2",label:t.jsx(c,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]};return t.jsx(u,{...a,value:e,onChange:s=>r(s.target.value),onClear:()=>r(""),menu:o})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Søk'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    hideLabel: true,
    placeholder: 'Søk'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Søk',
    value: 'Test',
    onClear: () => {
      console.log('Clear');
    }
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
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
}`,...b.parameters?.docs?.source}}};const ue=["Default","HiddenLabel","ClearButton","DebouncedQuery","Controlled","Collapsible","Autocomplete"];export{b as Autocomplete,m as ClearButton,h as Collapsible,g as Controlled,d as DebouncedQuery,i as Default,p as HiddenLabel,ue as __namedExportsOrder,le as default};
