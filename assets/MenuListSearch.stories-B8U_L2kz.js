import{r as i,j as c}from"./iframe-CPVbSj3C.js";import{M as o}from"./SearchField-B-nnAALe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-yq3MoC.js";import"./MagnifyingGlass-BOvUZuLn.js";import"./useId-CeU55pH0.js";import"./XMark-DWjKCZtX.js";import"./FieldBase-COzHnWja.js";import"./Typography-CiUpHFvi.js";import"./useHighlightedText-cpJ8B6bV.js";import"./Skeleton-O-y9i0gG.js";import"./Label-VN1m6SC8.js";import"./index-DZJ03fJe.js";import"./use-merge-refs-14k-yabz.js";import"./lite-DaUVFjkg.js";import"./Input-BYE1y6gH.js";import"./input-fAELYQ1t.js";import"./Button-D-Q0AT9s.js";import"./button-ChrWDnnK.js";import"./MenuListItem-BWz4VDTU.js";import"./MenuListHeading-2OJeU36d.js";import"./MenuItem-CBTlmB_y.js";import"./ItemMedia-C5hW-xxB.js";import"./Avatar-Ctx52zko.js";import"./AvatarGroup-Dg-4Llzy.js";import"./Icon-DFTXBWnL.js";import"./Checkmark-D2vzhSBC.js";import"./Heading-Bxz0tryo.js";import"./ItemControls-DA5Yy7AS.js";import"./ChevronRight-D8cN60Uo.js";import"./Badge-DYvIbN7v.js";import"./Tooltip-B8o2LWCL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CE-qOAep.js";import"./index-B7mUU4Rd.js";import"./InformationSquare-y17ZYOyi.js";const N={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: MenuListSearchProps) => {
  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };
  const onClear = () => {
    setQ('');
  };
  return <MenuListSearch {...args} value={q} onChange={onChange} onClear={onClear} />;
}`,...r.parameters?.docs?.source}}};const U=["Default","WithState"];export{t as Default,r as WithState,U as __namedExportsOrder,N as default};
