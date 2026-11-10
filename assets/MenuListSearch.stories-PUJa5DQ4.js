var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{a9 as u,a6 as l}from"./iframe-CfESZwGq.js";import{b as s}from"./SearchField-Dzjcb6Jc.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-CdYCPvzC.js";import"./MenuListItem-DFvxTJo7.js";import"./MenuListDivider-PhbjEgIJ.js";import"./MenuItem-DfUUgYTt.js";import"./CheckboxUncheckedIcon-8mxNE8Kh.js";import"./RadioUncheckedIcon-BTuDB-oi.js";import"./ItemMedia-av47GhhR.js";import"./Avatar-DD7mVb1C.js";import"./AvatarGroup-BU05kps4.js";import"./ItemLabel-Bf911ckJ.js";import"./Heading-BMVjBYv7.js";import"./useHighlightedText-DZWCzlXV.js";import"./ItemControls-m0GxRmTW.js";import"./Badge-pBqwugki.js";import"./Tooltip-DUaFgqyq.js";import"./ChevronRight-B74pzmXz.js";import"./FieldBase-B5R0NBwO.js";import"./Typography-DtLS48Hu.js";import"./Field-B6D7FR_A.js";import"./Label-C598VR2I.js";import"./Input-C1qnV1Va.js";import"./useMenu-DCL6y2xK.js";import"./InformationSquare-BWZxY-Ir.js";const z={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState"),A=["Default","WithState"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
