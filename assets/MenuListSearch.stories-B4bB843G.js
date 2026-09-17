import{aa as i,a7 as c}from"./iframe-BlyVQ5Wf.js";import{b as o}from"./SearchField-DB7B9m_1.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DUa4q_J4.js";import"./FieldBase-CZEUpIPU.js";import"./Typography-xETneU90.js";import"./useHighlightedText-DCg_XHxB.js";import"./Field-CitCeqKK.js";import"./Label-B4XhPvWK.js";import"./Input-7ZkrUdZt.js";import"./useMenu-DUnPL890.js";import"./MenuListItem-u2C1cR8C.js";import"./MenuListDivider-DBzJeO3_.js";import"./MenuListHeading-HVvc_FIB.js";import"./MenuItem-Bv74nrne.js";import"./ItemMedia-BlQhkodk.js";import"./Avatar-DQIgsQd2.js";import"./AvatarGroup-6IOgo5me.js";import"./Checkmark-CAhepm8i.js";import"./ItemLabel-CF-a0vLD.js";import"./Heading-hWvyrxAT.js";import"./ItemControls-B0XNXszg.js";import"./Badge-BWoBgQxU.js";import"./Tooltip-DIerloK1.js";import"./ChevronRight-C0zIwyjD.js";import"./InformationSquare-CSNu4leW.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
