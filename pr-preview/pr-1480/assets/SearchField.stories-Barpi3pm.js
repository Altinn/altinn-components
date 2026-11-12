var Q=Object.defineProperty;var t=(a,e)=>Q(a,"name",{value:e,configurable:!0});import{aa as s,a7 as n}from"./iframe-SD2JkkBx.js";import{S as c}from"./SearchField-CtzaZVEy.js";import{Q as i}from"./QueryLabel-RT7WXA3k.js";import"./preload-helper-Cc2_yIPf.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-99de9OEC.js";import"./MenuListItem-D9pwYymO.js";import"./MenuListDivider-B9dhr0kB.js";import"./MenuItem-DtEaYpyr.js";import"./CheckboxUncheckedIcon-DpMW6Wp2.js";import"./RadioUncheckedIcon-tgX_k-4X.js";import"./ItemMedia-WgmEjgHK.js";import"./Avatar-ChkBInZc.js";import"./AvatarGroup-DfwMjEOK.js";import"./ItemLabel-BHU5o8nH.js";import"./Heading-Bxu0IPlw.js";import"./useHighlightedText-BOE_uc-4.js";import"./ItemControls-CYQHXshs.js";import"./Badge-BbMhpBgn.js";import"./Tooltip-CTbeRzRw.js";import"./ChevronRight-N_DPzqc2.js";import"./FieldBase-BELwbvmB.js";import"./Typography-DYbohGA0.js";import"./Field-C50xRSHN.js";import"./Label-BJSodJlT.js";import"./Input-Fr_9ZdVX.js";import"./useMenu-Bkg094iM.js";import"./InformationSquare-CgIS3Fvj.js";import"./Plus-6xBOzmi7.js";const te={title:"Forms/SearchField",component:c,tags:["autodocs"],parameters:{},args:{name:"search",placeholder:"Søk"}},p={args:{placeholder:"Søk"}},d={args:{label:"Search",hideLabel:!0,placeholder:"Søk"}},m={args:{placeholder:"Søk",value:"Test",onClear:t(()=>{console.log("Clear")},"onClear")}},g=t(a=>{const[e,r]=s.useState("");function o(u,y){const[v,k]=s.useState(u);return s.useEffect(()=>{const C=setTimeout(()=>{k(u)},y);return()=>{clearTimeout(C)}},[u,y]),v}t(o,"useDebounce");const l=o(e,500),f=e!==l;return s.useEffect(()=>{l&&console.log("Triggering API search for:",l)},[l]),n.jsx(c,{...a,loading:f,value:e,onChange:t(u=>r(u.target.value),"onChange"),onClear:t(()=>r(""),"onClear")})},"DebouncedQuery"),h=t(a=>{const[e,r]=s.useState("");return n.jsx(c,{...a,value:e,onChange:t(o=>r(o.target.value),"onChange"),onClear:t(()=>r(""),"onClear")})},"Controlled"),b=t(a=>{const[e,r]=s.useState("");return n.jsx(c,{...a,collapsible:!0,value:e,onChange:t(o=>r(o.target.value),"onChange"),onClear:t(()=>r(""),"onClear")})},"Collapsible"),S=t(a=>{const[e,r]=s.useState(""),o={open:e.length>=1,onClose:t(()=>{console.log("Close")},"onClose"),groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[{groupId:"1",title:"Nytt søk",label:n.jsx(i,{params:[{type:"search",value:e,label:e}]}),linkIcon:!0},{groupId:"1",title:"Nytt søk + filter",label:n.jsx(i,{params:[{type:"search",value:e,label:e},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 1",label:n.jsx(i,{params:[{type:"search",value:e,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2",title:"Lagret søk 2",label:n.jsx(i,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]};return n.jsx(c,{...a,value:e,onChange:t(l=>r(l.target.value),"onChange"),onClear:t(()=>r(""),"onClear"),menu:o})},"Autocomplete"),re=["Default","HiddenLabel","ClearButton","DebouncedQuery","Controlled","Collapsible","Autocomplete"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Søk'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    hideLabel: true,
    placeholder: 'Søk'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Søk',
    value: 'Test',
    onClear: () => {
      console.log('Clear');
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
  const [q, setQ] = useState('');
  return <SearchField {...args} value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />;
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
  const [q, setQ] = useState('');
  return <SearchField {...args} collapsible value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />;
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(args: SearchFieldProps) => {
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
}`,...S.parameters?.docs?.source}}};export{S as Autocomplete,m as ClearButton,b as Collapsible,h as Controlled,g as DebouncedQuery,p as Default,d as HiddenLabel,re as __namedExportsOrder,te as default};
