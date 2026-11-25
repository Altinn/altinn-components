var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{a9 as u,a6 as l}from"./iframe-CZm9Z2L_.js";import{b as s}from"./SearchField-Cj8KK4lS.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-DwPErScE.js";import"./MenuListItem-BwtayZGz.js";import"./MenuListDivider-CEL60lz2.js";import"./MenuItem-BBEZ09Ze.js";import"./CheckboxUncheckedIcon-B2FVZ7uO.js";import"./RadioUncheckedIcon-BajGCIeL.js";import"./ItemMedia-CpjA7nnT.js";import"./Avatar-BfR_UP2W.js";import"./AvatarGroup-z1q2Yw0e.js";import"./ItemLabel-B3mLAUUV.js";import"./Heading-CGvkj5VV.js";import"./useHighlightedText-0BBntNc4.js";import"./ItemControls-1WPti-Pt.js";import"./Badge-DcBwCaoO.js";import"./Tooltip-CnehfAFo.js";import"./ChevronRight-MmDri0bt.js";import"./FieldBase-BiQdP4ez.js";import"./Typography-99BUGcV3.js";import"./Field-5TCcBbbM.js";import"./Label-BT4-swg_.js";import"./Input-BcwXpX3S.js";import"./useMenu-czaSJY_k.js";import"./InformationSquare-C62nR7w8.js";const z={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState"),A=["Default","WithState"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
