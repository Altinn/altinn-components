var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{a9 as u,a6 as l}from"./iframe-Dhr5kNpI.js";import{b as s}from"./SearchField-Daiwk--y.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-qp743Sh-.js";import"./MenuListItem-DSvu2y_O.js";import"./MenuListDivider-BDnQXOa-.js";import"./MenuItem-B7bCDHld.js";import"./CheckboxUncheckedIcon-CniL-5fW.js";import"./RadioUncheckedIcon-DgOCQagW.js";import"./ItemMedia-C0ReNhrI.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./ItemLabel-D7TXcLH5.js";import"./Heading-DmbuxGS8.js";import"./useHighlightedText-D3bt4yNA.js";import"./ItemControls-CiyO-qr-.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./ChevronRight-BnrL2uT7.js";import"./FieldBase-C_75hFZi.js";import"./Typography-CiPthQfi.js";import"./Field-BxmDkK6m.js";import"./Label-DR9BIR4K.js";import"./Input-jpu5auKu.js";import"./useMenu-BGMvW90K.js";import"./InformationSquare-B4yRDNra.js";const z={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState"),A=["Default","WithState"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
