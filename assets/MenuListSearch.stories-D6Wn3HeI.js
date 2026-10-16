var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{aa as u,a7 as l}from"./iframe-ITS-2hJr.js";import{b as s}from"./SearchField-BL8KL877.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-CFIOBciK.js";import"./FieldBase-CQGaRX-e.js";import"./Typography-8PAPF6ji.js";import"./useHighlightedText-B2HymlD1.js";import"./Field-D1z-R59Q.js";import"./Label-o7Cne8nH.js";import"./Input-eieVqTh_.js";import"./useMenu-Cz88jtED.js";import"./MenuListItem-miDecag1.js";import"./MenuListDivider-BBgMhND-.js";import"./MenuListHeading-9OnaDQ2l.js";import"./MenuItem-D7bepgio.js";import"./ItemMedia-pMPhCUmI.js";import"./Avatar-BB-8uFGa.js";import"./AvatarGroup-BWnxkhGl.js";import"./Checkmark-BcDZo_1U.js";import"./ItemLabel-CppZedji.js";import"./Heading-Bdv6LYG9.js";import"./ItemControls-f_wXUIix.js";import"./Badge-BVHpVrLu.js";import"./Tooltip-4yQO3AdC.js";import"./ChevronRight-DGdpC6SO.js";import"./InformationSquare-Cv25qdYy.js";const z={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState");e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const A=["Default","WithState"];export{e as Default,r as WithState,A as __namedExportsOrder,z as default};
