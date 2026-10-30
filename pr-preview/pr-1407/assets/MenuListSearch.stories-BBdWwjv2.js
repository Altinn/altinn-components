var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{a8 as u,a5 as l}from"./iframe-CmcSEjvS.js";import{b as s}from"./SearchField-DQeX1ZYV.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-C2kDbxXn.js";import"./MenuListItem-BL-id_u-.js";import"./MenuListHeading-BKPqFrC5.js";import"./MenuItem-BJhn9r_O.js";import"./CheckboxUncheckedIcon-BBoJFSSq.js";import"./RadioUncheckedIcon-VgJlolIv.js";import"./ItemMedia-BefRyocx.js";import"./Avatar-e7KasoHp.js";import"./AvatarGroup-CK0XwNSh.js";import"./ItemLabel-s_xPF5R8.js";import"./Heading-vmMoflPs.js";import"./useHighlightedText-DJAL4JcK.js";import"./ItemControls-YGZP0Vjk.js";import"./Badge-DDzGMVSy.js";import"./Tooltip-BzKHjYiv.js";import"./ChevronRight-B5wtiA4y.js";import"./FieldBase-C-IkhlpM.js";import"./Typography-sASlV-kd.js";import"./Field-00i3_VLV.js";import"./Label-C2oW91xs.js";import"./Input-C0nOO2ZR.js";import"./useMenu-C4pen0si.js";import"./MenuListDivider-wZXMjqHS.js";import"./InformationSquare-6xY-3cyl.js";const A={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState"),B=["Default","WithState"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};export{e as Default,r as WithState,B as __namedExportsOrder,A as default};
