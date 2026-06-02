import{aa as i,a7 as c}from"./iframe-Ci8DJ-6R.js";import{b as o}from"./SearchField-BI6hQSM3.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass--VnpSKzI.js";import"./FieldBase-CJmJ_FUR.js";import"./Typography-C-nn41yV.js";import"./useHighlightedText-CMND7wU2.js";import"./Field-C7mGyyvw.js";import"./Label-BZiKx0Le.js";import"./Input-DWxDHqSK.js";import"./useMenu-7RMszhcf.js";import"./MenuListItem-Cpkt8LLi.js";import"./MenuListHeading-CkHpUapY.js";import"./MenuItem-CLCRatEV.js";import"./ItemMedia-D2PQb4gS.js";import"./Avatar-D3AIreGS.js";import"./AvatarGroup-D3N3OV8x.js";import"./Checkmark-V7YKXO-0.js";import"./ItemLabel-D6hw0WzI.js";import"./Heading-CWZTf72r.js";import"./ItemControls-DXMoT8B2.js";import"./Badge-CVr9GptX.js";import"./Tooltip-CGvNbStB.js";import"./ChevronRight-BEnuMmPo.js";import"./index-dwvgmSh8.js";import"./InformationSquare-CEM0wkOI.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
