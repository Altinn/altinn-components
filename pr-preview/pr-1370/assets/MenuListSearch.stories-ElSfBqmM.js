import{aa as i,a7 as c}from"./iframe-DK26OyRD.js";import{b as o}from"./SearchField-Mgah0vbC.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BHP7DrS9.js";import"./FieldBase-BNgybH8j.js";import"./Typography-DLY6k0s2.js";import"./useHighlightedText-dRdWwo97.js";import"./Field-CP0Ba6gq.js";import"./Label-BicRbD_9.js";import"./Input-DpIg0EIy.js";import"./useMenu-0kp9W_Tl.js";import"./MenuListItem-CCTq2KJp.js";import"./MenuListDivider-DYsLXAeP.js";import"./MenuListHeading-BjuGDozt.js";import"./MenuItem-X5ltzLjc.js";import"./ItemMedia-eL3WoD14.js";import"./Avatar-BffuF9Fo.js";import"./AvatarGroup-jikhFLm8.js";import"./Checkmark-CX2TKrXP.js";import"./ItemLabel-DbTlGETX.js";import"./Heading-KMM5EtCs.js";import"./ItemControls-DNRsDyv1.js";import"./Badge-DJCWLgdY.js";import"./Tooltip-FdBCCTre.js";import"./ChevronRight-CgtnVZss.js";import"./InformationSquare-f4aulv5D.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
