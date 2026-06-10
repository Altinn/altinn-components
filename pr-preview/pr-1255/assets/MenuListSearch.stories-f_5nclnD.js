import{aa as i,a7 as c}from"./iframe-Dm8TtyEm.js";import{b as o}from"./SearchField-BpAQrR42.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-CNs4qd9f.js";import"./FieldBase-CGX4UQb4.js";import"./Typography-DQcL3Ryl.js";import"./useHighlightedText-C_daNKpv.js";import"./Field-C6fjvq8K.js";import"./Label-CNUH_E96.js";import"./Input-CDGaFfUN.js";import"./useMenu-C6oFKHtp.js";import"./MenuListItem-DVBeGhr8.js";import"./MenuListHeading-B94v3TIt.js";import"./MenuItem-BrCYHgzq.js";import"./ItemMedia-Cx5_mc3M.js";import"./Avatar-HtfurA5B.js";import"./AvatarGroup-BsqgGW-3.js";import"./Checkmark-BrBHBs34.js";import"./ItemLabel-dygaK8X7.js";import"./Heading-o839anme.js";import"./ItemControls-DU_1Chfl.js";import"./Badge-BUZLj2O_.js";import"./Tooltip-CnXzuJ5u.js";import"./ChevronRight-C5Kx_riS.js";import"./index-nln3YNzx.js";import"./InformationSquare-DpmHVTHW.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: MenuListSearchProps) => {
  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };
  const onClear = () => {
    setQ('');
  };
  return <MenuListSearch {...args} value={q} onChange={onChange} onClear={onClear} />;
}`,...e.parameters?.docs?.source}}};const k=["Default","WithState"];export{t as Default,e as WithState,k as __namedExportsOrder,R as default};
