var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{a9 as u,a6 as l}from"./iframe-Cb83cNHz.js";import{b as s}from"./SearchField-HWu0obAx.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-C02McN1l.js";import"./MenuListItem-Ddq1rF2u.js";import"./MenuListDivider-CU0QYw1K.js";import"./MenuItem-D8XMh2RI.js";import"./CheckboxUncheckedIcon-DNQ5ph0B.js";import"./RadioUncheckedIcon-CIyf3y8X.js";import"./ItemMedia-DqOX_qxk.js";import"./Avatar-CO1wzsxc.js";import"./AvatarGroup-DvuSBfuR.js";import"./ItemLabel-BEqC8Tjb.js";import"./Heading-I2bz7uBQ.js";import"./useHighlightedText-DXF5vSCe.js";import"./ItemControls-B2ksNOht.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./ChevronRight-C-6CVVq7.js";import"./FieldBase-DBBKjPwf.js";import"./Typography-BPADIB9F.js";import"./Field-SexvxzIl.js";import"./Label-CzmEce_d.js";import"./Input-DdatSh7d.js";import"./useMenu-D3abljbA.js";import"./InformationSquare-BiO92rri.js";const z={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState"),A=["Default","WithState"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
