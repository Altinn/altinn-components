var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{a9 as u,a6 as l}from"./iframe-DS_59AwM.js";import{b as s}from"./SearchField-CAjTntqL.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-l1_f6IJo.js";import"./MenuListItem-DwlAJFdA.js";import"./MenuListDivider-CucqnGV5.js";import"./MenuItem-Y-AEUpRl.js";import"./CheckboxUncheckedIcon-C7ZL4zpD.js";import"./RadioUncheckedIcon-B7iKOFAO.js";import"./ItemMedia-CcjWIfuL.js";import"./Avatar-DsQCNXZF.js";import"./AvatarGroup-yHV_WJhD.js";import"./ItemLabel-DXVwsqWf.js";import"./Heading-BZMLDowx.js";import"./useHighlightedText-Ba9mKwdy.js";import"./ItemControls-C2ZClT3B.js";import"./Badge-CF5PgN9h.js";import"./Tooltip-BBICM8wr.js";import"./ChevronRight-C7PJPgHr.js";import"./FieldBase-Bv1sQ0dY.js";import"./Typography-DXt4lEYU.js";import"./Field-DAFUCo_M.js";import"./Label-BBg6DFs6.js";import"./Input-3GNdcrOi.js";import"./useMenu-30LDsNSn.js";import"./InformationSquare-DyP2GK92.js";const z={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState"),A=["Default","WithState"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
