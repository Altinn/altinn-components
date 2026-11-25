var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{a9 as u,a6 as l}from"./iframe-B3JK86DP.js";import{b as s}from"./SearchField-CYbBjrsH.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-Dar3Cjqj.js";import"./MenuListItem-Dv-zfi5J.js";import"./MenuListDivider-JnPQTBAl.js";import"./MenuItem-DcugXxJu.js";import"./CheckboxUncheckedIcon-DWGQqmR1.js";import"./RadioUncheckedIcon-BENOQjAf.js";import"./ItemMedia-w7Ibrgnv.js";import"./Avatar-C5zwgekh.js";import"./AvatarGroup-CljQ4hw7.js";import"./ItemLabel-UJIDw8s4.js";import"./Heading-DhZTTpsP.js";import"./useHighlightedText-DIT5s5Wk.js";import"./ItemControls-EPopScKo.js";import"./Badge-CHkrsaqO.js";import"./Tooltip-5MJkmhaO.js";import"./ChevronRight-CXXN68ww.js";import"./FieldBase-BOLpoc-t.js";import"./Typography-AZ3lf-vT.js";import"./Field-4Patn0Bt.js";import"./Label-0jV2FogB.js";import"./Input-Dn912l6M.js";import"./useMenu-RTLBsPgV.js";import"./InformationSquare-DD61y5yY.js";const z={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState"),A=["Default","WithState"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: MenuListSearchProps) => {
  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };
  const onClear = () => {
    setQ('');
  };
  return <MenuListSearch {...args} value={q} onChange={onChange} onClear={onClear} />;
}`,...r.parameters?.docs?.source}}};export{e as Default,r as WithState,A as __namedExportsOrder,z as default};
