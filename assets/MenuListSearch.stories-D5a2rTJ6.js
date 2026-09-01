import{aa as i,a7 as c}from"./iframe-DMrRMxbq.js";import{b as o}from"./SearchField-nNatmuZA.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DofikZhZ.js";import"./FieldBase-BwVJ7Sfq.js";import"./Typography-z164oB1T.js";import"./useHighlightedText-qcaYlVq2.js";import"./Field-DxDkeKhB.js";import"./Label-CB0_8IHy.js";import"./Input-CZPP85wE.js";import"./useMenu-CNg8vInV.js";import"./MenuListItem-CATFKnlr.js";import"./MenuListDivider-CzVCr-XK.js";import"./MenuListHeading-B9JHXv6C.js";import"./MenuItem-DLpEa2I6.js";import"./ItemMedia-Dx1IKYEg.js";import"./Avatar-C6i6C6T9.js";import"./AvatarGroup-DVS-_6qx.js";import"./Checkmark-BUuDcLZs.js";import"./ItemLabel-DavwL6MJ.js";import"./Heading-BhmjWuIr.js";import"./ItemControls-DNnHu-Ez.js";import"./Badge-CzHyduDR.js";import"./Tooltip-1SJQbRAy.js";import"./ChevronRight-ngEBzgMu.js";import"./InformationSquare-C88VQYSr.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
