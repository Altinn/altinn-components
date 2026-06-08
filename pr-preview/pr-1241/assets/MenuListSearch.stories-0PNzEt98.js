import{aa as i,a7 as c}from"./iframe-KbHODQgb.js";import{b as o}from"./SearchField-BOprvfZ0.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-Db52e0Xc.js";import"./FieldBase-Vfg8qV6A.js";import"./Typography-C9K693Jo.js";import"./useHighlightedText-uGguOCwY.js";import"./Field-B8zKs9Bz.js";import"./Label-C3jcdxRS.js";import"./Input-DwLHHyGz.js";import"./useMenu-veT1adJt.js";import"./MenuListItem-D3mLd2IU.js";import"./MenuListHeading-BPNZa_yh.js";import"./MenuItem-BP2R6FfU.js";import"./ItemMedia-vwuqAhM8.js";import"./Avatar-DL544SyI.js";import"./AvatarGroup-CCjx5RK0.js";import"./Checkmark-CO83o23q.js";import"./ItemLabel-BW6ywGNt.js";import"./Heading-jxV4Y0yK.js";import"./ItemControls-BYcmr1lT.js";import"./Badge-MoiWNolG.js";import"./Tooltip-BDxQfQSw.js";import"./ChevronRight-wplb_UH2.js";import"./index-DNTFCYRR.js";import"./InformationSquare-DCyKofJQ.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
