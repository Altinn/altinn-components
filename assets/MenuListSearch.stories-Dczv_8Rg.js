import{aa as i,a7 as c}from"./iframe-BBxI6Qoj.js";import{b as o}from"./SearchField-CTzRwjSn.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BMZG2bcC.js";import"./FieldBase-De9CwOeM.js";import"./Typography-DsE98WBK.js";import"./useHighlightedText-CESRz6Ap.js";import"./Field-CklQ3uRY.js";import"./Label-DAepOqrA.js";import"./Input-C6iRvbsc.js";import"./useMenu-B76EeFEP.js";import"./MenuListItem-D68tduCT.js";import"./MenuListHeading-lkQwQf3s.js";import"./MenuItem-B1Q66lNx.js";import"./ItemMedia-vu0P71y8.js";import"./Avatar-DrVCUDP7.js";import"./AvatarGroup-D15nbx4o.js";import"./Checkmark-CSwkO33y.js";import"./ItemLabel-2sb7Udx3.js";import"./Heading-D61lhVl1.js";import"./ItemControls-BooS5V5d.js";import"./Badge-BWCWk7xl.js";import"./Tooltip-DgvofOl5.js";import"./ChevronRight-DVToFFYf.js";import"./index-CrzqWcTU.js";import"./InformationSquare-DpMeWUxz.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
