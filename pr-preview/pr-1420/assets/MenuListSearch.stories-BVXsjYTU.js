import{aa as i,a7 as c}from"./iframe-BbHZTISi.js";import{b as o}from"./SearchField-DJUCyIg2.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-C6rTQxQT.js";import"./FieldBase-Di9G28SV.js";import"./Typography-Ckv3AOJx.js";import"./useHighlightedText-BqQK_DfD.js";import"./Field-D9Cr4opO.js";import"./Label-DhhTw6wz.js";import"./Input-B1Y3KbZD.js";import"./useMenu-Bq15wZBe.js";import"./MenuListItem-DGvsWI69.js";import"./MenuListDivider-Dx9O9cQW.js";import"./MenuListHeading-CPr8ol3d.js";import"./MenuItem-CHBZGQXu.js";import"./ItemMedia-C2Z0jrya.js";import"./Avatar-C_TtduNz.js";import"./AvatarGroup-BedFE_X6.js";import"./Checkmark-DBqEBMWV.js";import"./ItemLabel-CDU57d8k.js";import"./Heading-Bg_B2C5V.js";import"./ItemControls-CSWL4roz.js";import"./Badge-DQBHy5Q9.js";import"./Tooltip-KX6NnDMS.js";import"./ChevronRight-BedwSMvr.js";import"./InformationSquare-5U7NjUWT.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
