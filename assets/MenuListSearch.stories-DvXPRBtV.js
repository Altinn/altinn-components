import{aa as i,a7 as c}from"./iframe-DdvxY_xq.js";import{b as o}from"./SearchField-Cr3Gi8TV.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BNJradcO.js";import"./FieldBase-DD97eycm.js";import"./Typography-CUBjJcUl.js";import"./useHighlightedText-BFt57PCX.js";import"./Field-Dc25EUil.js";import"./Label-CJtMWK76.js";import"./Input-2Gn2X0Ml.js";import"./useMenu-Cr8gFQCV.js";import"./MenuListItem-BiOJri4m.js";import"./MenuListHeading-CMTKGvH9.js";import"./MenuItem-L68RSDFn.js";import"./ItemMedia-DUTgrI06.js";import"./Avatar-BkRf-LcA.js";import"./AvatarGroup-o6Z87nDX.js";import"./Checkmark-DJVRCLhU.js";import"./ItemLabel-C58CsJMo.js";import"./Heading-CE6yLC7h.js";import"./ItemControls-DoOKV45e.js";import"./Badge-CGTcd0en.js";import"./Tooltip-BRmZYzim.js";import"./ChevronRight-C3Cb2zNm.js";import"./index-BdOTeIXC.js";import"./InformationSquare-CvBtG7YX.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
