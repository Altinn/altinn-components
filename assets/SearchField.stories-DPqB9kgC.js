import{r as n,j as r}from"./iframe-DpqvNfuX.js";import{S as u}from"./SearchField-B4PsSxTf.js";import{Q as c}from"./QueryLabel-b0e8fvd2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ct2h27FF.js";import"./MagnifyingGlass-oMKY7BYp.js";import"./useId-BXmkKvJa.js";import"./XMark-D5GqdRxj.js";import"./FieldBase-CwbZRzDX.js";import"./Typography-7MtHaiXa.js";import"./useHighlightedText-CsoqNVCh.js";import"./Skeleton-CUXlhXSK.js";import"./Label-DGyVWTo1.js";import"./index-C4Ss_iIN.js";import"./use-merge-refs-C3UJEavz.js";import"./lite-DaUVFjkg.js";import"./Input-CtghcgQm.js";import"./input-AC6H3fN5.js";import"./Button-2gJDIHFD.js";import"./button-B0qBlS1p.js";import"./MenuListItem-ydSncMmo.js";import"./MenuListHeading-C8YiegkQ.js";import"./MenuItem-DsVjpCyh.js";import"./ItemMedia-UuJJBLbY.js";import"./Avatar-BnDDwZQL.js";import"./AvatarGroup-fDT9dP8b.js";import"./Icon-DaddCVMS.js";import"./Checkmark-B0EPfKD4.js";import"./Heading-CsYSWfhV.js";import"./ChevronRight-l4sUB0S3.js";import"./Badge-DH_aKElc.js";import"./useMenu-CL8JxMzd.js";import"./InformationSquare-x_nyg8Lo.js";import"./Plus-i3IwH-31.js";const re={title:"Forms/SearchField",component:u,tags:["autodocs"],parameters:{},args:{name:"search",placeholder:"Søk"}},i={args:{placeholder:"Søk"}},p={args:{placeholder:"Søk",value:"Test",onClear:()=>{console.log("Clear")}}},m=a=>{const[e,t]=n.useState("");function o(l,b){const[f,S]=n.useState(l);return n.useEffect(()=>{const v=setTimeout(()=>{S(l)},b);return()=>{clearTimeout(v)}},[l,b]),f}const s=o(e,500),y=e!==s;return n.useEffect(()=>{s&&console.log("Triggering API search for:",s)},[s]),r.jsx(u,{...a,loading:y,value:e,onChange:l=>t(l.target.value),onClear:()=>t("")})},d=a=>{const[e,t]=n.useState("");return r.jsx(u,{...a,value:e,onChange:o=>t(o.target.value),onClear:()=>t("")})},g=a=>{const[e,t]=n.useState("");return r.jsx(u,{...a,collapsible:!0,value:e,onChange:o=>t(o.target.value),onClear:()=>t("")})},h=a=>{const[e,t]=n.useState(""),o={open:e.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[{groupId:"1",title:"Nytt søk",label:r.jsx(c,{params:[{type:"search",value:e,label:e}]}),linkIcon:!0},{groupId:"1",title:"Nytt søk + filter",label:r.jsx(c,{params:[{type:"search",value:e,label:e},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 1",label:r.jsx(c,{params:[{type:"search",value:e,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 2",label:r.jsx(c,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]};return r.jsx(u,{...a,value:e,onChange:s=>t(s.target.value),onClear:()=>t(""),menu:o})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const ae=["Default","ClearButton","DebouncedQuery","Controlled","Collapsible","Autocomplete"];export{h as Autocomplete,p as ClearButton,g as Collapsible,d as Controlled,m as DebouncedQuery,i as Default,ae as __namedExportsOrder,re as default};
