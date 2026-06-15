import{aa as i,a7 as c}from"./iframe-Dr1YYpI1.js";import{b as o}from"./SearchField-Cir7dqyx.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DOqx6Pwx.js";import"./FieldBase-CyLGbTYK.js";import"./Typography-CAIidHgh.js";import"./useHighlightedText-BV18x4ez.js";import"./Field-CFwGDJPk.js";import"./Label-CGK745vw.js";import"./Input-Brt0jiez.js";import"./useMenu-BbXnEU1n.js";import"./MenuListItem-BFvVa6a8.js";import"./MenuListDivider-DIxbGzVU.js";import"./MenuListHeading-BfYNlaNe.js";import"./MenuItem-CTIXytBa.js";import"./ItemMedia-BpxSm7tv.js";import"./Avatar-5MYoUnaT.js";import"./AvatarGroup-qKVf7nyJ.js";import"./Checkmark-BLry8rVn.js";import"./ItemLabel-CM1gzuiQ.js";import"./Heading-BD9oLNEa.js";import"./ItemControls-DQl8k1jC.js";import"./Badge-DlA625G6.js";import"./Tooltip-CpSJxiAh.js";import"./ChevronRight-F0aXUvpz.js";import"./index-CjeWyC4B.js";import"./InformationSquare-zR3kX6_5.js";const k={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const w=["Default","WithState"];export{t as Default,e as WithState,w as __namedExportsOrder,k as default};
