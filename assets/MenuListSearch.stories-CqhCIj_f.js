import{aa as i,a7 as c}from"./iframe-DWR_BPge.js";import{b as o}from"./SearchField-MQHHZ8_3.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-G_PIqG58.js";import"./FieldBase-BMAVe4Iy.js";import"./Typography-Ck9DnhQz.js";import"./useHighlightedText-CxSGKcWS.js";import"./Field-Ck35a6Qp.js";import"./Label-BsbeMro6.js";import"./Input-_0Vw9ldu.js";import"./useMenu-D6mVZHWX.js";import"./MenuListItem-fkd7gaum.js";import"./MenuListHeading-CnnWm4Yf.js";import"./MenuItem-hCzlas21.js";import"./ItemMedia-CNbHl28k.js";import"./Avatar-Cok-GZxK.js";import"./AvatarGroup-CXLQt8Ir.js";import"./Checkmark-DJ-994GJ.js";import"./ItemLabel-D6TsLy-F.js";import"./Heading-DZv3ITVf.js";import"./ItemControls-BuEVWR3X.js";import"./Badge-DkIfMZHe.js";import"./Tooltip-DTF1wjLo.js";import"./ChevronRight-Byhvri5k.js";import"./index-Cf984nsL.js";import"./InformationSquare-DScDoZl7.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
