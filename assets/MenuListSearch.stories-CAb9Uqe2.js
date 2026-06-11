import{aa as i,a7 as c}from"./iframe-CvGAoPsc.js";import{b as o}from"./SearchField-BnKKet4K.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-B5EFcWq7.js";import"./FieldBase-DoX_7GiJ.js";import"./Typography-BnX3Du0Y.js";import"./useHighlightedText-9vbrUFu0.js";import"./Field-jyfGm65f.js";import"./Label-CufJDrgK.js";import"./Input-CQ0xvTw5.js";import"./useMenu-CZTVrDBq.js";import"./MenuListItem-CG5q7PCk.js";import"./MenuListHeading-CgytQ4SA.js";import"./MenuItem-CixWxF6L.js";import"./ItemMedia-CdB4UUVE.js";import"./Avatar-Bjc-Jmrn.js";import"./AvatarGroup-_sxbmMl3.js";import"./Checkmark-Db10x7b8.js";import"./ItemLabel-BBQQw1-7.js";import"./Heading--2u1ER42.js";import"./ItemControls-CFHaIVdN.js";import"./Badge-C_wE1QB8.js";import"./Tooltip-BfnkAeey.js";import"./ChevronRight-CMCEl43v.js";import"./index-CRXgSDNk.js";import"./InformationSquare-DmU_7K9H.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
