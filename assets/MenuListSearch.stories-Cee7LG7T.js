import{aa as i,a7 as c}from"./iframe-BOq385O8.js";import{b as o}from"./SearchField-1cIkQLXt.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DLwuof1g.js";import"./FieldBase-SENAbJS5.js";import"./Typography-DYb-ep--.js";import"./useHighlightedText-COTrDIB8.js";import"./Field-BAObIoZk.js";import"./Label-CJalMe_4.js";import"./Input-B8j-6nyc.js";import"./useMenu-RUc5K2KC.js";import"./MenuListItem-C3dH633T.js";import"./MenuListDivider-DW1VkhOq.js";import"./MenuListHeading-B04brtcm.js";import"./MenuItem-C887Ld9X.js";import"./ItemMedia-BFjKYKIC.js";import"./Avatar-DGnXzkTF.js";import"./AvatarGroup-C-pwgfnB.js";import"./Checkmark-BfJs351m.js";import"./ItemLabel-32-F56Tw.js";import"./Heading-BGbBHiZX.js";import"./ItemControls-qKJDjHzO.js";import"./Badge-IhlpDjWl.js";import"./Tooltip-HwSyglqV.js";import"./ChevronRight-8gth-Lkl.js";import"./InformationSquare-ChpInVUG.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
