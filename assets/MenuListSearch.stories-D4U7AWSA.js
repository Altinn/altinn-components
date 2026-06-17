import{aa as i,a7 as c}from"./iframe-CGVyzYP6.js";import{b as o}from"./SearchField-Dki50BLg.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-Vm5pwk0c.js";import"./FieldBase-CPq342qa.js";import"./Typography-CpGYIokR.js";import"./useHighlightedText-Bh9EAdhA.js";import"./Field-D0ZvmoXg.js";import"./Label-Cy3PFObt.js";import"./Input-ChwQfPxo.js";import"./useMenu-DakKUenW.js";import"./MenuListItem-BZZ7Na45.js";import"./MenuListDivider-rcUBnQ13.js";import"./MenuListHeading-Dp87R0C9.js";import"./MenuItem-D-GQTJGG.js";import"./ItemMedia-DPok0_Uu.js";import"./Avatar-DDHY9yxs.js";import"./AvatarGroup-B_UwXOMR.js";import"./Checkmark-pskdQzRC.js";import"./ItemLabel-C1oepsPk.js";import"./Heading-EfRG8byd.js";import"./ItemControls-DA3hAeY8.js";import"./Badge-DjC88ORp.js";import"./Tooltip-BCyYy-oX.js";import"./ChevronRight-_qaR5Ukf.js";import"./InformationSquare-CCTfPPnt.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
