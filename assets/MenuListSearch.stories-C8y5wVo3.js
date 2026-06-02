import{aa as i,a7 as c}from"./iframe-DzC97elN.js";import{b as o}from"./SearchField-D-nsUeta.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BRwTAYgV.js";import"./FieldBase-CCQqXbf-.js";import"./Typography-CtPp6NJn.js";import"./useHighlightedText-w8ugv_c2.js";import"./Field-B6KkaL6q.js";import"./Label-CsRR5HcT.js";import"./Input-DIyKL79r.js";import"./useMenu-BjgtGKwv.js";import"./MenuListItem-CXsNShPW.js";import"./MenuListHeading-BozM-APn.js";import"./MenuItem-D6uXh7L1.js";import"./ItemMedia-BZutnkw1.js";import"./Avatar-B0Bwnqej.js";import"./AvatarGroup-CKA1h7_5.js";import"./Checkmark-FE2XL59D.js";import"./ItemLabel-DpV5tQzf.js";import"./Heading-DiLLFIwR.js";import"./ItemControls-zCivkuXf.js";import"./Badge-XkpX5Mm7.js";import"./Tooltip-BXMPu0h3.js";import"./ChevronRight-DVYABLGR.js";import"./index-lcqP_0Eh.js";import"./InformationSquare-B8cGLTDj.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
