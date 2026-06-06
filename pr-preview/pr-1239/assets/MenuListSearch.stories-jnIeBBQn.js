import{aa as i,a7 as c}from"./iframe-azCfu0oF.js";import{b as o}from"./SearchField-BxcNLwFn.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-sqIKuSMh.js";import"./FieldBase-CGNAcfuA.js";import"./Typography-CWMVViTm.js";import"./useHighlightedText-BA5UWeOm.js";import"./Field-DqJ_4ymP.js";import"./Label-Fg6nLSp0.js";import"./Input-B4WsPqAp.js";import"./useMenu-BCjKWSQ9.js";import"./MenuListItem-BqMqYYtc.js";import"./MenuListHeading-Be6eRNXB.js";import"./MenuItem-DQe7kQkg.js";import"./ItemMedia-BlulKlBL.js";import"./Avatar-B6mgyHuO.js";import"./AvatarGroup-BFb9xeKa.js";import"./Checkmark-DMfmeL08.js";import"./ItemLabel-CkTR7bil.js";import"./Heading-BxIru1wm.js";import"./ItemControls-D1geOcjK.js";import"./Badge-CtmzFrHa.js";import"./Tooltip-DFhjbzqi.js";import"./ChevronRight-DmbA9yvG.js";import"./index-BVE0v-uN.js";import"./InformationSquare-jmbeCJCU.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
