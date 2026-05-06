import{r as i,j as c}from"./iframe-Cppd0qv6.js";import{M as o}from"./SearchField-Cfz4mYX1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BRImx9w3.js";import"./MagnifyingGlass-D5_sNBXy.js";import"./useId-BBgZM5Xr.js";import"./XMark-xtLLERRk.js";import"./FieldBase-AUbtsXZu.js";import"./Typography-CFy91Abt.js";import"./useHighlightedText-CnlmbfHa.js";import"./Skeleton-DZL_2b5i.js";import"./Label-BZYzljw4.js";import"./index-DZ9ad6Vq.js";import"./use-merge-refs-BVudX8AY.js";import"./lite-DaUVFjkg.js";import"./Input-BKVpgPJL.js";import"./input-DhtF3MwF.js";import"./Button-DZtlkh8w.js";import"./button-DXqTFqXv.js";import"./MenuListItem-BHtHmzZq.js";import"./MenuListHeading-DGbRdhBr.js";import"./MenuItem-DujpBTEw.js";import"./ItemMedia-B28DyjI4.js";import"./Avatar-C8BEFMoW.js";import"./AvatarGroup-CkQ-nr_4.js";import"./Icon-DYZqEJGr.js";import"./Checkmark-Ci2lQnJg.js";import"./Heading-CVWk1BMK.js";import"./ItemControls-D1uxt3OD.js";import"./ChevronRight-CWvUN_3J.js";import"./Badge-DKrs0UA7.js";import"./Tooltip-B3YY3plR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Dh0AdFxf.js";import"./InformationSquare-C6gp2qmA.js";const K={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
