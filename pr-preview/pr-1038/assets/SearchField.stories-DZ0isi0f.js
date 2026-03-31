import{r as n,j as r}from"./iframe-CFpZEpOT.js";import{S as g}from"./SearchField-7ltHAmFU.js";import{Q as u}from"./QueryLabel-DYFcubLK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CMCH-iYZ.js";import"./MagnifyingGlass-C_OdGmS9.js";import"./useId-Bpa1--zZ.js";import"./XMark-DsxdrTa7.js";import"./FieldBase-BKE2EVCO.js";import"./Typography-CFFVnqbI.js";import"./useHighlightedText-DHCy4ZgC.js";import"./Skeleton-BxeTCVQ2.js";import"./Label-CTb5NEuA.js";import"./index-CBNpaYnn.js";import"./use-merge-refs-DZRIBNsE.js";import"./lite-DaUVFjkg.js";import"./Input-D08OnHI6.js";import"./input-BOf7pxRD.js";import"./Button-C0rUC1sb.js";import"./button-DcOM5j_b.js";import"./MenuListItem-DCTPpMWv.js";import"./MenuListHeading-BZULpIAa.js";import"./MenuItem-BNeTh361.js";import"./ItemMedia-DMrQkYiw.js";import"./Avatar-BgJ1eR8E.js";import"./AvatarGroup-CCJxayqM.js";import"./Icon-CcpuJg5J.js";import"./Checkmark-DLdUb-vP.js";import"./Heading-Biv3WsI7.js";import"./ChevronRight-Ca_cSWgJ.js";import"./Badge-CiO-ESqG.js";import"./useMenu-BHNp1hvr.js";import"./InformationSquare-DvM0m3_a.js";import"./Plus-BvInV0-S.js";const te={title:"Forms/SearchField",component:g,tags:["autodocs"],parameters:{},args:{name:"search",placeholder:"Søk"}},c={args:{placeholder:"Søk"}},i={args:{placeholder:"Søk",value:"Test",onClear:()=>{console.log("Clear")}}},p=o=>{const[e,t]=n.useState("");function s(l,h){const[y,f]=n.useState(l);return n.useEffect(()=>{const S=setTimeout(()=>{f(l)},h);return()=>{clearTimeout(S)}},[l,h]),y}const a=s(e,500),b=e!==a;return n.useEffect(()=>{a&&console.log("Triggering API search for:",a)},[a]),r.jsx(g,{...o,loading:b,value:e,onChange:l=>t(l.target.value),onClear:()=>t("")})},m=o=>{const[e,t]=n.useState("");return r.jsx(g,{...o,value:e,onChange:s=>t(s.target.value),onClear:()=>t("")})},d=o=>{const[e,t]=n.useState(""),s={open:e.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[{groupId:"1",title:"Nytt søk",label:r.jsx(u,{params:[{type:"search",value:e,label:e}]}),linkIcon:!0},{groupId:"1",title:"Nytt søk + filter",label:r.jsx(u,{params:[{type:"search",value:e,label:e},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 1",label:r.jsx(u,{params:[{type:"search",value:e,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 2",label:r.jsx(u,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]};return r.jsx(g,{...o,value:e,onChange:a=>t(a.target.value),onClear:()=>t(""),menu:s})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
