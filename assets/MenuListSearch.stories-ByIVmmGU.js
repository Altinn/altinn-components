import{aa as i,a7 as c}from"./iframe-Bg-ykIGY.js";import{b as o}from"./SearchField-BC3zApJG.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-D8mkQKeK.js";import"./FieldBase-DJSWyb1T.js";import"./Typography-DBpPrukr.js";import"./useHighlightedText-pfd0QjZv.js";import"./Field-CtkuJ2u8.js";import"./Label-Bd0qu7F0.js";import"./Input-DE7Whw6H.js";import"./useMenu-TQu19WT_.js";import"./MenuListItem-mJ40Xt43.js";import"./MenuListDivider-SxHGHgdX.js";import"./MenuListHeading-CGdgP7xn.js";import"./MenuItem-Do53kNn7.js";import"./ItemMedia-CbKN8wGb.js";import"./Avatar-DcnAq-Om.js";import"./AvatarGroup-BOIk740D.js";import"./Checkmark-DLRr0XeX.js";import"./ItemLabel-C7izt9pc.js";import"./Heading-BKVhZ0mC.js";import"./ItemControls-ChQuM1Jl.js";import"./Badge-DsOcGMcG.js";import"./Tooltip-DQBCcEkE.js";import"./ChevronRight-BubW3AYp.js";import"./InformationSquare-CVG9J0Nh.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
