import{r as i,j as c}from"./iframe-BWWyepKi.js";import{M as o}from"./SearchField-BuZQEnM8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fkRlyifr.js";import"./MagnifyingGlass-B591vdqr.js";import"./useId-CMCVT55W.js";import"./XMark-DJOirLMA.js";import"./FieldBase-DnRTsvox.js";import"./Typography-C9vgo_J4.js";import"./useHighlightedText-BYfI8EMJ.js";import"./Skeleton-CYDyiFkf.js";import"./Label-DYc4A36I.js";import"./index-2Prco8uk.js";import"./use-merge-refs-CbLzoZkL.js";import"./lite-DaUVFjkg.js";import"./Input-BcqR7Mo_.js";import"./input-CuS4pR7j.js";import"./Button-DaLP9UzX.js";import"./button-dq33hCwG.js";import"./MenuListItem-uASMHa_1.js";import"./MenuListHeading-CgclVl9k.js";import"./MenuItem-Dk1uy6my.js";import"./ItemMedia-h4TQiEvV.js";import"./Avatar-CiKCHN1S.js";import"./AvatarGroup-DPHuhQ41.js";import"./Icon-w9oNx8pI.js";import"./Checkmark-C84HjHaR.js";import"./Heading-DQYelGqr.js";import"./ItemControls-jVI2cRmn.js";import"./ChevronRight-I2Pyvoyr.js";import"./Badge-CiufGa4u.js";import"./Tooltip-C4xENPhK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BnIxk9FT.js";import"./InformationSquare-WPPzSpdY.js";const K={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const N=["Default","WithState"];export{t as Default,r as WithState,N as __namedExportsOrder,K as default};
