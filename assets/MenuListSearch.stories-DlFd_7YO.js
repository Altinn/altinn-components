import{r as i,j as c}from"./iframe-CK12xbO6.js";import{M as o}from"./SearchField-CfLtnFna.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DS2SSX1f.js";import"./MagnifyingGlass-qxU1ofSJ.js";import"./useId-CIOYGEMY.js";import"./XMark-MadrIoK8.js";import"./FieldBase-NrhOHdDA.js";import"./Typography-PIwVlbiP.js";import"./useHighlightedText-DdOMnBlO.js";import"./Skeleton-CLQkeaUO.js";import"./Label-CQOYgwqz.js";import"./index-BCgvi17I.js";import"./use-merge-refs-D5gu3XYQ.js";import"./lite-DaUVFjkg.js";import"./Input-CN33OjmR.js";import"./input-CdhXBgWK.js";import"./Button-DTrhNbku.js";import"./button-D6lkouap.js";import"./MenuListItem-B_ethkwV.js";import"./MenuListHeading-CCkIOc1e.js";import"./MenuItem-DjmA2GJO.js";import"./ItemMedia-XHYq4GSc.js";import"./Avatar-CjYl4qzD.js";import"./AvatarGroup-DIAmYFyU.js";import"./Icon-BHUPQGzt.js";import"./Checkmark-DQBecNO6.js";import"./Heading-Drr-of_9.js";import"./ItemControls-B1M2j2tm.js";import"./ChevronRight-DxL2oOG5.js";import"./Badge-BBKRgbs4.js";import"./Tooltip-BdqmcG89.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BM6Zh5Qq.js";import"./InformationSquare-C5QsI1Pb.js";const K={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
